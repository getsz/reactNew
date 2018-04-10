/**
 * 微信朋友圈分享
 * @param {object} obj {title:分享标题, link:分享路径, imgUrl:分享图标}
 * @return {undefined}
 */
export default function wxShareTimeline(obj) {
    wx.onMenuShareTimeline({
        title: obj.title,
        link: obj.link || window.location.href,
        imgUrl: obj.imgUrl,
        success: function () {
            // 用户确认分享后执行的回调函数
            alert("分享到朋友圈成功");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            alert("你没有分享到朋友圈");
        }
    });
}
