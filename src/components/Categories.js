function Categories({ setActiveCategory, categories, activeCategory }) {
    
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Filtrer par catégorie</label>
            </div>
        
            <select className="custom-select" id="inputGroupSelect01" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            
            <button className="btn btn-primary" onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories
