(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{62919:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(16835),i=n(67294),o=n(75008),a=n(5298),s=n(71577),l=n(3679),u=n(8828),c=n(27812),d=n(42075),f=n(5737),m=n(70149),p=n(13306),Z=n(21255),g=Z.e.injectEndpoints({endpoints:function(e){return{deleteTextToAudio:e.mutation({query:function(e){return p.dJ.delete("/textToAudio/".concat(e))},invalidatesTags:[{type:Z.$.TextToAudio}]})}}}),y=g.useDeleteTextToAudioMutation;g.endpoints.deleteTextToAudio;var h=n(59499),v=n(71338),b=n(53575),w=n(35944);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){(0,h.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={0:"0",50:"50",100:{style:{color:"#f50"},label:"100"}},P={name:"1wnowod",styles:"display:flex;align-items:center;justify-content:center"},k={name:"1d3w5wq",styles:"width:100%"},j={name:"1mys3sh",styles:"margin-left:1rem"},_=function(e){var t=e.voiceData,n=(0,u.fg)(),o=(0,r.Z)(n,1)[0],a=(0,i.useState)(t.volume),s=a[0],l=a[1];return(0,i.useEffect)(function(){var e=setTimeout(function(){o(x(x({},t),{},{volume:s}))},500);return function(){return clearTimeout(e)}},[s]),(0,w.BX)("div",{css:P,children:[(0,w.tZ)(v.Z,{css:k,defaultValue:50,onChange:function(e){l(e)},value:s,marks:O}),(0,w.tZ)("div",{css:j,children:(0,w.tZ)(b.Z,{count:s,color:"rgb(45, 183, 245)",showZero:!0})})]})};function D(){var e=(0,u.fX)(),t=(0,r.Z)(e,1)[0],n=(0,u.HH)(),i=n.data;n.isLoading;var o=y(),a=(0,r.Z)(o,1)[0];if(!i)return null;var l=(0,c.Z)(i).map(function(e){var t=e.message,n=e.createdAt,r=e._id,i=e.volume;return{id:r,message:t,createdAt:n,volume:null!=i?i:50}});return(0,w.tZ)(m.Z,{columns:[{title:"Message",dataIndex:"message",key:"message"},{title:"Create Date",dataIndex:"createdAt",key:"createdAt",render:function(e){return(0,w.tZ)("div",{children:new Date(e).toLocaleString()})}},{title:"Play Message",key:"playMessage",render:function(e,n){return(0,w.tZ)(d.Z,{size:"middle",children:(0,w.tZ)(s.ZP,{type:"link",onClick:function(){t({text:n.message})},children:"Play"})})}},{title:"Volume",key:"volume",render:function(e,t){return(0,w.tZ)(_,{voiceData:t})}},{title:"Delete Message",key:"deleteMessage",render:function(e,t){return(0,w.tZ)(d.Z,{size:"middle",children:(0,w.tZ)(f.Z,{title:"Delete saved message",description:"Are you sure to delete this saved message?",okText:"Yes",cancelText:"No",onConfirm:function(){return a(t.id)},children:(0,w.tZ)(s.ZP,{type:"link",children:"Delete"})})})}}],dataSource:l})}var A=o.Z.TextArea,C=function(){var e=(0,i.useState)([]);e[0],e[1];var t=(0,u.fX)(),n=(0,r.Z)(t,1)[0],o=(0,u.qT)(),l=(0,r.Z)(o,1)[0],c=a.Z.useForm(),d=(0,r.Z)(c,1)[0];return(0,w.BX)(w.HY,{children:[(0,w.BX)(a.Z,{name:"basic",form:d,labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{remember:!0},onFinish:function(e){var t=e.message;console.log("Success:",t),n({text:t})},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",layout:"vertical",children:[(0,w.tZ)(a.Z.Item,{label:"Text to convert to speech",name:"message",rules:[{required:!0,message:"Please input your message!"}],children:(0,w.tZ)(A,{})}),(0,w.BX)(a.Z.Item,{wrapperCol:{offset:5},children:[(0,w.tZ)(s.ZP,{type:"primary",htmlType:"submit",children:"Play text as speech"}),(0,w.tZ)(s.ZP,{htmlType:"button",onClick:function(){console.log(d.getFieldValue("message"),"ss"),l({text:d.getFieldValue("message")})},style:{marginLeft:"20px"},children:"Save text"})]})]}),(0,w.tZ)("h1",{children:"Saved Messages"})]})},E=function(){return(0,w.BX)(l.Z,{children:[(0,w.tZ)(C,{}),(0,w.tZ)(D,{})]})}},8753:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/text-to-audio",function(){return n(62919)}])}},function(e){e.O(0,[907,679,80,774,888,179],function(){return e(e.s=8753)}),_N_E=e.O()}]);