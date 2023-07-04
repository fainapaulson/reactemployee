import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function View() {
  return (
    <div className='w-50 container'>
        <h1 className='text-center'>Employee Details</h1>
         <Card style={{ width: '100%' }} className='text-center'>
      <Card.Img variant="top" style={{width:'200px',height:'200px'}}  src="https://i.postimg.cc/9MJLgZxM/employeedumy.jpg" />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <Card.Text>
card title      
  </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>full Name</ListGroup.Item>
        <ListGroup.Item>email address</ListGroup.Item>
        <ListGroup.Item>contact number</ListGroup.Item>
        <ListGroup.Item>employee Status</ListGroup.Item>

      </ListGroup>
    </Card>
        </div>
  )
}

export default View