import { useEffect, useState } from "react";
import axios from "axios";
import { PenLine } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

import { API, HAS_BACKEND } from "../lib/api";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!HAS_BACKEND) {
      setLoaded(true);
      return;
    }
    axios
      .get(`${API}/posts`)
      .then((r) => setPosts(r.data?.posts || []))
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  return (
    <>
      <Seo
        title="Blog — Digital Marketing Insights for Indian Businesses | Kresha Services"
        description="Practical digital marketing guides for businesses in Tamil Nadu — SEO, Google Ads, WhatsApp marketing and more. From the Kresha Services team."
        path="/blog"
      />

      <PageHero
        eyebrow="Blog"
        title="Insights for growing businesses."
        sub="Practical, jargon-free guides on SEO, ads, WhatsApp marketing and websites — written for Indian SMBs."
      />

      <section className="section">
        <div className="wrap">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="blog-posts-grid">
              {posts.map((p) => (
                <a key={p.id} href={`/blog/${p.slug}`} data-testid={`blog-post-${p.slug}`} className="card group p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)]">
                  <h2 className="text-lg">{p.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{p.excerpt}</p>
                </a>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card mx-auto flex max-w-xl flex-col items-center gap-4 p-12 text-center" data-testid="blog-empty-state">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#159BD7]/10 text-[#159BD7]">
                  <PenLine size={24} />
                </span>
                <h2 className="text-xl">Insights are on the way</h2>
                <p className="max-w-sm text-[14.5px] leading-relaxed text-[#4B5563]">
                  We're writing practical digital-marketing guides for Tamil Nadu businesses. The
                  first posts land here soon — meanwhile, get a free strategy call and start growing
                  today.
                </p>
                <a href="/contact" data-testid="blog-empty-cta" className="btn btn-primary mt-2">Get Free Strategy Call</a>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
