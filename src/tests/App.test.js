import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/App';
import { Provider } from 'react-redux';
import store from "../rstore/store/index";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, div);
});