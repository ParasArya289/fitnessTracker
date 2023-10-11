import { NavLink } from "react-router-dom";
import {
  RxDashboard,
  RxGithubLogo,
  RxTarget,
  RxOpacity,
  RxLightningBolt,
} from "react-icons/rx";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="links" to="/">
          <RxDashboard className="link__icons" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="links" to="/exercises">
          <RxLightningBolt className="link__icons" />
          <span>Exercises</span>
        </NavLink>
        <NavLink className="links" to="/foods">
          <RxOpacity className="link__icons" />
          <span>Foods</span>
        </NavLink>
        <NavLink className="links" to="/goals">
          <RxTarget className="link__icons" />
          <span>Goals</span>
        </NavLink>
        <a
          className="links"
          href="https://github.com/ParasArya289/fitnessTracker"
          target="_blank"
        >
          <RxGithubLogo className="link__icons" />
          <span>Github</span>
        </a>
      </div>
    </nav>
  );
};
