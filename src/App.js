import './App.css';
import Store from './component/Store';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
const [products , setProducts] = useState ([]);
  useEffect( () => {
    fetch("https://fakestoreapi.com/products").then( (data) => {
      return(data.json());

    } ).then( (store) => {
      setProducts(store)
    } ).catch( (error) => {
      console.log(error)
    } )
  } )

  return (
    <div className="container">
      <div className='row'>
      <h1> Our Products </h1>
    
        
  
        {
 products.map((store , key) => {
  return(
    <div className='col-lg-4'>
   <Store storeProducts = {store} />
</div>
  )
 })
        }
     
      </div>
    </div>
  );
}

export default App;
