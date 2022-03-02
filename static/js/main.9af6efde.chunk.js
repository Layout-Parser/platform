(this["webpackJsonplayout-parser-platform"]=this["webpackJsonplayout-parser-platform"]||[]).push([[0],{192:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(37),r=n.n(s),i=n(49),o=n(8),l=n(15),u=n(10),d=n(32),j=(n(29),n(23)),p=n(7),b=n(19),h=n(46),m=n.p+"static/media/lp-badge-white.87e3ef5c.svg",O=n(6),f=function(e){var t=e.routes,n=c.a.useState(!1),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(O.jsx)(p.Hero,{className:"slogan-hero is-bold",color:"danger",children:Object(O.jsx)(p.Hero.Header,{children:Object(O.jsx)(p.Navbar,{className:"lp-navbar",active:s,children:Object(O.jsxs)(p.Container,{children:[Object(O.jsxs)(p.Navbar.Brand,{children:[Object(O.jsx)(p.Navbar.Item,{href:"https://layout-parser.github.io/",children:Object(O.jsx)("img",{src:m,alt:"Logo",className:"lp-badge"})}),Object(O.jsx)(p.Navbar.Burger,{onClick:function(){return r((function(e){return!e}))}})]}),Object(O.jsx)(p.Navbar.Menu,{children:Object(O.jsxs)(p.Navbar.Container,{align:"right",children:[t.map((function(e,t){return Object(O.jsx)(p.Navbar.Item,{href:e.path,children:e.label},t)})),Object(O.jsx)(p.Navbar.Item,{renderAs:"div",children:Object(O.jsx)("a",{className:"bg-transparent button is-danger",target:"_blank",href:"https://github.com/Layout-Parser/layout-parser",rel:"noreferrer",children:Object(O.jsx)(b.a,{icon:h.a,size:"lg"})})})]})})]})})})})},x=n(21);function g(e,t){var n=e.indexOf(t);return n>-1?e.splice(n,1):e.push(t),e}function v(e,t,n){return"Document Type"===e?n.doctype.includes(t):"Backends"===e?n.backends.includes(t):n.sizes.includes(t)}var y=function(e){var t=e.data,n=e.searchData,a=e.setSearchData;return Object(O.jsxs)(p.Tag.Group,{children:[Object(O.jsx)(p.Tag,{color:"white",children:Object(O.jsx)("strong",{children:t.title})}),t.tags.map((function(e,c){return Object(O.jsx)(p.Tag,{className:v(t.title,e,n)?"is-selected":"is-clickable",onClick:function(e){"Document Type"===t.title?a(Object(u.a)(Object(u.a)({},n),{},{doctype:g(n.doctype,e.target.textContent)})):"Backends"===t.title?a(Object(u.a)(Object(u.a)({},n),{},{backends:g(n.backends,e.target.textContent)})):a(Object(u.a)(Object(u.a)({},n),{},{sizes:g(n.sizes,e.target.textContent)}))},children:e},c)}))]})},k=function(e){var t=e.tagRows,n=e.searchData,a=e.setSearchData,c=t.length-1;return Object(O.jsx)(p.Block,{children:t.map((function(e,t){return Object(O.jsx)(p.Block,{mb:t===c?0:3,children:Object(O.jsx)(y,{data:e,searchData:n,setSearchData:a})},t)}))})},C=function(e){var t=e.totalModelCount,n=e.searchTagRows,a=e.searchData,s=e.setSearchData;return Object(O.jsx)(c.a.Fragment,{children:Object(O.jsxs)("div",{className:"sticky",children:[Object(O.jsxs)(p.Heading,{subtitle:!0,italic:!0,mb:4,textColor:"grey-lighter",children:["Search from ",t," models & pipelines"]}),Object(O.jsxs)(p.Form.Field,{className:"has-addons",children:[Object(O.jsxs)(p.Form.Control,{className:"is-expanded",children:[Object(O.jsx)(p.Form.Input,{placeholder:"e.g, try type 'pubLayNet'",value:a.text,onChange:function(e){s(Object(u.a)(Object(u.a)({},a),{},{text:e.target.value}))}}),Object(O.jsx)(p.Icon,{align:"right",size:"small",children:Object(O.jsx)(b.a,{icon:x.d,size:"lg"})})]}),Object(O.jsx)(p.Form.Control,{children:Object(O.jsx)(p.Button,{className:"clear-btn",onClick:function(){s({text:"",doctype:[],backends:[],sizes:[]})},children:"clear"})})]}),Object(O.jsx)(k,{tagRows:n,searchData:a,setSearchData:s})]})})},S=function(e){var t=e.modelConfig,n=e.tags,a=c.a.useState(!1),s=Object(l.a)(a,2),r=s[0],i=s[1],o=t.split("//"),u=Object(l.a)(o,2),d=u[0],j=u[1],h="".concat(d,"//").concat(n.backend,"/").concat(j);return Object(O.jsxs)(p.Tag.Group,{mb:"0",children:[Object(O.jsxs)(p.Tag,{className:"is-clickable is-link is-light has-addons",onClick:function(){i(!0),navigator.clipboard.writeText('lp.AutoLayoutModel("'.concat(h,'")')),setTimeout((function(){i(!1)}),3e3)},children:[h,Object(O.jsx)(b.a,{className:"ml-1",icon:r?x.b:x.c})]}),Object.values(n).map((function(e,t){return Object(O.jsx)(p.Tag,{children:e},t)}))]})},T=function(e){var t=e.name,n=e.author,a=e.authorLink,s=e.docType,r=e.updateTime,i=e.modelSpecs,o=e.issueLink;return Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)("div",{className:"is-divider my-3"}),Object(O.jsxs)(p.Content,{mb:2,children:[Object(O.jsx)(p.Block,{mb:2,children:Object(O.jsx)(p.Block,{renderAs:"a",textSize:5,href:o,children:t})}),Object(O.jsxs)(p.Block,{mb:2,children:[Object(O.jsx)("span",{className:"model-list-cat mr-2",children:"Author"}),Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:a,children:n})}),Object(O.jsx)("span",{className:"model-list-cat mx-3",children:"-"}),Object(O.jsx)("span",{className:"model-list-cat mr-2",children:"DocType"}),Object(O.jsx)("span",{children:s.join(", ")}),Object(O.jsx)("span",{className:"model-list-cat mx-3",children:"-"}),Object(O.jsx)("span",{className:"model-list-cat mr-2",children:"Updated"}),Object(O.jsx)("span",{children:r})]}),void 0===i?null:Object(O.jsx)(p.Block,{children:i.map((function(e,t){return Object(O.jsx)(S,Object(u.a)({},e),t)}))})]})]})},N=n(27),w=n(28),z=n(20),D=n.n(z),L=n(52),B=n(47),H=n.n(B);function F(){return(F=Object(w.a)(D.a.mark((function e(){var t,n,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)("GET /repos/{owner}/{repo}/issues",{owner:"Layout-Parser",repo:"platform",state:"closed"});case 2:return t=e.sent,n=t.data.filter((function(e){return M(e.labels)})).map((function(e){return P(e)})),a=n.filter((function(e){return"model"===e.issueType})).map((function(e){return e.props})),c=n.filter((function(e){return"pipeline"===e.issueType})).map((function(e){return e.props})),e.abrupt("return",[a,c]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){var t,n=Object(N.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if("string"!==typeof a&&"model/approved"===a.name)return!0}}catch(c){n.e(c)}finally{n.f()}return!1}function P(e){var t="yaml",n=e.body;if(n){var a,c=n.split("```"),s=Object(N.a)(c);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(r.startsWith(t)){var i=H.a.parse(r.slice(t.length,-1)),o=new Date(e.updated_at).toDateString().split(" ").slice(1);console.log(e);var l={props:{name:i.name,author:e.user?"lolipopshock"===e.user.login?"layout-parser":e.user.login:"Unknown User",authorLink:e.user?"https://github.com/lolipopshock"===e.user.html_url?"https://layout-parser.github.io/":e.user.html_url:"",updateTime:"".concat(o[0]," ").concat(o[1],", ").concat(o[2]),docType:i.doctype.replace(/\s/g,"").toLowerCase().split(","),issueLink:i.link?i.link:e.html_url},issueType:i.type.toLowerCase()};return i["config-names"]&&(l.props.modelSpecs=i["config-names"].map((function(e){return{modelConfig:e["lp-model-config"]||e["lp-model-name"],tags:{backend:e.architecture,size:e.sizes}}}))),l}}}catch(u){s.e(u)}finally{s.f()}}}var _=[{path:"https://layout-parser.github.io/tutorials.html",label:"Tutorials"},{path:"https://layout-parser.readthedocs.io/en/latest/",label:"Docs"},{path:"/",label:"Open Platform"},{path:"https://join.slack.com/t/layout-parser/shared_invite/zt-ohjd14k1-OrJ2HltwVRGrxhLeHMfW_w",label:"Discussion"}];function I(e){return[{title:"Document Type",tags:j.union.apply(void 0,Object(d.a)(e.map((function(e){return e.docType}))))},{title:"Backends",tags:j.union.apply(void 0,Object(d.a)(e.map((function(e){var t;return null===(t=e.modelSpecs)||void 0===t?void 0:t.map((function(e){return e.tags.backend}))}))))},{title:"Model Sizes",tags:j.union.apply(void 0,Object(d.a)(e.map((function(e){var t;return null===(t=e.modelSpecs)||void 0===t?void 0:t.map((function(e){return e.tags.size}))}))))}]}function R(e){return e.map((function(e){return e.modelSpecs?e.modelSpecs.length:0})).reduce((function(e,t){return e+t}),0)}function A(e,t){var n=e;return n=n.filter((function(e){return e.name.toLowerCase().includes(t.text.toLowerCase())})),t.doctype.length&&(n=n.filter((function(e){return Object(j.intersection)(e.docType,t.doctype).length}))),t.backends.length&&(n=(n=n.filter((function(e){return Object(j.intersection)(e.modelSpecs?e.modelSpecs.map((function(e){return e.tags.backend})):[],t.backends).length}))).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{modelSpecs:e.modelSpecs.filter((function(e){return t.backends.includes(e.tags.backend)}))||[]})}))),t.sizes.length&&(n=(n=n.filter((function(e){return Object(j.intersection)(e.modelSpecs?e.modelSpecs.map((function(e){return e.tags.size})):[],t.sizes).length}))).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{modelSpecs:e.modelSpecs.filter((function(e){return t.sizes.includes(e.tags.size)}))||[]})}))),n}var G=function(){return Object(O.jsxs)(p.Button,{className:"ml-2 mt-2 px-2 py-1 has-text-grey is-italic",color:"dark",size:"small",inverted:!0,onClick:function(){window.open("https://github.com/Layout-Parser/platform/issues/new?assignees=lolipopshock&labels=model%2Fupload&template=new-model-pipeline-addition.md&title=")},children:[Object(O.jsx)(b.a,{icon:x.a,className:"mr-1"}),"Upload Yours"]})};var U=function(){var e=[{name:"",author:"",authorLink:"",docType:[],updateTime:"",issueLink:""}],t=c.a.useState(e),n=Object(l.a)(t,2),a=n[0],s=n[1],r=c.a.useState(e),i=Object(l.a)(r,2),o=i[0],d=i[1],j=c.a.useState({text:"",doctype:[],backends:[],sizes:[]}),b=Object(l.a)(j,2),h=b[0],m=b[1];return a===e&&function(){return F.apply(this,arguments)}().then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];s(n),d(a)})),c.a.useEffect((function(){})),Object(O.jsxs)(c.a.Fragment,{children:[Object(O.jsx)(f,{routes:_}),Object(O.jsx)(p.Hero,{children:Object(O.jsx)(p.Hero.Body,{color:"white",children:Object(O.jsxs)(p.Container,{children:[Object(O.jsx)(p.Content,{pb:3,children:Object(O.jsx)(p.Heading,{size:2,children:"Layout Parser Sharing Platform"})}),Object(O.jsxs)(p.Columns,{children:[Object(O.jsx)(p.Columns.Column,{size:4,children:Object(O.jsx)(C,{searchTagRows:I(a.concat(o)),totalModelCount:R(A(a,h))+A(o,h).length,searchData:h,setSearchData:m})}),Object(O.jsxs)(p.Columns.Column,{offset:1,children:[Object(O.jsxs)(p.Heading,{subtitle:!0,size:3,mb:1,textTransform:"uppercase",children:[Object(O.jsx)("span",{children:"Models"}),Object(O.jsx)(G,{})]}),A(a,h).map((function(e,t){return Object(O.jsx)(T,Object(u.a)({},e),t)})),Object(O.jsxs)(p.Heading,{subtitle:!0,size:3,mb:1,mt:5,textTransform:"uppercase",children:[Object(O.jsx)("span",{children:"Pipelines"}),Object(O.jsx)(G,{})]}),A(o,h).map((function(e,t){return Object(O.jsx)(T,Object(u.a)({},e),t)}))]})]})]})})})]})};r.a.render(Object(O.jsx)(i.a,{basename:"/platform",children:Object(O.jsx)(o.a,{path:"/",component:U})}),document.getElementById("root"))},29:function(e,t,n){}},[[192,1,2]]]);
//# sourceMappingURL=main.9af6efde.chunk.js.map