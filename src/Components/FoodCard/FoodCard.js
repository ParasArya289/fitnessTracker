import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeEntry } from "../../dataActions";
import "./FoodCard.css";

export const FoodCard = ({ food }) => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  const foodLoading = useSelector((state) => state.foodLoading);
  const deleteFoodHandler = () => {
    dispatch(removeEntry({ type: "foods", _id: food._id }));
    setCurrentId(food._id);
  };
  return (
    <div
      className={`foodCard ${
        foodLoading.deleting && currentId === food._id && "placeholderCard"
      }`}
    >
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
      <AiOutlineDelete
        onClick={deleteFoodHandler}
        className="foodCard__delete"
      />
    </div>
  );
};
