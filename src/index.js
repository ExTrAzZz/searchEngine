import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { connect, Provider } from 'react-redux';
import searchReducer from './store/searchReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: searchReducer,
});
const root = ReactDOM.createRoot(document.getElementById('root'));


const mapStateToProps = (state) => {
  return {
    data: state.data,
    inputData: state.value,
    searchData: state.works
  }
}
const WrappedApp = connect(mapStateToProps)(App)

root.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>
);

