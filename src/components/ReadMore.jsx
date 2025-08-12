import '../styles/ReadMore.css'
import ReadMoreCard from './ReadMoreCard'
import { ReadMoreData } from '../data/ReadMoreData'
const ReadMore = () => {
    return(
        <section id="read-more-sec">
            <div className="container read-more">
                {
                    ReadMoreData.map((item) =><ReadMoreCard  image = {item.image} title = {item.title} description= {item.description} button = {item.button}/>)
                }
                {/* <div className="read-1">
                    <img src="	https://on3-step.com/tf/cohous/html/img/icon/comp.png"/>
                    <h2>Design & Planing</h2>
                    <p>We will help you to get the result you dreamed of</p>
                    <button>Read More</button>
                </div> */}
            </div>
        </section>
    )
}
export default ReadMore