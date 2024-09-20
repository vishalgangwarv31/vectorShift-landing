import image from '../assets/images/image.jpg' 

const Slider=()=>{
    return(
        <div className="slider-container">   
            <p className="heading">Large language models</p>
            <p className="info">Access the latest models through the VectorShift platform</p>
            <div className="slider-track">
                <img src={image} alt="Sliding Image 1" className="slider-image" />
                <img src={image} alt="Sliding Image 2" className="slider-image" />
                <img src={image} alt="Sliding Image 2" className="slider-image" />
            </div>

        </div>
    )
}

export default Slider;