import { auth } from '@/auth';

import React from 'react';

const Home = async () => {
  const session = await auth()
  console.log(session);
  return (
    <>
   
    <h1 className='h1-bold'>Welcome to the world of Next.js</h1>
  
      

    </>
    
  );
}
export default Home