import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from "../../redux/fetch/login";
const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useNavigate();
    const user = useSelector(state => state.user);

    if (user) {
        history.push('/');
    }

    const submit = useCallback(() => {
        dispatch(fetchRegister(name, password));
    }, [name, password]);
    
  return (
    <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => submit()} >submit</button>
    </>
  )
}

export default Register;