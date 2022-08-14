import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchVideosByCategory } from "../utils/requestUtils/VideosListingRequestUtils";
import { SideNavBar } from "./customComponents/Navbar/SideNavBar";
import { VideoCard } from "./customComponents/VideoCard";

export const VideoListing = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
    useEffect(() => {
      (async () => {
      const videos = await fetchVideosByCategory(category);
      setVideos(videos);
      })();
    }, []);
  return (
    <div className="videos-container">
        <SideNavBar/>
        <main className="flex-row-wrap-start-center">
          {videos.map((video,index) => <VideoCard key={index} video={video}/>)}
        </main>
    </div>
  );
};
