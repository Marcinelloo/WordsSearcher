import { Fragment } from "react/cjs/react.production.min";
import Card from "../../ui/Card";
import classes from "./SearchResult.module.css";

function SearchResult(props) {
  const data = props.data;

  

  return (
    <div className={classes.searchBox}>
      {data.map((def, id) => (
        <Fragment key={id}>
          {def.meanings.map((meaning) => (
            <Card>
              <div key={meaning.partOfSpeech} className={classes.pading1}>
                <div className={classes.title}>{meaning.partOfSpeech}</div>
                <div>
                  {meaning.definitions.map((definitions, id) => (
                    <div key={definitions}>
                      <div className={classes.text}>
                        {meaning.definitions.length > 1 && `${id + 1}: `}
                        {definitions.definition}
                      </div>
                      <div className={classes.subText}>
                        {definitions.example
                          ? `example: ${definitions.example}`
                          : ""}
                      </div>
                      <div className={classes.subText}>
                        {definitions.synonyms.length > 1
                          ? `synonims: ${definitions.synonyms.join(`, `)}`
                          : ""}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default SearchResult;
