import classes from "./SearchInformation.module.css";

export function SearchInformation(props) {
  return (
    <div className={classes.information}>
      <p>
        Wynik wyszukiwania słowa {props.wordNameEN}(en) to: {props.wordNameDE}(de)
      </p>
    </div>
  );
}

export default SearchInformation;
