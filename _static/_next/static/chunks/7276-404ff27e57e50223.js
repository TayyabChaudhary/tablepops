(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276,6764,9890,462,6974,6956,11],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return j}});var n=r(8947),o=r(5697),a=r.n(o),l=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var d=["style"];function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=b(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var h=!1;try{h=!0}catch(x){}function v(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}var g=["forwardedRef"];function j(e){var t=e.forwardedRef,r=u(e,g),o=r.icon,a=r.mask,l=r.symbol,i=r.className,c=r.title,y=r.titleId,b=r.maskId,d=v(o),m=O("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,l=e.shake,i=e.flash,f=e.spin,c=e.spinPulse,u=e.spinReverse,p=e.pulse,y=e.fixedWidth,b=e.inverse,d=e.border,m=e.listItem,h=e.flip,v=e.size,O=e.rotation,g=e.pull,j=(s(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":l,"fa-flash":i,"fa-spin":f,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":y,"fa-inverse":b,"fa-border":d,"fa-li":m,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),"undefined"!==typeof v&&null!==v),s(t,"fa-rotate-".concat(O),"undefined"!==typeof O&&null!==O&&0!==O),s(t,"fa-pull-".concat(g),"undefined"!==typeof g&&null!==g),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map((function(e){return j[e]?e:null})).filter((function(e){return e}))}(r)),p(i.split(" ")))),x=O("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),k=O("mask",v(a)),P=(0,n.qv)(d,f(f(f(f({},m),x),k),{},{symbol:l,title:c,titleId:y,maskId:b}));if(!P)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var E=P.abstract,I={ref:t};return Object.keys(r).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(I[e]=r[e])})),w(E[0],I)}j.displayName="FontAwesomeIcon",j.propTypes={beat:a().bool,border:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},j.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=u(n,d);return a.attrs.style=f(f({},a.attrs.style),i),t.apply(void 0,[r.tag,f(f({},a.attrs),c)].concat(p(o)))}.bind(null,l.createElement)},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(f){i=!0,o=f}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),f=r(880),c=r(9246);function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u={};function p(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var y=l.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,y=e.href,b=e.as,d=e.children,m=e.prefetch,h=e.passHref,v=e.replace,O=e.shallow,g=e.scroll,j=e.locale,w=e.onClick,x=e.onMouseEnter,k=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=d,a&&"string"===typeof r&&(r=l.default.createElement("a",null,r));var P,E=!1!==m,I=f.useRouter(),S=l.default.useMemo((function(){var e=o(i.resolveHref(I,y,!0),2),t=e[0],r=e[1];return{href:t,as:b?i.resolveHref(I,b):r||t}}),[I,y,b]),A=S.href,C=S.as,T=l.default.useRef(A),_=l.default.useRef(C);a&&(P=l.default.Children.only(r));var L=a?P&&"object"===typeof P&&P.ref:t,R=o(c.useIntersection({rootMargin:"200px"}),3),N=R[0],M=R[1],U=R[2],D=l.default.useCallback((function(e){_.current===C&&T.current===A||(U(),_.current=C,T.current=A),N(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[C,L,A,U,N]);l.default.useEffect((function(){var e=M&&E&&i.isLocalURL(A),t="undefined"!==typeof j?j:I&&I.locale,r=u[A+"%"+C+(t?"%"+t:"")];e&&!r&&p(I,A,C,{locale:t})}),[C,A,M,j,E,I]);var W={ref:D,onClick:function(e){a||"function"!==typeof w||w(e),a&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,f){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:f,scroll:l}))}(e,I,A,C,v,O,g,j)},onMouseEnter:function(e){a||"function"!==typeof x||x(e),a&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),i.isLocalURL(A)&&p(I,A,C,{priority:!0})}};if(!a||h||"a"===P.type&&!("href"in P.props)){var z="undefined"!==typeof j?j:I&&I.locale,H=I&&I.isLocaleDomain&&i.getDomainLocale(C,z,I&&I.locales,I&&I.domainLocales);W.href=H||i.addBasePath(i.addLocale(C,z,I&&I.defaultLocale))}return a?l.default.cloneElement(P,W):l.default.createElement("a",Object.assign({},k,W),r)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);