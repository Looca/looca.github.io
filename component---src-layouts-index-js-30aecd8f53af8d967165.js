webpackJsonp([0x67ef26645b2a,60335399758886],{102:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Lukasz Pietraszek - Senior Front-end developer"}}},layoutContext:{}}},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),a=r(i),u=n(207),c=r(u),l=n(102),f=r(l);t.default=function(e){return a.default.createElement(c.default,o({},e,f.default))},e.exports=t.default},290:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),T=u(t)}catch(e){return!1}if(s.length!=T.length)return!1;for(s.sort(),T.sort(),i=s.length-1;i>=0;i--)if(s[i]!=T[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!l(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(292),c=n(291),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},291:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},292:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},299:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},428:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),s=r(f),T=n(8),p=r(T),A=n(447),d=r(A),E=n(290),y=r(E),h=n(429),m=n(181),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case m.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case m.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},g=(0,d.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(S),R=b(g);R.renderStatic=R.rewind,t.Helmet=R,t.default=R},181:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},429:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),c=n(5),l=r(c),f=n(181),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=y(e,f.TAG_NAMES.TITLE),n=y(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},A=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},d=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&R("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===f.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:d([f.TAG_PROPERTIES.HREF],e),bodyAttributes:A(f.ATTRIBUTE_NAMES.BODY,e),defer:y(e,f.HELMET_PROPS.DEFER),encode:y(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:A(f.ATTRIBUTE_NAMES.HTML,e),linkTags:E(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:E(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:A(f.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){m(t)},0)}}(),b=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,R=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,C=function(e){v&&g(v),e.defer?v=S(function(){I(e,function(){v=null})}):(I(e),v=null)},I=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,T=e.title,p=e.titleAttributes;P(f.TAG_NAMES.BODY,r),P(f.TAG_NAMES.HTML,o),O(T,p);var A={baseTag:w(f.TAG_NAMES.BASE,n),linkTags:w(f.TAG_NAMES.LINK,i),metaTags:w(f.TAG_NAMES.META,a),noscriptTags:w(f.TAG_NAMES.NOSCRIPT,u),scriptTags:w(f.TAG_NAMES.SCRIPT,l),styleTags:w(f.TAG_NAMES.STYLE,s)},d={},E={};Object.keys(A).forEach(function(e){var t=A[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(E[e]=A[e].oldTags)}),t&&t(),c(e,d,E)},M=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),P(f.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var s=i.indexOf(c);s!==-1&&i.splice(s,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},_=function(e,t,n,r){var o=N(n),i=M(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),i=G(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return _(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,T=void 0===s?"":s,p=e.titleAttributes;return{base:x(f.TAG_NAMES.BASE,t,r),bodyAttributes:x(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(f.ATTRIBUTE_NAMES.HTML,o,r),link:x(f.TAG_NAMES.LINK,i,r),meta:x(f.TAG_NAMES.META,a,r),noscript:x(f.TAG_NAMES.NOSCRIPT,u,r),script:x(f.TAG_NAMES.SCRIPT,c,r),style:x(f.TAG_NAMES.STYLE,l,r),title:x(f.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=H,t.handleClientStateChange=C,t.mapStateOnServer=U,t.reducePropsToState=h,t.requestAnimationFrame=S,t.warn=R}).call(t,function(){return this}())},447:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(2),c=r(u),l=n(299),f=r(l),s=n(464),T=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function s(){A=e(p.map(function(e){return e.props})),d.canUseDOM?t(A):n&&(A=n(A))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],A=void 0,d=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return A},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=A;return A=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,T.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),s()},t.prototype.render=function(){return c.default.createElement(l,this.props)},t}(u.Component);return d.displayName="SideEffect("+r(l)+")",d.canUseDOM=f.default.canUseDOM,d}}},464:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!u(l))return!1;var f=e[l],s=t[l];if(o=n?n.call(r,f,s,l):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(98),u=(r(a),function(e){e.siteTitle;return i.default.createElement("footer",{style:{backgroundColor:"#23232c",color:"#c2c2ca",padding:"2rem 0",textAlign:"center"}},i.default.createElement("div",null,i.default.createElement("small",{style:{fontSize:"80%"}},"Built by Lukasz Pietraszek using React and Gatsby.")))});t.default=u,e.exports=t.default},465:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAABBNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo1MkRCMUJGNzQwRTExMUU3QTk1NEIxREM3RkVCQ0IzQTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDo1MkRCMUJGODQwRTExMUU3QTk1NEIxREM3RkVCQ0IzQTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo1MkRCMUJGQTQwRTExMUU3QTk1NEIxREM3RkVCQ0IzQTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo1MkRCMUJGOTQw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"},301:function(e,t){},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(2),i=r(o),a=n(8),u=r(a),c=n(428),l=r(c),f=n(205),s=r(f);n(302),n(301);var T=n(465),p=r(T),A=function(e){var t=e.children,n=e.data;return i.default.createElement("div",null,i.default.createElement(l.default,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Lukasz Pietraszek is Poland based senior freelance UI & Front-end developer who specialises in responsive websites for B2C and B2B clients using HTML5, CSS, and JavaScript."},{name:"keywords",content:"javascript, front-end, progressive web apps, web development, clean code, pwa, react,  webpack, firebase, ecmascript6, es2015, node.js, git, SAP hybris"}],link:[{rel:"shortcut icon",type:"image/png",href:""+p.default}]},i.default.createElement("html",{lang:"en"})),i.default.createElement("div",null,t()),i.default.createElement(s.default,null))};A.propTypes={children:u.default.func},t.default=A;t.query="** extracted graphql fragment **"},302:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-30aecd8f53af8d967165.js.map