(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{VXaw:function(r,t,o){"use strict";o.r(t),o.d(t,"UserManagementModule",function(){return P});var e=o("ofXK"),n=o("tyNb"),i=o("kF05"),b=o("3Pt+"),a=o("fXoL"),c=o("Tu6q"),l=o("H+bZ"),u=o("kmnG"),s=o("qFsG"),m=o("d3UM"),d=o("FKr1"),p=o("bTqV");function f(r,t){1&r&&(a.Sb(0),a.Ub(1,"div",18),a.Pb(2,"span",19),a.Tb(),a.Rb())}const g=function(r,t){return{"breadCrumbBlue addArroww":r,"breadCrumb addArroww":t}};function U(r,t){if(1&r){const r=a.Vb();a.Ub(0,"font",24),a.Ub(1,"a",25),a.bc("click",function(){a.rc(r);const o=t.$implicit;return a.fc(2).redirect(o.link)}),a.zc(2),a.Tb(),a.Tb()}if(2&r){const r=t.$implicit;a.Db(1),a.kc("ngClass",a.nc(2,g,!0===(null==r?null:r.currentPage),!1===(null==r?null:r.currentPage))),a.Db(1),a.Bc(" ",r.locationName," ")}}function T(r,t){if(1&r&&(a.Ub(0,"div",20),a.Ub(1,"div",21),a.Ub(2,"div",22),a.xc(3,U,3,5,"font",23),a.Tb(),a.Tb(),a.Tb()),2&r){const r=a.fc();a.Db(3),a.kc("ngForOf",r.breadCrumblocationsList)}}let v=(()=>{class r{constructor(r,t,o,e){this.apiString=r,this.apiMethod=t,this.router=o,this._formBuilder=e,this.loadingRouteConfig=!1,this.isLinear=!1,this.groupUserForm=b.f,this.breadCrumblocationsList=[]}ngOnInit(){this.updateBreadCrumb(),this.groupUserForm=this._formBuilder.group({group_code:["",b.r.required],group_description:["",b.r.required],menu:["",b.r.required],sub_menu:["",b.r.required]})}submit(){console.log(this.groupUserForm.value)}updateBreadCrumb(){this.breadCrumblocationsList=[{locationName:"Managment",link:"/user/group-management",currentPage:!1},{locationName:"User Group",link:"/user/group-management",currentPage:!0}],window.scrollTo(0,0),console.log("breadCrumblocationsList",this.breadCrumblocationsList)}redirect(r){console.log(r),null!=r&&""!=r&&this.router.navigateByUrl(r)}}return r.\u0275fac=function(t){return new(t||r)(a.Ob(c.a),a.Ob(l.a),a.Ob(n.c),a.Ob(b.d))},r.\u0275cmp=a.Ib({type:r,selectors:[["app-group-user"]],decls:45,vars:3,consts:[[4,"ngIf"],["class","breadcrumb",4,"ngIf"],[1,"row"],[1,"col-6"],[3,"formGroup"],[1,"row","pd-t-b"],[1,"col-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Group Code","formControlName","group_code","required","","readonly",""],["matInput","","placeholder","Group Description","formControlName","group_description"],[1,"col-12","pd-t-b"],["formControlName","menu","required","","multiple",""],["value","1"],["value","2"],["value","3"],["formControlName","sub_menu","required","","multiple",""],[1,"text-right"],["type","button","color","primary","mat-raised-button","",3,"Click"],[1,"loading-overlay","is-active"],[1,"signal"],[1,"breadcrumb"],[1,"row","pd-10","bg-w"],[1,"col-sm-12","col-lg-12","col-md-12","col-xl-12"],["class","addArrow",4,"ngFor","ngForOf"],[1,"addArrow"],["role","button",3,"ngClass","click"]],template:function(r,t){1&r&&(a.xc(0,f,3,0,"ng-container",0),a.xc(1,T,4,1,"div",1),a.Ub(2,"div",2),a.Ub(3,"div",3),a.Ub(4,"form",4),a.Ub(5,"div",5),a.Ub(6,"div",6),a.Ub(7,"mat-form-field",7),a.Ub(8,"mat-label"),a.zc(9,"Group Code"),a.Tb(),a.Pb(10,"input",8),a.Tb(),a.Tb(),a.Ub(11,"div",6),a.Ub(12,"mat-form-field",7),a.Ub(13,"mat-label"),a.zc(14,"Group Description"),a.Tb(),a.Pb(15,"input",9),a.Tb(),a.Tb(),a.Ub(16,"div",10),a.Ub(17,"mat-label"),a.zc(18,"Group Access"),a.Tb(),a.Tb(),a.Ub(19,"div",6),a.Ub(20,"mat-form-field",7),a.Ub(21,"mat-label"),a.zc(22,"Menu"),a.Tb(),a.Ub(23,"mat-select",11),a.Ub(24,"mat-option",12),a.zc(25,"Option 1"),a.Tb(),a.Ub(26,"mat-option",13),a.zc(27,"Option 2"),a.Tb(),a.Ub(28,"mat-option",14),a.zc(29,"Option 3"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(30,"div",6),a.Ub(31,"mat-form-field",7),a.Ub(32,"mat-label"),a.zc(33,"Sub -Menu"),a.Tb(),a.Ub(34,"mat-select",15),a.Ub(35,"mat-option",12),a.zc(36,"Option 1"),a.Tb(),a.Ub(37,"mat-option",13),a.zc(38,"Option 2"),a.Tb(),a.Ub(39,"mat-option",14),a.zc(40,"Option 3"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(41,"div",6),a.Ub(42,"div",16),a.Ub(43,"button",17),a.bc("Click",function(){return t.submit()}),a.zc(44," Submit "),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&r&&(a.kc("ngIf",t.loadingRouteConfig),a.Db(1),a.kc("ngIf",t.breadCrumblocationsList),a.Db(3),a.kc("formGroup",t.groupUserForm))},directives:[e.l,b.s,b.m,b.g,u.b,u.e,s.b,b.c,b.l,b.e,b.q,m.a,d.n,p.a,e.k,e.j],styles:[""]}),r})();var h=o("xHqg");function C(r,t){1&r&&(a.Sb(0),a.Ub(1,"div",23),a.Pb(2,"span",24),a.Tb(),a.Rb())}const k=function(r,t){return{"breadCrumbBlue addArroww":r,"breadCrumb addArroww":t}};function w(r,t){if(1&r){const r=a.Vb();a.Ub(0,"font",29),a.Ub(1,"a",30),a.bc("click",function(){a.rc(r);const o=t.$implicit;return a.fc(2).redirect(o.link)}),a.zc(2),a.Tb(),a.Tb()}if(2&r){const r=t.$implicit;a.Db(1),a.kc("ngClass",a.nc(2,k,!0===(null==r?null:r.currentPage),!1===(null==r?null:r.currentPage))),a.Db(1),a.Bc(" ",r.locationName," ")}}function F(r,t){if(1&r&&(a.Ub(0,"div",25),a.Ub(1,"div",26),a.Ub(2,"div",27),a.xc(3,w,3,5,"font",28),a.Tb(),a.Tb(),a.Tb()),2&r){const r=a.fc();a.Db(3),a.kc("ngForOf",r.breadCrumblocationsList)}}function G(r,t){1&r&&a.zc(0,"Demographic Details")}function z(r,t){1&r&&a.zc(0,"Access Details")}function N(r,t){1&r&&a.zc(0,"Preview")}const O=[{path:"",component:i.a,children:[{path:"management",component:(()=>{class r{constructor(r,t,o,e){this.apiString=r,this.apiMethod=t,this.router=o,this._formBuilder=e,this.isLinear=!1,this.firstFormGroup=b.f,this.secondFormGroup=b.f,this.breadCrumblocationsList=[],this.loadingRouteConfig=!1}ngOnInit(){this.updateBreadCrumb(),this.firstFormGroup=this._formBuilder.group({first_name:["",b.r.required],middle_name:[""],last_name:["",b.r.required]}),this.secondFormGroup=this._formBuilder.group({user_group:["",b.r.required]})}updateBreadCrumb(){this.breadCrumblocationsList=[{locationName:"Managment",link:"/user/group-management",currentPage:!1},{locationName:"User Group",link:"/user/group-management",currentPage:!0}],window.scrollTo(0,0),console.log("breadCrumblocationsList",this.breadCrumblocationsList)}redirect(r){console.log(r),null!=r&&""!=r&&this.router.navigateByUrl(r)}}return r.\u0275fac=function(t){return new(t||r)(a.Ob(c.a),a.Ob(l.a),a.Ob(n.c),a.Ob(b.d))},r.\u0275cmp=a.Ib({type:r,selectors:[["app-single-user"]],decls:68,vars:11,consts:[[4,"ngIf"],["class","breadcrumb",4,"ngIf"],[1,"row"],[1,"col-6"],["fxLayout","column",3,"linear"],["stepper",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"row","pd-t-b"],[1,"col-12"],["appearance","outline",1,"w-100"],["matInput","","placeholder","First name","formControlName","first_name","required",""],["matInput","","placeholder","Middle Name","formControlName","middle_name"],["matInput","","placeholder","Last name","formControlName","last_name","required",""],[1,"text-right"],["type","button","color","primary","mat-raised-button","","matStepperNext",""],["formControlName","user_group","required",""],["value","1"],["value","2"],["value","3"],["type","button","color","primary","mat-stroked-button","","matStepperPrevious","",1,"mr-10"],["type","button","color","primary","mat-flat-button","",3,"click"],[1,"loading-overlay","is-active"],[1,"signal"],[1,"breadcrumb"],[1,"row","pd-10","bg-w"],[1,"col-sm-12","col-lg-12","col-md-12","col-xl-12"],["class","addArrow",4,"ngFor","ngForOf"],[1,"addArrow"],["role","button",3,"ngClass","click"]],template:function(r,t){if(1&r){const r=a.Vb();a.xc(0,C,3,0,"ng-container",0),a.xc(1,F,4,1,"div",1),a.Ub(2,"div",2),a.Ub(3,"div",3),a.Ub(4,"mat-vertical-stepper",4,5),a.Ub(6,"mat-step",6),a.Ub(7,"form",7),a.xc(8,G,1,0,"ng-template",8),a.Ub(9,"div",9),a.Ub(10,"div",10),a.Ub(11,"mat-form-field",11),a.Ub(12,"mat-label"),a.zc(13,"First Name"),a.Tb(),a.Pb(14,"input",12),a.Tb(),a.Tb(),a.Ub(15,"div",10),a.Ub(16,"mat-form-field",11),a.Ub(17,"mat-label"),a.zc(18,"Middle Name"),a.Tb(),a.Pb(19,"input",13),a.Tb(),a.Tb(),a.Ub(20,"div",10),a.Ub(21,"mat-form-field",11),a.Ub(22,"mat-label"),a.zc(23,"Last name"),a.Tb(),a.Pb(24,"input",14),a.Tb(),a.Tb(),a.Ub(25,"div",10),a.Ub(26,"div",15),a.Ub(27,"button",16),a.zc(28," Next "),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(29,"mat-step",6),a.Ub(30,"form",7),a.xc(31,z,1,0,"ng-template",8),a.Ub(32,"div",9),a.Ub(33,"div",10),a.Ub(34,"mat-form-field",11),a.Ub(35,"mat-label"),a.zc(36,"User Group"),a.Tb(),a.Ub(37,"mat-select",17),a.Ub(38,"mat-option",18),a.zc(39,"Option 1"),a.Tb(),a.Ub(40,"mat-option",19),a.zc(41,"Option 2"),a.Tb(),a.Ub(42,"mat-option",20),a.zc(43,"Option 3"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(44,"div",10),a.Ub(45,"div",15),a.Ub(46,"button",21),a.zc(47,"Back"),a.Tb(),a.Ub(48,"button",16),a.zc(49,"Next"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Ub(50,"mat-step"),a.xc(51,N,1,0,"ng-template",8),a.Ub(52,"div",9),a.Ub(53,"div",10),a.zc(54),a.Pb(55,"br"),a.zc(56),a.Pb(57,"br"),a.zc(58),a.Pb(59,"br"),a.zc(60),a.Pb(61,"br"),a.Tb(),a.Ub(62,"div",10),a.Ub(63,"div",15),a.Ub(64,"button",21),a.zc(65,"Back"),a.Tb(),a.Ub(66,"button",22),a.bc("click",function(){return a.rc(r),a.pc(5).reset()}),a.zc(67,"Reset"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()}2&r&&(a.kc("ngIf",t.loadingRouteConfig),a.Db(1),a.kc("ngIf",t.breadCrumblocationsList),a.Db(3),a.kc("linear",!0),a.Db(2),a.kc("stepControl",t.firstFormGroup),a.Db(1),a.kc("formGroup",t.firstFormGroup),a.Db(22),a.kc("stepControl",t.secondFormGroup),a.Db(1),a.kc("formGroup",t.secondFormGroup),a.Db(24),a.Bc(" First Name : ",null==t.firstFormGroup||null==t.firstFormGroup.value?null:t.firstFormGroup.value.first_name," "),a.Db(2),a.Bc(" Middle Name : ",null==t.firstFormGroup||null==t.firstFormGroup.value?null:t.firstFormGroup.value.middle_name," "),a.Db(2),a.Bc(" Last Name : ",null==t.firstFormGroup||null==t.firstFormGroup.value?null:t.firstFormGroup.value.last_name,""),a.Db(2),a.Bc(" User Group : ",null==t.secondFormGroup||null==t.secondFormGroup.value?null:t.secondFormGroup.value.user_group,""))},directives:[e.l,h.f,h.a,b.s,b.m,b.g,h.b,u.b,u.e,s.b,b.c,b.l,b.e,b.q,p.a,h.d,m.a,d.n,h.e,e.k,e.j],styles:[".mat-stepper-vertical[_ngcontent-%COMP%]{margin-top:8px}"]}),r})()},{path:"group-management",component:v}]}];let _=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.Mb({type:r}),r.\u0275inj=a.Lb({imports:[[n.f.forChild(O)],n.f]}),r})();var D=o("bZ3k");let P=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.Mb({type:r}),r.\u0275inj=a.Lb({imports:[[e.c,_,D.a]]}),r})()}}]);