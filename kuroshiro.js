!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(r.kuroshiro={})}(this,function(r){"use strict";var e=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function r(r,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,a,n){return a&&r(e.prototype,a),n&&r(e,n),e}}(),n=function(r){if(Array.isArray(r)){for(var e=0,a=Array(r.length);e<r.length;e++)a[e]=r[e];return a}return Array.from(r)},o="ぁ".charCodeAt(0)-"ァ".charCodeAt(0),u="ァ".charCodeAt(0)-"ぁ".charCodeAt(0),t=function(r){return(r=r[0])>="぀"&&r<="ゟ"},i=function(r){return(r=r[0])>="゠"&&r<="ヿ"},f=function(r){return(r=r[0])>="一"&&r<="鿏"||r>="豈"&&r<="﫿"||r>="㐀"&&r<="䶿"},s=function(r){for(var e=0;e<r.length;e++)if(i(r[e]))return!0;return!1},c=function(r){for(var e=0;e<r.length;e++)if(f(r[e]))return!0;return!1},l=function(r){return[].concat(n(r)).map(function(r){return r>"゠"&&r<"ヷ"?String.fromCharCode(r.charCodeAt(0)+o):r}).join("")},y=function(r){return[].concat(n(r)).map(function(r){return r>"぀"&&r<"゗"?String.fromCharCode(r.charCodeAt(0)+u):r}).join("")},d=function(r){for(var e,a,n={"１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","０":"0","！":"!","”":'"',"＃":"#","＄":"$","％":"%","＆":"&","’":"'","（":"(","）":")","＝":"=","～":"~","｜":"|","＠":"@","‘":"`","＋":"+","＊":"*","；":";","：":":","＜":"<","＞":">","、":",","。":".","／":"/","？":"?","＿":"_","・":"･","「":"[","」":"]","｛":"{","｝":"}","￥":"\\","＾":"^","ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo","ファ":"fa","フィ":"fi","フェ":"fe","フォ":"fo","きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","キャ":"kya","キュ":"kyu","キョ":"kyo","シャ":"sha","シュ":"shu","ショ":"sho","チャ":"cha","チュ":"chu","チョ":"cho","ニャ":"nya","ニュ":"nyu","ニョ":"nyo","ヒャ":"hya","ヒュ":"hyu","ヒョ":"hyo","ミャ":"mya","ミュ":"myu","ミョ":"myo","リャ":"rya","リュ":"ryu","リョ":"ryo","ふゃ":"fya","ふゅ":"fyu","ふょ":"fyo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぢゃ":"dya","ぢゅ":"dyu","ぢょ":"dyo","じゃ":"ja","じゅ":"ju","じょ":"jo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","フャ":"fya","フュ":"fyu","フョ":"fyo","ピャ":"pya","ピュ":"pyu","ピョ":"pyo","ビャ":"bya","ビュ":"byu","ビョ":"byo","ヂャ":"dya","ヂュ":"dyu","ヂョ":"dyo","ジャ":"ja","ジュ":"ju","ジョ":"jo","ギャ":"gya","ギュ":"gyu","ギョ":"gyo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","だ":"da","ぢ":"di","づ":"du","で":"de","ど":"do","ざ":"za","じ":"zi","ず":"zu","ぜ":"ze","ぞ":"zo","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","パ":"pa","ピ":"pi","プ":"pu","ペ":"pe","ポ":"po","バ":"ba","ビ":"bi","ブ":"bu","ベ":"be","ボ":"bo","ダ":"da","ヂ":"di","ヅ":"du","デ":"de","ド":"do","ザ":"za","ジ":"zi","ズ":"zu","ゼ":"ze","ゾ":"zo","ガ":"ga","ギ":"gi","グ":"gu","ゲ":"ge","ゴ":"go","わ":"wa","ゐ":"wi","ゑ":"we","を":"wo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","や":"ya","ゆ":"yu","よ":"yo","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","は":"ha","ひ":"hi","ふ":"hu","へ":"he","ほ":"ho","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","た":"ta","ち":"ti","つ":"tu","て":"te","と":"to","さ":"sa","し":"si","す":"su","せ":"se","そ":"so","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","あ":"a","い":"i","う":"u","え":"e","お":"o","ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o","ゃ":"ya","ゅ":"yu","ょ":"yo","ワ":"wa","ヰ":"wi","ヱ":"we","ヲ":"wo","ラ":"ra","リ":"ri","ル":"ru","レ":"re","ロ":"ro","ヤ":"ya","ユ":"yu","ヨ":"yo","マ":"ma","ミ":"mi","ム":"mu","メ":"me","モ":"mo","ハ":"ha","ヒ":"hi","フ":"hu","ヘ":"he","ホ":"ho","ナ":"na","ニ":"ni","ヌ":"nu","ネ":"ne","ノ":"no","タ":"ta","チ":"ti","ツ":"tu","テ":"te","ト":"to","サ":"sa","シ":"si","ス":"su","セ":"se","ソ":"so","カ":"ka","キ":"ki","ク":"ku","ケ":"ke","コ":"ko","ア":"a","イ":"i","ウ":"u","エ":"e","オ":"o","ァ":"a","ィ":"i","ゥ":"u","ェ":"e","ォ":"o","ャ":"ya","ュ":"yu","ョ":"yo","ヶ":"ke","ヵ":"ka","ん":"n","ー":"-","　":" "},o=0,u=r.length,t="";o<=u;)(a=n[r.substring(o,o+2)])?(t+=a,o+=2):(t+=(a=n[e=r.substring(o,o+1)])?a:e,o+=1);return t=(t=t.replace(/っ([bcdfghijklmnopqrstuvwyz])/gm,"$1$1")).replace(/っ/gm,"tu")},m=function(r){for(var e=!1,a=!1,n=0;n<r.length;n++)f(r[n])?e=!0:(t(r[n])||i(r[n]))&&(a=!0);return e&&a?1:e?0:a?2:3},h=function(r,e,a){a=a||"";for(var n="",o=0;o<r.length;o++)o!==r.length-1?n+=r[o][e]+""+a:n+=r[o][e];return n},g=function(){function r(){e(this,r),this._analyzer=null}return a(r,[{key:"init",value:function(r,e){var a=this;null==a._analyzer?r.init(function(n){return n?e(n):(a._analyzer=r,e())}):e(new Error("Kuroshiro has already been initialized."))}},{key:"convert",value:function(r,e,a){(e=e||{}).to=e.to||"hiragana",e.mode=e.mode||"normal",e.delimiter_start=e.delimiter_start||"(",e.delimiter_end=e.delimiter_end||")",r=r||"",this._analyzer.parse(r,function(r,n){if(r)return a(r);for(var o=0;o<n.length;o++)n[o].reading||(n[o].reading=n[o].surface_form);if("normal"===e.mode||"spaced"===e.mode)switch(e.to){case"katakana":return"normal"===e.mode?a(null,h(n,"reading")):a(null,h(n,"reading"," "));case"romaji":return"normal"===e.mode?a(null,d(h(n,"reading"))):a(null,d(h(n,"reading"," ")));case"hiragana":for(var u=0;u<n.length;u++)if(c(n[u].surface_form))if(s(n[u].surface_form)){n[u].reading=l(n[u].reading);for(var t="",g="",p=0;p<n[u].surface_form.length;p++)f(n[u].surface_form[p])?g+="(.*)":g+=i(n[u].surface_form[p])?l(n[u].surface_form[p]):n[u].surface_form[p];var _=new RegExp(g).exec(n[u].reading);if(_){for(var b=0,k=0;k<n[u].surface_form.length;k++)f(n[u].surface_form[k])?(t+=_[b+1],b++):t+=n[u].surface_form[k];n[u].reading=t}}else n[u].reading=l(n[u].reading);else n[u].reading=n[u].surface_form;return"normal"===e.mode?a(null,h(n,"reading")):a(null,h(n,"reading"," "))}else{if("okurigana"!==e.mode&&"furigana"!==e.mode)return a(new Error("No such mode..."));for(var v=[],w=0;w<n.length;w++){switch(n[w].reading=l(n[w].reading),m(n[w].surface_form)){case 0:v.push([n[w].surface_form,1,n[w].reading]);break;case 1:for(var j="",z=!1,C=[],A=0;A<n[w].surface_form.length;A++)f(n[w].surface_form[A])?z?C[C.length-1]+=n[w].surface_form[A]:(z=!0,j+="(.*?)",C.push(n[w].surface_form[A])):(z=!1,C.push(n[w].surface_form[A]),j+=i(n[w].surface_form[A])?l(n[w].surface_form[A]):n[w].surface_form[A]);var x=new RegExp("^"+j+"$").exec(n[w].reading);if(x)for(var E=1,K=0;K<C.length;K++)f(C[K][0])?v.push([C[K],1,x[E++]]):v.push([C[K],2,l(C[K])]);else v.push([n[w].surface_form,1,n[w].reading]);break;case 2:for(var $=0;$<n[w].surface_form.length;$++)v.push([n[w].surface_form[$],2,n[w].reading[$]]);break;case 3:for(var H=0;H<n[w].surface_form.length;H++)v.push([n[w].surface_form[H],3,n[w].surface_form[H]])}}var O="";switch(e.to){case"katakana":if("okurigana"===e.mode)for(var P=0;P<v.length;P++)1!==v[P][1]?O+=v[P][0]:O+=v[P][0]+e.delimiter_start+y(v[P][2])+e.delimiter_end;else for(var R=0;R<v.length;R++)1!==v[R][1]?O+=v[R][0]:O+="<ruby>"+v[R][0]+"<rp>"+e.delimiter_start+"</rp><rt>"+y(v[R][2])+"</rt><rp>"+e.delimiter_end+"</rp></ruby>";return a(null,O);case"romaji":if("okurigana"===e.mode)for(var S=0;S<v.length;S++)1!==v[S][1]?O+=v[S][0]:O+=v[S][0]+e.delimiter_start+d(v[S][2])+e.delimiter_end;else{O+="<ruby>";for(var U=0;U<v.length;U++)O+=v[U][0]+"<rp>"+e.delimiter_start+"</rp><rt>"+d(v[U][2])+"</rt><rp>"+e.delimiter_end+"</rp>";O+="</ruby>"}return a(null,O);case"hiragana":if("okurigana"===e.mode)for(var q=0;q<v.length;q++)1!==v[q][1]?O+=v[q][0]:O+=v[q][0]+e.delimiter_start+v[q][2]+e.delimiter_end;else for(var M=0;M<v.length;M++)1!==v[M][1]?O+=v[M][0]:O+="<ruby>"+v[M][0]+"<rp>"+e.delimiter_start+"</rp><rt>"+v[M][2]+"</rt><rp>"+e.delimiter_end+"</rp></ruby>";return a(null,O)}}})}}]),r}(),p={hasHiragana:function(r){for(var e=0;e<r.length;e++)if(t(r[e]))return!0;return!1},hasKatakana:s,hasKanji:c,isHiragana:t,isKatakana:i,isKanji:f};g.Util=p,r.default=g,r.Util=p,Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=kuroshiro.js.map
