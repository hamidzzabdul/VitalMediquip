import "./Partners.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import Partner1 from "../../assets/partners/1.png"
import Partner2 from "../../assets/partners/2.png"
import Partner3 from "../../assets/partners/3.png"
import Partner4 from "../../assets/partners/4.jpg"
import Partner5 from "../../assets/partners/5.webp"
import Partner6 from "../../assets/partners/6.gif"
import Partner7 from "../../assets/partners/7.png"
import Partner8 from "../../assets/partners/8.png"



const partnerImages = [
    {
        id: 1,
        img: Partner1,
        link: 'http://www.cornley.com/en/product-7.html',
        alt: "Cornley company logo"
    },
    {
        id: 2,
        img: Partner2,
        link: 'https://www.edan.com/',
        alt: "Edan company logo"
    },
    {
        id: 3,
        img: Partner3,
        link: 'https://www.intecasi.com/',
        alt: "InTec company logo ",
        className: "intec"
    },
    {
        id: 4,
        img: Partner4,
        link: 'https://www.ozonebio.com/world',
        alt: "Medsource Ozone Biomedicals company logo"
    },
    {
        id: 5,
        img: Partner5,
        link: 'https://nsbiotec.com/',
        alt: "NS Biotec company logo"
    },
    {
        id: 6,
        img: Partner6,
        link: 'http://www.sinnowa.com/old/english/about/about.asp',
        alt: "Sinnowa company logo"
    },
    {
        id: 7,
        img: Partner7,
        link: 'http://www.urit.com/en2/index.aspx',
        alt: "URIT company logo"
    },
    {
        id: 8,
        img: Partner8,
        link: 'https://en.wondfo.com/',
        alt: "Wondfo company logo"
    },
]

const Partners = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 464 },
            items: 2
        }
    };

    return (
        <div className="our-partners">
            <h1 className="subTitle">Our partners</h1>
            <div className="partners-img">
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    arrows={false}
                    className="partner-logos"
                >

                    {partnerImages.map(partner => {
                        return (
                            <a href={partner.link} className={!partner.className ? "single-caraousel" : `single-caraousel ${partner.className}`} key={partner.id
                            } target="_blank" rel="noopener noreferrer">
                                <img src={partner.img} alt={partner.alt} />
                            </a>
                        )
                    })}

                </Carousel>
            </div>
        </div>
    )
}

export default Partners