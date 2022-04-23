import { Routes, Route } from "react-router"
import { History } from "../History"
import { Liked } from "../Liked"
import { Main } from "../Main"
import { MockAPI } from "../MockAPI"
import { Signup } from "../Signup"
import { Video } from "../Video"
import { VideoListing } from "../VideoListing"

export const Router = () => {
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/videos/:category" element={<VideoListing/>} />
        <Route path="/videos/:id" element={<Video/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/mockman" element={<MockAPI/>}/>
    </Routes>
}