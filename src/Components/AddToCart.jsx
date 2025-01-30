import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AddToCart() {

  const [product,setproduct]=useState([])
  const [fitedprdct,setfitedprdct] = useState([])
  

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

useEffect(()=>{

  const filtereddata = product.filter((item)=>{
      return  item.status ===1;
  })
setfitedprdct(filtereddata)
  


},[product])



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
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE082",
    minHeight: "100vh",
    padding: "20px",
  }}
>
  <h1
    style={{
      color: "purple",
      marginBottom: "20px",
      fontSize: "2.5rem",
      fontWeight: "bold",
      textShadow: "1px 1px 2px ",
    }}
  >
    View Products
  </h1>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      width: "100%",
    }}
  >
    {fitedprdct.map((item) => (
      <Card
        key={item._id}
        style={{
          width: "300px",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          overflow: "hidden",
          backgroundColor: "#fff",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.03)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <Card.Img
          variant="top"
          src={item.prdId.image[0]}
          style={{
            height: "200px",
            objectFit: "cover",
          }}
          alt="Product Image"
        />
        <Card.Body style={{ padding: "20px", textAlign: "center" }}>
          <Card.Title
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#4a4e69",
              marginBottom: "10px",
            }}
          >
            {item.prdId.Author}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              color: "#6c757d",
              marginBottom: "15px",
            }}
          >
            {item.prdId.category}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "1.2rem",
              color: "#22223b",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {item.prdId.bookName}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "1.3rem",
              color: "#f72585",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            ${item.prdId.price}
          </Card.Text>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#3a86ff",
              borderColor: "#3a86ff",
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: "bold",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => remove(item._id)}
          >
            REMOVE
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>

  <Button
    href="/payment"
    style={{
      marginTop: "30px",
      backgroundColor: "#06d6a0",
      borderColor: "#06d6a0",
      padding: "12px 30px",
      borderRadius: "30px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#04c299")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#06d6a0")}
  >
    Check Out
  </Button>
</div>
   
  )
}

export default AddToCart
