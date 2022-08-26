import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'antd/dist/antd.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createStore, combineReducers} from 'redux';
import { Provider } from "react-redux";
import questionReducer from "./TestingOnline/redux/questionReducer";
import anwserReducer from "./TestingOnline/redux/anwserReducer"
import studentReducer from "./react-form/studentReducer";
import studentFormReducer from "./react-form/studentFormReducer";

//b3
const rootReducer = combineReducers({
  //khai báo reducers
  //key: value
  student: studentReducer,
  studentForm: studentFormReducer,
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
