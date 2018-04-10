"use strict";
/**
 * @example
 * import { init, wxShareAppMessage, wxShareTimeline } from "<relativeRoute>/jssdkApi";
 * init(<signUrl>)
 *     .then(()=>{
 *         wxShareAppMessage(obj);
 *         wxShareTimeline(obj)
 *     })
 *     .catch((error)=>{
 *     });
 */
import _init from "./init";
export { _init as init };
import _wxShareAppMessage from "./wxShareAppMessage";
export { _wxShareAppMessage as wxShareAppMessage };
import _wxShareTimeline from "./wxShareTimeline";
export { _wxShareTimeline as wxShareTimeline };

