(self.webpackChunkprozuktischool=self.webpackChunkprozuktischool||[]).push([[678],{81957:function(e,t,a){"use strict";var n=a(51766),l=a(25444),r=a(45125);t.Z=function(e){var t=e.limit,a=void 0===t?0:t,u=e.postEdges,i=void 0===u?[]:u,c=e.showAllPostButton,d=void 0!==c&&c,o=function(){var e=[];return i.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,language:t.node.frontmatter.language})})),a&&(e=e.splice(0,a)),e}();return n.default.createElement(r.kC,{mx:[0,-2],flexWrap:"wrap"},o.map((function(e){return n.default.createElement(r.xu,{key:e.title,width:[1,1/3],p:3},n.default.createElement(l.Link,{to:e.path},n.default.createElement(r.eB,{language:e.language},e.title)))})),i.length>a&&d&&n.default.createElement(r.xu,{p:3,width:1,display:"block",textAlign:"center"},n.default.createElement(l.Link,{to:"/posts/"},n.default.createElement(r.zx,{variant:"primary"},"সকল লেখা পড়ুন"))))}},97704:function(e,t,a){"use strict";a.r(t);var n=a(51766),l=a(65186),r=a(25444),u=a(24340),i=a(81957),c=a(45125),d=a(42797),o=a.n(d);t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,d=t.allMarkdownRemark.tags;return n.default.createElement(u.Z,null,n.default.createElement(l.q,{title:o().siteTitle}),n.default.createElement(c.HJ,{pageType:"WebSite"}),n.default.createElement(c.DH,null),n.default.createElement(c.xu,{maxWidth:960,margin:"0 auto"},n.default.createElement(c.NZ,{title:"সাম্প্রতিক লেখা"}),n.default.createElement(i.Z,{postEdges:a,limit:6,showAllPostButton:!0}),n.default.createElement(c.NZ,{title:"বিষয়সমূহ"}),n.default.createElement(c.PS,{tags:d,showAllTagsButton:!0}),n.default.createElement(c.xu,{p:{xs:3,sm:2}},n.default.createElement(c.f7,{variant:"notice"},n.default.createElement(c.xv,null,"আপনিও লিখতে চান?"," ",n.default.createElement(r.Link,{to:"/contribution-guide/"},"এখানে বিস্তারিত দেখুন"))))))}},94469:function(e,t,a){"use strict";var n=a(51766),l=a(65186),r=a(9925),u=a(47739),i=a(42797),c=a.n(i),d=a(45125),o=a(48511),m=a(50666);t.Z=(0,u.$j)((function(e){return{theme:e.config.theme}}))((function(e){var t=e.children,a=e.theme,u=e.variant,i=void 0===u?"":u;return n.default.createElement(r.f6,{theme:o[a.name]},n.default.createElement(m.Z,null),n.default.createElement(n.default.Fragment,null,n.default.createElement(l.q,null,n.default.createElement("meta",{name:"description",content:c().siteDescription})),n.default.createElement(d.lb,null),n.default.createElement(d.xu,{maxWidth:"fixed"===i?960:"100%",margin:"0 auto",p:"fixed"===i?{xs:3,sm:4}:0,mt:48,minHeight:"70vh"},t),n.default.createElement(d.$_,null)))}))},24340:function(e,t,a){"use strict";a.d(t,{B:function(){return u},Z:function(){return i.Z}});var n=a(19756),l=a(51766),r=a(45125),u=function(e){var t=e.children,a=(0,n.Z)(e,["children"]);return l.default.createElement(r.xu,Object.assign({maxWidth:960,margin:"0 auto",p:{xs:3,sm:4}},a),t,l.default.createElement(r.zV,null))},i=a(94469)}}]);
//# sourceMappingURL=component---src-pages-index-js-bcd251faddf37c1bd0a2.js.map