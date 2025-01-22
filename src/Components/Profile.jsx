import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import AddToCart from './AddToCart';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
    const[view,setview]=useState([])
   


    useEffect(()=>{
      
     
        axios
 
        .get("https://project1-3-gflo.onrender.com/product/viewproduct").then((response)=>{
            console.log(response)
            setview(response.data.data);
        }).catch((error)=>{
            console.log(error)
        })

        
   
    },[])


    const AddToCart=(id)=>{
      const loginId=localStorage.getItem("loginId")
      console.log(loginId);
      console.log(id)
      
     axios.post(`https://project1-3-gflo.onrender.com/product/addtocart/${id}/${loginId}`).then((response)=>{


      console.log(response);
      navigate('/addtocart')
      
     }).catch((error)=>{
      console.log(error);
      
     })
     
     


    }


  return (

    <div
    className="container-fluid py-5"
    style={{
      backgroundColor: "black",
      minHeight: "100vh",
      color: "white",
    }}
  >
    {/* Header Section */}
    <div className="text-center mb-4">
      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          fontSize: "3rem",
        }}
      >
        A Journey of a Thousand Words
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#ccc",
        }}
      >
        Discover stories that inspire, excite, and captivate your imagination.
      </p>
    </div>
  
    {/* Card Section */}
    <div className="row d-flex justify-content-center">
      {view && view.length > 0 ? (
        view.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
          >
            <Card
              className="shadow-lg"
              style={{
                width: "18rem",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.bookName || "Book Image"}
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <Card.Body
                style={{
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                <Card.Title className="fw-bold">{item.bookName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.category}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Price:</strong> {item.price}
                  <br />
                  <strong>Author:</strong> {item.Author}
                </Card.Text>
                <Button className="btn btn-outline-light w-100" onClick={()=>AddToCart(item._id)}  style={{ borderRadius: "20px", fontWeight: "bold", }}>   Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <div className="text-center mt-5">
          <h4 style={{ color: "#ddd" }}>No books available.</h4>
        </div>
      )}
    </div>
  
    {/* Placeholder Image Section */}
    <div className="text-center mt-5">
      <img
        src=""
        alt="Placeholder"
        style={{
          width: "50%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
          border: "2px solid #555",
        }}
      />
    </div>
  </div>
  
  )
}


export default Profile
