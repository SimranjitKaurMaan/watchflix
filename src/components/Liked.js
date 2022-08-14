import { useEffect, useState } from "react";
import { fetchLikedVideos } from "../utils/requestUtils/LikedRequestUtils";
import { SideNavBar } from "./customComponents/Navbar/SideNavBar";
import { VideoCard } from "./customComponents/VideoCard";

export const Liked = () => {
  const [likedVideos, setLikedVideos] = useState([]);
    useEffect(() => {
      (async () => {
      const videos = await fetchLikedVideos();
      setLikedVideos(videos);
      })();
    }, []);
  return (
    <div className="videos-container">
        <SideNavBar/>
        <main className="flex-row-wrap-start-center">
          {likedVideos && likedVideos.map((video,index) => <VideoCard key={index} video={video}/>)}
        </main>
    </div>
  );
};
