import Card from "../ui/Card.js";
import classes from "./AnswerPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInformation from "./answerPagrComponents/SearchInformation.js";
import SearchResult from "./answerPagrComponents/SearchResult.js";
import { useParams } from "react-router";
import { translate } from "../actions/translateActions.js";
import { dictionary } from "../actions/dictionaryActions.js";
import SearchPlace from "./searchComponents/SearchPlace.js";
import LoadingBox from "../../src/components/LoadingBox.js";
import MessageBox from "../components/MessageBox.js";

function AnswerPage() {
  const params = useParams();
  const linkData = params.word;
  const usedWord = linkData.split("-")[0];
  const usedlanguage = linkData.split("-")[1];
  const toTranslatelanguage = usedlanguage === "en" ? "de" : "en";
  const [showLanguage, setShowLanguage] = useState(toTranslatelanguage);
  const dispatch = useDispatch();
  const translation = useSelector((state) => state.translate);
  const dictionaryData = useSelector((state) => state.dictionary);

  useEffect(() => {
    dispatch(translate(toTranslatelanguage, usedWord));
  }, [usedWord]);

  useEffect(() => {
    if (translation.loading === false) {
      dispatch(
        dictionary(
          usedlanguage === "en" ? usedWord : translation.word.split(" ")[0],
          usedlanguage === "en" ? translation.word.split(" ")[0] : usedWord
        )
      );
    }
  }, [translation.loading]);

  function add() {
    if (
      usedWord !== undefined &&
      translation.word !== undefined &&
      dictionaryData.loading === false &&
      !dictionaryData.error
    )
      return (
        <div className={classes.searchResult}>
          <SearchResult
            data={
              showLanguage === "en"
                ? dictionaryData.object.englishData
                : dictionaryData.object.germanData
            }
          />
        </div>
      );
    return (
      <div className={classes.info}>
        {dictionaryData.error ? (
          <Card>
            <MessageBox>{dictionaryData.error}</MessageBox>
          </Card>
        ) : (
          <LoadingBox />
        )}
      </div>
    );
  }

  function changeLanguage(event) {
    event.preventDefault();
    showLanguage === "en" ? setShowLanguage("de") : setShowLanguage("en");
  }

  function germanWordFound() {
    if (translation.loading === false && !dictionaryData.error)
      return (
        <div>
          <SearchInformation
            firstWord={usedWord}
            secondWord={translation.word}
            showLang={showLanguage}
            usedLang={usedlanguage}
          />
          <div className={classes.action}>
            <button onClick={(e) => changeLanguage(e)}>
              {showLanguage === "en" ? "german" : "englisch"}
            </button>
          </div>
        </div>
      );
    return <div>{dictionaryData.error ? <div></div> : <LoadingBox />}</div>;
  }

  return (
    <div>
      <div className={classes.searchBox2}>
        <Card>
          <div className={classes.formPading}>
            <div className={classes.control}>
              <SearchPlace />
            </div>
          </div>
        </Card>
      </div>
      <div className={classes.searchInformation}>
        <Card>
          <div>{germanWordFound()}</div>
        </Card>
      </div>
      {add()}
    </div>
  );
}

export default AnswerPage;
