interface ExpectedProps extends RestaurantAttributes {
  selected: boolean;
  onClick: () => void;
}

export default function RestaurantCard(restaurant: ExpectedProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        border: `2px solid ${restaurant.selected ? "#47d42f" : "gray"}`,
        padding: "0.5rem",
        cursor: "pointer",
      }}
      onClick={restaurant.onClick}
    >
      <div>{restaurant.rating} stars</div>
      <div>{restaurant.review_count} reviews</div>
    </div>
  );
}
