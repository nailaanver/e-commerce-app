import '../styles/OurBenefits.css'
import { Benefits } from '../data/Benefits'
import BenefitCard from './BenefitCard'
const OurBenefits = () => {
    return(
        <section id="our-benefits">
            <div className="benefits container">
                <div className="span-card">
                    <h4>OUR BENEFITS</h4>
                    <h3>Ambitious Studio with a Successful</h3> 
                    <h3>Concept & Ideas </h3>
                    <button>More Detail</button>
                </div>
                {
                    Benefits.map((item) => <BenefitCard title = {item.title} description = {item.description}></BenefitCard>)
                }
            </div>
        </section>
    )
}
export default OurBenefits