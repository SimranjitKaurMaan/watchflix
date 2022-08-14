import { Config as config } from "../../Config";
import { fetchDataWithToken, postDataWithToken, postDataWithParams } from "../../services/APIHandler";
import { RequestType } from "../../services/APIHandler";

export const fetchWatchLaterVideos = async () => {
    const url = `${config.apiHost}/user/watchlater`;
    const response = await fetchDataWithToken(RequestType.GET, url);
    return response.watchlater;
 }

export const postToWatchLater = async ({...video}) => {
    const url = `${config.apiHost}/user/watchlater`;
    const response = await postDataWithToken(RequestType.POST, url, {video});
    return response.watchlater;
  }

  export const deleteFromWatchLater = async (videoId) => {
    const url = `${config.apiHost}/user/watchlater`;
    const response = await postDataWithParams(RequestType.DELETE, url, videoId);
    return response;
  }