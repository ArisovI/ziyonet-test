import StarRatings from "react-star-ratings";

type IStarsProps = {
  rating: number;
};

export const Stars: React.FC<IStarsProps> = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#fab005"
      starDimension="20px"
      starSpacing="1px"
    />
  );
};
