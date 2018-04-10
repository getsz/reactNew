import axios from "axios";
import host from "./host";

export default function (url, opts) {
    const _opts = Object.assign({
        url,
        method: "post",
        baseUrl: host,
        timeout: 30000,
		withCredentials:process.env.NODE_ENV ==="production" ? false : true
    }, opts);
    if(_opts.method === "post") {
        _opts.data = opts.data;
    } else {
        _opts.params = opts.data;
    }
    return axios(_opts);
}
