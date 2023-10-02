import "./Dashboard.css";
import { AiFillFire,AiOutlineFire } from "react-icons/ai";

export const Dashboard = () => {
  return (
    <div className="dashboard">
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
  );
};
