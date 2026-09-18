import { ReviewCard, type ReviewItem } from "@/components/landing/review-card";

export function ReviewsSlider({ reviews }: { reviews: ReviewItem[] }) {
  const loop = [...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-20"
      />
      <div className="flex w-max animate-[reviews-marquee_32s_linear_infinite] gap-5 pr-5 motion-reduce:animate-none motion-reduce:overflow-x-auto hover:[animation-play-state:paused]">
        {loop.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            aria-hidden={index >= reviews.length}
            className="w-[85vw] max-w-[380px] shrink-0 sm:w-[380px]"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}
