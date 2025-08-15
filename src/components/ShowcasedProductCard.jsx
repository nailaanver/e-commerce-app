import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/ShowcasedProdect.css'

const ShowcasedProductCard = (props) => {
    return(
        <div className="showcase-card-1">
            <img src={props.image}/>
            <h4>{props.title}</h4>
            <p></p>
            <h4>{props.price}</h4>
        </div>
    )
}