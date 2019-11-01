(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(15),n(16),n(6)),i=n(9),s=n(1),u=n(2),d=n(4),m=n(3),f=n(5),p=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changeInput,n=e.addItem,a=e.value;return r.a.createElement("header",{className:"header"},r.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",type:"text",onChange:t,onKeyDown:n,value:a}))}}]),t}(a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.index,a=e.deleteItem,o=e.toggleItem,c=t.done?"completed":"";return r.a.createElement("li",{className:c},r.a.createElement("div",{className:"view"},r.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(t.id),checked:t.done,onChange:function(){return o(n)}}),r.a.createElement("label",{htmlFor:"todo-".concat(t.id)},t.text),r.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return a(n)}})))}}]),t}(a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todolist,n=e.deleteItem,a=e.toggleItem,o=e.toggleAll;return r.a.createElement("section",{className:"main",style:{display:"".concat(t.length>0?"block":"none")}},r.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:o}),r.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),r.a.createElement("ul",{className:"todo-list"},t.map(function(e,t){return r.a.createElement(h,{item:e,index:t,deleteItem:n,key:e.id,toggleItem:a})})))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.changeFilter;return r.a.createElement("ul",{className:"filters"},[{dir:"All"},{dir:"Active"},{dir:"Completed"}].map(function(e){var a=e.dir,o=t===a?"selected":"";return r.a.createElement("li",null,r.a.createElement("a",{href:"#/".concat(a),className:o,onClick:function(){return n(a)}},a))}))}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todolist,n=e.clearDone,a=e.filter,o=e.changeFilter,c=t.filter(function(e){return!1===e.done}).length;return r.a.createElement("footer",{className:"footer",style:{display:"".concat(t.length>0?"block":"none")}},r.a.createElement("span",{className:"todo-count"},"".concat(c," items left")),r.a.createElement(g,{filter:a,changeFilter:o}),r.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"".concat(c<t.length?"block":"none")},onClick:n},"Clear All Completed"))}}]),t}(a.Component);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).changeInput=function(e){var t=e.target.value;n.setState(function(e){return y({},e,{currentValue:t})})},n.addItem=function(e){var t={text:n.state.currentValue,done:!1,id:n.state.lastId+1};13===e.keyCode&&(n.state.currentValue.match(/\w/g)?n.setState(function(e){return y({},e,{todolist:[].concat(Object(l.a)(e.todolist),[t]),currentValue:"",lastId:t.id})}):n.setState(function(e){return y({},e,{currentValue:""})}))},n.deleteItem=function(e){var t=Object(l.a)(n.state.todolist);t.splice(e,1),n.setState(function(e){return y({},e,{todolist:t})})},n.clearDone=function(){var e=Object(l.a)(n.state.todolist).filter(function(e){return!1===e.done});n.setState(function(t){return{todolist:e}})},n.toggleItem=function(e){var t=Object(l.a)(n.state.todolist);t[e].done=!t[e].done,n.setState(function(e){return y({},e,{todoList:t})})},n.toggleAll=function(){var e=Object(l.a)(n.state.todolist);n.setState(function(t){t.todolist;var n=e.every(function(e){return!0===e.done}),a=e.map(function(e){return y({},e,{done:!0})});return n?{todolist:e.map(function(e){return y({},e,{done:!1})})}:{todolist:a}})},n.changeFilter=function(e){n.setState(function(t){t.filter;return{filter:e}})},n.state={todolist:[],currentValue:"",lastId:0,filter:"all"},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=Object(l.a)(this.state.todolist);switch(this.state.filter){case"All":e=t;break;case"Active":e=t.filter(function(e){return!1===e.done});break;case"Completed":e=t.filter(function(e){return!0===e.done});break;default:e=t}return r.a.createElement("section",{className:"todoapp"},r.a.createElement("h1",null,"todos"),r.a.createElement(p,{changeInput:this.changeInput,addItem:this.addItem,value:this.state.currentValue}),r.a.createElement(b,{todolist:e,deleteItem:this.deleteItem,toggleItem:this.toggleItem,toggleAll:this.toggleAll}),r.a.createElement(O,{todolist:this.state.todolist,clearDone:this.clearDone,filter:this.state.filter,changeFilter:this.changeFilter}))}}]),t}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f2735c14.chunk.js.map