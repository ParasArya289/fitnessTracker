import { RxOpacity } from "react-icons/rx";
import { useSelector } from "react-redux";
import { FoodCard } from "../../Components/FoodCard/FoodCard";
import FoodModal from "../../Components/Modal/FoodModal";
import { PlaceholderCard } from "../../Components/PlaceholderCard/PlaceholderCard";
import "./Foods.css";

export const Foods = () => {
  const foods = useSelector((state) => state.foods);
  const loading = useSelector((state) => state.loading);
  const foodLoading = useSelector((state) => state.foodLoading);
  return (
    <div className="foods">
      <h1>Foods</h1>
      {loading && <h4>Loading...</h4>}
      <div className="foods__container">
        {foodLoading.adding && <PlaceholderCard />}
        {foods.map((food) => (
          <FoodCard key={food._id} {...food} />
        ))}
      </div>
      <FoodModal>
        <button>
          <RxOpacity />
        </button>
      </FoodModal>
    </div>
  );
};
