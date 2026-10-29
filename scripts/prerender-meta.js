/**
 * Runs after `craco build`. Writes one HTML file per page into build/ so that
 * crawlers and link-preview bots that do NOT run JavaScript still see each
 * page's own <title>, meta description, canonical URL and social tags.
 *
 * - Pages and their titles/descriptions come from scripts/seo-routes.json.
 *   If you change a page's title or description in the code, update it there too.
 * - Adds "rewrite" rules to build/_redirects so /about serves build/about.html.
 * - Never fails the build: on any error it logs a warning and leaves build/ as is.
 */
const fs = require("fs");
const path = require("path");

const DOMAIN = "https://kresha.online";
const BUILD = path.join(__dirname, "..", "build");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function setMeta(html, attr, name, value) {
  const re = new RegExp(`<meta\\s+${attr}="${name}"\\s+content="[^"]*"\\s*/?>`, "i");
  const tag = `<meta ${attr}="${name}" content="${esc(value)}" data-rh="true"/>`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `${tag}</head>`);
}

function render(template, { path: route, title, description }) {
  const url = DOMAIN + (route === "/" ? "/" : route);
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = html.replace(/<link\s+rel="canonical"[^>]*>/i, "");
  html = html.replace("</head>", `<link rel="canonical" href="${url}" data-rh="true"/></head>`);
  return html;
}

try {
  const routes = JSON.parse(fs.readFileSync(path.join(__dirname, "seo-routes.json"), "utf8"));
  const indexPath = path.join(BUILD, "index.html");
  const template = fs.readFileSync(indexPath, "utf8");
  const rules = [];

  for (const r of routes) {
    const html = render(template, r);
    if (r.path === "/") {
      fs.writeFileSync(indexPath, html);
      continue;
    }
    const file = path.join(BUILD, r.path.replace(/^\//, "") + ".html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    rules.push(`${r.path}  ${r.path}.html  200`);
  }

  // Specific rewrites must come before the catch-all "/* /index.html 200".
  const redirectsPath = path.join(BUILD, "_redirects");
  const existing = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, "utf8") : "";
  fs.writeFileSync(redirectsPath, rules.join("\n") + "\n" + existing);
  console.log(`prerender-meta: wrote ${routes.length} pages with canonical + meta tags`);
} catch (err) {
  console.warn("prerender-meta: skipped (" + err.message + ")");
}
