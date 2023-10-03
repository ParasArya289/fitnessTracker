import { exerciseCalories } from "../../Constants";
import "./ExerciseCard.css";
import { AiOutlineDelete,AiOutlineFire } from "react-icons/ai";

export const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exerciseCard">
      
      <h4>{exercise.name}</h4>
      <p>{exerciseCalories[exercise.exerciseType]?.type}</p>
      <p>{exercise.duration} Min</p>
      <p>{exercise.caloriesBurnt} <AiOutlineFire/> </p>
      <img
        src={exerciseCalories[exercise.exerciseType]?.imgSrc}
        alt={exercise.name}
      />
      <AiOutlineDelete className="exerciseCard__delete"/>
    </div>
  );
};
