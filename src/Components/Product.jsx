import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './style.css'



function Product() {

  const[product,setProduct]=useState({
image:"",
bookName:"",
Author:"",
category:"",
price:""

  })
  const[error,setError]=useState({})
  


 const validate=()=>{
  const errormessage={};

  if(!product.image){
    errormessage.image="enter image"
  }

  if(!product.bookName){
    errormessage.bookName="enter book name"
  }
  if(!product.Author){
    errormessage.Author="enter author"
  }
  if(!product.category){
    errormessage.category="enter category"
  }
  if(!product.price){
    errormessage.price="enter price"
  }
  setError(errormessage)
  return Object.keys(errormessage).length===0
 }
 

  const handleChange=(event)=>{
    
    console.log(event.target.name);
    setProduct({...product,[event.target.name]:event.target.value})

}
    
 console.log(Product);
 
 

  const filechange=(event)=>{
    setProduct({...product,image:event.target.files[0]})
    
  }

 
  const formdata=new FormData();
  formdata.append("image",product.image)
  formdata.append("bookName",product.bookName)
  formdata.append("Author",product.Author)
  formdata.append("category",product.category)
  formdata.append("price",product.price)
 
  for (const [key, value] of formdata.entries()) {
    console.log(`${key}: ${value}`);
  }






  const handlesubmit=(event)=>{
  
    if(!validate()){
      console.log(error);
      return 
    
  }
    event.prevent.default();


    axios
    .post("https://project1-3-gflo.onrender.com/product/addproduct",formdata).then((Response)=>{
      console.log(Response);
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }
  



  return (
    <div>
      
    <div class="container mt-5 resdisplay" style={{backgroundColor:"lavender"}}>
    <h2 class="text-center mb-4" style={{fontFamily:"sans-serif",fontSize:"4.2rem",color:"indigo"}}>Add Product</h2>
    <Form encType="multipart/form-data" onSubmit={handlesubmit} className="shadow p-4 rounded bg-light" style={{width:"50vw",margin:"auto",}}>
      <Form.Group controlId="formFile" className="mb-3" style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold" style={{fontFamily:"sans-serif"}}>image {error.image}</Form.Label>
        <Form.Control type="file" name="image"  className="form-control"   onChange={filechange} />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBookName"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>bookName {error.bookName}</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter book name" 
          name="bookName" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formAuthor"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>Author{error.Author}</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter author" 
          name="Author" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formCategory"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>category{error.category}</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter category" 
          name="category" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formPrice"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>price{error.price}</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Enter price" 
          name="price" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <div className="text-center">
        <Button variant="secondary" type="submit" className="px-4"  style={{color:"white",fontSize:"1rem"}}>Add Product</Button>
      </div>
    </Form>




  </div>
  <div className='resdisplay2'>
   
    
    <div>

    <Form encType="multipart/form-data" style={{fontSize:"10px"}} onSubmit={handlesubmit} className="shadow p-4 rounded bg-light" >
      <Form.Group controlId="formFile" className="mb-3" style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold" style={{fontFamily:"sans-serif"}}>image {error.image}</Form.Label>
        
        <Form.Control type="file" name="image"  className="form-control"   onChange={filechange} />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBookName"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>bookName {error.bookName}</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter book name" 
          name="bookName" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formAuthor"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>Author{error.Author}</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter author" 
          name="Author" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formCategory"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>category{error.category}</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter category" 
          name="category" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formPrice"  style={{backgroundColor:"indigo",color:"lavender"}}>
        <Form.Label className="fw-bold"  style={{fontFamily:"sans-serif"}}>price{error.price}</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Enter price" 
          name="price" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <div className="text-center">
        <Button variant="secondary" type="submit" className="px-4"  style={{color:"white",fontSize:"1rem"}}>Add Product</Button>
      </div>
    </Form>



    </div>


  
  </div>
  
  </div>
  
  )
}

export default Product
