import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

export const VideoCard = () => {
  return (
    <div className="video-container flex-col-start-start">
      <video
        muted
        loop
        poster="https://res.cloudinary.com/duddwta8d/video/upload/v1651992022/indian_cuisine_yh7kv7.jpg"
        alt="cuisine"
      >
        <source
          src="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1651992022/indian_cuisine_yh7kv7.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-actions flex-row-start-center">
        <div className="video-avatar">
          <img
            className="avatar avatar-md rounded"
            src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081722/avatar-1_q0h9ko.jpg"
            alt="avatar"
          />
        </div>
        <div className="video-details flex-col-center-start">
          <div className="video-title-info">
            <div className="video-title">
              Highlight - Raptor Fortnite
              <div className="video-subtitle">Fortnite meat</div>
            </div>
            <div className="video-extra-info">
              <BiDotsVerticalRounded className="md-icon" />
            </div>
          </div>
          <div className="video-subtitle sm-top-margin flex-row-start-center">
            6K views <BsDot className="md-icon"/> 4 hours ago
          </div>
        </div>
      </div>
    </div>
  );
};
