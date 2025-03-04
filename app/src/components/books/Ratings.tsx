import { Star, StarHalf } from "@phosphor-icons/react";
import { FC } from "react";

type RatingsProps = {
  ratingsCount: number;
  averageRating: number;
};

export const Ratings: FC<RatingsProps> = ({ ratingsCount, averageRating }) => {
  if (!ratingsCount || !averageRating) {
    return <p>No ratings</p>;
  }

  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="flex flex-row gap-4">
        <Star size={32} className="" fill="gold" weight="fill" />
        <Star size={32} className="" fill="gold" weight="fill" />
        <Star size={32} className="" fill="gold" weight="fill" />
        <StarHalf size={32} weight="fill" fill="gold" />
        <Star size={32} />
      </div>
      <div>
        <p>{ratingsCount} reviews</p>
      </div>
    </div>
  );
};
