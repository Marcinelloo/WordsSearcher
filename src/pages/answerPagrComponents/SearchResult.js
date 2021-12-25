import Card from "../../ui/Card";
import classes from "./SearchResult.module.css";

function SearchResult(props) {
  const data = props.data;

  return (
    <div className={classes.searchBox}>
      {data.map((def, _id) => (
        <div key={def._id}>
          {def.meanings.map((meaning) => (
            <Card key={meaning.id}>
              <div className={classes.pading1}>
                <div className={classes.title}>{meaning.partOfSpeech}</div>

                {meaning.definitions.map((definitions, id) => (
                  <div>
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
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
