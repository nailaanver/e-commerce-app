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
            </div>
        </section>
    )
}
export default ReadMore