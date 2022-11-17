import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import { useState } from 'react';
import AllRoutes from './Pages/AllRoutes';
function App() {
  const [cart, setCart] = useState([]);

  const handleAddintoCart = (e)=>{
    const ProductExist = cart.find((item)=>item.id===e.id);
    if(ProductExist){
        setCart(cart.map((item)=>item.id===e.id ? {...ProductExist,quantity:ProductExist.quantity+1}:item))
        console.log(cart)
    } else{
        setCart([...cart,{...e,quantity:1}])
        console.log(cart)
    }          
}

  const handleRemoveProduct = (e) =>{
    const ProductExist = cart.find((item)=>item.id===e.id);
    if(ProductExist.quantity===1){
      setCart(cart.filter((item)=>item.id!==e.id))
    }else{
      setCart(
        cart.map((item)=>item.id===e.id?{...ProductExist,quantity:ProductExist.quantity-1}:item)
      )
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <AllRoutes cart={cart} handleAddintoCart={handleAddintoCart} handleRemoveProduct={handleRemoveProduct}/>
    </div>
  );
}

export default App;
