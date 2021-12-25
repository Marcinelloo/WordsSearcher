import axios from "axios";
import {
  DICTIONARY_OBJCECT_FAIL,
  DICTIONARY_OBJCECT_REQUEST,
  DICTIONARY_OBJCECT_SUCCESS,
} from "../constants/disctionaryConstans";

export const dictionary = (englishWord, germanWord) => async (dispatch) => {
  dispatch({
    type: DICTIONARY_OBJCECT_REQUEST,
    payload: englishWord + `:` + germanWord,
  });
  try {
    const englishData = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${englishWord}`
    );
    const germanData = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/de/${germanWord}`
    );
    const dataObject = {
      englishData: englishData.data,
      germanData: germanData.data,
    };

    dispatch({ type: DICTIONARY_OBJCECT_SUCCESS, payload: dataObject });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DICTIONARY_OBJCECT_FAIL, payload: message });
  }
};
