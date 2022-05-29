import { SideNavBar } from "./customComponents/Navbar/SideNavBar";
import { VideoCard } from "./customComponents/VideoCard";

export const VideoListing = () => {
  return (
    <div className="videos-container">
        <SideNavBar/>
        <main className="flex-row-wrap-start-center">
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </main>
    </div>
  );
};
