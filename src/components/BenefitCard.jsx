import '../styles/BenefitCard.css'
const BenefitCard = (props) => {
    return(
        <div className='card-1'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default BenefitCard