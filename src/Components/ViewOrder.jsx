import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect } from 'react';


function ViewOrder() {

    const [view,setview] = useState([])
    const [companydata,setCompanydata] = useState([])
    const role = localStorage.getItem('role')
  const[fiterdview,setfiterdview]=useState([])
  const[companyfiltereddata,Setcompanyfiltereddata]=useState([])

useEffect(()=>{

    const loginId=localStorage.getItem("loginId")
axios.get(`https://project1-3-gflo.onrender.com/product/vieworder/${loginId}`).then((Response)=>{
    console.log(Response);
    setview(Response.data.data)
}).catch((error)=>{

    console.log(error);
    
})

},[])


useEffect(()=>{
  const filterdata = view.filter((item)=>{

    return item.status===2;
    
  })
  setfiterdview(filterdata)
  
},[view])

console.log(fiterdview)



useEffect(()=>{

axios.get(`https://project1-3-gflo.onrender.com/product/viewallorder`).then((Response)=>{
  console.log(Response);
  setCompanydata(Response.data.data)
}).catch((error)=>{

  console.log(error);
  
})

},[])


useEffect(()=>{
  const cofiltereddata = companydata.filter((item)=>{
  
    return item.status===2
  })
  Setcompanyfiltereddata(cofiltereddata)
  
  },[companydata])
  console.log(companyfiltereddata);


console.log(companydata)




  return (
    <div>

<    div style={{width:"vw",height:"350vh",backgroundColor:"black"}}>
     
     <div  >
         <h1 style={{fontStyle:"-moz-initial",color:"yellow"}}>VIEW ORDERS</h1>
 
        
 { role==2?
 
 <div  className='row 'style={{width:"",height:"60vh"}}>      
       {fiterdview.map((value)=>(
         <Card style={{ width:"18rem" }} className='pt-2 pe-4 ps2 pb2 m-3'>
         <Card.Img variant="top" src={value.prdId.image} className='mt-2 ms-2 me-2 mb-2'/>
         <Card.Body> {value.prdId.category}
           <Card.Title> {value.prdId.bookName}</Card.Title>
           <Card.Text>{value.prdId.Author}
            
             
            
           </Card.Text>
           <Button variant="primary">Cancel Order</Button>
         </Card.Body>
       </Card>
       ))}     
     </div>
 :
 role==3?
 
 <div  className='row 'style={{width:"",height:"60vh"}}>      
       {companyfiltereddata.map((value)=>(
         <Card style={{ width:"18rem" }} className='pt-2 pe-4 ps2 pb2 m-3'>
         <Card.Img variant="top" src={value.prdId.image} className='mt-2 ms-2 me-2 mb-2'/>
         <Card.Body> {value.prdId.category}
           <Card.Title> {value.prdId.bookName}</Card.Title>
           <Card.Text>{value.prdId.Author}
            
             
            
           </Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
       ))}     
     </div>:
     <>
     
     </>
 

 }
         


 </div>
     </div>

    </div>
    
  )
}

export default ViewOrder
