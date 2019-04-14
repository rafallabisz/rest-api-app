(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/image.b4f9a703.jpg"},31:function(e,a,t){e.exports=t(49)},47:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(11),s=t.n(l),i=t(12),d=t(16),o=t.n(d),c=t(15),u=t(23),m=t(24),h=t(25),f=t(29),E=t(26),v=t(30),p=t(56),N=t(62),U=t(50),_=t(51),g=t(52),M=t(53),y=t(54),b=t(55),C=function(e){var a=e.state,t=a.addUserModal,n=a.value_firstName,l=a.value_lastName;return r.a.createElement(N.a,{isOpen:t,toggle:e.handleAddUserModal},r.a.createElement(U.a,{toggle:e.handleAddUserModal},"Add a new user"),r.a.createElement(_.a,null,r.a.createElement(g.a,null,r.a.createElement(M.a,{for:"firstName"},"First Name"),r.a.createElement(y.a,{id:"firstName",name:"value_firstName",maxLength:"20",value:n,onChange:e.handleInput})),r.a.createElement(g.a,null,r.a.createElement(M.a,{for:"lastName"},"Last Name"),r.a.createElement(y.a,{id:"lastName",name:"value_lastName",maxLength:"20",value:l,onChange:e.handleInput}))),r.a.createElement(b.a,null,r.a.createElement(p.a,{color:"primary",onClick:e.addUser},"Add User")," ",r.a.createElement(p.a,{color:"secondary",onClick:e.handleAddUserModal},"Cancel")))},w=function(e){var a=e.state,t=a.editUserModal,n=a.value_firstName,l=a.value_lastName,s=a.value_id;return r.a.createElement(N.a,{isOpen:t,toggle:e.handleEditUserModal},r.a.createElement(U.a,{toggle:e.handleEditUserModal},"User edition"),r.a.createElement(_.a,null,r.a.createElement(g.a,null,r.a.createElement(M.a,{for:"firstName"},"First Name"),r.a.createElement(y.a,{id:"firstName",name:"value_firstName",maxLength:"20",value:n,onChange:e.handleInput})),r.a.createElement(g.a,null,r.a.createElement(M.a,{for:"lastName"},"Last Name"),r.a.createElement(y.a,{id:"lastName",name:"value_lastName",maxLength:"20",value:l,onChange:e.handleInput})),r.a.createElement(g.a,null,r.a.createElement(M.a,{for:"id"},"ID"),r.a.createElement(y.a,{id:"id",name:"value_id",type:"number",maxLength:"20",value:s,onChange:e.handleInput}))),r.a.createElement(b.a,null,r.a.createElement(p.a,{color:"primary",onClick:e.editUser},"Edit User")," ",r.a.createElement(p.a,{color:"secondary",onClick:e.handleEditUserModal},"Cancel")))},L=t(57),O=function(e){var a=e.state.users.map(function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.id),r.a.createElement("td",null,r.a.createElement("img",{src:a.avatar,alt:"avatar",className:"image"})),r.a.createElement("td",{className:"sizeLetter"},a.first_name.toLowerCase()),r.a.createElement("td",{className:"sizeLetter"},a.last_name.toLowerCase()),r.a.createElement("td",null,r.a.createElement(p.a,{color:"success",size:"sm",className:"mr-2",onClick:function(){return e.handleEditUserModal()}},"Edit"),r.a.createElement(p.a,{color:"danger",size:"sm",onClick:function(){return e.deleteUser(a.id)}},"Delete")))});return r.a.createElement(L.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Avatar"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a))},k=t(58),A=t(59),I=function(){return r.a.createElement(k.a,{className:"header text-center bg-warning"},r.a.createElement(A.a,{className:"header_col"},"Application"))},j=t(60),S=function(){return r.a.createElement(j.a,{className:"text-center"},"\xa9 2019 Rafa\u0142 Labisz")},x=t(28),T=t.n(x),D=t(61),z=function(){return r.a.createElement(D.a,{color:"danger"},"Error occurated! Please refresh the page or try again later!")},J="https://reqres.in",P=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(f.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(r)))).state={users:[],err:!1,isLoading:!1,addUserModal:!1,editUserModal:!1,value_id:"",value_firstName:"",value_lastName:""},t.fetchUsers=function(){var e=Object(u.a)(o.a.mark(function e(a,n,r){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(J+a,n,r).then(function(e){return 204===e.status?alert("User of the number id ".concat(r," has been deleted!")):e.ok&&204!==e.status?e.json():void 0}).then(function(e){console.log(n.method,e);var a=t.state,l=a.users,s=a.addUserModal;if("GET"===n.method)t.setState({users:e.data,isLoading:!0,err:!1});else if("POST"===n.method){var i={id:Number(e.id),first_name:e.value_firstName,last_name:e.value_lastName,avatar:T.a};t.setState({users:[].concat(Object(c.a)(l),[i]),addUserModal:!s,isLoading:!0,value_firstName:"",value_lastName:""})}else if("DELETE"===n.method){var d=Object(c.a)(t.state.users),o=d.findIndex(function(e){return e.id===r});d.splice(o,1),t.setState({users:d})}else if("PATCH"===n.method){var u=Object(c.a)(t.state.users),m=u.findIndex(function(a){return a.id===Number(e.value_id)});-1!==m?(u[m].first_name=e.value_firstName,u[m].last_name=e.value_lastName,t.setState({users:u,editUserModal:!t.state.editUserModal,value_firstName:"",value_lastName:"",value_id:""})):(alert("Id was not found!"),t.setState({value_id:""}))}}).catch(function(e){console.error(e),t.setState({err:!0})});case 2:case"end":return e.stop()}},e)}));return function(a,t,n){return e.apply(this,arguments)}}(),t.addUser=function(){var e=t.state,a=e.value_firstName,n=e.value_lastName;if(!a||!n)return alert("Complete the data!");var r={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({value_firstName:a,value_lastName:n})};t.fetchUsers("/api/users",r)},t.editUser=function(){var e=t.state,a=e.value_firstName,n=e.value_lastName,r=e.value_id;if(!(a&&n&&r))return alert("Complete the data!");var l="/api/users/".concat(r),s={method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({value_firstName:a,value_lastName:n,value_id:r})};t.fetchUsers(l,s)},t.deleteUser=function(e){var a="/api/users/".concat(e),n={method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({id:e})};t.fetchUsers(a,n,e)},t.handleAddUserModal=function(){t.setState(function(e){return{addUserModal:!e.addUserModal,value_firstName:"",value_lastName:""}})},t.handleEditUserModal=function(){t.setState(function(e){return{editUserModal:!e.editUserModal,value_firstName:"",value_lastName:"",value_id:""}})},t.handleInput=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t}return Object(v.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){this.fetchUsers("/api/users?per_page=5",{method:"GET"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{color:"primary",onClick:this.handleAddUserModal},"Add User"),r.a.createElement("main",null,r.a.createElement("section",{className:"panel"},this.state.err&&r.a.createElement(z,null),r.a.createElement(C,{state:this.state,handleAddUserModal:this.handleAddUserModal,handleInput:this.handleInput,addUser:this.addUser}),!this.state.err&&r.a.createElement(O,{state:this.state,deleteUser:this.deleteUser,handleEditUserModal:this.handleEditUserModal}),r.a.createElement(w,{state:this.state,handleEditUserModal:this.handleEditUserModal,handleInput:this.handleInput,editUser:this.editUser})))),r.a.createElement("footer",null,r.a.createElement(S,null)))}}]),a}(n.Component);t(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(48);s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.f4d3f51f.chunk.js.map