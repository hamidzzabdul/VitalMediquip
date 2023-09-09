import "./Trending.scss"
import Product from "../../assets/Trending/hametology.jpg"
import Button from "../UI/Button"

import { Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

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
    {
        id: 6,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
    {
        id: 7,
        image: Product,
        category: "Laboratory",
        name: "Haematology Analyzer"
    },
]


const Trending = () => {
    return (
        <div className='trending-container section'>
            <div className="navigation">
                <h2>Trending / New</h2>
            </div>
            <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={2}
                pagination={{ clickable: true }}
                breakpoints={{
                    950: {
                        slidesPerView: 4,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    450: {
                        slidesPerView: 1
                    }
                }}
                onSlideChange={() => console.log("slide changed")}
                className="trending-wrapper"
            >
                {dummyTrending.map(obj => {
                    return (
                        <SwiperSlide key={obj.id} className="single-caraousel">
                            <div className="product-image">
                                <img src={obj.image} alt="product" />
                            </div>
                            <div className="product-description">
                                <p className="category">Laboratory</p>
                                <p className="name">Haematology Analyzer</p>
                                {/* <Button label="Read More" className="read-more-btn" /> */}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export default Trending