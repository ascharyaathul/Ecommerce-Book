import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AddToCart() {

  const [product,setproduct]=useState([])


useEffect(()=>{
  const loginId=localStorage.getItem("loginId")
  console.log(loginId);
  

axios.get(`https://project1-3-gflo.onrender.com/product/getcart/${loginId}`).then((Response)=>{

  console.log(Response.data.data);
  setproduct(Response.data.data);

  
}).catch((error)=>{
  console.log(error);
  
})

},[])

const remove=(id)=>{
  const loginId=localStorage.getItem('loginId')
  axios
  .put(`https://project1-3-gflo.onrender.com/product/removecart/${id}/${loginId}`).then((Response)=>{
    console.log(Response);
    window.location.reload();
  }).catch((error)=>{
    console.log(error);
    
  })

    
}




  return (
    <div>

<div style={{ display: "flex", justifyContent: "center", marginTop: "20px", backgroundColor:"#B2EBF2",height:"100vh"}}>
{product.map((item)=>(
  <Card style={{ width: "20rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "15px" ,marginTop:"20px",height:"75vh"}}  >
      <Card.Img
        variant="top"
        src={item.prdId.image[0]}
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
        alt="Card Image"
      />{item.prdId.price}
      <Card.Body style={{ textAlign: "center", padding: "20px" }}>
        <Card.Title  style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#343a40" }}>{item.prdId.Author}</Card.Title>
        <Card.Text style={{ fontSize: "1rem", color: "#6c757d", marginBottom: "20px" }}>{item.prdId.category}
      
        </Card.Text>{item.prdId.bookName}
        <Button
          variant="primary"
          style={{
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            padding: "10px 20px",
            borderRadius: "25px",
            fontWeight: "bold",
          }}
          onClick={()=>remove(item._id)} 
        >
          REMOVE
        </Button>
      </Card.Body>
    </Card>
))}


    
  </div>
  <Button href='/payment'
        
           
        >
          Check Out
        </Button>

    </div>
   
  )
}

export default AddToCart
