import { loginActionCreator } from "../AC/login";
import axios from "axios";

const fetchLogin = (name, password) => async (dispatch, getState) => {
    const response = await fetch("http://localhost:8000/api/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ name: name, password:password })
    });
    
    if (response.status === 200) {
        const userInfo = await response.json();
        localStorage.setItem('token', `${userInfo.token}`);
        dispatch(loginActionCreator(name, password));
    }
}

const fetchRegister = (name, password) => async (dispatch, getState) => {
  const response = await axios.post('http://localhost:8000/api/register', { name, password });

  if (response.status) {
    const userInfo = await response.json();
    localStorage.setItem('token', userInfo.token);
    dispatch();
  }
}


export { fetchLogin, fetchRegister };