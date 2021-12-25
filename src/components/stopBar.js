import { Link } from "react-router-dom";
import classes from "./stopBar.module.css";

function StopBar() {
  return (
    <div className={classes.stopBar}>
      <div className={classes.grid}>
        <p className="p-2">WordsSearcher Copyright &copy; 2021 Version: 1.1</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Dictionary</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default StopBar;
