(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3886],{5955:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/How/main",function(){return s(225)}])},1551:function(e,t,s){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,r,i=[],l=!0,a=!1;try{for(s=s.call(e);!(l=(n=s.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(o){a=!0,r=o}finally{try{l||null==s.return||s.return()}finally{if(a)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=(i=s(7294))&&i.__esModule?i:{default:i},a=s(1003),o=s(880),c=s(9246);function d(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var u={};function x(e,t,s,n){if(e&&a.isLocalURL(t)){e.prefetch(t,s,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+s+(r?"%"+r:"")]=!0}}var h=l.default.forwardRef((function(e,t){var s,n=e.legacyBehavior,i=void 0===n?!0!==Boolean(!1):n,h=e.href,f=e.as,p=e.children,m=e.prefetch,j=e.passHref,v=e.replace,b=e.shallow,y=e.scroll,g=e.locale,w=e.onClick,N=e.onMouseEnter,_=d(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);s=p,i&&"string"===typeof s&&(s=l.default.createElement("a",null,s));var k,E=!1!==m,C=o.useRouter(),T=l.default.useMemo((function(){var e=r(a.resolveHref(C,h,!0),2),t=e[0],s=e[1];return{href:t,as:f?a.resolveHref(C,f):s||t}}),[C,h,f]),O=T.href,L=T.as,S=l.default.useRef(O),P=l.default.useRef(L);i&&(k=l.default.Children.only(s));var R=i?k&&"object"===typeof k&&k.ref:t,A=r(c.useIntersection({rootMargin:"200px"}),3),D=A[0],M=A[1],H=A[2],I=l.default.useCallback((function(e){P.current===L&&S.current===O||(H(),P.current=L,S.current=O),D(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[L,R,O,H,D]);l.default.useEffect((function(){var e=M&&E&&a.isLocalURL(O),t="undefined"!==typeof g?g:C&&C.locale,s=u[O+"%"+L+(t?"%"+t:"")];e&&!s&&x(C,O,L,{locale:t})}),[L,O,M,g,E,C]);var U={ref:I,onClick:function(e){i||"function"!==typeof w||w(e),i&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,s,n,r,i,l,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(s))&&(e.preventDefault(),t[r?"replace":"push"](s,n,{shallow:i,locale:o,scroll:l}))}(e,C,O,L,v,b,y,g)},onMouseEnter:function(e){i||"function"!==typeof N||N(e),i&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),a.isLocalURL(O)&&x(C,O,L,{priority:!0})}};if(!i||j||"a"===k.type&&!("href"in k.props)){var B="undefined"!==typeof g?g:C&&C.locale,z=C&&C.isLocaleDomain&&a.getDomainLocale(L,B,C&&C.locales,C&&C.domainLocales);U.href=z||a.addBasePath(a.addLocale(L,B,C&&C.defaultLocale))}return i?l.default.cloneElement(k,U):l.default.createElement("a",Object.assign({},_,U),s)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},2542:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var n=s(5893),r=(s(5675),s(1664),s(3465));function i(){return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"_main_header min-h-screen overflow-hidden bg-no-repeat",children:[(0,n.jsx)(r.default,{}),(0,n.jsx)("div",{className:"flex justify-center pt-48",children:(0,n.jsxs)("h1",{className:"text-7xl uppercase font-medium hading_main text-white",children:["We are the new ",(0,n.jsx)("br",{})," age of planners"]})}),(0,n.jsx)("div",{className:"flex justify-center pt-3",children:(0,n.jsxs)("p",{className:"text-white text-center text-md main_para",children:["Discover, book and pay curated event pros and vendors who will work with their ",(0,n.jsx)("br",{})," style and budget to design custom real or virtual event experiences on one easy to ",(0,n.jsx)("br",{})," use platform."]})}),(0,n.jsx)("div",{className:"flex justify-center pt-6",children:(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-white text-left text-lg mb-4",children:"Where do you want to host your next event?"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"mb-3 xl:w-96 relative",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"absolute right-4 top-2",fill:"#888",children:(0,n.jsx)("path",{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"})}),(0,n.jsxs)("select",{className:"form-select text-base appearance-none block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 before:focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-label":"Default select example",children:[(0,n.jsx)("option",{selected:!0,className:"text-blue-800",children:"Select Location"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})]})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-white text-center text-lg ml-14 mb-4",children:"On which occassion do you wish to host it?"}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"mb-3 xl:w-96 relative",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"absolute -right-6 top-2",fill:"#888",children:(0,n.jsx)("path",{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"})}),(0,n.jsxs)("select",{className:"form-select ml-10 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 before:focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-label":"Default select example",children:[(0,n.jsx)("option",{selected:!0,className:"text-blue-800",children:"Select Location"}),(0,n.jsx)("option",{value:"1",children:"One"}),(0,n.jsx)("option",{value:"2",children:"Two"}),(0,n.jsx)("option",{value:"3",children:"Three"})]})]})})]})]})}),(0,n.jsx)("div",{className:"flex justify-center pt-10",children:(0,n.jsx)("button",{className:"_event_button p-3 pl-8 pr-8 text-white rounded font-medium",children:"Host an Event"})})]})})}},9801:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var n=s(5893),r=s(3465);function i(){return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"_main_header h-96 bg-cover bg-no-repeat",children:[(0,n.jsx)(r.default,{}),(0,n.jsx)("div",{className:"flex justify-center pt-48",children:(0,n.jsx)("h1",{className:"text-6xl text-white _opaoao",children:"Here\u2019s How it works"})}),(0,n.jsx)("div",{className:"flex justify-center pt-4",children:(0,n.jsx)("h1",{className:"text-xl text-white",children:"Get your party started with 4 easy steps."})})]})})}},85:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var n=s(5893),r=s(5675),i=s.n(r),l=s(3746);function a(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-center pt-16",children:(0,n.jsx)("h1",{className:"text-3xl crush_hading_main",style:{color:"#EE6C4D"},children:"CRUSH YOUR NEXT CELEBRATION IN JUST 4 STEPS"})}),(0,n.jsx)("div",{className:"flex justify-start mr-5 ml-5 mt-10",children:(0,n.jsxs)("div",{className:"flex flex-row justify-between w-full",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(i(),{src:"/image 24.png",width:"300px",height:"200px"}),(0,n.jsx)("h3",{className:"font-medium text-xl mt-3 dishes_and_others",children:"1. DISH YOUR DEETS"}),(0,n.jsxs)("p",{className:"text-xs dishes_and_others_p",children:["Answer a few quick questions ",(0,n.jsx)("br",{})," about your event to meet your"," ",(0,n.jsx)("br",{})," dream team of vendors."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i(),{src:"/image 26.png",width:"300px",height:"200px"}),(0,n.jsx)("h3",{className:"font-medium text-xl mt-3 dishes_and_others",children:"2. PICK YOUR PROS"}),(0,n.jsxs)("p",{className:"text-xs dishes_and_others_p",children:["Choose from a customized list of ",(0,n.jsx)("br",{})," vetted professionals or picka ",(0,n.jsx)("br",{}),"package that fits your functions."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i(),{src:"/image 25.png",width:"300px",height:"200px"}),(0,n.jsx)("h3",{className:"font-medium text-xl mt-3 dishes_and_others",children:"3. COLLAB & CREATE"}),(0,n.jsxs)("p",{className:"text-xs dishes_and_others_p",children:["Work with your team directly in the ",(0,n.jsx)("br",{})," TablePop platform to easily ",(0,n.jsx)("br",{}),"manage every details and to 'do."]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i(),{src:"/image 23.png",width:"300px",height:"200px"}),(0,n.jsx)("h3",{className:"font-medium text-xl mt-3 dishes_and_others",children:"4. CELEBRATE!"}),(0,n.jsxs)("p",{className:"text-xs dishes_and_others_p",children:["Show your quests what true ",(0,n.jsx)("br",{})," hospitality looks like and serve the ",(0,n.jsx)("br",{}),"party the minutes they arrive."]})]})]})}),(0,n.jsx)(l.default,{})]})}},3746:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var n=s(5893),r=s(5675),i=s.n(r),l=s(7344);function a(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"pt-16",children:[(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)("h2",{className:"text-3xl font-medium ready_to_go_text",children:"Choose from our Ready-to-go Packages"})}),(0,n.jsx)("div",{className:"flex justify-center items-center pt-3",children:(0,n.jsxs)("p",{className:"text-center font-medium text-gray-600 ready_to_go_p",children:["Getting worked up over a get-together? over it! Celebration are supposed to be fun. ",(0,n.jsx)("br",{})," Otherwise, we'd stay in our sweats and we're over that,too."]})}),(0,n.jsx)("div",{className:"flex justify-center items-center pt-3",children:(0,n.jsxs)("p",{className:"ready_to_go_p text-center font-medium text-gray-600",children:["At TablePop, we're on a mission to make events of all sizes enjoyable for you AND your ",(0,n.jsx)("br",{})," guests. Because no one needs that energy."]})})]}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"pt-16",children:(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg pb-10 mr-10",children:[(0,n.jsxs)("div",{className:"px-6 py-4",children:[(0,n.jsx)("div",{className:"font-medium text-red-500 _opaoao text-4xl mb-2 text-center",children:"TP Petite"}),(0,n.jsx)("h2",{className:"text-center text-5xl font-bold",children:"$ 29"}),(0,n.jsxs)("ul",{className:"text-xs text-gray-500 pt-5 list-disc pl-10 _l_a_d_s font-medium",children:[(0,n.jsx)("li",{children:"Intimate gatherings that require simplified setup, uncomplicated logistics or a manageable number of vendors."}),(0,n.jsx)("li",{children:"Collaborate 1:1 with a event planner via via online messaging or text"}),(0,n.jsx)("li",{children:"Step-by-step mood board, planning guide, & budget delivered within 3 days"}),(0,n.jsx)("li",{children:"Book curated product picks and vendor picks"}),(0,n.jsx)("li",{children:"Event financing available"})]})]}),(0,n.jsx)("div",{className:"px-6 pt-4 pb-2 flex justify-center",children:(0,n.jsx)("span",{className:"inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28",children:"SELECT"})})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg pb-10",children:[(0,n.jsxs)("div",{className:"px-6 py-4",children:[(0,n.jsx)("div",{className:"font-medium text-red-500 _opaoao text-4xl mb-2 text-center",children:"TP Pro"}),(0,n.jsx)("h2",{className:"text-center text-5xl font-bold",children:"$ 119"}),(0,n.jsxs)("ul",{className:"text-xs text-gray-500 pt-5 list-disc pl-10 _l_a_d_s font-medium",children:[(0,n.jsxs)("li",{children:[" ","Micro-events that require coordination, detailed visualization and support to manage and source various vendors"]}),(0,n.jsx)("li",{children:"Collaborate 1:1 with a event planner via via online messaging or text"}),(0,n.jsx)("li",{children:"SFull Design and Concept Development With final concept mock-up delivered within 5 days"}),(0,n.jsx)("li",{children:"Book and manage curated product and vendor picks, Selection and procurement of vendor suggestions"}),(0,n.jsx)("li",{children:"Digital styling visualizations so you don\u2019t have to imagine the design take the guesswork out of layouts"}),(0,n.jsx)("li",{children:"Customized venue search"}),(0,n.jsx)("li",{children:"Event insurance for limited incidentals"}),(0,n.jsx)("li",{children:"Event financing available"})]})]}),(0,n.jsx)("div",{className:"px-6 pt-4 pb-2 flex justify-center",children:(0,n.jsx)("span",{className:"inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-28 p-3 pr-28",children:"SELECT"})})]})})]})})}),(0,n.jsxs)("div",{className:"flex justify-between items-center pt-20",children:[(0,n.jsx)("div",{children:(0,n.jsx)(i(),{src:"/image 28.png",width:"600px",height:"400px"})}),(0,n.jsxs)("div",{className:"pr-32",children:[(0,n.jsx)("h2",{className:"text-5xl _opaoao",children:"Why Table Pop?"}),(0,n.jsxs)("p",{className:"get_access_p font-normal mt-3 pl-0 text-gray-500",children:["Get access to persoalized event experience at your ",(0,n.jsx)("br",{})," ","fingertips?",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Determine the level of support & services then ",(0,n.jsx)("br",{})," choose the vendor & professionals required to ",(0,n.jsx)("br",{})," excute your event and we'll create a proposal the ",(0,n.jsx)("br",{})," suits your events specifications."]}),(0,n.jsx)("div",{className:"px-0 pt-4 pb-2 flex justify-start",children:(0,n.jsx)("span",{className:"inline-block kisoso cursor-pointer rounded text-sm font-semibold text-white mr-2 mb-2 pl-16 p-3 pr-16",children:"GET STARTED"})})]})]}),(0,n.jsx)("div",{className:"bg-pink-50 p-10 mt-10",children:(0,n.jsx)(l.default,{})})]})}},225:function(e,t,s){"use strict";s.r(t);var n=s(5893),r=(s(2542),s(9801)),i=s(85),l=s(9008),a=s.n(l);t.default=function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(a(),{children:(0,n.jsx)("title",{children:"How It's Works"})}),(0,n.jsx)(r.default,{}),(0,n.jsx)(i.default,{})]})}},9008:function(e,t,s){e.exports=s(3121)},1664:function(e,t,s){e.exports=s(1551)}},function(e){e.O(0,[5675,7344,3465,9774,2888,179],(function(){return t=5955,e(e.s=t);var t}));var t=e.O();_N_E=t}]);