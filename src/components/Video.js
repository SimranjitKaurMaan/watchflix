import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchVideo } from "../utils/requestUtils/VideosListingRequestUtils";
import { VideoCard } from "./customComponents/VideoCard";
import { VideoPlayer } from "./customComponents/VideoPlayer";

export const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  useEffect(() => {
    (async () => {
      const video = await fetchVideo(id);
      setVideo(video);
    })();
  }, [id]);
  return (
    <div className="video-container-wrapper">
      <main>{video && <VideoPlayer video={video} />}</main>
      <aside>
        {video && (
          <Fragment>
            <h2 className="highlight-text sm-left-margin">Up next</h2>
            <VideoCard video={video} />
          </Fragment>
        )}
      </aside>
    </div>
  );
};
