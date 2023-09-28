function Header({ children }) {
    
    return (
        <header className="mb-2" style={{height: '120px'}}>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-4">
                    <img className="img-responsive" src="https://logo.com/image-cdn/images/kts928pd/production/a195406f1cbf3510e8901abf512267d4a80d2230-359x359.png?w=1080&q=72" style={{maxWidth: '100%', maxHeight: '100px', paddingLeft: '16px', marginTop: '8px'}} alt="logo" />
                </div>
                <div className="col-lg-10">
                    {children}
                </div>
            </div>
        </header>
    )
}

export default Header
