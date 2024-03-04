import React from 'react'
import Canva from './Canva'
import CardTest from './CardTest'

const Home = () => {
  return (
    <>
    <div id='homeScreen' className='w-full h-[100vh] flex justify-center items-center align-center relative snapper'>
      <Canva rank={'gold'}/>
  
</div>
<div id='secondaryHome' className='h-[100vh] w-full bg-red-200 snapper'>

</div> 
    </>
    


    
    

  )
}

export default Home


//  <div id='homeScreen' className='w-full h-[100vh] flex justify-center items-center align-center relative snapper'>
//       <Canva rank={'gold'}/>
//   <CardTest ranks={'gold'} />
// <CardTest ranks={'silver'} />
// <CardTest ranks={'bronze'} />
// </div>
// <div id='secondaryHome' className='h-[100vh] w-full bg-red-200 snapper'>

// </div> 

{/* <div id='header' className='w-full h-16 bg-blue-200 flex justify-center'>
  <div id='buttonsContainer' className='w-5/6 xl:w-1/2 lg:w-2/3 md:w-1/2 sm:w-2/5 h-full bg-red-300 flex justify-center items-center'>
   
  </div>
</div> */}