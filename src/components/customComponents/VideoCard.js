import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

export const VideoCard = ({video}) => {
  return (
    <div className="video-container flex-col-start-start">
      <video
        muted
        loop
        poster={video.posterUrl}
        alt="cuisine"
      >
        <source
          src={video.videoUrl}
          type="video/mp4"
        />
      </video>
      <div className="video-actions flex-row-start-center">
        <div className="video-avatar">
          <img
            className="avatar avatar-md rounded"
            src={video.creatorAvatar}
            alt="avatar"
          />
        </div>
        <div className="video-details flex-col-center-start">
          <div className="video-title-info">
            <div className="video-title">
              {video.title}
              <div className="video-subtitle">{video.subtitle}</div>
            </div>
            <div className="video-extra-info">
              <BiDotsVerticalRounded className="md-icon" />
            </div>
          </div>
          <div className="video-subtitle sm-top-margin flex-row-start-center">
            {video.views} views <BsDot className="md-icon"/> {video.uploadedAt}
          </div>
        </div>
      </div>
    </div>
  );
};
