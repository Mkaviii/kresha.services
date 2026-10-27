import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PenLine } from "lucide-react";
import { Seo } from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

import { API, HAS_BACKEND } from "../lib/api";
import { POSTS } from "../data/posts";

export default function BlogPage() {
  const [posts, setPosts] = useState(POSTS);

  useEffect(() => {
    if (!HAS_BACKEND) return;
    axios
      .get(`${API}/posts`)
      .then((r) => {
        const extra = (r.data?.posts || []).filter((x) => !POSTS.some((q) => q.slug === x.slug));
        setPosts([...POSTS, ...extra]);
      })
      .catch(() => {});
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
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  data-testid={`blog-post-${p.slug}`}
                  className="card group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(6,74,145,0.14)]"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      title={p.title}
                      loading="lazy"
                      width="1200"
                      height="800"
                      className="aspect-[3/2] w-full object-cover"
                    />
                  )}
                  <div className="p-7">
                    <h2 className="text-lg">{p.title}</h2>
                    {p.ta && <p className="mt-1 text-[13.5px] font-semibold text-[#159BD7]">{p.ta.title}</p>}
                    <p className="mt-2 text-[14px] leading-relaxed text-[#4B5563]">{p.excerpt}</p>
                  </div>
                </Link>
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
                <Link to="/contact" data-testid="blog-empty-cta" className="btn btn-primary mt-2">Get Free Strategy Call</Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}