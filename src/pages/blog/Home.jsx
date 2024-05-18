import React, { useEffect } from 'react'
import Layouts from '../../components/layout/Layouts'
import Card from './components/card/Card'
import STATUSES from '../../globals/status/statuses';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog, setStatus } from '../../../store/blogSlice';


function Home() {
  const dispatch = useDispatch();
  const { blogs, status } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);


  if (status === STATUSES.LOADING) {
   console.log("loading")
  }

  if (status === STATUSES.ERROR) {
  console.log("error")
  }

  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  } 
  dispatch(setStatus(null));
  return (
    
  <Layouts>
    <div className='flex flex-wrap justify-center space-x-9 mt-11'>
    {blogs.map((blog) => {
          return <Card blog={blog} />;
        })}

    </div>
    
  </Layouts>
  )
}

export default Home
