import { DICTIONARY_OBJCECT_FAIL, DICTIONARY_OBJCECT_REQUEST, DICTIONARY_OBJCECT_SUCCESS } from "../constants/disctionaryConstans";

export const dictionaryReducer = (state = {}, action) => {
    switch (action.type) {
      case DICTIONARY_OBJCECT_REQUEST:
        return { loading: true };
      case DICTIONARY_OBJCECT_SUCCESS:
        return { loading: false, success: true, object: action.payload };
      case DICTIONARY_OBJCECT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };