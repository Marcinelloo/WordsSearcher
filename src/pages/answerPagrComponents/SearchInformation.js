import classes from "./SearchInformation.module.css";

export function SearchInformation(props) {
  const englishWord =
    props.usedLang === "en" ? props.firstWord : props.secondWord;
  const germanWord =
    props.usedLang === "en" ? props.secondWord : props.firstWord;

  return (
    <div className={classes.information}>
      <p>
        {props.showLang === "en"
          ? `The search result for ${englishWord}(en) is ${germanWord}(de)`
          : `Das Suchergebnis für ${englishWord}(en) lautet: ${germanWord}(de)`}
      </p>
    </div>
  );
}

export default SearchInformation;
