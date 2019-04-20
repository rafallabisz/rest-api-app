(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/image.b4f9a703.jpg"},31:function(e,a,t){e.exports=t(49)},47:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(11),s=t.n(l),i=t(12),d=t(16),o=t.n(d),c=t(15),m=t(23),u=t(24),h=t(25),E=t(29),f=t(26),v=t(30),p=t(55),N=t(63),U=t(50),g=t(51),_=t(52),M=t(53),y=t(54),b=t(56),C=t(57),L=function(e){var a=e.state,t=a.addUserModal,n=a.value_firstName,l=a.value_lastName,s=a.isLoading;return r.a.createElement(N.a,{isOpen:t,toggle:e.handleAddUserModal},r.a.createElement(U.a,{toggle:e.handleAddUserModal},"Add a new user"),r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(M.a,{for:"firstName"},"First Name"),r.a.createElement(y.a,{id:"firstName",name:"value_firstName",maxLength:"20",value:n,onChange:e.handleInput})),s&&r.a.createElement(p.a,{color:"primary",className:"spinner"}),r.a.createElement(_.a,null,r.a.createElement(M.a,{for:"lastName"},"Last Name"),r.a.createElement(y.a,{id:"lastName",name:"value_lastName",maxLength:"20",value:l,onChange:e.handleInput}))),r.a.createElement(b.a,null,r.a.createElement(C.a,{color:"primary",onClick:e.addUser},"Add User")," ",r.a.createElement(C.a,{color:"secondary",onClick:e.handleAddUserModal},"Cancel")))},w=function(e){var a=e.state,t=a.editUserModal,n=a.value_firstName,l=a.value_lastName,s=a.value_id,i=a.isLoading;return r.a.createElement(N.a,{isOpen:t,toggle:e.handleEditUserModal},r.a.createElement(U.a,{toggle:e.handleEditUserModal},"User edition"),r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(M.a,{for:"firstName"},"First Name"),r.a.createElement(y.a,{id:"firstName",name:"value_firstName",maxLength:"20",value:n,onChange:e.handleInput})),i&&r.a.createElement(p.a,{color:"primary",className:"spinner"}),r.a.createElement(_.a,null,r.a.createElement(M.a,{for:"lastName"},"Last Name"),r.a.createElement(y.a,{id:"lastName",name:"value_lastName",maxLength:"20",value:l,onChange:e.handleInput})),r.a.createElement(_.a,null,r.a.createElement(M.a,{for:"id"},"ID"),r.a.createElement(y.a,{id:"id",name:"value_id",type:"number",maxLength:"20",value:s,onChange:e.handleInput}))),r.a.createElement(b.a,null,r.a.createElement(C.a,{color:"primary",onClick:e.editUser},"Edit User")," ",r.a.createElement(C.a,{color:"secondary",onClick:e.handleEditUserModal},"Cancel")))},A=t(58),O=function(e){var a=e.state.users.map(function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.id),r.a.createElement("td",null,r.a.createElement("img",{src:a.avatar,alt:"avatar",className:"image"})),r.a.createElement("td",{className:"size-letter"},a.first_name.toLowerCase()),r.a.createElement("td",{className:"size-letter"},a.last_name.toLowerCase()),r.a.createElement("td",null,r.a.createElement(C.a,{color:"success",size:"sm",className:"mr-2",onClick:function(){return e.handleEditUserModal()}},"Edit"),r.a.createElement(C.a,{color:"danger",size:"sm",onClick:function(){return e.deleteUser(a.id)}},"Delete")))});return r.a.createElement(A.a,{className:"table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Avatar"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a))},S=t(59),k=t(60),I=function(e){var a=e.handleAddUserModal,t=e.alertDeletedUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement(S.a,{className:"header text-center bg-warning"},r.a.createElement(k.a,{className:"header_col"},"Users Management"))),r.a.createElement("div",{className:"header-wrap container"},r.a.createElement(C.a,{color:"primary",onClick:a},"Add User"),t&&r.a.createElement("div",{className:"alert-deleted-user"},"User has been deleted!")))},j=t(61),D=function(){return r.a.createElement(j.a,{className:"text-center"},"\xa9 2019 Rafa\u0142 Labisz")},x=t(28),T=t.n(x),z=t(62),J=function(){return r.a.createElement(z.a,{color:"danger"},"Error occurated! Please refresh the page or try again later!")},P="https://reqres.in",F=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={users:[],err:!1,isLoading:!1,addUserModal:!1,editUserModal:!1,value_id:"",value_firstName:"",value_lastName:"",alertDeletedUser:!1},t.fetchUsers=function(){var e=Object(m.a)(o.a.mark(function e(a,n,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,fetch(P+a,n,r).then(function(e){return 204===e.status?t.handleAlertDelete():e.ok?e.json():void 0}).then(function(e){var a=t.state,l=a.users,s=a.addUserModal,i=a.editUserModal;if("GET"===n.method)t.setState({users:e.data,isLoading:!1});else if("POST"===n.method){var d={id:Number(e.id),first_name:e.value_firstName,last_name:e.value_lastName,avatar:T.a};t.setState({users:[].concat(Object(c.a)(l),[d]),addUserModal:!s,isLoading:!1,value_firstName:"",value_lastName:""})}else if("DELETE"===n.method){var o=Object(c.a)(t.state.users),m=o.findIndex(function(e){return e.id===r});o.splice(m,1),t.setState({users:o,isLoading:!1})}else if("PATCH"===n.method){var u=Object(c.a)(t.state.users),h=u.findIndex(function(a){return a.id===Number(e.value_id)});-1!==h?(u[h].first_name=e.value_firstName,u[h].last_name=e.value_lastName,t.setState({users:u,editUserModal:!i,value_firstName:"",value_lastName:"",value_id:"",isLoading:!1})):(alert("Id was not found!"),t.setState({value_id:"",isLoading:!1}))}}).catch(function(e){console.error(e),t.setState({err:!0,isLoading:!1})});case 3:case"end":return e.stop()}},e)}));return function(a,t,n){return e.apply(this,arguments)}}(),t.addUser=function(){var e=t.state,a=e.value_firstName,n=e.value_lastName;if(!a||!n)return alert("Complete the data!");var r={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({value_firstName:a,value_lastName:n})};t.fetchUsers("/api/users",r)},t.editUser=function(){var e=t.state,a=e.value_firstName,n=e.value_lastName,r=e.value_id;if(!(a&&n&&r))return alert("Complete the data!");var l="/api/users/".concat(r),s={method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({value_firstName:a,value_lastName:n,value_id:r})};t.fetchUsers(l,s)},t.deleteUser=function(e){var a="/api/users/".concat(e),n={method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e})};t.fetchUsers(a,n,e)},t.handleAddUserModal=function(){t.setState(function(e){return{addUserModal:!e.addUserModal,value_firstName:"",value_lastName:""}})},t.handleEditUserModal=function(){t.setState(function(e){return{editUserModal:!e.editUserModal,value_firstName:"",value_lastName:"",value_id:""}})},t.handleInput=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleAlertDelete=function(){t.setState({alertDeletedUser:!0}),setTimeout(function(){return t.setState({alertDeletedUser:!1})},2e3)},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchUsers("/api/users?per_page=5",{method:"GET"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(I,{handleAddUserModal:this.handleAddUserModal,alertDeletedUser:this.state.alertDeletedUser})),r.a.createElement("div",{className:"container container-panel"},r.a.createElement("main",null,r.a.createElement("section",{className:"panel"},this.state.err&&r.a.createElement(J,null),this.state.isLoading&&r.a.createElement(p.a,{color:"primary",className:"spinner"}),r.a.createElement(L,{state:this.state,handleAddUserModal:this.handleAddUserModal,handleInput:this.handleInput,addUser:this.addUser}),!this.state.err&&r.a.createElement(O,{state:this.state,deleteUser:this.deleteUser,handleEditUserModal:this.handleEditUserModal}),r.a.createElement(w,{state:this.state,handleEditUserModal:this.handleEditUserModal,handleInput:this.handleInput,editUser:this.editUser})))),r.a.createElement("footer",null,r.a.createElement(D,null)))}}]),a}(n.Component);t(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(48);s.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.ede8da34.chunk.js.map