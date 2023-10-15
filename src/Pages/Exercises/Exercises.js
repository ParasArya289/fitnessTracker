import { ExerciseCard } from "../../Components/ExerciseCard/ExerciseCard";
import "./Exercises.css";
import { RxLightningBolt } from "react-icons/rx";
import ExerciseModal from "../../Components/Modal/ExerciseModal";
import { useSelector, shallowEqual } from "react-redux";
import { PlaceholderCard } from "../../Components/PlaceholderCard/PlaceholderCard";

export const Exercises = () => {
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
          <ExerciseCard key={exercise._id} {...exercise} />
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
