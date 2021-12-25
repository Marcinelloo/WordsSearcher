import Card from "../../ui/Card";

import classes from "./SearchBox.module.css";
import SearchPlace from "./SearchPlace.js";
import firstImg from "./library.jpg";

function SearchBox() {
  return (
    <section className={classes.section}>
      <ul>
        <li>
          <img className={classes.img} src={firstImg} alt="library"></img>
        </li>
        <li>
          <Card>
            <div className={classes.formPading}>
              <div className={classes.control}>
                <SearchPlace />
              </div>
            </div>
          </Card>
        </li>
      </ul>
    </section>
  );
}

export default SearchBox;
