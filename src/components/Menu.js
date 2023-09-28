function Menu() {

    return (
        <nav className="navbar navbar-expand-lg py-5">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto px-5">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Item1</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Item2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Item3</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Item4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Item5</a>
                    </li>
                </ul>
                
                <form className="form-inline my-2 my-lg-0">
                    <div className="input-group">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append px-2">
                            <button className="btn btn-outline-primary ml-4" type="submit">Recherche</button>
                        </div>
                    </div>
                </form>
            </div>

        </nav>
    )

} 

export default Menu
