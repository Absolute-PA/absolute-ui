(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{38085:function(e,n,t){"use strict";t.d(n,{dA:function(){return em},jU:function(){return eq},Sq:function(){return eR},DF:function(){return ev},gH:function(){return eJ},Ab:function(){return eW},Rf:function(){return eO}});var r=t(59499),o=t(4730),i=t(67294),c=t(5298),a=t(35944),u=["onFinish","children"];function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var l=function(e){var n=e.onFinish,t=e.children,r=(0,o.Z)(e,u),s=(0,i.useCallback)(function(e){var t=d({},e);null==n||n(t)},[n]);return(0,a.BX)(a.HY,{children:[" ",(0,a.tZ)(c.Z,d(d({name:"sound-info-form",layout:"vertical",onFinish:s},r),{},{children:t}))]})},p=t(75008),f=function(){return(0,a.tZ)(a.HY,{children:(0,a.tZ)(c.Z.Item,{name:"name",label:"Name",rules:[{required:!0}],children:(0,a.tZ)(p.Z,{})})})},y=t(88484),g=t(2453),b=t(72708),v=t(71577);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var O=function(){return(0,a.tZ)(a.HY,{children:(0,a.tZ)(c.Z.Item,{name:"file",getValueFromEvent:function(e){return null==e?void 0:e.fileList[0].originFileObj},children:(0,a.tZ)(b.Z,m(m({},{beforeUpload:function(e){var n=["audio/mpeg","audio/wav"].includes(e.type);return n||g.ZP.error("".concat(e.type," is not a audio file")),n||b.Z.LIST_IGNORE}}),{},{maxCount:1,children:(0,a.tZ)(v.ZP,{icon:(0,a.tZ)(y.Z,{}),children:"Select File"})}))})})},Z=["onFinish","children"];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var j=function(e){var n=e.onFinish,t=e.children,r=(0,o.Z)(e,Z),u=(0,i.useCallback)(function(e){var t=S({},e);null==n||n(t)},[n]);return(0,a.tZ)(c.Z,S(S({name:"sound-file-form",layout:"vertical",onFinish:u},r),{},{children:t}))},P=t(50029),T=t(16835),k=t(87794),C=t.n(k),x=t(3363),E=t(4034);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var D={name:"1u3ja41",styles:"margin-top:24px;display:flex;flex-direction:row-reverse"},N={name:"1u3ja41",styles:"margin-top:24px;display:flex;flex-direction:row-reverse"},I={name:"yz1nei",styles:"margin-top:16px"},A=function(e){var n,t,r=e.onFinish,o=e.type,c=(0,E.Y1)(),u=(0,T.Z)(c,2),s=u[0],d=u[1].isLoading,p=(0,E.Cp)(),y=(0,T.Z)(p,1)[0],g=(0,i.useState)(""),b=g[0],h=g[1],m=(0,i.useState)(0),Z=m[0],w=m[1],S=(0,i.useCallback)((n=(0,P.Z)(C().mark(function e(n){var t,r;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(F({},n),{},{type:o}),e.next=3,s({data:t});case 3:"data"in(r=e.sent)&&(h(r.data._id),w(Z+1));case 5:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),[s,Z,o]),k=(0,i.useCallback)((t=(0,P.Z)(C().mark(function e(n){var t;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",n.file),e.next=4,y({id:b,data:t});case 4:"data"in e.sent&&r();case 6:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),[y,b,r]),L=[{title:"Information",content:(0,a.BX)(l,{onFinish:S,children:[(0,a.tZ)(f,{}),(0,a.tZ)("div",{css:D,children:(0,a.tZ)(v.ZP,{type:"primary",htmlType:"submit",loading:d,children:"Create"})})]})},{title:"Upload",content:(0,a.BX)(j,{onFinish:k,children:[(0,a.tZ)(O,{}),(0,a.tZ)("div",{css:N,children:(0,a.tZ)(v.ZP,{type:"primary",htmlType:"submit",loading:d,children:"Upload"})})]})}],A=L.map(function(e){return{key:e.title,title:e.title}});return(0,a.BX)(a.HY,{children:[(0,a.tZ)(x.Z,{current:Z,items:A}),(0,a.tZ)("div",{css:I,children:L[Z].content})]})},B=t(89734),_=t.n(B),X=t(39205),M=t(42075),R=t(70149),V=t(37107),$=t(41248),Y=t(31955),q=t(21255),J=t(18269),H=function(e){var n=e.id,t=(0,$.I0)(),r=Y.Z.get(J._),o="".concat((0,V.L)(),"/sound/").concat(n,"/upload");return(0,a.tZ)(b.Z,{action:o,showUploadList:!1,maxCount:1,onChange:function(e){"done"===e.file.status&&t(q.e.util.invalidateTags([{type:q.$.TuneList},{type:q.$.SongList}]))},headers:{Authorization:"Bearer ".concat(r)},children:(0,a.tZ)(v.ZP,{icon:(0,a.tZ)(y.Z,{}),children:"Replace File"})})},z=t(64082),U=t(8473),W=b.Z.Dragger,G={name:"4zleql",styles:"display:block"},Q=function(e){var n=e.soundType,t=(0,$.I0)(),r="".concat((0,V.L)(),"/sound/upload/").concat(n);return(0,a.BX)(W,{action:r,onChange:function(e){var r=e.file,o=[];switch(n){case U.SoundType.Song:o=[{type:q.$.SongList}];break;case U.SoundType.Tune:o=[{type:q.$.TuneList}]}"done"===r.status&&t(q.e.util.invalidateTags(o))},accept:"audio/*",css:G,headers:{Authorization:"Bearer ".concat(Y.Z.get(J._))},multiple:!0,children:[(0,a.tZ)("p",{className:"ant-upload-drag-icon",children:(0,a.tZ)(z.Z,{})}),(0,a.tZ)("p",{className:"ant-upload-text",children:"Click or drag files to this area to upload"})]})},K=function(e){switch(e){case U.SoundType.Song:return E.wi;case U.SoundType.Tune:return E.eW;default:throw Error("Invalid sound type")}},ee=t(5737),en=function(e){var n=e.className,t=e.soundId,r=(0,E.z1)(),o=(0,T.Z)(r,1)[0];return(0,a.tZ)(ee.Z,{className:n,title:"Delete the sound",description:"Are you sure to delete this sound?",onConfirm:function(){o({id:t,data:void 0})},okText:"Yes",cancelText:"No",children:(0,a.tZ)("a",{children:"Delete"})})},et=t(9443);function er(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function eo(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?er(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):er(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var ei=function(e){e.className;var n,t=e.sound,r=(0,i.useState)(!1),o=r[0],c=r[1],u=(0,E.bY)(),s=(0,T.Z)(u,2),d=s[0],p=s[1].isLoading,y=function(){return c(!1)},g=(n=(0,P.Z)(C().mark(function e(n){var r;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=eo(eo({},n),{},{priority:1}),e.next=3,d({id:t._id,data:r});case 3:"data"in e.sent&&y();case 5:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),b=(0,i.useMemo)(function(){return{name:t.name}},[t]);return(0,a.BX)(a.HY,{children:[(0,a.tZ)("a",{onClick:function(){return c(!0)},children:"Edit"}),(0,a.tZ)(et.dy,{title:"Edit Sound",open:o,onClose:function(){return c(!1)},children:(0,a.BX)(l,{initialValues:b,onFinish:g,children:[(0,a.tZ)(f,{}),(0,a.BX)(et.dy.FooterActions,{children:[(0,a.tZ)(v.ZP,{onClick:y,disabled:p,children:"Cancel"}),(0,a.tZ)(v.ZP,{type:"primary",htmlType:"submit",loading:p,children:"Save"})]})]})})]})},ec=t(71338),ea=t(53575);function eu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function es(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?eu(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eu(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var ed={0:"0",50:"50",100:{style:{color:"#f50"},label:"100"}},el={name:"s5xdrg",styles:"display:flex;align-items:center"},ep={name:"1d3w5wq",styles:"width:100%"},ef={name:"1x3jg5i",styles:"margin-left:0.75rem"},ey=function(e){e.className;var n=e.soundData,t=(0,E.CR)(),r=(0,T.Z)(t,1)[0],o=(0,i.useState)(n.volume),c=o[0],u=o[1];return(0,i.useEffect)(function(){var e=setTimeout(function(){r({id:n._id,data:es(es({},n),{},{volume:c})})},500);return function(){return clearTimeout(e)}},[c]),(0,a.BX)("div",{css:el,children:[(0,a.tZ)(ec.Z,{css:ep,defaultValue:50,onChange:function(e){u(e)},value:c,marks:ed}),(0,a.tZ)("div",{css:ef,children:(0,a.tZ)(ea.Z,{count:c,color:"rgb(45, 183, 245)",showZero:!0})})]})},eg=X.Z.Title,eb=[{title:"Name",dataIndex:"name",key:"name",render:function(e,n){return(0,a.BX)("div",{children:[(0,a.tZ)(eg,{level:4,children:e}),(0,a.BX)("div",{children:["ID: ",n._id]})]})}},{title:"Tune",dataIndex:"fileName",key:"fileName",render:function(e,n){return(0,a.BX)(M.Z,{children:[e&&(0,a.tZ)("audio",{src:"".concat((0,V.L)(),"/assets/audio/").concat(e),controls:!0}),(0,a.tZ)(H,{id:n._id})]})}},{title:"Volume",key:"volume",width:200,render:function(e,n){return(0,a.tZ)(ey,{soundData:n})}},{title:"Actions",key:"actions",render:function(e,n){return(0,a.tZ)(M.Z,{size:"middle",children:!n.isDefault&&(0,a.BX)(a.HY,{children:[(0,a.tZ)(ei,{sound:n})," ",(0,a.tZ)(en,{soundId:n._id})]})})}}],ev=function(e){var n=e.className,t=e.titleExtra,r=K(e.soundType)(void 0),o=r.data,c=r.isLoading,u=(0,i.useMemo)(function(){return o?_()(o,function(e){return-e.isDefault}):[]},[o]);return(0,a.tZ)(R.Z,{caption:t?(0,a.tZ)(M.Z,{children:t}):void 0,className:n,loading:c,columns:eb,dataSource:u,rowKey:function(e){return e._id}})},eh=t(51042),em=function(e){var n=e.className,t=e.soundType,r=e.title,o=(0,i.useState)(!1),c=o[0],u=o[1],s=(0,i.useCallback)(function(){u(!0)},[]),d=(0,i.useCallback)(function(){u(!1)},[]);return(0,a.BX)(a.HY,{children:[(0,a.tZ)(v.ZP,{className:n,type:"primary",onClick:s,icon:(0,a.tZ)(eh.Z,{}),children:r}),(0,a.tZ)(et.dy,{title:r,open:c,onClose:d,destroyOnClose:!0,children:(0,a.tZ)(A,{type:t,onFinish:d})})]})},eO=function(e){var n=e.className,t=e.soundType,r=e.title,o=(0,i.useState)(!1),c=o[0],u=o[1],s=(0,i.useCallback)(function(){u(!0)},[]),d=(0,i.useCallback)(function(){u(!1)},[]);return(0,a.BX)(a.HY,{children:[(0,a.tZ)(v.ZP,{className:n,type:"primary",onClick:s,icon:(0,a.tZ)(eh.Z,{}),children:r}),(0,a.BX)(et.dy,{title:r,open:c,onClose:d,destroyOnClose:!0,children:[(0,a.tZ)(Q,{soundType:t}),(0,a.tZ)(et.dy.FooterActions,{children:(0,a.tZ)(v.ZP,{onClick:d,children:"Cancel"})})]})]})},eZ=t(13179),ew=t(71578),eS=t(10844),ej=t(38806),eP=t(1264),eT=t(53014),ek=function(){return(0,a.tZ)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.4601 3.25C16.4601 4.35 15.5601 5.25 14.4601 5.25C13.3601 5.25 12.4601 4.35 12.4601 3.25C12.4601 2.15 13.3601 1.25 14.4601 1.25C15.5601 1.25 16.4601 2.15 16.4601 3.25ZM11.8601 14.75L11.2901 17.25C11.0501 18.31 10.0101 18.98 8.95011 18.77L4.84011 17.95C4.30011 17.84 3.95011 17.31 4.06011 16.77V16.73C4.17011 16.19 4.70011 15.84 5.24011 15.95L9.16011 16.75L10.7601 8.65L8.96011 9.35V11.75C8.96011 12.3 8.51011 12.75 7.96011 12.75C7.41011 12.75 6.96011 12.3 6.96011 11.75V9.38C6.96011 8.57 7.44011 7.85 8.18011 7.53L12.1601 5.85C12.3101 5.85 12.4351 5.825 12.5601 5.8C12.6851 5.775 12.8101 5.75 12.9601 5.75C13.6601 5.75 14.2601 6.15 14.6601 6.75L15.6601 8.35C16.3301 9.53 17.5901 10.43 19.1101 10.68C19.6001 10.76 19.9601 11.17 19.9601 11.66C19.9601 12.27 19.4201 12.75 18.8201 12.66C17.0801 12.38 15.5301 11.49 14.4601 10.25L13.8601 13.25L15.3401 14.66C15.7401 15.04 15.9601 15.56 15.9601 16.11V21.75C15.9601 22.3 15.5101 22.75 14.9601 22.75C14.4101 22.75 13.9601 22.3 13.9601 21.75V16.75L11.8601 14.75Z",fill:"#CC3939"})})};function eC(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var ex=t(33957),eE=(0,eZ.Z)("div",{target:"e1jncfg21"})(".btn-active{background-color:",function(e){var n=e.config;return"".concat(n.hoverBackgroundColor)},"!important;.btn-icon{transition:top 0.5s ease;background-color:",function(e){var n=e.config;return"".concat(n.backgroundColor)},";top:31px;}.tune-name{opacity:0;}}"),eL=(0,eZ.Z)("div",{target:"e1jncfg20"})("position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;overflow:hidden;border-radius:1.5rem;border-width:2px;border-style:solid; transition:background-color 0.5s ease,border-color 0.5s ease;width:160px;height:110px;background-color:",function(e){var n=e.config;return"".concat(n.backgroundColor)},";border-color:",function(e){var n=e.config;return"".concat(n.backgroundColor)},";color:",function(e){var n=e.config;return"".concat(n.color)},";.circle1,.circle2,.circle3{animation:growAndFade 2s infinite ease-out;position:absolute;background-color:",function(e){var n=e.config;return"".concat(n.color)},";border-radius:50%;opacity:0;height:200px;width:200px;}.circle1{animation-delay:0s;}.circle2{animation-delay:0.5s;}.circle3{animation-delay:1s;}.btn-icon{position:absolute;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0.75rem; transition:background-color 0.5s ease,top 0.5s ease;top:20px;svg{width:20px;height:20px;}}.tune-name{transition:opacity 0.3s ease;font-weight:bold;opacity:1;margin-top:60px;}:hover{cursor:pointer;border-width:2px;border-style:solid; border-color:",function(e){var n=e.config;return"".concat(n.backgroundColor)},";background-color:",function(e){var n=e.config;return"".concat(n.hoverBackgroundColor)},";.btn-icon{background-color:",function(e){var n=e.config;return"".concat(n.backgroundColor)},";}}@keyframes growAndFade{0%{opacity:0.25;transform:scale(0);}100%{opacity:0;transform:scale(1);}}"),eF=function(e){var n,t=e.sound,r=e.config,o=e.isRepeat,i=(0,E.V4)(),c=(0,T.Z)(i,1)[0],u=(0,ex.M)(t._id);console.log("Sound ".concat(t.name," | id: ").concat(t._id," - playing: ").concat(null==u?void 0:u.isPlaying," - jobId: ").concat(t.jobId));var s=(null==u?void 0:u.isPlaying)!==void 0?u.isPlaying:!!t.jobId;return(0,a.tZ)(eE,{config:r,children:(0,a.BX)(eL,{config:r,className:s?"btn-active":"",onClick:function(){if(null!=t&&t.fileName){var e=s?U.SoundAction.Stop:U.SoundAction.Play;c({id:t._id,data:{action:e,isRepeat:!!o&&e===U.SoundAction.Play}})}},children:[s&&(0,a.BX)(a.HY,{children:[(0,a.tZ)("div",{className:"circle1"}),(0,a.tZ)("div",{className:"circle2"}),(0,a.tZ)("div",{className:"circle3"})]}),(n=r.icon,(0,a.tZ)(n,{className:"btn-icon"})),(0,a.tZ)("div",{className:"tune-name",children:t.name})]})})},eD={Bell:{backgroundColor:"#EEFFEC",hoverBackgroundColor:"#FAFFFA",color:"#45CC39",icon:ew.Z},Alert:{backgroundColor:"#FEF3E8",hoverBackgroundColor:"#FFFDFA",color:"#FF7F00",icon:eS.Z},Evac:{backgroundColor:"#FFECEC",hoverBackgroundColor:"#FFFAFA",color:"#CC3939",icon:function(e){return(0,a.tZ)(eT.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?eC(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eC(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({component:ek},e))}},Lockdown:{backgroundColor:"#F4ECFF",hoverBackgroundColor:"#FCFAFF",color:"#7439CC",icon:ej.Z},Default:{backgroundColor:"#F2F2F2",hoverBackgroundColor:"#FFFFFF",color:"#333333",icon:eP.Z}},eN=["Evac","Alert","Lockdown"],eI=(0,eZ.Z)("div",{target:"e1ee6m720"})({name:"vh84jn",styles:"border-radius:1.5rem;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:24px;--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);"}),eA={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},eB={name:"104upgs",styles:"margin-bottom:1rem;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))"},e_={name:"f7ay7b",styles:"justify-content:center"},eX={name:"15kc9q",styles:"margin-bottom:1rem;margin-top:3.5rem;--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity))"},eM={name:"f7ay7b",styles:"justify-content:center"},eR=function(e){var n=e.className,t=(0,E.eW)(void 0,{refetchOnMountOrArgChange:!0}).data;if(!(null!=t&&t.length))return null;var r=eN.map(function(e){return t.find(function(n){return n.name===e})}).filter(function(e){return!!e}),o=t.filter(function(e){return!e.isDefault}),i=t.find(function(e){return"Bell"===e.name});return i&&o.unshift(i),(0,a.BX)(eI,{className:n,css:eA,children:[(0,a.tZ)("span",{css:eB,children:"Emergency"}),(0,a.tZ)(M.Z,{wrap:!0,size:"large",css:e_,children:r.map(function(e){return(0,a.tZ)(eF,{sound:e,config:eD[e.name]||eD.Default,isRepeat:!0},e._id)})}),(0,a.tZ)("span",{css:eX,children:"Others"}),(0,a.tZ)(M.Z,{wrap:!0,size:"large",css:eM,children:o.map(function(e){return(0,a.tZ)(eF,{sound:e,config:eD[e.name]||eD.Default},e._id)})})]})},eV=t(54689);function e$(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function eY(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?e$(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):e$(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var eq=function(e){var n,t=(0,E.kd)(),r=(0,T.Z)(t,1)[0],o=eV.Z.useNotification(),i=(0,T.Z)(o,2),c=i[0],u=i[1],s=(n=(0,P.Z)(C().mark(function e(){return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:"data"in e.sent&&c.success({message:"Reset Tunes",description:"Reset tunes successfully"});case 4:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});return(0,a.BX)(a.HY,{children:[u,(0,a.tZ)(ee.Z,{title:"Reset all tunes",description:"Are you sure to reset all tunes?",onConfirm:s,okText:"Yes",cancelText:"No",children:(0,a.tZ)(v.ZP,eY(eY({danger:!0},e),{},{children:"Reset Tunes"}))})]})},eJ=function(e){var n=e.soundId,t=(0,E.wi)().data,r=(0,E.eW)().data,o=(null==t?void 0:t.find(function(e){return e._id===n}))||(null==r?void 0:r.find(function(e){return e._id===n}));return o?(0,a.tZ)("span",{children:o.name}):null},eH=function(e){var n=(0,i.useState)(new Audio(e))[0],t=(0,i.useState)(!1),r=t[0],o=t[1];return(0,i.useEffect)(function(){r?n.play():n.pause()},[r]),(0,i.useEffect)(function(){return n.addEventListener("ended",function(){return o(!1)}),function(){n.removeEventListener("ended",function(){return o(!1)})}},[]),[r,function(){return o(!r)}]},ez=["soundName","className"];function eU(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var eW=function(e){var n,t=e.soundName,c=e.className,u=(0,o.Z)(e,ez),s=K(U.SoundType.Tune)(),d=s.data,l=s.isLoading,p=(0,i.useMemo)(function(){return null==d?void 0:d.find(function(e){return e.name===t})},[d,t]),f=eH("".concat((0,V.L)(),"/assets/audio/").concat(null==p?void 0:p.fileName)),y=(0,T.Z)(f,2),g=y[0],b=y[1],h=(0,E.V4)(),m=(0,T.Z)(h,1)[0],O=(n=(0,P.Z)(C().mark(function e(){return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m({id:p._id,data:{action:U.SoundAction.Play,isRepeat:!1}});case 4:b();case 5:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});return(0,a.tZ)(v.ZP,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?eU(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eU(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({className:"SoundPlayerButton ".concat(void 0===c?"":c),loading:g||l,onClick:O},u))}},33957:function(e,n,t){"use strict";t.d(n,{M:function(){return s}});var r=t(18446),o=t.n(r),i=t(23279),c=t.n(i),a=t(67294),u=t(37644),s=function(e){var n=(0,a.useState)(null),t=n[0],r=n[1];return(0,a.useEffect)(function(){var n=c()(function(e){r(e)},300),i=function(r){if(r instanceof CustomEvent){var i=r.detail;(null==i?void 0:i.id)!==e||o()(i,t)||(console.log("payload: ",i),n(i))}};return window.addEventListener(u.w.Playing,i),function(){window.removeEventListener(u.w.Playing,i)}},[t,e]),t}},4034:function(e,n,t){"use strict";t.d(n,{Y1:function(){return c},z1:function(){return u},wi:function(){return p},eW:function(){return d},kd:function(){return O},V4:function(){return y},bY:function(){return b},CR:function(){return w},Cp:function(){return h}});var r=t(21255),o=t(13306),i=r.e.injectEndpoints({endpoints:function(e){return{createSound:e.mutation({query:function(e){var n=e.data;return o.dJ.post("/sound",{data:n})},invalidatesTags:function(){return[{type:r.$.TuneList,id:"LIST"},{type:r.$.SongList,id:"LIST"}]}})}}}),c=i.useCreateSoundMutation;i.endpoints.createSound;var a=r.e.injectEndpoints({endpoints:function(e){return{deleteSound:e.mutation({query:function(e){var n=e.id;return e.data,o.dJ.delete("/sound/".concat(n))},invalidatesTags:function(){return[{type:r.$.TuneList,id:"LIST"},{type:r.$.SongList,id:"LIST"}]}})}}}),u=a.useDeleteSoundMutation;a.endpoints.deleteSound;var s=r.e.injectEndpoints({endpoints:function(e){return{getTunes:e.query({query:function(){return o.dJ.get("/sound/tunes")},providesTags:function(){return[{type:r.$.TuneList,id:"LIST"}]}})}}}),d=s.useGetTunesQuery;s.endpoints.getTunes;var l=r.e.injectEndpoints({endpoints:function(e){return{getSongs:e.query({query:function(){return o.dJ.get("/sound/songs")},providesTags:function(){return[{type:r.$.SongList,id:"LIST"}]}})}}}),p=l.useGetSongsQuery;l.endpoints.getSongs;var f=r.e.injectEndpoints({endpoints:function(e){return{toggleSound:e.mutation({query:function(e){var n=e.id,t=e.data;return o.dJ.post("/sound/".concat(n,"/").concat(t.action),{params:{repeat:t.isRepeat}})},invalidatesTags:function(){return[{type:r.$.TuneList,id:"LIST"},{type:r.$.SongList,id:"LIST"}]}})}}}),y=f.useToggleSoundMutation;f.endpoints.toggleSound;var g=r.e.injectEndpoints({endpoints:function(e){return{updateSound:e.mutation({query:function(e){var n=e.id,t=e.data;return o.dJ.patch("/sound/".concat(n),{data:t})},invalidatesTags:function(){return[{type:r.$.TuneList,id:"LIST"},{type:r.$.SongList,id:"LIST"}]}})}}}),b=g.useUpdateSoundMutation;g.endpoints.updateSound;var v=r.e.injectEndpoints({endpoints:function(e){return{uploadSound:e.mutation({query:function(e){var n=e.id,t=e.data;return o.dJ.post("/sound/".concat(n,"/upload"),{data:t})},invalidatesTags:function(){return[{type:r.$.TuneList,id:"LIST"},{type:r.$.SongList,id:"LIST"}]}})}}}),h=v.useUploadSoundMutation;v.endpoints.uploadSound;var m=r.e.injectEndpoints({endpoints:function(e){return{resetTunes:e.mutation({query:function(){return o.dJ.post("/sound/resetTunes")},invalidatesTags:[{type:r.$.TuneList,id:"LIST"}]})}}}),O=m.useResetTunesMutation;m.endpoints.resetTunes;var Z=r.e.injectEndpoints({endpoints:function(e){return{updateVolume:e.mutation({query:function(e){var n=e.id,t=e.data;return o.dJ.patch("/sound/".concat(n,"/volume"),{data:t})},invalidatesTags:function(){return[{type:r.$.TuneList,id:"LIST"},{type:r.$.SongList,id:"LIST"}]}})}}}),w=Z.useUpdateVolumeMutation;Z.endpoints.updateVolume},71304:function(){},37644:function(e,n,t){"use strict";var r;t.d(n,{w:function(){return r}}),(r||(r={})).Playing="playing"},68578:function(e,n,t){"use strict";t.d(n,{SocketEvent:function(){return o.V},SocketType:function(){return o.d}});var r=t(71304);t.o(r,"JobType")&&t.d(n,{JobType:function(){return r.JobType}}),t.o(r,"PlaylistOperation")&&t.d(n,{PlaylistOperation:function(){return r.PlaylistOperation}}),t.o(r,"SocketEvent")&&t.d(n,{SocketEvent:function(){return r.SocketEvent}}),t.o(r,"SocketType")&&t.d(n,{SocketType:function(){return r.SocketType}}),t.o(r,"SoundAction")&&t.d(n,{SoundAction:function(){return r.SoundAction}}),t.o(r,"SoundType")&&t.d(n,{SoundType:function(){return r.SoundType}});var o=t(38962)},38962:function(e,n,t){"use strict";var r,o,i,c;t.d(n,{V:function(){return r},d:function(){return o}}),(i=r||(r={})).Playing="playing",i.Connect="connect",i.ServerPeerId="serverPeerId",(c=o||(o={})).Client="client",c.Server="server"},8473:function(e,n,t){"use strict";t.d(n,{JobType:function(){return o.O},PlaylistOperation:function(){return i.If},SocketEvent:function(){return r.SocketEvent},SocketType:function(){return r.SocketType},SoundAction:function(){return i.kY},SoundType:function(){return i.k6}});var r=t(68578);t.o(r,"JobType")&&t.d(n,{JobType:function(){return r.JobType}}),t.o(r,"PlaylistOperation")&&t.d(n,{PlaylistOperation:function(){return r.PlaylistOperation}}),t.o(r,"SoundAction")&&t.d(n,{SoundAction:function(){return r.SoundAction}}),t.o(r,"SoundType")&&t.d(n,{SoundType:function(){return r.SoundType}});var o=t(12441),i=t(47815)},12441:function(e,n,t){"use strict";var r,o,i,c;t.d(n,{O:function(){return o}}),(i=r||(r={}))[i.Sunday=0]="Sunday",i[i.Monday=1]="Monday",i[i.Tuesday=2]="Tuesday",i[i.Wednesday=3]="Wednesday",i[i.Thursday=4]="Thursday",i[i.Friday=5]="Friday",i[i.Saturday=6]="Saturday",(c=o||(o={})).PlaySound="PlaySound",c.PlayMusic="PlayMusic",c.PlayVoiceRecorded="PlayVoiceRecorded",c.PlayTextToAudio="PlayTextToAudio"},47815:function(e,n,t){"use strict";var r,o,i,c,a,u;t.d(n,{If:function(){return i},kY:function(){return o},k6:function(){return r}}),(c=r||(r={})).Song="Song",c.Tune="Tune",(a=o||(o={})).Play="play",a.Stop="stop",(u=i||(i={})).Play="play",u.Stop="stop"}}]);