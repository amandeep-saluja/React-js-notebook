import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  totalRatingsString,
}) => {
  return (
    <div className="card w-60 p-5 m-8 shadow-lg bg-pink-50 max-h-80 h-full">
      <img
        className="card-image w-[200px]"
        alt="card-image"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3
        style={{
          fontSize: "20px",
        }}
      >
        {cuisines?.join(", ")}
      </h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestrauntCard;
