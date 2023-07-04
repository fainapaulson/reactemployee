import React from 'react'

function Edit() {
  return (
    <div>
           < div class="container w-75  ">
        <h1 className='text-center mt-5 '>Edit Employee Details</h1>
        <form >
<p className='fs-1 ms-5 ps-1 pb-4 text-center mt-5 '>
            <i class="fa-solid fa-user-tie"></i><br></br>
    
</p>  
<div class="container w-100  d-flex" >
    <div className=' leftside w-50 '>
                 <label>First Name</label><br></br>
                <input className=' mt-2 p-2 w-50' type='text' placeholder='search employee'></input>
        
               <br></br> <label className='mt-3'>Email Adress</label><br></br>
                <input className=' mt-2 p-2 w-50' type='email' placeholder='email adress'></input>
        
                <br></br> <label className='mt-3'>Gender</label><br></br>
                <input className=' mt-2 p-2 ' type='radio' id="n1" name="n1"></input><br></br>
                <input className=' mt-2 p-2 ' type='radio'  id="n1" name="n1"></input>
        
                <br></br> <label className='mt-3'>Choose Profile Picture</label><br></br>
                <input className=' mt-2 p-2 w-50' type='file' placeholder='search employee'></input>

        
        
    </div>
    <div className='rightside w-50 container'style={{float: 'right'}}>
    <label>Last Name</label><br></br>
            <input className=' mt-2 p-2 w-50' type='text' placeholder='Last name'></input>
    
            <br></br><label>phone</label><br></br>
            <input className=' mt-3 p-2 w-50' type='number' placeholder='mobile number'></input>
    
            <br></br><label>employee Status</label><br></br>

            <select className='w-50 mt-3 p-2' name='' id=''>
<option value="">Active</option>
<option value="">Inactive</option>

              </select>
  
    
            <br></br><label>employee location</label><br></br>
            <input className=' mt-3 p-2 w-50' type='number' placeholder='employee location'></input>
    
            <br></br><button type="submit" class="btn btn-success p-2 mt-3 mb-5 w-25" >Edit</button>
    
    </div>
    
</div>      
  </form>



</div>


    </div>
  )
}

export default Edit