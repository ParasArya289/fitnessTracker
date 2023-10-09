import "./Dashboard.css";
import { AiOutlineFire } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const exercises = useSelector((state) => state.exercises);
  const foods = useSelector((state) => state.foods);
  const goals = useSelector((state) => state.goals);

  const totalCaloriesBurned = exercises.reduce(
    (acc, { caloriesBurnt }) => acc + caloriesBurnt,
    0
  );
  const totalCaloriesConsumed = foods.reduce(
    (acc, { calories }) => acc + calories,
    0
  );
  const totalCaloriesGoal = goals.reduce(
    (acc, { targetCaloriesValue }) => acc + targetCaloriesValue,
    0
  );
  const totalCaloriesGoalRemaining = goals.reduce(
    (acc, { targetCaloriesValue, status }) =>
      status === "Achieved" ? acc : acc + targetCaloriesValue,
    0
  );

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__container">
        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            {totalCaloriesBurned}
          </p>
          <h4>Total Calories Burned</h4>
          <img src="dashboardCardBg.svg" />
        </div>

        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            {totalCaloriesConsumed}
          </p>
          <h4>Total Calories Consumed</h4>
          <img src="dashboardCardBg.svg" />
        </div>

        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            {totalCaloriesGoal}
          </p>
          <h4>Total Calories Goal</h4>
          <img src="dashboardCardBg.svg" />
        </div>

        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            {totalCaloriesGoalRemaining}
          </p>
          <h4>Remaining Calories to Goal</h4>
          <img src="dashboardCardBg.svg" />
        </div>
      </div>
    </div>
  );
};
