import sendRequest from "./send-request";
const BASE_URL = '/api/website';

export function getAll() {
    return sendRequest(BASE_URL);
  }
  
  export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }
  
  export function createWebsite(websiteData) {
      console.log(websiteData)
    return sendRequest(BASE_URL, 'POST', websiteData);
  }
  
  export function deleteWebsite(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE' );
  }

