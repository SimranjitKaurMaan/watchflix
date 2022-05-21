import { VideoCard } from "./customComponents/VideoCard";
import { VideoPlayer } from "./customComponents/VideoPlayer";

export const Video = () => {
  return <div className="video-container-wrapper">
      <main>
          <VideoPlayer/>
      </main>
      <aside>
          <VideoCard/>
          <VideoCard/>
      </aside>
  </div>
};
