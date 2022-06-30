(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "OpKh":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../materials/materials.module */ "bZ3k");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-routing.module */ "ionX");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.component */ "m35V");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "kuBs");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "xTco");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "yMLD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"],
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"],
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"],
        _materials_materials_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"]] }); })();


/***/ }),

/***/ "ionX":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "kuBs");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.component */ "m35V");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "xTco");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "yMLD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '',
        component: _authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
            {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
            },
            {
                path: 'reset-password',
                component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
            }
        ]
    }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵfac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "kuBs":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.json */ "pQ0Q");
var _user_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./user.json */ "pQ0Q", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-collection */ "Tu6q");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function LoginComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["../forgot-password"]; };
class LoginComponent {
    constructor(fb, apimethod, apiString, router, location) {
        this.fb = fb;
        this.apimethod = apimethod;
        this.apiString = apiString;
        this.router = router;
        this.location = location;
        this.login = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
        this.hide = true;
        this.Users = _user_json__WEBPACK_IMPORTED_MODULE_1__;
        this.test = true;
        this.emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
        this.loadingRouteConfig = false;
    }
    ngOnInit() {
        this.login = this.fb.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    loginSubmit() {
        if (this.login.status == "VALID") {
            this.loadingRouteConfig = true;
            console.log(this.login.value);
            this.apimethod.get_request_Param(this.apiString.userAccess.login, this.login.value).subscribe(result => {
                this.loadingRouteConfig = false;
                this.apimethod.popupMessage('success', 'Login Successfuly!!');
                localStorage.setItem('arc-userDetails', JSON.stringify(result));
                console.log(document.referrer);
                if (document.referrer != '') {
                    // setTimeout(() => {
                    //   window.location.reload()
                    // }, 100); 
                    this.router.navigate(['/alloy-scrap/upload']);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    // Logic
                    // if(this.test=true){
                    //   console.log(this.test)
                    //   setTimeout(()=>{
                    //     window.location.reload(),
                    //     this.test=false,
                    //     console.log(this.test)
                    //   }, 100);  
                    //   this.location.back()            
                    // }
                    // this.location.back()
                }
                else {
                    //Logic
                    // if(this.test=true){
                    //   console.log(this.test)
                    //   setTimeout(()=>{
                    //     window.location.reload(),
                    //     this.test=false,
                    //     console.log(this.test)
                    //   }, 100);  
                    //   this.router.navigate(['/alloy-scrap/upload/'])          
                    // }
                    //   
                    this.router.navigate(['/alloy-scrap/upload']);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            }, error => {
                console.log(error);
                this.loadingRouteConfig = false;
                this.apimethod.popupMessage('error', 'Invalid Details');
            });
        }
        else {
            this.apimethod.popupMessage('error', 'Fill all required details');
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__["CitGlobalConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 30, vars: 6, consts: [[4, "ngIf"], [1, "row", "output"], [3, "formGroup", "submit"], [1, "container-fluid", "logo_outer"], [1, "logo"], ["src", "../../../assets/images/arcelorMittal_logo.png", "alt", "logo"], [1, "row"], [1, "col-md-12"], ["appearance", "outline", 1, "full-width", "w-100"], ["matInput", "", "type", "text", "formControlName", "username"], ["matInput", "", "formControlName", "password", 3, "type"], ["type", "button", "matSuffix", "", 3, "click"], [1, "col-md-12", "text-right"], [1, "text-center", 3, "routerLink"], [1, "col-md-12", "text-center"], ["mat-raised-button", "", "color", "primary", 1, "mr-10"], [1, "loading-overlay", "is-active"], [1, "signal"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, LoginComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_3_listener() { return ctx.loginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_22_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingRouteConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: ["@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464a !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.mat-card[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 8%;\n  width: 33%;\n  border-radius: 3%;\n  margin-bottom: auto;\n}\n.full-width[_ngcontent-%COMP%] {\n  display: block;\n}\nmat-label[_ngcontent-%COMP%] {\n  float: left;\n  padding-bottom: 8px;\n  font-family: \"regular\";\n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 4%;\n}\n.output[_ngcontent-%COMP%] {\n  background-color: #abc4e4;\n  height: 100%;\n}\n.output[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"regular\";\n  text-align: right;\n}\n.output[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGZvbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSx3QkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0E7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUE7RUFDSSx5QkFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0E7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0E7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURPQTtFQUNJLG1CQUFBO0FDSko7QUMxQkE7RUFDSSx5QkFBQTtBRDZCSjtBQzNCQTtFQUNJLHlCQUFBO0FEOEJKO0FDNUJBO0VBQ0kseUJBQUE7QUQrQko7QUM3QkE7RUFDSSxjQWRLO0FEOENUO0FDOUJBO0VBQ0ksY0FoQkc7QURpRFA7QUMvQkE7RUFDSSxjQXhDTTtBRDBFVjtBQTlFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7QUFnRkY7QUE3RUE7RUFDRSxjQUFBO0FBZ0ZGO0FBNUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUErRUY7QUE3RUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBZ0ZGO0FBcEVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBdUVGO0FBdEVFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBd0VKO0FBdEVFO0VBQ0UsVUFBQTtBQXdFSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdibGFjayc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsaWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdleHRyYS1ib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG4uZm9udF93ZWlnaHRfYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJsYWNrXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImxpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImV4dHJhLWJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIml0YWxpY1wiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5mb250X3dlaWdodF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xufVxuXG4uY29sb3JfdGV4dCB7XG4gIGNvbG9yOiAjNDE0NjRhICFpbXBvcnRhbnQ7XG59XG5cbi53YXJuaW5nX2JnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZGNhMDtcbn1cblxuLmNvbG9yX3doaXRlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiAjZjc2ZTZlO1xufVxuXG4uY29weSB7XG4gIGNvbG9yOiAjMzJhNmYzO1xufVxuXG4ucHJpbWFyeV9hIHtcbiAgY29sb3I6ICMxZDlkZTA7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDglO1xuICB3aWR0aDogMzMlO1xuICBib3JkZXItcmFkaXVzOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmZ1bGwtd2lkdGgge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubWF0LWxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuXG4ub3V0cHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYzRlNDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm91dHB1dCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm91dHB1dCBzdXAge1xuICBjb2xvcjogcmVkO1xufSIsIkBpbXBvcnQgXCIuL2ZvbnQuc2Nzc1wiO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRwcmltYXJ5Qmc6ICNmM2YzZjM7XHJcbiRiZ1doaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRwcmltYXJ5OiAjMWQ5ZGUwO1xyXG4kcHJpbWFyeVNoYWRlOiAjM2FhY2U5O1xyXG4kaW5wdXRCb3JkZXI6ICNkN2RmZTg7XHJcbiRpbnB1dEJnOiAjZjJmOGZmO1xyXG4kaW5wdXRQbGFjZWhvbGRlcjogIzQxNDY0YTtcclxuJHRhYmxlQm9yZGVyOiAjZGRkZGRkO1xyXG4kdGFibGVIZWFkQmc6ICNlYmYwZjY7XHJcbiR0YWJsZUhlYWRlckJvcmRlcjogI2FiYzRlNDtcclxuJHRhYmxlQm9keUJvcmRlcjogI2UyZTZlOTtcclxuJHRhYmxlSGVhZENvbG9yOiAjNDU0OTRlO1xyXG4kdGFibGVDb2xvcjogIzQxNDY0YTtcclxuJGRlbGV0ZUJ0bjogI2Q5MzQxMTtcclxuJHVwbG9hZEJnOiAjZjZmOWZiO1xyXG4kbWFpbkNvbnRhaW5lckhlYWQ6ICM1NjU3NTg7XHJcbiRpbnZhbGlkOiByZ2IoMjQ4LCA5NSwgOTUpO1xyXG4kcHJpbWFyeU9yYW5nZTogI2Y0N2QzMDtcclxuJHNjcm9sbE9yYW5nZTogI2M4MzYwMDtcclxuJGxhYmVsQ29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJHRhYmxlU2hhZG93OiAjYzBjMGMwO1xyXG4kdGVtcGxhdGVfY29sb3I6ICM3OTc5Nzk7XHJcbiRkZWxldGU6IHJnYigyNDcsIDExMCwgMTEwKTtcclxuJGNvcHk6IHJnYig1MCwgMTY2LCAyNDMpO1xyXG4vLyAkYVRhZzojMDA3YmZmO1xyXG4vLyBkaXJlY3QgY29sb3JcclxuLmNvbG9yX3RleHQge1xyXG4gICAgY29sb3I6ICM0MTQ2NGEgIWltcG9ydGFudDtcclxufVxyXG4ud2FybmluZ19iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRkY2EwO1xyXG59XHJcbi5jb2xvcl93aGl0ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUge1xyXG4gICAgY29sb3I6ICRkZWxldGU7XHJcbn1cclxuLmNvcHkge1xyXG4gICAgY29sb3I6ICRjb3B5O1xyXG59XHJcbi5wcmltYXJ5X2Ege1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcbi8vIGxvZ2luXHJcbiRsb2dpbklucHV0Qm9yZGVyOiAjMDM2MGI4O1xyXG4kbG9naW5JbnB1dFBsYWNlaG9sZGVyOiAjMDQ1MDk3O1xyXG5cclxuLy8gc2lkZWJhclxyXG4kc2lkZUJhckluYWN0aXZlOiAjNmU2ZjcwO1xyXG4kc2lkZWJhclNoYWRvdzogIzAyM2U2ZDI5O1xyXG5cclxuLy8gaGVhZGVyXHJcbiRoZWFkZXJTaGFkb3c6ICMwMDAwMDAyOTtcclxuXHJcbi8vIGRhc2hib2FyZFxyXG4kY2FyZENvdW50OiAjNTc1MzUzO1xyXG4kY2FyZE5hbWU6ICM4ODhmOTQ7XHJcbi8vIGNhcmRzXHJcbiRjb3B5X2NhcmRzOiAjZThiZmJiO1xyXG4kd2FybmluZ19jYXJkczogI2Y0ZGNhMDtcclxuJGNvbmZpcm1lZF9jYXJkczogI2Q0ZTNiYjtcclxuJGJsdWVfY2FyZHM6ICNiYmQ5ZWI7XHJcbiR2aW9sZXRfY2FyZHM6ICNkYWM1ZDU7XHJcblxyXG4vLyBkdW1teSBpbnB1dCBib3JkZXJcclxuJGR1bW15SW5wdXRfYm9yZGVyOiAjOTg5ODk4O1xyXG5cclxuLy8gb3JkZXJfdGFibGVcclxuJGVkaXQ6ICMwODM1OTY7XHJcbiRhcHByb3ZlOiByZ2IoOSwgMTQ2LCA2MSk7XHJcbiRvcmRlcl9jbG9zZTogcmdiKDI0MCwgODIsIDgyKTtcclxuXHJcbi8vbXkgdGFza1xyXG4kbXlUYXNrMTogI2U4YmZiYjtcclxuJG15VGFzazI6ICNmNGRjYTA7XHJcbiRteVRhc2szOiAjZDRlM2JiO1xyXG4kbXlUYXNrNDogI2JiZDllYjtcclxuXHJcbi8vIG15IG9mZmVyc1xyXG4kb2ZmZXJDb3VudDogIzVkNWQ1ZDtcclxuXHJcbi8vIHRhYmxlIGRldGFpbHNcclxuJGY1ZjVmNTogI2Y1ZjVmNTtcclxuJGlucHV0T25lOiAjZjZjM2M0O1xyXG4kaW5wdXRUd286ICNmNmVlYWE7XHJcbiRpbnB1dFRocmVlOiAjYzZmNGJjO1xyXG4keWVsbG93SW5wdXQ6ICNmY2ZiZjA7XHJcbi8vbWluaWJhclxyXG4kbWluaWJhckFjdGl2ZVJvdzogI2IxYjFiMTtcclxuIl19 */"] });


/***/ }),

/***/ "m35V":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthenticationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(); };
AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["app-authentication"]], decls: 1, vars: 0, template: function AuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "pQ0Q":
/*!************************************************!*\
  !*** ./src/app/authentication/login/user.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"vinay\",\"email\":\"vinay@gmail.com\",\"password\":\"vinay123\",\"phonenumber\":9482037989,\"address\":\"yana,kumta\",\"usertype\":\"Admin\",\"accessstoken\":\"aba\"},{\"name\":\"say\",\"email\":\"say@gmail.com\",\"password\":\"say123\",\"phonenumber\":6366237989,\"address\":\"sidd,sidd\",\"usertype\":\"user\",\"accessstoken\":\"bba\"},{\"name\":\"yat\",\"email\":\"yat@gmail.com\",\"password\":\"yat123\",\"phonenumber\":9876547823,\"address\":\"shi,shii\",\"usertype\":\"Admin\",\"accessstoken\":\"bbc\"},{\"name\":\"ram\",\"email\":\"ram@gmail.com\",\"password\":\"ram123\",\"phonenumber\":9876547823,\"address\":\"ray,kashi\",\"usertype\":\"user\",\"accessstoken\":\"wqa\"},{\"name\":\"Zebracle\",\"email\":\"nebra@gmail.com\",\"password\":\"zebra123\",\"phonenumber\":9876547823,\"address\":\"ray,kashi\",\"usertype\":\"user\",\"accessstoken\":\"wqa\"}]");

/***/ }),

/***/ "xTco":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-collection */ "Tu6q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function ForgotPasswordComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["../login"]; };
class ForgotPasswordComponent {
    constructor(fb, apimethod, router, apiString) {
        this.fb = fb;
        this.apimethod = apimethod;
        this.router = router;
        this.apiString = apiString;
        this.ForgotPassword = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
        this.loadingRouteConfig = false;
        this.emailPattern = "^[a-z0-9._%+-]+@['gmail']+\.[com]{2,4}$";
    }
    ngOnInit() {
        this.ForgotPassword = this.fb.group({
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)
                ]]
        });
    }
    reset_password() {
        this.loadingRouteConfig = true;
        this.apimethod.get_request_Param(this.apiString.userAccess.resetemail, this.ForgotPassword.value).subscribe((result) => {
            console.log("success");
            this.loadingRouteConfig = false;
            setTimeout(() => {
            }, 2000);
            this.apimethod.popupMessage('success', 'Email sent for password reset');
            this.router.navigate(['/auth/login/']);
        }, error => {
            this.loadingRouteConfig = false;
            this.apimethod.popupMessage('error', 'Invalid Email');
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__["CitGlobalConstantService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 21, vars: 4, consts: [[4, "ngIf"], [1, "row", "main-div"], [3, "formGroup"], [1, "container-fluid", "logo_outer"], [1, "logo"], ["src", "../../../assets/images/arcelorMittal_logo.png", "alt", "logo"], [1, "col-md-12"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "formControlName", "email"], [1, "btn"], ["mat-raised-button", "", "color", "primary", 1, "mr-10", 3, "click"], [1, "card-footer", "text-right"], [3, "routerLink"], [1, "loading-overlay", "is-active"], [1, "signal"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ForgotPasswordComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Enter your registered email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_16_listener() { return ctx.reset_password(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "back to login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingRouteConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ForgotPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".mat-card[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 8%;\n  width: 33%;\n  margin-bottom: auto;\n  border-radius: 3%;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ABC4E4;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 3%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"regular\";\n  text-align: right;\n}\n\nsup[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUM7RUFDRyxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNDO0VBQ0UsaUJBQUE7QUFFSDs7QUFBQztFQUNHLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREM7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSUg7O0FBRkM7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQztFQUNDLFVBQUE7QUFNRiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgd2lkdGg6MzMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xyXG4gICBcclxuIH1cclxuIC5mdWxsLXdpZHRoe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuIH1cclxuIC5idG57XHJcbiAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gfVxyXG4gLm1haW4tZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUJDNEU0O1xyXG4gfVxyXG4gaW1ne1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luLWxlZnQgOmF1dG87XHJcbiAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiB9XHJcbiBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiBzdXB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4vLyBwe1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG4gIl19 */"] });


/***/ }),

/***/ "yMLD":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-collection */ "Tu6q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










const _c0 = function () { return ["../login"]; };
class ResetPasswordComponent {
    constructor(fb, apimethod, router, apiString, route) {
        this.fb = fb;
        this.apimethod = apimethod;
        this.router = router;
        this.apiString = apiString;
        this.route = route;
        this.resetPassword = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
    }
    ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            console.log("Record", param);
            this.queryParam = param;
        });
        this.resetPassword = this.fb.group({
            'email': this.queryParam.email,
            'user_id': this.queryParam.user_id,
            'NewPassword': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ]],
            'ConfirmPassword': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                ]]
        });
    }
    reset_password() {
        this.apimethod.get_request_Param(this.apiString.userAccess.reset_password, this.resetPassword.value).subscribe((result) => {
            console.log("success");
            this.apimethod.popupMessage('success', 'Password Changed Successfully');
            this.router.navigate(['/auth/login/']);
        }, error => {
            this.apimethod.popupMessage('error', 'Please enter the password correctly');
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__["CitGlobalConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 24, vars: 3, consts: [[1, "row", "output"], [3, "formGroup"], [1, "container-fluid", "logo_outer"], [1, "logo", 3, "routerLink"], ["src", "../../../assets/images/arcelorMittal_logo.png", "alt", "logo"], [1, "row"], [1, "col-md-12"], ["appearance", "outline", 1, "full-width", "w-100"], ["matInput", "", "type", "password", "formControlName", "NewPassword"], ["matInput", "", "type", "password", "formControlName", "ConfirmPassword"], [1, "col-md-12", "text-center"], ["mat-raised-button", "", "color", "primary", 1, "mr-10", 3, "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Enter New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_22_listener() { return ctx.reset_password(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464a !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.mat-card[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 8%;\n  width: 33%;\n  border-radius: 3%;\n  margin-bottom: auto;\n}\n.full-width[_ngcontent-%COMP%] {\n  display: block;\n}\nmat-label[_ngcontent-%COMP%] {\n  float: left;\n  padding-bottom: 8px;\n  font-family: \"regular\";\n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 6%;\n}\n.output[_ngcontent-%COMP%] {\n  background-color: #abc4e4;\n  height: 100%;\n}\n.output[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"regular\";\n  text-align: right;\n}\n.output[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGZvbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSx3QkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FES0E7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hKO0FETUE7RUFDSSx5QkFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0E7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0E7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FDTEo7QURPQTtFQUNJLG1CQUFBO0FDSko7QUMxQkE7RUFDSSx5QkFBQTtBRDZCSjtBQzNCQTtFQUNJLHlCQUFBO0FEOEJKO0FDNUJBO0VBQ0kseUJBQUE7QUQrQko7QUM3QkE7RUFDSSxjQWRLO0FEOENUO0FDOUJBO0VBQ0ksY0FoQkc7QURpRFA7QUMvQkE7RUFDSSxjQXhDTTtBRDBFVjtBQTlFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFpRkY7QUE5RUE7RUFDRSxjQUFBO0FBaUZGO0FBN0VBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFnRkY7QUE5RUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaUZKO0FBL0VBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBa0ZGO0FBakZFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBbUZKO0FBakZFO0VBQ0UsVUFBQTtBQW1GSiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdibGFjayc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsaWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdleHRyYS1ib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG4uZm9udF93ZWlnaHRfYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJsYWNrXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImxpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImV4dHJhLWJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIml0YWxpY1wiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5mb250X3dlaWdodF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xufVxuXG4uY29sb3JfdGV4dCB7XG4gIGNvbG9yOiAjNDE0NjRhICFpbXBvcnRhbnQ7XG59XG5cbi53YXJuaW5nX2JnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZGNhMDtcbn1cblxuLmNvbG9yX3doaXRlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiAjZjc2ZTZlO1xufVxuXG4uY29weSB7XG4gIGNvbG9yOiAjMzJhNmYzO1xufVxuXG4ucHJpbWFyeV9hIHtcbiAgY29sb3I6ICMxZDlkZTA7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDglO1xuICB3aWR0aDogMzMlO1xuICBib3JkZXItcmFkaXVzOiAzJTtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmZ1bGwtd2lkdGgge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubWF0LWxhYmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDYlO1xufVxuXG4ub3V0cHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYzRlNDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm91dHB1dCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm91dHB1dCBzdXAge1xuICBjb2xvcjogcmVkO1xufSIsIkBpbXBvcnQgXCIuL2ZvbnQuc2Nzc1wiO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRwcmltYXJ5Qmc6ICNmM2YzZjM7XHJcbiRiZ1doaXRlOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiRwcmltYXJ5OiAjMWQ5ZGUwO1xyXG4kcHJpbWFyeVNoYWRlOiAjM2FhY2U5O1xyXG4kaW5wdXRCb3JkZXI6ICNkN2RmZTg7XHJcbiRpbnB1dEJnOiAjZjJmOGZmO1xyXG4kaW5wdXRQbGFjZWhvbGRlcjogIzQxNDY0YTtcclxuJHRhYmxlQm9yZGVyOiAjZGRkZGRkO1xyXG4kdGFibGVIZWFkQmc6ICNlYmYwZjY7XHJcbiR0YWJsZUhlYWRlckJvcmRlcjogI2FiYzRlNDtcclxuJHRhYmxlQm9keUJvcmRlcjogI2UyZTZlOTtcclxuJHRhYmxlSGVhZENvbG9yOiAjNDU0OTRlO1xyXG4kdGFibGVDb2xvcjogIzQxNDY0YTtcclxuJGRlbGV0ZUJ0bjogI2Q5MzQxMTtcclxuJHVwbG9hZEJnOiAjZjZmOWZiO1xyXG4kbWFpbkNvbnRhaW5lckhlYWQ6ICM1NjU3NTg7XHJcbiRpbnZhbGlkOiByZ2IoMjQ4LCA5NSwgOTUpO1xyXG4kcHJpbWFyeU9yYW5nZTogI2Y0N2QzMDtcclxuJHNjcm9sbE9yYW5nZTogI2M4MzYwMDtcclxuJGxhYmVsQ29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuJHRhYmxlU2hhZG93OiAjYzBjMGMwO1xyXG4kdGVtcGxhdGVfY29sb3I6ICM3OTc5Nzk7XHJcbiRkZWxldGU6IHJnYigyNDcsIDExMCwgMTEwKTtcclxuJGNvcHk6IHJnYig1MCwgMTY2LCAyNDMpO1xyXG4vLyAkYVRhZzojMDA3YmZmO1xyXG4vLyBkaXJlY3QgY29sb3JcclxuLmNvbG9yX3RleHQge1xyXG4gICAgY29sb3I6ICM0MTQ2NGEgIWltcG9ydGFudDtcclxufVxyXG4ud2FybmluZ19iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRkY2EwO1xyXG59XHJcbi5jb2xvcl93aGl0ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUge1xyXG4gICAgY29sb3I6ICRkZWxldGU7XHJcbn1cclxuLmNvcHkge1xyXG4gICAgY29sb3I6ICRjb3B5O1xyXG59XHJcbi5wcmltYXJ5X2Ege1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcbi8vIGxvZ2luXHJcbiRsb2dpbklucHV0Qm9yZGVyOiAjMDM2MGI4O1xyXG4kbG9naW5JbnB1dFBsYWNlaG9sZGVyOiAjMDQ1MDk3O1xyXG5cclxuLy8gc2lkZWJhclxyXG4kc2lkZUJhckluYWN0aXZlOiAjNmU2ZjcwO1xyXG4kc2lkZWJhclNoYWRvdzogIzAyM2U2ZDI5O1xyXG5cclxuLy8gaGVhZGVyXHJcbiRoZWFkZXJTaGFkb3c6ICMwMDAwMDAyOTtcclxuXHJcbi8vIGRhc2hib2FyZFxyXG4kY2FyZENvdW50OiAjNTc1MzUzO1xyXG4kY2FyZE5hbWU6ICM4ODhmOTQ7XHJcbi8vIGNhcmRzXHJcbiRjb3B5X2NhcmRzOiAjZThiZmJiO1xyXG4kd2FybmluZ19jYXJkczogI2Y0ZGNhMDtcclxuJGNvbmZpcm1lZF9jYXJkczogI2Q0ZTNiYjtcclxuJGJsdWVfY2FyZHM6ICNiYmQ5ZWI7XHJcbiR2aW9sZXRfY2FyZHM6ICNkYWM1ZDU7XHJcblxyXG4vLyBkdW1teSBpbnB1dCBib3JkZXJcclxuJGR1bW15SW5wdXRfYm9yZGVyOiAjOTg5ODk4O1xyXG5cclxuLy8gb3JkZXJfdGFibGVcclxuJGVkaXQ6ICMwODM1OTY7XHJcbiRhcHByb3ZlOiByZ2IoOSwgMTQ2LCA2MSk7XHJcbiRvcmRlcl9jbG9zZTogcmdiKDI0MCwgODIsIDgyKTtcclxuXHJcbi8vbXkgdGFza1xyXG4kbXlUYXNrMTogI2U4YmZiYjtcclxuJG15VGFzazI6ICNmNGRjYTA7XHJcbiRteVRhc2szOiAjZDRlM2JiO1xyXG4kbXlUYXNrNDogI2JiZDllYjtcclxuXHJcbi8vIG15IG9mZmVyc1xyXG4kb2ZmZXJDb3VudDogIzVkNWQ1ZDtcclxuXHJcbi8vIHRhYmxlIGRldGFpbHNcclxuJGY1ZjVmNTogI2Y1ZjVmNTtcclxuJGlucHV0T25lOiAjZjZjM2M0O1xyXG4kaW5wdXRUd286ICNmNmVlYWE7XHJcbiRpbnB1dFRocmVlOiAjYzZmNGJjO1xyXG4keWVsbG93SW5wdXQ6ICNmY2ZiZjA7XHJcbi8vbWluaWJhclxyXG4kbWluaWJhckFjdGl2ZVJvdzogI2IxYjFiMTtcclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map