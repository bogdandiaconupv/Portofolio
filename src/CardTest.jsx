import React from 'react'
import Canva from './Canva'

const CardTest = ({ ranks }) => {
    return (
      <div id='cardTest' className='w-[500px] h-[400px] bg-white rounded-xl'>
        <h1 className='text-center'>Gladiator 1</h1>
        <Canva rank={ranks} />
      </div>
    )
  }

export default CardTest
