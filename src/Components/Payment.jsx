import axios from "axios";
import React from "react";

function Payment() {

const confirmorder=()=>{
    console.log(confirmorder);
    
    const loginId=localStorage.getItem("loginId");
    axios.put(`https://project1-3-gflo.onrender.com/product/placeorder/${loginId}`).then((Response)=>{
        console.log(Response);
        
    }).catch((error)=>{
        console.log(error);
        
    })

}




  return (
    <div className="container" style={{backgroundColor:"#FFCCBC",height:"150vh",width:"60vw",color:"brown"}}>
        <form action="" style={{width:'700px',border:'1px solid white',margin:'auto',borderRadius:"20px",marginTop:"10px",}}>
        <h2 style={{color:"brown",fontSize:"3.2rem",}}>Payment</h2>

<div className="section" >
  <h4 style={{fontStyle:"italic",color:"brown"}}>Personal Information</h4>
<div style={{width:'300px',  margin:'auto'}}>
<div className="" style={{width:'300px'}} >
    <label for="fullname" >Full Name:</label>
    <input type="text" id="fullname" className="form-control" placeholder="Enter your full name"  />
  </div>

  <div className="" style={{width:'300px'}}>
    <label htmlFor="address">Shipping Address:</label>
    <input type="text" id="address" className="form-control" placeholder="Enter your shipping address" style={{width:'300px'}} />
  </div>

  <div className=""style={{width:'300px'}}>
    <label htmlFor="email">Email ID:</label>
    <input type="email" id="email" className="form-control" placeholder="Enter your email ID"  style={{width:'300px'}}/>
  </div>

  <div className=""style={{width:'300px'}}>
    <label htmlFor="contact">Contact No:</label>
    <input type="tel" id="contact" className="form-control" placeholder="Enter your contact number" style={{width:'300px',}} />
  </div>


</div>
  </div>

<div className="section m-2">
  <h2 style={{color:"brown",fontSize:"3.2rem"}}>Payment Method</h2>

  <div className="form-group m-2">
    <input type="radio" id="googlepay" name="paymentMethod" />
    <label htmlFor="googlepay">Google Pay</label>
  </div>

  <div className="form-group m-2">
    <input type="radio" id="phonepay" name="paymentMethod" />
    <label htmlFor="phonepay">Phone Pay</label>
  </div>

  <div className="form-group m-2" >
    <input type="radio" id="debitcard" name="paymentMethod" />
    <label htmlFor="debitcard">Debit Card</label>
  </div>

  <div className="form-group m-2">
    <input type="radio" id="creditcard" name="paymentMethod" />
    <label htmlFor="creditcard">Credit Card</label>
  </div>

  <div className="form-group m-4" style={{color:"brown"}}>
    <label htmlFor="bankname">Bank Name:</label>
    <input type="text" id="bankname" className="form-control" placeholder="Enter your bank name" />
  </div>

  <div className="form-group m-4" style={{color:"brown"}}>
    <label htmlFor="account">Bank A/C Number:</label>
    <input type="text" id="account" className="form-control" placeholder="Enter your account number" />
  </div>
</div>
</form>
<div style={{marginTop:"40px"}}>
  <input type="button" value="confirmorder" onClick={confirmorder} style={{padding:"5px",borderRadius:"10px",backgroundColor:"white",color:"brown"}} />
</div>
  </div>
  );
}

export default Payment;
