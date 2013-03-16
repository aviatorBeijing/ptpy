/*pub-1|2012-10-08 10:39:00*/if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());(function(){var D=document;var C=(function(){var E=false,F=location.hash;if(F.indexOf("#")==0){F=F.substr(1);E=("&"+F+"&").indexOf("&log=1&")>-1}return E})();window.TOP=window.TOP||{mix:function(G,H,E){for(var F in H){if(E||typeof G[F]=="undefined"){G[F]=H[F]}}return G},namespace:function(F,G,E){if(typeof F=="string"){F=A(F)}return TOP.mix(F,G,E)},guid:function(E){E=E||"t";return E+(Math.random()*(1<<30)).toString(16).replace(".","")},log:function(F,E){E=E||"log";if(C&&(typeof console!="undefined")){console[E]&&console[E](F+" ("+B()+")")}}};function A(I){var J=TOP,F=I?I.split("."):[];for(var H=0,E=F.length;H<E;H++){var G=F[H];if(!J[G]){J[G]={}}J=J[G]}return J}function B(){var F=location.pathname,E=F.lastIndexOf("/");if(E==-1){return F}else{return F.substr(E+1)}}})();(function(){TOP.namespace("lang",{forEach:function(B,A){if(!B||!A){return }if(B.forEach){B.forEach.call(B,A)}else{for(var D=0,C=B.length;D<C;D++){A(B[D])}}},trim:function(A){return A.replace(/^\s*|\s*$/g,"")},param:function(E,B,A){if((!TOP.lang.isPlainObject(E))&&(typeof E!="string")){return""}B=B||"&";A=A||"=";if(typeof E=="string"){E=TOP.lang.unparam(E,B,A)}var D=[];for(var C in E){var F=E[C];if(F!==null&&typeof F!=="undefined"){D.push(encodeURIComponent(C)+A+encodeURIComponent(F))}}D.sort();return D.join(B)},unparam:function(G,B,A){B=B||"&";A=A||"=";var F={},D=G.split(B),C,E;for(C=0;C<D.length;C++){E=TOP.lang.trim(D[C]).split(A);if(E&&(E.length==2)){F[decodeURIComponent(E[0])]=decodeURIComponent(E[1])}}return F},isString:function(A){return typeof A==="string"},isUndefined:function(A){return typeof A==="undefined"},isFunction:function(A){return typeof A==="function"},isPlainObject:function(A){return A&&Object.prototype.toString.call(A)==="[object Object]"&&"isPrototypeOf" in A}})})();(function(){var C=navigator.userAgent,E="",A="mobile",G=E,L=E,H,K=[6,9],N,J,M="{{version}}",I="<!--[if IE "+M+"]><s></s><![endif]-->",B=document.createElement("div"),O,D={},F=function(P){var Q=0;return parseFloat(P.replace(/\./g,function(){return(Q++===0)?".":""}))};B.innerHTML=I.replace(M,"");O=B.getElementsByTagName("s");if(O.length>0){L="ie";D[G="trident"]=0.1;if((H=C.match(/Trident\/([\d.]*)/))&&H[1]){D[G]=F(H[1])}for(N=K[0],J=K[1];N<=J;N++){B.innerHTML=I.replace(M,N);if(O.length>0){D[L]=N;break}}}else{if((H=C.match(/AppleWebKit\/([\d.]*)/))&&H[1]){D[G="webkit"]=F(H[1]);if((H=C.match(/Chrome\/([\d.]*)/))&&H[1]){D[L="chrome"]=F(H[1])}else{if((H=C.match(/\/([\d.]*) Safari/))&&H[1]){D[L="safari"]=F(H[1])}}if(/ Mobile\//.test(C)){D[A]="apple"}else{if((H=C.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))){D[A]=H[0].toLowerCase()}}}else{if((H=C.match(/Presto\/([\d.]*)/))&&H[1]){D[G="presto"]=F(H[1]);if((H=C.match(/Opera\/([\d.]*)/))&&H[1]){D[L="opera"]=F(H[1]);if((H=C.match(/Opera\/.* Version\/([\d.]*)/))&&H[1]){D[L]=F(H[1])}if((H=C.match(/Opera Mini[^;]*/))&&H){D[A]=H[0].toLowerCase()}else{if((H=C.match(/Opera Mobi[^;]*/))&&H){D[A]=H[0]}}}}else{if((H=C.match(/MSIE\s([^;]*)/))&&H[1]){D[G="trident"]=0.1;D[L="ie"]=F(H[1]);if((H=C.match(/Trident\/([\d.]*)/))&&H[1]){D[G]=F(H[1])}}else{if((H=C.match(/Gecko/))){D[G="gecko"]=0.1;if((H=C.match(/rv:([\d.]*)/))&&H[1]){D[G]=F(H[1])}if((H=C.match(/Firefox\/([\d.]*)/))&&H[1]){D[L="firefox"]=F(H[1])}}}}}}D.core=G;D.shell=L;D._numberify=F;TOP.ua=D})();(function(){var G=TOP.lang;var F=document;var C="";TOP.namespace("dom",{get:function(H,J){var I=TOP.dom.query(H,J);if(I.length){I=I[0]}else{I=null}return I},query:function(H,J){if(typeof H!=="string"){return[H]}J=J||F;var I=[],K,L=H.substr(0,1);if(L=="#"){var K=F.getElementById(H.substr(1));if(K){I.push(K)}}else{if(L=="."){I=B(H.substr(1),J)}else{I=J.getElementsByTagName(H)}}return I},hasClass:function(H,I){var K=TOP.dom.get(H);if(!K){return false}var J=" "+K.className+" ";return J.indexOf(I)>-1},addClass:function(H,I){var J=TOP.dom.get(H);if(!J){return false}if(TOP.dom.hasClass(J,I)){return }else{J.className=G.trim(J.className+" "+I)}},removeClass:function(H,K){var L=TOP.dom.get(H),I;if("undefined"===K){I=""}else{var J=new RegExp("\\s*"+K+"\\s*");I=L.className.replace(J,"")}if(L.className!==I){L.className=I}},addStyleSheet:function(H,J){var I;if(J&&(J=J.replace("#",C))){I=TOP.dom.get("#"+J)}if(I){return }I=F.createElement("style");if(J){I.id=J}TOP.dom.get("head").appendChild(I);if(I.styleSheet){I.styleSheet.cssText=H}else{I.appendChild(F.createTextNode(H))}},style:function(H,J,K){var I=arguments.length;if(I===2){if(typeof J==="string"){return A(H,J)}else{return E(H,J)}}return E(H,J,K)}});var B=F.getElementsByClassName?function(H,I){return I.getElementsByClassName(H)}:function(I,J){var H=J.getElementsByTagName("*");H=D(H,function(K){return TOP.dom.hasClass(K,I)});return H};function A(H,I){var J=TOP.dom.get(H);return J.style[I]}function E(H,J,L){var K=TOP.dom.get(H),I=arguments.length;if(!K){return undefined}if(I===3){K.style[J]=L;return undefined}for(var M in J){E(K,M,J[M])}return undefined}function D(I,L){var J=[];for(var K=0,H=I.length;K<H;K++){var M=I[K];if(L(M)){J.push(M)}}return J}})();(function(){var A=TOP.log,B=TOP.lang;TOP.namespace("io",{standardxdr:function(H,D,F,C){H=H||"get";var E=new XMLHttpRequest(),G;E.onreadystatechange=function(){if(E.readyState==4){if(E.status==200){if(G){clearTimeout(G)}C&&C(JSON.parse(E.responseText))}}};if(typeof F!="string"){F=B.param(F)}if(H.toLowerCase()=="get"){D=D+"?"+F;F=null}E.open(H,D,true);E.setRequestHeader("Content-type","application/x-www-form-urlencoded");E.withCredentials="true";E.send(F);G=setTimeout(function(){E.abort();A("xdr failure","warning")},5000)}})})();(function(){var H=TOP.lang;var E=document,B=undefined,G={};var F="http://a.tbcdn.cn/apps/top/x/kio.swf",C="top-xdr";function D(J,M,I){if(E.body){var K='<object id="'+C+'" type="application/x-shockwave-flash" data="'+J+'" width="0" height="0" ><param name="movie" value="'+J+'" /><param name="FlashVars" value="yid='+M+"&uid="+I+'&host=TOP.io.flashxdr" /><param name="allowScriptAccess" value="always" /></object>';var L=E.createElement("div");L.style.position="absolute";L.style.left="1px";L.style.top="1px";E.body.insertBefore(L,E.body.firstChild);L.innerHTML=K;D=function(){return }}else{setTimeout(function(){D(F,C,1)},50)}}function A(M,K,L,I){var J=this;if(!(J instanceof A)){return new A(M,K,L,I)}J.method=M;J.url=K;J.params=L;J.cb=I;J.send()}A.prototype={send:function(){var I=this;if(!B){setTimeout(function(){I.send()},100);return }I.uid=TOP.guid();G[I.uid]=I;var J=window.location.href;if(J.indexOf("#")>0){J=J.substr(0,J.indexOf("#"))}B.send(I.url,{id:I.uid,uid:I.uid,method:I.method.toUpperCase(),data:H.param(I.params),headers:{"Content-type":"application/x-www-form-urlencoded","Flash-referer":J}})},abort:function(){B.abort(this.uid)},_xdrResponse:function(K,L){var I=this;var J;I.responseText=decodeURI(L.c.responseText);switch(K){case"success":I.cb&&I.cb(JSON.parse(I.responseText));J={status:200,statusText:"success"};delete G[L.id];break;case"abort":delete G[L.id];break;case"timeout":case"transport error":case"failure":J={status:500,statusText:K};delete G[L.id];break}}};A.applyTo=function(L,O,K){var J=O.split(".").slice(1),N=A;for(var M=0,I=J.length;M<I;M++){N=N[J[M]]}N.apply(null,K)};A.xdrReady=function(){B=E.getElementById(C)};A.xdrResponse=function(I,K,L){var J=G[K.uid];J&&J._xdrResponse(I,K,L)};A.init=function(){D(F,C,1)};TOP.namespace("io",{flashxdr:A})})();(function(){var B=TOP.log,E=TOP.lang;var D=document,A=document.getElementsByTagName("head")[0];TOP.namespace("io",{getStyle:function(G){var H=D.createElement("link"),F=TOP.guid();H.href=G;H.rel="stylesheet";H.id=F;A.appendChild(H);return H},getScript:function(H,F){var I=D.createElement("script"),G=TOP.guid();I.src=H;I.id=G;I.charset="utf-8";F&&C(I,F);A.appendChild(I);return I},jsonp:function(H,J,F){var G=TOP.guid(),I="TOP.io.jsonpCbs."+G,H=H+"?callback="+I;if(J){H=H+"&"+E.param(J)}if(H.length>2000){B("JSONP only support a maximum of 2000 bytes of input.","error");return }TOP.io.jsonpCbs[G]=function(K){F&&F(K);delete TOP.io.jsonpCbs[G]};TOP.io.getScript(H)},jsonpCbs:{},get:function(G,H,F){TOP.io.xdr("get",G,H,F)},post:function(G,H,F){TOP.io.xdr("post",G,H,F)},xdr:function(I,G,H,F){},isSupportXdr:(function(){var F=false;if(typeof XMLHttpRequest!="undefined"){var G=new XMLHttpRequest();if(G&&"withCredentials" in G){F=true}}return F})()});function C(G,F){var H=F;F=function(){H&&H();G.parentNode.removeChild(G)};if(D.addEventListener){G.addEventListener("load",F,false)}else{G.onreadystatechange=function(){var I=G.readyState;if(/loaded|complete/i.test(I)){F()}}}}if(TOP.io.isSupportXdr){TOP.io.xdr=TOP.io.standardxdr}else{TOP.io.flashxdr.init();TOP.io.xdr=TOP.io.flashxdr}})();(function(){var E=document,A=24*60*60*1000,C=encodeURIComponent,D=decodeURIComponent;function B(F){return(typeof F=="string")&&F!==""}TOP.namespace("cookie",{get:function(H){var G,F;if(B(H)){if((F=String(E.cookie).match(new RegExp("(?:^| )"+H+"(?:(?:=([^;]*))|;|$)")))){G=F[1]?D(F[1]):""}}return G},set:function(H,M,F,I,K,J){var L=String(C(M)),G=F;if(typeof G==="number"){G=new Date();G.setTime(G.getTime()+F*A)}if(G instanceof Date){L+="; expires="+G.toUTCString()}if(B(I)){L+="; domain="+I}if(B(K)){L+="; path="+K}if(J){L+="; secure"}E.cookie=H+"="+L},remove:function(F,G,I,H){TOP.cookie.set(F,"",-1,G,I,H)}})})();(function(){var F=TOP.dom,A=TOP.fields,B=TOP.ua;var E=window,D=document;TOP.namespace("",{getMainDomain:function(I){var I=I||location.host;if(I.indexOf(":")>-1){I=I.split(":")[0]}var H=I.split(".");if(H.length<=2){return H.join(".")}else{idx=-2;if(" com net org ".indexOf(" "+H[H.length-2]+" ")>-1){idx=-3}return H.slice(idx).join(".")}},ready:function(H){if(D.readyState=="complete"){H(TOP)}else{G.push(H)}},closeWindow:function(H){if(!B.ie){return H.close()}else{if(6<B.ie){H.location.href="";H.open("","_self","");H.close()}else{H.opener=null;H.close()}}}});var G=[];function C(){var H=G;G=[];while(H.length){H.shift()(TOP)}}(function(){var H=D.documentElement.doScroll;eventType=H?"onreadystatechange":"DOMContentLoaded";if(D.addEventListener){D.addEventListener(eventType,C,false);E.addEventListener("load",C,false)}else{D.attachEvent(eventType,function(){if(D.readyState=="complete"){C()}});E.attachEvent("onload",C)}})()})();(function(){var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";TOP.namespace("base64",{decode:function(E){var C="";var L,J,H;var K,I,G,F;var D=0;E=E.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(D<E.length){K=A.indexOf(E.charAt(D++));I=A.indexOf(E.charAt(D++));G=A.indexOf(E.charAt(D++));F=A.indexOf(E.charAt(D++));L=(K<<2)|(I>>4);J=((I&15)<<4)|(G>>2);H=((G&3)<<6)|F;C=C+String.fromCharCode(L);if(G!=64){C=C+String.fromCharCode(J)}if(F!=64){C=C+String.fromCharCode(H)}}C=B(C);return C}});function B(C){var D="";var E=0;var F=c1=c2=0;while(E<C.length){F=C.charCodeAt(E);if(F<128){D+=String.fromCharCode(F);E++}else{if((F>191)&&(F<224)){c2=C.charCodeAt(E+1);D+=String.fromCharCode(((F&31)<<6)|(c2&63));E+=2}else{c2=C.charCodeAt(E+1);c3=C.charCodeAt(E+2);D+=String.fromCharCode(((F&15)<<12)|((c2&63)<<6)|(c3&63));E+=3}}}return D}})();(function(){TOP.namespace("fields",{sdkUrl:"http://a.tbcdn.cn/apps/top/x/sdk.js",apiUrl:"http://gw.api.taobao.com/widget",noSignApiUrl:"https://eco.taobao.com/widget",authUrl:"https://oauth.taobao.com/authorize",ie6AuthUrl:"http://container.api.taobao.com/container",logoutUrl:"https://oauth.taobao.com/logoff",uiUrl:"http://a.tbcdn.cn/apps/top/x/ui",noSignUiUrl:"http://gw.api.taobao.com/widget/ui",xdFlashUrl:"http://a.tbcdn.cn/apps/top/x/postmsg.swf",swfobjectUrl:"http://a.tbcdn.cn/apps/top/x/swfobject.js",appKey:null,channelUrl:null,isMainFrame:(function(){return window==window.top})(),mainFrame:window.top,frameId:null,iframes:[],user:null});if(window.location.href.indexOf(TOP.fields.uiUrl)==-1&&window.location.href.indexOf(TOP.fields.noSignUiUrl)==-1){TOP.fields.isMainFrame=true}})();(function(){var D=TOP.log,G=TOP.dom,A=TOP.fields;TOP.namespace("ev",{add:function(O,N,M,L){if(typeof O=="string"){var K=G.query(O);if(K.length){for(var J=0,I=K.length;J<I;J++){B(K[J],N,M,L)}}else{E(O,N,M,L)}}else{B(O,N,M,L)}},remove:function(N,M,L){if(typeof N=="string"){var K=G.query(N);if(K.length){for(var J=0,I=K.length;J<I;J++){H(K[J],M,L)}}else{F(N,M,L)}}else{H(N,M,L)}},fire:function(N,K,L,M){if(C[N]&&C[N][K]){var J=C[N][K];for(var I=J.length-1;I>=0;I--){J[I](L)}}TOP.ev.afterFire(N,K,L,M)},afterFire:function(L,I,J,K){},stopPropagation:function(I){if(!I){return }if(I.stopPropagation){I.stopPropagation()}I.cancelBubble=true},preventDefault:function(I){if(!I){return }if(I.preventDefault){I.preventDefault()}else{I.returnValue=false}}});TOP.ev.on=TOP.ev.add;function B(M,L,K,J){if(J){var I=K;K=function(N){I.call(this,N);H(M,L,K)}}window.addEventListener?M.addEventListener(L,K,false):M.attachEvent("on"+L,K)}function H(K,J,I){window.addEventListener?K.removeEventListener(J,I,false):K.detachEvent("on"+J,I)}var C={};function E(M,L,K,J){if(J){var I=K;K=function(N){I.call(this,N);F(M,L,K)}}if(!C[M]){C[M]={}}if(!C[M][L]){C[M][L]=[]}C[M][L].unshift(K)}function F(N,M,L){if(!C[N]){return }if(!C[N][M]){return }var K=C[N][M];for(var J=0,I=K.length;J<I;J++){if(K[J]==L){K.splice(J,1);return }}}})();(function(){var B=TOP.ua,F=TOP.io,C=TOP.ev,E=TOP.lang,A=TOP.fields;TOP.namespace("xd",{init:function(){if(window.postMessage){TOP.xd.html5Init()}else{TOP.xd.flashInit()}},postMessage:function(G,H){},html5Init:function(){TOP.xd.postMessage=function(H,I){I=I||window.parent;I.postMessage(H,"*")};C.afterFire=D;var G=function(I){var H=I.data;if(window.postMessage&&B.ie){H=JSON.parse(H)}C.fire(H.name,H.ev,H.data,I.source)};C.add(window,"message",G)},flashInit:function(){C.afterFire=function(J,G,H,I){TOP.xd.flashPostFns.push({name:J,ev:G,data:H,fromId:"_"+A.frameId})};if(typeof swfobject=="undefined"){F.getScript(A.swfobjectUrl,TOP.xd.insertSwf)}else{TOP.xd.insertSwf()}},flashPostFns:[],insertSwf:function(){TOP.ready(function(){var K=A.frameId,I=document.createElement("div");I.id="top-xd-swf-box-"+K;document.body.appendChild(I);I.style.position="absolute";I.style.left="-1000px";I.style.top="-1000px";var G={};G.jsentry="TOP.xd.swfCb";G.swfid="top-xd-swf-"+K;G.name="_"+K;var J={};J.allowscriptaccess="always";var H={};swfobject.embedSWF(A.xdFlashUrl,"top-xd-swf-box-"+K,"1","1","9.0.0",false,G,J,H,function(L){if(!L.success){alert("\u60a8\u5f53\u524d\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u8bf7\u5347\u7ea7\u6d4f\u89c8\u5668\u6216\u5b89\u88c5flash\u64ad\u653e\u5668\u3002");TOP.log("widget interaction need flash player or new browser.","error");return }TOP.xd.swfObj=L.ref})})},swfObj:null,swfCb:function(H,I){switch(I.type){case"swfReady":TOP.xd.postMessage=function(K,L){L=L||"_"+A.mainFrameId;TOP.xd.swfObj.send(K,L)};C.afterFire=D;if(TOP.xd.flashPostFns.length){while(TOP.xd.flashPostFns.length){var G=TOP.xd.flashPostFns.shift();TOP.xd.postMessage(G)}}break;case"message":var J=I.msg;if(J.fromId!="_"+A.frameId){C.fire(J.name,J.ev,J.data,J.fromId)}break}}});function D(N,J,K,M){var L={name:N,ev:J,data:K,fromId:"_"+A.frameId};if(window.postMessage&&B.ie){L=JSON.stringify(L)}if(A.isMainFrame){for(var H=0,G=A.iframes.length;H<G;H++){var I=A.iframes[H];if(I!=M){TOP.xd.postMessage(L,I)}}}else{if(!M){TOP.xd.postMessage(L)}}}TOP.xd.init()})();(function(){var C=TOP.lang,B=TOP.cookie,A=TOP.ua,E=TOP.fields,H=TOP.ev,D=TOP.log;var I=document,J=false;var F=24*60*60,G=2*60;TOP.namespace("",{auth:function(L){if(!E.appKey){D("init() must called first.","error");return }C.isFunction(L)&&H.on("auth","auth",L,true);if(E.isMainFrame){if(J){return }J=true;var N={response_type:"token",redirect_uri:E.channelUrl,state:TOP.getMainDomain()+"."+E.appKey};var M;if(A.ie==6){N.appkey=E.appKey;M=E.ie6AuthUrl}else{N.client_id=E.appKey;M=E.authUrl}M=M+"?"+C.param(N);if(A.ie){window.location=M}else{window.open(M)}}else{H.fire("auth","requireAuth",{})}},login:function(L){TOP.auth(L)},logout:function(L){C.isFunction(L)&&H.on("auth","logout",L,true);var M=[E.logoutUrl,"?client_id=${clientId}&redirect_uri=${redirectUrl}","?action=logout"].join("").replace(/\${clientId}/g,E.appKey).replace(/\${redirectUrl}/g,E.channelUrl);if(A.ie){window.location=M}else{window.open(M)}}});TOP.namespace("auth",{isAuth:function(L,M){L=C.isFunction(L)?L:function(P){if(!P){TOP.auth()}};var N=TOP.auth.getSession();if(N){if(M){var O=L;L=function(P){if(P.length&&P.length==3){O(true)}else{O(false)}};K(null,L)}else{TOP.auth.isLogin(L)}}else{L(false)}},isLogin:function(L,N){L=C.isFunction(L)?L:function(P){if(!P){TOP.login()}};var M=TOP.auth.getLoginCache();if(typeof M=="undefined"){N=true}if(N){var O=L;L=function(P){if(P.length&&P[0]){TOP.auth.setLoginCache();O(true)}else{TOP.auth.setLoginCache("0");O(false)}};K(null,L)}else{L(M==="1"?true:false)}},getLoginStatus:function(M,L){L=L||function(N){if(!N.length||!N[0]){TOP.login()}};K(M,L)},afterAuth:function(O){if(!O){return }var N=O.session;var M=O.expireIn;var P=O.uid;var L=O.nick;TOP.auth.setSession(N,M);P&&TOP.auth.afterLogin(P,L);H.fire("auth","auth",{session:N});J=false},afterLogin:function(M,L){if(!M||!L){return }TOP.auth.setUser(M,L);TOP.auth.setLoginCache();H.fire("auth","login",{id:M,nick:L})},afterLogout:function(){TOP.auth.removeUser();TOP.auth.removeLoginCache();TOP.auth.removeSession();H.fire("auth","logout",{})},getLoginCache:function(){return B.get("_t_login")},setLoginCache:function(L){if(typeof L=="undefined"){L="1"}B.set("_t_login",L,G/F,TOP.getMainDomain(),"/")},removeLoginCache:function(){B.remove("_t_login",TOP.getMainDomain(),"/")},getSession:function(){return B.get("_t_session")||E.session},setSession:function(M,L){if(!M){return }if(M!=TOP.auth.getSession()&&E.isMainFrame){H.fire("auth","sessionChange",{session:M})}if(L){B.set("_t_session",M,L/F,TOP.getMainDomain(),"/")}else{E.session=M}},removeSession:function(){B.remove("_t_session",TOP.getMainDomain(),"/");E.session=null},getUser:function(){return E.user},setUser:function(M,L){if(!M||!L){return }E.user={id:M,nick:L}},removeUser:function(){E.user=null},getSign:function(){return E.sign},setSign:function(L){L&&(E.sign=L)},getTimestamp:function(){return E.timestamp},setTimestamp:function(L){L&&(E.timestamp=L)},getNonce:function(){return E.nonce},setNonce:function(L){L&&(E.nonce=L)}});function K(M,L){if(!E.appKey){D("init() must called first.","error")}var N={method:"taobao.widget.loginstatus.get"};M&&(N.nick=M);TOP.api(N,L)}if(E.isMainFrame){H.on(window,"focus",TOP.auth.removeLoginCache);H.on(window,"focus",function(){J=false});H.on("auth","statusChange",function(L){J=L.isAuthing})}else{H.on(window,"focus",function(){H.fire("auth","statusChange",{isAuthing:false})})}})();(function(){var G=TOP.log,H=TOP.fields,C=TOP.lang,B=TOP.cookie,I=TOP.io,E=TOP.auth;var D={};var L="post",K="get",A="rest",J="tql";TOP.namespace("",{api:function(Q,O,U){var T,M,R=arguments,N=E.getNonce()?H.noSignApiUrl:H.apiUrl;if(R.length>3){T=R[0];M=R[1];Q=R[2];O=R[3];U=R[4]}if(C.isString(Q)){var S=Q;Q=C.unparam(Q);if(!Q.method&&!Q.ql){Q={ql:S}}}if(!T){T=Q.method?A:J}if(!M){M=L}if(!C.isFunction(O)){G("TOP.api: callback must be a function.","error");return }if(!(Q.session||U)){var S=C.param(Q);var P=O;O=function(W){var V=W.error_response;if(V&&(V.code===26||V.code===27)){TOP.auth(function(){if(R.length==2){TOP.api(S,P)}else{TOP.api(T,M,S,P)}})}else{if(V&&V.code===9){TOP.auth(function(){TOP.api(T,L,S,P)})}else{P(W)}}}}var Q=F(Q,U);Q._t_sys="args="+R.length;if(T==A){N+="/rest"}else{N+="/tql/2.0/json"}if(M==L){I.post(N,Q,O)}else{I.jsonp(N,Q,O)}}});function F(N,M){if(C.isString(N)){N=C.unparam(N)}N.app_key=H.appKey;N.nonce=N.nonce||E.getNonce();if(N.nonce){N.sign=undefined}else{N.sign=N.sign||E.getSign()}N.timestamp=N.timestamp||E.getTimestamp();if(M){N.session=undefined}else{if(!N.session){N.session=TOP.auth.getSession()||H.session}}N.partner_id="top-sdk-js-20120801";return N}})();(function(){var B=TOP.log,D=TOP.io,A=TOP.fields,C=TOP.auth;TOP.namespace("",{ui:function(H,F,I){if(!H){B("name is required for ui().","error");return }var G=F.guid?F.guid:TOP.guid();var E=F.version?F.version:"1.0";if(TOP.ui[H]){var J=TOP.ui[H](G,F);I&&I(J)}else{D.getScript(A.uiUrl+"/"+H+"/"+E+"/"+H+".js",function(K){var L=TOP.ui[H](G,F);I&&I(L)})}}})})();(function(){var F=TOP.log,C=TOP.lang,A=TOP.ua,E=TOP.dom,H=TOP.ev,B=TOP.cookie,G=TOP.fields,D=TOP.auth;var I=document;var J="auto";TOP.namespace("uihelper",{iframe:function(O,M){if(!O||!M||!M.url){F("guid and cfg.url is required in TOP.uihelper.iframe().","error");return }var N=M.url,L=M.width,Q=M.height,R=M.container;N=K(O,N,M);var P=I.createElement("iframe");P.src=N;P.frameBorder="0";L&&(L!=J)&&(P.width=L);Q&&(Q!=J)&&(P.height=Q);R&&E.get(R).appendChild(P);H.add(P,"load",function(){if(window.postMessage){G.iframes.push(P.contentWindow)}else{G.iframes.push("_"+O)}});TOP.uihelper.adaptFrame(O,P);return P},adaptFrame:function(L,M){H.add(L,"resize",function(N){N=C.unparam(N);if(N){N.h&&!isNaN(N.h)&&(M.style.height=N.h+"px");N.w&&!isNaN(N.w)&&(M.style.width=N.w+"px")}})},resizeFrame:function(O,L,N){var S=document.documentElement,T=R(),Q=P();function R(){return S.clientWidth}function P(){return S.clientHeight}function M(){if(T!=R()||Q!=P()){T=R();Q=P();var U=O?T:null,V=L?Q:null;H.fire(TOP.fields.frameId,"resize","w="+U+"&h="+V)}}setInterval(M,500)},insertIframe:function(N,M,L){L=L||{};L.url=M;return TOP.uihelper.iframe(N,L)},dialog:function(L){if(!L){L=""}var M=confirm(L+"\u767b\u9646\u7b2c\u4e09\u65b9\u5e94\u7528\u5931\u8d25\uff01\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u6d4f\u89c8\u5668\u7684\u8bbe\u7f6e\u9650\u5236\n\u70b9\u51fb\u786e\u8ba4\u67e5\u770b\u89e3\u51b3\u65b9\u6848\n\u70b9\u51fb\u53d6\u6d88\u7ee7\u7eed\u4f7f\u7528\n");if(M){window.location="http://open.taobao.com/doc/detail.htm?id=101194"}}});function K(O,N,L){if(N.indexOf("#")==-1){N+="#"}else{N+="&"}var P={};P._t_s=D.getSign();P._t_ts=D.getTimestamp();P._t_ss=D.getSession();P._t_id=O;P._t_pid=G.frameId;P._t_key=G.appKey;P._t_w=L.width&&L.width==J?1:0;P._t_h=L.height&&L.height==J?1:0;var M=D.getUser();if(M){P._t_id=M.id;P._t_nk=M.nick}return N+C.param(P)}})();(function(){var D=TOP.log,A=TOP.fields,B=TOP.ua,C=TOP.uihelper;lang=TOP.lang;var F=window,E=document;TOP.namespace("channel",{transport:function(){TOP.channel.transport=function(){};var N=F.location.hash.substr(1)||F.location.search.substr(1);if(N==="action=logout"){TOP.channel.dispart("afterLogout");if(!B.ie){TOP.closeWindow(F)}}else{var G=N.match(/state=([^&]+)/);var L;var Q;if(G){var I=G[1].lastIndexOf(".");L=G[1].substring(0,I);Q=G[1].substring(I+1)}if(L&&L===TOP.getMainDomain()){if(N.match(/access_token=[^&]+|top_session=[^&]+/)){var K=lang.unparam(N);var R={};if(K.top_session){R.session=K.top_session;var H=lang.unparam(TOP.base64.decode(K.top_parameters));R.expireIn=H.expires_in;R.uid=H.visitor_id;R.nick=H.visitor_nick}else{R.session=K.access_token;R.expireIn=K.expires_in;R.uid=K.taobao_user_id;R.nick=K.taobao_user_nick}var O=true;var P=true;var M=function(){TOP.channel.dispart("afterAuth",R);if(!B.ie){TOP.closeWindow(F)}else{window.location.hash="auth"}};if(P){if(TOP.lang.trim(R.session)!=""){A.appKey=Q;var J={method:"taobao.widget.loginstatus.get",sign:"JSSDK",session:R.session,timestamp:new Date().getTime()};TOP.api("rest","get",J,function(S){if(S.length&&!S[0]&&O){C.dialog("%>_<% ")}M()})}}else{M()}}else{if(N.match(/error=access_denied/)){TOP.channel.dispart("authReject",N)}}}}},dispart:function(H,G){if(H&&typeof H==="string"){try{if(!B.ie&&F.opener){F.opener.TOP.auth[H](G)}else{F.TOP.auth[H](G)}}catch(I){D("cannot find opener or opener don't has required method","error")}}}});TOP.channel.transport()})();(function(){var I=TOP.log,C=TOP.lang,H=TOP.dom,M=TOP.ev,E=TOP.uihelper,B=TOP.cookie,L=TOP.fields,A=TOP.ua,G=TOP.auth;var N=document;var K=G.getSession();TOP.namespace("",{init:function(Q){if(!Q.appKey){I("cfg.appKey is required in init().","error");return }L.appKey=Q.appKey;if(Q.channelUrl&&!A.ie){L.channelUrl=Q.channelUrl}else{var S=window.location.href,P=S.indexOf("#");L.channelUrl=P<0?S:S.substring(0,P)}try{var R=N.createElement("img");R.src="http://www.atpanel.com/connect.6.1?appkey="+TOP.fields.appKey+"&cache="+new Date().getTime()}catch(T){I("atpanel get error","error")}TOP.init=function(){TOP.log("init() can only be called one time.","warn");return }},autoInit:function(){var Q=F();if(!Q){return }var S=Q.src,T=S.indexOf("?")+1;if(T<1){return }var R=S.substring(T,S.length),P=C.unparam(R);if(P.appkey){TOP.init({appKey:P.appkey,channelUrl:P.channel})}}});if(L.isMainFrame){G.setSign(B.get("sign"));G.setTimestamp(B.get("timestamp"));L.frameId=TOP.guid();TOP.autoInit();O();M.add("auth","requireAuth",function(P){G()})}else{D();var J=H.get("#top-nonce");if(J){G.setNonce(J.getAttribute("data"));G.setTimestamp(H.get("#top-timestamp").getAttribute("data"))}M.add("auth","sessionChange",function(P){G.setSession(P.session)})}function O(){var P=function(){var Q=G.getSession();if(Q!=K){K=Q;M.fire("auth","sessionChange",{session:Q})}};setInterval(P,1*60*1000)}function D(){var P=C.unparam(window.location.hash.substr(1));G.setSign(P._t_s);G.setTimestamp(P._t_ts);P._t_ss&&G.setSession(P._t_ss);L.frameId=P._t_id;L.mainFrameId=P._t_pid;L.appKey=P._t_key;P._t_id&&G.setUser(P._t_id,P._t_nk);L.topId=P._t_id}function F(){var R=L.sdkUrl,P=document.getElementsByTagName("script");for(var S=P.length-1;S>=0;S--){var Q=P[S];if(Q&&Q.src.indexOf(R)>=0){return Q}}I("please use http://a.tbcdn.cn/apps/top/x/sdk.js","error")}})();