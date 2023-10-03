import { exerciseCalories } from "../../Constants";
import "./ExerciseCard.css";
import { AiOutlineDelete } from "react-icons/ai";

export const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exerciseCard">
      <h4>{exercise.name}</h4>
      <p>{exerciseCalories[exercise.exerciseType]?.type}</p>
      <p>{exercise.duration} Min</p>
      <img
        src={exerciseCalories[exercise.exerciseType]?.imgSrc}
        alt={exercise.name}
      />
      <AiOutlineDelete />
    </div>
  );
};
