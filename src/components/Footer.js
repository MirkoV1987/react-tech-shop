function Footer({ children }) {

    return (
        <footer>
            {children}
            <p className="text-center mb-0 pt-2">
                <small>
                    @Copyright Mirko Venturi 2023
                </small>
            </p>
        </footer>
    )

}

export default Footer
