import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import Nav from "./components/nav";
import TodosList from "./components/todosList";
const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<TodosList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<TodosList/>} />
      </Routes>
    </div>
  );
}

export default App;
