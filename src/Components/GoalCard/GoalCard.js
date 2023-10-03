import { AiFillFire, AiOutlineDelete } from "react-icons/ai";
import { RxTarget } from "react-icons/rx";
import "./GoalCard.css";

export const GoalCard = ({ goal }) => {
  const formatDate = () => {
    const date = new Date(goal.targetDate);
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };
  return (
    <div className="goalCard">
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
      <AiOutlineDelete className="goalCard__delete" />
    </div>
  );
};
