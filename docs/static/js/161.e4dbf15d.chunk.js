(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{161:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>h});n(791);var r=n(87),s=n(842),i=n(892),a=n.n(i),u=n(184);const o=t=>{let{data:e}=t;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},c=[{title:"MUSEO",subtitle:"Madison Chazen Museum Guide",image:"/images/projects/android.jpg",date:"2023-05-28",desc:"Built for Madison Chazen Museum. Mobile app to help visitor find description to exhibits easily.It can also play audio intro in different speed."},{title:"Blind Signature",subtitle:"smart contract",link:"https://github.com/LouisCaixuran/blindSignature",image:"/images/projects/BS.jpg",date:"2023-05-20",desc:"A smart contract on Ethernet,Can help accounts transfer money while others cannnot find any connections between them "},{title:"DIFC",subtitle:"distributed flow control system for python",link:"https://github.com/LouisCaixuran/Distributed-Flow-Controller-Python",image:"/images/projects/DIFC.jpg",date:"2023-02-26",desc:"A flow control system for distributed system. It can stop information from flowing to untrust nodes. It uses semi-static label algorithm"},{title:"pytutor",subtitle:"quiz system for learning python",image:"/images/projects/python.jpg",date:"2020-09-15",desc:"It is a python online quiz system built on AWS. It is built for CS220 in UW-Madison. Over 2000 students have used it"}],h=()=>(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Michael D'Angelo's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((t=>(0,u.jsx)(o,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,a=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:d,h:a,m:i,s:s,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",v={};v[M]=p;var D="$isDayjsObject",b=function(t){return t instanceof x||!(!t||!t[D])},S=function t(e,n,r){var s;if(!e)return M;if("string"==typeof e){var i=e.toLowerCase();v[i]&&(s=i),n&&(v[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;v[u]=e,s=u}return!r&&s&&(M=s),s||!r&&M},j=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=y;w.l=S,w.i=b,w.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!w.u(e)||e,h=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case l:return r?f(1,0):f(31,11);case c:return r?f(1,p):f(0,p+1);case o:var M=this.$locale().weekStart||0,v=(m<M?m+7:m)-M;return f(r?g-v:g+(6-v),p);case u:case d:return $(y+"Hours",0);case a:return $(y+"Minutes",1);case i:return $(y+"Seconds",2);case s:return $(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=w.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[u]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[i]=h+"Minutes",n[s]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(r,h){var d,f=this;r=Number(r);var $=w.p(h),m=function(t){var e=j(f);return w.w(e.date(e.date()+Math.round(t*r)),f)};if($===c)return this.set(c,this.$M+r);if($===l)return this.set(l,this.$y+r);if($===u)return m(1);if($===o)return m(7);var p=(d={},d[i]=e,d[a]=n,d[s]=t,d)[$]||1,g=this.$d.getTime()+r*p;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=n.meridiem,l=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},d=function(t){return w.s(i%12||12,t,"0")},$=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return l(n.monthsShort,u,c,3);case"MMMM":return l(c,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,o,2);case"ddd":return l(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,d,f){var $,m=this,p=w.p(d),g=j(r),y=(g.utcOffset()-this.utcOffset())*e,M=this-g,v=function(){return w.m(m,g)};switch(p){case l:$=v()/12;break;case c:$=v();break;case h:$=v()/3;break;case o:$=(M-y)/6048e5;break;case u:$=(M-y)/864e5;break;case a:$=M/n;break;case i:$=M/e;break;case s:$=M/t;break;default:$=M}return f?$:w.a($)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return v[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),O=x.prototype;return j.prototype=O,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",l],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,x,j),t.$i=!0),j},j.locale=S,j.isDayjs=b,j.unix=function(t){return j(1e3*t)},j.en=v[M],j.Ls=v,j.p={},j}()}}]);
//# sourceMappingURL=161.e4dbf15d.chunk.js.map