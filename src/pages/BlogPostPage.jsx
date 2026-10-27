import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import { CtaBand } from "../components/CtaBand";
import { getPost, POSTS } from "../data/posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const base = getPost(slug);
  const [lang, setLang] = useState("en");
  const post = base && (lang === "ta" && base.ta ? { ...base, ...base.ta } : base);

  if (!post) {
    return (
      <section className="section">
        <div className="wrap text-center">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link to="/blog" className="btn btn-primary mt-6">Back to blog</Link>
        </div>
      </section>
    );
  }

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Seo title={`${post.title} | Kresha Services`} description={post.excerpt} path={`/blog/${post.slug}`} />
      <PageHero eyebrow="Blog" title={post.title} sub={post.excerpt}>
        {base.ta && (
          <div className="flex gap-2" role="group" aria-label="Language">
            <button type="button" onClick={() => setLang("en")} data-testid="lang-en" className={`btn ${lang === "en" ? "btn-primary" : "btn-outline"}`}>English</button>
            <button type="button" onClick={() => setLang("ta")} data-testid="lang-ta" className={`btn ${lang === "ta" ? "btn-primary" : "btn-outline"}`}>தமிழ்</button>
          </div>
        )}
      </PageHero>
      <article className="section">
        <div className="wrap max-w-3xl space-y-5 text-[16px] leading-relaxed text-[#374151]">
          {post.image && <img src={post.image} alt={post.title} width="1200" height="800" className="w-full rounded-2xl" />}
          {post.body.map((b, i) =>
            b.h ? <h2 key={i} className="pt-4 text-2xl font-bold">{b.h}</h2>
            : b.ul ? <ul key={i} className="list-disc space-y-2 pl-6">{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>
            : <p key={i}>{b.p}</p>
          )}
          <p className="pt-4">
            {lang === "ta" ? "தொடர்புடைய சேவை:" : "Related service:"} <Link to={`/services/${post.service}`} className="font-semibold text-[#159BD7] underline">{lang === "ta" ? "Kresha எப்படி உதவ முடியும் என்று பாருங்கள்" : "learn how Kresha can help"}</Link>.
          </p>
          {more.length > 0 && (
            <div className="border-t border-[#E5EAF2] pt-6">
              <h3 className="text-lg font-bold">{lang === "ta" ? "மேலும் வலைப்பதிவுகள்" : "More from the blog"}</h3>
              <ul className="mt-3 space-y-2">
                {more.map((p) => <li key={p.slug}><Link to={`/blog/${p.slug}`} className="text-[#159BD7] underline">{p.title}</Link></li>)}
              </ul>
            </div>
          )}
        </div>
      </article>
      <CtaBand />
    </>
  );
}