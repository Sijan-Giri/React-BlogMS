import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { login, setStatus } from '../../../store/authSlice';
import STATUSES from '../../globals/status/Statuses';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const {status,token} = useSelector((state) => state.auth);
  console.log(status,token);
  const dispatch = useDispatch();
  const handleLogin = (data) => {
    dispatch(login(data));  
  }

  useEffect(() => {
    if(status === STATUSES.SUCCESS) {
      navigate("/");
      localStorage.setItem('jwtToken',token);
      dispatch(setStatus(null));
    }
  },[status,token]);
  return (
   
  <Form type='Login' onSubmit={handleLogin} />
  )
}

export default Login