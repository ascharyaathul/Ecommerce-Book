import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'


function Login() {
const[Login,setLogin]=useState({

email:"",
password:""

})
const navigate=useNavigate();
const[error,seterror]=useState({})

const handleChange=(event)=>{
  console.log(event.target.value);
  setLogin({...Login,[event.target.name]:event.target.value})
  
}
console.log(Login);



const validate=()=>{
  const errormessage={};
if(!Login.email){
  errormessage.email="ENTER YOUR EMAIL"
}
if(!Login.password){
  errormessage.password="ENTER YOUR PASSWORD"
}
seterror(errormessage)

return  Object.keys(errormessage).length===0;

}
  
const handlesubmit=(()=>{

  if (!validate()){
    console.log('error');
    return
    
  }

axios
.post("https://project1-3-gflo.onrender.com/auth/login",Login).then((response)=>{
  console.log(response);
  localStorage.setItem('loginId',response.data.loginId)
  localStorage.setItem('role',response.data.role)

 navigate("/products")
  
}).catch((err)=>{
  console.log(err);
  
})

}

)




return (
  <div>
    <div style={{backgroundColor:"skyblue",height:"100vh"}}className='pt-5 logindis' >
<div className="p-4 bg-light rounded shadow " style={{width:"50vw",height:"80vh",margin:"auto",}}>
  <Form style={{backgroundColor:"blue",color:"white" ,height:"70vh",}}   >
    <h3 className="text-center mb-4 pt-5"  style={{color:"white",fontFamily:"serif",fontSize:"3.1rem"}} >Welcome Back</h3>

    <Form.Group as={Row} className="mb-4 me-3 ms-3  " controlId="formPlaintextEmail">
      <Form.Label column sm="2"   >
      {error.email}
        <i className="bi bi-envelope-fill" style={{fontFamily:"serif",}} ></i> 
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          className="rounded-pill pb-4"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-4 me-3 ms-3" controlId="formPlaintextPassword" >
      <Form.Label column sm="2" > {error.password}
        <i className="bi bi-lock-fill"  style={{fontFamily:"serif"}}></i>
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
        variant="light"
        className="rounded-pill px-4 py-2"
        onClick={handlesubmit}
      >
        <i className="bi bi-box-arrow-in-right"></i> Login Now
      </Button>
    </div>
  </Form>
</div>
</div>




<div className='logindis2'>
    <div style={{backgroundColor:"#FF9800",height:"100vh"}}className='pt-5 ' >
<div className="p-4 bg-light rounded shadow " style={{width:"",height:"80vh",margin:"auto",}}>
  <Form style={{backgroundColor:"#FF9800",color:"white" ,height:"70vh",}}   >
    <h3 className="text-center mb-4 pt-5"  style={{color:"white",fontFamily:"serif",fontSize:"1.1rem"}} >Welcome Back</h3>

    <Form.Group as={Row} className="mb-4 me-3 ms-3  " controlId="formPlaintextEmail">
      <Form.Label column sm="2"   >
      {error.email}
        <i className="bi bi-envelope-fill" style={{fontFamily:"serif",}} ></i> 
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          name="email"
          className="rounded-pill pb-4"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-4 me-3 ms-3" controlId="formPlaintextPassword" >
      <Form.Label column sm="2" > {error.password}
        <i className="bi bi-lock-fill"  style={{fontFamily:"serif"}}></i>
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
        variant="success"
        className="rounded-pill px-4 py-2"
        onClick={handlesubmit}
      >
        <i className="bi bi-box-arrow-in-right"></i> Login Now
      </Button>
    </div>
  </Form>
</div>
</div>
</div>
</div>
  )}


export default Login
