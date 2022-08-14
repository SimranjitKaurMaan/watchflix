import { Config } from "../../Config";
import { fetchData, RequestType } from "../../services/APIHandler";

export const fetchCategories = async () => {
    const url = `${Config.apiHost}/categories`
    const response = await fetchData(RequestType.GET, url);
    const categories = response.categories;
    return categories;
}