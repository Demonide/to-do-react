import { loginActionCreator } from "../AC/login";

const fetchLogin = (name, password) => async (dispatch, getState) => {
    const responce = await fetch("http://localhost:8000/login",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({ name: name, password:password })
    });
    
    if (responce.status === 200) {
        const userInfo = await responce.json();
        localStorage.setItem('token', `${userInfo.token}`);
        dispatch(loginActionCreator(name, password));
    }
}


export { fetchLogin };