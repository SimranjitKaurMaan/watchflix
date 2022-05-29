import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { RiMenuAddFill } from "react-icons/ri";

export const VideoPlayer = () => {
  return (
    <div className="video-player-container">
      <video
        className="video-js vjs-big-play-centered"
        controls
        preload="auto"
        data-setup="{}"
        poster=""
      >
        <source
          src="https://res.cloudinary.com/duddwta8d/video/upload/e_blur:100/v1651992022/indian_cuisine_yh7kv7.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-player-actions flex-row-start-start">
        <div className="video-avatar">
          <img
            className="avatar avatar-md rounded"
            src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081722/avatar-1_q0h9ko.jpg"
            alt="avatar"
          />
        </div>
        <div className="video-player-details flex-col-center-start">
          <div className="video-title-info">
            <div className="video-player-title">
              Highlight - Raptor Fortnite
            </div>
            <div className="video-extra-info">
              <button className="btn btn-primary">
                Subscribe &nbsp; . &nbsp; 12M
              </button>
            </div>
          </div>
          <div className="video-player-subtitle sm-top-margin">
            by <span className="highlight-text">Fortnite Meat</span> &nbsp; |
            &nbsp; 31,727,857 views &nbsp; | &nbsp; May 28,2018
          </div>
          <div class="divider"></div>
          <div className="video-description-container sm-top-margin">
            <div className="video-description">
              Chaining transformations can create long URLs, so instead you
              could define a named transformation that includes a chain of other
              transformations, including other named transformations. For
              example, we can create a named transformation that is a composite
              of the three named transformations described above. It is now
              simple to specify a single named transformation instead.
            </div>
            <div className="video-player-buttons">
              <div className="icon-container">
                <AiFillLike size={"1.2rem"} color="grey" />
              </div>
              <span className="highlight-text icon-text-container">33K</span>
              <div className="icon-container">
                <AiFillDislike size={"1.2rem"} color="grey" />
              </div>
              <span className="highlight-text icon-text-container"> 929</span>
              <div className="icon-container">
                <MdWatchLater size={"1.2rem"} color="grey" />
              </div>
              <div className="icon-container">
                <RiMenuAddFill size={"1.2rem"} color="grey" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
