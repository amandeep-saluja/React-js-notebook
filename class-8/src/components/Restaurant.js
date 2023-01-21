import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <img
        className="card-image"
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
