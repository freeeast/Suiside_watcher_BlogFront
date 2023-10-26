import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Suiside Watcher</div>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/BlogWrite">Add Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Log_In">LogIN</Link>
          </li>
          <li>
            <Link to="/Blog_History">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
