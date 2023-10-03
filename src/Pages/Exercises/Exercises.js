import { ExerciseCard } from "../../Components/ExerciseCard/ExerciseCard";
import "./Exercises.css";
import { RxLightningBolt } from "react-icons/rx";
import ExerciseModal from "../../Components/Modal/ExerciseModal";

export const Exercises = () => {
  const exercies = [
    {
      name: "Dancing",
      duration: 12,
      exerciseType: "aerobic",
      caloriesBurnt: 180,
    },
    {
      name: "Deadlift",
      duration: 15,
      exerciseType: "strengthTraining",
      caloriesBurnt: 675,
    },
    {
      name: "Savassana",
      duration: 12,
      exerciseType: "yoga",
      caloriesBurnt: 48,
    },
    {
      name: "Morning walk",
      duration: 30,
      exerciseType: "walking",
      caloriesBurnt: 210,
    },
    {
      name: "Morning Cycling",
      duration: 45,
      exerciseType: "cycling",
      caloriesBurnt: 585,
    },
    {
      name: "Evening Running",
      duration: 45,
      exerciseType: "running",
      caloriesBurnt: 540,
    },
  ];
  return (
    <div className="exercises">
      <h1>Exercises</h1>
      <div className="exericise__container">
        {exercies.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
      </div>
      <ExerciseModal>
        <button>
          <RxLightningBolt />
        </button>
      </ExerciseModal>
    </div>
  );
};
