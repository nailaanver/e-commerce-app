import CategoryCard from "./CategoryCard"
import { CategoryData} from "../data/CategoryData"
import '../styles/Category.css'

const Category = () => {
    return(
        <section id="category-sec">
            <div className="category container">
                {
                CategoryData.map((item,index)=> <CategoryCard key = {index} image= {item.image} title = {item.title} description={item.description}/>)
            }
            </div>
        </section>
    )
}
export default Category