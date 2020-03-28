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
