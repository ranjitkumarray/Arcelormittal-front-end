(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OpKh:function(t,o,e){"use strict";e.r(o),e.d(o,"AuthenticationModule",function(){return M});var n=e("ofXK"),a=e("bZ3k"),r=e("tyNb"),i=e("3Pt+"),s=e("pQ0Q"),c=e("fXoL"),l=e("H+bZ"),f=e("Tu6q"),b=e("Wp6s"),m=e("kmnG"),d=e("qFsG"),u=e("NFeN"),p=e("bTqV");function g(t,o){1&t&&(c.Sb(0),c.Ub(1,"div",16),c.Pb(2,"span",17),c.Tb(),c.Rb())}const y=function(){return["../forgot-password"]};let h=(()=>{class t{constructor(t,o,e,n){this.fb=t,this.apimethod=o,this.apiString=e,this.router=n,this.login=i.f,this.hide=!0,this.Users=s,this.emailPattern="^[a-z0-9._%+-]+@['gmail']+.[com]{2,4}$",this.loadingRouteConfig=!1}ngOnInit(){this.login=this.fb.group({username:["",i.r.required],password:["",i.r.required]})}loginSubmit(){"VALID"==this.login.status?(this.loadingRouteConfig=!0,this.apimethod.get_request_Param(this.apiString.userAccess.login,this.login.value).subscribe(t=>{this.loadingRouteConfig=!1,this.apimethod.popupMessage("success","Login Successfuly!!"),localStorage.setItem("arc-userDetails",JSON.stringify(t)),this.router.navigate(["/alloy-scrap/upload/"])},t=>{console.log(t),this.loadingRouteConfig=!1,this.apimethod.popupMessage("error","Invalid Details")})):this.apimethod.popupMessage("error","Fill all required details")}}return t.\u0275fac=function(o){return new(o||t)(c.Ob(i.d),c.Ob(l.a),c.Ob(f.a),c.Ob(r.c))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-login"]],decls:30,vars:6,consts:[[4,"ngIf"],[1,"row","output"],[3,"formGroup","submit"],[1,"container-fluid","logo_outer"],[1,"logo"],["src","../../../assets/images/arcelorMittal_logo.png","alt","logo"],[1,"row"],[1,"col-md-12"],["appearance","outline",1,"full-width","w-100"],["matInput","","type","text","formControlName","username"],["matInput","","formControlName","password",3,"type"],["type","button","matSuffix","",3,"click"],[1,"col-md-12","text-right"],[1,"text-center",3,"routerLink"],[1,"col-md-12","text-center"],["mat-raised-button","","color","primary",1,"mr-10"],[1,"loading-overlay","is-active"],[1,"signal"]],template:function(t,o){1&t&&(c.xc(0,g,3,0,"ng-container",0),c.Ub(1,"div",1),c.Ub(2,"mat-card"),c.Ub(3,"form",2),c.bc("submit",function(){return o.loginSubmit()}),c.Ub(4,"div",3),c.Ub(5,"a",4),c.Pb(6,"img",5),c.Tb(),c.Tb(),c.Ub(7,"div",6),c.Ub(8,"div",7),c.Ub(9,"mat-label"),c.zc(10,"Username/Email ID"),c.Ub(11,"sup"),c.zc(12,"*"),c.Tb(),c.Tb(),c.Ub(13,"mat-form-field",8),c.Pb(14,"input",9),c.Tb(),c.Tb(),c.Ub(15,"div",7),c.Ub(16,"mat-label"),c.zc(17,"Password "),c.Ub(18,"sup"),c.zc(19,"*"),c.Tb(),c.Tb(),c.Ub(20,"mat-form-field",8),c.Pb(21,"input",10),c.Ub(22,"mat-icon",11),c.bc("click",function(){return o.hide=!o.hide}),c.zc(23),c.Tb(),c.Tb(),c.Tb(),c.Ub(24,"div",12),c.Ub(25,"a",13),c.zc(26,"Forgot Password"),c.Tb(),c.Tb(),c.Ub(27,"div",14),c.Ub(28,"button",15),c.zc(29,"Login"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.kc("ngIf",o.loadingRouteConfig),c.Db(3),c.kc("formGroup",o.login),c.Db(18),c.kc("type",o.hide?"password":"text"),c.Db(2),c.Bc(" ",o.hide?"visibility_off":"visibility"," "),c.Db(2),c.kc("routerLink",c.lc(5,y)))},directives:[n.l,b.a,i.s,i.m,i.g,m.e,m.b,d.b,i.c,i.l,i.e,u.a,m.f,r.f,p.a],styles:['@font-face{font-family:black;src:url(Poppins-Black.eacee5bb9c7fee5939ae.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:bold;src:url(Poppins-Bold.404e299be26d78e66794.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:regular;src:url(Poppins-Regular.8081832fc5cfbf634aa6.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:semi-bold;src:url(Poppins-SemiBold.cce5625b56ec678e4202.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:light;src:url(Poppins-Light.f41b63c0bb0963ace821.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:extra-bold;src:url(Poppins-ExtraBold.4ed78cd5d64af4efc3c7.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:italic;src:url(Poppins-Italic.ce3fff31c0f262aca227.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:medium;src:url(Poppins-Medium.9e1bb626874ed49aa343.ttf) format("truetype");font-weight:400;font-style:normal}body[_ngcontent-%COMP%]{font-family:regular;font-size:.875rem}.font_weight_bold[_ngcontent-%COMP%]{font-family:bold}.color_text[_ngcontent-%COMP%]{color:#41464a!important}.warning_bg[_ngcontent-%COMP%]{background-color:#f4dca0}.color_white[_ngcontent-%COMP%]{color:#fff!important}.delete[_ngcontent-%COMP%]{color:#f76e6e}.copy[_ngcontent-%COMP%]{color:#32a6f3}.primary_a[_ngcontent-%COMP%]{color:#1d9de0}.mat-card[_ngcontent-%COMP%]{text-align:center;width:33%;border-radius:3%;margin:8% auto auto}.full-width[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{display:block}mat-label[_ngcontent-%COMP%]{float:left;padding-bottom:8px;font-family:regular}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-bottom:4%}.output[_ngcontent-%COMP%]{background-color:#abc4e4;height:100%}.output[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-family:regular;text-align:right}.output[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{color:red}']}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-authentication"]],decls:1,vars:0,template:function(t,o){1&t&&c.Pb(0,"router-outlet")},directives:[r.h],styles:[""]}),t})();var P=e("f0Cb");const _=function(){return["../reset-password"]},C=function(){return["../login"]},O=[{path:"",component:w,children:[{path:"login",component:h},{path:"forgot-password",component:(()=>{class t{constructor(t,o){this.fb=t,this.apimethod=o,this.ForgotPassword=i.f,this.emailPattern="^[a-z0-9._%+-]+@['gmail']+.[com]{2,4}$"}ngOnInit(){this.ForgotPassword=this.fb.group({email:["",[i.r.required,i.r.email,i.r.pattern(this.emailPattern)]]})}}return t.\u0275fac=function(o){return new(o||t)(c.Ob(i.d),c.Ob(l.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-forgot-password"]],decls:20,vars:5,consts:[[1,"main-div"],[3,"formGroup"],[1,"container-fluid","logo_outer"],[1,"logo"],["src","../../../assets/images/arcelorMittal_logo.png","alt","logo"],[1,"btn"],[1,"col-md-12"],["appearance","outline",1,"full-width"],["matInput","","type","text","formControlName","email"],["mat-raised-button","","color","primary",1,"mr-10",3,"routerLink"],[1,"card-footer","text-right"],[3,"routerLink"]],template:function(t,o){1&t&&(c.Ub(0,"body"),c.Ub(1,"div",0),c.Ub(2,"mat-card"),c.Ub(3,"form",1),c.Ub(4,"div",2),c.Ub(5,"a",3),c.Pb(6,"img",4),c.Tb(),c.Tb(),c.Ub(7,"p",5),c.zc(8," Enter your registered email"),c.Tb(),c.Ub(9,"div",6),c.Ub(10,"mat-form-field",7),c.Pb(11,"mat-label"),c.Pb(12,"input",8),c.Tb(),c.Tb(),c.Ub(13,"div",5),c.Ub(14,"button",9),c.zc(15,"Reset Password "),c.Tb(),c.Tb(),c.Pb(16,"mat-divider"),c.Ub(17,"div",10),c.Ub(18,"a",11),c.zc(19,"back to login"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Db(3),c.kc("formGroup",o.ForgotPassword),c.Db(11),c.kc("routerLink",c.lc(3,_)),c.Db(4),c.kc("routerLink",c.lc(4,C)))},directives:[b.a,i.s,i.m,i.g,m.b,m.e,d.b,i.c,i.l,i.e,p.a,r.d,P.a,r.f],styles:[".mat-card[_ngcontent-%COMP%]{display:block;text-align:center;width:33%;margin:8% auto auto;border-radius:3%}.full-width[_ngcontent-%COMP%]{display:block;width:100%}.btn[_ngcontent-%COMP%]{margin-bottom:3%}.main-div[_ngcontent-%COMP%]{height:100 vh;display:flex;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-bottom:3%}body[_ngcontent-%COMP%]{background-color:#abc4e4}"]}),t})()},{path:"reset-password",component:(()=>{class t{constructor(t){this.fb=t,this.resetPassword=i.f}ngOnInit(){this.resetPassword=this.fb.group({NewPassword:["",[i.r.required]],ConfirmPassword:["",[i.r.required]]})}}return t.\u0275fac=function(o){return new(o||t)(c.Ob(i.d))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-reset-password"]],decls:21,vars:1,consts:[[1,"row"],[3,"formGroup"],[1,"container-fluid","logo_outer"],[1,"logo"],["src","../../../assets/images/arcelorMittal_logo.png","alt","logo"],[1,"col-md-12"],["appearance","outline",1,"full-width","w-100"],["matInput","","type","password","formControlName","NewPassword"],["matInput","","type","password","formControlName","ConfirmPassword"],[1,"col-md-12","text-center"],["mat-raised-button","","color","primary",1,"mr-10"]],template:function(t,o){1&t&&(c.Ub(0,"body"),c.Ub(1,"div",0),c.Ub(2,"mat-card"),c.Ub(3,"form",1),c.Ub(4,"div",2),c.Ub(5,"a",3),c.Pb(6,"img",4),c.Tb(),c.Tb(),c.Ub(7,"div",0),c.Ub(8,"mat-label"),c.zc(9,"Enter New Password:"),c.Tb(),c.Ub(10,"div",5),c.Ub(11,"mat-form-field",6),c.Pb(12,"input",7),c.Tb(),c.Tb(),c.Ub(13,"mat-label"),c.zc(14,"Confirm Password:"),c.Tb(),c.Ub(15,"div",5),c.Ub(16,"mat-form-field",6),c.Pb(17,"input",8),c.Tb(),c.Tb(),c.Ub(18,"div",9),c.Ub(19,"button",10),c.zc(20,"Reset"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Db(3),c.kc("formGroup",o.resetPassword))},directives:[b.a,i.s,i.m,i.g,m.e,m.b,d.b,i.c,i.l,i.e,p.a],styles:['@font-face{font-family:black;src:url(Poppins-Black.eacee5bb9c7fee5939ae.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:bold;src:url(Poppins-Bold.404e299be26d78e66794.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:regular;src:url(Poppins-Regular.8081832fc5cfbf634aa6.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:semi-bold;src:url(Poppins-SemiBold.cce5625b56ec678e4202.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:light;src:url(Poppins-Light.f41b63c0bb0963ace821.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:extra-bold;src:url(Poppins-ExtraBold.4ed78cd5d64af4efc3c7.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:italic;src:url(Poppins-Italic.ce3fff31c0f262aca227.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:medium;src:url(Poppins-Medium.9e1bb626874ed49aa343.ttf) format("truetype");font-weight:400;font-style:normal}body[_ngcontent-%COMP%]{font-family:regular;font-size:.875rem}.font_weight_bold[_ngcontent-%COMP%]{font-family:bold}.color_text[_ngcontent-%COMP%]{color:#41464a!important}.warning_bg[_ngcontent-%COMP%]{background-color:#f4dca0}.color_white[_ngcontent-%COMP%]{color:#fff!important}.delete[_ngcontent-%COMP%]{color:#f76e6e}.copy[_ngcontent-%COMP%]{color:#32a6f3}.primary_a[_ngcontent-%COMP%]{color:#1d9de0}.mat-card[_ngcontent-%COMP%]{text-align:center;margin-left:auto;margin-right:auto;margin-top:8%;width:33%;border-radius:3%}.full-width[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{display:block}mat-label[_ngcontent-%COMP%]{display:inline-block;margin-right:100%;text-align:start!important;font-weight:10%;font-size:medium}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-bottom:6%}body[_ngcontent-%COMP%]{background-color:#abc4e4}']}),t})()}]}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[r.g.forChild(O)],r.g]}),t})();var U=e("xHqg");let M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[n.c,T,a.a,U.c]]}),t})()},pQ0Q:function(t){t.exports=JSON.parse('[{"name":"vinay","email":"vinay@gmail.com","password":"vinay123","phonenumber":9482037989,"address":"yana,kumta","usertype":"Admin","accessstoken":"aba"},{"name":"say","email":"say@gmail.com","password":"say123","phonenumber":6366237989,"address":"sidd,sidd","usertype":"user","accessstoken":"bba"},{"name":"yat","email":"yat@gmail.com","password":"yat123","phonenumber":9876547823,"address":"shi,shii","usertype":"Admin","accessstoken":"bbc"},{"name":"ram","email":"ram@gmail.com","password":"ram123","phonenumber":9876547823,"address":"ray,kashi","usertype":"user","accessstoken":"wqa"},{"name":"Zebracle","email":"nebra@gmail.com","password":"zebra123","phonenumber":9876547823,"address":"ray,kashi","usertype":"user","accessstoken":"wqa"}]')}}]);