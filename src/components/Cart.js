import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {

    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
		(acc, productType) => acc + productType.amount * productType.price, 0
	)

    useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    }, [total])

    return isOpen ? (
    
    <section className="h-100 h-custom">
        <button className="btn" onClick={() => setIsOpen(false)}>Fermer</button>
        <hr/>   
        <div className="row d-flex justify-content-center align-items-top h-100">
            
                <div className="row">
                    <div className="col-lg-7">
                        <h5 className="mb-3"><a href="#!" className="text-body"><i
                            className="fas fa-long-arrow-alt-left mb-2"></i>Panier</a></h5>
                        
                        <hr />

                        { cart.length > 0 ? ( 
                        
                        <div>
                            <ul className='mb-4'>
                                {cart.map(({ name, price, amount }, index) => (
                                    <div key={`${name}-${index}`}>
                                        <li>
                                            {name} {price}€ x {amount}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <h5 className='mb-4'>Total : {total}€</h5>
                            <button className="btn btn-warning" onClick={() => updateCart([])}>Vider le panier</button>
                        </div>
                        
                        ) : (    
                            <div className=''>Votre panier est vide</div>
                        )}

                    </div>
                </div>
        
        </div>
    </section>
    
    ) : (
    
    <section className="h-100 h-custom mt-5">
        <div>
            <button className='btn' onClick={() => setIsOpen(true)} >
                Ouvrir le Panier
            </button>
        </div>
    </section>

    )
}

export default Cart
