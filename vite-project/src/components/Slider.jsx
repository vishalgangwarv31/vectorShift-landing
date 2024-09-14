import image from '../assets/images/image.jpg' 

const Slider=()=>{
    return(
        <div className="slider-container">   
            <p className="heading">Large language models</p>
            <p className="info">Access the latest models through the VectorShift platform</p>
            <div class="slider-track">
                <img src={image} alt="Sliding Image 1" class="slider-image" />
                <img src={image} alt="Sliding Image 2" class="slider-image" />
                <img src={image} alt="Sliding Image 2" class="slider-image" />
            </div>

        </div>
    )
}

export default Slider;