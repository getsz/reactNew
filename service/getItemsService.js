import httpRequest from "./httpRequest";

/**
 * @param data datadesc 
 * @return {Promise<>} {
 *  ...
 * }
 */

export function getItemsService(data) {
    const requestOption = {
        method: "post", //or get
        data // if has request data
    };
    return httpRequest("getitems", requestOption);
}