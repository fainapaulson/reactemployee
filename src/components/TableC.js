import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function TableC(props) {

    const{label,onChange,id,...inputProps}=props;
  return (
    <div>  
       <label>{label}</label> 
       <input {...inputProps} onChange={onChange}></input>
        
                    <Table className=' text-center'>
    <thead>
        <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>E-mail</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Profile</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <select name='' id=''>
<option value="">Active</option>
<option value="">Inactive</option>

              </select>
            
            </td>
            <td>
              <img style={{width:'40px'}}src='https://i.postimg.cc/9MKQQfY1/emplo.png' ></img>
            </td>
            <td>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
<Dropdown.Item href="view/2">View<i class="fa-solid fa-user fa-beat"></i></Dropdown.Item>
<Dropdown.Item href="edit/2">Edit<i class="fa-solid fa-user-pen fa-beat"></i></Dropdown.Item>
<Dropdown.Item href="">Delete<i class="fa-solid fa-trash fa-beat"></i></Dropdown.Item>
</DropdownButton>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
        </tr>
    </tbody>
</Table>
</div>
  )
}

export default TableC