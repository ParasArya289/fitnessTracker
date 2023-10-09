import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeEntry } from "../../dataActions";
import "./FoodCard.css";

export const FoodCard = ({
  foodName,
  calories,
  protein,
  carbohydrates,
  fat,
  _id,
}) => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  const foodLoading = useSelector((state) => state.foodLoading);
  const deleteFoodHandler = () => {
    dispatch(removeEntry({ type: "foods", _id }));
    setCurrentId(_id);
  };
  return (
    <div
      data-deleting={foodLoading.deleting && currentId === _id}
      className={`foodCard`}
    >
      <h4>{foodName}</h4>
      <p>
        Calories {calories}, Protein {protein} <br /> Carbs {carbohydrates}, Fat{" "}
        {fat}
      </p>
      <img
        draggable="false"
        src="https://images.pexels.com/photos/6428245/pexels-photo-6428245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={foodName}
      />
      <AiOutlineDelete
        onClick={deleteFoodHandler}
        className="foodCard__delete"
      />
    </div>
  );
};
