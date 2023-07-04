import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{height:'70px'}} className='bg-secondary '>
<Link to={''} style={{textDecoration:'none'}}>
<p  className='fs-1 ms-5 ps-3 pb-4 text-white'>

                <i class="fa-solid fa-user-group text-danger"></i><strong>Employee Desk</strong></p>
    
</Link>        
        </div>
  )
}

export default Header