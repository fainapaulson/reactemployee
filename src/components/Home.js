import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TableC from './TableC';
import LoadingC from './LoadingC';

function Home() {
    const [showSpin,setSpin]=useState(true)
useEffect(()=>{
setTimeout(()=>{
    setSpin(false)
},2000)
},[])
  return (
    <><div>
          <h1>
              <form action='' className='w-100 mt-5 '>
                  <input className=' mt-3 ' type='text' placeholder='search employee'></input>
                  <button className='bg-success ms-3 '>search</button>
                  <form className='text-end mb-5'>
<Link to={'add'}>
                          <button className='bg-success'><i class="fa-solid fa-user me-3"></i>Add</button>
    
</Link>
                  </form>
              </form>
          </h1>
      </div><div>

{ showSpin ?
   <LoadingC></LoadingC>   
   : 
<TableC></TableC>
}          </div></>  

)
}

export default Home