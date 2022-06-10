import sendRequest from "./send-request";
const BASE_URL = '/api/website';

export function createWebsite(websiteData){
    return sendRequest(BASE_URL, 'POST', websiteData);
}
export function getWebsite() {
    return sendRequest(BASE_URL)
}

// Add guest to invite list
export function addGuestToInvite(guestId) {
    // Just send itemId for best security (no pricing)
    return sendRequest(`${BASE_URL}/invite/guests/${guestId}`, 'POST');
  }
  
