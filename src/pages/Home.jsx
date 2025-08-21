import Header from "../components/Header"
// import HomeBanner from "../components/HomeBanner"
import OurBenefits from "../components/OurBenefits"
import Quote from "../components/Quote"
import Category from "../components/Category"
import Footer from "../components/Footer"
import ReadMore from "../components/ReadMore"
import Skills from "../components/Skills"
import OurBlog from "../components/OurBlog"
import ShowcasedProduct from "../components/ShowcasedProduct"
import Counter from "../components/UseReducer"
import { Suspense, useState } from "react"
import React from "react"




const HomeBanner = React.lazy(() => import('../components/HomeBanner'))

const Home = () => {

return (
         
      
        
        <div>


            {/* <Header /> */}
            <main>
                 <Suspense fallback={<div>Loading...</div>}>
                <HomeBanner />
                </Suspense>
                <OurBenefits />
                <Quote />
                <ShowcasedProduct />
                <Category />
                <ReadMore />
                <Skills />
                <OurBlog />

                {/* <Footer/> */}
            </main>

        </div>


    )
}
export default Home