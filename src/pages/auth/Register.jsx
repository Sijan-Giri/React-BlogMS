import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { register, setStatus } from '../../../store/authSlice';
import STATUSES from '../../globals/status/Statuses';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const {status} = useSelector((state) => state.auth);
  console.log(status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    dispatch(register(data));
  }

  useEffect(() => {
    if(status === STATUSES.SUCCESS){
      navigate('/login');
      dispatch(setStatus(null))
    }
  },[status])

  return (
    <Form type='Register' onSubmit={handleRegister}/>
  )
}

export default Register