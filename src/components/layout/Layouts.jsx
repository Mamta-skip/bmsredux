import React from 'react'
import Navbar from '../navbar/Navbar'

const Layouts = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layouts
