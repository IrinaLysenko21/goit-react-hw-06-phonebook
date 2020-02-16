(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,n){e.exports={variables:"'../../variables.module.css'","color-dark-grey":"#3b3b42","primary-box-shadow":"1px 1px 5px 1px #D3D3D3",contactWrap:"Contact_contactWrap__3MfPF",contact:"Contact_contact__2fauP",name:"Contact_name__a2eNp",number:"Contact_number__2e3M8",deleteBtn:"Contact_deleteBtn__tBUJu"}},18:function(e,t,n){e.exports={enter:"slide_enter__ziRz3",enterActive:"slide_enterActive__1VpSY",exit:"slide_exit__2K1Bv",exitActive:"slide_exitActive__15nJU"}},19:function(e,t,n){e.exports={enter:"pop_enter__VQhRP",enterActive:"pop_enterActive__2qKPj",exit:"pop_exit__3QAUD",exitActive:"pop_exitActive__3uVw0"}},21:function(e,t,n){e.exports={variables:"'../variables.module.css'","primary-font-stack":"Roboto, sans-serif",wrapper:"App_wrapper__2eE1d",heading:"App_heading__3IGuf"}},29:function(e,t,n){e.exports={contactList:"ContactList_contactList__10hON"}},30:function(e,t,n){e.exports={variables:"'../../variables.module.css'","color-dark-grey":"#3b3b42","color-light-grey":"#8c8c8d",search:"Filter_search__10Yh4"}},34:function(e,t,n){e.exports={container:"Message_container__11EdC"}},35:function(e,t,n){e.exports={appear:"appear_appear__1u9xj",appearActive:"appear_appearActive__2iZE4"}},40:function(e,t,n){e.exports=n(64)},64:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(10),s=n.n(o),i=n(4),u=n(7),l=n(1),m=n(12),p=n(36),b=Object(u.c)([],(a={},Object(m.a)(a,"phonebook/ADD_CONTACT",(function(e,t){return[].concat(Object(p.a)(e),[t.payload.contact])})),Object(m.a)(a,"phonebook/DELETE_CONTACT",(function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))})),a)),h=Object(u.c)("",Object(m.a)({},"phonebook/CHANGE_FILTER",(function(e,t){return t.payload.value}))),_=Object(l.combineReducers)({contacts:b,filter:h}),d=Object(l.combineReducers)({phonebook:_}),f=Object(u.a)({reducer:d,devTools:!1}),g=n(65),E=Object(u.b)("phonebook/ADD_CONTACT"),v=Object(u.b)("phonebook/DELETE_CONTACT"),C=Object(u.b)("phonebook/CHANGE_FILTER"),x=n(17),N=function(e){return e.phonebook.contacts},O=function(e){return e.phonebook.contacts.length},w=function(e){return e.phonebook.filter},j=Object(x.a)([N,w],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),y=n(66),k=n(13),A=n.n(k),F=function(e){var t=e.name,n=e.number,a=e.handleDeleteContact;return r.a.createElement("div",{className:A.a.contactWrap},r.a.createElement("p",{className:A.a.contact},r.a.createElement("span",{className:A.a.name},t),":"," ",r.a.createElement("span",{className:A.a.number},n)),r.a.createElement("button",{className:A.a.deleteBtn,type:"button",onClick:a},"Delete"))},D=n(29),S=n.n(D),T=n(18),I=n.n(T),L=function(e){var t=e.contacts,n=e.deleteContact;return r.a.createElement(y.a,{component:"ul",className:S.a.contactList},t.map((function(e){return r.a.createElement(g.a,{key:e.id,timeout:250,unmountOnExit:!0,classNames:I.a},r.a.createElement("li",null,r.a.createElement(F,{name:e.name,number:e.number,handleDeleteContact:function(){return n(e.id)}})))})))},B=Object(i.b)((function(e){return{contacts:j(e)}}),(function(e){return{deleteContact:function(t){return e(v({id:t}))}}}))(L),M=n(30),R=n.n(M),J=function(e){var t=e.value,n=e.changeFilter;return r.a.createElement("input",{className:R.a.search,type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Find contact..."})},P=Object(i.b)((function(e){return{value:w(e)}}),(function(e){return{changeFilter:function(t){return e(C({value:t}))}}}))(J),G=n(31),U=n(32),V=n(37),W=n(33),z=n(38),H=n(20),K=n.n(H),Q=n(34),Y=n.n(Q),Z=function(e){var t=e.text;return r.a.createElement("div",{className:Y.a.container},r.a.createElement("p",null,t))},q=n(8),X=n.n(q),$=n(19),ee=n.n($),te=function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(V.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:"",messageText:"",messageIsShowing:!1},n.inputIds={nameId:K.a.generate(),numberId:K.a.generate()},n.handleChange=function(e){var t=e.target,a=t.name,c=t.value;n.setState(Object(m.a)({},a,c))},n.findMatchingContact=function(e,t){return e.find((function(e){return e.name===t}))},n.createContact=function(e,t){return{id:K.a.generate(),name:e,number:t}},n.showMessage=function(e){n.setState((function(t){return{messageIsShowing:!t.messageIsShowing,messageText:e}}),(function(){return setTimeout((function(){n.setState((function(e){return{messageIsShowing:!e.messageIsShowing,messageText:""}}))}),2e3)}))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,c=t.number,r=n.props,o=r.contacts,s=r.addContact;return""===a.trim()||""===c.trim()?n.showMessage("Please fill out the form"):isNaN(+c)?n.showMessage("Wrong number format"):n.findMatchingContact(o,a)?n.showMessage("Contact already exists"):(s(n.createContact(a,c)),void n.resetForm())},n.resetForm=function(){n.setState({name:"",number:""})},n}return Object(z.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){try{var e=this.props.addContact,t=localStorage.getItem("contacts");if(t)JSON.parse(t).map((function(t){return e(t)}))}catch(n){throw new Error(n)}}},{key:"componentDidUpdate",value:function(e,t){try{var n=this.props.contacts;t.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}catch(a){throw new Error(a)}}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.messageText,c=e.messageIsShowing,o=this.inputIds,s=o.nameId,i=o.numberId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:X.a.contactForm,onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:s,className:X.a.label},r.a.createElement("span",{className:X.a.inputName},"Enter name:"),r.a.createElement("input",{id:s,className:X.a.input,type:"text",name:"name",placeholder:"Enter name...",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:i,className:X.a.label},r.a.createElement("span",{className:X.a.inputName},"Enter number:"),r.a.createElement("input",{id:i,className:X.a.input,type:"text",name:"number",placeholder:"Enter phone number...",value:n,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:X.a.submitBtn},"Save contact")),r.a.createElement(g.a,{in:c,timeout:250,classNames:ee.a,unmountOnExit:!0},r.a.createElement(Z,{text:a})))}}]),t}(c.Component),ne=Object(i.b)((function(e){return{contacts:N(e)}}),(function(e){return{addContact:function(t){return e(E({contact:t}))}}}))(te),ae=n(21),ce=n.n(ae),re=n(35),oe=n.n(re),se=Object(i.b)((function(e){return{contactsLength:O(e)}}))((function(e){var t=e.contactsLength;return r.a.createElement("div",{className:ce.a.wrapper},r.a.createElement(g.a,{in:!0,timeout:500,classNames:oe.a,appear:!0},r.a.createElement("h1",{className:ce.a.heading},"Phonebook")),r.a.createElement(ne,null),r.a.createElement("h2",{className:ce.a.heading},"Contacts"),r.a.createElement(g.a,{in:t>1,timeout:250,classNames:ee.a,unmountOnExit:!0},r.a.createElement(P,null)),r.a.createElement(g.a,{in:t>0,timeout:250,classNames:I.a,unmountOnExit:!0},r.a.createElement(B,null)))}));n(63);s.a.render(r.a.createElement(i.a,{store:f},r.a.createElement(se,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={variables:"'../../variables.module.css'","color-dark-grey":"#3b3b42","primary-box-shadow":"1px 1px 5px 1px #D3D3D3",contactForm:"ContactForm_contactForm__caxvZ",label:"ContactForm_label__GBGo7",inputName:"ContactForm_inputName__2-25V",input:"ContactForm_input__2lU76",submitBtn:"ContactForm_submitBtn__2XgTj"}}},[[40,1,2]]]);
//# sourceMappingURL=main.2c133544.chunk.js.map