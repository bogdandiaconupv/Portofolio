import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
