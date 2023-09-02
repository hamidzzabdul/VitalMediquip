import "./HowItBegan.scss"
import Ceo from "../../assets/ceo.jpg"
const HowItBegan = () => {
    return (
        <div className='begining'>
            <div className="ceo-img">
                <img src={Ceo} alt="vital Ceo" />
            </div>
            <div className="begining-story">
                <label>
                    <div className="line"></div>
                    <h2>How it Began</h2>
                </label>
                <p>At VitalMediQuip, Our mission is to ensure that healthcare professionals
                    have access to essential tools.At VitalMediQuip, Our mission is to ensure that
                    healthcare professionals have access to essential tools.At VitalMediQuip, Our mission is to ensure
                    that healthcare professionals have access to essential tools.
                </p>
            </div>
        </div>
    )
}

export default HowItBegan