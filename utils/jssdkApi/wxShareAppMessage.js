/**
 * 微信好友分享
 * @param {object} obj {title:分享标题, link:分享路径, desc:分享描述, imgUrl:分享图标}
 * @return {undefined}
 */
export default function wxShareAppMessage(obj) {
    wx.onMenuShareAppMessage({
        title: obj.title, // 分享标题
        desc: obj.desc, // 分享描述
        link: obj.link || window.location.href, // 分享链接
        imgUrl: obj.imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            alert("分享成功");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            alert("分享取消");
        }
    });
}
