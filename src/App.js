import React from "react";
import './App.css';
import Header from "./Header"
import Tindercards from "./TinderCards";


function App() {
  return (
    //BEM class naming convention
    <div className="app">      
       {/* Header */}
      <Header />
       {/* Tinder Cards*/}
       <Tindercards />
       {/* Swipe buttons*/}
      
    </div>
  );
}

export default App;
