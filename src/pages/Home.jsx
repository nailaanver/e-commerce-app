import Header from "../components/Header"
import HomeBanner from "../components/HomeBanner"
import OurBenefits from "../components/OurBenefits"
import Quote from "../components/Quote"
import Category from "../components/Category"
import Footer from "../components/Footer"
import ReadMore from "../components/ReadMore"
import Skills from "../components/Skills"
import OurBlog from "../components/OurBlog"
import ShowcasedProduct from "../components/ShowcasedProduct"
import Counter from "../components/UseReducer"
const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <main>
                <HomeBanner />
                <Counter/>
                <OurBenefits />
                
                <Quote/>
                <ShowcasedProduct/>
                <Category/>
                <ReadMore/>
                <Skills/>
                <OurBlog/>
                {/* <Footer/> */}
            </main>

        </div>


    )
}
export default Home