import React, { useState } from 'react'
import TableC from './TableC';

function Add() {
    const [values, setValues]=useState({
        firstName:"",
        email:"",
        gender:"",
        profilePic:"",
        lastName:"",
        mobile:"",
        statusEmp:"",
        location:""
    });
    const inputs=[
        {  id:1,
           Name:" firstName",
           type:"text",
           label:"firstName",
           placeholder:"firstName"
        },
        {  id:2,
        Name:"  email",
        type:"email",
        label:" email",
        placeholder:" email"
     },
     {  id:3,
     Name:" gender",
     type:"radio",
     label:"gender",
     placeholder:"gender"
  },
  {  id:4,
  Name:"profilePic",
  type:"string",
  label:"profilePic",
  placeholder:"profilePic"
},
{  id:5,
Name:" lastName",
type:"text",
label:" lastName",
placeholder:" lastName"
},
{  id:6,
Name:"mobile",
type:"text",
label:"mobile",
placeholder:"mobile"
},
{  id:7,
Name:" statusEmp",
type:"text",
label:"statusEmp",
placeholder:"statusEmp"
},
{  id:8,
Name:"  location",
type:"text",
label:" location",
placeholder:" location"
}

]

const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    console.log(values);
}
  return (
    <div>
           < div class="container w-75  ">
        <h1 className='text-center mt-5 '>Register Employee Details</h1>
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
    
            <br></br><button type="submit" class="btn btn-success p-2 mt-3 mb-5 w-25" >Add</button>
    
    </div>
    
</div>  

{inputs.map((input)=>(<TableC key={input.id}{...input}value={values[input.Name]} onChange={onChange}/>))}
  </form>



</div>


    </div>

  )
}

export default Add