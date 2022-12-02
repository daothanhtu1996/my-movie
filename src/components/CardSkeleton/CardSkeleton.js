import Skeleton from "react-loading-skeleton";
const CardSkeleton = () => {
  return (
    <div className="cardSkeleton">
      <div className="left-col">
        <Skeleton circle width={40} height={40} />
      </div>
      <div className="right-col">
        <Skeleton />
      </div>
    </div>
  );
};
export default CardSkeleton;