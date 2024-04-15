import React from 'react'
import Layouts from '../../components/layout/Layouts'
import Card from './components/card/Card'


function Home() {
  return (
    
  <Layouts>
    <div className='flex flex-wrap justify-center space-x-9 mt-11'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

    </div>
    
  </Layouts>
  )
}

export default Home
