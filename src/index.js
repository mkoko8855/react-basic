import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> //app.js에있는 함수 자체가 여기로 리턴이 되는 것이다. 여기서 app을부른다. 우린 <h1>리액트 초보입니다. 를 적었었지. 이 app함수를 호출하고, 호출하면 리액트 초보입니다 라는 코드가 title = document.createElement('h1');으로 변환이 되서, title.textContent('react~~~~')로 되서 실행이 된다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
