import Category from '../Components/Homepage/Category'
// import Contact from '../Components/Homepage/Contact'
import Faq from '../Components/Homepage/Faq'
import Hero from '../Components/Homepage/Hero'
import Partners from '../Components/Homepage/Partners'
import Trending from '../Components/Homepage/Trending'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Category />
            <Trending />
            <Partners />
            <Faq />
        </>
    )
}

export default HomePage