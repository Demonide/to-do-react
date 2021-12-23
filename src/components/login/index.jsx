import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/fetch/login";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);

    if (user) {
        history.push('/');
    }

    const submit = useCallback(() => {
        dispatch(fetchLogin(name, password));
    }, [name, password]);
    
  return (
    <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => submit()} >submit</button>
    </>
  )
}

export default Login;