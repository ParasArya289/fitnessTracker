import { exerciseCalories } from "../../Constants";
import "./ExerciseCard.css";
import { AiOutlineDelete, AiOutlineFire } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeEntry } from "../../dataActions";
import { useState } from "react";

export const ExerciseCard = ({
  name,
  _id,
  exerciseType,
  caloriesBurnt,
  duration,
  imageSrc,
}) => {
  console.log(imageSrc)
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  const exerciseLoading = useSelector((state) => state.exerciseLoading);
  const deleteExerciseHandler = () => {
    dispatch(removeEntry({ type: "exercises", _id: _id }));
    setCurrentId(_id);
  };
  return (
    <div
      className="exerciseCard"
      style={{
        opacity: exerciseLoading.deleting && currentId === _id ? 0.8 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      <h4>{name}</h4>
      <p>{exerciseCalories[exerciseType]?.type}</p>
      <p>{duration} Min</p>
      <p>
        {caloriesBurnt} <AiOutlineFire />{" "}
      </p>
      <img
        src={imageSrc || exerciseCalories[exerciseType]?.imgSrc}
        alt={name}
      />
      <AiOutlineDelete
        tabIndex={"0"}
        className="exerciseCard__delete"
        onClick={deleteExerciseHandler}
      />
    </div>
  );
};
