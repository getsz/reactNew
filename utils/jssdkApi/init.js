import { getWxSignService } from "./getWxSignService";

export default function init(signUrl) {
    return new Promise((resolve, reject) => {
        getWxSignService({ url: signUrl })
            .then((data) => {
                wx.config({
                    debug: process.env.NODE_ENV === "production" ? false : true,
                    appId: data.appid,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        "onMenuShareTimeline",
                        "onMenuShareAppMessage",
                        "onMenuShareQQ",
                        "onMenuShareWeibo"
                    ]
                });
                wx.ready(function () {
                    resolve();
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
}
