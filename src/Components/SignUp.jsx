import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';





function SignUp() {
  const navigate = useNavigate();

  const[signup,setSignup]=useState({

Name:"",
Number:"",
email:"",
password:""



  });
  const [error,setError] = useState({})
  console.log("signup",signup);

const handleChange=(event)=>{
   console.log(event.target.value)  
   setSignup({...signup,[event.target.name]:event.target.value})



}
console.log(signup);


const validate=()=>{
  const errorMessage={};

  if(!signup.Name){
errorMessage.Name='enter your name'

  }
  if(!signup.number){
    errorMessage.number='enter your number'
    
  }
  if(!signup.email){
    errorMessage.email='enter your email'
    
  }
  if(!signup.password){
    errorMessage.password='enter your password'
    
    }
    setError(errorMessage)

return Object.keys(errorMessage).length===0;


}




const handlesubmit=()=>{

if(!validate()){
  console.log('error')
  return
}

  axios





.post("https://project1-3-gflo.onrender.com/auth/signup",signup).then((response)=>{
     console.log(response)
    //  navigate("/login")
    // setSignup(response.data.data)
}).catch((err)=>{
  console.log(err);
  
})


}







  return (
    <div style={{backgroundColor:"#588b73",fontFamily:"monospace",fontSize:"15px"}}>
    <div className="container mt-5 p-4 rounded shadow " style={{ maxWidth: "500px", }}>
  <h2 className="text-center mb-4"  style={{fontStyle:"italic",color:"#A5D6A7",}}>Sign Up</h2>
  <Form style={{backgroundColor:"#A5D6A7",color:"white"}} className='ps-5 pe-5 pb-5 pt-5'>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="fw-bold" style={{fontStyle:"italic"}}>{error.Name}</Form.Label>
      <Form.Control 
        type="text" 
        placeholder="Enter your name" 
        name="Name" 
        onChange={handleChange} 
        className="p-2" 
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
      <Form.Label className="fw-bold" style={{fontStyle:"italic"}}>{error.number}</Form.Label>
      <Form.Control 
        type="number" 
        placeholder="Enter your phone number" 
        name="number" 
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

  )
}

export default SignUp
