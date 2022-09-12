import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'antd/dist/antd.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createStore, combineReducers} from 'redux';
import { Provider } from "react-redux";
import studentReducer from "./react-form/studentReducer";
import studentSelectedUser from "./react-form/studentSelectedUser";
import studentFillterReducer from "./react-form/studentFillterReducer";

//b3
const rootReducer = combineReducers({
  //khai báo reducers
  //key: value
  student: studentReducer,
  studentSelect: studentSelectedUser,
  fillter:  studentFillterReducer,
});
//b1
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  
  </React.StrictMode>
);

reportWebVitals();
