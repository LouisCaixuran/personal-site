(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[248],{248:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var r=n(791),s=n(87),i=n(842),a=n(184);const u=t=>{let{label:e,link:n,value:r,format:s}=t;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{width:"70%",children:e}),(0,a.jsx)("td",{children:n?(0,a.jsx)("a",{href:n,children:s(r)}):s(r)})]})};u.defaultProps={format:t=>t,link:null,value:null};const o=u,c=t=>{let{data:e}=t;return(0,a.jsx)("table",{children:(0,a.jsx)("tbody",{children:e.map((t=>(0,a.jsx)(o,{format:t.format,label:t.label,link:t.link,value:t.value},t.label)))})})},l=()=>{const[t,e]=(0,r.useState)();return(0,r.useEffect)((()=>{const t=setInterval((()=>(()=>{const t=new Date("2001-02-21T09:24:00");e(((Date.now()-t)/31556925190.079998).toFixed(11))})()),25);return()=>{clearInterval(t)}}),[]),(0,a.jsx)(a.Fragment,{children:t})},h=[{key:"age",label:"Current age",value:(0,a.jsx)(l,{})},{key:"location",label:"Current city",value:"Hong Kong"}],f=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Some stats about me"}),(0,a.jsx)(c,{data:h})]});var d=n(892),$=n.n(d);const m=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:t=>$()(t).format("MMMM DD, YYYY")},{label:"Lines of Javascript powering this website",value:"2150",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],g=()=>{const[t,e]=(0,r.useState)(m),n=(0,r.useCallback)((async()=>{const t=await fetch("https://api.github.com/repos/mldangelo/personal-site"),n=await t.json();e(m.map((t=>({...t,value:Object.keys(n).includes(t.key)?n[t.key]:t.value}))))}),[]);return(0,r.useEffect)((()=>{n()}),[n]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:"Some stats about this site"}),(0,a.jsx)(c,{data:t})]})},p=()=>(0,a.jsx)(i.Z,{title:"Stats",description:"Some statistics about Michael D'Angelo and mldangelo.com",children:(0,a.jsxs)("article",{className:"post",id:"stats",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{children:(0,a.jsx)(s.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(f,{}),(0,a.jsx)(g,{})]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",l="quarter",h="year",f="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,a=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:u,D:f,h:a,m:i,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=g;var M="$isDayjsObject",D=function(t){return t instanceof x||!(!t||!t[M])},k=function t(e,n,r){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),n&&(y[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!r&&s&&(v=s),s||!r&&v},S=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=b;w.l=k,w.i=D,w.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function g(t){this.$L=k(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[M]=!0}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return w},p.isValid=function(){return!(this.$d.toString()===d)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!w.u(e)||e,l=w.p(t),d=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case h:return r?d(1,0):d(31,11);case c:return r?d(1,g):d(0,g+1);case o:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return d(r?p-y:p+(6-y),g);case u:case f:return $(b+"Hours",0);case a:return $(b+"Minutes",1);case i:return $(b+"Seconds",2);case s:return $(b+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,o=w.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[u]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[i]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(f,1);m.$d[d]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[w.p(t)]()},p.add=function(r,l){var f,d=this;r=Number(r);var $=w.p(l),m=function(t){var e=S(d);return w.w(e.date(e.date()+Math.round(t*r)),d)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===u)return m(1);if($===o)return m(7);var g=(f={},f[i]=e,f[a]=n,f[s]=t,f)[$]||1,p=this.$d.getTime()+r*g;return w.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),i=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,h=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},f=function(t){return w.s(i%12||12,t,"0")},$=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return w.s(a,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,f,d){var $,m=this,g=w.p(f),p=S(r),b=(p.utcOffset()-this.utcOffset())*e,v=this-p,y=function(){return w.m(m,p)};switch(g){case h:$=y()/12;break;case c:$=y();break;case l:$=y()/3;break;case o:$=(v-b)/6048e5;break;case u:$=(v-b)/864e5;break;case a:$=v/n;break;case i:$=v/e;break;case s:$=v/t;break;default:$=v}return d?$:w.a($)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=k(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return w.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),j=x.prototype;return S.prototype=j,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",h],["$D",f]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,x,S),t.$i=!0),S},S.locale=k,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=y[v],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=248.ff0978bf.chunk.js.map