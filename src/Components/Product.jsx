import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



function Product() {

  const[product,setproduct]=useState({})

  const handleChange=(event)=>{
    console.log(event.target.name);
    setproduct({...product,[event.target.name]:event.target.value})
    
  }
 console.log(product);
 

  const filechange=(event)=>{
    setproduct({...product,image:event.target.files[0]})
    
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






  const handlesubmit=()=>{

   

    axios
    .post("https://project1-3-gflo.onrender.com/product/addproduct",formdata).then((Response)=>{
      console.log(Response);
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  



  return (
    <div class="container mt-5">
    <h2 class="text-center mb-4">Add Product</h2>
    <Form encType="multipart/form-data" onSubmit={handlesubmit} className="shadow p-4 rounded bg-light">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className="fw-bold"> image</Form.Label>
        <Form.Control type="file" name="image" onChange={filechange} className="form-control" />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBookName">
        <Form.Label className="fw-bold"> bookName,</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter book name" 
          name="bookName" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label className="fw-bold">Author</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter author" 
          name="Author" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label className="fw-bold">category</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter category" 
          name="category" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formPrice">
        <Form.Label className="fw-bold">price</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Enter price" 
          name="price" 
          onChange={handleChange} 
          className="form-control"
        />
      </Form.Group>
  
      <div className="text-center">
        <Button variant="primary" type="submit" className="px-4">Add Product</Button>
      </div>
    </Form>
  </div>
  
  )
}

export default Product
