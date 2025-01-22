import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';





function SignUp() {
  const navigate = useNavigate();

  const[signup,setSignup]=useState({})


const handleChange=(event)=>{
   console.log(event.target.value)  
   setSignup({...signup,[event.target.name]:event.target.value})

}
console.log(signup);

const handlesubmit=()=>{
  axios
.post("https://project1-3-gflo.onrender.com/auth/signup",signup).then((response)=>{
     console.log(response)
     navigate("/login")
}).catch((err)=>{
  console.log(err);
  
})


}







  return (
    <div className="container mt-5 p-4 rounded shadow bg-light" style={{ maxWidth: "500px" }}>
  <h2 className="text-center mb-4">Sign Up</h2>
  <Form style={{backgroundColor:"#7794b1",color:"white"}}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="fw-bold">Name</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter your name" 
        name="Name" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label className="fw-bold">Phone Number</Form.Label>
      <Form.Control 
        type="number" 
        placeholder="Enter your phone number" 
        name="number" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
      <Form.Label className="fw-bold">Email Address</Form.Label>
      <Form.Control 
        type="email" 
        placeholder="Enter your email address" 
        name="email" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
      <Form.Label className="fw-bold">Password</Form.Label>
      <Form.Control 
        type="password" 
        placeholder="Enter your password" 
        name="password" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    <div className="d-grid">
      <Button 
        variant="primary" 
        size="lg" 
        onClick={handlesubmit} 
        className="fw-bold"
      >
        Sign Up
      </Button>
    </div>
  </Form>
</div>

  )
}

export default SignUp
