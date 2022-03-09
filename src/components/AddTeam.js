import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form,Button,Container,Row,Col,FloatingLabel} from 'react-bootstrap';


export default function AddTeam() {
  return (
    <div>
     <Form className='mt-5 pt-3'>
     <Container className='mt-5'>
  <Row className=' d-flex flex-wrap'>
    <Col md='4'>
  
    <Form.Group controlId="formName" className='mb-3'>
            
            <Form.Control type="text" placeholder="Enter Venue name" />
        </Form.Group>

        <Form.Group controlId="formName" className='mb-3'>
            
            <Form.Control type="text" placeholder="Enter the venue Image url" />
        </Form.Group>

        <Form.Group controlId="formName" className='mb-3'>
            
            <Form.Control type="text" placeholder="Enter Venue Location" />
        </Form.Group>


    </Col>
    <Col md="1"></Col>
    <Col md='7'>
        <Row>
            <h6 style={{textAlign: "center"}}>Enter the player details</h6>
        </Row>
    <Row>
        <Col md>
        <Form.Group controlId="formName" className='mb-3 mt-2'>
           
           <Form.Control type="text" placeholder="Enter the capacity of the venue" />
       </Form.Group>
        </Col>

        <Col md>
        <Form.Group controlId="formName" className='mb-3 mt-2'>
           
           <Form.Control type="text" placeholder="Enter the capacity of the venue" />
       </Form.Group>
        </Col>

        <Col md>
        <Form.Group controlId="formName" className='mb-3 mt-2'>
           
           <Form.Control type="text" placeholder="Enter the capacity of the venue" />
       </Form.Group>
        </Col>

        <Col>
        <Form.Group controlId="formName" className='mb-3 '>
           
           <Form.Control type="text" placeholder="Enter the capacity of the venue" />
       </Form.Group>
        </Col>
   
       
    </Row>
    
  <Button variant="primary" type="submit" >
    Submit
  </Button>
    </Col>
  </Row>
  </Container>
  

  
  
</Form>
  
    </div>
  )
}