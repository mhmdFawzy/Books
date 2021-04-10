const initialState = [];

import { ADD_BOOK, LOAD_BOOKS } from "../types";

import uuid from "uuid";

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS: {
      const booksInfo = action.payload.map(book => {
        return { info: book.volumeInfo, id: book.id };
      });

      return booksInfo;
    }
    case ADD_BOOK: {
      return [...state, { info: action.payload, id: uuid.v4() }];
    }
    default:
      return state;
  }
}
