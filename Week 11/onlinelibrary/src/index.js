import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<Routes>
<Route path="/" element={<Book_Form/>} />
<Route path="/edit/:id" element={<Book_UpDateForm/>} />
<Route path="/Delete/:id" element={<DeleteBook/>} />
<Route path="/DisplayBooksF1" element={<FncDisplayBooks/>} />
</Routes>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
