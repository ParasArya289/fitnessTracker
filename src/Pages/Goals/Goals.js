import { RxTarget } from "react-icons/rx";
import { useSelector } from "react-redux";
import { GoalCard } from "../../Components/GoalCard/GoalCard";
import GoalModal from "../../Components/Modal/GoalModal";
import { PlaceholderCard } from "../../Components/PlaceholderCard/PlaceholderCard";
import "./Goals.css";

export const Goals = () => {
  const goals = useSelector((state) => state.goals);
  const loading = useSelector((state) => state.loading);
  const goalLoading = useSelector((state) => state.goalLoading);
  return (
    <div className="goals">
      <h1>Goals</h1>
      {loading && <h4>Loading...</h4>}
      <div className="goals__container">
        {goalLoading.adding && <PlaceholderCard />}
        {goals.map((goal) => (
          <GoalCard key={goal._id} goal={goal} />
        ))}
      </div>
      <GoalModal>
        <button>
          <RxTarget />
        </button>
      </GoalModal>
    </div>
  );
};
