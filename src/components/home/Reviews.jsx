import { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import Reveal from "../Reveal";
import { REVIEWS_FALLBACK } from "../../data/content";

import { API, HAS_BACKEND } from "../../lib/api";

const Stars = ({ n }) => (
  <span className="flex gap-0.5" aria-label={`${n} star rating`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className={i < n ? "fill-[#FFBD19] text-[#FFBD19]" : "text-[#D8E0EC]"} />
    ))}
  </span>
);

const GoogleG = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export const Reviews = () => {
  const [data, setData] = useState({ source: "sample", rating: 4.9, reviews: REVIEWS_FALLBACK });

  useEffect(() => {
    if (!HAS_BACKEND) return;
    axios
      .get(`${API}/reviews`)
      .then((r) => {
        if (r.data?.reviews?.length) setData(r.data);
      })
      .catch(() => {});
  }, []);

  return (
    <section data-testid="reviews-section" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">Google Reviews</p>
          <h2 className="text-3xl sm:text-4xl">Proof, straight from customers.</h2>
          <div className="card mt-8 p-7" data-testid="reviews-summary-card">
            <GoogleG />
            <p className="mt-4 text-5xl font-extrabold text-[#064A91]">{data.rating || "4.9"}</p>
            <Stars n={5} />
            <p className="mt-2 text-[13px] font-semibold text-[#4B5563]">Google Reviews</p>
            {data.source === "sample" && (
              <p className="mt-4 rounded-lg bg-[#F5F7FA] px-3 py-2 text-[12px] leading-snug text-[#4B5563]" data-testid="reviews-sample-note">
                Sample preview — the live Google review feed connects here at launch.
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid content-start gap-5 sm:grid-cols-2" data-testid="reviews-cards">
          {data.reviews.slice(0, 4).map((rv, i) => (
            <Reveal key={`${rv.name}-${i}`} delay={i * 0.07} className="h-full">
              <div className="card flex h-full flex-col p-6" data-testid={`review-card-${i}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#064A91] text-[15px] font-extrabold text-white" aria-hidden="true">
                    {rv.name?.[0] || "G"}
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold text-[#064A91]">{rv.name}</span>
                    <span className="block text-[12px] text-[#93A3BD]">{rv.business || "Google review"}</span>
                  </span>
                  <span className="ml-auto"><GoogleGSmall /></span>
                </div>
                <div className="mt-3"><Stars n={rv.stars || 5} /></div>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#4B5563]">"{rv.text}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoogleGSmall = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default Reviews;
