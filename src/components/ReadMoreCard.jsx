import '../styles/ReadMore.css'
const ReadMoreCard = (props) => {
    return(
        <div className="read-1">
            <img src={props.image}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button>{props.button}</button>
        </div>
    )
}
export default ReadMoreCard