import types from "../constants/action-types";
// Put the actions functions here.

export function renderStudentTab() {
  return { type: types.STUDENT_TAB}
};
export function renderLibrarianTab() {
  return { type: types.LIBRARIAN_TAB}
};
export function renderCheckOutTab() {
  return { type: types.CHECKOUT_TAB}
};
export const renderResults = prevTab => ({
   type: types.SEARCH_RESULTS,
   payload: {prevTab},
});

export const fetchBooks = books => ({
  type: types.FETCH_BOOK_RESULTS,
  payload: {books},
});
export const fetchUsers = users => ({
  type: types.FETCH_USER_RESULTS,
  payload: {users},
});