import { useState } from "react";
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiMenuAddFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../contexts/auth-context";
import { deleteFromLikes, postToLikes } from "../../utils/requestUtils/LikedRequestUtils";
import { postToWatchLater } from "../../utils/requestUtils/WatchLaterRequestUtils";

export const VideoPlayer = ({ video }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showLikeIcon, setShowLikeIcon] = useState(true);
  const [showDislikeIcon, SetShowDislikeIcon] = useState(true);
  const [showWatchLaterIcon, setShowWatchLaterIcon] = useState(true);

  const addToLikesHandler = ({ ...video }) => {
    postToLikes(video);
    setShowLikeIcon(false);
  };

  const deleteFromLikestHandler = async ({...video}) => {
    deleteFromLikes(video._id);
    SetShowDislikeIcon(false);
 }

 const addToWatchLaterHandler = ({ ...video }) => {
  postToWatchLater(video);
  setShowWatchLaterIcon(false);
};

  return (
    <div className="video-player-container">
      <video
        className="vjs-big-play-centered"
        controls
        autoPlay
        loop
        preload="auto"
        data-setup="{}"
        poster=""
      >
        <source src={video.videoUrl} type="video/mp4" />
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
            <div className="video-player-title">{video.title}</div>
            <div className="video-extra-info">
              <button className="btn btn-primary">
                Subscribe &nbsp; . &nbsp; {video.subscribers}
              </button>
            </div>
          </div>
          <div className="video-player-subtitle sm-top-margin">
            by <span className="highlight-text">{video.creator}</span> &nbsp; |
            &nbsp; {video.views} views &nbsp; | &nbsp; {video.uploadedAt}
          </div>
          <div className="divider"></div>
          <div className="video-description-container sm-top-margin">
            <div className="video-description">{video.description}</div>
            <div className="video-player-buttons">
              <div
                className="icon-container"
                onClick={() => {
                  isLoggedIn
                    ? addToLikesHandler(video)
                    : navigate("/signup", {
                        replace: true,
                        state: { from: location },
                      });
                }}
              >
               {showLikeIcon ? <AiOutlineLike className="md-icon" /> : <AiFillLike className="md-icon" />}
              </div>
              <span className="highlight-text icon-text-container">
                {video.likes}
              </span>
              <div className="icon-container" onClick={() => {
                  isLoggedIn
                    ? deleteFromLikestHandler(video)
                    : navigate("/signup", {
                        replace: true,
                        state: { from: location },
                      });
                }}> 
                {showDislikeIcon ? <AiOutlineDislike className="md-icon"/> : <AiFillDislike className="md-icon"/>}
              </div>
              <span className="highlight-text icon-text-container">
                {video.dislikes}
              </span>
              <div className="icon-container" onClick={() => {
                  isLoggedIn
                    ? addToWatchLaterHandler(video)
                    : navigate("/signup", {
                        replace: true,
                        state: { from: location },
                      });
                }}> 
                {showWatchLaterIcon ? <MdOutlineWatchLater className="md-icon"/> : <MdWatchLater className="md-icon"/>}
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
