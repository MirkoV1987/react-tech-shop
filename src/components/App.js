import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.scss';
import '../sass/_main.scss'

// Components
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App() {
  const savedCart = localStorage.getItem('cart')

  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <body>

      <Header>
        <Menu/>
      </Header> 
      
      <div className="container-fluid mb-4" style={{marginTop: '140px'}} > 
        <div className="row">
          <div className="col-lg-12">
            <Banner/>
          </div>
        </div>

        <div className="row main">
          <div className="col-lg-8">
            <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
          <div className="col-lg-4 mt-5">
            <Cart cart={cart} updateCart={updateCart} />
          </div>
        </div>
      </div>

      <Footer>
        <div className="pt-1">
          <Menu/>
        </div>
      </Footer>

    </body>
  )
}

export default App
