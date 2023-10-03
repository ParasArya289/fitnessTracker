import { AiOutlineDelete } from "react-icons/ai";
import "./FoodCard.css";

export const FoodCard = ({ food }) => {
  return (
    <div className="foodCard">
      <h4>{food.foodName}</h4>
      <p>
        Calories {food.calories}, Protein {food.protein} <br /> Carbs{" "}
        {food.carbohydrates}, Fat {food.fat}
      </p>
      <img
        draggable="false"
        src="https://images.pexels.com/photos/6428245/pexels-photo-6428245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={food.name}
      />
      <AiOutlineDelete className="foodCard__delete" />
    </div>
  );
};
