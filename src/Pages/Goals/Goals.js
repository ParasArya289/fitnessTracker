import { RxTarget } from "react-icons/rx";
import { useSelector } from "react-redux";
import { GoalCard } from "../../Components/GoalCard/GoalCard";
import GoalModal from "../../Components/Modal/GoalModal";
import "./Goals.css";

export const Goals = () => {
  // const goals = [
  //   {
  //     goalName: "Weight Loss",
  //     goalDescription: "Lose 10 pounds in 2 months.",
  //     targetDate: "2023-12-31",
  //     targetCaloriesValue: 1800,
  //     status: "In Progress",
  //   },
  //   {
  //     goalName: "Muscle Gain",
  //     goalDescription: "Gain 5 pounds of muscle mass.",
  //     targetDate: "2023-11-15",
  //     targetCaloriesValue: 2500,
  //     status: "In Progress",
  //   },
  //   {
  //     goalName: "Marathon Training",
  //     goalDescription: "Run a marathon in 6 months.",
  //     targetDate: "2024-04-30",
  //     targetCaloriesValue: null,
  //     status: "In Progress",
  //   },
  //   {
  //     goalName: "Maintain Healthy Diet",
  //     goalDescription: "Consume balanced meals daily.",
  //     targetDate: null,
  //     targetCaloriesValue: 2000,
  //     status: "Achieved",
  //   },
  //   {
  //     goalName: "Abandon Sedentary Lifestyle",
  //     goalDescription: "Engage in regular physical activity.",
  //     targetDate: null,
  //     targetCaloriesValue: null,
  //     status: "Abandoned",
  //   },
  // ];
  const goals = useSelector(state=>state.goals)
  const loading = useSelector(state=>state.loading)
  return (
    <div className="goals">
      <h1>Goals</h1>
      {loading&&<h4>Loading...</h4>}
      <div className="goals__container">
        {goals.map((goal) => (
          <GoalCard goal={goal} />
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
