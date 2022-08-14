import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { RiMenuAddFill } from "react-icons/ri";

export const VideoPlayer = ({video}) => {
  return (
    <div className="video-player-container">
      <video
        className="vjs-big-play-centered"
        controls
        preload="auto"
        data-setup="{}"
        poster=""
      >
        <source
          src={video.videoUrl}
          type="video/mp4"
        />
      </video>
      <div className="video-player-actions flex-row-start-start">
        <div className="video-avatar">
          <img
            className="avatar avatar-md rounded"
            src={video.creatorAvatar}
            alt="avatar"
          />
        </div>
        <div className="video-player-details flex-col-center-start">
          <div className="video-title-info">
            <div className="video-player-title">
             {video.title}
            </div>
            <div className="video-extra-info">
              <button className="btn btn-primary">
                Subscribe &nbsp; . &nbsp; 12M
              </button>
            </div>
          </div>
          <div className="video-player-subtitle sm-top-margin">
            by <span className="highlight-text">{video.creator}</span> &nbsp; |
            &nbsp; {video.views} views &nbsp; | &nbsp; {video.uploadedAt}
          </div>
          <div class="divider"></div>
          <div className="video-description-container sm-top-margin">
            <div className="video-description">
             {video.description}
            </div>
            <div className="video-player-buttons">
              <div className="icon-container">
                <AiFillLike className="md-icon" />
              </div>
              <span className="highlight-text icon-text-container">{video.likes}</span>
              <div className="icon-container">
                <AiFillDislike className="md-icon" />
              </div>
              <span className="highlight-text icon-text-container">{video.dislikes}</span>
              <div className="icon-container">
                <MdWatchLater className="md-icon" />
              </div>
              <div className="icon-container">
                <RiMenuAddFill className="md-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
