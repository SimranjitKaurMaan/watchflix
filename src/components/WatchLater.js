import { useEffect, useState } from "react";
import { fetchWatchLaterVideos } from "../utils/requestUtils/WatchLaterRequestUtils";
import { SideNavBar } from "./customComponents/Navbar/SideNavBar";
import { VideoCard } from "./customComponents/VideoCard";

export const WatchLater = () => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
    useEffect(() => {
      (async () => {
      const videos = await fetchWatchLaterVideos();
      setWatchLaterVideos(videos);
      })();
    }, []);
  return (
    <div className="videos-container">
        <SideNavBar/>
        <main className="flex-row-wrap-start-center">
          {watchLaterVideos && watchLaterVideos.map((video,index) => <VideoCard key={index} video={video}/>)}
        </main>
    </div>
  );
};
