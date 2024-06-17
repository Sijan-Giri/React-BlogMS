import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../../../store/blogSlice'

const Home = () => {
  throw new Error("Error in thhis page")
  const dispatch = useDispatch();
  const {blogs} = useSelector((state) => state.blog);
  
  useEffect(() => {
    dispatch(fetchBlog());
  },[dispatch]);

 
  return (
   <Layout>
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>
   {
    blogs.map((blog) => {
      return <Card blog={blog}/>
    })
   }
  </div>
   </Layout>
  )
}

export default Home