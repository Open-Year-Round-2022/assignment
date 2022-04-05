import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import postdata from './data.js';



function reducer(state = postdata, action){
  let copy;
  switch (action.type){
    case "하트누르기":
      copy = [...state];
      copy[action.payload.postId].heart = !copy[action.payload.postId].heart;
      copy[action.payload.postId].heart ? copy[action.payload.postId].like++: copy[action.payload.postId].like--;
      return copy;
    case "북마크누르기":
      copy = [...state];
      copy[action.payload.postId].bookmark = !copy[action.payload.postId].bookmark;
      return copy;
    case "더보기모달여닫기":
      copy=[...state];
      copy[action.payload.postId].moremodal = !copy[action.payload.postId].moremodal;
      return copy;
    case "post모달여닫기":
      copy=[...state];
      copy[action.payload.postId].postmodal = !copy[action.payload.postId].postmodal;
      return copy;
    case "댓글달기":
      copy=[...state];
      copy[action.payload.postId].comment.push(action.payload.newComment);
      console.log(copy[action.payload.postId].comment);
      return copy;
    default:
      return state;
      
  }
}

let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
