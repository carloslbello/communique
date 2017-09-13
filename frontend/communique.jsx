import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    session: {
      landingPostIds: window.landingPostIds,
      currentUser: null
    }
  };
  delete window.landingPostIds;
  if (window.currentUser) {
    preloadedState.entities = { users: { [window.currentUser.id]: window.currentUser } };
    preloadedState.session.currentUser = window.currentUser.id;
    delete window.currentUser;
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
