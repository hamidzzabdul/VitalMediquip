import "./Partners.scss"
// import PartnerImage from "../../assets/partners/partners.png"
const Partners = () => {
    return (
        <div className="our-partners">
            <div className="partner-description">
                <h2>Why partner with Vital Mediquip</h2>

                <div className="reasons">
                    <ul>
                        <li>
                            <div className="bullets"></div>
                            Great price slash
                        </li>
                        <li>
                            <div className="bullets"></div>
                            Timely delivery
                        </li>
                        <li>
                            <div className="bullets"></div>
                            Expert guidance

                        </li>

                        <li>
                            <div className="bullets"></div>
                            Exceptional customer service
                        </li>

                        <li>
                            <div className="bullets"></div>
                            Broad product range
                        </li>

                        <li>
                            <div className="bullets"></div>
                            Customized solutions
                        </li>
                        <li>
                            <div className="bullets"></div>
                            High-quality products
                        </li>
                    </ul>

                </div>

                <h3 className="subTitle">Our partners</h3>
            </div>
            <div className="partners-img">
                <div className="partner-logos">
                    {/* <img src={PartnerImage} alt="partners" />
                    <img src={PartnerImage} alt="partners" />
                    <img src={PartnerImage} alt="partners" />
                    <img src={PartnerImage} alt="partners" />
                    <img src={PartnerImage} alt="partners" /> */}
                </div>
            </div>
        </div>
    )
}

export default Partners