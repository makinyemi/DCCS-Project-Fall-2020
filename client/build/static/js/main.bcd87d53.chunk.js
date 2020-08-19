(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),o=(a(85),a(9)),i=a(10),s=a(12),m=a(11),u=a(24),d=a(6),h=(a(86),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"masthead mb-auto"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",{className:"masthead-brand"},"DCCS Task Manager"),l.a.createElement("p",{className:"lead"},"Welcome to the DCCS Task Manager App."))))}}]),a}(n.Component)),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"site-header sticky-top py-1"},l.a.createElement("div",{className:"container d-flex flex-column flex-md-row justify-content-between"},l.a.createElement(u.b,{to:"/",className:"py-2 d-none d-md-inline-block"},"Tasks"),l.a.createElement(u.b,{to:"/add",className:"py-2 d-none d-md-inline-block"},"Add New Task")))}}]),a}(n.Component),b=a(8),f=a(22),E=a.n(f),v=a(77),g=(a.n(v).a.address().replace(/\./g,"-"),"http://100.25.211.182:5000/task/"),k=function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.task.name),l.a.createElement("td",null,e.task.description),l.a.createElement("td",null,String(e.task.date).substring(0,10)),l.a.createElement("td",null,l.a.createElement(u.b,{to:"/update/"+e.task._id},"edit")," |",l.a.createElement("a",{href:"#",onClick:function(){e.deleteTask(e.task._id)}},"delete")))},C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tasks:[]},n.deleteTask=n.deleteTask.bind(Object(b.a)(n)),n.taskList=n.taskList.bind(Object(b.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get(String(g)).then((function(t){e.setState({tasks:Array.from(t.data)})})).catch((function(e){console.log(e)}))}},{key:"deleteTask",value:function(e){E.a.delete(String(g)+e).then((function(e){return console.log(e.data)})),this.setState({tasks:this.state.tasks.filter((function(t){return t._id!==e}))})}},{key:"taskList",value:function(){var e=this;return this.state.tasks.map((function(t){return l.a.createElement(k,{task:t,deleteTask:e.deleteTask,key:t._id})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Tasks"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.taskList())))}}]),a}(n.Component),y=a(36),j=a.n(y),N=(a(66),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",description:"",date:new Date},n.onChangeName=n.onChangeName.bind(Object(b.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(b.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(i.a)(a,[{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,description:this.state.description,date:this.state.date};console.log(t),E.a.post(String(g)+"add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Add New Task"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Task Description: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date to Complete: "),l.a.createElement("div",null,l.a.createElement(j.a,{selected:this.state.date,onChange:this.onChangeDate}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Task",className:"btn btn-primary"}))))}}]),a}(n.Component)),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:"",description:"",date:new Date},n.onChangeName=n.onChangeName.bind(Object(b.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(b.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get(g+this.props.match.params.id).then((function(t){console.log(e.props.match.params.id),e.setState({name:t.data.name,description:t.data.description,date:new Date(t.data.date)})})).catch((function(e){console.log(e)}))}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,description:this.state.description,date:this.state.date};console.log(t),E.a.post(String(g)+"update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Edit Task"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Task Description: "),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date to Complete: "),l.a.createElement("div",null,l.a.createElement(j.a,{selected:this.state.date,onChange:this.onChangeDate}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Edit Task",className:"btn btn-primary"}))))}}]),a}(n.Component),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"mastfoot mt-auto"},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",l.a.createElement("div",{className:"inner"},l.a.createElement("p",null,"Data and Cloud Computing Society, 2020 \xa9"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(h,null),l.a.createElement("div",{className:"container"},l.a.createElement(p,null),l.a.createElement(d.a,{path:"/",exact:!0,component:C}),l.a.createElement(d.a,{path:"/update/:id",exact:!0,component:O}),l.a.createElement(d.a,{path:"/add",exact:!0,component:N})),l.a.createElement(D,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(169)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.bcd87d53.chunk.js.map