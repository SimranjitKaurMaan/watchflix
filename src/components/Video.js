import { VideoCard } from "./customComponents/VideoCard";
import { VideoPlayer } from "./customComponents/VideoPlayer";

export const Video = () => {
  return <div className="video-container-wrapper">
      <main>
          <VideoPlayer/>
      </main>
      <aside>
          <h2 className="highlight-text sm-left-margin">Up next</h2>
          <VideoCard/>
          <VideoCard/>
      </aside>
  </div>
};
