import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';


const Home = () => {
  return (
    <>
    
    <Navbar/>
    <Header/>
    <main className="container">
            <div className="row">
                <div className="col-md-4">

                <CardPizza 
                name= "Napolitano"
                price = {5950}
                ingredientes = {["mozzarella ", "tomates ", "jamón ", "orégano "]}
                img = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                />
                </div>
                
                <div className="col-md-4">
                  <CardPizza 
                  name= "Española"
                  price = {6950}
                  ingredientes = {["mozzarella ", "gorgonzola ", "parmesano ", "provolone "]}
                  img = "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww"
                  />
                </div>

                <div className="col-md-4">
                <CardPizza 
                  name= "Pepperoni"
                  price = {6950}
                  ingredientes = {["mozzarella ", "pepperoni ", "jamón ", "orégano "]}
                  img = "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>

              </div>



</main>
    
    
    </>
  )
}

export default Home