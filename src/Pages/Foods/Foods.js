import { RxOpacity } from "react-icons/rx";
import { FoodCard } from "../../Components/FoodCard/FoodCard";
import FoodModal from "../../Components/Modal/FoodModal";
import "./Foods.css";

export const Foods = () => {
  const foods = [
    {
      foodName: "Banana",
      calories: 105,
      protein: 1.3,
      carbohydrates: 27,
      fat: 0.3,
    },
    {
      foodName: "Spaghetti with Tomato Sauce",
      calories: 350,
      protein: 10,
      carbohydrates: 70,
      fat: 2,
    },
    {
      foodName: "Grilled Salmon",
      calories: 367,
      protein: 40,
      carbohydrates: 0,
      fat: 22,
    },
    {
      foodName: "Greek Salad",
      calories: 280,
      protein: 7,
      carbohydrates: 10,
      fat: 24,
    },
    {
      foodName: "Cheeseburger",
      calories: 350,
      protein: 13,
      carbohydrates: 33,
      fat: 18,
    },
  ];
  return (
    <div className="foods">
      <h1>Foods</h1>
      <div className="foods__container">
        {foods.map((food) => (
          <FoodCard food={food} />
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
