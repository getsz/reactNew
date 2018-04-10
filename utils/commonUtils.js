export function calculateBeginDate(value) {
    if (!Number(value)) {
        return new Date();
    }

    const currentTime = (new Date()).getTime();
    const targetTime = currentTime - Number(value) * 1000 * 60 * 60 * 24;
    return new Date(targetTime);

}

export function getQueryFromUrl() {
    const arr = window.location.href.split("?");
    let paramObj;
    if (arr.length > 1) {
        const queryStr = arr[1];
        paramObj = decodeUrlParam(queryStr);
    } else {
        paramObj = null;
    }
    return paramObj;
}

export function encodeUrlParam(a) {
    const arr = [];
    let key = "";
    for (key in a) {
        arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(a[key]));
    }

    return arr.join("&").replace(/%20/g, "+");
}

export function decodeUrlParam(a) {

    const arr = a.replace(/\+/g, "%20").split("&");
    const obj = {};
    let value = "";
    let arrTemp = [];
    for (value in arr) {
        arrTemp = arr[value].split("=");
        obj[decodeURIComponent(arrTemp[0])] = decodeURIComponent(arrTemp[1]);
    }
    return obj;
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}

export function isEmpty(src) {
    return src === null || src === undefined || src.length === 0 || src === " ";
}

export function isNumber(src) {
    return src - Number.parseFloat(src) >= 0;
}

/**
 * 获取对象子级或孙子级值
 * @param {IObj} obj target
 * @param {string} key "a.b.c"
 * @example getKey({a:{b: "c"}}, "a.b");
 * @returns {*} key值
 */
export function getKey(obj, key) {
    const keys = key.split(".");
    const currentKey = keys.shift();
    if (!obj[currentKey]) {
        return undefined;
    }
    if (!keys.length) {
        return obj[currentKey];
    }
    return getKey(obj[currentKey], keys.join("."));
}

/**
 * 格式化时间  20100815 to '2010/08/15'
 * @param {number} int 时间
 * @param {string} split 分隔符
 * @returns {string} 格式化日期
 */
export function convertDate(int, split) {
    const str = int + "";
    if (str.length !== 8) {
        console.log("input is wrong, for example: 20151008");
        return ["00", "00", "00"].join(split || "/");
    }

    const year = str.substr(0, 4);
    const month = str.substr(4, 2);
    const date = str.substr(6, 2);

    return [year, month, date].join(split || "/");
}

/**
 * 格式化时间  new Date() to '2010/08/15'
 * @param {date} time 时间
 * @param {string} split 分隔符
 * @returns {string} 格式化时间
 */
export function formatDate(time, split) {
    const year = time.getFullYear();
    const month = (time.getMonth() + 1) < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);
    const date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();

    return [year, month, date].join(split || "");
}

/**
 * 获取url参数
 * @method getUrlParam
 * @param {string} name 参数名
 * @return {string} 参数值
 */
export function getUrlParam(name) {
    const _url = window.location.search;
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    const r = _url.substr(1).match(reg); //匹配目标参数
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return ""; //返回参数值
}