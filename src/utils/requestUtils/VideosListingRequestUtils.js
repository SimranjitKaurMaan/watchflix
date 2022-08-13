import { Config as config} from "../../Config";
import { fetchData, RequestType } from "../../services/APIHandler";

export const fetchVideosByCategory = async (categoryName) => {
    const url = `${config.apiHost}/category/${categoryName}/videos`;
    const response = await fetchData(RequestType.GET, url);
    const videos = response.videos;
    return videos;
}