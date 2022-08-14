import { Config as config } from "../../Config";
import { fetchDataWithToken, postDataWithToken, postDataWithParams } from "../../services/APIHandler";
import { RequestType } from "../../services/APIHandler";

export const fetchLikedVideos = async () => {
    const url = `${config.apiHost}/user/likes`;
    const response = await fetchDataWithToken(RequestType.GET, url);
    return response.likes;
 }

export const postToLikes = async ({...video}) => {
    const url = `${config.apiHost}/user/likes`;
    const response = await postDataWithToken(RequestType.POST, url, {video});
    return response.likes;
  }

  export const deleteFromLikes = async (videoId) => {
    const url = `${config.apiHost}/user/likes`;
    const response = await postDataWithParams(RequestType.DELETE, url, videoId);
    return response;
  }