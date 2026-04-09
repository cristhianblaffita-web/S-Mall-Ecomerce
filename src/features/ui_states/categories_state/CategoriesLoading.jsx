import "./CategoriesState.css"

const CategoriesState = () => {
    return (
        <div className="categories-state categories-loading"> 
            <div className="spinner"></div>
            <p>Loading categories...</p>
            <small>This will take just a moment.</small>
        </div>
    )
}
export default CategoriesState