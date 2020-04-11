(this["webpackJsonptask-allocation-react"]=this["webpackJsonptask-allocation-react"]||[]).push([[0],{33:function(e,t,a){e.exports=a(80)},74:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=a(7),s=a.n(l),u=a(32),i=a(11),m=a(13),p=a(6);var d=function(e){var t=e.resource,a=e.duration;return r.a.createElement("div",{className:"task"},r.a.createElement("span",{className:"task-resource"},t),r.a.createElement("span",{className:"task-duration"},a))},E=a(1);var b=function(e){var t=e.onFinish,a=Object(n.useState)(0),o=Object(p.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(1),u=Object(p.a)(s,2),i=u[0],b=u[1],f=Object(n.useState)([]),v=Object(p.a)(f,2),h=v[0],g=v[1];function k(){t(h),g([]),l(0)}return r.a.createElement(E.Row,null,r.a.createElement(E.Col,{xs:12},r.a.createElement("div",{className:"mui--text-display1"},"New Job")),r.a.createElement(E.Col,{md:4},r.a.createElement(E.Input,{type:"number",label:"Resource",value:c,onChange:function(e){l(parseInt(e.target.value))}})),r.a.createElement(E.Col,{md:4},r.a.createElement(E.Input,{type:"number",label:"Duration",value:i,onChange:function(e){b(parseInt(e.target.value))}})),r.a.createElement(E.Col,{md:4},r.a.createElement(E.Button,{color:"primary",size:"small",variant:"fab",onClick:function(){g([].concat(Object(m.a)(h),[{resource:c,duration:i}])),l(c+1)}},"+")),r.a.createElement(E.Col,{xs:12},r.a.createElement("div",{className:"mui--text-subhead"},"Tasks:"),h.map((function(e,t){return r.a.createElement(d,{key:t,resource:e.resource,duration:e.duration})}))),h.length>0?r.a.createElement(E.Col,{xs:12,className:"mui--text-right"},r.a.createElement(E.Button,{color:"primary",onClick:k},"Add Job")):r.a.createElement("span",null))};var f=a(9),v=a.n(f);function h(){return(h=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/solver-01/",e.prev=1,e.next=4,v.a.post("/solver-01/",{jobs:t});case 4:return a=e.sent,console.log("OK:",a),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(1),console.error(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var g={solve:function(e){return h.apply(this,arguments)}},k=(a(74),a(30));var y=function(e){var t=e.solution,a=Date.now();function n(e){return new Date(a+60*e*60*1e3)}var o=[];return Object.keys(t).map((function(e,a){t[e].map((function(e,t){o.push(["Resource-".concat(a),"Job-".concat(e.job),"Task-".concat(e.task," of Job-").concat(e.job),n(e.start),n(e.end)])}))})),r.a.createElement(k.a,{width:"100%",height:"500px",chartType:"Timeline",loader:r.a.createElement("div",null,"Loading Chart"),data:[[{type:"string",id:"Position"},{type:"string",id:"Name"},{type:"string",role:"tooltip"},{type:"date",id:"Start"},{type:"date",id:"End"}]].concat(o),options:{title:"Task   allocation",animation:{startup:!0,easing:"linear",duration:300},timeline:{groupByRowLabel:!0}},rootProps:{"data-testid":"4"}})};var j=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({}),l=Object(p.a)(c,2),f=l[0],v=l[1];function h(){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.solve(a);case 2:t=e.sent,console.log(t.data),n=t.data,r=n.resources,console.log("resources ".concat(r)),v(Object(u.a)({},r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(E.Container,{fluid:!1},r.a.createElement(E.Panel,null,r.a.createElement(b,{onFinish:function(e){o([].concat(Object(m.a)(a),[e]))}})),a.length>0?r.a.createElement(E.Panel,null,r.a.createElement(E.Row,null,r.a.createElement(E.Col,{xs:12},a.map((function(e,t){return r.a.createElement("div",{key:t},"JOB-",t,e.map((function(e,t){return r.a.createElement(d,{key:t,duration:e.duration,resource:e.resource})})))}))),r.a.createElement(E.Col,{xs:12,className:"mui--text-right"},r.a.createElement(E.Button,{color:"primary",onClick:h},"Calculate")))):r.a.createElement("span",null),(console.log("Rendering ".concat(f.length)),Object.keys(f).length>0?r.a.createElement(E.Panel,null,r.a.createElement(y,{solution:f})):r.a.createElement("span",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.defaults.baseURL="https://us-central1-basask-task-allocation.cloudfunctions.net";v.a,a(78),a(79);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.3addcd5a.chunk.js.map