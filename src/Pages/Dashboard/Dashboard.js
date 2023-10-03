import "./Dashboard.css";
import { AiOutlineFire } from "react-icons/ai";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard__container">
        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            174
          </p>
          <h4>Total Calories Burned</h4>
        </div>

        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            174
          </p>
          <h4>Total Calories Consumed</h4>
        </div>

        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            174
          </p>
          <h4>Total Calories Goal</h4>
        </div>

        <div className="dashboard__card">
          <p>
            <AiOutlineFire />
            174
          </p>
          <h4>Remaining Calories to Goal</h4>
        </div>
      </div>
    </div>
  );
};
