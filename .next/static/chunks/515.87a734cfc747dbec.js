(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{33515:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(50029),i=n(16835),a=n(87794),o=n.n(a),c=n(67294),s=n(71577),d=n(75008),u=n(99603),l=n(59417),f=n(64952),p=n(13306),m=n(21255),h=m.e.injectEndpoints({endpoints:function(e){return{uploadVoiceMessage:e.mutation({query:function(e){var t=e.data,n=e.filename,r=new FormData;return r.append("Content-Type",t.type),r.append("file",t,n),p.dJ.post("/upload/message",{data:r,headers:{"Content-Type":"multipart/form-data"}})},invalidatesTags:[{type:m.$.VoiceRecord}]})}}}),y=h.useUploadVoiceMessageMutation;h.endpoints.uploadVoiceMessage;var v=(0,n(13179).Z)("div",{target:"e13w2ygz0"})({name:"ykx4hk",styles:"height:100%;width:100%;position:absolute;background:red;top:0;opacity:0.3;border-radius:50%;animation:1s infinite growing;@keyframes growing{from{scale:1;}to{scale:1.8;}}"}),g=n(42075),w=n(5737),b=n(70149),Z=n(92156),k=n(52357),R=m.e.injectEndpoints({endpoints:function(e){return{deleteVoiceRecord:e.mutation({query:function(e){return p.dJ.delete("/voice/".concat(e))},invalidatesTags:function(e){return[{type:m.$.VoiceRecord}]}})}}}),x=R.useDeleteVoiceRecordMutation;R.endpoints.deleteVoiceRecord;var V=n(59499),O=n(71338),P=n(53575),j=m.e.injectEndpoints({endpoints:function(e){return{updateVoiceRecord:e.mutation({query:function(e){return p.dJ.put("/voice/".concat(e.id),{data:e})},invalidatesTags:function(e){return[{type:m.$.VoiceRecord}]}})}}}),C=j.useUpdateVoiceRecordMutation;j.endpoints.updateVoiceRecord;var A=n(35944);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,V.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var B={0:"0",50:"50",100:{style:{color:"#f50"},label:"100"}},E={name:"1wnowod",styles:"display:flex;align-items:center;justify-content:center"},M={name:"1d3w5wq",styles:"width:100%"},S={name:"1mys3sh",styles:"margin-left:1rem"},T=function(e){var t=e.voiceData,n=C(),r=(0,i.Z)(n,1)[0],a=(0,c.useState)(t.volume),o=a[0],s=a[1];return(0,c.useEffect)(function(){var e=setTimeout(function(){r(_(_({},t),{},{volume:null!=o?o:50}))},500);return function(){return clearTimeout(e)}},[o]),(0,A.BX)("div",{css:E,children:[(0,A.tZ)(O.Z,{css:M,defaultValue:50,onChange:function(e){s(e)},value:o,marks:B}),(0,A.tZ)("div",{css:S,children:(0,A.tZ)(P.Z,{count:o,color:"rgb(45, 183, 245)",showZero:!0})})]})};function U(){var e=(0,k.YJ)(),t=(0,i.Z)(e,1)[0],n=(0,Z.ks)().data,r=x(),a=(0,i.Z)(r,1)[0];if(!n)return null;var o=n.map(function(e){var t=e.fileName,n=e.createdAt,r=e.filePath,i=e._id;return{fileName:t,filePath:r,createdAt:n,volume:e.volume,id:i}});return(0,A.tZ)(b.Z,{columns:[{title:"Voice Name",dataIndex:"fileName",key:"fileName",width:"30vw"},{title:"Create Date",dataIndex:"createdAt",key:"createdAt",render:function(e){return(0,A.tZ)("div",{children:new Date(e).toLocaleString()})}},{title:"Play Voice",key:"playVoice",render:function(e,n){return(0,A.tZ)(g.Z,{size:"middle",children:(0,A.tZ)(s.ZP,{type:"link",onClick:function(){var e;t({filePath:n.filePath,volume:null!==(e=n.volume)&&void 0!==e?e:50})},children:"Play"})})}},{title:"Volume",key:"volume",width:"250px",render:function(e,t){return(0,A.tZ)(T,{voiceData:t})}},{title:"Delete Voice",key:"deleteVoice",render:function(e,t){return(0,A.tZ)(g.Z,{size:"middle",children:(0,A.tZ)(w.Z,{title:"Delete voice record",description:"Are you sure to delete this voice record?",okText:"Yes",cancelText:"No",onConfirm:function(){return a(t.id)},children:(0,A.tZ)(s.ZP,{type:"link",children:"Delete"})})})}}],scroll:{x:"max-content"},dataSource:o})}var L={name:"1mskn91",styles:"display:flex;width:fit-content;flex-direction:column;align-items:center"},N={name:"1azakc",styles:"text-align:center"},q={name:"1denvr5",styles:"margin-bottom:1rem;width:fit-content"},X={name:"1gok8e8",styles:"margin-bottom:0.5rem"},z={name:"1gok8e8",styles:"margin-bottom:0.5rem"};function J(){var e,t,n=(0,c.useState)(),a=n[0],p=n[1];(0,c.useEffect)(function(){p(new f.WavRecorder)},[]);var m=(0,c.useState)(!1),h=m[0],g=m[1],w=(0,c.useState)(null),b=w[0],Z=w[1],k=(0,c.useState)(null),R=k[0],x=k[1],V=(0,c.useState)(""),O=V[0],P=V[1],j=y(),C=(0,i.Z)(j,1)[0],D=(e=(0,r.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=5;break}return null==a||a.stop(),g(!1),setTimeout((0,r.Z)(o().mark(function e(){var t,n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null==a?void 0:a.getBlob();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:n=URL.createObjectURL(t),Z(t),x(n);case 8:case"end":return e.stop()}},e)})),500),e.abrupt("return");case 5:null==a||a.start(),g(!0);case 7:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),_=(t=(0,r.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=3;break}return e.next=3,C({data:b,filename:O});case 3:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,A.BX)("div",{children:[(0,A.BX)("div",{css:L,children:[(0,A.tZ)("h1",{children:"Start record your voice"}),R&&(0,A.BX)("figure",{css:N,children:[(0,A.tZ)("figcaption",{children:"Listen your message again"}),(0,A.tZ)("audio",{controls:!0,src:R,children:(0,A.tZ)("a",{href:R,children:"Download your message"})})]}),(0,A.BX)(s.ZP,{css:q,type:"primary",shape:"circle",onClick:D,children:[(0,A.tZ)(u.G,{icon:l.UOM}),h?(0,A.tZ)(v,{}):null]})]}),R&&(0,A.BX)(A.HY,{children:[(0,A.tZ)("div",{css:X,children:(0,A.tZ)(d.Z,{placeholder:"Please enter file name",onChange:function(e){return P(e.target.value)}})}),(0,A.tZ)("div",{css:z,children:(0,A.tZ)(s.ZP,{onClick:_,disabled:!b,children:"Save"})})]}),(0,A.tZ)(U,{})]})}},92156:function(e,t,n){"use strict";n.d(t,{ks:function(){return o}});var r=n(13306),i=n(21255),a=i.e.injectEndpoints({endpoints:function(e){return{getAllVoicesRecorded:e.query({query:function(){return r.dJ.get("/voice")},providesTags:function(e){return[{type:i.$.VoiceRecord}]}})}}}),o=a.useGetAllVoicesRecordedQuery;a.useLazyGetAllVoicesRecordedQuery,a.endpoints.getAllVoicesRecorded},38966:function(e,t,n){let r=n(31760),i=n(94171);e.exports=class{mediaRecorder;stream;__data;async start(e={audio:!0,video:!1}){if(this.mediaRecorder?.state==="recording")return!0;try{this.stream=await navigator.mediaDevices.getUserMedia(e||{audio:!0,video:!1}),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.ondataavailable=e=>this.__data=e.data}catch(e){return console.error(e),!1}return this.mediaRecorder?.start(),!0}stop(){if(this.mediaRecorder?.state!=="recording")return!0;this.mediaRecorder.stop(),this.mediaRecorder.onstop=()=>{this.stream.getTracks().forEach(e=>e.stop()),this.mediaRecorder=void 0,this.stream=void 0}}async download(e=null,t=!1,n){if(this.__data)return await i(this.__data,t,e,n)}async getBlob(e=!1,t){if(this.__data)return await r(this.__data,e,t)}}},94171:function(e,t,n){let r=n(31760);async function i(e,t,n=null,i){let a=await r(e,t,i),o=document.createElement("a");o.href=window.URL.createObjectURL(a),o.download=n||`recording('${t?"32bit":"16bit"}).wav`,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}e.exports=i},64952:function(e,t,n){e.exports.WavRecorder=n(38966),n(31760),n(94171)},31760:function(e){function t(e,t,n){for(let r=0;r<e.length;++r)t[n+r]=e.charCodeAt(r)}function n(e,t,n){e=Math.floor(e),t[n+0]=255&e,t[n+1]=e>>8&255}function r(e,t,n){e=Math.floor(e),t[n+0]=255&e,t[n+1]=e>>8&255,t[n+2]=e>>16&255,t[n+3]=e>>24&255}async function i(e,t){let n=e;n instanceof Blob||(n=new Blob([e]));let r=URL.createObjectURL(n),i=await fetch(r),a=await i.arrayBuffer(),o=new AudioContext(t),c=await o.decodeAudioData(a);return c}async function a(e,a,o){let c=await i(e,o),s=c.length,d=c.numberOfChannels,u=c.sampleRate,l=a?32:16,f=s*d*(l/8),p=new Uint8Array(44+f);return t("RIFF",p,0),r(28+(8+f),p,4),t("WAVE",p,8),t("fmt ",p,12),r(16,p,16),n(a?3:1,p,20),n(d,p,22),r(u,p,24),r(u*d*l/8,p,28),n(d*l/8,p,32),r(l,p,34),t("data",p,36),r(f,p,40),!function(e,t,i,a){let o,c,s=0,d=0,u=e.length,l=e.numberOfChannels;for(s=0;s<u;++s)for(d=0;d<l;++d)if(o=e.getChannelData(d),16===a)(c=32768*o[s])<-32768?c=-32768:c>32767&&(c=32767),n(c,t,i),i+=2;else if(32===a)r(c=function(e){let t=new ArrayBuffer(4);new Float32Array(t)[0]=e;let n=new Uint32Array(t)[0];return 0|n}(o[s]),t,i),i+=4;else{console.log("Invalid bit depth for PCM encoding.");return}}(c,p,44,l),new Blob([p],{type:"audio/wave"})}e.exports=a}}]);