import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { blogEdit} from '../../../store/blogSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import STATUSES from '../../globals/status/statuses';
const Editblog = () => {
  const {status,singleblog}=useSelector((state)=> state.blog)
  const dispatch = useDispatch();
  const navigate =useNavigate();
const {id} = useParams();

  const handleEditBlog= (data)=>{
    dispatch(blogEdit(data,id));
    if(status===STATUSES.SUCCESS){
      alert("Edited sucessfully");
      navigate('/');
      dispatch(setStatus(null))
  }
}
  
  return (
    <div>
      <Form type={'Edit '} initialdata={singleblog} onSubmit={handleEditBlog}/>
    </div>
  )
}

export default Editblog
