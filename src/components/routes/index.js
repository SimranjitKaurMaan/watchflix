import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "../customComponents/RequiresAuth";
import { History } from "../History"
import { Liked } from "../Liked"
import { Main } from "../Main"
import { MockAPI } from "../MockAPI"
import { Signup } from "../Signup"
import { Video } from "../Video"
import { VideoDiscover } from "../VideoDiscover";
import { VideoListing } from "../VideoListing"
import { WatchLater } from "../WatchLater";

export const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/videos" element={<VideoDiscover/>} />
        <Route path="/videos/category/:category" element={<VideoListing/>} />
        <Route path="/videos/:id" element={<Video/>}/>
        <Route path="videos/liked" element={<RequiresAuth><Liked/></RequiresAuth>}/>
        <Route path="videos/watchlater" element={<RequiresAuth><WatchLater/></RequiresAuth>}/>
        <Route path="videos/history" element={<RequiresAuth><History/></RequiresAuth>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mockman" element={<MockAPI/>}/>
    </Routes>);
}