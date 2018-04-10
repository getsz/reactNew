import httpRequest from "lk-http-request";

/**
 * @param data datadesc 
 * @return {Promise<>} {
 *  ...
 * }
 */

export function getWxSignService(obj) {
    const requestOption = {
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: { "url": window.location.href }
    };
    return httpRequest(obj.url, requestOption);
}