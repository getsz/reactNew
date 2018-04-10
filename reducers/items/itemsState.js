import { List, Record } from "immutable";

//const initialItems = List([1, 2, 3]);
export default new (Record({
    fetchStatus: null, // "": 初始化, "loading": 请求中, "success": 成功, "error": 失败
    errorMsg: null,
    response: []
}));