import { ADD_BOOK, LOAD_BOOKS } from "../types";

export function loadBooks(payload) {
  return { type: LOAD_BOOKS, payload };
}
export function addBook(payload) {
  return { type: ADD_BOOK, payload };
}
