(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{42110:function(t,e){"use strict";e.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},27484:function(t){var e,n,r,i,s,a,o,u,c,l,d,f,h,p,v,m,g,y,w,$,M;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",o="quarter",u="year",c="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(v={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},m=function(t){return t instanceof $},g=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();v[s]&&(i=s),n&&(v[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;v[o]=e,i=o}return!r&&i&&(p=i),i||!r&&p},y=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},(w={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+h(Math.floor(n/60),2,"0")+":"+h(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:u,w:s,d:"day",D:c,h:i,m:r,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=g,w.i=m,w.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},M=($=function(){function t(t){this.$L=g(t.locale,null,!0),this.parse(t)}var h=t.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return w},h.isValid=function(){return this.$d.toString()!==l},h.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,e){var o=this,l=!!w.u(e)||e,d=w.p(t),f=function(t,e){var n=w.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return l?n:n.endOf("day")},h=function(t,e){return w.w(o.toDate()[t].apply(o.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},p=this.$W,v=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case u:return l?f(1,0):f(31,11);case a:return l?f(1,v):f(0,v+1);case s:var y=this.$locale().weekStart||0,$=(p<y?p+7:p)-y;return f(l?m-$:m+(6-$),v);case"day":case c:return h(g+"Hours",0);case i:return h(g+"Minutes",1);case r:return h(g+"Seconds",2);case n:return h(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(t,s){var o,l=w.p(t),d="set"+(this.$u?"UTC":""),f=((o={}).day=d+"Date",o[c]=d+"Date",o[a]=d+"Month",o[u]=d+"FullYear",o[i]=d+"Hours",o[r]=d+"Minutes",o[n]=d+"Seconds",o[e]=d+"Milliseconds",o)[l],h="day"===l?this.$D+(s-this.$W):s;if(l===a||l===u){var p=this.clone().set(c,1);p.$d[f](h),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[w.p(t)]()},h.add=function(t,e){var o,c=this;t=Number(t);var l=w.p(e),d=function(e){var n=y(c);return w.w(n.date(n.date()+Math.round(e*t)),c)};if(l===a)return this.set(a,this.$M+t);if(l===u)return this.set(u,this.$y+t);if("day"===l)return d(1);if(l===s)return d(7);var f=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[l]||1,h=this.$d.getTime()+t*f;return w.w(h,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return w.s(s%12||12,t,"0")},p=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:w.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,a,!0),A:p(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(f,function(t,e){return e||v[t]||i.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(t,e,c){var l,d=w.p(e),f=y(t),h=(f.utcOffset()-this.utcOffset())*6e4,p=this-f,v=w.m(this,f);return v=((l={})[u]=v/12,l[a]=v,l[o]=v/3,l[s]=(p-h)/6048e5,l.day=(p-h)/864e5,l[i]=p/36e5,l[r]=p/6e4,l[n]=p/1e3,l)[d]||p,c?v:w.a(v)},h.daysInMonth=function(){return this.endOf(a).$D},h.$locale=function(){return v[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return w.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},t}()).prototype,y.prototype=M,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",u],["$D",c]].forEach(function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,$,y),t.$i=!0),y},y.locale=g,y.isDayjs=m,y.unix=function(t){return y(1e3*t)},y.en=v[p],y.Ls=v,y.p={},y)},75555:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=n(16835),i=n(67294),s=n(71230),a=n(15746),o=n(71577),u=n(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"},l=n(98615),d=function(t,e){return i.createElement(l.Z,(0,u.Z)((0,u.Z)({},t),{},{ref:e,icon:c}))};d.displayName="ToolOutlined";var f=i.forwardRef(d),h=n(38085),p=n(90427),v=n(68772),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z"}}]},name:"history",theme:"outlined"},g=function(t,e){return i.createElement(l.Z,(0,u.Z)((0,u.Z)({},t),{},{ref:e,icon:m}))};g.displayName="HistoryOutlined";var y=i.forwardRef(g),w=n(83062),$=n(70149),M=n(75081),Z=n(27484),S=n.n(Z),x=n(9443),D=n(8828),b=n(35944),O={name:"1flg259",styles:"width:50px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},C={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},_={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},N={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},A={name:"15edryu",styles:"width:fit-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},k={name:"1wnowod",styles:"display:flex;align-items:center;justify-content:center"},H=function(t){t.className;var e=t.header,n=(0,i.useState)({page:1,limit:10}),r=n[0],s=n[1],a=(0,D.d$)(r,{refetchOnMountOrArgChange:!0}).data;return(0,b.tZ)(x.Uf,{header:e||"History",icon:(0,b.tZ)(y,{}),defaultActive:!0,children:a?(0,b.tZ)($.Z,{scroll:{x:"max-content"},dataSource:a.data,columns:[{title:"ID",dataIndex:"_id",key:"_id",render:function(t){return(0,b.tZ)(w.Z,{title:t,children:(0,b.tZ)("div",{css:O,children:t})})}},{title:"Actor",dataIndex:"actor",key:"actor",render:function(t){return(0,b.tZ)("div",{css:C,children:t})}},{title:"Name",dataIndex:"name",key:"name",render:function(t){return(0,b.tZ)("div",{css:_,children:t})}},{title:"Message",dataIndex:"message",key:"message",render:function(t){return(0,b.tZ)("div",{css:N,children:t})}},{title:"Created At",dataIndex:"createdAtUtc",key:"createdAtUtc",render:function(t){return(0,b.tZ)("div",{css:A,children:S()(t).format("DD/MM/YYYY HH:mm:ss")})}}],onChange:function(t){s({page:t.current,limit:t.pageSize})},pagination:{current:a.currentPage,total:a.totalItems},rowKey:function(t){return t._id}}):(0,b.tZ)("div",{css:k,children:(0,b.tZ)(M.Z,{size:"large"})})})},L=n(13306),Y=n(21255).e.injectEndpoints({endpoints:function(t){return{updateNewVersion:t.mutation({query:function(){return L.dJ.post("/setting/update")}})}}}),E=Y.useUpdateNewVersionMutation;Y.endpoints.updateNewVersion;var T=n(24751),R=n(38490),I={name:"18uqayh",styles:"margin-bottom:16px"},U={name:"4zk4ri",styles:"display:flex;flex-direction:column;gap:1rem"},V={name:"1q4vxyr",styles:"margin-left:8px"},P=function(){var t=E(),e=(0,r.Z)(t,1)[0],n=(0,T.Rf)().data;return(0,b.BX)(s.Z,{gutter:[16,16],children:[(0,b.tZ)(a.Z,{xs:24,md:12,children:(0,b.tZ)(p.xF,{header:"User"})}),(0,b.tZ)(a.Z,{xs:24,md:12,children:(0,b.tZ)(v.K2,{header:"License Key"})}),(0,b.tZ)(a.Z,{xs:24,md:12,children:(0,b.tZ)(v.O5,{header:"User Setting"})}),(0,b.BX)(a.Z,{xs:24,children:[(0,b.tZ)("div",{css:I,children:(0,b.tZ)(H,{header:"History"})}),(0,b.tZ)(x.Uf,{header:"Reset Services",icon:(0,b.tZ)(f,{}),children:(0,b.BX)("div",{css:U,children:[(0,b.tZ)(R.v,{roles:["master"],children:(0,b.BX)("div",{children:[(0,b.tZ)(h.jU,{})," Reset all tunes to default"]})}),(0,b.BX)("div",{children:[(0,b.tZ)(o.ZP,{danger:!0,onClick:function(){return e()},children:"Update app to latest version"}),(0,b.BX)("span",{css:V,children:["(API: v",null==n?void 0:n.appVersion," - UI: v","0.1.30",")"]})]})]})})]})]})}},52837:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return n(75555)}])},29171:function(t,e,n){"use strict";n.d(e,{Z:function(){return M}});var r=n(87462),i=n(4942),s=n(97685),a=n(91),o=n(54695),u=n(94184),c=n.n(u),l=n(42550),d=n(67294),f=n(15105),h=n(75164),p=f.Z.ESC,v=f.Z.TAB,m=(0,d.forwardRef)(function(t,e){var n=t.overlay,r=t.arrow,i=t.prefixCls,s=(0,d.useMemo)(function(){return"function"==typeof n?n():n},[n]),a=(0,l.sQ)(e,null==s?void 0:s.ref);return d.createElement(d.Fragment,null,r&&d.createElement("div",{className:"".concat(i,"-arrow")}),d.cloneElement(s,{ref:(0,l.Yr)(s)?a:void 0}))}),g={adjustX:1,adjustY:1},y=[0,0],w={topLeft:{points:["bl","tl"],overflow:g,offset:[0,-4],targetOffset:y},top:{points:["bc","tc"],overflow:g,offset:[0,-4],targetOffset:y},topRight:{points:["br","tr"],overflow:g,offset:[0,-4],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:g,offset:[0,4],targetOffset:y},bottom:{points:["tc","bc"],overflow:g,offset:[0,4],targetOffset:y},bottomRight:{points:["tr","br"],overflow:g,offset:[0,4],targetOffset:y}},$=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"],M=d.forwardRef(function(t,e){var n,u,f,g,y,M,Z,S,x,D,b,O,C,_,N=t.arrow,A=void 0!==N&&N,k=t.prefixCls,H=void 0===k?"rc-dropdown":k,L=t.transitionName,Y=t.animation,E=t.align,T=t.placement,R=t.placements,I=t.getPopupContainer,U=t.showAction,V=t.hideAction,P=t.overlayClassName,z=t.overlayStyle,q=t.visible,W=t.trigger,B=void 0===W?["hover"]:W,F=t.autoFocus,X=t.overlay,j=t.children,J=t.onVisibleChange,K=(0,a.Z)(t,$),Q=d.useState(),G=(0,s.Z)(Q,2),tt=G[0],te=G[1],tn="visible"in t?q:tt,tr=d.useRef(null),ti=d.useRef(null),ts=d.useRef(null);d.useImperativeHandle(e,function(){return tr.current});var ta=function(t){te(t),null==J||J(t)};u=(n={visible:tn,triggerRef:ts,onVisibleChange:ta,autoFocus:F,overlayRef:ti}).visible,f=n.triggerRef,g=n.onVisibleChange,y=n.autoFocus,M=n.overlayRef,Z=d.useRef(!1),S=function(){if(u){var t,e;null===(t=f.current)||void 0===t||null===(e=t.focus)||void 0===e||e.call(t),null==g||g(!1)}},x=function(){var t;return null!==(t=M.current)&&void 0!==t&&!!t.focus&&(M.current.focus(),Z.current=!0,!0)},D=function(t){switch(t.keyCode){case p:S();break;case v:var e=!1;Z.current||(e=x()),e?t.preventDefault():S()}},d.useEffect(function(){return u?(window.addEventListener("keydown",D),y&&(0,h.Z)(x,3),function(){window.removeEventListener("keydown",D),Z.current=!1}):function(){Z.current=!1}},[u]);var to=function(){return d.createElement(m,{ref:ti,overlay:X,prefixCls:H,arrow:A})},tu=d.cloneElement(j,{className:c()(null===(_=j.props)||void 0===_?void 0:_.className,tn&&(void 0!==(b=t.openClassName)?b:"".concat(H,"-open"))),ref:(0,l.Yr)(j)?(0,l.sQ)(ts,j.ref):void 0}),tc=V;return tc||-1===B.indexOf("contextMenu")||(tc=["click"]),d.createElement(o.Z,(0,r.Z)({builtinPlacements:void 0===R?w:R},K,{prefixCls:H,ref:tr,popupClassName:c()(P,(0,i.Z)({},"".concat(H,"-show-arrow"),A)),popupStyle:z,action:B,showAction:U,hideAction:tc,popupPlacement:void 0===T?"bottomLeft":T,popupAlign:E,popupTransitionName:L,popupAnimation:Y,popupVisible:tn,stretch:(O=t.minOverlayWidthMatchTrigger,C=t.alignPoint,"minOverlayWidthMatchTrigger"in t?O:!C)?"minWidth":"",popup:"function"==typeof X?to:to(),onPopupVisibleChange:ta,onPopupClick:function(e){var n=t.onOverlayClick;te(!1),n&&n(e)},getPopupContainer:I}),tu)})}},function(t){t.O(0,[907,80,543,410,85,427,774,888,179],function(){return t(t.s=52837)}),_N_E=t.O()}]);