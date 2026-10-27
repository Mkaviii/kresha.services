import { Helmet } from "react-helmet-async";
import { SITE } from "../data/content";

const OG_IMAGE = `${SITE.domain}/og-image.jpg`;

export const Seo = ({ title, description, path = "/", jsonLd }) => {
  const url = `${SITE.domain}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Kresha Services — Grow Your Business, Digitally. Digital marketing agency in Chennai & Erode." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Kresha Services — Grow Your Business, Digitally." />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default Seo;
