import { useState } from 'react'
import { products } from '../catalogue/products'
import Product from './Product'
import Categories from './Categories'


function ShoppingList({ cart, updateCart }) {

    const [activeCategory, setActiveCategory] = useState('')

    const categories = products.reduce(
        (acc, product) => 
            acc.includes(product.category) ? acc : acc.concat(product.category), []
        )

    function addToCart(name, price) {
		const currentProductSaved = cart.find((product) => product.name === name)

		if (currentProductSaved) {
			const cartFilteredCurrentproduct = cart.filter(
				(product) => product.name !== name
			)
			updateCart([
				...cartFilteredCurrentproduct,
				{ name, price, amount: currentProductSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div className="container">
            <h1 className="mb-4">Catalogue</h1>

            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <div className="row">
                {products.map(({id, name, photo, battery, camera, dualSim, price, category, notice}) =>
                    !activeCategory || activeCategory === category ? ( 
                    
                    <div className="col-lg-4 mb-4">
                        <Product 
                            key={id}
                            name={name}
                            photo={photo}
                            battery={battery}
                            camera={camera}
                            dualSim={dualSim}
                            price={price}
                            notice={notice} 
                        />
                        
                        <hr/>

                        <div className="text-center">
                            <button className="btn btn-primary" onClick={() => addToCart(name, price)}>Ajouter au panier</button>
                        </div>    
                    
                    </div>
                    ) : null
                )}

            </div>
        </div>
    )
}

export default ShoppingList;
