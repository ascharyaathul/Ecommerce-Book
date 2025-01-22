import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
const[login,setlogin]=useState({})
const navigate=useNavigate();


const handleChange=(event)=>{
  console.log(event.target.value);
  setlogin({...login,[event.target.name]:event.target.value})
  
}
console.log(login);

const handlesubmit=(()=>{

axios
.post("https://project1-3-gflo.onrender.com/auth/login",login).then((response)=>{
  console.log(response);
  localStorage.setItem('loginId',response.data.loginId)
 navigate("/products")
  
}).catch((err)=>{
  console.log(err);
  
})

}

)



  return (
<div className="p-4 bg-light rounded shadow">
  <Form style={{backgroundColor:"#E3F2FD",color:"white"}}>
    <h3 className="text-center mb-4" style={{color:"blue"}}>Welcome Back</h3>

    <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
      <Form.Label column sm="2" className="text-primary fw-bold">
        <i className="bi bi-envelope-fill"></i> Email
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          className="rounded-pill"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
      <Form.Label column sm="2" className="text-primary fw-bold">
        <i className="bi bi-lock-fill"></i> Password
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          name="password"
          className="rounded-pill"
        />
      </Col>
    </Form.Group>

    <div className="text-center">
      <Button
        variant="primary"
        className="rounded-pill px-4 py-2"
        onClick={handlesubmit}
      >
        <i className="bi bi-box-arrow-in-right"></i> Login Now
      </Button>
    </div>
  </Form>
</div>

  )
}

export default Login
