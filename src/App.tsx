import { useState, useEffect } from "react";
import "./App.css";
import RestaurantCard from "./components/RestaurantCard";
import { RESTAURANTS } from "./constants/restaurants";
import randomInt from "./utils/randomInt";
import { appendRow } from "./utils/api";

const NOT_SELECTED = 0;
const SELECTED_A = 1;
const SELECTED_B = 2;

console.log(RESTAURANTS.length)
function App() {
  const [restaurantAIndex, setRestaurantAIndex] = useState(0);
  const [restaurantBIndex, setRestaurantBIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(NOT_SELECTED);

  function updateRestaurants() {
    const randomA: number = randomInt(0, RESTAURANTS.length);
    const randomB: number = randomInt(0, RESTAURANTS.length);

    setRestaurantAIndex(randomA);
    setRestaurantBIndex(randomB);
  }

  useEffect(() => {
    updateRestaurants();
  }, []);

  const restaurantProps = (index: number, selectedType: number) => ({
    ...RESTAURANTS[index],
    selected: selected === selectedType,
    onClick: () => {
      setSelected(selectedType);
    },
  });

  async function submitPreference(): Promise<void> {
    if (selected === NOT_SELECTED) {
      alert("please select one");
      return;
    }
    const restaurantA = RESTAURANTS[restaurantAIndex];
    const restaurantB = RESTAURANTS[restaurantBIndex];

    const entry: PreferenceEntry = {
      restaurant_id1: restaurantAIndex,
      rating1: restaurantA.rating,
      reviews1: restaurantA.review_count,
      restaurant_id2: restaurantBIndex,
      rating2: restaurantB.rating,
      reviews2: restaurantB.review_count,
      preference: selected!,
    };

    appendRow(entry).then((res) => {
      console.log(res.data);
    });

    updateRestaurants();
    setSelected(NOT_SELECTED);
  }

  return (
    <>
      <h2 style={{ marginBottom: "3rem" }}>Which restaurant would you pick?</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          columnGap: "4rem",
          rowGap: "2rem",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <RestaurantCard {...restaurantProps(restaurantAIndex, SELECTED_A)} />
        <RestaurantCard {...restaurantProps(restaurantBIndex, SELECTED_B)} />
      </div>
      <button onClick={submitPreference} style={{ marginTop: "2rem" }}>
        Submit
      </button>
    </>
  );
}

export default App;
