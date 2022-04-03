import React from 'react';
import './App.scss';
import {Main} from "./Main/Main";
import {Header} from "./Header/Header";

export function App() {
  return (
    <div className={"App"}>
          <Header/>
          <Main/>
    </div>
  );
}

export default App;
