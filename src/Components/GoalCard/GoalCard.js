import { useState } from "react";
import { AiFillFire, AiOutlineDelete } from "react-icons/ai";
import { RxTarget } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeEntry } from "../../dataActions";
import "./GoalCard.css";

export const GoalCard = ({ goal }) => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  const goalLoading = useSelector((state) => state.goalLoading);
  const formatDate = () => {
    const date = new Date(goal.targetDate);
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };
  const deleteFoodHandler = () => {
    dispatch(removeEntry({ type: "goals", _id: goal._id }));
    setCurrentId(goal._id);
  };
  return (
    <div
      data-deleting={goalLoading.deleting && currentId === goal._id}
      className="goalCard"
    >
      <h4>{goal.goalName}</h4>
      <p>{goal.goalDescription}</p>
      {goal.targetDate && <p>Target Date {formatDate()}</p>}
      {goal.targetCaloriesValue && (
        <p>Target Calorie {goal.targetCaloriesValue}</p>
      )}
      <p>{goal.status}</p>
      <img
        draggable="false"
        src="https://images.pexels.com/photos/2233388/pexels-photo-2233388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt={goal.goalName}
      />
      <AiOutlineDelete
        onClick={deleteFoodHandler}
        className="goalCard__delete"
      />
    </div>
  );
};
