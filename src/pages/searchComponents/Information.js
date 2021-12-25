import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import classes from "./Information.module.css";

const data = [
  {
    lng: "PL",
    title: "Co dokladnie robi WordsSearcher??",
    text1:
      "Strona służy do tłumaczenia wyrazów z języka angielskiego na język niemiecki i odwrotnie.",
    text2: "Użycie w 3 krokach:",
    text3: " -zaznacz tłumaczenie z jakiego język na jaki tłumaczysz,",
    text4: " -wpisz wyraz,",
    text5: " -zobacz rezultat.",
  },
  {
    lng: "EN",
    title: "What exactly does WordsSearcher do?",
    text1:
      "The site is used to translate words from English to German and vice versa.",
    text2: "Use in 3 steps:",
    text3:
      " -select the translation from which language to which you are translating,",
    text4: " -type the word,",
    text5: " -see the result.",
  },
  {
    lng: "DE",
    title: "Was genau macht WordsSearcher?",
    text1:
      "Die Seite dient dazu, Wörter aus dem Englischen ins Deutsche und umgekehrt zu übersetzen.",
    text2: "3 Schritte:",
    text3: "  -Wählen Sie die Sprache aus, aus der Sie übersetzen möchten,",
    text4: "  -geben Sie das Wort ein,",
    text5: "  -sehen Sie das Ergebnis.",
  },
];

function Information() {
  const [lang, setLang] = useState("PL");
  const [showData, setShowData] = useState(data);

  useEffect(() => {
    const d = data.filter((e) => e.lng === lang);
    setShowData(d);
  }, [lang]);

  function changeLanguage() {
    lang === "PL"
      ? setLang("EN")
      : lang === "EN"
      ? setLang("DE")
      : setLang("PL");
  }
  return (
    <div className={classes.information}>
      <Card>
        <div className={classes.items}>
          <h3>{showData[0].title}</h3>
          <p>{showData[0].text1}</p>
          <p>
            <b>{showData[0].text2}</b>
          </p>
          <p>{showData[0].text3}</p>
          <p>{showData[0].text4}</p>
          <p>{showData[0].text5}</p>
          <div className={classes.active}>
            <button onClick={changeLanguage}>zmien jezyk</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Information;
