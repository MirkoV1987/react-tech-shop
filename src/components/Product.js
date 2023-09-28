function Product({ name, photo, battery, camera, dualSim, price, notice }) {

    return (
        <div className="card mb-3">
            <div className="card-body rounded-3">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="col-lg-12 mb-4">
                            <h5 className="text-center mt-2 mb-4">{name}</h5>
                            <img src={photo} className="img-fluid rounded-3" alt="Shopping item" style={{width: '80%'}} />
                        </div>

                        <div className="product__details">
                            <div className="ms-2 mb-0">
                                <p className="small mb-0">Caméra : {camera} pixels</p>
                            </div>
                            <div className="ms-2">
                                <p className="small mb-0">Durée de la batterie : {battery} heures</p>
                            </div>
                            <div className="ms-2">
                                <p className="small mb-0">dualSim: {dualSim}</p>
                            </div>
                            <hr/>
                            <div className="ms-2">
                                <p className="small mb-0">
                                    Avis de nos clients
                                </p>
                            </div>
                            <div className="ms-2">
                                <p className="small mb-0">
                                    {notice}
                                </p>
                            </div>
                            <hr/>
                            <div className="ms-2 product__price" style={{verticalAlign: 'bottom'}}>
                                <p className="mb-0 text-center">Prix : {price} €</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Product
