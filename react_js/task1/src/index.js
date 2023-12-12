import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const line = <hr/>;
const title = <h1>My first react project</h1>;
const unorderedList = (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
);

const orderedList = (
    <ol>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
    </ol>
);

const formBlock = (
    <form>
        <input type="text" name="name" placeholder="name"/>
        <input type="email" name="email" placeholder="email"/>
        <button type="submit">Submit</button>
    </form>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <>
        {line}
        {title}
        {unorderedList}
        {line}
        {orderedList}
        {line}
        {formBlock}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
