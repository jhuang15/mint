import sendRequest from "./send-request";
const BASE_URL = '/api/website';

export function createWebsite(websiteData){
    return sendRequest(BASE_URL, 'POST', websiteData);
}
export function getWebsite() {
    return sendRequest(BASE_URL)
}