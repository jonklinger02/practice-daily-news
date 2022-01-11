import * as api from "../../api";
import { GET_POSTS, ADD_NEWSLETTER } from "../types";

/*/////////////////////////////////////////////
|                POST                         |
/////////////////////////////////////////////*/

export const getPosts = (prevState, page, order, limit) => ({
  type: GET_POSTS,
  payload: api.getPosts(prevState, page, order, limit),
});

/*/////////////////////////////////////////////
|                User                         |
/////////////////////////////////////////////*/

export const addNewsLetter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsletter(data),
});
