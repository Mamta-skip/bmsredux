import React from 'react'
import Layouts from '../../components/layout/Layouts'

import Form from './components/form/Form'
import { useDispatch } from 'react-redux'
import { blog } from '../../../store/blogSlice'
function Addblog() {
  const dispatch =useDispatch()
  const handleAddblog = (data)=>{
dispatch(blog(data))
  }
  return (
  
      
<Form type={'Add'} onSubmit={handleAddblog}/>

    
 
  )
}

export default Addblog
