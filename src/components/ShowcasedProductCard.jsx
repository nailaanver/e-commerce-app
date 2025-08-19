import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/ShowcasedProdect.css'

const ShowcasedProductCard = (props) => {
    return(
        <div className="showcase-card-1">
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p></p>
            <h4>{props.price}</h4>
        </div>
    )
}
export default ShowcasedProductCard