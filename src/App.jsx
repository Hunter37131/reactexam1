import { useState } from 'react'
import { Card } from "./components/card/index"
import { info } from "./components/card/product"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from "./assets/Logo (8).png"
import Search from "./assets/vector (6).png"
import Icons from "./assets/Frame 551.png"
// import Stars from "./assets/Five star.png"


function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className='Logo'>
              <img src={Logo} alt="" />
            </div>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign up</a></li>
                <li><input type="text" placeholder='What are you looking for?'/><img src={Search} alt="" /></li>
              </ul>
            </nav>
              <div className='icons'>
                <img src={Icons} alt="" />
              </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className='middle'>
              <div><h4>Products</h4></div>
              <div><button>Move All To Bag</button></div>
            </div>
            <div className='cards'>
              {info.map((el) => {
                return <Card data={el}/>
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
