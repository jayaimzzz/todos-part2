(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(16)},16:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(9),c=o.n(l),s=(o(8),o(1)),i=o(2),r=o(4),d=o(3),u=o(5),m=o(6),p=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={todos:m,search:"",nextID:m.length+1},o.toggleCompleted=function(e){return function(t){var a=o.state.todos.findIndex(function(t){return t.id===e}),n=o.state.todos.slice();n[a].completed=!n[a].completed,o.setState({todos:n})}},o.deleteTodo=function(e){return function(t){var a=o.state.todos.findIndex(function(t){return t.id===e}),n=o.state.todos.slice();n.splice(a,1),o.setState({todos:n})}},o.handleLoadSearchResults=function(e){o.setState({search:e.target.value})},o.clearCompleted=function(){var e=o.state.todos.slice();e=e.filter(function(e){return!1===e.completed}),o.setState({todos:e})},o.keyHandling=function(e){if(13===e.keyCode){var t={userId:1,id:o.state.nextID,title:o.state.search,completed:!1},a=o.state.todos.slice();a.push(t),o.setState(function(e){return{todos:a,search:"",nextID:e.nextID+1}})}},o}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,type:"text",value:this.state.search,onChange:this.handleLoadSearchResults,onKeyDown:this.keyHandling})),n.a.createElement(f,null,this.state.todos.map(function(t){return n.a.createElement(h,{title:t.title,completed:t.completed,key:t.id,toggleCompleted:e.toggleCompleted(t.id),deleteTodo:e.deleteTodo(t.id)})})),n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},n.a.createElement("strong",null,"0")," item(s) left"),n.a.createElement("button",{className:"clear-completed",onClick:this.clearCompleted},"Clear completed")))}}]),t}(a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("li",{className:this.props.completed?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{className:"toggle",type:"checkbox",defaultChecked:this.props.completed,onClick:this.props.toggleCompleted}),n.a.createElement("label",null,this.props.title),n.a.createElement("button",{className:"destroy",onClick:this.props.deleteTodo})))}}]),t}(a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"main"},n.a.createElement("ul",{className:"todo-list"},this.props.children))}}]),t}(a.Component),b=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},8:function(e,t,o){}},[[10,2,1]]]);
//# sourceMappingURL=main.1140f88e.chunk.js.map