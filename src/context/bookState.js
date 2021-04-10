import PropTypes from "prop-types";
import React from "react";
import bookContext from "./bookContext";
import bookReducer from "./bookReducer";
import uuid from "uuid";

const BookState = ({ children }) => {
  const initialState = { books: [] };
  const [state, dispatch] = React.useReducer(bookReducer, initialState);
  const getBooks = books => {
    dispatch({ type: "LOAD_BOOKS", payload: books });
  };
  const addBook = book => {
    dispatch({ type: "ADD_BOOK", payload: { info: book, id: uuid.v4() } });
  };
  return (
    <bookContext.Provider
      value={{
        getBooks,
        books: state.books,
        addBook,
      }}>
      {children}
    </bookContext.Provider>
  );
};
BookState.prototype = {
  children: PropTypes.element.isRequired,
};
export default BookState;
