const bookReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_BOOKS": {
      const booksInfo = action.payload.map(book => {
        return { info: book.volumeInfo, id: book.id };
      });

      return {
        ...state,
        books: booksInfo,
      };
    }
    case "ADD_BOOK": {
      return { ...state, books: [...state.books, action.payload] };
    }
    default:
      return state;
  }
};
export default bookReducer;
