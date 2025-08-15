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
const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <main>
                <HomeBanner />
                <OurBenefits />
                <ShowcasedProduct/>
                <Quote/>
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