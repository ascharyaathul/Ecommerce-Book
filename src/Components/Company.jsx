import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Company() {
const[error,seterror]=useState({})


const[company,Setcompany]=useState({


})
console.log("company",company);
const navigate=useNavigate();

const handleChange=((event)=>{
console.log(event.target.value);
Setcompany({...company,[event.target.name]:event.target.value})

})

console.log(company);



const validate=()=>{
const errormessage={}
if(!company.name){
errormessage.name="enter your name"
}

if(!company.email){
    errormessage.email="Enter your email address"
}
if(!company.password){
    errormessage.password="Enter your password"
}
seterror(errormessage)
return Object.keys(errormessage).length ===0;

}
const handlesubmit=()=>{
    if(!validate()){
        console.log('error');
        return
    }

axios.post(`https://project1-3-gflo.onrender.com/auth/companysignup`,company).then((Response)=>{
    console.log(Response);
    Setcompany(Response.data.data)
    
    navigate("/login")
    
}).catch((error)=>{
    console.log(error);
    
})



}


  return (
    <div>
       <div style={{backgroundColor:"skyblue",fontFamily:"monospace",fontSize:"15px"}}>
    <div className="container mt-5 p-4 rounded shadow " style={{ maxWidth: "500px", }}>
  <h2 className="text-center mb-4"  style={{fontStyle:"italic",color:"white",fontSize:"3rem"}}>company Sign Up</h2>
  <Form style={{backgroundColor:"blue",color:"white"}} className='ps-5 pe-5 pb-5 pt-5'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="fw-bold" style={{fontStyle:"italic"}}>{error.name}</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter your name" 
        name="name" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
      <Form.Label className="fw-bold" style={{fontStyle:"italic"}}>{error.email}</Form.Label>
      <Form.Control 
        type="email" 
        placeholder="Enter your email address" 
        name="email" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
      <Form.Label className="fw-bold" style={{fontStyle:"italic"}}>{error.password}</Form.Label>
      <Form.Control 
        type="password" 
        placeholder="Enter your password" 
        name="password" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
   
  </Form>
  <div className="d-grid">
      <Button 
       className=' bg-info'

        size="lg" 
        onClick={handlesubmit} 
      >
        Sign Up
      </Button>
    </div>
</div>
</div>
    </div>
  )
}

export default Company
