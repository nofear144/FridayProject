(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={container:"Login_container__1TO0J",form:"Login_form__EaZA1",header:"Login_header__200SH",signLabel:"Login_signLabel__3nHWZ",forgot:"Login_forgot__2E0RR",button:"Login_button__iasju",helpText:"Login_helpText__3H7X0",sign:"Login_sign__sS9B_"}},function(e,t,n){e.exports={select:"SuperInputSelect_select__20co1",bar:"SuperInputSelect_bar__iZ3dL",selectLabel:"SuperInputSelect_selectLabel__3LEdH",highlight:"SuperInputSelect_highlight__LtYcu"}},function(e,t,n){e.exports={btn:"SuperButton_btn__2B4YV",btnLink:"SuperButton_btnLink__2o4te",btnPrimary:"SuperButton_btnPrimary__26h2r",btnSecondary:"SuperButton_btnSecondary__15QpL",btnBox:"SuperButton_btnBox__2bePF"}},function(e,t,n){e.exports={registration:"Registration_registration__1Mzw6",header:"Registration_header__1hDWk",inputs:"Registration_inputs__oexD2",buttons:"Registration_buttons__RCUf3",error:"Registration_error__tnuIC",emptyDiv:"Registration_emptyDiv__3jQi5",span:"Registration_span__3oJvf"}},function(e,t,n){e.exports={group:"SuperInputText_group__35Zpz",bar:"SuperInputText_bar__3lbUB"}},function(e,t,n){e.exports={form:"NewPassword_form__2_i3T",container:"NewPassword_container__zD-w2",subTitle:"NewPassword_subTitle__3V93Y",title:"NewPassword_title__3X6O9",description:"NewPassword_description__3KKNj"}},function(e,t,n){e.exports={form:"CheckEmail_form__2MPfH",container:"CheckEmail_container__3GtRs",subTitle:"CheckEmail_subTitle__22F3q",title:"CheckEmail_title__1gC1g",description:"CheckEmail_description__CwD8p"}},,,,,,function(e,t,n){e.exports={form:"ResetPassword_form__1XtY5",loading:"ResetPassword_loading__GyiLD",container:"ResetPassword_container__3gPjn",subTitle:"ResetPassword_subTitle__2ihDw",title:"ResetPassword_title__3xL4I"}},function(e,t,n){e.exports={body:"NotFound404_body__1FofC",container:"NotFound404_container__25AGI",number:"NotFound404_number__KOKJ6",link:"NotFound404_link__9sRaU"}},,,,function(e,t,n){e.exports={"md-checkbox":"SuperCheckbox_md-checkbox__2JtPb","md-checkbox-inline":"SuperCheckbox_md-checkbox-inline__2R60i"}},function(e,t,n){e.exports={linearActivity:"Linear-loader_linearActivity__2suYL",indeterminate:"Linear-loader_indeterminate__2fUnD",indeterminate_first:"Linear-loader_indeterminate_first__7AeY9",indeterminate_second:"Linear-loader_indeterminate_second__38xYE"}},,,,,,,,,,,function(e,t,n){e.exports={loading:"Loader_loading__1ju_4"}},function(e,t,n){e.exports={window:"Window_window__fuCZN"}},function(e,t,n){e.exports={container:"Test_container__2qRfP"}},function(e,t,n){e.exports={ldsRing:"Spinner_ldsRing__1resP","lds-ring":"Spinner_lds-ring__Dx3cR"}},function(e,t,n){e.exports={loader:"Profile_loader__2Qc7d"}},function(e,t,n){e.exports={container:"routes_container__3rBCA"}},function(e,t,n){e.exports={header:"Header_header__3Voke"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),r=n(5),o=(n(57),n(58),n(7)),l=n(2),j=n(3),d=n(11),b=n.n(d),u=n(4),p=n(10),h=n(15),O=n.n(h),C=n(0),x=function(e){var t=e.name,n=e.onChange,a=e.onChangeText,c=e.onKeyPress,s=e.onEnter,i=e.error,r=e.className,o=e.spanClassName,l=Object(p.a)(e,["name","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(O.a.error," ").concat(o||"");"".concat(O.a.errorInput," ").concat(r);return Object(C.jsxs)("div",{className:O.a.group,children:[Object(C.jsx)("input",Object(u.a)(Object(u.a)({},l),{},{onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),s&&"Enter"===e.key&&s()}})),Object(C.jsx)("span",{className:O.a.bar}),Object(C.jsx)("label",{children:t}),i&&Object(C.jsx)("span",{className:j,children:i})]})},f=n(13),m=n.n(f),_=function(e){var t=e.onClick,n=e.variant,a=e.name,c=(e.className,Object(p.a)(e,["onClick","variant","name","className"])),s="".concat(m.a.btn," ").concat(m.a.btnPrimary);return"secondary"===n&&(s="".concat(m.a.btn," ").concat(m.a.btnSecondary)),Object(C.jsx)("div",{className:m.a.btnBox,children:Object(C.jsx)("button",Object(u.a)(Object(u.a)({onClick:function(e){t&&t(e)},className:s},c),{},{type:"submit",children:a}))})},g=n(21),v=n.n(g),L=v.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),S=function(e){var t=e.email,n=e.password,a=e.rememberMe;return L.post("/auth/login",{email:t,password:n,rememberMe:a})},N=function(){return L.delete("/auth/me")},w=function(){return L.post("/auth/me").then((function(e){return e.data}))},E={_id:"",name:"",avatar:""},T={isInitialize:!1,error:"",status:"idle"},y=function(e){return{type:"app/SET-ERROR",payload:{error:e}}},R=function(e){return{type:"app/SET-IS-INITIALIZED-STATUS",payload:{isInitialize:e}}},F=function(e){return{type:"app/SET-STATUS",payload:{status:e}}},D=v.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0,headers:{}}),k=function(e){return D.post("auth/forgot",e)},I=function(e){return D.post("auth/set-new-password",e)},M={isLogged:!1},P=function(e){return{type:"login/SET-IS-LOGGED-IN-STATUS",payload:{isLogged:e}}},Z=n(25),H=n(39),V={},A=function(e){var t=e.email,n=e.password;return L.post("auth/register",{email:t,password:n})},G={isRegister:!1},B=function(e){return{type:"registration/SET-REGISTER",payload:{isRegister:e}}},U=Object(Z.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN-STATUS":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},registrationPass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registration/SET-REGISTER":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/SET-PROFILE-DATA":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}},test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return t.type,e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-IS-INITIALIZED-STATUS":case"app/SET-STATUS":case"app/SET-ERROR":return Object(u.a)(Object(u.a)({},e),t.payload);default:return e}}}),W=Object(Z.c)(U,Object(Z.a)(H.a)),q=r.c,K=n(28),z=n.n(K),Y=function(e){var t=e.name,n=(e.type,e.onChange),a=e.onChangeChecked;e.className,e.spanClassName,e.children,Object(p.a)(e,["name","type","onChange","onChangeChecked","className","spanClassName","children"]);return Object(C.jsxs)("div",{className:z.a.mdCheckbox,children:[Object(C.jsx)("input",{onChange:function(e){n&&n(e),a&&a(e.currentTarget.checked)},className:z.a.input,type:"checkbox"}),Object(C.jsx)("label",{children:t})]})},J=n(29),Q=n.n(J),X=function(){return Object(C.jsx)("div",{className:Q.a.linearActivity,children:Object(C.jsx)("div",{className:Q.a.indeterminate})})},$=n(40),ee=n.n($),te=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(X,{}),Object(C.jsx)("div",{className:ee.a.loading})]})},ne=n(41),ae=n.n(ne),ce=function(e){var t=e.children;return Object(C.jsx)("div",{className:ae.a.window,children:t})};function se(){var e=Object(l.g)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),o=Object(j.a)(i,2),d=o[0],u=o[1],p=Object(a.useState)(!1),h=Object(j.a)(p,2),O=h[0],f=h[1],m=q((function(e){return e.app.status})),g=q((function(e){return e.app.error})),v=q((function(e){return e.login.isLogged})),L=Object(r.b)();return v?Object(C.jsx)(l.a,{to:Me.PROFILE}):Object(C.jsxs)(ce,{children:["loading"===m&&Object(C.jsx)(te,{}),Object(C.jsx)("form",{onSubmit:function(e){L(function(e){var t=e.email,n=e.password,a=e.rememberMe;return function(e){e(F("loading")),S({email:t,password:n,rememberMe:a}).then((function(t){e(P(!0)),e(F("succeeded")),e({type:"profile/SET-PROFILE-DATA",payload:{_id:t.data._id,name:t.data.name,avatar:t.data.avatar}})})).catch((function(t){e(y(t.response.data.error)),e(F("idle"))}))}}({email:c,password:d,rememberMe:O})),e.preventDefault()},children:Object(C.jsxs)("div",{className:b.a.form,children:[Object(C.jsx)("div",{className:b.a.header,children:"it-incubator"}),Object(C.jsx)("div",{className:b.a.signLabel,children:"Sign in"}),Object(C.jsx)(x,{type:"text",required:!0,name:"email",onChangeText:function(e){s(e),L(y(""))}}),Object(C.jsx)(x,{type:"password",required:!0,name:"password",onChangeText:function(e){u(e),L(y(""))}}),Object(C.jsx)("div",{children:Object(C.jsx)(Y,{name:"Remember me",onChangeChecked:f})}),Object(C.jsx)("div",{className:b.a.forgot,children:Object(C.jsx)("span",{onClick:function(){e(Me.RESET_PASSWORD)},children:"Forgot Password"})}),Object(C.jsx)("div",{className:b.a.button,children:Object(C.jsx)(_,{type:"submit",name:"Login",variant:"primary"})}),Object(C.jsx)("div",{className:b.a.helpText,children:" Don't have an account?"}),Object(C.jsx)("div",{onClick:function(){e(Me.REGISTRATION)},className:b.a.sign,children:"Sign Up"}),Object(C.jsx)("div",{children:g})]})})]})}var ie=n(14),re=n.n(ie),oe=c.a.memo((function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],b=Object(a.useState)(""),u=Object(j.a)(b,2),p=u[0],h=u[1],O=Object(r.b)(),f=q((function(e){return e.app.status})),m=q((function(e){return e.app.error})),g=q((function(e){return e.registrationPass.isRegister}));Object(a.useEffect)((function(){return function(){O(B(!1))}}),[O]);return g?Object(C.jsx)(l.a,{to:Me.LOGIN}):Object(C.jsxs)(ce,{children:["loading"===f&&Object(C.jsx)(te,{}),Object(C.jsx)("form",{onSubmit:function(e){o===p&&(O(function(e){var t=e.email,n=e.password;return function(e){e(F("loading")),A({email:t,password:n}).then((function(t){e(F("succeeded")),e(y("")),e(B(!0))})).catch((function(t){e(F("failed"));var n=t.response?t.response.data.error:t.message+"some message from backend";e(y(n))}))}}({email:n,password:o})),e.preventDefault()),o!==p&&O(y("Passwords are not the same")),o.length<7&&O(y("Password must be more than 7 characters..."))},children:Object(C.jsxs)("div",{className:re.a.registration,children:[Object(C.jsx)("h1",{children:"It-incubator"}),Object(C.jsx)("h2",{children:"Sign Up"}),Object(C.jsx)("div",{className:re.a.emptyDiv,children:"failed"===f?Object(C.jsx)("span",{className:re.a.error,children:m}):Object(C.jsx)("span",{className:re.a.span,children:" "})}),Object(C.jsx)(x,{onChangeText:c,value:n,required:!0,name:"Email"}),Object(C.jsx)(x,{onChangeText:d,value:o,required:!0,name:"Password"}),Object(C.jsx)(x,{onChangeText:h,value:p,required:!0,name:"Confirm password"}),Object(C.jsxs)("div",{className:re.a.buttons,children:[Object(C.jsx)(_,{style:{backgroundColor:"pink",color:"black"},name:"Cancel",onClick:function(){c(""),d(""),h("")}}),Object(C.jsx)(_,{disabled:"loading"===f,name:"Register",type:"submit"})]})]})})]})})),le=n(23),je=n.n(le),de=Object(a.memo)((function(){var e=q((function(e){return e.app.error})),t=q((function(e){return e.app.status})),n=Object(l.g)(),c=Object(r.b)(),s=Object(a.useState)(""),i=Object(j.a)(s,2),d=i[0],b=i[1];return Object(a.useEffect)((function(){if(console.log(t),"succeeded"===t)return n("".concat(Me.CHECK_EMAIL,"/").concat(d)),function(){c(F("idle"))}}),[t]),Object(C.jsxs)(ce,{children:["loading"===t&&Object(C.jsx)(te,{}),Object(C.jsxs)("form",{className:je.a.container,onSubmit:function(e){var t;c((t={email:d,from:"arsbazel@gmail.com",message:'<div style=" width: 400px; text-align: center;\n                      border-radius: 8px;\n                      background-image: linear-gradient(125deg, #6a89cc, #b8e994);\n                      padding: 50px">\n                      <a href=\'https://nofear144.github.io/FridayProject/#/set-new-password/$token$\'\n                    style="color: #f8faff; font-size: 25px; padding: 15px; text-decoration: none">\n                    <div style="border-radius: 5px; background-color: #4e5fff">\n                    Go to create new password</div></a></div>'},function(e){e(F("loading")),k(t).then((function(){e(F("succeeded"))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(y(n)),e(F("idle"))}))})),e.preventDefault()},children:[Object(C.jsx)("span",{className:je.a.title,children:"it-cards"}),Object(C.jsx)("h1",{className:je.a.subTitle,children:"Forgot your password?"}),Object(C.jsx)(x,{onChangeText:function(e){b(e),c(y(""))},type:"text",required:!0,name:"Email"}),Object(C.jsx)("span",{children:"Enter your email address and we will send you further instructions "}),Object(C.jsx)(_,{name:"Send Instructions",type:"submit"}),Object(C.jsx)("span",{children:"Did you remember your password?"}),Object(C.jsx)(o.b,{children:"Try logging in",to:"/login"}),e?Object(C.jsx)("span",{children:e}):Object(C.jsx)("span",{children:" "})]})]})})),be=n(16),ue=n.n(be),pe=Object(a.memo)((function(){var e=Object(l.g)(),t=Object(r.b)(),n=q((function(e){return e.app.error})),c=q((function(e){return e.app.status})),s=Object(a.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],b=Object(l.h)().token;return Object(a.useEffect)((function(){if("succeeded"===c)return e(Me.LOGIN),function(){t(F("idle"))}}),[c]),Object(C.jsxs)(ce,{children:["loading"===c&&Object(C.jsx)(te,{}),Object(C.jsxs)("form",{onSubmit:function(e){t(function(e){return function(t){t(F("loading")),I(e).then((function(){t(F("succeeded"))})).catch((function(e){var n=e.response?e.response.data.error:e.message+", more details in the console";t(y(n)),t(F("idle"))}))}}({password:o,resetPasswordToken:b||""})),e.preventDefault()},className:ue.a.container,children:[Object(C.jsx)("span",{className:ue.a.title,children:"it-cards"}),Object(C.jsx)("h1",{className:ue.a.subTitle,children:"Create new password"}),Object(C.jsx)(x,{onChangeText:function(e){d(e),t(y(""))},type:"text",required:!0,name:"Password"}),Object(C.jsx)("span",{className:ue.a.description,children:"Create new password and we will send you further instructions to email"}),Object(C.jsx)(_,{type:"submit",name:"Create new password"}),n?Object(C.jsx)("span",{children:n}):Object(C.jsx)("span",{children:" "})]})]})})),he=n(12),Oe=n.n(he),Ce=function(e){var t=e.options;e.onChange,e.onChangeOption,Object(p.a)(e,["options","onChange","onChangeOption"]),t&&t.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}));return Object(C.jsx)("div",{className:Oe.a.wrap,children:Object(C.jsxs)("div",{className:Oe.a.select,children:[Object(C.jsxs)("select",{className:Oe.a.selectText,required:!0,children:[Object(C.jsx)("option",{value:"",disabled:!0,selected:!0}),Object(C.jsx)("option",{value:"1",children:"Option 1"}),Object(C.jsx)("option",{value:"2",children:"Option 2"}),Object(C.jsx)("option",{value:"3",children:"Option 3"})]}),Object(C.jsx)("span",{className:Oe.a.highlight}),Object(C.jsx)("span",{className:Oe.a.bar}),Object(C.jsx)("label",{className:Oe.a.selectLabel,children:"Select"})]})})},xe=n(42),fe=n.n(xe),me=n(43),_e=n.n(me),ge=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:_e.a.ldsRing,children:[Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{}),Object(C.jsx)("div",{})]})})};function ve(){return Object(C.jsxs)("div",{className:fe.a.container,children:[Object(C.jsx)(_,{}),Object(C.jsx)(x,{}),Object(C.jsx)(Y,{}),Object(C.jsx)(Ce,{}),Object(C.jsx)(ge,{})]})}var Le=n(24),Se=n.n(Le);function Ne(){return Object(C.jsxs)("div",{className:Se.a.container,children:[Object(C.jsx)("h2",{children:"Oops! Page not found."}),Object(C.jsx)("h1",{className:Se.a.number,children:"404"}),Object(C.jsx)("p",{children:"We can't find the page you're looking for"}),Object(C.jsx)(o.b,{className:Se.a.link,to:Me.PROFILE,children:"Go back home"})]})}var we=n(44),Ee=n.n(we);function Te(){var e=Object(r.b)(),t=q((function(e){return e.app.isInitialize})),n=q((function(e){return e.login.isLogged}));return Object(a.useEffect)((function(){t||e((function(e){e(F("loading")),w().then((function(t){e(P(!0)),e(R(!0)),e(F("succeeded")),console.log(t)})).catch((function(t){e(y(t.response.data.error)),e(F("succeeded"))})).finally((function(){e(R(!0))}))}))}),[]),t?t&&!n?Object(C.jsx)(l.a,{to:Me.LOGIN}):Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"Profile"})}):Object(C.jsxs)("div",{className:Ee.a.loader,children:[" ",Object(C.jsx)(ge,{})," "]})}var ye=n(45),Re=n.n(ye),Fe=n(17),De=n.n(Fe);function ke(){return Object(C.jsxs)("svg",{width:"108",height:"108",viewBox:"0 0 108 108",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(C.jsx)("path",{d:"M54 108C83.8234 108 108 83.8234 108 54C108 24.1766 83.8234 0 54 0C24.1766 0 0 24.1766 0 54C0 83.8234 24.1766 108 54 108Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M87.6248 61.2611C87.4338 61.2586 87.2513 61.1816 87.1162 61.0465C86.9811 60.9114 86.9041 60.7289 86.9016 60.5379V50.1429C86.9016 49.9511 86.9778 49.7671 87.1134 49.6315C87.2491 49.4958 87.433 49.4196 87.6248 49.4196C87.8166 49.4196 88.0006 49.4958 88.1362 49.6315C88.2718 49.7671 88.348 49.9511 88.348 50.1429V60.5475C88.3455 60.7376 88.2682 60.9191 88.1329 61.0527C87.9975 61.1862 87.815 61.2611 87.6248 61.2611Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M87.6248 46.9993C87.433 46.9993 87.2491 46.9231 87.1134 46.7875C86.9778 46.6519 86.9016 46.4679 86.9016 46.2761V44.145C86.9016 43.9532 86.9778 43.7693 87.1134 43.6336C87.2491 43.498 87.433 43.4218 87.6248 43.4218C87.8166 43.4218 88.0006 43.498 88.1362 43.6336C88.2718 43.7693 88.348 43.9532 88.348 44.145V46.2857C88.348 46.3803 88.3293 46.4738 88.2928 46.5611C88.2564 46.6483 88.2029 46.7274 88.1356 46.7938C88.0683 46.8601 87.9885 46.9125 87.9009 46.9478C87.8132 46.9831 87.7193 47.0006 87.6248 46.9993Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M29.0094 36.5656H25.0056C24.5912 36.5656 24.2549 36.2293 24.2549 35.8149C24.2549 35.4005 24.5912 35.0642 25.0056 35.0642H29.0094C29.4238 35.0642 29.7601 35.4005 29.7601 35.8149C29.7601 36.2293 29.4238 36.5656 29.0094 36.5656Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M27.0083 38.5677C26.5939 38.5677 26.2576 38.2313 26.2576 37.8169V33.8131C26.2576 33.3987 26.5939 33.0624 27.0083 33.0624C27.4227 33.0624 27.759 33.3987 27.759 33.8131V37.8169C27.759 38.2313 27.4227 38.5677 27.0083 38.5677Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M41.4642 82.9286C41.9965 82.9286 42.4285 83.3606 42.4285 83.8929C42.4285 84.4251 41.9965 84.8571 41.4642 84.8571C40.9319 84.8571 40.4999 84.4251 40.4999 83.8929C40.4999 83.3606 40.9319 82.9286 41.4642 82.9286Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M35.6785 82.9286C36.2108 82.9286 36.6428 83.3606 36.6428 83.8929C36.6428 84.4251 36.2108 84.8571 35.6785 84.8571C35.1463 84.8571 34.7143 84.4251 34.7143 83.8929C34.7143 83.3606 35.1463 82.9286 35.6785 82.9286Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M29.8929 82.9286C30.4252 82.9286 30.8572 83.3606 30.8572 83.8929C30.8572 84.4251 30.4252 84.8571 29.8929 84.8571C29.3606 84.8571 28.9286 84.4251 28.9286 83.8929C28.9286 83.3606 29.3606 82.9286 29.8929 82.9286Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M53.8477 26.1471L26.7356 48.4207L53.8477 70.7047L80.9597 48.4207L53.8477 26.1471Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M53.8477 71.4866C53.6703 71.4716 53.504 71.394 53.3785 71.2676L26.2664 48.9836C26.1778 48.9098 26.1066 48.8173 26.0579 48.7127C26.0092 48.6082 25.9843 48.4941 25.9849 48.3788C25.9864 48.2638 26.0123 48.1504 26.0608 48.0462C26.1093 47.9419 26.1794 47.8492 26.2664 47.774L53.3785 25.5004C53.5219 25.3721 53.7075 25.3012 53.8999 25.3012C54.0923 25.3012 54.2779 25.3721 54.4213 25.5004L81.5333 47.774C81.6204 47.8492 81.6904 47.9419 81.739 48.0462C81.7875 48.1504 81.8134 48.2638 81.8149 48.3788C81.8155 48.4941 81.7905 48.6082 81.7418 48.7127C81.6932 48.8173 81.622 48.9098 81.5333 48.9836L54.4213 71.2676C54.3465 71.3425 54.2568 71.4007 54.1579 71.4384C54.0591 71.4762 53.9534 71.4926 53.8477 71.4866ZM27.9661 48.4205L53.8477 69.693L79.7293 48.4205L53.8477 27.1584L27.9661 48.4205Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M73.1392 32.4036H34.5566V78.2856H73.1392V32.4036Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M62.3362 45.9597L49.1555 56.794V78.2856H73.1393V45.9597H62.3362Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M62.3362 45.9597L49.1555 56.794V78.2856H73.1393V45.9597H62.3362Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M73.1913 79.0675H34.6087C34.4022 79.0648 34.2048 78.9816 34.0587 78.8355C33.9126 78.6894 33.8294 78.492 33.8267 78.2855V32.4035C33.8321 32.1997 33.9169 32.0061 34.063 31.8639C34.2091 31.7217 34.4049 31.6422 34.6087 31.6423H73.1913C73.3987 31.6423 73.5976 31.7247 73.7443 31.8713C73.891 32.018 73.9734 32.2169 73.9734 32.4244V78.3063C73.9654 78.5092 73.8798 78.7014 73.7342 78.843C73.5887 78.9847 73.3944 79.065 73.1913 79.0675ZM35.3387 77.5242H72.3571V33.2064H35.3387V77.5242Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M66.3611 39.4423H54.192C53.9846 39.4423 53.7856 39.3598 53.639 39.2132C53.4923 39.0665 53.4099 38.8676 53.4099 38.6602C53.4099 38.4528 53.4923 38.2538 53.639 38.1072C53.7856 37.9605 53.9846 37.8781 54.192 37.8781H66.3611C66.5686 37.8781 66.7675 37.9605 66.9142 38.1072C67.0608 38.2538 67.1432 38.4528 67.1432 38.6602C67.1432 38.8676 67.0608 39.0665 66.9142 39.2132C66.7675 39.3598 66.5686 39.4423 66.3611 39.4423Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M50.0209 39.4423H41.3346C41.1271 39.4423 40.9282 39.3598 40.7816 39.2132C40.6349 39.0665 40.5525 38.8676 40.5525 38.6602C40.5525 38.4528 40.6349 38.2538 40.7816 38.1072C40.9282 37.9605 41.1271 37.8781 41.3346 37.8781H50.0209C50.2283 37.8781 50.4272 37.9605 50.5739 38.1072C50.7205 38.2538 50.8029 38.4528 50.8029 38.6602C50.8029 38.8676 50.7205 39.0665 50.5739 39.2132C50.4272 39.3598 50.2283 39.4423 50.0209 39.4423Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M66.3607 44.6561H58.3626C58.1552 44.6561 57.9563 44.5737 57.8096 44.427C57.663 44.2804 57.5806 44.0815 57.5806 43.8741C57.5806 43.6666 57.663 43.4677 57.8096 43.321C57.9563 43.1744 58.1552 43.092 58.3626 43.092H66.3607C66.5681 43.092 66.7671 43.1744 66.9137 43.321C67.0604 43.4677 67.1428 43.6666 67.1428 43.8741C67.1428 44.0815 67.0604 44.2804 66.9137 44.427C66.7671 44.5737 66.5681 44.6561 66.3607 44.6561Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M54.1919 44.6561H41.3346C41.1271 44.6561 40.9282 44.5737 40.7816 44.427C40.6349 44.2804 40.5525 44.0815 40.5525 43.8741C40.5525 43.6666 40.6349 43.4677 40.7816 43.321C40.9282 43.1744 41.1271 43.092 41.3346 43.092H54.1919C54.3994 43.092 54.5983 43.1744 54.745 43.321C54.8916 43.4677 54.974 43.6666 54.974 43.8741C54.974 44.0815 54.8916 44.2804 54.745 44.427C54.5983 44.5737 54.3994 44.6561 54.1919 44.6561Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M66.361 49.87H52.1063C51.8989 49.87 51.6999 49.7876 51.5533 49.6409C51.4066 49.4943 51.3242 49.2954 51.3242 49.088C51.3242 48.8805 51.4066 48.6816 51.5533 48.5349C51.6999 48.3883 51.8989 48.3059 52.1063 48.3059H66.361C66.5684 48.3059 66.7673 48.3883 66.914 48.5349C67.0607 48.6816 67.1431 48.8805 67.1431 49.088C67.1431 49.2954 67.0607 49.4943 66.914 49.6409C66.7673 49.7876 66.5684 49.87 66.361 49.87Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M47.9353 49.87H41.3346C41.1271 49.87 40.9282 49.7876 40.7816 49.6409C40.6349 49.4943 40.5525 49.2954 40.5525 49.088C40.5525 48.8805 40.6349 48.6816 40.7816 48.5349C40.9282 48.3883 41.1271 48.3059 41.3346 48.3059H47.9353C48.1427 48.3059 48.3417 48.3883 48.4883 48.5349C48.635 48.6816 48.7174 48.8805 48.7174 49.088C48.7174 49.2954 48.635 49.4943 48.4883 49.6409C48.3417 49.7876 48.1427 49.87 47.9353 49.87Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M66.3609 55.0839H59.4056C59.1982 55.0839 58.9993 55.0015 58.8526 54.8548C58.7059 54.7081 58.6235 54.5092 58.6235 54.3018C58.6235 54.0944 58.7059 53.8955 58.8526 53.7488C58.9993 53.6021 59.1982 53.5197 59.4056 53.5197H66.3609C66.5683 53.5197 66.7673 53.6021 66.9139 53.7488C67.0606 53.8955 67.143 54.0944 67.143 54.3018C67.143 54.5092 67.0606 54.7081 66.9139 54.8548C66.7673 55.0015 66.5683 55.0839 66.3609 55.0839Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M55.2347 55.0839H41.3346C41.1271 55.0839 40.9282 55.0015 40.7816 54.8548C40.6349 54.7081 40.5525 54.5092 40.5525 54.3018C40.5525 54.0944 40.6349 53.8955 40.7816 53.7488C40.9282 53.6021 41.1271 53.5197 41.3346 53.5197H55.2347C55.4421 53.5197 55.6411 53.6021 55.7877 53.7488C55.9344 53.8955 56.0168 54.0944 56.0168 54.3018C56.0168 54.5092 55.9344 54.7081 55.7877 54.8548C55.6411 55.0015 55.4421 55.0839 55.2347 55.0839Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M60.803 60.2978H46.8924C46.685 60.2978 46.4861 60.2153 46.3394 60.0687C46.1927 59.922 46.1104 59.7231 46.1104 59.5157C46.1104 59.3083 46.1927 59.1093 46.3394 58.9627C46.4861 58.816 46.685 58.7336 46.8924 58.7336H60.803C61.0104 58.7336 61.2094 58.816 61.356 58.9627C61.5027 59.1093 61.5851 59.3083 61.5851 59.5157C61.5851 59.7231 61.5027 59.922 61.356 60.0687C61.2094 60.2153 61.0104 60.2978 60.803 60.2978Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M26.7356 48.4205V78.2855L44.9007 63.353L26.7356 48.4205Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M62.7949 63.353L80.96 78.2855V48.4205L62.7949 63.353Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M53.8477 70.7046L44.9007 63.3531L26.7356 78.2856H80.9597L62.7946 63.3531L53.8477 70.7046Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M31.9497 56.8043V73.9996L42.4087 65.4072L31.9497 56.8043Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M31.9497 56.8043V73.9996L42.4087 65.4072L31.9497 56.8043Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M71.0952 65.1153L80.9598 73.228V57.0129L71.0952 65.1153Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M71.0952 65.1153L80.9598 73.228V57.0129L71.0952 65.1153Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M26.7357 79.0676C26.6195 79.066 26.5053 79.0374 26.402 78.9841C26.2685 78.9225 26.1553 78.824 26.0759 78.7002C25.9964 78.5765 25.954 78.4326 25.9536 78.2855V48.4205C25.954 48.2734 25.9964 48.1295 26.0759 48.0057C26.1553 47.882 26.2685 47.7835 26.402 47.7219C26.5356 47.6566 26.685 47.6307 26.8328 47.6474C26.9805 47.664 27.1205 47.7224 27.2362 47.8157L45.4013 62.7482C45.4892 62.8226 45.5598 62.9152 45.6082 63.0197C45.6566 63.1241 45.6817 63.2379 45.6817 63.353C45.6817 63.4681 45.6566 63.5819 45.6082 63.6863C45.5598 63.7908 45.4892 63.8834 45.4013 63.9578L27.2362 78.8799C27.0971 79.0001 26.9196 79.0666 26.7357 79.0676ZM27.5178 50.0785V76.6275L43.6703 63.353L27.5178 50.0785Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M67.9773 67.6074L56.559 76.9923L48.5922 70.4437L39.0613 78.2854H80.9598L67.9773 67.6074Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M67.9773 67.6074L56.559 76.9923L48.5922 70.4437L39.0613 78.2854H80.9598L67.9773 67.6074Z",fill:"#D7D8EF"}),Object(C.jsx)("path",{d:"M80.9601 79.0676C80.7763 79.0667 80.5988 79.0001 80.4596 78.8799L62.2945 63.9682C62.2067 63.8938 62.1361 63.8012 62.0877 63.6968C62.0392 63.5923 62.0142 63.4786 62.0142 63.3634C62.0142 63.2483 62.0392 63.1345 62.0877 63.0301C62.1361 62.9256 62.2067 62.833 62.2945 62.7586L80.4909 47.8157C80.6066 47.7224 80.7466 47.664 80.8944 47.6474C81.0421 47.6307 81.1915 47.6566 81.3251 47.7219C81.4587 47.7835 81.5718 47.882 81.6513 48.0057C81.7307 48.1295 81.7731 48.2734 81.7735 48.4205V78.2855C81.7731 78.4326 81.7307 78.5765 81.6513 78.7003C81.5718 78.824 81.4587 78.9225 81.3251 78.9841C81.2125 79.0423 81.0869 79.071 80.9601 79.0676ZM64.0255 63.353L80.1781 76.6275V50.0785L64.0255 63.353Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M80.9597 79.0676H26.7356C26.5737 79.0668 26.4159 79.0163 26.2836 78.9231C26.1512 78.8299 26.0506 78.6984 25.9952 78.5463C25.9429 78.3947 25.9379 78.2308 25.9807 78.0762C26.0235 77.9217 26.1122 77.7838 26.235 77.6807L44.4001 62.7482C44.5435 62.62 44.7291 62.5491 44.9215 62.5491C45.1139 62.5491 45.2995 62.62 45.4429 62.7482L53.8894 69.6931L62.3358 62.7482C62.4792 62.62 62.6648 62.5491 62.8572 62.5491C63.0496 62.5491 63.2352 62.62 63.3786 62.7482L81.5437 77.6807C81.6665 77.7838 81.7552 77.9217 81.798 78.0762C81.8408 78.2308 81.8358 78.3947 81.7835 78.5463C81.7239 78.7125 81.6105 78.8541 81.4613 78.9486C81.312 79.0431 81.1355 79.085 80.9597 79.0676ZM28.915 77.5243H78.7803L62.7633 64.3646L54.3169 71.3094C54.1735 71.4377 53.9879 71.5086 53.7955 71.5086C53.6031 71.5086 53.4175 71.4377 53.2741 71.3094L44.8277 64.3646L28.915 77.5243Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M52.1525 84.7799H48.1487C47.7343 84.7799 47.3979 84.4436 47.3979 84.0292C47.3979 83.6148 47.7343 83.2785 48.1487 83.2785H52.1525C52.5669 83.2785 52.9032 83.6148 52.9032 84.0292C52.9032 84.4436 52.5669 84.7799 52.1525 84.7799Z",fill:"#21268F"}),Object(C.jsx)("path",{d:"M50.1511 86.782C49.7367 86.782 49.4004 86.4456 49.4004 86.0312V82.0274C49.4004 81.613 49.7367 81.2767 50.1511 81.2767C50.5655 81.2767 50.9018 81.613 50.9018 82.0274V86.0312C50.9018 86.4456 50.5655 86.782 50.1511 86.782Z",fill:"#21268F"})]})}var Ie=Object(a.memo)((function(){var e=Object(l.h)().email;return Object(C.jsx)(ce,{children:Object(C.jsxs)("div",{className:De.a.container,children:[Object(C.jsx)("span",{className:De.a.title,children:"it-cards"}),Object(C.jsx)(ke,{}),Object(C.jsx)("h1",{className:De.a.subTitle,children:"Check Email"}),Object(C.jsxs)("span",{className:De.a.description,children:["We\u2019ve sent an Email with instructions to ",e]})]})})})),Me={LOGIN:"/login",REGISTRATION:"/registration",RESET_PASSWORD:"/recoveryPass",NEW_PASSWORD:"/set-new-password",TEST:"/test",PROFILE:"/FridayProject",CHECK_EMAIL:"/check_email"};function Pe(){return Object(C.jsx)("div",{className:Re.a.container,children:Object(C.jsxs)(l.d,{children:[Object(C.jsx)(l.b,{path:"/",element:Object(C.jsx)(Te,{})}),Object(C.jsx)(l.b,{path:Me.LOGIN,element:Object(C.jsx)(se,{})}),Object(C.jsx)(l.b,{path:Me.REGISTRATION,element:Object(C.jsx)(oe,{})}),Object(C.jsx)(l.b,{path:Me.RESET_PASSWORD,element:Object(C.jsx)(de,{})}),Object(C.jsx)(l.b,{path:Me.NEW_PASSWORD,element:Object(C.jsx)(pe,{}),children:Object(C.jsx)(l.b,{path:":token",element:Object(C.jsx)(pe,{})})}),Object(C.jsx)(l.b,{path:Me.TEST,element:Object(C.jsx)(ve,{})}),Object(C.jsx)(l.b,{path:Me.PROFILE,element:Object(C.jsx)(Te,{})}),Object(C.jsx)(l.b,{path:"*",element:Object(C.jsx)(Ne,{})}),Object(C.jsx)(l.b,{path:Me.CHECK_EMAIL,element:Object(C.jsx)(Ie,{}),children:Object(C.jsx)(l.b,{path:":email",element:Object(C.jsx)(pe,{})})})]})})}var Ze=n(46),He=n.n(Ze);function Ve(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.login.isLogged}));return Object(C.jsx)("div",{children:Object(C.jsx)("div",{className:He.a.header,children:t?Object(C.jsx)("a",{onClick:function(){e((function(e){e(F("loading")),N().then((function(t){e(P(!1)),e(F("succeeded"))}))}))},children:"Logout"}):Object(C.jsx)(o.b,{to:Me.LOGIN,children:"Login"})})})}var Ae=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(o.a,{children:[Object(C.jsx)(Ve,{}),Object(C.jsx)(Pe,{})]})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(r.a,{store:W,children:Object(C.jsx)(Ae,{})})}),document.getElementById("root")),Ge()}],[[78,1,2]]]);
//# sourceMappingURL=main.c0e3c4e9.chunk.js.map