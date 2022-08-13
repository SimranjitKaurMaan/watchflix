import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchVideo } from "../utils/requestUtils/VideosListingRequestUtils";
import { VideoCard } from "./customComponents/VideoCard";
import { VideoPlayer } from "./customComponents/VideoPlayer";

export const Video = () => {
const { id } = useParams();
const [video, setVideo] = useState({});
useEffect(() => {
    (async () => {
    const video = await fetchVideo(id);
    setVideo(video);
    })();
},[])
  return <div className="video-container-wrapper">
      <main>
          {Object.keys(video).length !== 0 && <VideoPlayer video={video}/>}
      </main>
      <aside>
          <h2 className="highlight-text sm-left-margin">Up next</h2>
          <VideoCard video={video}/>
      </aside>
  </div>
};
