import {HiPlay} from "react-icons/hi"

export const Banner = () => {
    return <>
    <div className="hero-container">
        <video muted loop poster="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1650787926/kitchen-banner_t9bgmb.jpg" alt="banner">
            <source src="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1650787926/kitchen-banner_t9bgmb.mp4" type="video/mp4" />
        </video>
        <div class="hero-content-overlay">
            <div className="md-heading sm-top-margin">🏆 VIDEO OF THE DAY</div>
            <h1 className="highlight-text">VEG GRILL SANDWICH</h1>
            <h2 className="highlight-text">BY SELENA GOLEMEZ</h2>
            <div className="md-heading extra-lg-top-margin">Charlie Putz - Veg Grill Sandwich</div>
            <div className="md-heading">feat. Selena Golomez</div>
            <HiPlay size={"4rem"} style={{color: "#FE3562"}}/>
        </div>
      </div>
    </>
}