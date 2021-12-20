import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import Nav from "./components/nav";
import ToDo from "./components/toDo";
const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<ToDo/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<ToDo/>} />
      </Routes>
    </div>
  );
}

export default App;
