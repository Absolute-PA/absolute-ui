(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{89889:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(50029),i=n(16835),a=n(87794),o=n.n(a),c=n(67294),d=n(71577),s=n(75008),l=n(99603),u=n(59417),f=n(64952),h=n(13306),p=n(21255),m=p.e.injectEndpoints({endpoints:function(e){return{uploadVoiceMessage:e.mutation({query:function(e){var t=e.data,n=e.filename,r=new FormData;return r.append("Content-Type",t.type),r.append("file",t,n),h.dJ.post("/upload/message",{data:r,headers:{"Content-Type":"multipart/form-data"}})},invalidatesTags:[{type:p.$.VoiceRecord}]})}}}),y=m.useUploadVoiceMessageMutation;m.endpoints.uploadVoiceMessage;var g=(0,n(13179).Z)("div",{target:"e13w2ygz0"})({name:"ykx4hk",styles:"height:100%;width:100%;position:absolute;background:red;top:0;opacity:0.3;border-radius:50%;animation:1s infinite growing;@keyframes growing{from{scale:1;}to{scale:1.8;}}"}),v=n(42075),w=n(5737),Z=n(70149),k=n(92156),b=n(52357),R=p.e.injectEndpoints({endpoints:function(e){return{deleteVoiceRecord:e.mutation({query:function(e){return h.dJ.delete("/voice/".concat(e))},invalidatesTags:function(e){return[{type:p.$.VoiceRecord}]}})}}}),x=R.useDeleteVoiceRecordMutation;R.endpoints.deleteVoiceRecord;var V=n(35944);function C(){var e=(0,b.YJ)(),t=(0,i.Z)(e,1)[0],n=(0,k.ks)().data,r=x(),a=(0,i.Z)(r,1)[0];if(!n)return null;var o=n.map(function(e){var t=e.fileName,n=e.createdAt;return{fileName:t,filePath:e.filePath,createdAt:n,id:e._id}});return(0,V.tZ)(Z.Z,{columns:[{title:"Voice Name",dataIndex:"fileName",key:"fileName"},{title:"Create Date",dataIndex:"createdAt",key:"createdAt",render:function(e){return(0,V.tZ)("div",{children:new Date(e).toLocaleString()})}},{title:"Play Voice",key:"playVoice",render:function(e,n){return(0,V.tZ)(v.Z,{size:"middle",children:(0,V.tZ)(d.ZP,{type:"link",onClick:function(){t(n.filePath)},children:"Play"})})}},{title:"Delete Voice",key:"deleteVoice",render:function(e,t){return(0,V.tZ)(v.Z,{size:"middle",children:(0,V.tZ)(w.Z,{title:"Delete voice record",description:"Are you sure to delete this voice record?",okText:"Yes",cancelText:"No",onConfirm:function(){return a(t.id)},children:(0,V.tZ)(d.ZP,{type:"link",children:"Delete"})})})}}],dataSource:o})}var A={name:"1mskn91",styles:"display:flex;width:fit-content;flex-direction:column;align-items:center"},_={name:"1azakc",styles:"text-align:center"},B={name:"1denvr5",styles:"margin-bottom:1rem;width:fit-content"},D={name:"1gok8e8",styles:"margin-bottom:0.5rem"},M={name:"1gok8e8",styles:"margin-bottom:0.5rem"};function P(){var e,t,n=(0,c.useState)(),a=n[0],h=n[1];(0,c.useEffect)(function(){h(new f.WavRecorder)},[]);var p=(0,c.useState)(!1),m=p[0],v=p[1],w=(0,c.useState)(null),Z=w[0],k=w[1],b=(0,c.useState)(null),R=b[0],x=b[1],P=(0,c.useState)(""),U=P[0],E=P[1],L=y(),S=(0,i.Z)(L,1)[0],T=(e=(0,r.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=5;break}return null==a||a.stop(),v(!1),setTimeout((0,r.Z)(o().mark(function e(){var t,n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null==a?void 0:a.getBlob();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:n=URL.createObjectURL(t),k(t),x(n);case 8:case"end":return e.stop()}},e)})),500),e.abrupt("return");case 5:null==a||a.start(),v(!0);case 7:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),N=(t=(0,r.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z){e.next=3;break}return e.next=3,S({data:Z,filename:U});case 3:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,V.BX)("div",{children:[(0,V.BX)("div",{css:A,children:[(0,V.tZ)("h1",{children:"Start record your voice"}),R&&(0,V.BX)("figure",{css:_,children:[(0,V.tZ)("figcaption",{children:"Listen your message again"}),(0,V.tZ)("audio",{controls:!0,src:R,children:(0,V.tZ)("a",{href:R,children:"Download your message"})})]}),(0,V.BX)(d.ZP,{css:B,type:"primary",shape:"circle",onClick:T,children:[(0,V.tZ)(l.G,{icon:u.UOM}),m?(0,V.tZ)(g,{}):null]})]}),R&&(0,V.BX)(V.HY,{children:[(0,V.tZ)("div",{css:D,children:(0,V.tZ)(s.Z,{placeholder:"Please enter file name",onChange:function(e){return E(e.target.value)}})}),(0,V.tZ)("div",{css:M,children:(0,V.tZ)(d.ZP,{onClick:N,disabled:!Z,children:"Save"})})]}),(0,V.tZ)(C,{})]})}},92156:function(e,t,n){"use strict";n.d(t,{ks:function(){return o}});var r=n(13306),i=n(21255),a=i.e.injectEndpoints({endpoints:function(e){return{getAllVoicesRecorded:e.query({query:function(){return r.dJ.get("/voice")},providesTags:function(e){return[{type:i.$.VoiceRecord}]}})}}}),o=a.useGetAllVoicesRecordedQuery;a.useLazyGetAllVoicesRecordedQuery,a.endpoints.getAllVoicesRecorded},38966:function(e,t,n){let r=n(31760),i=n(94171);e.exports=class{mediaRecorder;stream;__data;async start(e={audio:!0,video:!1}){if(this.mediaRecorder?.state==="recording")return!0;try{this.stream=await navigator.mediaDevices.getUserMedia(e||{audio:!0,video:!1}),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.ondataavailable=e=>this.__data=e.data}catch(e){return console.error(e),!1}return this.mediaRecorder?.start(),!0}stop(){if(this.mediaRecorder?.state!=="recording")return!0;this.mediaRecorder.stop(),this.mediaRecorder.onstop=()=>{this.stream.getTracks().forEach(e=>e.stop()),this.mediaRecorder=void 0,this.stream=void 0}}async download(e=null,t=!1,n){if(this.__data)return await i(this.__data,t,e,n)}async getBlob(e=!1,t){if(this.__data)return await r(this.__data,e,t)}}},94171:function(e,t,n){let r=n(31760);async function i(e,t,n=null,i){let a=await r(e,t,i),o=document.createElement("a");o.href=window.URL.createObjectURL(a),o.download=n||`recording('${t?"32bit":"16bit"}).wav`,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}e.exports=i},64952:function(e,t,n){e.exports.WavRecorder=n(38966),n(31760),n(94171)},31760:function(e){function t(e,t,n){for(let r=0;r<e.length;++r)t[n+r]=e.charCodeAt(r)}function n(e,t,n){e=Math.floor(e),t[n+0]=255&e,t[n+1]=e>>8&255}function r(e,t,n){e=Math.floor(e),t[n+0]=255&e,t[n+1]=e>>8&255,t[n+2]=e>>16&255,t[n+3]=e>>24&255}async function i(e,t){let n=e;n instanceof Blob||(n=new Blob([e]));let r=URL.createObjectURL(n),i=await fetch(r),a=await i.arrayBuffer(),o=new AudioContext(t),c=await o.decodeAudioData(a);return c}async function a(e,a,o){let c=await i(e,o),d=c.length,s=c.numberOfChannels,l=c.sampleRate,u=a?32:16,f=d*s*(u/8),h=new Uint8Array(44+f);return t("RIFF",h,0),r(28+(8+f),h,4),t("WAVE",h,8),t("fmt ",h,12),r(16,h,16),n(a?3:1,h,20),n(s,h,22),r(l,h,24),r(l*s*u/8,h,28),n(s*u/8,h,32),r(u,h,34),t("data",h,36),r(f,h,40),!function(e,t,i,a){let o,c,d=0,s=0,l=e.length,u=e.numberOfChannels;for(d=0;d<l;++d)for(s=0;s<u;++s)if(o=e.getChannelData(s),16===a)(c=32768*o[d])<-32768?c=-32768:c>32767&&(c=32767),n(c,t,i),i+=2;else if(32===a)r(c=function(e){let t=new ArrayBuffer(4);new Float32Array(t)[0]=e;let n=new Uint32Array(t)[0];return 0|n}(o[d]),t,i),i+=4;else{console.log("Invalid bit depth for PCM encoding.");return}}(c,h,44,u),new Blob([h],{type:"audio/wave"})}e.exports=a}}]);