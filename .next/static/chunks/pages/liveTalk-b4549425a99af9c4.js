(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{89989:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e));var l=(a=r({},a,t)).loader;return(a.loadableGenerated&&(a=r({},a,a.loadableGenerated),delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n(r({},a,{loader:function(){return null!=l?l().then(u):Promise.resolve(u(function(){return null}))}})):(delete a.webpack,delete a.modules,i(n,a))},t.noSSR=i;var r=n(6495).Z,a=n(92648).Z,o=(a(n(67294)),a(n(65686)));function u(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5933:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},65686:function(e,t,n){"use strict";var r=n(33227),a=n(88361);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(6495).Z,i=(0,n(92648).Z)(n(67294)),l=n(5933),s=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var h=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){var t=new h(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!d){var u=n.webpack?n.webpack():n.modules;u&&c.push(function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e))){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,u=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw u}}}}(u);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return a()}}catch(e){n.e(e)}finally{n.f()}})}function s(e,t){a(),(o=i.default.useContext(l.LoadableContext))&&Array.isArray(n.modules)&&n.modules.forEach(function(e){o(e)});var o,u=i.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return i.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),i.default.useMemo(function(){var t;return u.loading||u.error?i.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?i.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return s.preload=function(){return a()},s.displayName="LoadableComponent",i.default.forwardRef(s)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}p.preloadAll=function(){return new Promise(function(e,t){m(s).then(e,t)})},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return d=!0,t()};m(c,e).then(n,n)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},60541:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(67294),a=n(5152),o=n.n(a),u=n(39205),i=n(3679),l=n(42075),s=n(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"},d=n(98615),f=function(e,t){return r.createElement(d.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:t,icon:c}))};f.displayName="NotificationOutlined";var h=r.forwardRef(f),p=n(38085),m=n(35944),y=u.Z.Title,_=u.Z.Paragraph,v=o()(function(){return Promise.all([n.e(361),n.e(722),n.e(909)]).then(n.bind(n,51909))},{ssr:!1,loadableGenerated:{webpack:function(){return[51909]}}}),b={name:"1p572xj",styles:"display:flex;height:9rem;flex-direction:column;align-items:center;justify-content:center"},g={name:"bjn8wh",styles:"position:relative"},w=function(){return(0,m.tZ)(i.Z,{children:(0,m.BX)("div",{css:b,children:[(0,m.tZ)(y,{children:"Live talk"}),(0,m.tZ)(_,{children:"Click the record button below to start talking to the speaker"}),(0,m.tZ)("div",{css:g,children:(0,m.BX)(l.Z,{children:[(0,m.tZ)(v,{}),(0,m.tZ)(p.Ab,{soundName:"Announcement",icon:(0,m.tZ)(h,{}),shape:"circle"})]})})]})})}},37854:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liveTalk",function(){return n(60541)}])},5152:function(e,t,n){e.exports=n(89989)}},function(e){e.O(0,[149,679,543,484,85,774,888,179],function(){return e(e.s=37854)}),_N_E=e.O()}]);