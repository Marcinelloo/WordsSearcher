import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import classes from "./SearchPlace.module.css";

function SearchPlace() {
  const navigate = useNavigate();
  const textInput = useRef();
  const [language, setLanguage] = useState("en");
  function setWordHolder() {
    const enteredWord = textInput.current.value;
    const sendWord = enteredWord.trim().toLowerCase();
    navigate(`/answer-page/${sendWord}-${language}`);
  }

  function setLangToEn(event) {
    event.preventDefault();
    setLanguage("en");
  }
  function setLangTode(event) {
    event.preventDefault();
    setLanguage("de");
  }

  return (
    <div>
      <label htmlFor="title">
        {language === "en" ? "Write your word!!" : "Schreiben Sie Ihr Wort!!"}
      </label>
      <form className={classes.form} onSubmit={setWordHolder}>
        <div className={classes.searchPanel}>
          <input
            type="text"
            required
            id="inputText"
            placeholder= {language === "en" ? "  write here..." : "   hier schreiben..."}
            ref={textInput}
          />
          <div className={classes.actions}>
            <button>{language === "en" ? "search" : "Suche"}</button>
          </div>
        </div>

        <div className={classes.actions2}>
          <button
            className={language === "en" ? classes.lightRed : classes.red}
            onClick={(e) => setLangToEn(e)}
          >
            En -> De
          </button>
          <button
            className={language === "de" ? classes.lightRed : classes.red}
            onClick={(e) => setLangTode(e)}
          >
            De -> En
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchPlace;
