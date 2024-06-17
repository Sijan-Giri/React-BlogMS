import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/Statuses'
import { useNavigate } from 'react-router-dom'
import { createBlog, setStatus } from '../../../store/blogSlice'


const AddBlog = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status} = useSelector((state) => state.blog);

  const handleCreateBlog = (data) => {
    dispatch(createBlog(data));
  }

  if(status === STATUSES.SUCCESS) {
    navigate("/");
    setStatus(null);
  }

  return (
  <Layout>
	<Form type='Create' onSubmit={handleCreateBlog} />
  </Layout>
  )
}

export default AddBlog