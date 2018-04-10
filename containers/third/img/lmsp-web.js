var LI = window.lmspWebI18N;
if (LI === undefined) {
	LI = {
			startUpload: '开始上传',
			serverFail: '服务器连接失败，请稍后再试',
			chooseUploadFile: '请选择需要上传的文件',
			batchAdd: '增加一批',
			close: '关闭',
			uploading: '正在上传，请稍后',
			uploadFile: '上传文件',
			upload: '上传',
			select: '选择',
			ok: '确定',
			cancel: '取消',
			alreadyAdd: '已添加',
			clear: '清空',
			noMatch: '无匹配项',
			hint: '提示',
			confirmMsg: '确认信息',
			confirmDel: '您确定要删除该记录吗？',
			msgToRead: '待阅',
			msgToDo: '待办',
			sysMsg: '系统消息',
			opNotExist: '调用的操作尚未配置，ID={0}',
			vNotNull: '{0}不能为空',
			vLenLess: '{0}长度不够，最短为{1}，而实际长度为{2}',
			vLenMore: '{0}长度超限，最长为{1}，而实际长度为{2}',
			vNumber: '{0}应为一个数值',
			vRangeLess: '{0}太小，最小值为{1}，而实际值为{2}',
			vRangeMore: '{0}太大，最大值为{1}，而实际值为{2}',
			vPattern: '{0}不匹配正则表达式{1}',
			editGridCol: '可编辑表格列',
			selectPlease: '请选择',
			connectTimeout:'连接超时，请稍后再试',
            noDataFound:'没有记录',
            more:'more',
            knowSure:'我知道了'
	};
}
jQuery.fn.perfectScrollbar.defaults={
    wheelPropagation:true,
    wheelSpeed:2
};
(function ($) {
	$.lFormatMsg = function (msg) {
		var rv = msg + '';
		if (msg != null) {
			var len = arguments.length;
			if (len > 1) {
				for (var i = 1; i < len; i++) {
					rv = rv.replace(new RegExp('\\{' + (i - 1) + '\\}', 'g'), arguments[i]);
				}
			}
		}
		return rv;
	};
	$.lInArray=function(value,array,fromIndex){
		//将value和array中的值全部转换为字符串
		var v=null;
		var a=null;
		if(value!==null){
			v=value+'';
		}
		if(array!==null){
			a=[];
			$.each(array,function(idx,el){
				if(el===null){
					a.push(null);
				}else{
					a.push(el+'');
				}
			});
		}
		return $.inArray(v,a,fromIndex);
	};
	$.lNull=function(value){
		return value===null||value===undefined || value==="null";
	};
	$.lBlank=function(value){
		return $.lNull(value)||value==='';
	};
    $.lGetStringWidth=function (text, font) {
        var currentObj = $('<pre>').hide().appendTo(document.body);
        $(currentObj).html(text).css('font', font);
        var width = currentObj.width();
        currentObj.remove();
        return width;
    };
    $.lRenderCSSCheckbox=function($parent){
        $parent.find('input.l_csscheckbox').each(function(idx,itm){
            var $el=$(itm);
            var id=$el.uniqueId().attr('id');
            if(!$el.next().hasClass('l_csscheckboxlabel')){
                $el.after($('<label class="l_csscheckboxlabel">').attr('for',id));
            }
        });
    };
    $.loadFrameBodyOnly=function(url,param,$ctn,callback){
        $.ajax({url: url,
            type:"post",
            data:param,
            dataType:'text',
            error:function( jqXHR, textStatus, errorThrown){
                console.error(textStatus+","+errorThrown);
            },
            success:function(data, textStatus, jqXHR){
            	var baseId = $ctn.data('id');
            	if(baseId){            		
            		L.config[baseId] = $ctn[0].id;
            	}
                $ctn.html(data);
                L.init($ctn);
                if(callback){
                	callback();
                } 
            }
        });
    };
    $.lHeadAppendScriptIfNotExist=function(scriptSrc){
		var h=$('head');
		if(h.length>0){

			var old=h.children('script[src="'+scriptSrc+'"]');
			if(old.length==0){
                var scriptNode = document.createElement("script");
                scriptNode.type = "text/javascript";
				scriptNode.src = scriptSrc;
				h.append(scriptNode);
			}
		}
	};
})(jQuery);
(function($){
    var hexcase = 0;
    var chrsz   = 8;
    $.hex_md5=function(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));};
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
    function core_md5(x, len)
    {
		/* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a =  1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d =  271733878;

        for(var i = 0; i < x.length; i += 16)
        {
            var olda = a;
            var oldb = b;
            var oldc = c;
            var oldd = d;

            a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
            d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
            d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
            d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
            d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
            d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
            c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
            d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
            c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
            d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
            c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
            d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
            c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
            d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
            d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
            d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
            d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
            d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
            d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
            d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
            d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);

    }
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
    function md5_cmn(q, a, b, x, s, t)
    {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
    }
    function md5_ff(a, b, c, d, x, s, t)
    {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t)
    {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t)
    {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t)
    {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
    function safe_add(x, y)
    {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
    function bit_rol(num, cnt)
    {
        return (num << cnt) | (num >>> (32 - cnt));
    }

	/*
	 * Convert a string to an array of little-endian words
	 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
	 */
    function str2binl(str)
    {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz)
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
        return bin;
    }


	/*
	 * Convert an array of little-endian words to a hex string.
	 */
    function binl2hex(binarray)
    {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++)
        {
            str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
                hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
        }
        return str;
    }

})(jQuery);
function bodyDisableMousewheelOnPop(event,delta){
	event.stopPropagation();
	event.preventDefault();
}
(function ($) {
	$.widget('ui.dialog', $.ui.dialog, {
		options: {
			autoOpen: false,
			height: 400,
			width: 600,
			modal: true,
			dialogClass: 'l_shadow',
			okCallback: null,
			closeText:false,
			drag : function(event, ui) {
				ui.position.top = ui.offset.top;
			},
			close:function(event,ui){
				$('body').unmousewheel(bodyDisableMousewheelOnPop);
			}
		}

	});
})(jQuery);
(function ($) {
	$.widget('ui.tooltip', $.ui.tooltip, {
		options: {
			hide: false,
            show:{delay:800,duration:0},
			track: true,
			position: {
				my: "left top+2",
				at: "left bottom",
				collision: "flipfit"
			}
		}
	});
})(jQuery);
(function ($) {
	$.widget('ui.menu', $.ui.menu, {
		delay: 10
	});
})(jQuery);
(function ($) {
	function createDelButton() {
		return '<td align="center" style="width: 30px;"><a href="javascript:void(0)" class="l_button l_icononly_button"><span class="l_linedel"></span></a></td>';
	}
	function deleteServerFiles(ids){
		L.invoke('lmsp.file.DeleteFileBo', {
			ids: ids
		});
	}
	$.widget('linkage.luploadpop', {
		options: {
			inputFiles:null

		},
		_$dialog: null,
		_startUpload:function(){
			var $d=this._$dialog;
			var retryTimes = 0;
			function afterUploaded() {
				if ($.linkage.luploadpop.uploadCallback != null) {
					var uploadedFileArr = [];
					$d.find('tr').each(function(idx,el){
						var $tr=$(el);
						uploadedFileArr.push({
							id : $tr.data('fileId'),
							name : $tr.data('file').name
						});
					});
					if(uploadedFileArr.length>0){
						$.linkage.luploadpop.uploadCallback(uploadedFileArr);
					}
				}
				$d.dialog('close');
			}
			function whileError(retryFunc) {
				retryTimes++;
				if (retryTimes <= L.config.uploadHtml5RetryTimes) {
					setTimeout(retryFunc, L.config.uploadHtml5RetryInterval);
				} else {
					afterUploaded();
					L.alert(LI.connectTimeout,null,null,3);
				}
			}
			function uploadSingle() {
				retryTimes = 0;
				//找到第一个没有fileId data的tr
				var $tr=null;
				$d.find('tr').each(function(ix,el){
					var $el=$(el);
					if(!$el.data('fileId')){
						$tr=$el;
						return false;
					}
				});
				if($tr==null){
					// 全传完了
					afterUploaded();
					return;
				}
				var $pb=$tr.find('div.l_uploadhtml5pgbar');
				var file = $tr.data('file');
				// 读文件到内存
				var reader = new FileReader();
				reader.onload = function(e) {
					var u8 = new Uint8Array(e.target.result);
					var len = file.size;
					var pos = 0;
					var blockSize = L.config.uploadBlockSize;
					function saveBlankFile() {
						L.invoke('lmsp.file.SaveFileBo', {
							name : file.name,
							data : []
						}, function(result) {
							retryTimes = 0;
							var fileId = result.data;
							if(!$tr.data('file')){
								deleteServerFiles([fileId]);
								uploadSingle();
								return;
							}
							$tr.data('fileId',fileId);
							function blockUpload() {
								if (pos >= len) {
									// 一个传完了
									L.invoke('lmsp.file.ReNameFileBo', {
										fileId : fileId
									}, function() {
										if(!$tr.data('file')){
											deleteServerFiles([fileId]);
											uploadSingle();
											return;
										}
										$pb.progressbar('value', 100);
										$tr.data('done',true);
										uploadSingle();
									}, true, null, true, function() {
										whileError(blockUpload);
									});
								} else {
									var toPos = pos + blockSize;
									if (toPos > len) {
										toPos = len;
									}
									var arr = [];
									for (var i = pos; i < toPos; i++) {
										arr.push(String.fromCharCode(u8[i]));
									}
									L.invoke('lmsp.file.FileProcessBo', {
										fileId : fileId,
										data : arr.join(''),
										position : pos
									}, function() {
										if(!$tr.data('file')){
											deleteServerFiles([fileId]);
											uploadSingle();
											return;
										}
										retryTimes = 0;
										pos = toPos;
										// 更新进度条
										$pb.progressbar('value', Math.round(toPos * 100 / len));
										blockUpload();
									}, true, null, true, function() {
										whileError(blockUpload);
									});
								}
							}
							// 分块上传
							blockUpload();
						}, true, null, true, function() {
							whileError(saveBlankFile);
						});
					}
					saveBlankFile();
				};
				reader.readAsArrayBuffer(file);
			}
			uploadSingle();
		},
		_createHtml5Dialog: function () {
			this.element.html('<table cellPadding="0" cellSpacing="1" border="0"></table>');
			var newFiles=this.options.inputFiles;
			var $table = this._$dialog.find('table');
			$.each(newFiles, function (idx, file) {
				var $tr = $('<tr><td>' + file.name + '</td>' + createDelButton() + '<td class="l_uploadhtml5pgtd"><div class="l_uploadhtml5pgbar"></div></td></tr>').appendTo(
						$table).data('file', file);
				$tr.find('a').lbutton();
				$tr.find('div.l_uploadhtml5pgbar').progressbar();
			});
			//TODO 删除文件
			$table.on('lbuttonclick', 'a', function () {
				var that = this;
				L.confirm('删除文件将删除实际存储的物理文件是否确定删除？',function(){
					var $tr=$(that).closest('tr');
					if($tr.data('done')){
						deleteServerFiles([$tr.data('fileId')]);
					}
					$tr.remove();
				})

			});
			this._startUpload();
		},
		_create: function () {
			$.convertDataToOption(this);
			this._$dialog = $('#lUploadFileDialog').dialog({
				open:function(event,ui){
					$(this).parent().find('.ui-dialog-titlebar-close').hide();
				}
			});
		},
		upload: function (callback) {
			if (this._$dialog.dialog('isOpen')) {
				L.alert(LI.uploading);
				return;
			}
			this._createHtml5Dialog();
			$.linkage.luploadpop.uploadCallback = function (uploadedFiles) {
				if (uploadedFiles && uploadedFiles.length > 0) {
					if (callback != null) {
						callback(uploadedFiles);
					}
				}
			};
			L.pop(this._$dialog, false);
		}

	});
	$.linkage.luploadpop.showPop = function (callback, files) {
		var $d = $('#lUploadFileDialog');
		if ($d.length == 0) {
			$d = $('<div class="l_popwin" id="lUploadFileDialog" title="'+LI.uploadFile+'"></div>').appendTo($('body')).luploadpop();
		}

		$d.luploadpop('option', 'inputFiles', files).luploadpop('upload', callback);
	};

	$.widget('linkage.luploadbox', {
		options: {
			single: false,
			valueType: 1, // 1集合2符号分隔字符串
			resultArrIdField: 'id',
			resultArrNameField: 'name',
			disabled: false,
			acceptFile:null
		},
		_innerDiv: null,
		_selectBtn: null,

		_files: null,

		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'single', 'disabled' ]);
			$.convertObjNumber(ops, [ 'valueType' ]);
		},

		_create: function () {
			this._files=[];
			$.convertDataToOption(this);
			var ops = this.options;
			this._convertOptions(ops);

			this.element.addClass('l_boxbtnstyle').html('<table class="l_maincontent" cellSpacing="0" cellPadding="0" border="0"><tr><td> </td><td class="l_boxbtnstyle_btntd"><a href="javascript:void(0)" class="l_uploadboxbtn"><input type="file" '+(ops.single?'':'multiple')+' name="" id=""/>'+LI.upload+'</a> </td></tr></table> ');
			var tds = this.element.find('td');
			var that = this;
			this._innerDiv = tds.eq(0).iruploadedfile({
				singleLine: true,
				showDel: true,
				delClick: function (event, data) {
					L.confirm('删除文件将删除实际存储的物理文件是否确定删除？',function(){
						var fileId = data.id;

						$.each(that._files, function (idx, f) {
							if (f.id == fileId) {
								that._files.splice(idx, 1);
								that._refreshInnerDiv();
								return false;
							}
						});
						deleteServerFiles([fileId]);
					});

				}
			});
			this._selectBtn=tds.eq(1).children('a');
			if(ops.disabled){
				this._disableSelectBtn(true);
			}
			var that = this;
			//用于处理删除文件后不能上传同名文件
			var newHtml = '<input type="file" '+(ops.single?'':'multiple')+' name="" id=""/>';
			this._selectBtn.on('change','input',function(){
				$(this).replaceWith(newHtml);
				var files = this.files;
				if (files && files.length > 0) {
					var errorFile = [];
					$.each(files, function (idx, f) {
						var fName = f.name;
						var fileExt=(/[.]/.exec(fName)) ? /[^.]+$/.exec(fName.toLowerCase()) : '';
						var acceptFile = that.options.acceptFile;
						if(acceptFile){
							var acceptFiles = acceptFile.toLowerCase().split(";");
							if($.inArray("*."+fileExt, acceptFiles)<0){
								errorFile = errorFile.concat(fName);
							}
						}
					});
					
					if(errorFile.length>0){
						L.alert("只允许上传<b style='color:red'>"+that.options.acceptFile+"</b>类型的文件。选择上传的文件中存在非法类型文件:<b style='color:red'>"+errorFile.join(";")+"<b>",null,null,3);
						return;
					}
					
					$.linkage.luploadpop.showPop(function (uploadedFiles) {

						if (that.options.single) {
							if (that._files.length > 0) {
								var ids = [];
								$.each(that._files, function (idx, f) {
									ids.push(f.id);
								});
								deleteServerFiles(ids);
							}
							that._files = [ uploadedFiles[0] ];

						} else {
							$.each(uploadedFiles, function (idx, f) {
								//同名文件覆盖调
								var hasRenameFile = false;
								$.each(that._files, function (idx, oldFile) {
									if(oldFile.name==f.name){
										oldFile.id = f.id;
										hasRenameFile = true;
									}
								});
								if(!hasRenameFile){									
									that._files.push(f);
								}
							});

						}
						that._refreshInnerDiv();
					}, files);
				}
			});

		},
		_disableSelectBtn:function(disabled){
			this._selectBtn.attr('disabled',disabled);
			this._selectBtn.children('input').attr('disabled',disabled);
			if(disabled){
				this._selectBtn.addClass('ui-state-disabled l_uploadboxbtn_disabled');
			}else{
				this._selectBtn.removeClass('ui-state-disabled l_uploadboxbtn_disabled');
			}
		},
		_refreshInnerDiv: function () {
			this._innerDiv.iruploadedfile('option', {
				value: this._files
			});
			var hasChange = this._innerDiv.iruploadedfile('fileChange');
			if(hasChange){
				this._trigger('change');
			}
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (k, v) {
			if (k == 'disabled') {
				this._disableSelectBtn(v);
				this._innerDiv.iruploadedfile('option', 'showDel', !v);
				this.options.disabled = v;
			} else {
				this._super(k, v);
			}
		},
		getValue: function () {
			var ops = this.options;
			return $.getFileResultValue(ops.valueType, this._files, ops.resultArrIdField, ops.resultArrNameField);
		},
		setValue: function (v) {
			var ops = this.options;
			this._files = $.setFileResultValue(ops.valueType, v, ops.resultArrIdField, ops.resultArrNameField);
			this._refreshInnerDiv();
		}

	});
})(jQuery);
(function ($) {
	function createDelButton() {
		return '<td align="center" style="width: 30px;"><a href="javascript:void(0)" class="l_button l_icononly_button"><span class="l_linedel"></span></a></td>';
	}

	$.widget('linkage.luploadpop2', {
		options: {
			single: false

		},
		_$dialog: null,
		_$table: null,
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'single' ]);

		},
		_createHtml5Dialog: function () {

			var arr = [];

			arr.push('<input type="file" multiple class="l_uploadhtml5input"/>');
			arr.push('<table cellPadding="0" cellSpacing="1" border="0"></table>');

			this.element.html(arr.join(''));

			var buttonsObj = {};
			buttonsObj[LI.startUpload] = function (event) {
				var $d = $(this);
				var $trs = $d.find('tr');

				var fileArrLen = $trs.length;
				if (fileArrLen == 0) {
					L.alert(LI.chooseUploadFile);
					return;
				}

				$trs.find('a').lbutton('option', 'disabled', true);

				$d.dialog('widget').find('div.ui-dialog-buttonset').children().button('disable');
				$d.on("dialogbeforeclose", function (event, ui) {
					return false;
				});
				$d.find('input').enable(false);
				var $pbs = $d.find('div.l_uploadhtml5pgbar');

				var idx = 0;
				var uploadedFileArr = [];
				var retryTimes = 0;

				function afterUploaded() {
					$d.off('dialogbeforeclose');
					if ($.linkage.luploadpop2.uploadCallback != null) {
						$.linkage.luploadpop2.uploadCallback(uploadedFileArr);
					}
					$d.dialog('close');
				}

				function whileError(retryFunc) {
					retryTimes++;
					if (retryTimes <= L.config.uploadHtml5RetryTimes) {
						setTimeout(retryFunc, L.config.uploadHtml5RetryInterval);
					} else {
						afterUploaded();
						L.alert(LI.connectTimeout,null,null,3);
					}
				}

				function uploadSingle() {
					if (idx >= fileArrLen) {
						// 全传完了

						afterUploaded();

						return;
					}

					var file = $trs.eq(idx).data('file');

					// 读文件到内存
					var reader = new FileReader();

					reader.onload = function (e) {
						var u8 = new Uint8Array(e.target.result);
						var len = file.size;
						var pos = 0;
						var blockSize = L.config.uploadBlockSize;

						function saveBlankFile() {
							L.invoke('lmsp.file.SaveFileBo', {
								name: file.name,
								data: []
							}, function (result) {
								retryTimes = 0;
								var fileId = result.data;

								function blockUpload() {
									if (pos >= len) {
										// 一个传完了
										L.invoke('lmsp.file.ReNameFileBo', {
											fileId: fileId
										}, function () {
											retryTimes = 0;
											$pbs.eq(idx).progressbar('value', 100);
											idx++;
											uploadedFileArr.push({
												id: fileId,
												name: file.name
											});
											uploadSingle();
										}, true, null, true, function () {
											whileError(blockUpload);
										});
									} else {
										var toPos = pos + blockSize;
										if (toPos > len) {
											toPos = len;
										}
										var arr = [];
										for (var i = pos; i < toPos; i++) {
											arr.push(String.fromCharCode(u8[i]));
										}

										L.invoke('lmsp.file.FileProcessBo', {
											fileId: fileId,
											data: arr.join(''),
											position: pos
										}, function () {
											retryTimes = 0;
											pos = toPos;
											// 更新进度条
											$pbs.eq(idx).progressbar('value', Math.round(toPos * 100 / len));
											blockUpload();
										}, true, null, true, function () {
											whileError(blockUpload);
										});

									}
								}

								// 分块上传
								blockUpload();
							}, true, null, true, function () {
								whileError(saveBlankFile);

							});
						}

						saveBlankFile();

					};
					reader.readAsArrayBuffer(file);
				}

				uploadSingle();

			};
			buttonsObj[LI.close] = function () {
				$(this).dialog('close');
			};
			var $d = $('#lUploadFileDialog2').dialog({
				buttons: buttonsObj
			});
			$d.find('input').on(
				'change',
				function () {
					var files = this.files;
					if (files && files.length > 0) {
						var newFiles = [];
						var $trs = $d.find('tr');
						$.each(files, function (idx, file) {
							var found = false;
							$trs.each(function (idx, tr) {
								var selFile = $(tr).data('file');
								if (selFile.name == file.name && selFile.size == file.size) {
									found = true;
									return false;
								}
							});

							if (!found) {
								newFiles.push(file);
							}
						});
						var newLen = newFiles.length;
						if (newLen > 0) {
							var $table = $d.find('table');
							var single = $d.data('isSingleFile');
							if (single) {
								if (newLen > 1) {
									newFiles = [ newFiles[0] ];
								}
								$table.empty();
							}
							$.each(newFiles, function (idx, file) {
								var $tr = $('<tr><td>' + file.name + '</td>' + createDelButton() + '<td class="l_uploadhtml5pgtd"><div class="l_uploadhtml5pgbar"></div></td></tr>').appendTo(
									$table).data('file', file);
								$tr.find('a').lbutton();
								$tr.find('div.l_uploadhtml5pgbar').progressbar();

							});

						}
						$(this).val(null);
					}

				});
			$d.find('table').on('lbuttonclick', 'a', function () {

				$(this).closest('tr').remove();
			});
			return $d;

		},
		_prepareDialog: function () {
			this._$dialog = this._createHtml5Dialog();
			this._$table = this._$dialog.find('table');
		},
		_resetDialog: function () {
			this._$dialog.data('isSingleFile', this.options.single);
			this._$dialog.find('input').enable(true);
			var btns = this._$dialog.dialog('widget').find('div.ui-dialog-buttonset').children();
			btns.button('enable');
			this._$table.empty();
		},
		_create: function () {
			$.convertDataToOption(this);
			var ops = this.options;
			this._convertOptions(ops);
			this._prepareDialog();

		},

		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		upload: function (callback) {
			if (this._$dialog.dialog('isOpen')) {
				L.alert(LI.uploading);
				return;
			}

			$.linkage.luploadpop2.uploadCallback = function (uploadedFiles) {
				if (uploadedFiles && uploadedFiles.length > 0) {
					if (callback != null) {
						callback(uploadedFiles);
					}

				}
			};

			L.pop(this._$dialog, false);
			this._resetDialog();
		}

	});
	$.linkage.luploadpop2.showPop = function (callback, single) {
		var $d = $('#lUploadFileDialog2');
		if ($d.length == 0) {
			$d = $('<div class="l_popwin" id="lUploadFileDialog2" title="'+LI.uploadFile+'"></div>').appendTo($('body')).luploadpop2();
		}
		if (single === undefined) {
			single = false;
		}

		$d.luploadpop2('option', 'single', single).luploadpop2('upload', callback);
	};
})(jQuery);

(function ($) {

	$.widget('linkage.lbutton', {
		options: {
			disabled: false,
			showAsLink: false,
			functionId: null,
			hideNoFunc: false
		},
		_noAccess: false,
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'disabled', 'showAsLink', 'hideNoFunc' ]);
		},
		_create: function () {
			this._noAccess=false;
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			var funcId = this.options.functionId;
			var doDisable = this.options.disabled;
			if (funcId != null && (funcId + '').length > 0 && !L.access(funcId)) {
				this._noAccess = true;
				if (this.options.hideNoFunc) {
					this.element.hide();
					doDisable = true;	
					
					//垂直布局时按钮位置留白问题处理
					var btnNextItem = this.element.next();
					if(btnNextItem && btnNextItem.is("br")){
						btnNextItem.hide();
					}
				} else {
					doDisable = true;
				}
			}

			if (doDisable) {
				this._setOption('disabled', true);
			}

			var that = this;
			this.element.on('click', function (event) {

				event.preventDefault();
				if (!that.options.disabled) {
					that._trigger('click');
				}else{
					event.stopImmediatePropagation();
				}
			});

		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (k, v) {
			if (k == 'disabled') {

				if (this._noAccess) {
					v = true;
				}

				this._super(k, v);
				var style = this.options.showAsLink ? 'l_linkbutton_disabled' : 'l_button_disabled';

				if (v) {
					this.element.addClass(style);
				} else {
					this.element.removeClass(style);
				}

			} else {
				this._super(k, v);
			}
		}

	});
})(jQuery);
(function ($) {
	$.widget('linkage.ltextinput', {
		options: {

			charsToBlank: null,
			blankKeyUp: true,
			prompt: null,
			isArea: false

		},
		_convertOptions: function (opt) {
			$.convertObjBool(opt, [ 'blankKeyUp', 'isArea' ]);

		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this.element.addClass('l_inputcontrol l_inputcontrol2');
			var that = this;
			var opt = this.options;

			if ((opt.prompt != null && (opt.prompt + '').length == 0) || this.element.prop('readOnly')) {
				opt.prompt = null;
			}
			var exp = null;
			if (opt.charsToBlank) {
				exp = new RegExp(opt.charsToBlank, "g");
			}

			function onCharChange() {

				that.element.val(that.element.val().replace(exp, ''));
			}

			if (opt.charsToBlank && opt.blankKeyUp) {

				this._on(this.element, {
					'keyup': onCharChange
				});

			}
				
			if(!this.element.hasClass('l_textarea')){
				//只禁用文本框的回车事件
				this.element.keypress(function(event) {
					if (event.keyCode == 13) {
					   event.preventDefault();
					}
				});
			}


			this._on(this.element, {
				'focus': function (event) {
					var $el = that.element;
					if ($el.val() == that.options.prompt) {

						$el.removeClass('l_inputprompt').val(null);

					}
					that.oldValue = $el.val();
				},
				'blur': function (event) {
					if (exp != null) {
						onCharChange();
					}
					var v = that.element.val();
					if (v == null || (v + '').length == 0) {
						that._clear();
					}
					var newValue = that.element.val();
					if (that.oldValue != newValue) {
						that._triggerChange(that.oldValue, newValue);
					}
				}
			});
			this._clear();

		},
		_clear: function () {
			if (this.options.prompt != null) {
				this.element.val(this.options.prompt);
				this.element.addClass('l_inputprompt');
			} else {
				this.element.val(null);
			}
		},
		getValue: function () {
			var v = this.element.val();
			if (v != this.options.prompt && v!="") {
				return v;
			}

			return null;
		},
		setValue: function (v) {
			var old = this.getValue();
			if (old != v) {
				if ($.lBlank(v)) {
					this._clear();
				} else {
					this.element.val(L.decodeHTML(v));
					this.element.removeClass('l_inputprompt');
				}

				this._triggerChange(old, v);

			}
		},
		_triggerChange: function (oldValue, newValue) {
			this._trigger('change', null, {
				newValue: newValue,
				oldValue: oldValue
			});

		}

	});
})(jQuery);
(function ($) {
	$.widget('linkage.lpassword', $.linkage.ltextinput, {
		options:{usemd5:false},
        _convertOptions: function (opt) {
			this._super(opt);
            $.convertObjBool(opt, [ 'usemd5' ]);

        },
        getValue: function () {
			var v=this._super();
            if(this.options.usemd5&&v!=null){
                v = $.hex_md5(v);
            }
			return v;

        }
	});
})(jQuery);
(function ($) {
	$.widget('linkage.ltree', {
		options: {
			initOpen: false,
			iconWidth: 16,
			iconHeight: 16,
			iconField: null,
			iconFunc: null,
			selectedItem: null,
			labelField: 'label',
			labelFunc: null,
			dataProvider: null,
			defaultSelectCompareValue: null,
			defaultSelectCompareField: null,
			initOpenKey:'openKey',//树结构初始打开匹配项的key
			initOpenValue:true, //树结构初始打开匹配项的value
			multiselect:false, //节点左边显示checkbox，支持多选
			multiselectField:'lmsp_sel',
			tipFunc:null
		},
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'initOpen','initOpenValue','multiselect' ]);
			$.convertObjNumber(ops, [ 'iconWidth', 'iconHeight' ]);
		},
		_changeNodeCheckState:function(aidx,ael,targetSelState){
            var $aa=$(ael);
            var sii= this._findSelectedItemByA($aa);
            $aa.children('input').prop('checked',targetSelState);
            sii[this.options.multiselectField]=targetSelState;
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			var that = this;

			function updateScroll() {
				that.element.perfectScrollbar('update');
			}
			this.element.html('<div class="l_tree_content"></div>');
			this.element.perfectScrollbar($.fn.perfectScrollbar.defaults);
			this._on(this.element, {
				"click a": function (event) {

					var el = event.currentTarget;
					var $a = $(el);

					var si = this._findSelectedItemByA($a);
					if(that.options.multiselect&&si!=null){
                        var targetSelState=!si[that.options.multiselectField];
                        $a.children('input').prop('checked',targetSelState);
                        si[that.options.multiselectField]=targetSelState;
                        //所有子孙节点都与之相同状态
						$a.next('ul').find('a').each(function(aidx,ael){
							that._changeNodeCheckState(aidx,ael,targetSelState);
						});
						//如果是选中，其祖先节点自动选中
						if(targetSelState){
							$a.parentsUntil('div').filter('ul').siblings('a').each(function(aidx,ael){
                                that._changeNodeCheckState(aidx,ael,targetSelState);
                            });
						}
					}

					this._setSelectedItem(si, $a);
					this._update();

					this._trigger('itemClick', null, {
						item: si,
						element: el
					});
				},
				"click span.l_tree_folder,span.l_tree_icon": function (event) {
					var $a = $(event.currentTarget).parent();

					var si = this._findSelectedItemByA($a);

					this._setSelectedItem(si, $a);
					this._update();
					$a.children('span.l_tree_folder').toggleClass('l_tree_folder_expand');

					$a.siblings('ul').toggle('fast', updateScroll);

					return false;
				},

				"dblclick a": function (event) {

					this._trigger('itemDoubleClick', null, {
						element: event.currentTarget
					});
				}
			});

		},
		_findSelectedItemByA: function ($a) {
			var itemIdxArr = ($a.data('idx') + '').split(',');

			var len = itemIdxArr.length;
			var dp = this.options.dataProvider;
			var si = null;
			for (var i = 0; i < len; i++) {

				si = dp[itemIdxArr[i]];
				dp = si.children;
			}
			return si;
		},
		calDefaultSelectedItem: function (doUpdate) {
			var opt = this.options;

			if (opt.dataProvider != null && opt.defaultSelectCompareField != null) {
				var si = null;
				if (opt.defaultSelectCompareValue != null) {
					L.recursiveArr(opt.dataProvider, function (item) {
						if (item[opt.defaultSelectCompareField] == opt.defaultSelectCompareValue) {
							si = item;
							return false;
						}
					});
				}

				this._setSelectedItem(si);
				if (doUpdate) {
					this._update();
				}

			}
		},
		_setOptions: function (props) {
			this._convertOptions(props);
			if (props) {
				var that = this;
				$.each(props, function (key, value) {
					if (key == 'selectedItem') {
						that._setSelectedItem(value);
					} else if (key == 'dataProvider') {
						that._setDataProvider(value);
					} else {
						that._setOption(key, value);
					}
				});
				this._update();
			}
		},
		_setSelectedItem: function (si, siEl) {
			if (this.options.selectedItem !== si) {
				this.options.selectedItem = si;
				this.selectedEl = siEl;
				this._trigger('change', null, {
					newValue: si
				});
				this.updateSelectedItem = true;
			}
		},
		_setDataProvider: function (dp) {
			if (this.options.dataProvider !== dp) {
				this.options.dataProvider = dp;
				this.updateDataProvider = true;
				this.calDefaultSelectedItem();
			}
		},
		_recursiveGenUL: function (arr, expand, idxArr) {
			var rv = [];
			var that = this;
			if (arr && arr.length) {
				rv.push('<ul');
				if (!expand) {
					rv.push(" style='display:none;'");
				}
				rv.push('>');
				var opt = that.options;
				var needIcon = opt.iconField != null || opt.iconFunc != null;
				$.each(arr, function (idx, item) {
					idxArr.push(idx);
					var hasChild = (item.children != null);
					rv.push('<li>');
					rv.push("<a href='javascript:void(0)' data-idx='" + idxArr.join(',') + "'>");
					rv.push("<span class='");
					if (hasChild) {
						// 显示箭头
						rv.push(opt.initOpen||(item[opt.initOpenKey]==opt.initOpenValue) ? 'l_tree_folder l_tree_folder_expand' : 'l_tree_folder');
					} else {
						rv.push('l_tree_leaf');
					}
					rv.push("' />");
					if(opt.multiselect){
						//数据中的lmsp_sel字段为true表示选中
						rv.push('<input type="checkbox" class="l_treecheckbox" '+(item[opt.multiselectField]?'checked="checked"':'')+'/>');
					}

					if (needIcon) {
						var iconURL = L.getContextPath() + (opt.iconFunc != null ? opt.iconFunc(item) : item[opt.iconField]);
						var iconW = opt.iconWidth;

						rv.push('<span class="l_tree_icon" style="padding-left: ' + iconW + 'px;background:url(' + iconURL + ') no-repeat center center;"/>');
					}
					if(opt.tipFunc!=null){
						var tipS=opt.tipFunc.sptCont;
						if(tipS.indexOf("#D{")!=-1 && tipS.indexOf("}")>tipS.indexOf("#D{")){
							tipS=tipS.split("#D{");
							var tipIndex=tipS[1].split("}");
							tipS=tipS[0]+item[tipIndex[0]]+tipIndex[1];	
						}
						rv.push('<span class="l_tree_text" title="'+tipS+'">' + (opt.labelFunc == null ? item[opt.labelField] : opt.labelFunc(item)) + '</span>');
					}else{
						rv.push('<span class="l_tree_text">' + (opt.labelFunc == null ? item[opt.labelField] : opt.labelFunc(item)) + '</span>');
					}

					rv.push("</a>");
					if (hasChild) {
						rv.push(that._recursiveGenUL(item.children, opt.initOpen||(item[opt.initOpenKey]==opt.initOpenValue), idxArr));
					}

					rv.push('</li>');
					idxArr.pop();
				});
				rv.push('</ul>');
			}
			return rv.join('');
		},

		_recursiveFindItem: function (dp, item, idxArr) {
			if (dp != null && item != null) {
				var len = dp.length;
				for (var i = 0; i < len; i++) {
					idxArr.push(i);
					if (item == dp[i]) {
						// bingo
						return true;
					}
					if (_recursiveFindItem(dp[i].children, item, idxArr)) {
						return true;
					}
					idxArr.pop();
				}
			}
			return false;
		},
		refresh: function () {
			this.updateDataProvider = true;
			this._setSelectedItem(null);
			this._update();

		},
		_update: function () {

			if (this.updateDataProvider) {
				this.updateDataProvider = false;
				this.element.children('div.l_tree_content').html(this._recursiveGenUL(this.options.dataProvider, true, []));
				this.element.perfectScrollbar('update');

			}
			if (this.updateSelectedItem) {

				this.updateSelectedItem = false;
				this.element.find('span.l_tree_selected').removeClass('l_tree_selected');
				if (this.selectedEl == null && this.options.selectedItem != null) {
					var idxArr = [];
					if (this._recursiveFindItem(this.options.dataProvider, this.options.selectedItem, idxArr)) {
						this.selectedEl = this.element.find("a[data-idx='" + idxArr.join(',') + "']");
					}
				}
				if (this.selectedEl != null) {
					this.selectedEl.children("span.l_tree_text").addClass('l_tree_selected');
				}

			}
		},
        getSelectedItems: function () {
            var arr = [];
            if (this.options.multiselect) {
            	var ff=this.options.multiselectField;
                L.recursiveArr(this.options.dataProvider, function (item) {
                    if (item[ff]) {
						var o={};
						$.each(item,function(k,v){
						   if(k!=ff&&k!='children'){
						   		o[k]=v;
						   }
						});
						arr.push(o);
                    }
                });
			}
            return arr;
        }
	});
})(jQuery);
(function ($) {
	$.widget('linkage.lviewstack', {
		options: {
			active: 0
		},
		_convertOptions: function (ops) {
			$.convertObjNumber(ops, [ 'active' ]);
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this.panels = this.element.children();
			this._changeState();

		},
		_changeState: function () {
			var that = this;
			this.panels.each(function (idx, el) {
				if (idx != that.options.active) {
					$(el).hide();
				} else {
					$(el).show();
				}
			});
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (key, value) {
			if (key == 'active') {
				var v = -1;
				if (value >= 0 && value < this.panels.length) {
					v = value;
				}
				var oldIdx = this.options[key];
				if (oldIdx != v) {

					if (this._trigger("beforeActivate") === false) {
						return;
					}
					this._super(key, v);
					this._changeState();
					this._trigger("activate", null, {
						oldPanel: this.panels.eq(oldIdx),
						newPanel: this.panels.eq(v)
					});
				}

			} else {
				this._super(key, value);
			}
		},
		refresh: function () {
		}
	});
})(jQuery);

(function ($) {
    $.widget('linkage.lcard', {
        options: {
            moreText: LI.more,
            columns:"100%"
        },
        changeMoreNumber:function(divId,n){
            var amore=$('#'+divId).prev().children('a.l_card_more');
            if(amore.length>0){
                amore.remove('span');
                n=n-0;
                if(n>0){
                    amore.append('<span class="l_card_morenumber">'+n+'</span>');
                }
            }
        },
        _convertOptions: function (ops) {

        },
        _create: function () {
            $.convertDataToOption(this);
            this._convertOptions(this.options);
            this.panels = this.element.children();
            this._renderLayout();
        },
        _renderLayout:function(){
            //draw table
            var clmarr=this.options.columns.split(',');
            var tablefrag=['<table class="l_maincontent"><tr>'];
            $.each(clmarr,function(idx,item){
                tablefrag.push('<td style="width:'+(item.indexOf('%')==-1?(item+'px'):item)+';"></td>');
            });
            tablefrag.push('</tr></table>');
            var tbl=$(tablefrag.join(''));
            var tds=tbl.find('td');
            var that=this;
            this.panels.each(function(idx,el){
                var d=$(el);
                var col=d.data('col');
                if(!col){
                    col=1;
                }
                tds.eq(col-1).append(that._renderSingleCard(d));
            });
            this.element.html(tbl);
            this.element.find('div.l_card_div:data(height)').perfectScrollbar($.fn.perfectScrollbar.defaults);
            this._on(this.element, {
                'click a.l_card_more': function (evt) {
                    this._trigger('more',evt,{
                        div:$(evt.currentTarget).parent().next()[0]
                    });
                }
            });
        },
        _renderSingleCard:function($div){
            $div.addClass('l_card_div');
            //div里面，上面titlebar，下面是实际div(滚动条)
            var odiv=$('<div class="l_card_outerdiv">');
            odiv.append(this._renderTitlebar($div));
            var hh=$div.data('height');
            if(hh){
                $div.height(hh-0);
            }
            odiv.append($div);
            return odiv;
        },
        _renderTitlebar:function($div){
            var titlebar=$div.children('div.l_card_titlebar').detach();
            if($div.data('hideTitle')){
                titlebar='';
            }else{
                if(titlebar.length==0){
                    //没有自定义，创建默认titlebar
                    var tarr=['<div class="l_card_titlebar">'];
                    var iconcls=$div.data('iconClass');
                    tarr.push('<span class="l_card_icon ui-icon'+(iconcls?' '+iconcls:'')+'"></span>');
                    var title=$div.data('title');
                    if(title!=null&&title.length>0){
                        tarr.push('<span class="l_card_title">'+title+'</span>');
                    }
                    if($div.data('more')){
                        tarr.push('<a class="l_card_more" href="javascript:void(0)">'+this.options.moreText+'</a>');
                    }
                    tarr.push('<span class="l_card_titlehr"></span></div>');
                    titlebar=$(tarr.join(''));
                }
            }

            return titlebar;
        },
        _setOptions: function (ops) {
            this._convertOptions(ops);
            this._super(ops);
        },
        refresh: function () {
            this.element.find(".ps-container").perfectScrollbar('update');
        }
    });
})(jQuery);

(function ($) {
	$.widget("linkage.lfoldingpanel", $.ui.accordion, {
		options: {
			actives: null,// 一开始展开的panel，如果为null表示全部都展开
			heightStyle: 'content',
			collapsible: true

		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this._super();
		},
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'collapsible' ]);
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (key, value) {

			if (key === 'active' || key === 'collapsible' || key === 'heightStyle') {

				return;
			}

			this._super(key, value);

		},
		_findActive: function (selectors) {
			if (selectors === this.options.active) {
				selectors = this.options.actives;
			}
			if (selectors === null) {
				return this.headers;
			}
			return this.headers.filter(function (index) {
				return $.inArray(index, selectors) !== -1;
			});

		},
		refresh: function () {

		},
		_toggle: function (data) {
			var toShow = data.newPanel, toHide = data.oldPanel;

			// handle activating a panel during the animation
			// for another activation
			this.prevShow.add(this.prevHide).stop(true, true);
			this.prevShow = toShow;
			this.prevHide = toHide;

			if (this.options.animate) {
				this._animate(toShow, toHide, data);
			} else {
				toHide.hide();
				toShow.show();
				this._toggleComplete(data);
			}

			toHide.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			toHide.prev().attr("aria-selected", "false");
			// if we're switching panels, remove the old header
			// from the tab order
			// if we're opening from collapsed state, remove the
			// previous header from the tab order
			// if we're collapsing, then keep the collapsing
			// header in the tab order
			if (toShow.length && toHide.length) {
				toHide.prev().attr("tabIndex", -1);
			} else if (toShow.length) {
				this.headers.filter(function () {
					return $(this).attr("tabIndex") === 0;
				}).attr("tabIndex", -1);
			}

			toShow.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			});

		},
		_eventHandler: function (event) {
			var options = this.options, active = this.active, clicked = $(event.currentTarget), clickedIsActive = ($.inArray(clicked[0], active.get()) !== -1), collapsing = clickedIsActive
			&& options.collapsible, toShow = collapsing ? $() : clicked.next(), toHide = collapsing ? clicked.next() : $(), eventData = {
					oldHeader: collapsing ? clicked : $(),
							oldPanel: toHide,
							newHeader: collapsing ? $() : clicked,
									newPanel: toShow
			};

			event.preventDefault();
			var clickedIdx = this.headers.index(clicked);
			if (options.actives === null) {
				options.actives = [];
				var len = this.headers.length;
				for (var i = 0; i < len; i++) {
					options.actives.push(i);
				}
			}
			var opacs = options.actives;

			if (collapsing) {
				opacs[$.inArray(clickedIdx, opacs)] = opacs[0];
				opacs.shift();
			} else {
				opacs.push(clickedIdx);
			}

			// when the call to ._toggle() comes after the class
			// changes
			// it causes a very odd bug in IE 8 (see #6720)
			this.active = this._findActive(opacs);
			this._toggle(eventData);

			// switch classes
			// corner classes on the previously active header
			// stay after the animation
			var toHideHeader = eventData.oldHeader;

			toHideHeader.removeClass("ui-accordion-header-active ui-state-active");
			if (options.icons) {
				toHideHeader.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header);
			}

			if (!clickedIsActive) {

				clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
				if (options.icons) {
					clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader);
				}

				clicked.next().addClass("ui-accordion-content-active");
			}
		},
		_setupEvents: function (event) {
			var events = {
					keydown: "_keydown"
			};
			if (event) {
				$.each(event.split(" "), function (index, eventName) {
					events[eventName] = "_eventHandler";
				});
			}

			this._off(this.headers.add(this.headers.next()));
			this._on(this.headers, events);
			this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			});
			this._hoverable(this.headers);

		}

	});
})(jQuery);
(function ($) {
	$.widget('linkage.lspinner', $.ui.spinner, {
		options:{
			change:function(evt,data){
				var $this=$(this);
				var v=$this.lspinner('value');
				if(v!==null&&v!==''){
					var a=$this.data('linkage-lspinner');
					var vv=a._adjustValue(v);
					if(v!==vv){
						a.value(vv);
					}
				}
			}
		},
		_create: function () {
			$.convertDataToOption(this);

			this._super();
		},
		_uiSpinnerHtml: function () {
			return "<div class='l_inputcontrol' style='float:left'><div  style='float:left' class='ui-spinner ui-widget ui-widget-content l_inputcontrol'></div></div>";
		}

	});
})(jQuery);
(function ($) {
	function convertDateRange(type, dateString, yOffset, mOffset, dOffset) {
		var rv = null;
		if (type == 1) {
			if (yOffset == 0 && mOffset == 0) {
				rv = dOffset;
			} else {
				var arr = [];
				if (yOffset != 0) {
					arr.push((yOffset > 0 ? '+' : '') + yOffset + 'y');
				}
				if (mOffset != 0) {
					arr.push((mOffset > 0 ? '+' : '') + mOffset + 'm');
				}
				if (dOffset != 0) {
					arr.push((dOffset > 0 ? '+' : '') + dOffset + 'd');
				}
				rv = arr.join(' ');
			}
		} else if (type == 2) {
			if (dateString) {
				rv = $.parseLDate(dateString, 'YYYYMMDD');
			}
		}
		return rv;
	}

	$.widget('linkage.ldatepicker', {
		options: {
			dateFormat: "YYYY-MM-DD",
			disabled: false,
			stringDateFormat: "YYYYMMDD",
			defaultTime: null,// 默认是0,02:02:02.000
			defaultDateType: null,
			asString: false,
			minType: 0, // 2,固定日期;1,当前日期差值;0，无
			minDateString: null,
			minYOffset: 0,
			minMOffset: 0,
			minDOffset: 0,
			maxType: 0,
			maxDateString: null,
			maxYOffset: 0,
			maxMOffset: 0,
			maxDOffset: 0,
			defaultIntervalY:0,
			defaultIntervalM:0,
			defaultIntervalD:0
		},
		_defaultDate:null,
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'disabled', 'asString' ]);
			$.convertObjNumber(ops, [ 'minType', 'minYOffset', 'minMOffset', 'minDOffset', 'maxType', 'maxYOffset', 'maxMOffset', 'maxDOffset','defaultIntervalY','defaultIntervalM','defaultIntervalD' ]);
		},
		_convertFormatFromFlexToJQ: function (flexFormat) {
			flexFormat = flexFormat.replace(/YYYY/g, 'yy');
			flexFormat = flexFormat.replace(/MM/g, 'mm');
			return flexFormat.replace(/DD/g, 'dd');

		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (key, value) {
			if (key == 'disabled') {
				this.element.datepicker('option', 'disabled', value);
				this.options.disabled = value;
			} else {
				this._super(key, value);
			}
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this.element.addClass('l_inputcontrol l_inputcontrol2');
			var opts = this.options;
			var opt = {
					changeMonth: true,
					changeYear: true,
					yearRange:'-120:+100',
					dateFormat: this._convertFormatFromFlexToJQ(opts.dateFormat),
					disabled: opts.disabled,
					minDate: convertDateRange(opts.minType, opts.minDateString, opts.minYOffset, opts.minMOffset, opts.minDOffset),
					maxDate: convertDateRange(opts.maxType, opts.maxDateString, opts.maxYOffset, opts.maxMOffset, opts.maxDOffset)
			};
			var that = this;
			this.element.datepicker(opt, $.datepicker.regional["zh-CN"]).on('change',function (event) {
				var txt = $(this).val();
				// 如果输入了8位数字，转换成日期
				var d = null;
				if (txt && txt.length == 8 && !isNaN(txt - 0)) {
					d = new Date(txt.substr(0, 4) - 0, txt.substr(4, 2) - 1, txt.substr(6, 2) - 0);
					that.element.datepicker('setDate', d);

				} else {

					try {
						d = $.datepicker.parseDate(that.element.datepicker('option', 'dateFormat'), txt);
					} catch (e) {
						d = null;
					}
					var d2 = that.element.datepicker('getDate');
					if ((d == null && d2 != null) || (d != null && d2 == null) || (d != null && d2 != null && d.getTime() != d2.getTime())) {
						that.element.datepicker('setDate', d);
					}

				}

				var old = that.oriValue;
				if ((d == null && old != null) || (d != null && old == null) || (d != null && old != null && d.getTime() != old.getTime())) {
					// 变化了
					that._trigger('change');
				}

			}).on('focus', function () {
				that.oriValue = that.element.datepicker('getDate');
			});
			var d = null;
			if (opts.defaultDateType == 2) {
				d = new Date();
			} else if (opts.defaultDateType == 3) {
				var cur = new Date();
				d = new Date(cur.getFullYear(), cur.getMonth(), 1);
			}
			this._defaultDate = d;
			if (d != null) {
				this.element.datepicker('setDate', d);
				this._trigger('change');

			}
		},
		getDate: function () {
			var v = this.element.datepicker('getDate');
			if (v != null) {
				// 修正时间值
				var hour = 0;
				var minute = 0;
				var second = 0;
				var dt = this.options.defaultTime;
				if (dt != null) {
					hour = dt.substr(0, 2) - 0;
					minute = dt.substr(3, 2) - 0;
					second = dt.substr(6, 2) - 0;
				}
				v.setHours(hour);
				v.setMinutes(minute);
				v.setSeconds(second);
				v.setMilliseconds(0);
				if (this.options.asString) {
					v = $.formatDate(v, this.options.stringDateFormat);
				}
			}

			return v;
		},
		setDate: function (v) {
			if(v==null && this._defaultDate!=null){
				v=this._defaultDate;
			}
			var old = this.getDate();
			var diff = false;
			if (this.options.asString) {
				if (old != v) {
					diff = true;
					v = $.parseLDate(v, this.options.stringDateFormat);
				}
			} else {
				if (v != null && old == null) {
					diff = true;
				} else if (v == null && old != null) {
					diff = true;
				} else if (v != null && old != null && v.getTime() != old.getTime()) {
					diff = true;
				}
			}

			if (diff) {
				if(v!=null){
					v.setFullYear(v.getFullYear() + this.options.defaultIntervalY);
					v.setMonth(v.getMonth() + this.options.defaultIntervalM);
					v.setDate(v.getDate() + this.options.defaultIntervalD);

				}
				this.element.datepicker('setDate', v);
				this._trigger('change');
			}

		}
	});
})(jQuery);
(function ($) {
	$.widget('linkage.ldatetimepicker', {
		options: {
			dateFormat: "YYYY/MM/DD",
			hideSecond: false,
			hideMinute: false,
			disabled: false
		},
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'hideSecond', 'hideMinute', 'disabled' ]);
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			var opt = this.options;
			var cont = '<input type="text" class="l_datepicker" style="float:left" data-date-format="' + opt.dateFormat + '"/>&nbsp;&nbsp;<input class="l_spinner" style="float:left"  min="0" max="23" step="1"/>';

			if (!opt.hideMinute) {
				cont += '<span style="float:left" > : </span><input class="l_spinner"  style="float:left" min="0" max="59" step="1"/>';
				if (!opt.hideSecond) {
					cont += '<span style="float:left" > : </span><input class="l_spinner"  style="float:left" min="0" max="59" step="1"/>';
				}
			}
			this.element.html(cont);
			var that = this;
			this.controlDate = this.element.find('input.l_datepicker').ldatepicker({
				'change': function () {
					that._trigger('change');
				}
			});
			this.controlTimes = this.element.find('input.l_spinner').lspinner({
				change: function (event, ui) {
					that._trigger('change');
				}
			});

			this._clear();
			if (opt.disabled) {
				this._setOption('disabled', true);
			}
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (key, value) {
			if (key == 'disabled') {
				this.controlDate.ldatepicker('option', 'disabled', value);
				this.controlTimes.lspinner('option', 'disabled', value);
				this.options.disabled = value;
			} else {
				this._super(key, value);
			}
		},
		getDate: function () {
			var v = this.controlDate.ldatepicker('getDate');
			if (v != null) {
				var ns = this.controlTimes;
				v.setHours(parseInt(ns.eq(0).lspinner('value')));
				var opt = this.options;
				if (!opt.hideMinute) {
					v.setMinutes(parseInt(ns.eq(1).lspinner('value')));
					if (!opt.hideSecond) {
						v.setSeconds(parseInt(ns.eq(2).lspinner('value')));
					}
				}
			}

			return v;
		},
		_clear: function () {
			this.controlDate.ldatepicker('setDate', null);
			this.controlTimes.lspinner('value', 0);
		},
		setDate: function (v) {
			var old = this.getDate();
			if ((v == null && old != null) || (v != null && old == null) || (v != null && old != null && v.getTime() != old.getTime())) {
				if (v != null) {
					var d = new Date(v.getFullYear(), v.getMonth(), v.getDate());
					this.controlDate.ldatepicker('setDate', d);
					this.controlTimes.each(function (idx, el) {
						var vv = 0;
						if (idx == 0) {
							vv = v.getHours();
						} else if (idx == 1) {
							vv = v.getMinutes();
						} else if (idx == 2) {
							vv = v.getSeconds();
						}
						$(el).lspinner('value', vv);
					});
				} else {
					this._clear();
				}
				this._trigger('change');
			}

		}
	});
})(jQuery);
(function ($) {

	$.widget("linkage.lpagebar", {
		options: {
			limit: 20,
			targetId: null,
			busiNo: null,
			param: {},
			pageTurnFunc: null,
			totalCountField:'totalCount',
			dataField:'data'
		},
		_convertOptions: function (ops) {
			$.convertObjNumber(ops, [ 'limit' ]);
		},
		_totalCount: 0,
		_currPageNo: 0,
		_totalPageNo: 0,
		_btnFirst: null,
		_btnLast: null,
		_btnPrev: null,
		_btnNext: null,
		_btnGo: null,
		_btnRefresh: null,
		_inputGo: null,
		_spanInfo: null,
		_changeSpanInfo: function () {
			this._spanInfo.html('共'+this._totalCount+'条     '+this._currPageNo + ' / ' + this._totalPageNo+'页');
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this._totalCount=0;
			this._currPageNo = 0;
			this._totalPageNo = 0;

			this._btnRefresh = $.createLButton('<span class="l_pagebar_brefresh"></span>', this.element, true, 'l_icononly_button');
			this._btnFirst = $.createLButton('<span class="l_pagebar_bfirst"></span>', this.element, true, 'l_icononly_button');
			this._btnPrev = $.createLButton('<span class="l_pagebar_bprev"></span>', this.element, true, 'l_icononly_button');
			this._spanInfo = $("<span class='l_pagebar_info'></span>").appendTo(this.element);
			this._changeSpanInfo();
			this._btnNext = $.createLButton('<span class="l_pagebar_bnext"></span>', this.element, true, 'l_icononly_button');
			this._btnLast = $.createLButton('<span class="l_pagebar_blast"></span>', this.element, true, 'l_icononly_button');
			this._inputGo = $("<input type='text' class='l_pagebar_goinput'/>").appendTo(this.element);
			this._btnGo = $.createLButton('<span class="l_pagebar_bgo"></span>', this.element, true, 'l_icononly_button');

			var pb = this;
			this._on(this._btnFirst, {
				'lbuttonclick': function () {
					pb._turn(1);
				}
			});
			this._on(this._btnPrev, {
				'lbuttonclick': function () {
					pb._turn(pb._currPageNo - 1);
				}
			});
			this._on(this._btnNext, {
				'lbuttonclick': function () {
					pb._turn(pb._currPageNo + 1);
				}
			});
			this._on(this._btnLast, {
				'lbuttonclick': function () {
					pb._turn(pb._totalPageNo);
				}
			});
			this._on(this._btnRefresh, {
				'lbuttonclick': function () {
					var pageNo = pb._currPageNo;
					if (pageNo < 1) {
						pageNo = 1;
					}
					pb._turn(pageNo);
				}
			});
			this._on(this._btnGo, {
				'lbuttonclick': function () {
					var goInput = pb._inputGo;
					var v = parseInt(goInput.val());
					goInput.val('');
					if (!isNaN(v)) {
						v = Math.round(v);
						if (v > 0 && v <= pb._totalPageNo) {
							pb._turn(v);
						}

					}
				}
			});

		},

		_turn: function (pageNo) {

			if (pageNo < 1) {
				pageNo = 1;

			}
			if (pageNo > this._totalPageNo) {
				pageNo = this._totalPageNo;

			}

			this._currPageNo = pageNo;
			this.page();
		},
		_changeBtnState: function () {

			var prevEnabled = !(this._currPageNo <= 1);
			var nextEnabled = !(this._currPageNo == this._totalPageNo);

			this._btnFirst.enable(prevEnabled);
			this._btnPrev.enable(prevEnabled);

			this._btnNext.enable(nextEnabled);
			this._btnLast.enable(nextEnabled);

			var goEnable = (this._totalPageNo > 0);
			this._btnGo.enable(goEnable);
			this._btnRefresh.enable(goEnable);

		},
		_setOptions: function (props) {
			this._convertOptions(props);
			if (props != null) {
				var init = false;
				var that = this;
				$.each(props, function (key, v) {
					if (key == 'param') {
						if (v != null) {
							that.options.param = $.extend(true, {}, v);
						} else {
							that.options.param = {};
						}
						init = true;
					} else if (key == 'busiNo' || key == 'pageTurnFunc') {
						that.options[key] = v;
						init = true;
					} else {
						that._setOption(key, v);

					}
				});

				if (init) {
					this._currPageNo = 1;
					this._totalPageNo = 0;
				}
			}
		},

		reset: function (totalCount, start) {
			if (totalCount == null) {
				totalCount = 0;
			}
			this._totalCount = totalCount;
			if (totalCount > 0 && start != -1) {
				this._currPageNo = Math.floor(start / this.options.limit) + 1;
			}
			this._update();
		},

		page: function () {

			var limit = this.options.limit;
			var start = (this._currPageNo - 1) * limit;

			var pb = this;
			if (this.options.pageTurnFunc != null) {
				this.options.pageTurnFunc(start, limit);
			} else if (this.options.busiNo != null) {
				var p = this.options.param;
				p.start = start;
				p.limit = limit;

				L.invoke(this.options.busiNo, p, function (result) {
					pb._totalCount = result[pb.options.totalCountField];

					pb._update();
					pb._disposeTargetAfterPage(result[pb.options.dataField]);

				});
			}

		},
		_disposeTargetAfterPage: function (data) {
			var tId = this.options.targetId;
			if (tId != null) {
				var tgt = $('#' + tId);
				if (tgt.hasClass('l_table')) {
					tgt.ltable('option', {
						dataProvider: data
					});
 				}else if (tgt.hasClass('l_fixtable')) {
                    tgt.lfixtable('option', {
                        dataProvider: data
                    });
                }
			}
		},

		_update: function () {
			if (this._totalCount == 0) {
				this._currPageNo = 0;
				this._totalPageNo = 0;
			} else {
				this._totalPageNo = Math.ceil(this._totalCount / this.options.limit);
			}
			this._changeSpanInfo();
			this._changeBtnState();
		}
	});
})(jQuery);

(function ($) {
	$.widget('linkage.iruploadedfile', {
		options: {
			disableLink: false,
			valueType: 1,// 1集合2符号分隔
			idField: 'id',
			nameField: 'name',
			valueField: null,
			value: null,
			singleLine: false,
			showDel: false
		},
		_$oldFile:null,
		_$fileChange:false,
		_convertOptions: function (ops) {
			$.convertObjNumber(ops, [ 'valueType' ]);
			$.convertObjBool(ops, [ 'disableLink', 'singleLine', 'showDel' ]);
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this._on(this.element, {
				'click a.l_irlink': function (event) {
					event.preventDefault();
					var $a = $(event.currentTarget);
					var fileId = $a.data('id');

					L.downloadFile([ fileId ]);
				},
				'click a.l_txtdelindicator': function (event) {
					var $del = $(event.currentTarget);
					var $a = $del.prev();
					this._trigger('delClick', null, {
						id: $a.data('id'),
						name: $a.text()
					});
				}
			});
			this._createContent();
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			if (ops) {
				var create = false;
				var that = this;
				$.each(ops, function (k, v) {
					if (k == 'value' || k == 'showDel') {
						create = true;
						that._setOption(k, v);

					} else {
						that._setOption(k, v);
					}
				});
				if (create) {
					this._createContent();
				}
			}
		},

		_createContent: function () {
			var ops = this.options;
			var data = ops.value;

			if (data != null) {
				var valueField = ops.valueField;
				var valueType = ops.valueType;
				var idField = ops.idField;
				var nameField = ops.nameField;
				var disableDownloadLink = ops.disableLink;
				var v = valueField ? data[valueField] : data;
				var arr = $.setFileResultValue(valueType, v, idField, nameField);

				var larr = [];
				$.each(arr, function (idx, o) {
					if (disableDownloadLink) {
						larr.push(o.name);
					} else {
						//上传文件加上图标
						var s=o.name.lastIndexOf(".")
						var skey=o.name.substring(s+1,o.name.length)
						var iconclass="icon"+skey;
						
						larr.push('<a class="l_irlink" href="javascript:void(0)" data-id="' + o.id + '"><i class="fileicon '+iconclass+'"></i>' + o.name + '</a>'
								+ (ops.showDel ? '<a href="javascript:void(0)" class="l_txtdelindicator">×</a>' : ''));
					}
				});
				var sep = ops.singleLine ? '<br/>' : ' ';
				var newFile = larr.join(sep);
				this.element.html(newFile);
				if(this._$oldFile!=newFile){
					this._$fileChange = true;
					this._$oldFile = newFile;
				}else{
					this._$fileChange = false;
				}
			} else {
				this.element.empty();
				if(this._$oldFile!=null){
					this._$fileChange = true;
					this._$oldFile = null;
				}else{
					this._$fileChange = false;
				}
			}
		},
		fileChange:function(){
			return this._$fileChange;
		}

	});
})(jQuery);

//文件导入
(function ($) {
	$.widget('linkage.limportfile', {
		options: {
			singleLine: false
		},
		_$oldFile:null,
		_$fileChange:false,
		_convertOptions: function (ops) {
			$.convertObjBool(ops, ['singleLine']);
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this._createContent();
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			if (ops) {
				var create = false;
				var that = this;
				$.each(ops, function (k, v) {
					that._setOption(k, v);
				});
				if (create) {
					this._createContent();
				}
			}
		},

		_createContent: function () {
			var ops = this.options;
			var data = ops.value;

			if (data != null) {

				var idField = ops.idField;
				var nameField = ops.nameField;
				var v = "importFiles";
				var arr = $.setFileResultValue(valueType, v, idField, nameField);

				var larr = [];
				$.each(arr, function (idx, o) {
					if (disableDownloadLink) {
						larr.push(o.name);
					} else {
						//上传文件加上图标
						var s=o.name.lastIndexOf(".")
						var skey=o.name.substring(s+1,o.name.length)
						var iconclass="icon"+skey;
						
						larr.push('<a class="l_irlink" href="javascript:void(0)" data-id="' + o.id + '"><i class="fileicon '+iconclass+'"></i>' + o.name + '</a>'
								+ (ops.showDel ? '<a href="javascript:void(0)" class="l_txtdelindicator">×</a>' : ''));
					}
				});
				var sep = ops.singleLine ? '<br/>' : ' ';
				var newFile = larr.join(sep);
				this.element.html(newFile);
				if(this._$oldFile!=newFile){
					this._$fileChange = true;
					this._$oldFile = newFile;
				}else{
					this._$fileChange = false;
				}
			} else {
				this.element.empty();
				if(this._$oldFile!=null){
					this._$fileChange = true;
					this._$oldFile = null;
				}else{
					this._$fileChange = false;
				}
			}
		},
		fileChange:function(){
			return this._$fileChange;
		}

	});
})(jQuery);



(function ($) {
	$.widget('linkage.lcheckbox', {
		options: {
			positiveKey: 'true',
			negativeKey: 'false'

		},

		_create: function () {
			$.convertDataToOption(this);
			this.element.addClass('l_csscheckbox');
			this._on(this.element, {
				'change': function () {
					this._trigger('change');
				}
			});
		},
		getValue: function () {
			if (this.element.prop('checked')) {
				return this.options.positiveKey;
			} else {
				return this.options.negativeKey;
			}
		},
		setValue: function (vv) {
			var old = this.getValue() + '';
			var v = vv + '';
			if (v != old) {

				var checked = (v == (this.options.positiveKey + ''));
				this.element.prop('checked', checked);
				this._trigger('change');
			}
		}

	});
})(jQuery);
(function ($) {
	$.widget('linkage.lradiogroup', {
		options: {
			dataProvider: null,
			keyField: 'key',
			labelField: 'label',
			disabled: false,
			vertical: false,
			hCount: 0,// 水平时每行个数，0表示不限制
			genLabelFunc:null//生成自定义label的函数，将隐藏原始按钮 function(idx,item,dp){}
		},
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'disabled', 'vertical' ]);
			$.convertObjNumber(ops, [ 'hCount' ]);
		},
		_needRefresh: false,
		_divId: null,
		_create: function () {
			this._needRefresh=false;
			$.convertDataToOption(this);

			this._on(this.element, {
				'change input': function (event) {

					this._trigger('change');
				}
			});
			this._divId = this.element[0].id;
			this._setOptions(this.options);
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			if (ops) {
				var that = this;
				$.each(ops, function (k, v) {
					if (k == 'dataProvider') {
						that._needRefresh = true;
						that._setOption(k, v);
					} else if (k == 'disabled') {
						that.options.disabled = v;
						that.element.children('input').prop('disabled', v);
					} else{
						if(k=='genLabelFunc' && that.options.dataProvider){
							that._needRefresh = true;
						}
						that._setOption(k, v);
					}
				});
				if (this._needRefresh) {
					this._update();
				}
			}
		},
		_genSingle: function (idx, item, opt, itemId) {
			var arr=[this._genSingleHiddenInput(item,opt,itemId,'l_cssradio')];
			arr.push('<label for="'+itemId+'" class="l_cssradiolabel"><span></span></label>');
			return  arr.join('');
		},
		_genSingleHiddenInput:function(item,opt, itemId,cssClass){
            var arr=['<input type="radio" class="'+cssClass+'" '];
            arr.push(opt.disabled ? 'disabled="disabled"' : '');
            arr.push(' name="' + this._divId + '" value="' + L.encodeHTML(item[opt.keyField]) + '" id="' + itemId + '"/>');
            return  arr.join('');
		},
		_update: function () {
			this._needRefresh = false;
			var cont = [];
			var opt = this.options;
			var dp = opt.dataProvider;
			var id = this._divId;
			if (dp && opt.keyField && opt.labelField) {
				var len = dp.length;
				var that = this;
				var hCount = opt.hCount - 0;
				$.each(dp, function (idx, item) {
					var rid = id + '_' + idx;
					if(opt.genLabelFunc!=null){
						cont.push(that._genSingleHiddenInput(item,opt,rid,'l_csshiddenctl'));
                        cont.push('<label for="' + rid + '">' + opt.genLabelFunc(idx,item,dp) + '</label>');
					}else{
                        cont.push(that._genSingle(idx, item, opt, rid));
                        cont.push('<label for="' + rid + '">' + L.encodeHTML(item[opt.labelField]) + '</label>');
					}
					if (idx < len - 1) {
						if (opt.vertical) {

							cont.push('<br/>');

						} else {

							if (hCount > 0 && idx % hCount == (hCount - 1)) {
								cont.push('<br/>');
							}
						}
					}
				});
			}
			this.element.html(cont.join(''));
			if(!$.lNull(this._value)){
				this._setValue(this._value);
                this._value=null;
			}
		},
		getValue: function () {
            if(this.element.find('input').length>0){
				return this._getValue();
            }else{
            	return this._value;
			}

		},
		_getValue:function(){
            var selVal = this.element.children("input:checked").val();
            if(selVal){
                return selVal;
            }else{
                return null;
            }
		},
		_setValue:function(v){
            var old = this._getValue();
            if (v != old) {
				if (!$.lNull(v)) {
                    this.element.children("input[value='" + v + "']").prop('checked', true);
                } else {
                    this.element.children("input").prop('checked', false);
                }
                this._trigger('change');
            }

		},
		setValue: function (v) {
			if(this.element.find('input').length>0){
				this._setValue(v);
			}else{
				this._value=v;
			}
		}
	});
})(jQuery);
(function ($) {
	$.widget('linkage.lcheckboxgroup', $.linkage.lradiogroup, {
		options: {
			resultType: 1,// 1或null集合;2符号分隔字符串
			sep: ",",
			resultArrField: null

		},
		_convertOptions: function (ops) {
			this._super(ops);
			$.convertObjNumber(ops, [ 'resultType' ]);

		},
		_genSingle: function (idx, item, opt, itemId) {
			var arr=[this._genSingleHiddenInput(item,opt,itemId,'l_csscheckbox')];
			arr.push('<label class="l_csscheckboxlabel" for="'+itemId+'"></label>');
			return arr.join('');
		},
        _genSingleHiddenInput:function(item,opt, itemId,cssClass){
			return  '<input type="checkbox" class="'+cssClass+'" ' + (opt.disabled ? 'disabled="disabled"' : '') + ' id="' + itemId + '"/>';
        },
		_getValue: function () {
			var sis = [];
			var opt = this.options;
			var dp = opt.dataProvider;
			this.element.children('input').each(function (idx, inputEl) {
				if ($(inputEl).prop('checked')) {
					sis.push(dp[idx][opt.keyField]);
				}
			});
			return $.typedResultValue(opt.resultType, opt.sep, opt.resultArrField, sis);

		},
		_setValue: function (v) {

			var opt = this.options;
			var dp = opt.dataProvider;
			var old = [];
			var cbs = this.element.children('input');
			cbs.each(function (idx, inputEl) {
				if ($(inputEl).prop('checked')) {
					old.push(dp[idx][opt.keyField]);
				}
			});
			var selectKeyType;
			if(dp && opt.resultType==2){
				$.each(dp,function(index,item){
					if(item[opt.keyField]){
						selectKeyType = typeof(item[opt.keyField]);
						return false;
					}
				});
			}
			var arr = $.typedResultValue(opt.resultType, opt.sep, opt.resultArrField, old, v,selectKeyType);

			if (arr != null) {
				cbs.each(function (idx, inputEl) {
					$(inputEl).prop('checked', $.lInArray(dp[idx][opt.keyField], arr) != -1);

				});
				this._trigger('change');
			}

		}
	});
})(jQuery);
(function ($) {

	$.widget("linkage.lnumberinput", {
		options: {

			prompt: null,
			showThousandSep: false,
			precision: -1,// -1表示原样不变
			prefix: null,
			suffix: null,
			align: null

		},
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'showThousandSep' ]);
			$.convertObjNumber(ops, [ 'precision' ]);
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_create: function () {
			$.convertDataToOption(this);
			this._convertOptions(this.options);
			this.element.addClass('l_inputcontrol l_inputcontrol2');
			var that = this;
			var opt = this.options;

			if (opt.prompt != null && (opt.prompt + '').length == 0) {
				opt.prompt = null;
			}
			if (opt.prompt != null) {
				this.element.val(opt.prompt).addClass('l_inputprompt');

			}
			this.oriValue = null;
			if (opt.align) {
				this.element.css('text-align', opt.align);
			}
			
			if(this.element.hasClass('l_numberinput')){
				//只禁用文本框的回车事件
				this.element.keypress(function(event) {
					if (event.keyCode == 13) {
					   event.preventDefault();
					}
				});
			}

			this._on(this.element, {
				'focus': function (event) {
					that.element.removeClass('l_inputprompt').val(that.oriValue);
				},
				'blur': function (event) {
					// 先过滤
					var newv = that.element.val();
					if (newv != null && (newv + '').length > 0) {
						newv = newv - 0;
						if (isNaN(newv)) {
							newv = null;
						} else {
							if (that.options.precision != -1) {
								var np = that.options.precision - 0;
								if (!isNaN(np)) {
									newv = newv.toFixed(np);
								}

							}
						}
					} else {
						newv = null;
					}

					if (that.oriValue != newv) {
						var old = that.oriValue;
						that.oriValue = newv;

						that._trigger('change', null, {
							newValue: newv,
							oldValue: old
						});
					}
					that._format();

				}

			});

		},
		getValue: function () {
			return this.oriValue;
		},
		setValue: function (vv) {
			var v=null;
			if(!$.lNull(vv)){
				v = vv - 0;
				if (isNaN(v)) {
					v = null;
				} else {
					if (this.options.precision != -1) {
						var np = this.options.precision - 0;
						if (!isNaN(np)) {
							v = v.toFixed(np);
						}

					}
				}
			}

			if (this.oriValue != v) {
				var old = this.oriValue;
				this.oriValue = v;
				// 格式化
				this._format();
				this._trigger('change', null, {
					newValue: v,
					oldValue: old
				});
			}
		},
		_format: function () {
			var opt = this.options;
			var v = this.oriValue;
			if (v == null) {
				this.element.val(opt.prompt).addClass('l_inputprompt');
			} else {

				if (opt.showThousandSep) {
					v = $.formatThousandSep(v);
				}
				if (opt.prefix) {
					v = opt.prefix + v;
				}
				if (opt.suffix) {
					v += opt.suffix;
				}
				this.element.removeClass('l_inputprompt').val(v);
			}
		}
	});
})(jQuery);

(function ($) {
	function createUserInfoBar(){
        var hmenus=$('div.l_hmenus');
        if(hmenus.length>0){
            var name=  (L.userInfo.memberName?L.userInfo.memberName:L.userInfo.userName);
            var firstLetter=name.substring(0,1);
            var arr=['<div style="float: right; margin-right: 100px; margin-top: 20px;"><span style="color:black;padding-right:20px;">欢迎您：<span style="color: rgb(146,15,16);font-weight: bold;font-size: 14px;">'+name+'</span></span></div><div class="l_rightbar">'];
            arr.push('<span title="收藏" id="lFavBtn" class="l_userfaricon"></span>');
            arr.push('<a title="系统管理" class="l_changemanage" href="'+L.getContextPath()+'c/Main.html" target="_blank"></a>');
            arr.push('<a title="退出" class="l_logout" href="'+L.getContextPath()+'logout" target="_self"></a>');
            
            arr.push('</div>');
            hmenus.append(arr.join(''));
        }
    }
/*    function createUserInfoBar(){
        var hmenus=$('div.l_hmenus');
        if(hmenus.length>0){
            var name=  (L.userInfo.memberName?L.userInfo.memberName:L.userInfo.userName);
            var firstLetter=name.substring(0,1);
            var arr=['<div class="l_huserinfobar">'];
            arr.push('<span id="lFavBtn" class="l_userinfobaricon"></span>');
            arr.push('<span id="lMsgToRead"></span><span id="lMsgToDo"></span>');
            arr.push('<ul id="lUserMoreMenu"><li><a href="javascript:void(0)" id="lUserMoreBtn"><span class="l_headportrait">'+firstLetter+'</span><span class="l_userinfoname">'+name+'</span></a>');
            arr.push('<ul>');
            arr.push('<li><a href="'+L.getContextPath()+'lpage/workshop/changePsw"  target="_self">修改密码</a></li>');
            if(L.access('dev_tools')){
                arr.push('<li><a href="'+L.getContextPath()+'c/Main.html"  target="_blank">系统管理</a></li>');
			}
            arr.push('<li><a href="'+L.getContextPath()+'logout"  target="_self">退出系统</a></li>');
            arr.push('</ul></li></ul></div>');
            hmenus.after(arr.join(''));

        }
        

    }*/
    function refreshSystemInfoBar(o) {
        if (o) {
            var rc = o.rCount - 0;
            var tc = o.tCount - 0;
            if (isNaN(rc)) {
                rc = 0;
            }
            if (isNaN(tc)) {
                tc = 0;
            }

            var toRead = $('#lMsgToRead');
            var toDo = $('#lMsgToDo');
            toRead.children('span.l_msg_count').text(rc > 0 ? rc : '');
            toDo.children('span.l_msg_count').text(tc > 0 ? tc : '');

            if (rc > 0) {
                toRead.addClass('l_msg_highlight');
            }
            if (tc > 0) {
                toDo.addClass('l_msg_highlight');
            }
        }
    }
    function initMsg(){
        if (L.config.doPoll && L.urlParam && !L.urlParam.__s) {

            $('#lMsgToRead').addClass('l_userinfobaricon l_msg_readicon').html('<span class="l_msg_count"></span>').on('click', function () {

                L.openModuleByURI(L.config.momUri, LI.sysMsg, {
                    t: 1
                }, null, null, false);
            });
            $('#lMsgToDo').addClass('l_userinfobaricon l_msg_doicon').html('<span class="l_msg_count"></span>').on('click', function () {

                L.openModuleByURI(L.config.momUri, LI.sysMsg, {
                    t: 2
                }, null, null, false);
            });

            function pollInfo() {
                L.invoke('lmsp_lpage.LPagePopInfoBo', null, pollInfoCallback, true, null, true, function () {
                    setTimeout(pollInfo, L.config.pollIntervalMS);
                });
            }

            function pollInfoCallback(result) {

                var infos = result.infos;
                if (infos) {
                    $.each(infos, function (idx, lInfo) {
                        processLInfo(lInfo);
                    });
                }
                setTimeout(pollInfo, L.config.pollIntervalMS);
            }

            function processLInfo(lInfo) {
                switch (lInfo.type) {
                    case 1:
                        // 系统消息
                        refreshSystemInfoBar(lInfo.body);

                        break;
                    default:
                        if (L.config.processInfo != null) {
                            L.config.processInfo(lInfo);
                        }

                }
            }

            pollInfo();

        }
    }
    $.widget("linkage.hmenus", {
        options:{
            createUserInfoBarFunc:createUserInfoBar
        },
		_create: function () {
			if(L.config.logoShowHome){
	            $('div.l_logo').on('click',function(){
	                //转到首页
	                location.href=L.getContextPath()+L.config.logoHomeUrl;
	            });
			}else{
				 $('div.l_logo').css('cursor','auto');
			}

            if(this.options.createUserInfoBarFunc!=null){
                this.options.createUserInfoBarFunc();
            }
            initMsg();
            //到此为止userinfobar已经全部创建好了，重新计算topmenu的宽度
            var ulmenu=$('#lPrettyMenu');
            if(!L.config.showLeftMenuOnly){
                ulmenu.css('right',$('div.l_huserinfobar').width()+'px');
                ulmenu.show();
            }

		    var tdleft= $('td.l_leftmenu');
		    var leftw= tdleft.width();

		    if(leftw>0){
				if(!L.config.hideLeftMenuToggleHandle){
		    		var lmh=$('<div class="l_leftmenuhandle"><span class="ui-icon ui-icon-carat-1-w"></span></div>');
					tdleft.append(lmh);
					lmh.on('click',function(){
						if(lmh.parent().is('body')){
                            lmh.detach();
                            tdleft.show();
                            lmh.removeClass('l_leftmenuhandlefix');
                            lmh.children('span').removeClass('ui-icon-carat-1-e').addClass('ui-icon-carat-1-w');
                            tdleft.append(lmh);
						}else{
                            lmh.detach();
                            tdleft.hide();
                            lmh.addClass('l_leftmenuhandlefix');
                            lmh.children('span').removeClass('ui-icon-carat-1-w').addClass('ui-icon-carat-1-e');
                            $('body').append(lmh);
						}

					});
				}
		        var leftmenuul=null;
                if(L.config.showLeftMenuOnly){
                    ulmenu.detach();
                    leftmenuul=ulmenu;
                    leftmenuul.show();
                }else{
                    leftmenuul=ulmenu.children('li.l_menuselected').children('ul').clone();
                    leftmenuul.addClass('l_ulmenu');
                    leftmenuul.children('li').addClass('l_topmenu');
                }
                if(leftmenuul&&leftmenuul.length>0){
                    leftmenuul.attr('id','lPrettyLeftMenu');
                    if(L.config.expandHeight){
						var $tdleftdiv=$('<div class="tdleftdiv" style="position:relative;">');
                        tdleft.append($tdleftdiv);
                        $tdleftdiv.append(leftmenuul);
                        $tdleftdiv.perfectScrollbar($.fn.perfectScrollbar.defaults);
                    }else{
                        tdleft.append(leftmenuul);
					}

                    var level1A= leftmenuul.children('li').children('a');
                    level1A.on('click',function(){
                        var nextul= $(this).next('ul');
                        if(nextul.length>0){
                            nextul.toggle();
                            return false;
                        }
                    });
                    var that=this;
                    level1A.children('span.l_menu_label').each(function(idx,itm){
                        that._addLabelTip(itm);
                    });
                    //左侧最高级显示图标，如果有自定义class，后面加上Hover变成新class
                    leftmenuul.children('li.l_menuselected').children('a').children('span.l_menu_icon').each(function(idx,itm){
                        var $el=$(itm);
                        var cls=$el.attr('class').split(' ');
                        $.each(cls,function(idx,one){
                            var s=one.trim();
                            if(s!='l_menu_icon'){
                                $el.removeClass(s).addClass(s+'Hover');
                            }
                        });
                    });
                    level1A.next('ul').children('li').children('a').children('span.l_menu_label').each(function(idx,itm){
                        that._addLabelTip(itm);
                    });
                }

            }
            function resetState(){
		    	if(ulmenu.is(':hover')){
		    		setTimeout(resetState,10000);
		    		return;
				}
		    	ulmenu.removeClass('l_topmenu_active');
			}
            if(!L.config.showLeftMenuOnly){
				ulmenu.children('li').children('a').on('click',function(){
					ulmenu.addClass('l_topmenu_active');
					setTimeout(resetState,10000);
				});
            }
            this.resetTopMenus();

		},
		resetTopMenus:function(){
			var that = $('#mobile_menu');
			that.empty();
			if(!L.config.showLeftMenuOnly){
				var ulmenu=$('#lPrettyMenu');
				if($('div.l_huserinfobar').is(":hidden")){
					ulmenu.css('right',$('div.l_huserinfobar').width()+'px');
					$('div.l_huserinfobar').show();
				}

				//如果顶层菜单一级的li宽度之和超过ul的宽度，显示。。。
				//预留滚动条20
				var ulw=ulmenu.width();
				var w=0;
				var wcurr=0;
				var currIdx=-1;
				var lis=ulmenu.children('li');
				var lastli=lis.eq(lis.length-1);
				if(lastli.hasClass('l_menudot3') || lastli.hasClass('l_menudot4')){
					//把隐藏的放回去先
					lastli.detach();
					lastli.children('ul').children('li').each(function(idx,itm){
						var $el=$(itm);
						$el.addClass('l_topmenu');
						ulmenu.append($el);
					});
					lis=ulmenu.children('li');
				}
				lis.each(function(idx,el){
					var $li=$(el);
					currIdx=idx;
					wcurr=$li.width();
					w+=wcurr;
					if(w>ulw){
						return false;
					}
				});
				if(w>ulw || $(window).width() <= 768){
					//内容超长了，去掉当前的内容是否够放点点点，宽度60
					if($(window).width() <= 768){
						currIdx = -1;
					}else if(w-wcurr>ulw-60){
							currIdx--;
					}
					if(currIdx<=0){
						$('.l_huserinfobar').hide();
						ulmenu.css('right',"0");

						if(currIdx<0){                    		
							currIdx = 0;
						}else if(currIdx==0){                    		
							currIdx = 1;
						}
					}
					if(currIdx>=0){

						//从currIdx（含）开始全放入点点点下拉
						var dotli;
						var dotul=$('<ul>');
						if(currIdx==0){
							currIdx = 0;
							dotli = $('<li class="l_menu_li l_topmenu l_menudot4">');
						}else{
							dotli = $('<li class="l_menu_li l_topmenu l_menudot3">');
						}
						
						var dotlia = $('<a href="javascript:void(0)" target="_self"></a>');
						dotli.append(dotlia);
						dotli.append(dotul);
						var len= lis.length;
						for(var i=currIdx;i<len;i++){
							var oneli=lis.eq(i);
							oneli.detach();
							oneli.removeClass('l_topmenu');
							dotul.append(oneli);
						}
						ulmenu.append(dotli);
						
						if(currIdx==0){
							var cloneUl=dotul.clone();
							that.append(cloneUl);
							cloneUl.find('li.l_menuselected').each(function(idx,item){
								$(this).children('span.l_menu_label_parent').each(function(index,SpamItem){
									$(this).addClass("submenu-opened");
									$(this).siblings('ul').show();
								});
							});
							cloneUl.hide();
							dotlia.on('click', function() {
								cloneUl.toggle();
					    	});
							cloneUl.find('.l_menu_label_parent').on('click', function() {
								$(this).toggleClass('submenu-opened');
								var nextul= $(this).siblings('ul');
								if(nextul.length>0){
									nextul.toggle();
									return false;
								}
							});
							cloneUl.find('.l_menu_label_parent').each(function(idx,itm){
								var nextul= $(this).siblings('ul');
								var nexta= $(this).siblings('a');
								var that = $(this);
								if(nextul.length>0 && nexta.length>0){
									nexta.on('click', function() {
										that.toggleClass('submenu-opened');
										var nextul= $(this).siblings('ul');
											nextul.toggle();
									});	
								}
							});
						}
						
						
					}

				}else if(L.config.changeMenuStyle){
					//此处暂时改为页面刷新一遍
					window.location.reload();
				}
			}else{
				 if ($(window).width() <= 768) {
					window.location.reload();
				 }
				
			}
		},
		_addLabelTip:function(el){
			var $el=$(el);
			var txt=$el.text();
			var w=$.lGetStringWidth(txt,$el.css('font-style')+' '+$el.css('font-weight')+' '+$el.css('font-size')+' '+$el.css('font-family'));
			if(w>=$el.width()){
				$el.attr('title',txt);
				$el.tooltip({
					track:false,
					hide:false,
					position: {
                        my: "left-8 top+2",
                        at: "left bottom",
                        collision: "flipfit"
                    }
                });
            }
        }
	});
})(jQuery);
(function ($) {
	//支持内容滚动的简单表格，基类。子类可覆写 _createBaseElement和_update方法以更改表现形式
	//只有每一列都设置了固定宽度，才会出现横向滚动条
    $.widget("linkage.ltable", {
        options: {
            dataProvider: null,
            columns: [],
            showCheckColumn: false,
            checkColAfter:-1,
            showLineNumber: false,
            selectedIndex: -1,
            selectedItem: null,
            calRowColorFunc: null,
            gridH:0, //表格高度,用于处理纵向滚动条,设置有实际值则出现滚动条
			expandHeight:false,//填满父容器高度100%，如果设置了gridH，此不起作用
            headLineHeight:41,
            checkColumnWidth:50,
			hideHeader:false
		},
        _convertOptions: function (ops) {
            $.convertObjBool(ops, [ 'showCheckColumn', 'showLineNumber','hideHeader']);
            $.convertObjNumber(ops, [ 'selectedIndex','gridH','checkColAfter']);
        },
        _headHtml: null,
        _needRender: false,
        _headChange: false,
        _sortChange: false,
        _selectedChange: false,
        _lastSortIdx: -1,
        _lastSortDirec: null,
		_fixTableWidth:0,//每一列都设置了固定宽度时是他们的和
        _hasGroup:false,
		_totalColumnNumber:0,
        _createBaseElement:function(){
        	this.element.html((this.options.hideHeader?'':'<div class="l_table_headctn"></div>')+'<div class="l_table_content"></div>');
            var contdiv=this.element.children('div.l_table_content');
            contdiv.perfectScrollbar($.fn.perfectScrollbar.defaults);
            if(!this.options.hideHeader){
                var headdiv=this.element.children('div.l_table_headctn');
                var that=this;
                contdiv.on('ps-scroll-x',function(){
                    if(that._fixTableWidth>0){
                        var tb1=headdiv.children('table');
                        var tb2=contdiv.children('table');
                        if(tb1&&tb2){
                            var tb2p=tb2.position();
                            if(tb2p){
                                tb1.css('left',tb2p.left+'px');
                            }

                        }
                    }

                });
			}
		},
        _create: function () {
            this._needRender=false;
            this._headChange=false;
            this._sortChange=false;
            this._selectedChange=false;
            this._lastSortIdx=-1;
            this._fixTableWidth=0;
            this._hasGroup=false;
            this._totalColumnNumber=0;
            $.convertDataToOption(this);
			this._createBaseElement();
            this._on(this.element, {
                'click tr.l_table_body_tr': function (event) {
                    var $tr= $(event.currentTarget);
                    this._setOptions({
                        selectedIndex: $tr.data('index')
                    });
					this._trigger('lclick');
                },
                'click td.l_table_check': function (event) {
                    var $td= $(event.target);
                    if($td.is('td.l_table_check')){
                        //如果有checkbox，选中之
                        var checkinput=$td.children('input');
                        if(checkinput.length>0){
                            checkinput.prop('checked',!checkinput.prop('checked'));
                            if($td.parent().is('.l_table_head_tr')){
                                checkinput.trigger('change');
							}
                        }
					}
				},
                'dblclick tr.l_table_body_tr': function (event) {

                    this._trigger('dblclick');

                },
                'change .l_table_head_tr .l_table_check input': function (event) {

                    this.element.find('.l_table_body_tr .l_table_check input').prop('checked', $(event.currentTarget).prop('checked'));

                },
                'click a.l_table_body_a': function (event) {
                    var $this = $(event.currentTarget);
                    event.preventDefault();

                    this._setOptions({
                        selectedIndex: $this.closest('tr').data('index')
                    });

                    var cidx = $this.parent().data('cidx');
                    var clm = this.options.columns[cidx];
                    if (clm.ir.linkFunc != null) {
                        clm.ir.linkFunc();
                    }
                },
                'click td.l_table_sortheader': function (event) {
                    var $td = $(event.currentTarget);
                    var idx = $td.data('idx');
                    var clm = this.options.columns[idx];
                    var sort = L.consts.SORTDIRECTION_ASC;
                    if (idx === this._lastSortIdx && this._lastSortDirec === L.consts.SORTDIRECTION_ASC) {
                        sort = L.consts.SORTDIRECTION_DESC;
                    }
                    this._lastSortIdx = idx;
                    this._lastSortDirec = sort;
                    this._sortChange = true;

                    if (this._trigger('headerSort', null, {
                            column: clm,
                            direction: sort
                        })) {
                        // 前台排序
                        var dp = this.options.dataProvider;
                        if(dp!=null){
                            this._setOptions({dataProvider:null});
                            dp.sort(function(a,b){
                                if(a[clm.field]>b[clm.field]){
                                    if(sort == L.consts.SORTDIRECTION_DESC){
                                        return 1;
                                    }else{
                                        return -1;
                                    }
                                }else if(a[clm.field]<b[clm.field]){
                                    if(sort == L.consts.SORTDIRECTION_DESC){
                                        return -1;
                                    }else{
                                        return 1;

                                    }
                                }
                                else{
                                    return 0;
                                }
                            });
                            this._sortChange = true;
                            this._setOptions({dataProvider:dp});
                        }


                    }

                }
            });

			if(this._fixTableWidth>0 || this.options.gridH>0){
				this.element.resize(function(){
					if($(this).hasClass('l_fixtable')){
						$(this).lfixtable('resizeHeight').lfixtable('adjustHeadWidth');
					}else{						
						$(this).ltable('resizeHeight').ltable('adjustHeadWidth');
					}
				});
			}
            this._setOptions(this.options);

        },
        _applySort: function ($td) {
			if(this.options.hideHeader){
				return;
			}
            var idx = this._lastSortIdx;
            var direc = this._lastSortDirec;
            var allSortTds = this.element.find('td.l_table_sortheader');
            allSortTds.children('span.l_table_sort_indicator').removeClass('ui-icon-triangle-1-n').addClass('ui-icon-triangle-1-s');
            if (idx >= 0) {
                if ($td === undefined) {
                    $td = allSortTds.filter('[data-idx="' + idx + '"]');
                }
                var $span = $td.children('span.l_table_sort_indicator');
                if (direc == L.consts.SORTDIRECTION_ASC) {
                    $span.removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-n');
                }
            }

        },
        getSelectedItems: function () {
            var arr = [];
            if (this.options.showCheckColumn) {
                var dp = this.options.dataProvider;
                this.element.find('.l_table_body_tr .l_table_check input:checked').closest("tr").each(function (idx, tr) {
                    arr.push(dp[$(tr).data('index')]);
                });

            }
            return arr;
        },
        _setOptions: function (properties) {
            this._convertOptions(properties);
            if (properties) {
                var that = this;
                $.each(properties, function (key, v) {
                    if (key == 'columns') {
                        that._setColumns(v);

                    } else if (key == 'dataProvider') {
                        that._setDataProvider(v);
                    } else if (key == 'selectedIndex') {
                        that._setSelectedIndex(v);
                    } else if (key == 'selectedItem') {
                        that._setSelectedItem(v);
                    } else if (key == 'showCheckColumn') {
                        that._setShowCheckColumn(v);
                    } else if (key == 'showLineNumber') {
                        that._setShowLineNumber(v);
                    } else {
                        that._setOption(key, v);
                    }
                });

            }
            this._update();
        },
        _setShowCheckColumn: function (v) {
            if (this.options.showCheckColumn != v) {
                this.options.showCheckColumn = v;
                this._headChange = true;
                this._needRender = true;
            }
        },
        _setShowLineNumber: function (v) {
            if (this.options.showLineNumber != v) {
                this.options.showLineNumber = v;
                this._headChange = true;
                this._needRender = true;
            }
        },

        _setSelectedItem: function (v) {
            if (this.options.selectedItem != v) {

                var idx = -1;
                if (v != null) {
                    idx = $.inArray(v, this.options.dataProvider);
                }
                this._setSelectedIndex(idx);
            }

        },
        _setSelectedIndex: function (v) {
            var old = this.options.selectedIndex;
            if (old != v) {
                this.options.selectedIndex = v;
                this._selectedChange = true;
                var item = null;
                if (v != -1) {
                    item = this.options.dataProvider[v];
                }
                this.options.selectedItem = item;

                this._trigger("change", null, {
                    oldIndex: old,
                    newIndex: v
                });
            }

        },
        _setDataProvider: function (dp) {
            if (this.options.dataProvider != dp) {
                this.options.dataProvider = dp;
                this._setSelectedIndex(-1);
                this._needRender = true;

            }
        },
        refresh: function () {
            this._setSelectedIndex(-1);
            this._needRender = true;
            this._update();
        },
        _setColumns: function (v) {
            if (this.options.columns != v) {
                this.options.columns = v;
                this._headChange = true;
                this._needRender = true;
            }
        },
        _calTableWidthAndGroupTitle:function(groupNumberTitleMap,clms){
            var isGroup=false;
            var fixTableWidth=true;
            var ftw=0;
            $.each(clms, function (idx, clm) {
                var g = clm.group;
                if(!clm.w){
                    fixTableWidth=false;
                }else{
                    ftw+=(clm.w-0);
                }
                if (g != null) {
                    g = g + '';
                    if (g.length > 0) {
                        isGroup = true;
                        var title = clm.groupTitle;
                        if (title != null) {
                            title = title + '';
                            if (title.length > 0) {
                                groupNumberTitleMap[g] = title;
                            }
                        }
                    }

                }

            });
            if(fixTableWidth){
                this._fixTableWidth=ftw;
            }
            return isGroup;
        },
        _extractHead: function () {
            var showCheck = this.options.showCheckColumn;
            var showNum = this.options.showLineNumber;
			var isGroup = false;
            var group = [];
            var arr = [];
            var groupHolder=[];
            var groupCheckTD=null;
			var arrCheckTD=null;
			var groupHolderCheckTD=null;
            var clms = this.options.columns;
            var fixTableWidth=false;
            this._totalColumnNumber=0;
            if (clms != null && clms.length > 0) {
                var pre = '<tr class="l_table_head_tr">';
                var sfx = '</tr>';
                group.push(pre);
                arr.push(pre);
                groupHolder.push('<tr class="l_table_groupholder_tr">');
            	this._totalColumnNumber=clms.length;
				var ftw=0;
				var checkColNum=this.options.checkColAfter;
                if (showCheck || showNum) {
                	this._totalColumnNumber++;
					ftw+=this.options.checkColumnWidth;
                    groupCheckTD=('<td class="l_table_check" style="width:'+this.options.checkColumnWidth+'px;"> </td>');
                    groupHolderCheckTD=('<td class="l_table_check l_table_groupholder" style="width:'+this.options.checkColumnWidth+'px;"></td>');
                    var tmp=['<td class="l_table_check" style="width:'+this.options.checkColumnWidth+'px;">'];
                    if (showCheck) {
                        tmp.push('<input type="checkbox" class="l_csscheckbox"/>');
                    }
                    tmp.push('</td>');
                    arrCheckTD=tmp.join('');
                    if(checkColNum==-1){
						group.push(groupCheckTD);
						arr.push(arrCheckTD);
						groupHolder.push(groupHolderCheckTD);
					}
                }


                var groupNumberTitleMap = {};
                isGroup=this._calTableWidthAndGroupTitle(groupNumberTitleMap,clms);
                this._hasGroup=isGroup;
                fixTableWidth=(this._fixTableWidth>0);
                if(fixTableWidth){
                    this._fixTableWidth+=ftw;
                }
				var lastGroup = null;
                var groupCount = 0;
                var groupW=0;
                var checkColW=this.options.checkColumnWidth;
                var rosP=0;
                function closeGroup(){
                    if(lastGroup=='l_check_group'){
                        group.push(groupCheckTD);
                    }else{
                        var tmp=["<td"];
                        if(fixTableWidth){
                            tmp.push(' style="width:'+groupW+'px;"');
                        }
                        if (groupCount > 1) {
                            tmp.push(' colSpan="' + groupCount + '"');
                        }
                        if(rosP==1){
                        	tmp.push(' rowSpan="2"');
                        	rosP=0;
                        }
                        tmp.push('>' + ((lastGroup == null) ? ' ' : groupNumberTitleMap[lastGroup]?groupNumberTitleMap[lastGroup]:lastGroup) + '</td>');
                        group.push(tmp.join(''));
                    }
				}
                function disposeGroup(g,clmWidth){
                    if (lastGroup != g ) {
                        //新一组的开始
                        if (groupCount >0) {
                            // 收尾上一组
                            closeGroup();
                        }
                        //初始化
                        groupCount = 0;
                        groupW=0;
                    }
                    if(fixTableWidth){
                        groupW+=(clmWidth-0);
                    }
                    groupCount++;
                    lastGroup = g;
				}
                $.each(clms, function (idx, clm) {
                	
                    if (isGroup) {
                        // group用于判断是否在同一组，groupTitle用于显示label
                        var g = clm.group;
                        if(g==null){
                        	g=' ';
						}
                        disposeGroup(g,clm.w);
                        if(arrCheckTD!=null&&checkColNum==idx){
                            disposeGroup('l_check_group',checkColW);
                        }
                    }
                    var classNames=[];
                    if(clm.sortable){
                        classNames.push('l_table_sortheader');
                    }
                    if(clm.className){
                        classNames.push(clm.className);
                    }
                    var className = classNames.join(' ');

                    var headText = clm.headerText != null ? clm.headerText : '';
                    var headTxt = clm.sortable?'<span class="l_table_sort_headlabel">'+headText+'</span>':headText;
                    if(isGroup && (clm.headerText=='' || clm.headerText===undefined)){
                    	rosP=1;
                    }else{
                    	arr.push('<td '+(fixTableWidth?'style="width:'+clm.w+'px;"':'') + (classNames.length>0 ? 'class="'+classNames.join(" ")+'"': '') + ' data-idx="' + idx + '">' + headTxt
                    		+ (clm.sortable ? '<span class="l_table_sort_indicator ui-icon ui-icon-triangle-1-s"></span>' : '') + '</td>');
                    }
                    groupHolder.push('<td class="l_table_groupholder" style="width:'+clm.w+'px;"></td>');

					if(arrCheckTD!=null&&checkColNum==idx){
                    	arr.push(arrCheckTD);
                    	groupHolder.push(groupHolderCheckTD);
					}

                });
				if(isGroup){
					//收尾最后一个组
					closeGroup();
                }
                arr.push(sfx);
                group.push(sfx);
                groupHolder.push(sfx);
            }
            if (isGroup) {
                arr = group.concat(arr);

				arr=groupHolder.concat(arr);

            }
            this._groupHolderStr=groupHolder.join('');
			this._headHtml =this.options.hideHeader?'': arr.join('');

        },
        _renderColumn: function (clm, item) {
            var v = null;
            if (clm.field != null) {
                v = item[clm.field];
            }

            var rv = null;
            if (clm.irFunc != null) {
                rv = clm.irFunc(clm, item, v);
            } else {
                rv = v;

            }
            return rv;
        },
        adjustHeadWidth:function(){
            //使headdiv最后一行td宽度与contentdiv第一行的td宽度一致
            if(this._fixTableWidth<=0&&!this.options.hideHeader){
                var $tablecont=this.element.children('div.l_table_content');
                var $tablehead=this.element.children('div.l_table_headctn');
                var lineOneTds=$tablecont.find('tr').first().children('td');
                var headTds=null;
                if(this._hasGroup){
                    headTds=$tablehead.find('tr.l_table_groupholder_tr').children('td');
				}else{
                    headTds=$tablehead.find('tr').last().children('td');
				}

                var lentd=lineOneTds.length;
                if(lentd==headTds.length){
                    for(var i=0;i<lentd;i++){
                        headTds.eq(i).width(lineOneTds.eq(i).width());
                    }
                }

            }
        },
        _update: function () {

            if (this._headChange) {
                this._headChange = false;
                this._extractHead();
                var $tablehead=this.element.children('div.l_table_headctn');
                if($tablehead.length>0){
                    $tablehead.html('<table style="table-layout: fixed;'+(this._fixTableWidth>0?('position:absolute;min-width:'+this._fixTableWidth+'px;'):'')+'">'+this._headHtml+'</table>');
					$tablehead.height(this._hasGroup?this.options.headLineHeight*2:this.options.headLineHeight);
                }
            }
            if (this._needRender) {
                this._needRender = false;
                //表头和内容在两个不同的div中
                var fixwidth=(this._fixTableWidth>0);
                var content=['<table'+(fixwidth?' style="min-width:'+this._fixTableWidth+'px;table-layout: fixed;"':'')+'>'];
                var dp = this.options.dataProvider;
                var showCheck = this.options.showCheckColumn;
                var showNum = this.options.showLineNumber;
                var clms = this.options.columns;
                var hasDataRows=true;
				if (dp == null || dp.length == 0) {
					// 没有记录，显示一空行
					if(fixwidth){
						content.push(this._groupHolderStr);
					}
                    content.push('<tr class="l_table_blank_tr"><td align="center" colspan="'+this._totalColumnNumber+'">'+LI.noDataFound+'</td></tr>');
                    hasDataRows=false;
				} else {
					var pthis = this;
                    var clrFunc = pthis.options.calRowColorFunc;
					var firstLine=true;
					var trarr=[];//[{'s':'class="....','tds':[{'rs':1,'cs':1,'s':'class=....','c':'<input ....'}]}]
					var cacheMergeRow={};//{3:{v:lastValue,td:lastTDObj}}
                    $.each(dp, function (idx, item) {
                        var clr = null;
                        if (clrFunc != null) {
                            clr = clrFunc(idx, item);
                            if (clr != -1) {
                                clr = $.toHexColorStr(clr);

                            }
                        }
						var trobj={'s':'class="l_table_body_tr ' + (idx % 2 == 0 ? 'l_table_body_tr_odd' : 'l_table_body_tr_even') + '" data-index="'+idx+'"'};

                        var tdarr=[];
                        trobj.tds=tdarr;
                        var checktdobj=null;
						if (showCheck || showNum) {
                            var styles=['width:'+pthis.options.checkColumnWidth+'px;'];
                            if(clr!=null){
                                styles.push('background-color:'+clr+';');
                            }
                            var tdobj={'s':'class="l_table_check" style="'+styles.join('')+'"','c':''};
							if (showCheck) {
                                tdobj.c+=('<input type="checkbox" class="l_csscheckbox"/>');
                            }
                            if (showNum) {
                                tdobj.c+=(idx + 1);
                            }
                            if(pthis.options.checkColAfter==-1){
                                tdarr.push(tdobj);
							} else{
                                checktdobj=tdobj;
							}

						}
                        $.each(clms, function (cidx, clm) {
                            var sty = '';
                            var tdclass='';
                            if (clr != null) {
                                sty += 'background-color:' + clr + ';';
                            }
                            if(firstLine&&clm.w){
								sty+='width:'+clm.w+"px;";
							}
							var tdobj={};
                            var addtd=true;
                            
                            if(clm.showTip && clm.field!=null){
                            	if(clm.relTxtTip){
                            		tdobj.showTip = true;
                            		tdobj.relCont = item[clm.field];
                            	}else{
                            		tdobj.showTip = true;
                            	}
                            }
                            
							if(clm.mergeRow&&clm.field!=null){
								tdclass='l_table_merge_td';
								if(firstLine){
									cacheMergeRow[cidx]={td:tdobj,v:item[clm.field]};
								}else{
									var o=cacheMergeRow[cidx];
									var vv= item[clm.field];
									if(o.v===null||o.v===undefined||o.v===''||o.v!==vv){
										//上一行值是null或者相异，不做合并
                                        cacheMergeRow[cidx]={td:tdobj,v:vv};
                                        if(clm.mergeRowGap){
											trarr.push({'s':'class="l_table_body_trgap"','tds':[{'cs':pthis._totalColumnNumber,'s':''}]});
										}
									}else{
										if(!o.td.rs){
											o.td.rs=1;
										}
										o.td.rs++;
										addtd=false;
									}
								}
							}
							if(addtd){
                                tdobj.s=(tdclass.length>0?' class="'+tdclass+'"':'')+(sty.length > 0 ? (' style="' + sty + '"') : '') + (clm.align ? ' align="' + clm.align + '"' : '') + ' data-cidx="'+cidx+'"';
                                tdarr.push(tdobj);
                                tdobj.c=pthis._renderColumn(clm, item);
							}
							if(checktdobj&&pthis.options.checkColAfter==cidx){
								tdarr.push(checktdobj);
							}

                        });
                        trarr.push(trobj);
						firstLine=false;
                    });
				}
				if(trarr){
				$.each(trarr,function(idxtr,trobj){
					content.push('<tr '+trobj.s+'>');
					if(trobj.tds){
						$.each(trobj.tds,function(idxtd,tdobj){
							content.push('<td '+tdobj.s);
							if(tdobj.rs){
								content.push(' rowspan='+tdobj.rs);
							}
							if(tdobj.showTip){
								if(tdobj.relCont){
									content.push(' title='+tdobj.relCont);
								}else{									
									content.push(' title='+tdobj.c);
								}
							}
							if(tdobj.cs){
								content.push(' colspan='+tdobj.cs);
							}
							content.push('>');
							if(!$.lNull(tdobj.c)){
								content.push(tdobj.c);
							}
							content.push('</td>');
						});
					}
					content.push('</tr>');
				});
				}
                content.push('</table>');
                var $tablecont=this.element.children('div.l_table_content');
                $tablecont.children('table').remove();
                $tablecont.prepend(content.join(''));
                L.init(this.element);
                //使headdiv最后一行td宽度与contentdiv第一行的td宽度一致
				if(hasDataRows&&!fixwidth){
					this.adjustHeadWidth();
				}
				this.resizeHeight();
                this._trigger('afterRender');

            }

            if (this._selectedChange) {
                this._selectedChange = false;
                this.element.find('tr.l_table_selected_tr').removeClass('l_table_selected_tr');
                var idx = this.options.selectedIndex;

                if (idx != -1) {
                    this.element.find('tr.l_table_body_tr[data-index="' + idx + '"]').addClass('l_table_selected_tr');
                }
            }
            if (this._sortChange) {
                this._sortChange = false;
                this._applySort();
            }

        },
		resizeHeight:function(){
            var $tablecont=this.element.children('div.l_table_content');
            //如果表格设置了固定高度，计算并设置数据区高度
            if(this.options.gridH>0||this.options.expandHeight){
                var hhh=0;
                if(!this.options.hideHeader){
                    hhh=this.element.children('div.l_table_headctn').height();
                }
                if(this.options.gridH){
                    $tablecont.height(this.options.gridH-hhh);
                }else{
                    this.element.trigger('llayoutchange');
                    var pp=this.element.parent();
                    if(pp.is('.l_edittable')){
                    	var ppbarh=0;
                    	var ppbar=pp.children('div.l_edittable_btnbar');
                    	if(ppbar.length>0){
                    		ppbarh=ppbar.outerHeight();
						}
                        $tablecont.height(pp.height()-ppbarh-hhh);
					}else{
                        $tablecont.height(this.element.height()-hhh);
					}

                }

            }
            $tablecont.perfectScrollbar('update');
		}
    });
	$.widget("linkage.lfixtable",$.linkage.ltable, {
		options: {
			lockedColumnCount:0 //锁定列

		},
		_$colTable:null,
		_convertOptions: function (ops) {
			this._super(ops);
			$.convertObjNumber(ops, [ 'lockedColumnCount']);
		},
		_createBaseElement:function(){
            this.element.html('<div class="l_table_content"></div>');
		},
        _extractHead: function () {
            var showCheck = this.options.showCheckColumn;
            var showNum = this.options.showLineNumber;
            var isGroup = false;
            var group = [];
            var arr = [];
            var clms = this.options.columns;
            if (clms != null && clms.length > 0) {
                var pre = '<tr class="l_table_head_tr">';
                var sfx = '</tr>';
                group.push(pre);
                arr.push(pre);
                var ftw=0;
                if (showCheck || showNum) {
                    ftw+=this.options.checkColumnWidth;
                    group.push('<td class="l_table_check" style="width:'+this.options.checkColumnWidth+'px;"> </td>');
                    arr.push('<td class="l_table_check" style="width:'+this.options.checkColumnWidth+'px;">');
                    if (showCheck) {
                        arr.push('<input type="checkbox" class="l_csscheckbox"/>');
                    }
                    arr.push('</td>');
                }

                var lastGroup = null;
                var groupCount = -1;
                var groupW = 0;

                var groupNumberTitleMap = {};
                isGroup=this._calTableWidthAndGroupTitle(groupNumberTitleMap,clms);
                if(this._fixTableWidth>0){
                    this._fixTableWidth+=ftw;
                }


                $.each(clms, function (idx, clm) {
                    if (isGroup) {
                        // group用于判断是否在同一组，groupTitle用于显示label
                        var g = clm.group;
                        groupW+=Number(clm.w);
                        if (lastGroup != g || (lastGroup == null && g == null)) {
                            if (groupCount != -1) {
                                // 收尾上一组
                                group.push("<td width='"+groupW+"px'");
                                groupW = 0;
                                if (groupCount > 1) {
                                    group.push(' colSpan="' + groupCount + '"');
                                }
                                group.push('>' + ((lastGroup == null) ? ' ' : groupNumberTitleMap[lastGroup]?groupNumberTitleMap[lastGroup]:lastGroup) + '</td>');
                            }

                            groupCount = 0;
                        }
                        groupCount++;
                        lastGroup = g;
                    }
                    var classNames=[];
                    if(clm.sortable){
                        classNames.push('l_table_sortheader');
                    }
                    if(clm.className){
                        classNames.push(clm.className);
                    }
                    var className = classNames.join(' ');
                    var tdStyle = "";
                    if(clm.width){
                    	tdStyle = "style='width:"+clm.width+"' ";
                    }else if(clm.w){
                    	tdStyle = "style='width:"+clm.w+"px' ";
                    }

                    var headText = clm.headerText != null ? clm.headerText : '';
                    var headTxt = clm.sortable?'<span class="l_table_sort_headlabel">'+headText+'</span>':headText;
                    arr.push('<td '+ tdStyle + (classNames.length>0 ? 'class="'+classNames.join(" ")+'"': '') + ' data-idx="' + idx + '">' + headTxt
                        + (clm.sortable ? '<span class="l_table_sort_indicator ui-icon ui-icon-triangle-1-s"></span>' : '') + '</td>');

                });

                group.push("<td width='"+groupW+"px'");
                groupW = 0;
                if (groupCount > 1) {
                    group.push(' colSpan="' + groupCount + '"');
                }
                group.push('>' + ((lastGroup == null) ? ' ' : groupNumberTitleMap[lastGroup]?groupNumberTitleMap[lastGroup]:lastGroup) + '</td>');

                arr.push(sfx);
                group.push(sfx);
            }
            if (isGroup) {
                arr = group.concat(arr);
            }
            this._headHtml = arr.join('');

        },
		_update: function () {
			var hasFix = false;
			if (this._headChange) {
				this._headChange = false;
				this._extractHead();
			}
			if (this._needRender) {
				this._needRender = false;
				var tableId = $.uuid(16);
				var content = [ '<table cellSpacing="1" id="'+tableId+'">' ];
				content.push('<thead>'+this._headHtml+'</thead>'); //表头
				content.push('<tbody>'); //表格内容部分
				var dp = this.options.dataProvider;
				var showCheck = this.options.showCheckColumn;
				var showNum = this.options.showLineNumber;
				var clms = this.options.columns;
				if (dp == null || dp.length == 0) {
					// 没有记录，显示一空行
					var tdLen = clms.length;
					if (showCheck || showNum) {
						tdLen++;
					}
					content.push('<tr class="l_table_blank_tr"><td colSpan="' + tdLen + '" align="center">'+LI.noDataFound+'</td></tr>');
				} else {

					var pthis = this;
					var clrFunc = pthis.options.calRowColorFunc;

					$.each(dp, function (idx, item) {
						var clr = null;
						if (clrFunc != null) {
							clr = clrFunc(idx, item);
							if (clr != -1) {
								clr = $.toHexColorStr(clr);

							}
						}

						content.push('<tr class="l_table_body_tr ' + (idx % 2 == 0 ? 'l_table_body_tr_odd' : 'l_table_body_tr_even') + '" data-index="');
						content.push(idx);
						content.push('">');
						if (showCheck || showNum) {
                            var styles=['width:'+pthis.options.checkColumnWidth+'px;'];
                            if(clr!=null){
                                styles.push('background-color:'+clr+';');
                            }
                            content.push('<td class="l_table_check" style="'+styles.join('')+'">');
							if (showCheck) {
								content.push('<input type="checkbox" class="l_csscheckbox"/>');
							}
							if (showNum) {
								content.push(idx + 1);
							}

							content.push('</td>');
						}
						$.each(clms, function (cidx, clm) {
							var sty = '';
							if (clr != null) {
								sty += 'background-color:' + clr + ';';
							}

							content.push('<td' + (sty.length > 0 ? (' style="' + sty + '"') : '') + (clm.align ? ' align="' + clm.align + '"' : '') + ' data-cidx="');
							content.push(cidx);
							content.push('">');

							content.push(pthis._renderColumn(clm, item));
							content.push('</td>');
						});
						content.push('</tr>');

					});
					hasFix = true;
				}
				content.push('</tbody>');
				content.push('</table>');
				var contdiv=this.element.children('div.l_table_content');
                contdiv.html(content.join(''));
				L.init(this.element);
				if(!hasFix){
					//无数据滚动条处理
					contdiv.css('overflow-x','scroll');
					contdiv.children('table').css('table-layout','fixed');
				}else{
                    contdiv.css('overflow-x','hidden');
				}
				this._trigger('afterRender');


			}

			if (this._selectedChange) {
				this._selectedChange = false;
				this.element.find('tr.l_table_selected_tr').removeClass('l_table_selected_tr');
				var idx = this.options.selectedIndex;

				if (idx != -1) {
					this.element.find('tr.l_table_body_tr[data-index="' + idx + '"]').addClass('l_table_selected_tr');
				}
			}
			if (this._sortChange) {
				this._sortChange = false;
				this._applySort();
			}
			var that = this;
			var height = this.options.gridH;
			if(hasFix){
				if(height==0){
					if(this._fixTableWidth>this.element.width()){
						$('#'+tableId).css('table-layout','fixed');
					}
					height = this.element.height();
					$('#'+tableId).css('table-layout','auto');
				}
				if(this._fixTableWidth>this.element.width() && height>0){
					height+=30;//防止横向滚动条出现时也出现纵向滚动条
				}
				this.element.children('div.l_table_content').css('overflow','hidden');

				if(this._fixTableWidth>this.element.width() || this.options.gridH>0){
					//固定行固定列滚动处理
					this._fixTable(tableId,this.element.width(),height);
				}

				if(this._fixTableWidth>0 || this.options.gridH>0){
					this.element.resize(function(){
						that._fixHandle(tableId,$(this).width(),height);
					});
				}
			}


		},

		_fixHandle:function(tableId){
			var height = this.options.gridH;
			if(this._fixTableWidth>this.element.width() || this.options.gridH>0){
				if(height==0){
					if(this._fixTableWidth>this.element.width()){
						$('#'+tableId).css('table-layout','fixed');
					}
					height = this.element.height();
					$('#'+tableId).css('table-layout','auto');
				}
				if(this._fixTableWidth>this.element.width() && height>0){
					height+=30;//防止横向滚动条出现时也出现纵向滚动条
				}
//				this.element.children('div.l_table_content').css('overflow','hidden');
				this._fixTable(tableId,this.element.width(),height);
			}else if ($("#" + tableId + "_tableLayout").length != 0) {
				$("#" + tableId + "_tableLayout").before($("#" + tableId));
				$("#" + tableId + "_tableLayout").remove();
				$('#'+tableId).css('table-layout','auto');
			}
		},

		_fixTable:function(tableId, width,height){
			if ($("#" + tableId + "_tableLayout").length != 0) {
				$("#" + tableId + "_tableLayout").before($("#" + tableId));
				$("#" + tableId + "_tableLayout").empty();
				$("#" + tableId + "_tableLayout").css('width',width+"px");
			}else {
				var tableLayout = "<div id='" + tableId + "_tableLayout' style='overflow:hidden;height:"+height+"px;width:" + width + "px;'></div>";
				$("#" + tableId).after(tableLayout);
			}
			$('<div id="' + tableId + '_tableFix"></div>').appendTo("#" + tableId + "_tableLayout");

			$('<div id="' + tableId + '_tableHead"></div>').appendTo("#" + tableId + "_tableLayout");

			if(this._fixTableWidth>0){
				$('#'+tableId).css('table-layout','fixed');
				$('<div id="' + tableId + '_tableColumn"></div>').appendTo("#" + tableId + "_tableLayout");
			}

			$('<div id="' + tableId + '_tableData"></div>').appendTo("#" + tableId + "_tableLayout");

			var oldtable = $("#" + tableId);
			var tableFixClone = oldtable.clone(true);
			tableFixClone.attr("id", tableId + "_tableFixClone");
			$("#" + tableId + "_tableFix").append(tableFixClone);	
			//tableFix 只保留thead部分
			$("#" + tableId + "_tableFix tbody").html("");
			
			$("#" + tableId + "_tableData").append(oldtable);

			$("#" + tableId + "_tableLayout table").each(function () {
				$(this).css("margin", "0");
			});

			this._fixTableHead(tableId,width);

			if(this._fixTableWidth>0){
				this._fixTableColumn(tableId,width,height);
				$("#" + tableId + "_tableFix").css({ "overflow": "hidden", "position": "relative", "z-index": "50", });
			}

	
			$("#" + tableId + "_tableData").css({ "overflow": "auto", "width": width,"height":height,"position": "relative", "z-index": "35" });

			if ($("#" + tableId + "_tableHead").width() > $("#" + tableId + "_tableFix table").width()) {
				$("#" + tableId + "_tableHead").css("width", $("#" + tableId + "_tableFix table").width());
				$("#" + tableId + "_tableData").css("width", $("#" + tableId + "_tableFix table").width() + 17);
			}

			if(this._fixTableWidth>0){
				if ($("#" + tableId + "_tableColumn").height() > $("#" + tableId + "_tableColumn table").height()) {
					$("#" + tableId + "_tableColumn").css("height", $("#" + tableId + "_tableColumn table").height());
					$("#" + tableId + "_tableData").css("height", $("#" + tableId + "_tableColumn table").height() + 30);
				}
			}

			var that = this;
			$("#" + tableId + "_tableData").scroll(function () {
				$("#" + tableId + "_tableHead").scrollLeft($("#" + tableId + "_tableData").scrollLeft());
				if(that._fixTableWidth>0){
					$("#" + tableId + "_tableColumn").scrollTop($("#" + tableId + "_tableData").scrollTop());
				}
			});

			$("#" + tableId + "_tableFix").offset($("#" + tableId + "_tableLayout").offset());
			$("#" + tableId + "_tableData").offset($("#" + tableId + "_tableLayout").offset());


		},
		_fixTableHead:function(tableId,width) {
			var oldtable = $("#" + tableId);
			var tableHeadClone = oldtable.clone(true);
			tableHeadClone.attr("id", tableId + "_tableHeadClone");
			$("#" + tableId + "_tableHead").append(tableHeadClone);
			$("#" + tableId + "_tableHead tbody").html('');
			
			
			var headHeight = $("#" + tableId + "_tableHead thead").height();
			headHeight += 2;
			$("#" + tableId + "_tableHead").css("height", headHeight);
			$("#" + tableId + "_tableFix").css("height", headHeight);

			$("#" + tableId + "_tableHead").css({ "overflow": "hidden", "width": width - 17, "position": "relative", "z-index": "45"});
			$("#" + tableId + "_tableHead").offset($("#" + tableId + "_tableLayout").offset());
		},
		_fixTableColumn:function(tableId,width,height) {
			var fixColumnNumber = this.options.lockedColumnCount;
			if(fixColumnNumber>0){
				if(this.options.showCheckColumn || this.options.showLineNumber){
					fixColumnNumber++;
				}
			}
			var oldtable = $("#" + tableId);
			var tableColumnClone = oldtable.clone(true);
			tableColumnClone.attr("id", tableId + "_tableColumnClone");
			$("#" + tableId + "_tableColumn").append(tableColumnClone);
			this._$colTable = $("#" + tableId + "_tableColumn");
			
			var columnsWidth = 0;
			$("#" + tableId + "_tableColumn tr:last td:lt(" + fixColumnNumber + ")").each(function () {
				columnsWidth += $(this).outerWidth(true);
			});
			if(columnsWidth>0){
				columnsWidth += 2;
				$("#" + tableId + "_tableColumn").css("width", columnsWidth);
				$("#" + tableId + "_tableFix").css("width", columnsWidth);
			}

			$("#" + tableId + "_tableColumn").css({ "overflow": "hidden","height":height - 17, "position": "relative", "z-index": "40"});

			$("#" + tableId + "_tableColumn").offset($("#" + tableId + "_tableLayout").offset());
		},
        getSelectedItems: function () {
            var arr = [];
            if (this.options.showCheckColumn) {
                var dp = this.options.dataProvider;
                var fecthDataTable = this._$colTable;
                if(!fecthDataTable){
                	fecthDataTable = this.element;
                }
                fecthDataTable.find('.l_table_body_tr .l_table_check input:checked').closest("tr").each(function (idx, tr) {
                    arr.push(dp[$(tr).data('index')]);
                });

            }
            return arr;
        }

	});
})(jQuery);
(function ($) {
	$.widget('linkage.ledittable', {
		options: {
			dataProvider: null,
			columns: [],
			showCheckColumn: false,
			showLineNumber: false,
			selectedIndex: -1,
			selectedItem: null,
			calRowColorFunc: null,
			hideAddButton: false,
			hideArrowButton: false,
			hideClearButton: false,
			deletable: true,
			createNewItemFunc: null,
			afterControlCreatedFunc: null,
			afterControlOtherDataHandleFunc:null,//用于处理其它数据
			calDelField:"must",
			hideBtnBar:false,
            gridH:0,
            expandHeight:false,//填满父容器高度100%，如果设置了gridH，此不起作用
            lockedColumnCount:0 //锁定列

		},
		_$grid: null,
		_$arrows: [],
		_$btnbar:null,
		_$addbtn:null,
        _$clearbtn:null,
        _gridcls:null,
		_create: function () {
			this._$arrows=[];
			$.convertDataToOption(this);
			var ops = this.options;
			this._convertOptions(ops);

			var $btns = $('<div class="l_edittable_btnbar"></div>');
			this._$btnbar = $btns;
			this._$addbtn=$.createLButton('<span class="l_edittable_addbtn"></span>', $btns, false, 'l_icononly_button');
			var needBtnBar = false;
			this._on(this._$addbtn, {
				'lbuttonclick': function () {
					var dp = this.options.dataProvider;
					if (!dp) {
						dp = [];
					}

					if (this.options.createNewItemFunc != null) {
						dp.push(this.options.createNewItemFunc());
					} else {
						dp.push({});
					}
					this._refreshDataProvider(dp);
				}
			});

			if (!ops.hideAddButton) {
				$btns.append('&nbsp;&nbsp;&nbsp;&nbsp;');
			}
			var $btn = $.createLButton('<span class="l_edittable_upbtn"></span>', $btns, true, 'l_icononly_button');
			this._$arrows.push($btn);
			this._on($btn, {
				'lbuttonclick': function () {
					var si = this.options.selectedIndex;
					if (si > 0) {
						var dp = this.options.dataProvider;
						var item1 = dp[si];
						var item2 = dp[si - 1];
						dp[si] = item2;
						dp[si - 1] = item1;
						this._refreshDataProvider(dp, si - 1);

					}
				}
			});
			$btn = $.createLButton('<span class="l_edittable_downbtn"></span>', $btns, true, 'l_icononly_button');
			this._$arrows.push($btn);
			this._on($btn, {
				'lbuttonclick': function () {
					var si = this.options.selectedIndex;
					var dp = this.options.dataProvider;

					if (si >= 0 && si < dp.length - 1) {

						var item1 = dp[si];
						var item2 = dp[si + 1];
						dp[si] = item2;
						dp[si + 1] = item1;
						this._refreshDataProvider(dp, si + 1);

					}
				}
			});
			$btn = $.createLButton('<span class="l_edittable_topbtn"></span>', $btns, true, 'l_icononly_button');
			this._$arrows.push($btn);
			this._on($btn, {
				'lbuttonclick': function () {
					var si = this.options.selectedIndex;
					if (si > 0) {
						var dp = this.options.dataProvider;
						var item1 = dp[si];
						dp.splice(si, 1);
						dp.unshift(item1);
						this._refreshDataProvider(dp, 0);

					}
				}
			});
			$btn = $.createLButton('<span class="l_edittable_bottombtn"></span>', $btns, true, 'l_icononly_button');
			this._$arrows.push($btn);
			this._on($btn, {
				'lbuttonclick': function () {
					var si = this.options.selectedIndex;
					var dp = this.options.dataProvider;
					if (si >= 0 && si < dp.length - 1) {
						var item1 = dp[si];
						dp.splice(si, 1);
						dp.push(item1);
						this._refreshDataProvider(dp, dp.length - 1);

					}
				}
			});

			if (!ops.hideArrowButton) {
				$btns.append('&nbsp;&nbsp;&nbsp;&nbsp;');
			}
			this._$clearbtn=$.createLButton('<span class="l_edittable_clearbtn"></span>', $btns, false, 'l_icononly_button');
			this._on(this._$clearbtn, {
				'lbuttonclick': function () {
					var dp = this.options.dataProvider;
					if (dp && dp.length > 0) {
						dp.length = 0;
						this._refreshDataProvider(dp);
					}
				}
			});
            var realGridH=ops.gridH;

			if ((!ops.hideAddButton ||!ops.hideArrowButton||!ops.hideClearButton) && !ops.hideBtnBar) {
				$btns.appendTo(this.element);
                if(ops.gridH){
                    realGridH=ops.gridH-$btns.outerHeight();
                }
			}

			var o = {
					columns: this._convertColumns(ops.columns),
					showCheckColumn: ops.showCheckColumn,
					showLineNumber: ops.showLineNumber,
					calRowColorFunc: ops.calRowColorFunc,
                    gridH:realGridH,
                	expandHeight:ops.expandHeight,
                    lockedColumnCount:ops.lockedColumnCount
			};
			if (ops.dataProvider != null) {
				o.dataProvider = ops.dataProvider;
			}
			if (ops.selectedIndex != -1) {
				o.selectedIndex = ops.selectedIndex;
			}
			if (ops.selectedItem != null) {
				o.selectedItem = ops.selectedItem;
			}
			if(ops.lockedColumnCount>0){
                this._gridcls='lfixtable';
                this._$grid = $('<div class="l_fixtable"></div>').appendTo(this.element).lfixtable(o);
                this._on(this._$grid, {
                    'lfixtablechange': function (event) {
                        this.options.selectedIndex = this._$grid[this._gridcls]('option', 'selectedIndex');
                        this.options.selectedItem = this._$grid[this._gridcls]('option', 'selectedItem');
                        this._changeArrowState();
                        this._trigger('change', {
                            newIndex: this.options.selectedIndex
                        });
                    }
                });
            }else{
                this._gridcls='ltable';
                this._$grid = $('<div class="l_table"></div>').appendTo(this.element).ltable(o);
                this._on(this._$grid, {
                    'ltablechange': function (event) {
                        this.options.selectedIndex = this._$grid[this._gridcls]('option', 'selectedIndex');
                        this.options.selectedItem = this._$grid[this._gridcls]('option', 'selectedItem');
                        this._changeArrowState();
                        this._trigger('change', {
                            newIndex: this.options.selectedIndex
                        });
                    }
                });
            }
			this._on(this._$grid, {
				'lbuttonclick a.l_edittable_del': function (event) {
					var dataIdx = $(event.currentTarget).closest('tr.l_table_body_tr').data('index');
					var dp = this.options.dataProvider;
					dp.splice(dataIdx, 1);
					this._refreshDataProvider(dp);
				}
			});
        },
		_changeArrowState: function () {
			var dis = (this.options.selectedIndex == -1);
			$.each(this._$arrows, function (idx, $arrow) {
				$arrow.lbutton('option', 'disabled', dis);
			});
		},
		batchAddItems: function (items) {
			var dp = this.options.dataProvider;
			if (dp == null) {
				dp = [];
			}
			$.each(items, function (idx, item) {
				dp.push(item);
			});
			this._refreshDataProvider(dp);
		},
		_refreshDataProvider: function (dp, selIdx) {
			this._$grid[this._gridcls]('option', 'dataProvider', dp)[this._gridcls]('refresh');
			this._setOption('dataProvider', dp);
			this._afterDPChange();

			if (selIdx !== undefined) {
				this._setOptions({
					selectedIndex: selIdx
				});

			}

		},
		_convertColumns: function (clms) {
			if (this.options.deletable) {
				var newClms = [].concat(clms);
				newClms.push({w:40,field:this.options.calDelField,className:'edittable_delcol',
					irFunc: function (column, item, v) {
						if(v==true && v!=2){
							return "";
						}else{
							return '<a href="javascript:void(0)" enabled="false" class="l_button l_icononly_button l_edittable_del"><span class="l_linedel"></span></a>';

						}
					}
				});
				return newClms;
			} else {
				return clms;
			}
		},
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'showCheckColumn', 'showLineNumber', 'hideAddButton', 'hideArrowButton', 'hideClearButton', 'deletable','hideBtnBar','expandHeight' ]);
			$.convertObjNumber(ops, [ 'selectedIndex' ]);
		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			var gridAcceptOps = {};
			var setGrid = false;
			var dpChange = false;
			var that = this;
			if (ops) {

				$.each(ops, function (k, v) {
					if (k == 'dataProvider') {
						var dp = null;
						if (v != null) {
							dp = $.extend(true, [], v);
						}
						setGrid = true;
						gridAcceptOps[k] = dp;
						that._setOption(k, dp);

						dpChange = true;

					} else if (k == 'columns'|| k == 'selectedIndex' || k == 'selectedItem' || k == 'showCheckColumn' || k == 'showLineNumber' || k == 'calRowColorFunc') {
						setGrid = true;
						if (k == 'columns') {
							gridAcceptOps[k] = that._convertColumns(v);
						} else {
							gridAcceptOps[k] = v;
						}

						that._setOption(k, v);

					}else if(k=='hideBtnBar' && v){
						that._$btnbar.hide();
					}else if(k == 'hideAddButton' || k == 'hideArrowButton' || k == 'hideClearButton'){
						if(v){
							if(k == 'hideAddButton'){
								that._$addbtn.hide();
							}else if(k == 'hideArrowButton'){
								$.each(that._$arrows,function(index,target){
									target.hide();
								});
							}else if(k == 'hideClearButton'){
								that._$clearbtn.hide();
							}
						}
					}else {
						that._setOption(k, v);
					}
				});
			}
			if (setGrid) {
				this._$grid[this._gridcls]('option', gridAcceptOps);
				if (dpChange) {
					this._afterDPChange();
				}
			}

		},
		_afterDPChange: function () {
			var that = this;
			// 给编辑控件赋值
			this.element.find('.l_editgridctl').each(function (idx, ctl) {
				var $ctl = $(ctl);
				var clmIdx = $ctl.data('clmIdx');

				var field = that.options.columns[clmIdx].field;
				var $tr=  $ctl.closest('tr.l_table_body_tr');
                var dataIdx = $tr.data('index');
                var item = that.options.dataProvider[dataIdx];
                
                var func = that.options.afterControlCreatedFunc;
                if (func != null) {
                    func($ctl, clmIdx,item);
                }
                
                if (field != null&&item) {
                    $ctl.lvalue(item[field]);
                    var otherDataHandleFunc = that.options.afterControlOtherDataHandleFunc;
                    var cen=$ctl.data('changeEventName');
                    if(cen){
                        $ctl.on(cen, function (event) {
                            item[field] = $(this).lvalue();
                            if(otherDataHandleFunc!=null){
                                otherDataHandleFunc(item,$(this));
                            }
                            that._trigger('itemchange',event,{item:item,field:field,tr:$tr,ctl:$ctl});
                        });
					}


				}

			});
	            
			if(this.options.gridH==0 && !this.options.expandHeight){				
				this.element.resize();
			}
		}

	});
})(jQuery);
(function ($) {
	$.widget("linkage.lselect", {
		options: {
			prompt: null,
			ddtype: null,
			dataProvider: null,
			busiNo: null,
			param: null,
			keyField: 'key',
			labelField: 'label',
			resultField: 'data',
			defaultSelIndex: -1,
			clearSelOnDpChange: false,
			disabled: false

		},
		_srcType: 0,// 1,dd;2,dp;3,busiNo
		_srcChange: false,
		_jSelect: null,
		_selectedKey: null,
		_canBlue:true,
		_convertOptions: function (ops) {
			$.convertObjNumber(ops, [ 'defaultSelIndex' ]);
			$.convertObjBool(ops, [ 'clearSelOnDpChange', 'disabled' ]);
		},
		_create: function () {
			this._srcType=0;
			this._srcChange=false;
			$.convertDataToOption(this);
			this.element.addClass('l_inputcontrol l_inputcontrol2');
			var that = this;
			this._jSelect = $('<input type="text" value="" readonly /><ul></ul>').appendTo(this.element);

			this._on(this._jSelect, {
				'change': function () {
					that._selectedKey = that._jSelect.val();
					that._trigger('change');
				},
				'click':function(e){
					that.element.find('ul').toggle();
					that.element.find('ul').perfectScrollbar();
					that._canBlue = true;
					e.stopPropagation();
				},
				'blur':function(e){
					if(that.element.find('ul').is(":visible") && that._canBlue){
						that.element.find('ul').hide();
					}
				}
			});
			
			this._setOptions(this.options);
		},
		getValue: function () {
			return this._selectedKey;
		},
		setValue: function (v) {
			var old = this.getValue();
			if (old != v) {
				this._selectedKey = v;
				if(this.options.dataProvider){
				    this._applyInnerDiv();
			    }
				this._trigger('change');
			}

		},
		setDefaultIndexValue:function(){
			this._srcChange = true;
			this._update();
		},
		_applyInnerDiv: function () {
			var opt = this.options;
			if (this._selectedKey && opt.dataProvider) {
				var that = this;
				var txt = '';
				L.recursiveArr(opt.dataProvider, function (item) {				
					if (item[opt.keyField] == that._selectedKey) {
						txt = item[opt.labelField];
						return false;
					}
				});

			}
			this.element.find('input').val(txt);
		},
		_setOptions: function (props) {
			this._convertOptions(props);
			if (props) {
				var that = this;
				$.each(props, function (key, v) {
					if (key == 'ddtype') {
						that._setDDType(v);
					} else if (key == 'dataProvider') {
						that._setDataProvider(v);
					} else if (key == 'busiNo') {
						that._setBusiNo(v);
					} else if (key == 'param') {
						that._setParam(v);
					} else if (key == 'disabled') {
						that._jSelect.prop('disabled', v);
						that.options.disabled = v;
					} else {
						that._setOption(key, v);
					}
				});

			}
			this._update();
		},
		_setDDType: function (ddType) {

			if (this.options.ddtype != ddType) {
				this.options.ddtype = ddType;
				this._srcType = 1;
				this._srcChange = true;
			}

		},
		_setDataProvider: function (dp) {
			if (this.options.dataProvider != dp) {
				this.options.dataProvider = dp;
				this._srcType = 2;
				this._srcChange = true;
			}

		},
		_setBusiNo: function (busiNo) {
			if (this.options.busiNo != busiNo) {
				this.options.busiNo = busiNo;
				this._srcType = 3;
				this._srcChange = true;
			}

		},
		_setParam: function (p) {
			if (this.options.param != p) {
				this.options.param = p;
				this._srcChange = true;
			}

		},
		_createOptions: function (dp, keyField, labelField) {
			if (this.options.clearSelOnDpChange) {
				this._selectedKey = null;
			}
			var arr = [];
			var ppt = this.options.prompt;
			if (ppt == null) {
				ppt = '';
			}

			this._createSingleOption(arr, '', ppt);

			if (dp != null) {
				var pthis = this;
				var defaultIdx = this.options.defaultSelIndex;
				$.each(dp, function (idx, item) {
					var isSel = false;
					if (pthis._selectedKey != null) {
						if (item[keyField] == pthis._selectedKey) {
							isSel = true;
						}
					} else if (defaultIdx == idx) {
						pthis._selectedKey = item[keyField];
						isSel = true;
					}
					pthis._createSingleOption(arr, item[keyField], item[labelField], isSel);

				});
			}
			this.element.find('ul').html(arr.join(''));

		},
		_createSingleOption: function (arr, key, label, selected) {
			arr.push('<li value="');
			arr.push(L.encodeHTML(key));
			arr.push('"');
			if (selected) {
				arr.push(' class="lDefaultselected"');
			}
			arr.push('>');
			arr.push(L.encodeHTML(label));
			arr.push('</li>');
		},
		_update: function () {
			if (this._srcChange) {
				this._srcChange = false;
				if (this._srcType == 1) {

					this._createOptions(L.ddList[this.options.ddtype], 'key', 'value');

				} else if (this._srcType == 2) {
					this._createOptions(this.options.dataProvider, this.options.keyField, this.options.labelField);
				} else if (this._srcType == 3) {
					var busiNo = this.options.busiNo;
					var p = this.options.param;
					if (busiNo) {
						var pthis = this;
						L.invoke(busiNo, p, function (result) {
							var dp = null;
							if (result) {
								dp = result[pthis.options.resultField];
							}
							pthis._createOptions(dp, pthis.options.keyField, pthis.options.labelField);
						});
					}
				}
				var that = this;
				this.element.find('li').hover(function(e){
					$(this).toggleClass('on');
					that._canBlue = false;
					e.stopPropagation();
				},function(){
					$(this).toggleClass('on');
					that._canBlue = true;;
				});

				this.element.find('li').click(function(e){
					that.element.find('li').removeClass('lDefaultselected');
					$(this).toggleClass('lDefaultselected');
					var dataVal = $(this).attr("value");
					that.setValue(dataVal);
					that.element.find('ul').hide();
					$(window).trigger('resize'); //  C5900 linwei
					e.stopPropagation();
				});
				
			}
			
			if(this._selectedKey){
			    this._applyInnerDiv();
		    }
		}
	});
})(jQuery);

(function ($) {
	$.widget('linkage.lmultiselect', {
		options: {
			dataProvider: null,
			keyField: 'key',
			labelField: 'label',
			labelFunc: null,
			single: false, // 单选
			initOpen: true,
			resultType: 1,// 1,集合；2，符号分隔串
			resultArrKey: null,//结果集字段
			sep: ',',
			iconField: null,
			addSelType: 1,// 1,点哪个加哪个；2，点哪个加它children；3，点哪个加它和它children
			clearSelOnDpChange: false,
			title: LI.selectPlease,
			disabled: false,
			initOpenKey:"openKey", //树结构初始打开匹配项的key
			initOpenValue:true //树结构初始打开匹配项的value
		},
		_innerDiv: null,
		_$dialog: null,
		_$leftTree: null,
		_$rightTree: null,
		_$countSpan: null,
		_selectedKeys: null,
		_selectBtn: null,
		_dialogId:null, //弹出框ID,防止同一页面，同一数据源产生影响
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'single', 'initOpen', 'clearSelOnDpChange', 'disabled','initOpenValue']);
			$.convertObjNumber(ops, [ 'resultType', 'addSelType' ]);
		},
		_create: function () {
			this._dialogId = this.element[0].id+"_lMultiSelectDialog";
			$.convertDataToOption(this);
			var ops = this.options;
			this._convertOptions(ops);

			this.element.addClass('l_boxbtnstyle').html('<table class="l_maincontent" cellSpacing="0" cellPadding="0" border="0"><tr><td> </td><td class="l_boxbtnstyle_btntd"> </td></tr></table> ');
			var tds = this.element.find('td');
			this._innerDiv = tds.eq(0);

			var $btn = $.createLButton(LI.select, tds.eq(1), ops.disabled);
			this._selectBtn = $btn;

			this._on($btn, {
				'lbuttonclick': function () {

					var firstCreate = false;
					if (this._$dialog == null) {
						firstCreate = this._prepareDialog();

					}
					var dp = this.options.dataProvider;
					var keyF = this.options.keyField;
					var selKeys = this._selectedKeys;
					var that = this;
					var buttonsObj={};
					buttonsObj[LI.ok]= function () {
						var rightdp = that._$rightTree.ltree('option', 'dataProvider');
						// judge if changed
						var changed = false;
						var oldLen = selKeys != null ? selKeys.length : 0;
						var newLen = rightdp != null ? rightdp.length : 0;

						if (oldLen != newLen) {
							changed = true;
						} else if (newLen > 0) {
							$.each(rightdp, function (idx, rightItem) {

								if ($.inArray(rightItem[keyF], selKeys) == -1) {
									changed = true;

								}
							});
						}
						if (changed) {
							var arr = [];
							if (rightdp) {
								$.each(rightdp, function (idx, rightItem) {

									arr.push(rightItem[keyF]);
								});
							}

							that._selectedKeys = arr;

							that._applyInnerDiv();
							that._trigger('change');
						}
						$(this).dialog("close");
					};
					buttonsObj[LI.cancel]=function () {
						$(this).dialog("close");
					};
					this._$dialog.dialog('option', {
						width: 700,
						height: 500,
						title: ops.title,
						buttons: buttonsObj
					});
					L.pop(this._$dialog);
//					if (firstCreate) {//同一页面配置多个多选框时过滤出错
					this._initDialog();
//					}

					var rightDP = [];

					if (dp && this._selectedKeys != null && this._selectedKeys.length > 0) {

						L.recursiveArr(dp, function (item) {
							if ($.inArray(item[keyF], selKeys) != -1) {
								var newItem = $.extend({}, item);
								delete newItem.children;

								//防止不同纬度数据源加载多条重复记录
								var found = false;
								$.each(rightDP, function (idx, rightItem) {
									if (rightItem[keyF] == newItem[keyF]) {
										found = true;
										return false;
									}
								});
								if (!found) {
									rightDP.push(newItem);
								}
							}
						});
					}
					this._$leftTree.ltree('option', {
						dataProvider: dp,
						labelField: this.options.labelField, 
						labelFunc: this.options.labelFunc,
						iconField: this.options.iconField,
						initOpen: this.options.initOpen,
						initOpenKey: this.options.initOpenKey,
						initOpenValue: this.options.initOpenValue
					});
					this._dpSort(rightDP);
					this._$rightTree.ltree('option', {
						dataProvider: rightDP,
						labelField: this.options.labelField,
						labelFunc: this.options.labelFunc,
						iconField: this.options.iconField

					});
					this._adjustCount();

				}
			});
		},
		_dpSort:function(dp){
			var opt = this.options;
			 dp.sort(function(a,b){
				 if(a[opt.keyField] > b[opt.keyField]){
					 return 1;
				 }else if(a[opt.keyField] < b[opt.keyField]){
					 return -1;
				 }else{
					 return 0;
				 }
			 });
		},
		_applyInnerDiv: function () {
			var arr = [];
			var opt = this.options;
			if (this._selectedKeys && opt.dataProvider) {
				var that = this;
				var hasAddKey = [];
				L.recursiveArr(opt.dataProvider, function (item) {
					if($.inArray(item[opt.keyField], hasAddKey) == -1){						
						if ($.inArray(item[opt.keyField], that._selectedKeys) != -1) {
							if (opt.labelFunc != null) {
								arr.push(opt.labelFunc(item));
							} else {
								arr.push(item[opt.labelField]);
							}
							hasAddKey.push(item[opt.keyField]);
						}
					}

				});

			}
			this._innerDiv.text(arr.length > 0 ? arr.join(this.options.sep) : ' ');
		},
		_createDialog: function () {
			var arr = [];
			arr.push('<div class="l_popwin" id="'+this._dialogId+'">');

			arr.push('<table class="l_maincontent">');
			arr.push('<tr style="height: 0px;"><td style="width:50%"></td><td style="width:45%"></td><td style="width:60px"></td></tr>');
			arr.push('<tr style="height: 30px;">');
			arr.push('<td colSpan = "2" style="width:100%">');
			arr.push('<div style="padding: 0 2px 0 0;"><input type="text" class="l_textinput searchBox"/></div>');
			arr.push('</td>');
			arr.push('<td style="text-align:center;vertical-align: middle;padding-left:20px">');
			arr.push('<a  href="javascript:void(0)" style="text-decoration: none;"  class="l_linkbutton l_link_reset">取消</a>');
			arr.push('</td>');
			arr.push('</tr>');
			arr.push('<tr style="height:25px;background-color:#F3F9FF;color:#C0D2E7;font-size: 12px;letter-spacing: 0;">')
			arr.push('<td style="vertical-align: middle;text-align:center"><span>可选记录(双击选中)</span></td>');
			arr.push('<td colspan="2" style="text-align:center;vertical-align: middle;">已选记录<span class="l_multiselect_count"></span>(双击取消)</td>');
			arr.push('</tr>');
			
			arr.push('<tr style="height:100%">');
			arr.push('<td class="l_multiselect_lefttd">');
			arr.push('<div class="l_tree" style="border-right: 1px solid #999; height:315px"></div>');
			arr.push('</td>');
			arr.push('<td colspan="2" class="l_multiselect_righttd">');
			arr.push('<div class="l_tree"  style="height:315px"></div>');
			arr.push('</td>');
			arr.push('</tr>');
			arr.push('<tr><td colspan="3" style="text-align:right"><a href="javascript:void(0)" style="text-decoration: none;"  class="l_linkbutton l_multiselect_clearbtn">全部'+LI.clear+'</a> </td></tr>');
			arr.push('</table>');
			arr.push('</div>');
			$('body').append(arr.join(''));
			return $('#'+this._dialogId).dialog();

		},
		_prepareDialog: function () {
			var created = false;
			var $d = $('#'+this._dialogId);
			if ($d.length == 0) {
				$d = this._createDialog();
				created = true;
			}
			this._$dialog = $d;
			var $trees = this._$dialog.find('div.l_tree');
			this._$leftTree = $trees.eq(0);
			
			this._$rightTree = $trees.eq(1);
			this._$countSpan = this._$dialog.find('.l_multiselect_count');
			return created;
		},
		_adjustCount: function () {
			var dp = this._$rightTree.ltree('option', 'dataProvider');
			var count = 0;
			if (dp) {
				count = dp.length;
			}
			this._$countSpan.text(count);
		},
		_leftToRight: function () {
			var si = this._$leftTree.ltree('option', 'selectedItem');
			if (si) {

				var toAdd = [];
				switch (this.options.addSelType) {
				case 1:
					var newItem = $.extend({}, si);
					delete newItem.children;
					toAdd.push(newItem);
					break;
				case 2:
					$.collectTreeRecursive(si, true, toAdd);
					break;
				case 3:
					$.collectTreeRecursive(si, false, toAdd);
					break;
				}
				if (this.options.single && toAdd.length > 1) {
					toAdd = [ toAdd[0] ];
				}
				if (toAdd.length > 0) {
					var rightDP = null;
					if (this.options.single) {
						rightDP = toAdd;
					} else {
						rightDP = this._$rightTree.ltree('option', 'dataProvider');
						if (!rightDP) {
							rightDP = toAdd;
						} else {
							var keyF = this.options.keyField;
							var toAddFiltered = [];
							$.each(toAdd, function (idx, toAddItem) {
								var found = false;
								$.each(rightDP, function (idx, rightItem) {
									if (rightItem[keyF] == toAddItem[keyF]) {
										found = true;
										return false;
									}
								});
								if (!found) {
									toAddFiltered.push(toAddItem);
								}
							});
							if (toAddFiltered.length > 0) {
								rightDP = rightDP.concat(toAddFiltered);
							}
						}
					}
					this._dpSort(rightDP);
					this._$rightTree.ltree('option', 'dataProvider', rightDP);
					this._adjustCount();
				}
			}
		},
		_rightToLeft: function () {
			var si = this._$rightTree.ltree('option', 'selectedItem');
			if (si) {
				var dp = this._$rightTree.ltree('option', 'dataProvider');
				dp.splice($.inArray(si, dp), 1);
				this._$rightTree.ltree('refresh');
				this._adjustCount();
			}
		},
		_clearRight: function () {
			this._$rightTree.ltree('option', 'dataProvider', null);
			this._adjustCount();
		},
		_initDialog: function () {
			L.init(this._$dialog);
			var that = this;
			this._$dialog.find('.l_textinput').on('keyup', function () {
				var oriDP = that.options.dataProvider;
				var txt = $(this).val();
				var dp = $.filterTreeRecursive(oriDP, txt, [ that.options.keyField, that.options.labelField ]);
				that._$leftTree.ltree('option', 'dataProvider', dp);
			});
			this._$leftTree.ltree('option', {
				'itemDoubleClick': function () {
					that._leftToRight();
				}
			});
			this._$rightTree.ltree('option', {
				'itemDoubleClick': function () {
					that._rightToLeft();
				}
			});
			this._$dialog.find('.searchBox').doExist(function(){
				this.lvalue(null);
			});
			this._$dialog.find('.l_link_reset').on('lbuttonclick',function(event){
				that._$dialog.find('.searchBox').lvalue(null);
				var oriDP = that.options.dataProvider;
				var dp = $.filterTreeRecursive(oriDP, null, [ that.options.keyField, that.options.labelField ]);
				that._$leftTree.ltree('option', 'dataProvider', dp);
			});
			
			this._$dialog.find('.l_multiselect_clearbtn').on('lbuttonclick', function (event) {

				that._clearRight();
			});

		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (k, v) {
			if (k == 'dataProvider') {
				var old = this.options.dataProvider;
				if (old != v) {
					this._super(k, v);
					if (this.options.clearSelOnDpChange) {
						if (this._selectedKeys != null && this._selectedKeys.length > 0) {
							this._selectedKeys = null;
							this._trigger('change');
						}
					}
					this._applyInnerDiv();
				}

			} else if (k == 'disabled') {
				this._selectBtn.enable(!v);
				this.options.disabled = v;
			} else {
				this._super(k, v);
			}
		},
		getValue: function () {
			var opt = this.options;
			return $.typedResultValue(opt.resultType, opt.sep, opt.resultArrKey, this._selectedKeys);
		},
		setValue: function (v) {
			var opt = this.options;
			var dp=opt.dataProvider;
			var selectKeyType;
			if(dp && opt.resultType==2){
				$.each(dp,function(index,item){
					if(item[opt.keyField]){
						selectKeyType = typeof(item[opt.keyField]);
						return false;
					}
				});
			}
			var arr = $.typedResultValue(opt.resultType, opt.sep, opt.resultArrKey, this._selectedKeys, v,selectKeyType);
			if (arr != null) {
				this._selectedKeys = arr;
				this._applyInnerDiv();
				this._trigger('change');
			}
		},
		getSelectItem:function(){
			return this._$rightTree.ltree('option', 'dataProvider');
		}
	});
})(jQuery);

(function ($) {
	$.widget('linkage.lmultiselectext', {
		options: {
			initDialogFormFun:null,
			popWinContext:null,//分页选择弹出窗
			queryFunc:null,
			detailFunc:null,
			pageBarFunc:null,
			dataProvider: null,
			leftCols:null,
			rightCols:null,
			detailDataProvider:null,
			keyField: 'key',
			labelField: 'label',
			labelFunc: null,
			single: false, // 单选
			resultType: 1,// 结果集 1,集合；2，符号分隔串
			resultArrKey: null,
			sep: ',',
			clearSelOnDpChange: false,
			title: null,
			w:600,//弹出选择框，宽度默认600
			h:600,//弹出选择框，高度默认600
			disabled: false,
			bsViewT:1,//选择按钮类型，1，按钮，2,链接
			bsStyle:null, //按钮样式
			bsTxt:LI.select,//按钮文本
			selCloseFunc:null //选中后确定关闭操作
		},
		_innerDiv: null,
		_$dialog: null,
		_$leftGrid: null,
		_$rightGrid: null,
		_$pagebarCtl:null,
		_$queryBtn:null,
		_$resetBtn:null,
		_$multiselectexAddBtn:null,
		_$multiselectexDelBtn:null,
		_selectedKeys: null,
		_initLabel:true,
		_selectBtn: null,
		_isDialogQuery:false,//是否在选择弹窗中执行的查询,是的话这不变更option的dataprovide
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'single','clearSelOnDpChange', 'disabled' ]);
		},
		_create: function () {
			$.convertDataToOption(this);
			var ops = this.options;
			this._convertOptions(ops);

			this.element.addClass('l_boxbtnstyle').html('<table class="l_maincontent" cellSpacing="0" cellPadding="0" border="0"><tr><td style="text-align:left"> </td><td class="l_boxbtnstyle_btntd"> </td></tr></table> ');
			var tds = this.element.find('td');
			this._innerDiv = tds.eq(0);

			var $btn = null;
			if(ops.bsViewT==2){
				var disStr = '';
				if (ops.disabled) {
					disStr = ' data-disabled="true"';
				}
				$btn = $('<a href="javascript:void(0)" class="l_linkbutton' + (ops.bsStyle ? ' ' + ops.bsStyle : '') + '"' + disStr + '>' + ops.bsTxt + '</a>').appendTo(tds.eq(1));
			}else{
				$btn = $.createLButton(ops.bsTxt, tds.eq(1), ops.disabled,ops.bsStyle);
			}

			this._selectBtn = $btn;
			this._selectBtn.lbutton();

			this._on(this._selectBtn, {
				'click': function () {
					var firstCreate = false;
					if (this._$dialog == null || this._$dialog.length == 0) {
						firstCreate = this._prepareDialog();
					}
					var dp = this.options.dataProvider;
					var keyFields = this.options.keyField;
					var keyF = this.options.keyField;
					var selkeyF = this.options.keyField;
					if(keyFields){
						var kFields = keyFields.split(",");
						if(kFields.length>1){
							keyF = kFields[1];
						}else{
							keyF = kFields[0];
						}
						selkeyF = kFields[0];
					}
					var selKeys = this._selectedKeys;
					var resultType = this.options.resultType;
					var that = this;
					var buttonsObj={};
					buttonsObj[LI.ok]= function () {

						var rightdp = that._$rightGrid.ltable('option', 'dataProvider');
						that.options.detailDataProvider = rightdp;
						// judge if changed
						var changed = false;
						var oldLen = selKeys != null ? selKeys.length : 0;
						var newLen = rightdp != null ? rightdp.length : 0;

						if (oldLen != newLen) {
							changed = true;
						} else if (newLen > 0) {
							$.each(rightdp, function (idx, rightItem) {

								if ($.inArray(rightItem[keyF], selKeys) == -1) {
									changed = true;

								}
							});
						}
						if (changed) {
							var arr = [];
							if (rightdp) {
								$.each(rightdp, function (idx, rightItem) {
									var selValue =null;
									if(rightItem[keyF]){
										if(resultType==2){							
											selValue=rightItem[keyF].toString();
										}else{
											selValue=rightItem[keyF];
										}
									}
									arr.push(selValue);
								});
							}

							that._selectedKeys = arr;

							that._applyInnerDiv();
							that._trigger('change');
						}
						$(this).dialog("close");
						that._isDialogQuery = false;
						
						if(that.options.selCloseFunc!=null){
							that.options.selCloseFunc();
						}
					};
					buttonsObj[LI.cancel]=function () {
						$(this).dialog("close");
						that._isDialogQuery = false;
					};
					this._$dialog.dialog('option', {
						width: ops.w,
						height: ops.h,
						title: ops.title,
						buttons: buttonsObj
					});
					L.pop(this._$dialog);
					if (firstCreate) {
						this._initDialog();
					}else{
						//清空查询表单 TODO
						if(this._$dialog){							
							this._$dialog.find('.l_wpformitem').doExist(function(){
								this.lvalue(null);
							});
							this._$leftGrid.ltable('option', 'selectedIndex', -1);
						}
					}
					if(this.options.initDialogFormFun!=null){
						this.options.initDialogFormFun(this._$dialog);//表单初始化
					}
					if(this.options.queryFunc!=null){
						//初始打开调用查询数据操作
						this.options.queryFunc();
					}

					var rightDP = [];
					var leftOption = {
							showLineNumber: false,
							showCheckColumn:true,
							columns: this.options.leftCols,
							gridH:this._$leftGrid.data("h")
					};
					var rightOption = {
							showLineNumber: false,
							showCheckColumn:true,
							columns: this.options.rightCols,
							gridH:this._$rightGrid.data("h")
					};
					this._$leftGrid.ltable('option',leftOption);
					this._$rightGrid.ltable('option',rightOption);

					if (this.options.detailDataProvider && this._selectedKeys != null && this._selectedKeys.length > 0) {
						L.recursiveArr(this.options.detailDataProvider, function (item) {
							var findValue = null;
							if(item[selkeyF]){
								if(resultType==2){							
									findValue=item[selkeyF].toString();
								}else{
									findValue=item[selkeyF];
								}
							}
							if ($.inArray(findValue, selKeys) != -1) {
								rightDP.push(item);
							}
						});
					}
					this._$leftGrid.ltable('option', {
						dataProvider: dp
					});
					this._$rightGrid.ltable('option', {
						dataProvider: rightDP
					});
					if(this.options.pageBarFunc!=null){
						this.options.pageBarFunc(this._$pagebarCtl);
					}
				}
			});
		},
		_applyInnerDiv: function (initSet) {
			var arr = [];
			var opt = this.options;
			if (this._selectedKeys) {
				var that = this;

				var keyF = this.options.keyField;
				if(keyF){
					var kFields = keyF.split(",");
					if(kFields.length>1){
						keyF = kFields[1];
					}else{
						keyF = kFields[0];
					}
				}
				var labelF = this.options.labelField;
				if(labelF){
					var lFields = labelF.split(",");
					if(lFields.length>1){
						labelF = lFields[1];
					}else{
						labelF = lFields[0];
					}
				}

				var selDp = null;

				if(!initSet && this._$rightGrid && this._$rightGrid.ltable('option', 'dataProvider')){
					selDp = this._$rightGrid.ltable('option', 'dataProvider');
				}else if(opt.detailDataProvider){
					selDp = opt.detailDataProvider;	
				}else{
					selDp = opt.dataProvider;
					if(selDp==null){
						this._initLabel = false;
					}
				}
				
				$.each(selDp,function(index,item){
					that._initLabel = false;
					var findValue = null;
					if(item[keyF]){
						if(opt.resultType==2){							
							findValue=item[keyF].toString();
						}else{
							findValue=item[keyF];
						}
					}
					if ($.inArray(findValue, that._selectedKeys) != -1) {
						if (opt.labelFunc != null) {
							arr.push(opt.labelFunc(item));
						} else {
							arr.push(item[labelF]);
						}
					}
				});

			}
			this._innerDiv.text(arr.length > 0 ? arr.join(this.options.sep) : ' ');
		},
		_createDialog: function (id) {
			$('body').append(this.options.popWinContext);
			var $dialog = $(id);
			return $dialog.dialog();
		},
		_prepareDialog: function () {
			var created = false; //TODO
			var id = this.element[0].id;
			var $d = $('#'+id+"_MultiSelectDialog");
			if ($d.length == 0) {
				$d = this._createDialog('#'+id+"_MultiSelectDialog");
				created = true;
			}
			this._$dialog = $d;
			this._$leftGrid = this._$dialog.find('div.multiselectex_main_table');
			this._$rightGrid= this._$dialog.find('div.multiselectex_detail_table');

			this._$pagebarCtl=this._$dialog.find('span.l_pagebar');
			this._$queryBtn = this._$dialog.find('a.multiselectext_ok_button');
			this._$resetBtn = this._$dialog.find('a.multiselectext_reset_button');
			this._$multiselectexAddBtn = this._$dialog.find('a.multiselectex_add');
			this._$multiselectexDelBtn = this._$dialog.find('a.multiselectex_del');
			var that = this;
			return created;
		},
		_leftToRight: function (multiFlag) {
			var toAdd = [];
			var si = null;
			if(multiFlag){
				si = this._$leftGrid.ltable('getSelectedItems');
				if(si && si.length>0){
					toAdd = si;
				}
			}else{				
				si = this._$leftGrid.ltable('option', 'selectedItem');
				if (si) 
				{
					toAdd.push(si);
				}
			}

			if (this.options.single && toAdd.length > 1) {
				toAdd = [ toAdd[0] ];
			}
			if (toAdd.length > 0) {
				var rightDP = null;
				if (this.options.single) {
					rightDP = toAdd;
				} else {
					rightDP = this._$rightGrid.ltable('option', 'dataProvider');
					if (!rightDP) {
						rightDP = toAdd;
					} else {						
						var keyF = this.options.keyField;
						var selkeyF = this.options.keyField;
						if(keyF){
							var kFields = keyF.split(",");
							if(kFields.length>1){
								keyF = kFields[1];
							}else{
								keyF = kFields[0];
							}
							selkeyF = kFields[0];
						}

						var toAddFiltered = [];
						$.each(toAdd, function (idx, toAddItem) {
							var found = false;
							$.each(rightDP, function (idx, rightItem) {
								if (rightItem[keyF] == toAddItem[selkeyF]) {
									found = true;
									return false;
								}
							});
							if (!found) {
								toAddFiltered.push(toAddItem);
							}
						});
						if (toAddFiltered.length > 0) {
							rightDP = rightDP.concat(toAddFiltered);
						}
					}
				}

				this._$rightGrid.ltable('option', 'dataProvider', rightDP);
			}
		},
		_rightToLeft: function (multiFlag) {
			var si =[];
			if(multiFlag){
				si = this._$rightGrid.ltable('getSelectedItems');
			}else{
				var item = this._$rightGrid.ltable('option', 'selectedItem');
				if(item){
					si.push(item);
				}
			}
			if (si) {
				var dp = this._$rightGrid.ltable('option', 'dataProvider');
				$.each(si,function(index,siItem){
					dp.splice($.inArray(siItem, dp), 1);
				});
				this._$rightGrid.ltable('refresh');
			}
		},
		_clearRight: function () {
			this._$rightGrid.ltable('option', 'dataProvider', null);
		},
		_initDialog: function () {
			L.init(this._$dialog);
			var that = this;

			this._$leftGrid.ltable('option', {
				'dblclick': function () {
					that._leftToRight(false);
				}
			});
			this._$rightGrid.ltable('option', {
				'dblclick': function () {
					that._rightToLeft(false);
				}
			});
			this._$multiselectexAddBtn.unbind("click").on('click', function (event) {
				that._leftToRight(true);
			});
			this._$multiselectexDelBtn.unbind("click").on('click', function (event) {
				that._rightToLeft(true);
			});
			if(this._$resetBtn!=null){
				this._$resetBtn.unbind("click").on('click', function (event) {

					that._$dialog.find('.l_wpformitem').doExist(function(){
						this.lvalue(null);
					});
					if(that.options.queryFunc!=null){
						that._isDialogQuery = true;
						that.options.queryFunc(function(newDp){
							that._$leftGrid.ltable('option', 'dataProvider', newDp);
						});
					}
				});
			}

			if(this._$queryBtn!=null){
				this._$queryBtn.unbind("click").on('click', function (event) {
					//查询
					if(that.options.queryFunc!=null){
						that._isDialogQuery = true;
						that.options.queryFunc(function(newDp){
							that._$leftGrid.ltable('option', 'dataProvider', newDp);
						});

					}
				});	
			}

			this._$dialog.find('.l_multiselect_clearbtn').unbind("click").on('click', function (event) {

				that._clearRight();
			});

		},
		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);
		},
		_setOption: function (k, v) {
			if (k == 'dataProvider' && !this._isDialogQuery) {
				var old = this.options.dataProvider;
				if (old != v) {
					if(this._$leftGrid){
						this._$leftGrid.ltable('option', {
							dataProvider: v
						});
					}

					this._super(k, v);
					if (this.options.clearSelOnDpChange) {
						if (this._selectedKeys != null && this._selectedKeys.length > 0) {
							this._selectedKeys = null;
							this._trigger('change');
						}
					}
				}

			} else if (k == 'disabled') {
				this._selectBtn.enable(!v);
				this.options.disabled = v;
			}else if(k == 'bsTxt'){
				if(this._selectBtn){
					this._selectBtn.text(v);
				}
			}else if(k == 'bsViewT'){
				if(this._selectBtn){
					if(v==2 && this._selectBtn.hasClass("l_button")){
						this._selectBtn.removeClass("l_button"); 
						this._selectBtn.addClass('l_linkbutton'); // 追加样式 
					}else if(this._selectBtn.hasClass("l_linkbutton")){
						this._selectBtn.removeClass("l_linkbutton"); 
						this._selectBtn.addClass('l_button'); // 追加样式 
					}
				}

			}else if(k == 'bsStyle'){
				if(this._selectBtn && !this._selectBtn.hasClass(v)){
					this._selectBtn.addClass(v); // 追加样式 
				}

			}else if(k=='detailFunc'){
				this._super(k, v);
				if(this._selectedKeys && this._selectedKeys.length > 0){
					var that = this;
					v(function(newDp){
						that.options.detailDataProvider = newDp;
						if(!that._initLable){
							that._applyInnerDiv(true);
						}
					});
				}
			} else{
				if(!(this._isDialogQuery && k == 'dataProvider')){					
					this._super(k, v);
				}
			}
		},
		getValue: function () {
			var opt = this.options;
			return $.typedResultValue(opt.resultType, opt.sep, opt.resultArrKey, this._selectedKeys);
		},
		getSelectItems:function(){
			var selItems = null;
			if(this._$rightGrid){
				selItems = this._$rightGrid.ltable('option','dataProvider');
			}	
			return selItems;
		},
		setSelectItems:function(v){
			if(this._$rightGrid){
				this._$rightGrid.ltable('option','dataProvider',v);
			}
		},
		setValue: function (v) {
			if(v!=null){
				var opt = this.options;
				var that = this;
				var arr = $.typedResultValue(opt.resultType, opt.sep, opt.resultArrKey, that._selectedKeys, v);
				if(arr!=null){
					this._selectedKeys = arr;
					if(opt.detailFunc!=null && v!=null){
						opt.detailFunc(function(newDp){
							opt.detailDataProvider = newDp;
							that._applyInnerDiv(true);
							that._trigger('change');
						});
					}else{
						var arr = $.typedResultValue(opt.resultType, opt.sep, opt.resultArrKey, this._selectedKeys, v);
						this._applyInnerDiv(true);
						this._trigger('change');
					}
				}
			}else{
				if(this._selectedKeys!=null){
					this._trigger('change');
				}
				this._selectedKeys = null;
				this._applyInnerDiv(true);
			}
		}

	});
})(jQuery);


(function ($) {
	$.widget('ui.autocomplete',$.ui.autocomplete,{
        options:{
            dropdownWidth:0
        },
        _resizeMenu:function(){
            var ww=this.options.dropdownWidth;
            if(ww){
                this.menu.element.outerWidth(ww-0);
            }else if(this.element.width()){
            	this.menu.element.outerWidth(this.element.width());
            	
            }
        }

    });

	$.widget('linkage.lfiltertreecombo', $.ui.autocomplete, {
		_renderItem: function (ul, item,level){
			var linkInfo = $("<a>");
			linkInfo.css("padding-left",level*20+"px");
			if(item.children){
				linkInfo.html("<span class='l_tree_folder l_tree_folder_expand'></span><span class='l_tree_text'>"+item.label+"</span>");
				return $("<li>").append(linkInfo).appendTo(ul);
			}else{
				linkInfo.html("<span class='l_tree_leaf'></span><span class='l_tree_text'>"+item.label+"</span>");
				return $("<li>").append(linkInfo).appendTo(ul);
			}
		},
		
		_renderData: function (ul, item, that,level) {
			return that._renderItem(ul, item,level).data("ui-autocomplete-item",item);
		},

		_renderMenu: function (ul, items) {
			this._recursiveRenderItem(ul, items, this,0);
		},
		_recursiveRenderItem:function(ul, items, that,level){
			$.each(items,function(index,item){
				var newLevel = level;
				that._renderData(ul,item,that,newLevel);
				if(item.children){
					newLevel++;
					that._recursiveRenderItem(ul, item.children, that,newLevel);
				}
			});
		}
	
	});
})(jQuery);
(function ($) {

	$.widget('linkage.lfiltercombo', {
		options: {
			prompt: null,
			dataProvider: null,
			keyField: 'key',
			labelField: 'label',
			labelFields: null,// 逗号分隔字符串
			defaultSelIndex: -1,
			clearSelOnDpChange: false,
			disabled: false,
			dropdownType: 1, // 1,普通；2，树；3，表格
			isServerQuery: false,
			queryDelayMS: 300,
			queryFunc: null,
			queryDetailFunc: null,
            dropdownWidth:0,
            keepUserInput:true //如果没有选择，blur后也保留用户输入作为有效值
        },
		_selectedKey: null,
        _filterClass: null,
        _labelFieldArr:null,
		_convertOptions: function (ops) {
			$.convertObjBool(ops, [ 'clearSelOnDpChange', 'disabled', 'isServerQuery' ]);
			$.convertObjNumber(ops, [ 'defaultSelIndex', 'dropdownType', 'queryDelayMS','dropdownWidth' ]);
		},
		_populateLabel: function (item) {
			var lbl = null;
			if (this.options.dropdownType == 3) {
				if (this._labelFieldArr != null) {
					var larr = [];

					$.each(this._labelFieldArr, function (idx, lf) {
						larr.push(item[lf]);
					});
					lbl = larr.join(' ');
				}
			} else {
				lbl = item[this.options.labelField];
			}
			return lbl;
		},
		_create: function () {
			this._filterClass='autocomplete';
			$.convertDataToOption(this);
			var ops = this.options;
			this._convertOptions(ops);
			this.element.addClass('l_inputcontrol l_inputcontrol2');
			if (ops.dropdownType == 2) {
				this._filterClass = 'lfiltertreecombo';
			} else if (ops.dropdownType == 3) {
				this._labelFieldArr = null;
				if (ops.labelFields != null) {
					this._labelFieldArr = ops.labelFields.split(',');
				} else {
					this._labelFieldArr = [ ops.labelField ];
				}

			}
			var that = this;

			function recursiveFilterItem(reg, arr, items) {
				if (reg == null) {
					// 返回树结构
					$.each(items, function (idx, item) {
						var o = testSingleItem(item, reg, arr);
						if (item.children) {
							var carr = [];
							recursiveFilterItem(reg, carr, item.children);
							o.children = carr;
						}

					});
				} else {
					$.each(items, function (idx, item) {
						testSingleItem(item, reg, arr);
						if (item.children) {
							recursiveFilterItem(reg, arr, item.children);
						}

					});
				}

			}

			function testSingleItem(item, reg, arr) {
				var lbl = that._populateLabel(item);

				if (reg == null) {
					var o = {
							label: lbl,
							value: lbl,
							key: item[ops.keyField]
					};
					arr.push(o);
					return o;
				} else {
					if (reg.test(lbl)) {
						var o = {
								label: lbl,
								value: lbl,
								key: item[ops.keyField]
						};
						arr.push(o);
						return o;
					}
				}
				return null;
			}

			function genNoRecordOption() {
				return {
					label: LI.noMatch,
					value: null,
					key: null
				};
			}

			function querySource(response, term) {
				var rv = [];

				if (ops.dataProvider != null) {
					var reg = null;
					if (!(term == null || (term + '').length == 0)) {
						reg = new RegExp($.ui.autocomplete.escapeRegex(term), 'gi');
					}
					if (ops.dropdownType == 2) {
						recursiveFilterItem(reg, rv, ops.dataProvider);
					} else {
						$.each(ops.dataProvider, function (idx, item) {
							testSingleItem(item, reg, rv);

						});
					}

				}
				if (rv.length == 0) {
					rv.push(genNoRecordOption());
				}
				response(rv);
			}
			
			if(this.element.hasClass('l_inputcontrol')){
				//只禁用文本框的回车事件
				this.element.keypress(function(event) {
					if (event.keyCode == 13) {
					   event.preventDefault();
					}
				});
			}

			var timeoutFlag = null;
			this.element[this._filterClass]({
                dropdownWidth:ops.dropdownWidth,
                'minLength': ops.isServerQuery ? 1 : 0,
                'autoFocus': true,
                'disabled': ops.disabled,
                'select': function (event, ui) {
                	var key = ui.item.key;
					if (ops.dataProvider != null) {
                		if (key != that._selectedKey) {
							that._selectedKey = key;
							that._trigger('change');
                		}
                    }
                },
                'source': function (request, response) {
                    var term = request.term;
                    if (ops.isServerQuery) {
                        if (ops.queryFunc != null) {
                            if (timeoutFlag != null) {
                                clearTimeout(timeoutFlag);
                            }
                            timeoutFlag = setTimeout(function () {
                                timeoutFlag = null;
                                ops.queryFunc(term, function (queryResult) {
                                    that.options.dataProvider = queryResult;
                                    querySource(response, null);
                                });
                            }, ops.queryDelayMS);
                        } else {
                            response([ genNoRecordOption() ]);
                        }
                    } else {
                        querySource(response, term);
                    }
                }

            });
			this.element.on('focus',function (event) {
				var $this = $(this);
				$this.removeClass('l_inputprompt');
				if (that._selectedKey == null) {
					$this.val(null);
				}else{
				    $this.select();
                }
				if (!ops.isServerQuery) {
					$(this)[that._filterClass]("search");
				}

			}).on('blur', function (event) {
				var $this = $(this);
				var v = $this.val();
				if(v!=null&&(v + '').length == 0){
				    v=null;
                }
                if(v==null&&that._selectedKey!=null){
                    that._selectedKey = null;
                    that._trigger('change');
                }
                var foundLabel= that._applyKeySelect();
                if(ops.keepUserInput&&v!=null&&foundLabel!=v){
                    //selkey有可能变成默认值
                    //有选中值也有输入值的时候，计算选中值的label，如果跟输入值一样，就当用户没有改变输入
                    that._selectedKey=v;
                    that._trigger('change');
                    that._applyKeySelect();
                }
            });
			this._applyKeySelect();
			if (ops.disabled) {
				this.element.prop('disabled', true);
			}
		},

		_setOptions: function (ops) {
			this._convertOptions(ops);
			this._super(ops);

		},
		_setOption: function (k, v) {

			if (k == 'dataProvider') {
				var old = this.options.dataProvider;
				if (old != v) {
					this._super(k, v);
					if (this.options.clearSelOnDpChange) {
						if (this._selectedKey != null) {
							this._selectedKey = null;
							this._trigger('change');
						}

					}
                    this._applyKeySelect();
                }
			} else if (k == 'disabled') {
				this.element[this._filterClass]('option', 'disabled', v);
				this.element.prop('disabled', v);
				this.options.disabled = v;
			}else if(k == 'dropdownWidth'){
				this.element[this._filterClass]('option','dropdownWidth',v);
			} else {
				this._super(k, v);
			}

		},
		_recursiveFindItem: function (key, items, keyField, labelField) {
			var found = false;
			var lbl = null;
            var that = this;
			$.each(items, function (idx, item) {
				if (item[keyField] == key) {
					lbl = item[labelField];
					found = true;
                    return false;
				}
				if (item.children) {
					var o = that._recursiveFindItem(key, item.children, keyField, labelField);
					if (o.found) {
						found = true;
						lbl = o.label;
                        return false;
					}
				}
			});
			return {
				found: found,
				label: lbl
            };

		},
		_applyKeySelect: function () {

			var lbl = null;
			var ops = this.options;
			var k = this._selectedKey;
			var found = false;
			var that = this;
			if (ops.dataProvider != null) {
				if (ops.dropdownType == 2) {
				    if(k!=null){
                        var o = this._recursiveFindItem(k, ops.dataProvider, ops.keyField, ops.labelField);

                        if (o.found) {
                            lbl = o.label;
                            found = true;
                        }
                    }

				} else {
					if (k != null) {

						$.each(ops.dataProvider, function (idx, item) {

							if (item[ops.keyField] == k) {
								lbl = that._populateLabel(item);
								found = true;
								return false;
							}
						});
					} else if (ops.defaultSelIndex >= 0) {

						var item = ops.dataProvider[ops.defaultSelIndex];

						if (item != null) {
							lbl = that._populateLabel(item);
							this._selectedKey = item[ops.keyField];
							found = true;

						}
					}
				}

			}
			if (!found&&k==null) {
			    lbl = ops.prompt;
				this.element.addClass('l_inputprompt');
			} else {
				this.element.removeClass('l_inputprompt');
			}
            if(k != null && !found){
			    //如果selectedKey有值但是找不到对应的item，标签就显示selectedKey的值
			    lbl=k;
            }
            this.element.val(lbl);
            return lbl;
		},

		getValue: function () {
            return this._selectedKey;
        },
		setValue: function (v) {
			if (this._selectedKey != v) {
				this._selectedKey = v;
				this._trigger('change');
                var applyResultLabel = this._applyKeySelect();
                if (v != null && this.options.isServerQuery && applyResultLabel==null) {
                    // 后台查询且selKey没找到detail记录，发起detail查询
                    if (this.options.queryDetailFunc != null) {
                        var that = this;
                        this.options.queryDetailFunc(this._selectedKey, function (result) {
                            that._setOption('dataProvider', result);
                        });
                    }
                }
            }
		}
	});
})(jQuery);
jQuery.fn.doExist = function (func) {

	this.length && func.apply(this);

	return this;

};

jQuery.fn.enable = function (enabled,isbusy) {
	return this.each(function (idx, el) {
		var $el = $(el);
		var flag = $el.data("busyFlag");
		if ($el.hasClass('l_button') || $el.hasClass('l_linkbutton')) {
			try{
				if(flag!="1" && !$el.lbutton('option', 'disabled')){
					if(isbusy){
						$el.data("busyFlag","1");
					}
				}
				$el.lbutton('option', 'disabled', !enabled);

			}catch(e){

			}	
		} else {
			if(flag!="1" && !$el.prop('disabled')){
				if(isbusy){
					$el.data("busyFlag","1");
				}
			}
			$el.prop('disabled', !enabled);
		}
		if(!isbusy && flag!="0"){
			$el.data("busyFlag","0");
		}
	});

};
jQuery.formatThousandSep = function (nStr) {
	nStr = nStr + '';
	var arr = nStr.split('.');
	var re1 = /(\d{1,3})(?=(\d{3})+$)/g;
	var s1 = arr[0].replace(re1, '$1,');
	if (arr.length>1 && arr[1].length > 0) {
		var re2 = /(\d{3})(?=(\d{1,3})+$)/g;
		var s2 = arr[1].replace(re2, '$1,');
		s1 = s1 + '.' + s2;
	}

	return s1;
};
jQuery.convertObjBool = function (obj, keys) {
	if (obj != null && keys != null) {
		$.each(keys, function (idx, key) {
			if (key in obj) {
				obj[key] = (obj[key] + '' == 'true');
			}
		});
	}

};
jQuery.convertObjNumber = function (obj, keys) {
	if (obj != null && keys != null) {
		$.each(keys, function (idx, key) {
			if (key in obj) {
				var v = obj[key] - 0;
				if (isNaN(v)) {
					v = null;
				}
				obj[key] = v;
			}
		});
	}

};
jQuery.expandToString = function (value, size, charUsed, side) {
	if (charUsed == null) {
		charUsed = '0';
	}
	if (side == null) {
		side = 'l';
	}
	var str = '';
	if (value != null) {
		str = String(value);
	}
	var len = str.length;
	var diff = size - len;
	if (diff > 0) {
		for (var i = 0; i < diff; i++) {
			if (side == 'l') {
				str = charUsed + str;
			} else {
				str += charUsed;
			}
		}
	}
	return str;

};
jQuery.convertDataToOption = function (jWidget) {
	var d = jWidget.element.data();

	for (var key in d) {
		if (key in jWidget.options) {
			jWidget.options[key] = d[key];

		}
	}

};
(function ($) {
	var sep1 = ',,,';
	var sep2 = ';;;';
	$.getFileResultValue = function (resultType, files, idField, nameField) {
		if (resultType == 2) {
			var rv = [];
			if (files) {
				$.each(files, function (idx, f) {
					rv.push(f.id + sep1 + f.name);
				});
			}
			return rv.join(sep2);
		} else {
			var rv = [];
			if (files) {
				$.each(files, function (idx, f) {
					var o = {};
					o[idField] = f.id;
					o[nameField] = f.name;
					rv.push(o);
				});
			}
			return rv;
		}
	};
	$.setFileResultValue = function (resultType, v, idField, nameField) {
		var arr = [];
		if (resultType == 2) {
			if(v){
				var s = v + '';
				var arr1 = s.split(sep2);
				$.each(arr1, function (idx, ss) {
					var arr2 = ss.split(sep1);
					arr.push({
						id: arr2[0],
						name: arr2[1]
					});
				});
			}
		} else {
			if(v){
				$.each(v, function (idx, item) {
					arr.push({
						id: item[idField],
						name: item[nameField]
					});
				});	
			}
		}
		return arr;

	};
	$.typedResultValue = function (resultType, sep, resultArrKey, selectedKeys, v,selectKeyType) {

		if (v === undefined) {
			// get
			if (selectedKeys == null) {
				selectedKeys = [];
			}
			if (resultType == 2) {

				return selectedKeys.join(sep);
			} else {
				if (resultArrKey == null) {
					return selectedKeys;
				} else {
					var rv = [];
					$.each(selectedKeys, function (idx, item) {
						var o = {};
						o[resultArrKey] = item;
						rv.push(o);
					});
					return rv;
				}
			}
		} else {
			// set
			var arr = null;
			var old = selectedKeys;
			if (v == null) {
				if (old && old.length > 0) {
					arr = [];
				}
			} else {
				if (resultType == 2) {
					var oldStr = old ? old.join(sep) : '';
					if (v != oldStr) {

						arr = String(v).split(sep);
						//判断dataprovided中selectKey的类型
						if(selectKeyType=='number' && arr){
							var newArr = [];
							$.each(arr,function(index,item){
								newArr.push(parseInt(item));
							});
							arr = newArr;
						}
					}
				} else {
					var tmp = null;
					if (resultArrKey == null) {
						tmp = v;
					} else {

						tmp = [];

						$.each(v, function (idx, item) {
							tmp.push(item[resultArrKey]);

						});

					}
					var match = true;
					$.each(tmp, function (idx, tmpItem) {
						if ($.inArray(tmpItem, old) == -1) {
							match = false;
							return false;
						}
					});
					if (!match) {
						arr = tmp;
					}
				}
			}
			return arr;
		}
	};
})(jQuery);
jQuery.supplyChar = function (oriStr, len, chara, side) {
	if (oriStr == null) {
		oriStr = '';
	}
	oriStr += '';
	var oriLen = oriStr.length;
	if (oriLen < len) {
		var diff = len - oriLen;
		for (var i = 0; i < diff; i++) {
			if (side == 'right') {
				oriStr += chara;
			} else {
				oriStr = chara + oriStr;
			}
		}
	}
	return oriStr;
};
jQuery.toHexColorStr = function (nColor) {
	var rv = null;
	if (nColor != null) {
		nColor = nColor - 0;
		if (!isNaN(nColor)) {
			rv = '#' + jQuery.supplyChar(nColor.toString(16), 6, '0');
		}
	}
	return rv;
};

jQuery.uuid = function(len) {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var uuid = [], i;
	var radix = 16 || chars.length;
	if (len) {
		// Compact form
		for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
	} else {
		// rfc4122, version 4 form
		var r;
		// rfc4122 requires these characters
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';
		// Fill in random data.  At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random()*16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return uuid.join('');
};


(function ($) {
	$.collectTreeRecursive = function (parentNode, leafOnly, arr) {
		if (parentNode) {
			if (!parentNode.children || !leafOnly) {
				var o = $.extend({}, parentNode);
				delete o.children;
				arr.push(o);
			}
			if (parentNode.children) {
				$.each(parentNode.children, function (idx, item) {
					$.collectTreeRecursive(item, leafOnly, arr);
				});
			}
		}
	};
	$.filterTreeRecursive = function (treeDP, txt, matchFields, reg) {
		if (treeDP == null || matchFields == null || txt == null || (txt + '').length == 0) {
			return treeDP;
		}
		if (reg === undefined) {
			reg = new RegExp($.ui.autocomplete.escapeRegex(txt), 'gi');
		}
		var rv = [];
		$.each(treeDP, function (idx, item) {
			var match = false;
			$.each(matchFields, function (idx, mf) {
				if (reg.test(item[mf])) {
					match = true;
					return false;
				}
			});
			var childRV = null;
			if (item.children) {
				childRV = $.filterTreeRecursive(item.children, txt, matchFields, reg);
				if (childRV != null && childRV.length > 0) {
					match = true;
				}
			}

			if (match) {
				var newItem = $.extend({}, item);
				delete newItem.children;
				if (childRV != null) {
					newItem.children = childRV;
				}
				rv.push(newItem);
			}

		});
		return rv;
	};
})(jQuery);

jQuery.createLButton = function (label, $parent, disabled, extraClass) {
	var disStr = '';
	if (disabled) {
		disStr = ' data-disabled="true"';
	}

	var $btn = $('<a href="javascript:void(0)" class="l_button' + (extraClass ? ' ' + extraClass : '') + '"' + disStr + '>' + label + '</a>').appendTo($parent);

	return $btn;

};
(function ($) {
	var fdate = 'YYYY-MM-DD';
	var fdatetime = 'YYYY-MM-DD JJ:NN:SS';
	$.formatDate = function (date, format, hasTime) {
		var s = '';
		if (date != null) {
			var f = format;
			if (f === null||f==='' || typeof(f) == 'undefined') {
				if (hasTime) {
					f = fdatetime;
				} else {
					f = fdate;
				}
			}
			s = f.replace(/YYYY/g, date.getFullYear());
			s = s.replace(/MM/g, $.expandToString(date.getMonth() + 1, 2));
			s = s.replace(/DD/g, $.expandToString(date.getDate(), 2));
			s = s.replace(/JJ/g, $.expandToString(date.getHours(), 2));
			s = s.replace(/NN/g, $.expandToString(date.getMinutes(), 2));
			s = s.replace(/SS/g, $.expandToString(date.getSeconds(), 2));
			s = s.replace(/QQQ/g, $.expandToString(date.getMilliseconds(), 3));
		}

		return s;

	};
	$.parseLDate = function (dateStr, format) {
		if(dateStr===null||dateStr===''){
			return null;
		}
		dateStr = dateStr + '';
		var yearIdx = format.indexOf('YYYY');
		var monthIdx = format.indexOf('MM');
		var dateIdx = format.indexOf('DD');
		var hourIdx = format.indexOf('JJ');
		var minuteIdx = format.indexOf('NN');
		var secondIdx = format.indexOf('SS');
		var milliIdx = format.indexOf('QQQ');

		var yy = yearIdx == -1 ? 1970 : parseInt(dateStr.substr(yearIdx, 4));
		var mm = monthIdx == -1 ? 0 : parseInt(dateStr.substr(monthIdx, 2)) - 1;
		var dd = dateIdx == -1 ? 1 : parseInt(dateStr.substr(dateIdx, 2));
		var hh = hourIdx == -1 ? 0 : parseInt(dateStr.substr(hourIdx, 2));
		var minute = minuteIdx == -1 ? 0 : parseInt(dateStr.substr(minuteIdx, 2));
		var ss = secondIdx == -1 ? 0 : parseInt(dateStr.substr(secondIdx, 2));
		var milli = milliIdx == -1 ? 0 : parseInt(dateStr.substr(milliIdx, 3));
		return new Date(yy, mm, dd, hh, minute, ss, milli);
	};

})(jQuery);
jQuery.customClassMatch={};
jQuery.classMatch = {

		'l_textinput': [ 'ltextinput' ],
		'l_textarea': [ 'ltextinput' ],
		'l_password': [ 'lpassword' ],
		'l_select': [ 'lselect' ],
		'l_spinner': [ 'lspinner', 'value', 'value' ],
		'l_datepicker': [ 'ldatepicker', 'getDate', 'setDate' ],
		'l_datetimepicker': [ 'ldatetimepicker', 'getDate', 'setDate' ],
		'l_numberinput': [ 'lnumberinput' ],
		'l_radiogroup': [ 'lradiogroup' ],
		'l_checkbox': [ 'lcheckbox' ],
		'l_checkboxgroup': [ 'lcheckboxgroup' ],
		'l_filtercombo': [ 'lfiltercombo' ],
		'l_multiselect': [ 'lmultiselect' ],
		'l_multiselectex':['lmultiselectext'],
		'l_uploadbox': [ 'luploadbox' ],
		'lbpm_lmultiselect':['lbpmlmultiselect'],
		'lbpm_exervarselect':['lbpmexervarselect']
};
(function ($) {
	var match = $.classMatch;
	$.fn.lvalue = function (v) {
		// getValue/setValue可以省略

		if (v === undefined) {
			// get
			var rv = null;
			if (this.length) {
				var o = this.eq(0);
				var attrClass=o.attr('class');
				if(attrClass){
				    var classes=attrClass.split(' ');
				    $.each(classes,function(idx,oneClass){
                        if(oneClass){
                            var arr=match[oneClass];
                            if(arr){
                                var getMethod = arr[1];
                                if (getMethod == undefined) {
                                    getMethod = 'getValue';
                                }
                                o[arr[0]]();
                                rv = o[arr[0]](getMethod);
                                return false;
                            }
                        }
                    });
                }
			}
			return rv;
		} else {
			// set
			return this.each(function (idx, el) {

				var o = $(el);
                var attrClass=o.attr('class');
                if(attrClass){
                    var classes=attrClass.split(' ');
                    $.each(classes,function(idx,oneClass){
                        if(oneClass){
                            var arr=match[oneClass];
                            if(arr){
                                var setMethod = arr[2];
                                if (setMethod == undefined) {
                                    setMethod = 'setValue';
                                }
                                o[arr[0]]();
                                o[arr[0]](setMethod, v);
                                return false;
                            }
                        }
                    });
                }
            });
		}

	};
	var selectorArr = [];
	$.each(match, function (className, arr) {
		selectorArr.push('.' + className);
	});
	var selector = selectorArr.join(',');
	$.fn.lformValue = function (formValueObj) {

		if (formValueObj === undefined) {
			// 获取第一个表单的值对象，key为元素name
			var rv = null;
			if (this.length) {
				rv = {};
				var form = this.eq(0);
				form.find(selector).each(function (idx, el) {
					var jel = $(el);
					var name = jel.attr('name');
					if (name) {
						rv[name] = jel.lvalue();
					}
				});

			}
			return rv;
		} else {
			if (formValueObj == null) {
				formValueObj = {};
			}
			return this.each(function (idx, el) {

				var fm = $(el);
				fm.find(selector).each(function (idx, el1) {
					var jel1 = $(el1);
					var name = jel1.attr('name');
					if (name) {
						var vv = formValueObj[name];
						if (vv === undefined) {
							vv = null;
						}
						jel1.lvalue(vv);

					}
				});
			});
		}

	};
})(jQuery);

//lmsp jQuery plugins----end-----------------------

var L = null;
(function ($) {
	var lmsp = (function () {
		var LMSP_DATEPREFIX = "LMSP_DATE_";
		
		//type:1，警告提示、2，执行成功确定提示 、3，执行错误提示，默认为警告提示
		var lAlert = function (html, ww, hh,type) {
			if(!L.isDomain && self!=top && top.L){
				top.L.alert(html, ww, hh,type);
			}else{
				if(!type){
					type =1;
				}
				if (ww == null) {
					ww = 400;
				}
				if (hh == null) {
					hh = 250;
				}

				var dia=null;
				if(L.config.alertHideDelayMS>0){
					//每次都创建新dom
	                dia = $('<div class="l_popwin"></div>').appendTo($('body'));
	                var buttonsObj={};
	                buttonsObj[LI.knowSure]= function () {
	                    $(this).dialog("close");
	                };
	                dia.dialog({

	                    title: LI.hint,
	                    buttons: buttonsObj,
						close:function(event,ui){
							dia.remove();
						}
	                });
				}else{
	                dia = $('#lAlertDialog');
	                if (dia.length == 0) {

	                    dia = $('<div class="l_popwin" id="lAlertDialog"></div>').appendTo($('body'));
	                    var buttonsObj={};
	                    buttonsObj[LI.knowSure]= function () {
	                        $(this).dialog("close");
	                    };
	                    dia.dialog({

	                        title: LI.hint,
	                        buttons: buttonsObj
	                    });
	                }
				}

				
				var ctxs = html.split('<br>');
				var dialogHtml = [];
				var tipNum = ctxs.length;
				$.each(ctxs,function(idx,ctx){
					dialogHtml.push("<span class='"+(type==2?'prompt_info ':type==3?'prompt_error ':'prompt_warn ')+(tipNum>1?"multi_prompt'> <span>":"single_prompt'> <p>")+ctx+(tipNum>1?"</span></span>":"</p></span>"));
				});
				

				dia.html("<table style='height:100%;width:100%'><tr style='height:100%;width:100%'><td style='height:100%;width:100%;vertical-align: middle;text-align:center;'>"+dialogHtml.join('<br>')+"</td></tr></table>").dialog('option', {
					width: ww,
					height: hh

				});

				if(L.config.alertHideDelayMS>0){
					//显示一段时间后自动消失，非modal，从顶部降落，fade消失
	                dia.dialog('option', 'modal', false);
	                dia.dialog('option','hide',500);
	                dia.dialog('option','show',{effect:'drop',duration:300,direction:'up'});
	                dia.dialog('option','position',{my:'center top',at:'center top+65',of:window});
	                dia.dialog('open');
	                setTimeout(function(){
	                	try{
	                        dia.dialog('close');
						}catch(e){

						}
					},L.config.alertHideDelayMS);
					dia.perfectScrollbar();
				}else{
	                L.pop(dia);
				}
			}



		};
		var alertArr = function (arr, ww, hh,type) {
			if (arr) {
				lAlert(arr.join('<br>'), ww, hh,type);
			}

		};
		var lConfirm = function (html, okCallback, ww, hh,cancelCallback) {
			if(!L.isDomain && self!=top && top.L){
				top.L.lConfirm(html, okCallback, ww, hh,cancelCallback);
			}else{
				if (ww == null) {
					ww = 400;
				}
				if (hh == null) {
					hh = 250;
				}
				var dia = $('#lConfirmDialog');
				if (dia.length == 0) {
					dia = $('<div class="l_popwin" id="lConfirmDialog"></div>').appendTo($('body'));
					var buttonsObj={};
					buttonsObj[LI.ok]=function () {
						var $this = $(this);
						$this.dialog("close");
						var cb = $this.dialog('option', 'okCallback');
						if (cb != null) {
							cb();
						}

					};		
					buttonsObj[LI.cancel]=function () {
						var $this = $(this);
						$(this).dialog("close");
						var cb = $this.dialog('option', 'cancelCallback');
						if (cb != null) {
							cb();
						}
					};
					dia.dialog({
						title: LI.confirmMsg,
						buttons: buttonsObj

					});
				}
				html = "<table style='height:100%;width:100%'><tr style='height:100%;width:100%'><td style='height:100%;width:100%;vertical-align: middle;text-align:center;'><span class='prompt_warn single_prompt'><p>"+html+"</p></span></td></tr></table>";
				dia.html(html).dialog('option', {
					width: ww,
					height: hh,
					okCallback: okCallback,
					cancelCallback:cancelCallback
				});
				L.pop(dia);
			}
			
		};
		var confirmDelete = function (okCallback, ww, hh) {
			lConfirm('<p>'+LI.confirmDel+'</p>', okCallback, ww, hh);
		};
		var ctxPath = '/';
		var setContextPath = function (cp) {
			if (!cp) {
				cp = '/';
			}
			if (cp.charAt(0) != '/') {
				cp = '/' + cp;
			}
			if (cp.charAt(cp.length - 1) != '/') {
				cp += '/';
			}
			ctxPath = cp;
		};
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
		// 转换日期、htmlencode
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
		};

		function updateScroll(panel) {
			if (panel && panel.length) {

				panel.find('.ps-container').perfectScrollbar('update');
			}
		}
		function refreshActivePanel(panel,ctn){
            updateScroll(panel);
            resizeElements(panel);
            $(ctn).closest('.l_popwin').perfectScrollbar('update');
            refreshLayoutFixSize();
            updateAllScroll();

        }

		function customWidget(className,widgetName,getMethodName,setMethodName){
            $.classMatch[className]=[widgetName,getMethodName,setMethodName];
            $.customClassMatch[className]=widgetName;
        }
        //html准备好之后，调用此方法初始化控件
		var init = function ($parent) {

			if ($parent === undefined) {
				$parent = $(document);
			}
            $parent.find('iframe').on('load',function(){
                var $ifa=$(this);
                if(!this.height){
                    //没有用height属性设置高度
                    var h = $ifa.data('h');
                    if(h){
                        //使用data设置了高度
                        $ifa.height(h-0);
                        updateAllScroll();
                    }else{
                        //与内容等高
                        //每隔毫秒执行一次，共执行10次
                        var count=0;
                        var hhh=setInterval(function () {
                            count++;
                            if(count==10){
                                clearInterval(hhh);
                            }
                            var contentH=$ifa.contents().find('body').height();
                            if(contentH!=$ifa.height()){
                                $ifa.height(contentH);
                                updateAllScroll();
                            }
                        }, 300);
                    }
                }

            });
			// 元素域
			$parent.find("div.l_tab").doExist(function () {
				this.tabs({
					activate: function (event, ui) {
                        refreshActivePanel(ui.newPanel,this);

					}
				});
			});
			$parent.find("div.l_accordion").doExist(function () {
				this.accordion({
					heightStyle: 'content',
					activate: function (event, ui) {
                        refreshActivePanel(ui.newPanel,this);

					}
				});
			});
			$parent.find("div.l_foldingpanel").doExist(function () {
				this.lfoldingpanel({
					activate: function (event, ui) {
                        refreshActivePanel(ui.newPanel,this);

					}
				});
			});
			$parent.find("div.l_viewstack").doExist(function () {
				this.lviewstack({
					activate: function (event, ui) {
                        refreshActivePanel(ui.newPanel,this);

					}
				});
			});
            $parent.find("div.l_card").doExist(function () {
                this.lcard();
            });

			// 元素
			$parent.find("div.l_table").doExist(function () {
				this.ltable();
			});
            $parent.find("div.l_fixtable").doExist(function () {
                this.lfixtable();
            });
			$parent.find("div.l_edittable").doExist(function () {
				this.ledittable();
			});

			$parent.find("input.l_filterinput").doExist(function () {
				this.autocomplete();
			});

			$parent.find("input.l_spinner").doExist(function () {
				this.lspinner();
			});
			$parent.find("input.l_datepicker").doExist(function () {
				this.ldatepicker();
			});
			// datetime要放在spinner和date的后面
			$parent.find("div.l_datetimepicker").doExist(function () {
				this.ldatetimepicker();
			});

			$parent.find("div.l_tree").doExist(function () {
				this.ltree();
			});

			$parent.find("input.l_textinput").doExist(function () {
				this.ltextinput();
			});
			$parent.find("textarea.l_textarea").doExist(function () {
				this.ltextinput({
					isArea: true
				});
			});

			$parent.find("input.l_password").doExist(function () {
				this.lpassword();
			});

			$parent.find("input.l_checkbox").doExist(function () {
				this.lcheckbox();
			});
			$parent.find("div.l_checkboxgroup").doExist(function () {
				this.lcheckboxgroup();
			});
			$parent.find('div.l_radiogroup').doExist(function () {
				this.lradiogroup();
			});
			$parent.find("input.l_numberinput").doExist(function () {
				this.lnumberinput();
			});
			$parent.find("div.l_hmenus").doExist(function () {
				this.hmenus();
			});
			$parent.find("span.l_pagebar").doExist(function () {
				this.lpagebar();
			});
			$parent.find("div.l_select").doExist(function () {
				this.lselect();
			});
			$parent.find("input.l_filtercombo").doExist(function () {
				this.lfiltercombo();
			});
			$parent.find("div.l_multiselect").doExist(function () {
				this.lmultiselect();
			});
			$parent.find("div.l_uploadbox").doExist(function () {
				this.luploadbox();
			});
			$parent.find('div.l_iruploadedfile').doExist(function () {
				this.iruploadedfile();
			});
			//项目自定义控件
            $.each($.customClassMatch,function(clsName,widgetName){
                $parent.find('div.'+clsName).doExist(function () {
                    this[widgetName]();
                });
            });
			// lbutton要放最后，因为其他widget可能产生button
			$parent.find('a.l_button').doExist(function () {
				this.lbutton();
			});
			$parent.find('a.l_linkbutton').doExist(function () {
				this.lbutton({
					showAsLink: true
				});
			});
			$parent.find('div.l_multiselectex').doExist(function () {
				this.lmultiselectext();
			});

			$parent.tooltip();
			updateScroll($parent);

			//dialog初始化时会把div移到外面去，如果$parent传入了值，可能就不在$parent内部了
			$parent.find("div.l_popwin").doExist(function () {
				this.dialog({
//                    open:function(){
//                    	var $this=$(this);
//                        resizeElements($this);
//						if(!$this.hasClass('ps-container')){
//                            $this.perfectScrollbar();
//						}
//
//                    },
                    resize:function(){
                    	var $this=$(this);
                        resizeElements($this);
                        $this.perfectScrollbar('update');
                    }
				});
			});
			//所有的checkbox样式渲染
            $.lRenderCSSCheckbox($parent);
        };

		var consts = {
				WORKSHOPBOPREFIX: 'com.linkstec.lmspcom.workshop_',
				QUERYCOMPID:'com.linkstec.lmspcom.query_',
				QUERY_TYPE_POPUP:"1",
				QUERY_TYPE_TILE:"2",
				LMSP_CURRENT_DATE: '_LMSP_CURRENT_DATE',
				LMSP_CURRENT_DATETIME: '_LMSP_CURRENT_DATETIME',
				WHOLE_TEMPLATE_ID: 'overall',
				DATAMODELKEY_SUFFIX_SELECTEDITEM: '_selected',
				GLOBALMODEL_KEY_INITPARAM: 'GM2',
				GLOBALMODEL_KEY_DATADICT: 'GM0',
				GLOBALMODEL_KEY_USERINFO: 'GM1',
				DATAMODELKEY_SUFFIX_FORMITEM: '_formItemChange',
				DATAMODELKEY_SUFFIX_OTHERMODULE: '_otherModuleChange',
				DATAMODELKEY_SUFFIX_PAGESTATE: '_pageState',
				NO_PAGE_LIMIT: -1,

				CONTROL_TEXTINPUT: 1,
				CONTROL_TEXTAREA: 2,
				CONTROL_DATEFIELD: 3,
				CONTROL_COMBOBOX: 4,
				CONTROL_RADIOBUTTON: 5,
				CONTROL_CHECKBOX: 6,
				CONTROL_MULTISELECTPOP: 7,

				CONTROL_NUMBERSTEPPER: 9,
				CONTROL_DATETIMEFIELD: 10,
				CONTROL_FILEUPLOAD: 11,

				CONTROL_MULTISELECTPOPEX: 12,
				CONTROL_IMPORTFILE: 13,
				CONTROL_FILTERTEXTINPUT: 14,
				CONTROL_NUMTEXTINPUT: 15,
				CLOSE_ONLY: 'closeOnly',
				CLOSE_AND_EXECUTE: 'closeAndExecute',
				SORTDIRECTION_ASC: "asc",
				SORTDIRECTION_DESC: "desc"
		};
		var deepCopy = function (o) {
			return $.extend(true, {}, o);
		};
		var traverseObj = function (obj, func) {
			if (obj != null && typeof (obj) == 'object') {
				for (var key in obj) {
					var value = obj[key];
					func(obj, key, value);
					traverseObj(value, func);

				}
			}
		};
		var exeFunc = function () {
			var args = arguments;
			var len = args.length;
			var arr = [ '(', args[0], ')(' ];
			var arr2 = [];
			for (var i = 1; i < len; i++) {
				arr2.push('args[' + i + ']');
			}
			arr.push(arr2.join(','));
			arr.push(');');
			return eval(arr.join(''));
		};
		var urlObjectToString = function (o, separator, encodeURL) {
			var arr = [];
			for (var key in o) {
				var k = encodeURL ? encodeURIComponent(key) : key;
				var v = o[key];
				if($.lNull(v)){
                    arr.push(k + '=');
				}else{
					if($.isArray(v)){
						$.each(v,function(idx,itm){
							if(!$.lNull(itm)){
                                if (encodeURL) {
                                    itm = encodeURIComponent(itm);
                                }
                                arr.push(k + '='+itm);
							}
						});
					}else{
                        if (encodeURL) {
                            v = encodeURIComponent(v);
                        }
                        arr.push(k + '='+v);
					}
				}


			}
			return arr.join(separator);
		};
		var debugOut = function (str) {
			if (L.config.debug) {
				console.log(str);
			}
		};
		var access = function (resourceId) {
			return $.inArray(resourceId, L.legalResourceIds) != -1;
		};
		var getContextPath = function () {
			return ctxPath;
		};
		// 遍历arr,如果arr的item有children，则递归，执行func(item)，如果返回false则结束遍历
		var recursiveArr = function (arr, func) {

			var rv = true;

			$.each(arr, function (idx, item) {
				if (func(item) === false) {
					rv = false;
					return false;
				}
				if (item.children != null) {
					if (recursiveArr(item.children, func) === false) {
						rv = false;
						return false;
					}
				}
			});
			return rv;

		};

		var getParentWindow = function () {
			if (self != parent) {
				return parent;
			}
			return null;
		};
		// 作为子模块，被监听的数据变化了，写入其父的dm
		var onModuleValueChange = function (newValue,oriIfaId) {
			var ifaId = $('body').attr('ifaId');
			if(!ifaId){
				if(oriIfaId){
					if(L.config[oriIfaId]){
						var oriId = L.config[oriIfaId];
						var splitIdx=oriId.indexOf('--');
						if(splitIdx>0){
							var insBaseId=oriId.substring(0,splitIdx+2);
							var id = oriId.substring(splitIdx+2);
							ifaId = insBaseId+"."+id;
						}
					}else{
						ifaId = oriIfaId;
					}
				}
			}
			if (ifaId) {
				var p = getParentWindow();
				if (p) {
					p.L.datamodel.set(ifaId + L.consts.DATAMODELKEY_SUFFIX_OTHERMODULE, newValue);
				}else{
					L.datamodel.set(ifaId + L.consts.DATAMODELKEY_SUFFIX_OTHERMODULE, newValue);
				}
			}
		};
		var encodeHTML = function (originalStr) {
			return originalStr ? ($('<div/>').text(originalStr).html()) : originalStr;
		};
		var decodeHTML = function (encodedStr) {
			return encodedStr ? ($('<div/>').html(encodedStr).text()) : encodedStr;
		};
		var getDataDictValue = function (type, key) {
			var o = L.dd[type];
			if (o) {
				return o[key];
			}
			return null;
		};

		var createFileUrl = function (fileIds) {
			var arr = [];
			$.each(fileIds, function (idx, fid) {
				arr.push('fileId=' + fid);
			});
			var o={fileId:fileIds};
			secureTrans(o);

			return getContextPath() + "ldownload.lmsp?" + urlObjectToString(o,'&',true);
		};
		var downloadFile = function (fileIds) {
			if (fileIds && fileIds.length > 0) {
				innerDownload({
					ids: fileIds.join(',')
				});

			}
		};
		var innerDownload = function (vars) {
			var form = $('#lDownloadFileForm')[0];
			$('#lDownloadFileForm').find('input').each(function(idx,item){
				form[item.name].value = null;
			});
			
		
			secureTrans(vars);
			$.each(vars, function (k, v) {
				form[k].value = v;
			});

			form.submit();
		};
		var downloadLWithVirtualDir = function (dtos, idField, dirField) {

			var urlv = {};
			urlv.dtos = JSON.stringify(dtos);
			if (idField) {
				urlv.idf = idField;
			}
			if (dirField) {
				urlv.df = dirField;
			}
			innerDownload(urlv);
		};
		var downloadLCustom = function (busiNo, param) {
			var p = param ? param : {};
			p.busiNo = busiNo;

			var urlv = {};
			urlv.p = JSON.stringify(p);
			innerDownload(urlv);
		};
		var submit = function (url, isPost, param, newWindow,secureParam) {
			if(secureParam===undefined){
				if(url.indexOf(L.getContextPath()+'lpage/')==0){
                    secureParam=true;
				}
			}
			var $form = $('#lTempSubmitForm');
			if ($form.length == 0) {
				$form = $('<form id="lTempSubmitForm"></form>').appendTo($('body'));
			}
			$form.empty();
			$form.attr({
				method: isPost ? 'POST' : 'GET',
						target: newWindow ? '_blank' : '_self',
								action: url
			});
			var np=null;
			if(param){
				np=$.extend({},param);
			}else{
				np={};
			}
            np.__s="1";
			if(secureParam){
				secureTrans(np);
			}
            $.each(np, function (k, v) {
				$('<input type="hidden" name="' + k + '"/>').val(v).appendTo($form);
            });
			$form.submit();
		};

		function findCurrentTopPop(){
			return $('body').children('div.ui-dialog:visible').last().children('div.l_popwin');
		}
		
	    var popModule = function (url, initParam, width, height, title, closeFunc, closeEventListener, closeExeEventListener, moduleRefreshParam, moduleRequestCode, isModal, resizable,bodyOnly,id) {
	    	if(!L.isDomain && self!=top && top.L){
	    		top.L.popModule(url, initParam, width, height, title, closeFunc, closeEventListener, closeExeEventListener, moduleRefreshParam, moduleRequestCode, isModal, resizable,bodyOnly,id);
	    	}else{
	    		var p=$('<div class="l_popwin">');
		    	p.uniqueId();
		    	var $id=p[0].id;
		    	var ifa=null;
				if(bodyOnly){
					ifa=$('<div class="l_wpinnermodule">');
				}else{
	                ifa=$('<iframe style="margin:0;" height="100%" width="100%" frameborder="0">');
				}
				p.append(ifa);
				$('body').append(p);
	            p.dialog();
				var w = width - 0;
	            if (isNaN(w) || w==0) {
	                w = 700;
	            }
	            var $win=$(window);
	            if(w>$win.width()){
	                w=$win.width();
	            }
	            var h = height - 0;
	            if (isNaN(h) || h==0) {
	                h = 550;
	            }
	            if(h>$win.height()){
	                h=$win.height();
	            }
				p.dialog('option',{
	                width: w,
	                height: h,
	                title: title,
	                resizable: resizable ? true : false
	            });
	            p.find('.ui-dialog-titlebar-close').on('click', function () {
	                if(closeEventListener!=null){
	                    closeEventListener(ifa);
					}
	            });
	            p.on(L.consts.CLOSE_ONLY, function(){
	            	if(closeEventListener!=null){
	                    closeEventListener(ifa);
					}
					p.dialog('close');
	                return false;
	            });
	            p.on(L.consts.CLOSE_AND_EXECUTE, function(){
	            	if(closeExeEventListener!=null){
	                    closeExeEventListener(ifa);
					}
					p.dialog('close');
	                return false;
	            });
	            p.on('dialogclose', function () {
	            	if(closeFunc!=null){
	                    closeFunc(ifa);
					}
					p.remove();
	            	return false;
	            });
				if(bodyOnly){
	                if(initParam==null){
	                    initParam = {};
	                }
	                initParam.l_fragment=1;
	                initParam.baseid=$id;
	                initParam.l_onlybody=1;

	                $.loadFrameBodyOnly(L.getContextPath() + url,initParam,ifa,function(){
	                	p.perfectScrollbar(); 
	                });
	                var $body = $('body');
	                if(!$body.data('bodyonlypop')){
	                    $body.data('bodyonlypop',true);
	                    //body监听closeonly和closeexe事件，把内部最上层的popwin trigger
	                    $body.on(L.consts.CLOSE_ONLY, function(){
	                        findCurrentTopPop().trigger(L.consts.CLOSE_ONLY);
	                    });
	                    $body.on(L.consts.CLOSE_AND_EXECUTE,function(){
	                        findCurrentTopPop().trigger(L.consts.CLOSE_AND_EXECUTE);
	                    });
					}
	            }else{
	                ifa.on('load', function (event) {
	                    if(this.contentWindow.L){
	                        this.contentWindow.L.initEventByParent(function (event) {
	                            p.dialog('close');
	                        }, function (event) {
	                            p.trigger(L.consts.CLOSE_ONLY);
	                        }, function (event) {
	                            p.trigger(L.consts.CLOSE_AND_EXECUTE);
	                        });
	                    }
	                });
	                if (url.indexOf('?') == -1) {
	                    url += '?';
	                }
	                if(initParam!=null){
	                    url += L.urlObjectToString(initParam, '&', true);
	                }
	                ifa.attr('src', L.getContextPath() + url);
	            }
				pop(p, isModal);
	    	}
        };
		
		
		var pop = function ($dialog, isModal) {
			if (isModal === undefined) {
				isModal = true;
			}

			$dialog.dialog('option', 'modal', isModal);

			var w = $dialog.dialog('option', 'width');

			var win = $(window);

			var winW = win.width();
			if (w > winW) {
				$dialog.dialog('option', 'width', winW);
			}

			var h = $dialog.dialog('option', 'height');

			var winH = win.height();
			if (h > winH) {
				$dialog.dialog('option', 'height', winH);
			}
			if(self!=top && !L.isDomain){
				var position = {
						my: 'center',
						at: 'center',
						of: window.top,
						collision: 'fit',
						using: function(pos) {
							var topOffset = $(this).css(pos).offset().top;				
						    $(this).css('top', pos.top - 90);
						    $(this).css('left', pos.left);
						}
					};
					$dialog.dialog('option',  'position', position);	
			}else{
				//关闭弹窗后重新计算位置,不保留之前移动的位置
				var position = {
						my: 'center',
						at: 'center',
						of: window.top,
						collision: 'fit'
					};
					$dialog.dialog('option', 'position', position);	
			}

			
			$('body').mousewheel(bodyDisableMousewheelOnPop);
			$dialog.dialog('open');
			
			$dialog.perfectScrollbar();
		};

		var initEventByParent = function (closeFunc, closeOnlyFunc, closeAndExeFunc) {
			var $body = $('body');
			if (closeFunc != null) {
				$body.on('close', closeFunc);
			}
			if (closeOnlyFunc != null) {
				$body.on(L.consts.CLOSE_ONLY, closeOnlyFunc);
			}
			if (closeAndExeFunc != null) {
				$body.on(L.consts.CLOSE_AND_EXECUTE, closeAndExeFunc);
			}
		};
		var openMenu = function (menuId, param, subId, subLabel) {
			// 新窗口打开menu画面
			submit(L.getContextPath() + 'lpage/openmenu/' + menuId, false, param, true,true);
		};
        function isNeedSecureParam(url){
            return (url.indexOf('lpage/')==0)||(url.indexOf('/lpage/')==0)||(url.indexOf('ldownload.lmsp')!=-1);
        }
		var openModuleByURI = function (uri, label, param, subId, subLabel, isPost) {
			if (isPost === undefined) {
				isPost = true;
			}
			var title = '';
			if (label != null && label!== undefined) {
				title += label;
			}
			if (subLabel != null && subLabel!== undefined) {
				title += '--' + subLabel;
			}
			if (param == null) {
				param = {};
			}
			param.__title = title;

			submit(L.getContextPath() + uri, isPost, param, true,isNeedSecureParam(uri));

		};
		var afterFileUploaded = function (uploadedFileArr) {
			var flag = $.linkage.luploadpop.uploadIntervalFlag;
			if (flag != null) {
				clearInterval(flag);
				$.linkage.luploadpop.uploadIntervalFlag = null;
			}

			var $d = $('#lUploadFileDialog');
			$d.find('div.l_uploadfilepgbar').progressbar('value', 100);
			$d.off('dialogbeforeclose');
			if ($.linkage.luploadpop.uploadCallback != null) {
				$.linkage.luploadpop.uploadCallback(uploadedFileArr);
			}
			$d.dialog('close');
		};
		var ignoreSignKeys=["l_fragment", "l_onlybody", "baseid", "__s","l_sign","l_domain"];
		function appendLSign(o){
			var arr=[];
			$.each(o,function(k,v){
				if($.inArray(k,ignoreSignKeys)==-1&&!$.lNull(v)){
					if($.isArray(v)){
						var nv=[];
						$.each(v,function(idx,itm){
							if(!$.lNull(itm)){
								itm=itm+'';
								if(itm.length>0){
									nv.push(itm);
								}
							}
						});
						if(nv.length>0){
							nv.sort();
							arr.push(k+'='+nv.join(''));
						}
					}else{
                        v=v+'';
                        if(v.length>0){
							arr.push(k+'='+v);
                        }
					}

				}
			});
			if(arr.length>0){
                arr.sort();
                o.l_sign=$.hex_md5(BASE64.encoder(arr.join('')+L.cvn));
			}
			return o;
		}
		//根据securityLevel，1原样，2计算出l_sign附加到obj
		function secureTrans(objParam){
			if(objParam!=null){
                var lvl=L.config.securityLevel;
                if(lvl==1){

                }else{
					objParam=appendLSign(objParam);
				}
			}
			return objParam;
		}
		
		return {
			init: init,
			invoke: invoke,
			submit: submit,
            customWidget:customWidget,
			popModule: popModule,
			pop: pop,
			modules: {},
			setContextPath: setContextPath,
			getContextPath: getContextPath,
			alert:lAlert,
			alertArr: alertArr,
			confirm: lConfirm,
			confirmDelete: confirmDelete,
			consts: consts,
			deepCopy: deepCopy,
			traverseObj: traverseObj,
			exeFunc: exeFunc,
			urlObjectToString: urlObjectToString,
			d: debugOut,
			access: access,
			recursiveArr: recursiveArr,
			getParentWindow: getParentWindow,
			onModuleValueChange: onModuleValueChange,
			encodeHTML: encodeHTML,
			decodeHTML: decodeHTML,
			convertLMSPStringDate: convertLMSPStringDate,
			getDataDictValue: getDataDictValue,
			createFileUrl: createFileUrl,
			downloadFile: downloadFile,
			initEventByParent: initEventByParent,
			openMenu: openMenu,
			openModuleByURI: openModuleByURI,
			downloadLWithVirtualDir: downloadLWithVirtualDir,
			downloadLCustom: downloadLCustom,
			afterFileUploaded: afterFileUploaded,
			convertDataForTransfer:convertDataForTransfer,
			secureTrans:secureTrans,
            isNeedSecureParam:isNeedSecureParam
		};
	})();
	L = lmsp;
	L.config = {
			debug: false,
			doPoll: true,
			showWatermark:false,
			pollIntervalMS: 5000,
			processInfo: null,
			momUri: 'lpage/workshop/lmomManage',
			uploadBlockSize: 1024 * 300,
			uploadHtml5RetryInterval: 1000,
			uploadHtml5RetryTimes: 300,
			logoShowHome:true,
			logoHomeUrl:'lpage/'
	};
	function updateAllScroll() {

		$(".ps-container").perfectScrollbar('update');
		if(L.config.showWatermark && !L.config.expandHeight){			
			$.watermark();
		}
	}

	function calContentHeight(ctn,contentH){
        var ptop=ctn.css('padding-top');
        var ntop=0;
        if(ptop&&ptop.length>0){
            ntop=ptop.substring(0,ptop.length-2)-0;
        }
        var pbottom=ctn.css('padding-bottom');
        var nbottom=0;
        if(pbottom&&pbottom.length>0){
            nbottom=pbottom.substring(0,pbottom.length-2)-0;
        }
        return contentH-ntop-nbottom;
	}


    function refreshLayoutFixSize(){
        var td=$('td.l_leftmenu');
        var contentH= $(window).height()-$('div.l_hmenus').height();
        if(td.length>0&&td.width()>0){
            td.height(0);

            var minH=calContentHeight(td,contentH);

            if(L.config.expandHeight){
            	td.height(minH);
            	td.children('div.tdleftdiv').height(minH).perfectScrollbar('update');
			}else{
                if(td.height()<minH){
                    td.height(minH);
                }
			}
        }
        if(L.config.expandHeight){
        	var rtd= $('div.l_contentdiv');
            rtd.height(calContentHeight(rtd,contentH));
		}


        var cdiv=$('div.l_contentdiv_full');
        var tbl=cdiv.children('table.l_maincontent');
        var ifa1=cdiv.children('#ifa1');
        if(cdiv.length>0&&(tbl.length>0||ifa1.length>0)){
            var breadH=0;
            var bread=cdiv.children('div.l_breadcrumb');
            if(bread.length>0){
            	breadH=bread.outerHeight();
			}
            var ptop=cdiv.css('padding-top');
            var ntop=0;
            if(ptop&&ptop.length>0){
                ntop=ptop.substring(0,ptop.length-2)-0;
            }
            var pbottom=cdiv.css('padding-bottom');
            var nbottom=0;
            if(pbottom&&pbottom.length>0){
                nbottom=pbottom.substring(0,pbottom.length-2)-0;
            }
            var tableRealHeight=contentH-ntop-nbottom-breadH;
            if(tbl.length>0){
                tbl.data('h',tableRealHeight);
				resizeElements(tbl);
			}else{
            	//内嵌外部页面，会莫名多出几像素高度
                ifa1.height(tableRealHeight-5);
			}


		}

    }
    function resizeElements($parent){
		$parent.find('.l_table').ltable('resizeHeight').ltable('adjustHeadWidth');
	}
	function findPanelInnerContainer(panel){
    	//直接容器
		var sub=panel.children('table.l_maincontent');
		if(sub.length==0){
			//bodyonly的子模块的容器
			sub=panel.children('div.l_wpcontent').children('div.l_wpinnermodule').children('table.l_maincontent');
		}
		return sub;
	}
    function applyFixHeight(tbl,tableRealHeight,parents){
        //计算100%的tr的行高
        var trs=tbl.children('tbody').children('tr');
        if(trs.length==0){
            trs=tbl.children('tr');
        }
        var fixtr=null;
        var fixh=0;
        trs.each(function(idx,tr){
            var $tr=$(tr);
            var datah=$tr.data('h');
            if(datah){
                datah=datah+'';
                if(datah=='100%'){
                    fixtr=$tr;
                }else if(datah.indexOf('%')==-1){
                    fixh+=$tr.outerHeight();
                }
            }
        });
		if(fixtr&&parents.filter(fixtr).length>0){
        	var fixtds=fixtr.children('td');
			var fixtdh=tableRealHeight-fixh;
			//如果td里有tab，固定高度
			fixtds.each(function(idx,td){
				var $td=$(td);
				var ptoptd=0;
				var pbtmtd=0;
				var tmp=$td.css('padding-top');
				if(tmp&&tmp!='0'){
					ptoptd=tmp.substring(0,tmp.length-2)-0;
				}
				tmp=$td.css('padding-bottom');
                if(tmp&&tmp!='0'){
                    pbtmtd=tmp.substring(0,tmp.length-2)-0;
                }
                var fixtdconth=fixtdh-ptoptd-pbtmtd;
                $td.height(fixtdconth);
				var tabs= $td.children('.l_tab');
				var viewstacks=$td.children('.l_viewstack');
				var sub=null;
				var subH=0;
				if(tabs.length>0){
					tabs.each(function(tabIdx,tab){
                        var $tab=$(tab);
                        var tabpanels= $tab.children('.ui-tabs-panel');
                        var tabpanelH= fixtdconth-$tab.children('.ui-tabs-nav').outerHeight();
                        tabpanels.each(function(tpidx,pl){
                        	var tabpanel=$(pl);
                        	if(parents.filter(tabpanel).length>0){
                                tabpanel.height(tabpanelH);
                                sub=findPanelInnerContainer(tabpanel);
								subH=tabpanelH;
							}

						});

					});
				}else if(viewstacks.length>0){
                    viewstacks.each(function(vsidx,vs){
                        var $vs=$(vs);
                        var panels= $vs.children('div');
                        panels.each(function(tpidx,pl){
                            var panel=$(pl);
                            if(parents.filter(panel).length>0){
                                panel.height(fixtdconth);
                                sub=findPanelInnerContainer(panel);
                                subH=fixtdconth;
                            }

                        });

                    });
                }else{
                    sub=findPanelInnerContainer($td);
                    subH=fixtdconth;
				}
				if(sub&&sub.length>0){
                    sub.each(function(subIdx,s){
                    	var $s=$(s);
                    	if(parents.filter($s).length>0){
                            $s.height(subH);
                            applyFixHeight($s,subH,parents);
						}

					});
				}
			});
        }
	}
	$(window).resize(function () {
		updateAllScroll();
		refreshLayoutFixSize();
        $("div.l_hmenus").hmenus('resetTopMenus');
		if(L.config.showWatermark){			
			$.watermark();
		}
	}).on('load', updateAllScroll);
    $(function () {
        var contentdiv= $('body').find('div.l_contentdiv');
        if(L.config.expandHeight){
        	contentdiv.css({'overflow-y':'auto','padding-top':'0px','padding-bottom':'0px'});
		}

        //download file form
        var downfilearr=['<form id="lDownloadFileForm" method="post" action="'+L.getContextPath()+'ldownload.lmsp" target="_blank" style="display:none;">'];
        downfilearr.push('<input type="hidden" name="l_sign"/><input type="hidden" name="ids"/><input type="hidden" name="dtos"/><input type="hidden" name="idf"/><input type="hidden" name="df"/><input type="hidden" name="p"/></form>');
        contentdiv.before(downfilearr.join(''));

        //tooltip div
        contentdiv.before('<div class="tooltips"><div class="arrow arrow-border"></div><div class="arrow arrow-bg"></div></div>');

        //sub toolbar div
        if(L.isSubToolbar){
            var subtoolbararr=['<div class="sub_toolbar"><a class="l_button  l_wpbutton  l_sub_favorite" href="javascript:void(0)"><span>收藏夹</span></a>'];
            subtoolbararr.push('<a class="l_button  l_wpbutton  l_sub_close" href="javascript:void(0)"><span>关闭</span></a></div>');
            contentdiv.before(subtoolbararr.join(''));
        }
        //创建收藏夹层div
        var favarr=['<div id="favorite" class="favorite" tabindex="0"><table>'];
        favarr.push("<tr><td style='width:70px;height:0px'></td><td style='width:100%'></td></tr>");
        if(L.currentMenuInfo){
            favarr.push("<tr style='height: 45px'><td style='width:70px;vertical-align: middle;'><div class='favorite_label'>菜单名称</div></td><td style='width:100%;vertical-align: middle;'>");
            favarr.push('<div  class="l_form_control" style="width:175px;padding: 5px"><input type="text" class="l_textinput l_wpformitem" id="favoritepagename" data-defalut-title="'+L.currentMenuInfo.title+'"></div></td></tr>');
            favarr.push("<tr><td colSpan='2' align='center' style='height:30px;line-height: 25px;'><a class='l_button l_wpbutton add_favorite_list' href='javascript:void(0)' data-id='");
            favarr.push(L.currentMenuInfo.id+"' data-url='"+L.currentMenuInfo.url+"'>收藏</a><a class='l_button l_wpbutton cancel_favorite_panel' href='javascript:void(0)'>取消</a></td></tr>");
        }
        favarr.push("<tr class='favorite_histr'><td colSpan='2' style='padding-left: 5px'>历史收藏</td></tr>");
        favarr.push("<tr><td colSpan='2'><div class='favorite_list'></div></td></tr></table></div>");
        contentdiv.before(favarr.join(''));

        L.init();

		//收藏夹处理

        var favoriteHandle = function(param){
			L.invoke('lmsp.lpage.LPageFavoriteBo', param, function (result) {
				if(result!=null){					
					var favoriteMenus = result.favoriteMenus;
					if(favoriteMenus){
						var favoriteDiv = "<ui>";
						$.each(favoriteMenus,function(idx,item){
							href = L.getContextPath() + "lpage/openmenu/"+ item.menuId;
							favoriteDiv+="<li><div style='display:inline-block;width:90%;'><a href='"+href+"'>"+item.menuName
							+"</a></div><div style='width:10%;display:inline-block;text-align:center' data-id='"+item.menuId+"' data-name='"+item.menuName+"' class='l_icononly_button del_favorite'><span class='favorite_linedel'></span></div></li>";
						});
						favoriteDiv += "</ui>";
						$('.favorite_list').html(favoriteDiv);

						$('.del_favorite').on('click',function(e){
							var menuId = $(this).data("id");
							var menuName = $(this).data("name");
							var param = {type:2,menuName:menuName,menuId:menuId};
							favoriteHandle(param);
						});
					}
				}
			});
		};
		//初始查询
		favoriteHandle({});
		if($('#favoritepagename')){			
			$('#favoritepagename').val($('#favoritepagename').data('defalutTitle'));
		}
		if($('.l_sub_favorite')){
			$('.l_sub_favorite').on('click',function(e){
				$('#favorite').toggle(100);
			});
		}
		$('.add_favorite_list').on('click',function(e){
			//收藏处理
			var name = $('#favoritepagename').ltextinput('getValue');
			var menuId = $('.add_favorite_list').data("id");
			var param = {type:1,menuName:name,menuId:menuId};
			favoriteHandle(param);
		});

        $('#lFavBtn').on('click',function(e){
			$('#favorite').toggle(100);
		});
		$('.cancel_favorite_panel').on('click',function(e){
			$('#favorite').toggle(100);
		});

		$('.l_sub_close').on('click',function(e){
//			window.open('','_parent',''); 
			window.close();  
		});

        refreshLayoutFixSize();
		$('body').on('llayoutchange','div.l_contentdiv_full>table.l_maincontent',function(evt){
			var tbl=$(evt.currentTarget);
			var h=tbl.data('h');
			if(h){
				h=h-0;
				tbl.height(h);
			}else{
				h=tbl.height();
			}
			applyFixHeight(tbl,h,$(evt.target).parentsUntil(tbl));
        }).on('llayoutchange','div.ui-dialog:visible>div.l_popwin',function(evt){
			var popwin=$(evt.currentTarget);
			var tbl=popwin.children('table.l_maincontent');
            if(tbl.length>0){
                applyFixHeight(tbl,popwin.height(),$(evt.target).parentsUntil(tbl));
			}

        });
		if(L.config.showWatermark){			
			$.watermark();
		}
		$('#lPageLoadingMask').hide();
	});
})(jQuery);

(function () {
	var dm = {};
	var bindKeyFunc = {};

	function getByKeys(obj, keys) {

		if (keys.length == 1) {
			return obj[keys[0]];
		} else {
			var rv = {};
			$.each(keys, function (idx, key) {
				rv[key] = obj[key];
			});
			return rv;
		}

	}

	function recursiveDataModel(datamodel, keyArr, value) {
		var rv = {
				changed: false,
				old: null
		};
		if (keyArr != null && datamodel != null) {
			var len = keyArr.length;
			if (len > 0) {
				if (len == 1) {
					var keys = keyArr[0].split(' ');
					if ($.isArray(datamodel)) {
						// 结果是集合，此时不能赋值
						var old = [];
						$.each(datamodel, function (idx, obj) {
							old.push(getByKeys(obj, keys));
						});
						rv.old = old;
					} else {
						// 结果是object
						rv.old = getByKeys(datamodel, keys);
						if (keys.length == 1 && value !== undefined && value !== rv.old) {
							// 可以赋值

							datamodel[keys[0]] = value;
							rv.changed = true;

						}
					}

				} else {
					var key = keyArr.shift();
					if (datamodel[key] == null) {
						if (value !== undefined) {
							datamodel[key] = {};
						}

					}
					datamodel = datamodel[key];

					rv = recursiveDataModel(datamodel, keyArr, value);

				}
			}
		}
		return rv;

	}

	var setDM = function (key, value, datamodel) {
		if (datamodel === undefined) {
			datamodel = dm;
		}
		if(value){
			for(var k in value){
				if(k.indexOf("_JSON")>-1){
					//参数key是以_JSON后缀的，JSON格式的对象参数，转换成对象参数。多用于初始参数为对象类型的参数适用
					var newK = k.substr(0,k.indexOf("_JSON"));
					value[newK]=$.parseJSON(value[k]);
				}
			}
		}

		if (key != null) {
			var keyArr = key.split('.');
			var setRV = recursiveDataModel(datamodel, keyArr, value);
			if (setRV.changed) {
				// 先触发key对应的func
				if (bindKeyFunc[key] != null) {
					$.each(bindKeyFunc[key], function (idx, func) {
						func(value);
					});
				}
				var keyPre = key + '.';
				$.each(bindKeyFunc, function (k, v) {
					if (k.indexOf(keyPre) == 0) {

						var vv = recursiveDataModel(datamodel, k.split('.')).old;
						$.each(v, function (idx, func) {

							func(vv);
						});
					}
				});
			}
		}
	};
	var getDM = function (key, datamodel) {
		if (datamodel === undefined) {
			datamodel = dm;
		}
		if (key == null) {
			return null;
		}
		return recursiveDataModel(datamodel, key.split('.')).old;

	};
	var bindDM = function (key, func) {

		if (bindKeyFunc[key] == null) {
			bindKeyFunc[key] = [];

		}
		bindKeyFunc[key].push(func);
		var v = getDM(key);

		if (v !== undefined) {
			func(v);
		}else{
			func(null);
		}

	};

	L.datamodel = {
			set: setDM,
			get: getDM,
			bind: bindDM
	};
})();

//监听div大小变化
(function($, h, c) {
	var a = $([]),
	e = $.resize = $.extend($.resize, {}),
	i,
	k = "setTimeout",
	j = "resize",
	d = j + "-special-event",
	b = "delay",
	f = "throttleWindow";
	e[b] = 250;
	e[f] = true;
	$.event.special[j] = {
			/**
			 * 初始化事件处理器 - this指向元素
			 * setup: function (data, namespaces, eventHandle) {
			 * @param data 附加的数据
			 * @param namespaces 事件类型命名空间
			 * @param  eventHandle 回调函数
			 */
			setup: function() {
				if (!e[f] && this[k]) {
					return false;
				}
				var l = $(this);
				a = a.add(l);
				$.data(this, d, {
					w: l.width(),
					h: l.height()
				});
				if (a.length === 1) {
					g();
				}
			},
			/**
			 * 卸载事件处理器 - this指向元素
			 * teardown: function (namespaces)
			 * @param 事件类型命名空间
			 */
			teardown: function() {
				if (!e[f] && this[k]) {
					return false;
				}
				var l = $(this);
				a = a.not(l);
				l.removeData(d);
				if (!a.length) {
					clearTimeout(i);
				}
			},
			add: function(l) {
				if (!e[f] && this[k]) {
					return false;
				}
				var n;
				function m(s, o, p) {
					var q = $(this),
					r = $.data(this, d);
					if(r){
                        r.w = o !== c ? o: q.width();
                        r.h = p !== c ? p: q.height();
                    }

					n.apply(this, arguments);
				}
				if ($.isFunction(l)) {
					n = l;
					return m;
				} else {
					n = l.handler;
					l.handler = m;
				}
			}
	};
	function g() {
		i = h[k](function() {
			a.each(function() {
				var n = $(this),
				m = n.width(),
				l = n.height(),
				o = $.data(this, d);
				if (m !== o.w || l !== o.h) {
					n.trigger(j, [o.w = m, o.h = l]);
				}
			});
			g();
		},
		e[b]);
	}
})(jQuery, this);


jQuery.watermark = function(settings,target) {
	$('.mask_div').remove();
	if(target==null){
		target = $('body');
	}
	
    //默认设置
    var defaultSettings={
        watermark_txt:"LMSP",
        watermark_x:5,//水印起始位置x轴坐标
        watermark_y:5,//水印起始位置Y轴坐标
        watermark_rows:0,//水印行数
        watermark_cols:0,//水印列数
        watermark_x_space:40,//水印x轴间隔
        watermark_y_space:40,//水印y轴间隔
        watermark_color:'#000000',//水印字体颜色
        watermark_alpha:0.2,//水印透明度
        watermark_fontsize:'18px',//水印字体大小
        watermark_font:'微软雅黑',//水印字体
        watermark_width:80,//水印宽度
        watermark_height:40,//水印长度
        watermark_angle:15//水印倾斜度数
    };
    //采用配置项替换默认值，作用类似jquery.extend
    if(arguments.length===1&&typeof arguments[0] ==="object" )
    {
        var src=arguments[0]||{};
        for(key in src)
        {
            if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
                continue;
            else if(src[key])
                defaultSettings[key]=src[key];
        }
    }

    var oTemp = document.createDocumentFragment();

    //获取页面最大宽度
    var page_width = Math.max(target[0].scrollWidth,target[0].clientWidth);
    var cutWidth = page_width*0.0150;
    var page_width=page_width-cutWidth;
    //获取页面最大高度
    var page_height = Math.max(target[0].scrollHeight,target[0].clientHeight)-10;
    if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
        defaultSettings.watermark_cols = parseInt((page_width-defaultSettings.watermark_x+defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
    }
    
    var x;
    var y;
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

            var mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.className = 'mask_div';
            mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
            //设置水印div倾斜显示
            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "absolute";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            mask_div.style.pointerEvents='none';//pointer-events:none  让水印不遮挡页面的点击事件
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = "center";
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        };
    };
    target.append(oTemp);
};
