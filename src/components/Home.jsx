import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';




const Home = () => {

  const [pizzas, setPizzas] = useState([])

      useEffect(() =>{
        const fetchPizza = async() =>{
          try{
            const response = await fetch("http://localhost:5000/api/pizzas")
            const data = await response.json()
            setPizzas(data)

          }catch (error){
            console.log("Error de fetching:", error)
          }
        }
        fetchPizza()
      },[])

  return (
    <>
    
    <Header/>
    <main className="container">
            <div className="row">
                
                  {pizzas.map(pizza=>(
                    <div className="col-md-4 mt-4">
                      <CardPizza key={pizza} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img}/>
                    </div>
                  ))}

                {/* <CardPizza 
                name= "Napolitano"
                price = {5950}
                ingredientes = {["mozzarella ", "tomates ", "jamón ", "orégano "]}
                img = "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                /> */}

              </div>



</main>
    
    
    </>
  )
}

export default Home