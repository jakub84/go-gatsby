(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"pageQuery",function(){return m});var r=a(8),n=a.n(r),i=a(0),o=a.n(i),s=a(159),l=a.n(s),c=a(162),u=a(191),p=a(158),h=a.n(p),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"tag-container"},o.a.createElement(l.a,{title:'Posts tagged as "'+e+'" | '+h.a.siteTitle}),o.a.createElement(u.a,{postEdges:t})))},t}(o.a.Component),m="3824571933"},158:function(e,t,a){a(37);var r={siteTitle:"Galeria Obrazu | Umieścimy Twoją grafikę na torbach ekologicznych, torbach papierowych, chorągiewkach papierowych, kalenadarzach trójdzielnych. Zaufaj naszej Galeri Obrazu!",siteTitleShort:"Galeria Obrazu",siteTitleAlt:"Galeria Obrazu",siteLogo:"/logos/logo-1024.png",siteUrl:"http://galeriaobrazu.com.pl/",pathPrefix:"/#",siteDescription:"Galeria Obrazu | Umieścimy Twoją grafikę na torbach ekologicznych, torbach papierowych, chorągiewkach papierowych, kalenadarzach trójdzielnych. Zaufaj naszej Galeri Obrazu!",siteRss:"",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"",postDefaultCategoryID:"",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userEmail:"#",userTwitter:"",userLocation:"",userAvatar:"",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},162:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(8),n=a.n(r),i=a(0),o=a.n(i),s=a(159),l=a.n(s),c=a(158),u=a.n(c),p=(a(163),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(o.a.Component))},163:function(e,t,a){},191:function(e,t,a){"use strict";a(78);var r=a(8),n=a.n(r),i=a(0),o=a.n(i),s=a(36),l=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",null,e.map(function(e){return o.a.createElement(s.Link,{to:e.path,key:e.title},o.a.createElement("h1",null,e.title))}))},t}(o.a.Component);t.a=l}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-50b0bca47b68f020455c.js.map