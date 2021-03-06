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
export function renderCheckInTab() {
  return { type: types.CHECKIN_TAB}
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
export const createUser = values => ({
  type: types.CREATE_USER,
  payload: {values}
});
export function userCreated() {
  return { type: types.USER_CREATED}
};