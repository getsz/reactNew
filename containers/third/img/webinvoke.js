var invoke = function (busiNo, param, callback, isPost, target, noBusyCursor, errorHandler) {
    if (isPost === undefined) {
        isPost = true;
    }
    var $target = null;
    if (target != null) {
        $target = $(target);
    }
    if ($target) {				
        $target.enable(false,true);
    }
    if (!noBusyCursor) {
        $('body').addClass('l_bebusy');
    }
    var p = {};
    p.busiNo = busiNo;
    if (param) {
        convertDataForTransfer(param);

    } else {
        param = {};
    }
    p.param = JSON.stringify(param);
    var newp=p;
    if(busiNo=='lmsp.file.FileProcessBo'){
        var tmpp={busiNo:busiNo,fileId:param.fileId,position:param.position};
        tmpp=secureTrans(tmpp);
        newp.l_sign=tmpp.l_sign;
    }else{
        newp=secureTrans(p);
    }
    $.ajax({
        url: ctxPath + 'lpageconn/',
        data: newp,
        type: isPost ? "POST" : "GET",
        dataType: "json",
        success: function (json) {
            if (json.lmsp_error != null) {
                // error message returned
                var err = json.lmsp_error;
                var skipFlag = err.charAt(0);
                err = err.substr(1);
                if (skipFlag == 1) {
                    // 跳转到login
                    location.href = ctxPath;
                } else {
                    L.alert('<p>' + err.split('\n').join('<br/>') + '</p>',null,null,3);
                }
            } else {
                convertForResult(json);
                if (callback) {
                    callback(json);
                }
            }
        },
        error: function (xhr, status) {
            if (errorHandler != null) {
                errorHandler();
            } else {
                L.alert(LI.serverFail,null,null,3);
            }
        },
        complete: function (xhr, status) {
            if ($target) {
                var busyFlag = $target.data("busyFlag");
                if(busyFlag=="1"){							
                    $target.enable(true);
                }
            }
            if (!noBusyCursor) {
                $('body').removeClass('l_bebusy');
            }
        }
    });
}


var convertDataForTransfer = function (obj) {
    if (obj != null && typeof (obj) == 'object') {
        for (var key in obj) {
            var value = obj[key];
            if (value != null) {
                if(value instanceof Array && value.length == 0){
                    obj[key] = value;
                }else if ((value + '').length == 0) {
                    obj[key] = null;
                } else if (value instanceof Date) {
                    obj[key] = LMSP_DATEPREFIX + $.formatDate(value, 'YYYYMMDDJJNNSS');

                } else {
                    convertDataForTransfer(value);
                }
            }

        }
    }
};

var convertForResult = function (obj) {

    if (obj != null && typeof (obj) == 'object') {
        for (var key in obj) {
            var value = obj[key];
            if (value != null) {
                if (!convertLMSPStringDate(obj, key, value)) {
                    convertForResult(value);
                }

            }

        }
    }
};
var convertLMSPStringDate = function (obj, key, value) {
    if (value != null && typeof (value) == 'string') {
        if (value.indexOf(LMSP_DATEPREFIX) == 0) {
            var str = value.substr(LMSP_DATEPREFIX.length);
            var yy = parseInt(str.substr(0, 4));
            var mm = parseInt(str.substr(4, 2)) - 1;
            var dd = parseInt(str.substr(6, 2));
            var hh = parseInt(str.substr(8, 2));
            var minute = parseInt(str.substr(10, 2));
            var ss = parseInt(str.substr(12, 2));
            obj[key] = new Date(yy, mm, dd, hh, minute, ss);
            return true;
        }
    }
    return false;

};