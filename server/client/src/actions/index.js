import axios from "axios";
import { FETCH_USER, FETCH_PHRASES, CHECK_PARAGRAPH_CONTENT } from "./types";

export const fetchUser = () => async dispatch => {
  console.log("FETCHUSER ACTION is thrown");
  const res = await axios.get("/api/current_user");
  console.log("FETCHUSER ACTION -- PAYLOAD DATA is --->>>", res.data);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPhrases = () => async dispatch => {
  console.log("The FETCH_PHRASES ACTION -> is thrown");
  const res = await axios.get("/api/phrases");
  console.log("The FETCH_PHRASES ACTION -> after /api/phrase GET");
  dispatch({ type: FETCH_PHRASES, payload: res.data });
};

export const checkParagraphContent = () => async dispatch => {
  console.log("The CHECK_PARAGRAPH_CONTENT ACTION -> is thrown");
  const res = await axios.get("/api/check/paragraph/content");
  console.log(
    "The CHECK_PARAGRAPH_CONTENT ACTION -> after //api/check/paragraph/content GET"
  );
  dispatch({ type: CHECK_PARAGRAPH_CONTENT, payload: res.data });
};
