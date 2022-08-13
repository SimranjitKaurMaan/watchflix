import { Config as config} from "../../Config";
import { fetchData, RequestType } from "../../services/APIHandler";

export const fetchVideosByCategory = async (categoryName) => {
    const url = `${config.apiHost}/category/${categoryName}/videos`;
    const response = await fetchData(RequestType.GET, url);
    const videos = response.videos;
    return videos;
}

export const fetchVideo = async (videoId) => {
    const url = `${config.apiHost}/videos/${videoId}`
    const response = await fetchData(RequestType.GET, url);
    const video = response.video;
    return video;
}