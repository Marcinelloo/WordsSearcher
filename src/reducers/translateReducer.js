import { TRANSLATE_WORD_FAIL, TRANSLATE_WORD_REQUEST, TRANSLATE_WORD_SUCCESS } from "../constants/translateConstants";

export const translateReducer = (state = {}, action) => {
    switch (action.type) {
      case TRANSLATE_WORD_REQUEST:
        return { loading: true };
      case TRANSLATE_WORD_SUCCESS:
        return { loading: false, success: true, word: action.payload };
      case TRANSLATE_WORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };