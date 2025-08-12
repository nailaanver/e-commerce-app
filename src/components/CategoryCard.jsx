import '../styles/CategoryCard.css'
const CategoryCard = (props) => {
    return(
        <div className="img-card">
            <img src={props.image}/>
            <div className="img-card-in">
                <h3>{props.title}</h3>
                <p>{props.department}</p>
            </div>
            
        </div>
    )
}
export default CategoryCard