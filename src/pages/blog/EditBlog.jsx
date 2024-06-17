import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editBlog } from '../../../store/blogSlice'
import STATUSES from '../../globals/status/Statuses'


const EditBlog = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {status,singleBlog} = useSelector((state) => state.blog);
  const navigate = useNavigate();
  
  const handleEdit = (data) => {
    dispatch(editBlog(id, data));
    if(status === STATUSES.SUCCESS) {
      navigate('/');
    }
  }
  
  return (
    <Layout>
        <Form type='Edit' initialData={singleBlog} onSubmit={handleEdit} />
    </Layout>
  )
}

export default EditBlog