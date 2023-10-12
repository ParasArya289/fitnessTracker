import { RxOpacity } from "react-icons/rx";
import { useSelector } from "react-redux";
import { FoodCard } from "../../Components/FoodCard/FoodCard";
import FoodModal from "../../Components/Modal/FoodModal";
import { PlaceholderCard } from "../../Components/PlaceholderCard/PlaceholderCard";
import "./Foods.css";

export const Foods = () => {
  // const foods = [
  //   {
  //     foodName: "Banana",
  //     calories: 105,
  //     protein: 1.3,
  //     carbohydrates: 27,
  //     fat: 0.3,
  //   },
  //   {
  //     foodName: "Spaghetti with Tomato Sauce",
  //     calories: 350,
  //     protein: 10,
  //     carbohydrates: 70,
  //     fat: 2,
  //   },
  //   {
  //     foodName: "Grilled Salmon",
  //     calories: 367,
  //     protein: 40,
  //     carbohydrates: 0,
  //     fat: 22,
  //   },
  //   {
  //     foodName: "Greek Salad",
  //     calories: 280,
  //     protein: 7,
  //     carbohydrates: 10,
  //     fat: 24,
  //   },
  //   {
  //     foodName: "Cheeseburger",
  //     calories: 350,
  //     protein: 13,
  //     carbohydrates: 33,
  //     fat: 18,
  //   },
  // ];
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
