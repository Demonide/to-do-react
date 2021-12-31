import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import Nav from "./components/nav";
import Register from "./components/register";
import TodosList from "./components/todosList";
const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" exact element={<TodosList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todo" element={<TodosList/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
