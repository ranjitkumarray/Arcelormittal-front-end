(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{VXaw:function(r,e,o){"use strict";o.r(e),o.d(e,"UserManagementModule",function(){return R});var t=o("ofXK"),n=o("tyNb"),i=o("kF05"),s=o("3Pt+"),a=o("fXoL"),l=o("Tu6q"),u=o("H+bZ"),c=o("kmnG"),b=o("qFsG"),m=o("d3UM"),d=o("bTqV"),p=o("FKr1");function f(r,e){1&r&&(a.Sb(0),a.Ub(1,"div",16),a.Pb(2,"span",17),a.Tb(),a.Rb())}const g=function(r,e){return{"breadCrumbBlue addArroww":r,"breadCrumb addArroww":e}};function h(r,e){if(1&r){const r=a.Vb();a.Ub(0,"font",22),a.Ub(1,"a",23),a.bc("click",function(){a.rc(r);const o=e.$implicit;return a.fc(2).redirect(o.link)}),a.zc(2),a.Tb(),a.Tb()}if(2&r){const r=e.$implicit;a.Db(1),a.kc("ngClass",a.nc(2,g,!0===(null==r?null:r.currentPage),!1===(null==r?null:r.currentPage))),a.Db(1),a.Bc(" ",r.locationName," ")}}function U(r,e){if(1&r&&(a.Ub(0,"div",18),a.Ub(1,"div",19),a.Ub(2,"div",20),a.xc(3,h,3,5,"font",21),a.Tb(),a.Tb(),a.Tb()),2&r){const r=a.fc();a.Db(3),a.kc("ngForOf",r.breadCrumblocationsList)}}function v(r,e){if(1&r&&(a.Ub(0,"mat-option",24),a.zc(1),a.Tb()),2&r){const r=e.$implicit;a.kc("value",null==r?null:r.menuid),a.Db(1),a.Bc("",null==r?null:r.menudescription," ")}}function T(r,e){if(1&r&&(a.Ub(0,"mat-option",24),a.zc(1),a.Tb()),2&r){const r=e.$implicit;a.kc("value",r),a.Db(1),a.Bc(" ",null==r?null:r.SubMenuDescription," ")}}let F=(()=>{class r{constructor(r,e,o,t){this.apiString=r,this.apiMethod=e,this.router=o,this._formBuilder=t,this.loadingRouteConfig=!1,this.isLinear=!1,this.groupUserForm=s.f,this.breadCrumblocationsList=[]}ngOnInit(){this.updateBreadCrumb(),this.groupUserForm=this._formBuilder.group({group_code:["GC001",s.r.required],group_description:["",s.r.required],menu:["",s.r.required],sub_menu:["",s.r.required]}),this.getRequiredDetails()}getRequiredDetails(){this.loadingRouteConfig=!0,this.apiMethod.get_request_header(this.apiString.userAccess.group_management_data).subscribe(r=>{console.log(r),this.loadingRouteConfig=!1,this.groupUserForm.patchValue({group_code:null==r?void 0:r.group_id}),this.menuItem=null==r?void 0:r.menu_items},r=>{this.loadingRouteConfig=!1,console.log(r)})}getSubMenu(){if(console.log(this.groupUserForm.value),this.groupUserForm.value.menu.length>0){let r={menu_id:this.groupUserForm.value.menu};this.loadingRouteConfig=!0,this.apiMethod.post_request_header(this.apiString.userAccess.group_management_data,r).subscribe(r=>{console.log(r),this.loadingRouteConfig=!1,this.subMenuList=r.sub_menu_items},r=>{console.log(r),this.loadingRouteConfig=!1})}}submit(){console.log("test"),this.loadingRouteConfig=!0,console.log(this.groupUserForm.value),this.apiMethod.post_request_header(this.apiString.userAccess.group_management_insert,this.groupUserForm.value).subscribe(r=>{console.log(r),this.loadingRouteConfig=!1},r=>{this.loadingRouteConfig=!1,console.log(r)})}updateBreadCrumb(){this.breadCrumblocationsList=[{locationName:"Managment",link:"/user/group-management",currentPage:!1},{locationName:"User Group",link:"/user/group-management",currentPage:!0}],window.scrollTo(0,0),console.log("breadCrumblocationsList",this.breadCrumblocationsList)}redirect(r){console.log(r),null!=r&&""!=r&&this.router.navigateByUrl(r)}}return r.\u0275fac=function(e){return new(e||r)(a.Ob(l.a),a.Ob(u.a),a.Ob(n.c),a.Ob(s.d))},r.\u0275cmp=a.Ib({type:r,selectors:[["app-group-user"]],decls:35,vars:5,consts:[[4,"ngIf"],["class","breadcrumb",4,"ngIf"],[1,"row"],[1,"col-6"],[3,"formGroup"],[1,"row","pd-t-b"],[1,"col-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Group Code","formControlName","group_code","required","","readonly",""],["matInput","","placeholder","Group Description","formControlName","group_description"],[1,"col-12","pd-t-b"],["formControlName","menu","required","","multiple","",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","sub_menu","required","","multiple",""],[1,"text-right"],["color","primary","mat-raised-button","",3,"click"],[1,"loading-overlay","is-active"],[1,"signal"],[1,"breadcrumb"],[1,"row","pd-10","bg-w"],[1,"col-sm-12","col-lg-12","col-md-12","col-xl-12"],["class","addArrow",4,"ngFor","ngForOf"],[1,"addArrow"],["role","button",3,"ngClass","click"],[3,"value"]],template:function(r,e){1&r&&(a.xc(0,f,3,0,"ng-container",0),a.xc(1,U,4,1,"div",1),a.Ub(2,"div",2),a.Ub(3,"div",3),a.Ub(4,"form",4),a.Ub(5,"div",5),a.Ub(6,"div",6),a.Ub(7,"mat-form-field",7),a.Ub(8,"mat-label"),a.zc(9,"Group Code"),a.Tb(),a.Pb(10,"input",8),a.Tb(),a.Tb(),a.Ub(11,"div",6),a.Ub(12,"mat-form-field",7),a.Ub(13,"mat-label"),a.zc(14,"Group Description"),a.Tb(),a.Pb(15,"input",9),a.Tb(),a.Tb(),a.Ub(16,"div",10),a.Ub(17,"mat-label"),a.zc(18,"Group Access"),a.Tb(),a.Tb(),a.Ub(19,"div",6),a.Ub(20,"mat-form-field",7),a.Ub(21,"mat-label"),a.zc(22,"Menu"),a.Tb(),a.Ub(23,"mat-select",11),a.bc("selectionChange",function(){return e.getSubMenu()}),a.xc(24,v,2,2,"mat-option",12),a.Tb(),a.Tb(),a.Tb(),a.Ub(25,"div",6),a.Ub(26,"mat-form-field",7),a.Ub(27,"mat-label"),a.zc(28,"Sub -Menu"),a.Tb(),a.Ub(29,"mat-select",13),a.xc(30,T,2,2,"mat-option",12),a.Tb(),a.Tb(),a.Tb(),a.Ub(31,"div",6),a.Ub(32,"div",14),a.Ub(33,"button",15),a.bc("click",function(){return e.submit()}),a.zc(34," Submit "),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&r&&(a.kc("ngIf",e.loadingRouteConfig),a.Db(1),a.kc("ngIf",e.breadCrumblocationsList),a.Db(3),a.kc("formGroup",e.groupUserForm),a.Db(20),a.kc("ngForOf",e.menuItem),a.Db(6),a.kc("ngForOf",e.subMenuList))},directives:[t.l,s.s,s.m,s.g,c.b,c.e,b.b,s.c,s.l,s.e,s.q,m.a,t.k,d.a,t.j,p.n],styles:[""]}),r})();var C=o("dNgK"),_=o("xHqg"),G=o("NFeN");function k(r,e){1&r&&(a.Sb(0),a.Ub(1,"div",31),a.Pb(2,"span",32),a.Tb(),a.Rb())}const z=function(r,e){return{"breadCrumbBlue addArroww":r,"breadCrumb addArroww":e}};function D(r,e){if(1&r){const r=a.Vb();a.Ub(0,"font",37),a.Ub(1,"a",38),a.bc("click",function(){a.rc(r);const o=e.$implicit;return a.fc(2).redirect(o.link)}),a.zc(2),a.Tb(),a.Tb()}if(2&r){const r=e.$implicit;a.Db(1),a.kc("ngClass",a.nc(2,z,!0===(null==r?null:r.currentPage),!1===(null==r?null:r.currentPage))),a.Db(1),a.Bc(" ",r.locationName," ")}}function w(r,e){if(1&r&&(a.Ub(0,"div",33),a.Ub(1,"div",34),a.Ub(2,"div",35),a.xc(3,D,3,5,"font",36),a.Tb(),a.Tb(),a.Tb()),2&r){const r=a.fc();a.Db(3),a.kc("ngForOf",r.breadCrumblocationsList)}}function x(r,e){1&r&&a.zc(0,"Demographic Details")}function q(r,e){1&r&&(a.Ub(0,"mat-icon",39),a.zc(1," circle_o"),a.Tb())}function y(r,e){1&r&&(a.Ub(0,"mat-icon",39),a.zc(1," circle_o"),a.Tb())}function N(r,e){1&r&&a.zc(0,"Access Details")}function P(r,e){if(1&r&&(a.Ub(0,"mat-option",40),a.zc(1),a.Tb()),2&r){const r=e.$implicit;a.kc("value",r.groupid),a.Db(1),a.Bc(" ",r.group_description,"")}}function L(r,e){1&r&&a.zc(0,"Preview")}const A=[{path:"",component:i.a,children:[{path:"management",component:(()=>{class r{constructor(r,e,o,t,n){this.apiString=r,this.apiMethod=e,this.router=o,this._snackBar=t,this._formBuilder=n,this.isLinear=!1,this.firstFormGroup=s.f,this.secondFormGroup=s.f,this.breadCrumblocationsList=[],this.loadingRouteConfig=!1}ngOnInit(){this.updateBreadCrumb(),this.firstFormGroup=this._formBuilder.group({first_name:["",s.r.required],middle_name:[""],last_name:["",s.r.required],username:["",s.r.required],email:["",[s.r.required,s.r.email,s.r.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],phone_no:["",s.r.required],address:["",s.r.required]}),this.secondFormGroup=this._formBuilder.group({user_group:["",s.r.required]}),this.firstFormGroup.controls.username.setErrors({incorrect:!1}),this.getUserAccess()}getUserAccess(){this.loadingRouteConfig=!0,this.apiMethod.get_request_header(this.apiString.userAccess.user_access).subscribe(r=>{this.loadingRouteConfig=!1,console.log(r),this.accessList=r.data},r=>{this.loadingRouteConfig=!1,console.log(r)})}validationCheck(r){console.log("Coming"),this.loadingRouteConfig=!0,this.apiMethod.get_request_header_Param(this.apiString.userAccess.user_availability_check,{username:this.firstFormGroup.value.username}).subscribe(e=>{console.log(e),this.loadingRouteConfig=!1,"username"===r&&("Exist Username"===e.status?(this.firstFormGroup.controls.username.setErrors({incorrect:!0}),this._snackBar.open("Username Already Existing","",{duration:4e3,panelClass:["error"],horizontalPosition:"end",verticalPosition:"bottom"})):this.firstFormGroup.controls.username.setErrors(null)),"email"===r&&("Exist Email"===e.status?(this.firstFormGroup.controls.email.setErrors({incorrect:!0}),this._snackBar.open("Email Already Existing","",{duration:4e3,panelClass:["error"],horizontalPosition:"end",verticalPosition:"bottom"})):this.firstFormGroup.controls.email.setErrors(null))},r=>{this.loadingRouteConfig=!1,console.log(r)}),console.log("Coming",this.firstFormGroup)}submit(){console.log(this.firstFormGroup.value,this.secondFormGroup.value);let r={username:this.firstFormGroup.value.username,first_name:this.firstFormGroup.value.first_name,middle_name:this.firstFormGroup.value.middle_name,last_name:this.firstFormGroup.value.last_name,email:this.firstFormGroup.value.email,user_group:this.secondFormGroup.value.user_group,phone_no:this.firstFormGroup.value.phone_no,address:this.firstFormGroup.value.address};this.loadingRouteConfig=!0,this.apiMethod.post_request_header(this.apiString.userAccess.add_single_user_management,r).subscribe(r=>{var e;this.loadingRouteConfig=!1,this._snackBar.open("Successfully added User Group","",{duration:4e3,panelClass:["success"],horizontalPosition:"end",verticalPosition:"bottom"}),null===(e=document.getElementById("reset"))||void 0===e||e.click()},r=>{this.loadingRouteConfig=!1,this._snackBar.open("Unable to add the user Group","",{duration:4e3,panelClass:["error"],horizontalPosition:"end",verticalPosition:"bottom"})})}updateBreadCrumb(){this.breadCrumblocationsList=[{locationName:"Managment",link:"/user/group-management",currentPage:!1},{locationName:"User Group",link:"/user/group-management",currentPage:!0}],window.scrollTo(0,0),console.log("breadCrumblocationsList",this.breadCrumblocationsList)}redirect(r){console.log(r),null!=r&&""!=r&&this.router.navigateByUrl(r)}}return r.\u0275fac=function(e){return new(e||r)(a.Ob(l.a),a.Ob(u.a),a.Ob(n.c),a.Ob(C.a),a.Ob(s.d))},r.\u0275cmp=a.Ib({type:r,selectors:[["app-single-user"]],decls:118,vars:20,consts:[[4,"ngIf"],["class","breadcrumb",4,"ngIf"],[1,"row"],[1,"col-6"],["fxLayout","column",3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"row","pd-t-b"],[1,"col-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","First name","formControlName","first_name","required",""],["matInput","","placeholder","Middle Name","formControlName","middle_name"],["matInput","","placeholder","Last name","formControlName","last_name","required",""],["matInput","","placeholder","Username","formControlName","username","required","",3,"keyup.enter"],["matSuffix","","style","color:red",4,"ngIf"],["matInput","","placeholder","Email","formControlName","email","required","",3,"keyup.enter"],["matInput","","placeholder","Phone Number","type","text","formControlName","phone_no","onkeypress","return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57","oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","autocomplete","off","required","",3,"minLength","maxLength"],["matInput","","placeholder","Address","formControlName","address","required",""],[1,"text-right"],["type","button","color","primary","mat-raised-button","","matStepperNext",""],["formControlName","user_group","required",""],[3,"value",4,"ngFor","ngForOf"],["type","button","color","primary","mat-stroked-button","","matStepperPrevious","",1,"mr-10"],[1,"col-6","pd-5"],[1,"s-bold"],[1,"regular"],[1,"col-12","pd-5"],["type","button","color","primary","id","reset","mat-stroked-button","",1,"mr-10",3,"click"],["type","button","color","primary","mat-raised-button","",3,"click"],[1,"loading-overlay","is-active"],[1,"signal"],[1,"breadcrumb"],[1,"row","pd-10","bg-w"],[1,"col-sm-12","col-lg-12","col-md-12","col-xl-12"],["class","addArrow",4,"ngFor","ngForOf"],[1,"addArrow"],["role","button",3,"ngClass","click"],["matSuffix","",2,"color","red"],[3,"value"]],template:function(r,e){if(1&r){const r=a.Vb();a.xc(0,k,3,0,"ng-container",0),a.xc(1,w,4,1,"div",1),a.Ub(2,"div",2),a.Ub(3,"div",3),a.Ub(4,"mat-vertical-stepper",4,5),a.Ub(6,"mat-step",6),a.Ub(7,"form",7),a.xc(8,x,1,0,"ng-template",8),a.Ub(9,"div",9),a.Ub(10,"div",10),a.Ub(11,"mat-form-field",11),a.Ub(12,"mat-label"),a.zc(13,"First Name"),a.Tb(),a.Pb(14,"input",12),a.Tb(),a.Tb(),a.Ub(15,"div",10),a.Ub(16,"mat-form-field",11),a.Ub(17,"mat-label"),a.zc(18,"Middle Name"),a.Tb(),a.Pb(19,"input",13),a.Tb(),a.Tb(),a.Ub(20,"div",10),a.Ub(21,"mat-form-field",11),a.Ub(22,"mat-label"),a.zc(23,"Last name"),a.Tb(),a.Pb(24,"input",14),a.Tb(),a.Tb(),a.Ub(25,"div",10),a.Ub(26,"mat-form-field",11),a.Ub(27,"mat-label"),a.zc(28,"Username"),a.Tb(),a.Ub(29,"input",15),a.bc("keyup.enter",function(){return e.validationCheck("username")}),a.Tb(),a.xc(30,q,2,0,"mat-icon",16),a.Tb(),a.Tb(),a.Ub(31,"div",10),a.Ub(32,"mat-form-field",11),a.Ub(33,"mat-label"),a.zc(34,"Email"),a.Tb(),a.Ub(35,"input",17),a.bc("keyup.enter",function(){return e.validationCheck("email")}),a.Tb(),a.xc(36,y,2,0,"mat-icon",16),a.Tb(),a.Tb(),a.Ub(37,"div",10),a.Ub(38,"mat-form-field",11),a.Ub(39,"mat-label"),a.zc(40,"Phone Number"),a.Tb(),a.Pb(41,"input",18),a.Tb(),a.Tb(),a.Ub(42,"div",10),a.Ub(43,"mat-form-field",11),a.Ub(44,"mat-label"),a.zc(45,"Address"),a.Tb(),a.Pb(46,"input",19),a.Tb(),a.Tb(),a.Ub(47,"div",10),a.Ub(48,"div",20),a.Ub(49,"button",21),a.zc(50," Next "),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(51,"mat-step",6),a.Ub(52,"form",7),a.xc(53,N,1,0,"ng-template",8),a.Ub(54,"div",9),a.Ub(55,"div",10),a.Ub(56,"mat-form-field",11),a.Ub(57,"mat-label"),a.zc(58,"User Group"),a.Tb(),a.Ub(59,"mat-select",22),a.xc(60,P,2,2,"mat-option",23),a.Tb(),a.Tb(),a.Tb(),a.Ub(61,"div",10),a.Ub(62,"div",20),a.Ub(63,"button",24),a.zc(64,"Back"),a.Tb(),a.Ub(65,"button",21),a.zc(66,"Next"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(67,"mat-step"),a.xc(68,L,1,0,"ng-template",8),a.Ub(69,"div",9),a.Ub(70,"div",25),a.Ub(71,"span",26),a.zc(72,"First Name :\xa0"),a.Tb(),a.Ub(73,"span",27),a.zc(74),a.Tb(),a.Tb(),a.Ub(75,"div",25),a.Ub(76,"span",26),a.zc(77," Middle Name :\xa0"),a.Tb(),a.Ub(78,"span",27),a.zc(79),a.Tb(),a.Tb(),a.Ub(80,"div",25),a.Ub(81,"span",26),a.zc(82,"Last Name : \xa0"),a.Tb(),a.Ub(83,"span",27),a.zc(84),a.Tb(),a.Tb(),a.Ub(85,"div",25),a.Ub(86,"span",26),a.zc(87,"Username :\xa0 "),a.Tb(),a.Ub(88,"span",27),a.zc(89),a.Tb(),a.Tb(),a.Ub(90,"div",28),a.Ub(91,"span",26),a.zc(92,"Email : \xa0"),a.Tb(),a.Ub(93,"span",27),a.zc(94),a.Tb(),a.Tb(),a.Ub(95,"div",25),a.Ub(96,"span",26),a.zc(97,"Phone Number :\xa0 "),a.Tb(),a.Ub(98,"span",27),a.zc(99),a.Tb(),a.Tb(),a.Ub(100,"div",25),a.Ub(101,"span",26),a.zc(102,"User Group :\xa0 "),a.Tb(),a.Ub(103,"span",27),a.zc(104),a.Tb(),a.Tb(),a.Ub(105,"div",28),a.Ub(106,"span",26),a.zc(107,"Address : "),a.Tb(),a.Ub(108,"span",27),a.zc(109),a.Tb(),a.Tb(),a.Ub(110,"div",10),a.Ub(111,"div",20),a.Ub(112,"button",24),a.zc(113,"Back"),a.Tb(),a.Ub(114,"button",29),a.bc("click",function(){return a.rc(r),a.pc(5).reset()}),a.zc(115,"Reset"),a.Tb(),a.Ub(116,"button",30),a.bc("click",function(){return e.submit()}),a.zc(117,"Submit"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()}2&r&&(a.kc("ngIf",e.loadingRouteConfig),a.Db(1),a.kc("ngIf",e.breadCrumblocationsList),a.Db(3),a.kc("linear",!0),a.Db(2),a.kc("stepControl",e.firstFormGroup),a.Db(1),a.kc("formGroup",e.firstFormGroup),a.Db(23),a.kc("ngIf",null==e.firstFormGroup||null==e.firstFormGroup.controls.username||null==e.firstFormGroup.controls.username.errors?null:e.firstFormGroup.controls.username.errors.incorrect),a.Db(6),a.kc("ngIf",null==e.firstFormGroup||null==e.firstFormGroup.controls.email||null==e.firstFormGroup.controls.email.errors?null:e.firstFormGroup.controls.email.errors.incorrect),a.Db(5),a.kc("minLength",5)("maxLength",10),a.Db(10),a.kc("stepControl",e.secondFormGroup),a.Db(1),a.kc("formGroup",e.secondFormGroup),a.Db(8),a.kc("ngForOf",e.accessList),a.Db(14),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.first_name),a.Db(5),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.middle_name),a.Db(5),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.last_name),a.Db(5),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.username),a.Db(5),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.email),a.Db(5),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.phone_no),a.Db(5),a.Ac(null==e.secondFormGroup||null==e.secondFormGroup.value?null:e.secondFormGroup.value.user_group),a.Db(5),a.Ac(null==e.firstFormGroup||null==e.firstFormGroup.value?null:e.firstFormGroup.value.address))},directives:[t.l,_.f,_.a,s.s,s.m,s.g,_.b,c.b,c.e,b.b,s.c,s.l,s.e,s.q,d.a,_.d,m.a,t.k,_.e,t.j,G.a,c.f,p.n],styles:[".mat-stepper-vertical[_ngcontent-%COMP%]{margin-top:8px}.pd-5[_ngcontent-%COMP%]{padding:5px}"]}),r})()},{path:"group-management",component:F}]}];let I=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.Mb({type:r}),r.\u0275inj=a.Lb({imports:[[n.g.forChild(A)],n.g]}),r})();var M=o("bZ3k");let R=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.Mb({type:r}),r.\u0275inj=a.Lb({imports:[[t.c,I,M.a]]}),r})()}}]);