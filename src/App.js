import React from 'react';
import './App.css'
import ChatUI from "./components/ChatUI";
//import MessagesContainer from "./components/MessagesContainer";

function App() {
   
    //const {messages} = MessagesContainer();
    return (
      <div className="App">
        <ChatUI />
      </div>
    );
}

export default App;