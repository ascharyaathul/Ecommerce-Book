import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Product from './Components/Product';
import Profile from './Components/Profile';
import AddToCart from './Components/AddToCart';
import Payment from './Components/Payment';
import ViewOrder from './Components/ViewOrder';
import Company from './Components/Company';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/profiles" element={<Profile/>}/>
    <Route path="/addtocart" element={<AddToCart/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/vieworder" element={<ViewOrder/>}/>
    <Route path="/company" element={<Company/>}/>



   </Routes>
   
   
   
   
   </BrowserRouter>
      

    </div>
  );
}

export default App;
