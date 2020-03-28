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
export function renderResults() {
  return { type: types.SEARCH_RESULTS}
};
