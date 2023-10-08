import { ExerciseCard } from "../../Components/ExerciseCard/ExerciseCard";
import "./Exercises.css";
import { RxLightningBolt } from "react-icons/rx";
import ExerciseModal from "../../Components/Modal/ExerciseModal";
import { useSelector, shallowEqual } from "react-redux";
import { PlaceholderCard } from "../../Components/PlaceholderCard/PlaceholderCard";

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
  const exercises = useSelector((state) => state.exercises, shallowEqual);
  const loading = useSelector((state) => state.loading);
  const exerciseLoading = useSelector((state) => state.exerciseLoading);

  return (
    <div className="exercises">
      <h1>Exercises</h1>
      {loading && <h4>Loading...</h4>}
      <div className="exericise__container">
        {exerciseLoading.adding && <PlaceholderCard />}
        {exercises.map((exercise) => (
          <ExerciseCard key={exercies._id} {...exercise} />
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
