import axios from "axios";
import {
  TRANSLATE_WORD_FAIL,
  TRANSLATE_WORD_REQUEST,
  TRANSLATE_WORD_SUCCESS,
} from "../constants/translateConstants";

export const translate = (sourceTarget,targetLanguage, word) => async (dispatch) => {
  dispatch({ type: TRANSLATE_WORD_REQUEST, payload: word });
  try {
    const data = await axios.get("https://api-free.deepl.com/v2/translate", {
      params: {
        auth_key: process.env.REACT_APP_KEY_TRANSLATE,
        source_lang: sourceTarget,
        target_lang: targetLanguage,
        text: word,
      },
    });
    console.log(data);
    const translatedWord = data.data.translations[0].text;
    dispatch({ type: TRANSLATE_WORD_SUCCESS, payload: translatedWord });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TRANSLATE_WORD_FAIL, payload: message });
  }
};
