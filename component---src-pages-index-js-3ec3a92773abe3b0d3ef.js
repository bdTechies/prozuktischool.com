(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return m}));var r=n("q1tI"),a=n.n(r),o=n("qhky"),p=(n("Wbzz"),n("eQOj")),i=n("YbJm"),c=n("zOpi"),l=n("UARn"),s=n("IpnI"),u=n.n(s);var d=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return a.a.createElement(p.b,null,a.a.createElement(i.d,null),a.a.createElement("div",{className:"index-container"},a.a.createElement(o.a,{title:u.a.siteTitle}),a.a.createElement(l.a,null),a.a.createElement(c.a,{postEdges:t,limit:6})))},r}(r.Component);e.default=d;var m="1650529884"},zOpi:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),p=n("YbJm");var i=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.getPostList=function(){var t=[],e=this.props.limit;return this.props.postEdges.forEach((function(e,n){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,language:e.node.frontmatter.language})})),e&&(t=t.splice(0,e)),t},i.render=function(){var t=this.getPostList();return a.a.createElement(p.a,{maxWidth:960,margin:"0 auto"},a.a.createElement(p.c,{mx:[0,-2],flexWrap:"wrap"},t.map((function(t){return a.a.createElement(p.a,{key:t.title,width:[1,1/3],px:3,py:3},a.a.createElement(o.Link,{to:t.path},a.a.createElement(p.g,{language:t.language},t.title)))}))))},r}(a.a.Component);e.a=i}}]);
//# sourceMappingURL=component---src-pages-index-js-3ec3a92773abe3b0d3ef.js.map