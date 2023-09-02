import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Trending.scss"
import Product from "../../assets/Trending/hametology.jpg"
import CustomDot from "../UI/CustomDots";

import Button from "../UI/Button"

const dummyTrending = [
    {
        id: 1,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
    {
        id: 2,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
    {
        id: 3,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
    {
        id: 4,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
    {
        id: 5,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
]


const Trending = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 464 },
            items: 1
        }
    };
    const [activeSlide, setActiveSlide] = useState(0);

    let carouselRef;


    const handleBeforeChange = (prevSlide, currentSlide) => {
        setActiveSlide(currentSlide);

        // If the last item is reached, loop back to the first item
        if (currentSlide === responsive.desktop.items) {
            carouselRef.goToSlide(0);
        }
    };

    return (
        <div className='trending-container section'>
            <h3>Trending / New</h3>
            <Carousel
                ref={(ref) => (carouselRef = ref)}
                responsive={responsive}
                showDots={true}
                swipeable={true}
                draggable={true}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                activeIndex={activeSlide}
                beforeChange={handleBeforeChange}
                customDot={<CustomDot />}
                className="trending-carousel">
                {dummyTrending.map(obj => {
                    return (
                        <div key={obj.id} className="single-caraousel">
                            <img src={obj.image} alt="product" />
                            <div className="product-description">
                                <p className="category">Laboratory</p>
                                <p className="name">Haematology Analyzer</p>
                                <Button label="Read More" className="read-more-btn" />
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Trending