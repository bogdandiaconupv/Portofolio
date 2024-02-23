import React from 'react'
import Canva from './Canva'
import CardTest from './CardTest'

const Home = () => {
  return (
    <div id='homeScreen' className='w-full h-[100vh] flex justify-center items-center align-center relative '>
      <Canva rank={'gold'}/>
  {/* <CardTest ranks={'gold'} />
<CardTest ranks={'silver'} />
<CardTest ranks={'bronze'} /> */}
</div>

  )
}

export default Home
