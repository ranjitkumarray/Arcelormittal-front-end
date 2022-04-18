(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Documents\GitHub\Arcelormittal-front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "1ivb":
/*!*******************************************************!*\
  !*** ./src/app/common-use/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.isLoggedIn = localStorage.getItem('user') ? true : false;
    }
    ngOnInit() {
        this.UserDetails = localStorage.getItem("arc-userDetails");
        this.f_name = JSON.parse(this.UserDetails).user.user_name[0];
    }
    logOut() {
        this.router.navigate(['/auth/login']);
        localStorage.clear();
        // console.log(this.lgn.Users)
    }
    profile() {
    }
    ngDoCheck() {
        this.isLoggedIn = localStorage.getItem('user') ? true : false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 4, consts: [[1, "custom_header"], [1, "logo_text"], [1, "nav", "navbar-nav", "pr-3"], [1, "d-flex", "align-items-center", "color_white", "text-decoration-none"], [1, "button_text"], ["mat-mini-fab", "", 1, "myFab", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " One integrated Platform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LogOut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.f_name), " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464a !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.custom_header[_ngcontent-%COMP%] {\n  background-color: #f47d30;\n  position: relative;\n  z-index: 999;\n  box-shadow: 0px 1px 2px 0px #00000029;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.custom_header[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n  color: #f47d30;\n  background-color: #ffffff;\n  width: 30px;\n  height: 30px;\n  border-radius: 5000px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n  font-family: \"semi-bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom_header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n.myFab[_ngcontent-%COMP%] {\n  box-shadow: none;\n  font-size: medium;\n  color: black;\n  background-color: white;\n  width: 32px;\n  height: 32px;\n  line-height: 14px;\n}\n.myFab[_ngcontent-%COMP%]  .mat-button-wrapper {\n  line-height: 14px;\n  padding: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"medium\";\n  color: #1d9de0;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  height: 60px;\n  margin-left: 10px;\n  justify-content: center;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 50px;\n  object-fit: contain;\n}\n.logo_text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-family: \"bold\";\n  color: #ffffff;\n  padding: 0 300px;\n  text-transform: uppercase;\n}\n.main_container[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  overflow: auto;\n}\n.button_text[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-variant: small-caps;\n  color: #ffffff;\n  padding-left: 85%;\n  text-transform: uppercase;\n}\n.version[_ngcontent-%COMP%] {\n  color: white;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGZvbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxjb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBO0VBQ0ksbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksc0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksd0JBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksb0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1BO0VBQ0kseUJBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9BO0VBQ0kscUJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE9BO0VBQ0kscUJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRE9BO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FDMUJBO0VBQ0kseUJBQUE7QUQ2Qko7QUMzQkE7RUFDSSx5QkFBQTtBRDhCSjtBQzVCQTtFQUNJLHlCQUFBO0FEK0JKO0FDN0JBO0VBQ0ksY0FkSztBRDhDVDtBQzlCQTtFQUNJLGNBaEJHO0FEaURQO0FDL0JBO0VBQ0ksY0F4Q007QUQwRVY7QUE3RUE7RUFDSSx5QkNpQlk7RURoQlosa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFnRko7QUEvRUk7RUFDSSxjQ1FRO0VEUFIseUJDWkE7RURhQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWlGUjtBQS9FSTtFQUNJLFlBQUE7QUFpRlI7QUE3RUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWdGTDtBQTdFSztFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQStFVDtBQTFFQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNDN0NNO0VEOENOLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBNkVKO0FBNUVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUE4RVI7QUExRUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNDM0VJO0VENEVKLGdCQUFBO0VBQ0EseUJBQUE7QUE2RUo7QUExRUE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUE2RUo7QUEzRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0M5Rkk7RUQrRkosaUJBQUE7RUFDQSx5QkFBQTtBQThFSjtBQTNFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBOEVKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdibGFjayc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsaWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdleHRyYS1ib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG4uZm9udF93ZWlnaHRfYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJsYWNrXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic2VtaS1ib2xkXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImxpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImV4dHJhLWJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIml0YWxpY1wiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLU1lZGl1bS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5mb250X3dlaWdodF9ib2xkIHtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xufVxuXG4uY29sb3JfdGV4dCB7XG4gIGNvbG9yOiAjNDE0NjRhICFpbXBvcnRhbnQ7XG59XG5cbi53YXJuaW5nX2JnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZGNhMDtcbn1cblxuLmNvbG9yX3doaXRlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiAjZjc2ZTZlO1xufVxuXG4uY29weSB7XG4gIGNvbG9yOiAjMzJhNmYzO1xufVxuXG4ucHJpbWFyeV9hIHtcbiAgY29sb3I6ICMxZDlkZTA7XG59XG5cbi5jdXN0b21faGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0N2QzMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IDBweCAjMDAwMDAwMjk7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmN1c3RvbV9oZWFkZXIgLnByb2ZpbGVfaW1nIHtcbiAgY29sb3I6ICNmNDdkMzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwMDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jdXN0b21faGVhZGVyIC5uYXZiYXItbmF2IHtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubXlGYWIge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4ubXlGYWI6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGNvbG9yOiAjMWQ5ZGUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5sb2dvX3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAzMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1haW5fY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uYnV0dG9uX3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiA4NSU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi52ZXJzaW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbn0iLCJAaW1wb3J0IFwiLi9mb250LnNjc3NcIjtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kcHJpbWFyeUJnOiAjZjNmM2YzO1xyXG4kYmdXaGl0ZTogI2ZmZmZmZjtcclxuJGJsYWNrOiAjMDAwMDAwO1xyXG4kcHJpbWFyeTogIzFkOWRlMDtcclxuJHByaW1hcnlTaGFkZTogIzNhYWNlOTtcclxuJGlucHV0Qm9yZGVyOiAjZDdkZmU4O1xyXG4kaW5wdXRCZzogI2YyZjhmZjtcclxuJGlucHV0UGxhY2Vob2xkZXI6ICM0MTQ2NGE7XHJcbiR0YWJsZUJvcmRlcjogI2RkZGRkZDtcclxuJHRhYmxlSGVhZEJnOiAjZWJmMGY2O1xyXG4kdGFibGVIZWFkZXJCb3JkZXI6ICNhYmM0ZTQ7XHJcbiR0YWJsZUJvZHlCb3JkZXI6ICNlMmU2ZTk7XHJcbiR0YWJsZUhlYWRDb2xvcjogIzQ1NDk0ZTtcclxuJHRhYmxlQ29sb3I6ICM0MTQ2NGE7XHJcbiRkZWxldGVCdG46ICNkOTM0MTE7XHJcbiR1cGxvYWRCZzogI2Y2ZjlmYjtcclxuJG1haW5Db250YWluZXJIZWFkOiAjNTY1NzU4O1xyXG4kaW52YWxpZDogcmdiKDI0OCwgOTUsIDk1KTtcclxuJHByaW1hcnlPcmFuZ2U6ICNmNDdkMzA7XHJcbiRzY3JvbGxPcmFuZ2U6ICNjODM2MDA7XHJcbiRsYWJlbENvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiR0YWJsZVNoYWRvdzogI2MwYzBjMDtcclxuJHRlbXBsYXRlX2NvbG9yOiAjNzk3OTc5O1xyXG4kZGVsZXRlOiByZ2IoMjQ3LCAxMTAsIDExMCk7XHJcbiRjb3B5OiByZ2IoNTAsIDE2NiwgMjQzKTtcclxuLy8gJGFUYWc6IzAwN2JmZjtcclxuLy8gZGlyZWN0IGNvbG9yXHJcbi5jb2xvcl90ZXh0IHtcclxuICAgIGNvbG9yOiAjNDE0NjRhICFpbXBvcnRhbnQ7XHJcbn1cclxuLndhcm5pbmdfYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZGNhMDtcclxufVxyXG4uY29sb3Jfd2hpdGUge1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4uZGVsZXRlIHtcclxuICAgIGNvbG9yOiAkZGVsZXRlO1xyXG59XHJcbi5jb3B5IHtcclxuICAgIGNvbG9yOiAkY29weTtcclxufVxyXG4ucHJpbWFyeV9hIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxufVxyXG4vLyBsb2dpblxyXG4kbG9naW5JbnB1dEJvcmRlcjogIzAzNjBiODtcclxuJGxvZ2luSW5wdXRQbGFjZWhvbGRlcjogIzA0NTA5NztcclxuXHJcbi8vIHNpZGViYXJcclxuJHNpZGVCYXJJbmFjdGl2ZTogIzZlNmY3MDtcclxuJHNpZGViYXJTaGFkb3c6ICMwMjNlNmQyOTtcclxuXHJcbi8vIGhlYWRlclxyXG4kaGVhZGVyU2hhZG93OiAjMDAwMDAwMjk7XHJcblxyXG4vLyBkYXNoYm9hcmRcclxuJGNhcmRDb3VudDogIzU3NTM1MztcclxuJGNhcmROYW1lOiAjODg4Zjk0O1xyXG4vLyBjYXJkc1xyXG4kY29weV9jYXJkczogI2U4YmZiYjtcclxuJHdhcm5pbmdfY2FyZHM6ICNmNGRjYTA7XHJcbiRjb25maXJtZWRfY2FyZHM6ICNkNGUzYmI7XHJcbiRibHVlX2NhcmRzOiAjYmJkOWViO1xyXG4kdmlvbGV0X2NhcmRzOiAjZGFjNWQ1O1xyXG5cclxuLy8gZHVtbXkgaW5wdXQgYm9yZGVyXHJcbiRkdW1teUlucHV0X2JvcmRlcjogIzk4OTg5ODtcclxuXHJcbi8vIG9yZGVyX3RhYmxlXHJcbiRlZGl0OiAjMDgzNTk2O1xyXG4kYXBwcm92ZTogcmdiKDksIDE0NiwgNjEpO1xyXG4kb3JkZXJfY2xvc2U6IHJnYigyNDAsIDgyLCA4Mik7XHJcblxyXG4vL215IHRhc2tcclxuJG15VGFzazE6ICNlOGJmYmI7XHJcbiRteVRhc2syOiAjZjRkY2EwO1xyXG4kbXlUYXNrMzogI2Q0ZTNiYjtcclxuJG15VGFzazQ6ICNiYmQ5ZWI7XHJcblxyXG4vLyBteSBvZmZlcnNcclxuJG9mZmVyQ291bnQ6ICM1ZDVkNWQ7XHJcblxyXG4vLyB0YWJsZSBkZXRhaWxzXHJcbiRmNWY1ZjU6ICNmNWY1ZjU7XHJcbiRpbnB1dE9uZTogI2Y2YzNjNDtcclxuJGlucHV0VHdvOiAjZjZlZWFhO1xyXG4kaW5wdXRUaHJlZTogI2M2ZjRiYztcclxuJHllbGxvd0lucHV0OiAjZmNmYmYwO1xyXG4vL21pbmliYXJcclxuJG1pbmliYXJBY3RpdmVSb3c6ICNiMWIxYjE7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // local host domain 
    // domain:"http://127.0.0.1:5000/"
    // dev domain 
    domain: "https://smbpriceapi.dcc-am.com/"
    //prod domain
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





class ApiService {
    constructor(https, _snackBar) {
        this.https = https;
        this._snackBar = _snackBar;
        this.baseURI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain;
        this.selectedIndex = '';
        this.token = '';
        let localData = localStorage.getItem('arc-userDetails');
        if (localData) {
            this.token = JSON.parse(localData).token;
            this.username = JSON.parse(localData).user['user_name'];
        }
    }
    get_request(url) {
        return this.https.get(url);
    }
    get_request_header(url) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-access-token', this.token).set('username', this.username);
        console.log(headers);
        return this.https.get(url, {
            headers: headers
        });
    }
    post_request_header(url, param) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-access-token', this.token).set('username', this.username);
        return this.https.post(url, param, {
            headers: headers
        });
    }
    put_request_header(url, param) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-access-token', this.token);
        return this.https.put(url, param, {
            headers: headers
        });
    }
    patch_request_header(url, param) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-access-token', this.token);
        return this.https.patch(url, param, {
            headers: headers
        });
    }
    get_request_Param(url, param) {
        return this.https.get(url, {
            params: param
        });
    }
    get_request_header_Param(url, param) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-access-token', this.token);
        return this.https.get(url, {
            params: param,
            headers: headers
        });
    }
    delete_request_header_Param(url, param) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('x-access-token', this.token);
        return this.https.delete(url, {
            params: param,
            headers: headers
        });
    }
    popupMessage(statusType, message) {
        if (statusType === 'success') {
            this._snackBar.open(message, "", {
                duration: 4000,
                panelClass: ['success'],
                horizontalPosition: 'end',
                verticalPosition: 'bottom',
            });
        }
        else {
            this._snackBar.open(message, "", {
                duration: 4000,
                panelClass: ['error'],
                horizontalPosition: 'end',
                verticalPosition: 'bottom',
            });
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });


/***/ }),

/***/ "IfuI":
/*!*******************************************************!*\
  !*** ./src/app/common-use/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "QyIu":
/*!**********************************************!*\
  !*** ./src/app/services/authGard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuardService {
    constructor(router) {
        this.router = router;
        this.isLoggedIn = localStorage.getItem('arc-userDetails');
        this.isLogedIn = false;
    }
    canActivate(route, state) {
        this.profileDetails = localStorage.getItem('arc-userDetails');
        if (this.profileDetails != undefined || this.profileDetails != null) {
            return true;
        }
        if (this.profileDetails === undefined || this.profileDetails === null) {
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
    canActivateChild(route, state) {
        this.profileDetails = localStorage.getItem('arc-userDetails');
        if (this.profileDetails != undefined || this.profileDetails != null) {
            return true;
        }
        if (this.profileDetails === undefined || this.profileDetails === null) {
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'arcelormittal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Tu6q":
/*!********************************************!*\
  !*** ./src/app/services/api-collection.ts ***!
  \********************************************/
/*! exports provided: CitGlobalConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitGlobalConstantService", function() { return CitGlobalConstantService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CitGlobalConstantService {
    constructor() {
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain;
        this.alloy_wire_upload = this.baseUrl + "Alloy_wire_upload";
        this.alloy_wire_validate = this.baseUrl + "Alloy_wire_validate";
        this.alloy_billet_upload = this.baseUrl + "Alloy_billet_upload";
        this.alloy_billet_validate = this.baseUrl + "Alloy_billet_validate";
        this.scrap_upload = this.baseUrl + "scrap_upload";
        this.scrap_validate = this.baseUrl + "Alloy_scrap_validate";
        this.alloy_scrap_history = this.baseUrl + "alloy_surcharge_history";
        this.get_history_file_data = this.baseUrl + "getfile_data";
        //base price addition 
        this.smb = {
            list: this.baseUrl + "Base_Price_Data",
            get: this.baseUrl + "get_record_baseprice",
            add: this.baseUrl + "add_record_baseprice",
            delete: this.baseUrl + "delete_record_baseprice",
            upload: this.baseUrl + "Base_Price_Upload",
            validate: this.baseUrl + "Base_Price_validate",
            update: this.baseUrl + "update_record_baseprice",
            download: this.baseUrl + "Base_price_download",
            history: this.baseUrl + "history_Base_Price"
        };
        this.smb_mini_bar = {
            list: this.baseUrl + "data_baseprice_category_minibar",
            get: this.baseUrl + "get_record_baseprice_category_minibar",
            add: this.baseUrl + "add_record_baseprice_category_minibar",
            delete: this.baseUrl + "delete_record_baseprice_category_minibar",
            upload: this.baseUrl + "upload_baseprice_category_minibar",
            validate: this.baseUrl + "validate_baseprice_category_minibar",
            update: this.baseUrl + "update_record_baseprice_category_minibar",
            download: this.baseUrl + "download_baseprice_category_minibar",
            history: this.baseUrl + "history_Base_Price_minibar"
        };
        //certificate 
        this.certificate = {
            list: this.baseUrl + "data_extra_certificate",
            get: this.baseUrl + "get_record_extra_certificate",
            update: this.baseUrl + "update_record_extra_certificate",
            delete: this.baseUrl + "delete__record_extra_certificate",
            upload: this.baseUrl + "upload_extra_certificate",
            validate: this.baseUrl + "validate_extra_certificate",
            add: this.baseUrl + "add_record_extra_certificate",
            download: this.baseUrl + "download_extra_certificate",
            history: this.baseUrl + "history_Extra_Certificate"
        };
        this.certificate_mini_bar = {
            list: this.baseUrl + "data_extra_certificate_minibar",
            get: this.baseUrl + "get_record_extra_certificate_minibar",
            add: this.baseUrl + "add_record_extra_certificate_minibar",
            delete: this.baseUrl + "delete_record_extra_certificate_minibar",
            upload: this.baseUrl + "upload_extra_certificate_minibar",
            validate: this.baseUrl + "validate_extra_certificate_minibar",
            update: this.baseUrl + "update_record_extra_certificate_minibar",
            download: this.baseUrl + "download_extra_certificate_minibar",
            history: this.baseUrl + "history_Extra_Certificate_miniBar"
        };
        //freight_parity 
        this.freight_parity = {
            list: this.baseUrl + "data_freight_parity",
            get: this.baseUrl + "get_record_freight_parity",
            add: this.baseUrl + "add_record_freight_parity",
            delete: this.baseUrl + "delete_record_freight_parity",
            upload: this.baseUrl + "upload_freight_parity",
            validate: this.baseUrl + "validate_freight_parity",
            update: this.baseUrl + "update_record_freight_parity",
            download: this.baseUrl + "download_freight_parity",
            history: this.baseUrl + "history_Extra_Freight_Parity"
        };
        this.freight_parity_mini_bar = {
            list: this.baseUrl + "data_freight_parity_minibar",
            get: this.baseUrl + "get_record_freight_parity_minibar",
            add: this.baseUrl + "add_record_freight_parity_minibar",
            delete: this.baseUrl + "delete_record_freight_parity_minibar",
            upload: this.baseUrl + "upload_freight_parity_minibar",
            validate: this.baseUrl + "validate_freight_parity_minibar",
            update: this.baseUrl + "update_record_freight_parity_minibar",
            download: this.baseUrl + "download_freight_parity_minibar",
            history: this.baseUrl + "history_Extra_Freight_Parity_MiniBar"
        };
        //delivery_mill 
        this.delivery_mill = {
            list: this.baseUrl + "data_delivery_mill",
            get: this.baseUrl + "get_record_delivery_mill",
            add: this.baseUrl + "add_record_delivery_mill",
            delete: this.baseUrl + "delete_record_delivery_mill",
            upload: this.baseUrl + "upload_delivery_mill",
            validate: this.baseUrl + "validate_delivery_mill",
            update: this.baseUrl + "update_record_delivery_mill",
            download: this.baseUrl + "download_delivery_mill",
            history: this.baseUrl + "history_delivering_mill"
        };
        this.delivery_mill_mini_bar = {
            list: this.baseUrl + "data_delivery_mill_minibar",
            get: this.baseUrl + "get_record_delivery_mill_minibar",
            add: this.baseUrl + "add_record_delivery_mill_minibar",
            delete: this.baseUrl + "delete_record_delivery_mill_minibar",
            upload: this.baseUrl + "upload_delivery_mill_minibar",
            validate: this.baseUrl + "validate_delivery_mill_minibar",
            update: this.baseUrl + "update_record_delivery_mill_minibar",
            download: this.baseUrl + "download_delivery_mill_minibar",
            history: this.baseUrl + "history_delivering_mill_MiniBar"
        };
        //grade 
        this.grade = {
            list: this.baseUrl + "data_extra_grade",
            get: this.baseUrl + "get_record_extra_grade",
            add: this.baseUrl + "add_record_extra_grade",
            delete: this.baseUrl + "delete_record_extra_grade",
            upload: this.baseUrl + "upload_extra_grade",
            validate: this.baseUrl + "validate_extra_grade",
            update: this.baseUrl + "update_record_extra_grade",
            download: this.baseUrl + "download_extra_grade",
            history: this.baseUrl + "history_Extra_Grade"
        };
        this.grade_mini_bar = {
            list: this.baseUrl + "data_extra_grade_minibar",
            get: this.baseUrl + "get_record_extra_grade_minibar",
            add: this.baseUrl + "add_record_extra_grade_minibar",
            delete: this.baseUrl + "delete_record_extra_grade_minibar",
            upload: this.baseUrl + "upload_extra_grade_minibar",
            validate: this.baseUrl + "validate_extra_grade_minibar",
            update: this.baseUrl + "update_record_extra_grade_minibar",
            download: this.baseUrl + "download_extra_grade_minibar",
            history: this.baseUrl + "history_Extra_Grade_MiniBar"
        };
        //length_logistic 
        this.length_logistic = {
            list: this.baseUrl + "data_length_logistic",
            get: this.baseUrl + "get_record_length_logistic",
            add: this.baseUrl + "add_record_length_logistic",
            delete: this.baseUrl + "delete_record_length_logistic",
            upload: this.baseUrl + "upload_length_logistic",
            validate: this.baseUrl + "validate_length_logistic",
            update: this.baseUrl + "update_record_length_logistic",
            download: this.baseUrl + "download_length_logistic",
            history: this.baseUrl + "history_Extra_Length_Logistic"
        };
        this.length_logistic_mini_bar = {
            list: this.baseUrl + "data_length_logistic_minibar",
            get: this.baseUrl + "get_record_length_logistic_minibar",
            add: this.baseUrl + "add_record_length_logistic_minibar",
            delete: this.baseUrl + "delete_record_length_logistic_minibar",
            upload: this.baseUrl + "upload_length_logistic_minibar",
            validate: this.baseUrl + "validate_length_logistic_minibar",
            update: this.baseUrl + "update_record_length_logistic_minibar",
            download: this.baseUrl + "download_length_logistic_minibar",
            history: this.baseUrl + "history_Extra_Length_Logistic_MiniBar"
        };
        //length_production 
        this.length_production = {
            list: this.baseUrl + "data_length_production",
            get: this.baseUrl + "get_record_length_production",
            add: this.baseUrl + "add_record_length_production",
            delete: this.baseUrl + "delete_record_length_production",
            upload: this.baseUrl + "upload_length_production",
            validate: this.baseUrl + "validate_length_production",
            update: this.baseUrl + "update_record_length_production",
            download: this.baseUrl + "download_length_production",
            history: this.baseUrl + "history_Extra_Length_Production"
        };
        this.length_production_mini_bar = {
            list: this.baseUrl + "data_length_production_minibar",
            get: this.baseUrl + "get_record_length_production_minibar",
            add: this.baseUrl + "add_record_length_production_minibar",
            delete: this.baseUrl + "delete_record_length_production_minibar",
            upload: this.baseUrl + "upload_length_production_minibar",
            validate: this.baseUrl + "validate_length_production_minibar",
            update: this.baseUrl + "update_record_length_production_minibar",
            download: this.baseUrl + "download_length_production_minibar",
            history: this.baseUrl + "history_Extra_Length_Production_MiniBar"
        };
        //transport_mode 
        this.transport_mode = {
            list: this.baseUrl + "data_transport",
            get: this.baseUrl + "get_record_transport",
            add: this.baseUrl + "add_record_transport",
            delete: this.baseUrl + "delete_record_transport",
            upload: this.baseUrl + "upload_transport",
            validate: this.baseUrl + "validate_transport",
            update: this.baseUrl + "update_record_transport",
            download: this.baseUrl + "download_transport",
            history: this.baseUrl + "history_Extra_Transport_Mode"
        };
        this.transport_mode_mini_bar = {
            list: this.baseUrl + "data_transport_minibar",
            get: this.baseUrl + "get_record_transport_minibar",
            add: this.baseUrl + "add_record_transport_minibar",
            delete: this.baseUrl + "delete_record_transport_minibar",
            upload: this.baseUrl + "upload_transport_minibar",
            validate: this.baseUrl + "validate_transport_minibar",
            update: this.baseUrl + "update_record_transport_minibar",
            download: this.baseUrl + "download_transport_minibar",
            history: this.baseUrl + "history_Extra_Transport_Mode_MiniBar"
        };
        //profile 
        this.profile = {
            list: this.baseUrl + "data_extra_profile",
            get: this.baseUrl + "get_record_extra_profile",
            add: this.baseUrl + "add_record_extra_profile",
            delete: this.baseUrl + "delete_record_extra_profile",
            upload: this.baseUrl + "upload_extra_profile",
            validate: this.baseUrl + "validate_extra_profile",
            update: this.baseUrl + "update_record_extra_profile",
            download: this.baseUrl + "download_extra_profile",
            history: this.baseUrl + "history_Extra_Profile"
        };
        this.profile_mini_bar = {
            list: this.baseUrl + "data_extra_profile_minibar",
            get: this.baseUrl + "get_record_extra_profile_minibar",
            add: this.baseUrl + "add_record_extra_profile_minibar",
            delete: this.baseUrl + "delete_record_extra_profile_minibar",
            upload: this.baseUrl + "upload_extra_profile_minibar",
            validate: this.baseUrl + "validate_extra_profile_minibar",
            update: this.baseUrl + "update_record_extra_profile_minibar",
            download: this.baseUrl + "download_extra_profile_minibar",
            history: this.baseUrl + "history_Extra_Profile_MiniBar"
        };
        //profile_lberia_italy 
        this.profile_lberia_italy = {
            list: this.baseUrl + "data_extra_profile_Iberia",
            get: this.baseUrl + "get_record_extra_profile_Iberia",
            add: this.baseUrl + "add_record_extra_profile_Iberia",
            delete: this.baseUrl + "delete_record_extra_profile_Iberia",
            upload: this.baseUrl + "upload_extra_profile_Iberia",
            validate: this.baseUrl + "validate_extra_profile_Iberia",
            update: this.baseUrl + "update_record_extra_profile_Iberia",
            download: this.baseUrl + "download_extra_profile_Iberia",
            history: this.baseUrl + "history_Extra_Profile_Iberia_And_Italy"
        };
        this.profile_lberia_italy_mini_bar = {
            list: this.baseUrl + "data_extra_profile_Iberia_minibar",
            get: this.baseUrl + "get_record_extra_profile_Iberia_minibar",
            add: this.baseUrl + "add_record_extra_profile_Iberia_minibar",
            delete: this.baseUrl + "delete_record_extra_profile_Iberia_minibar",
            upload: this.baseUrl + "upload_extra_profile_Iberia_minibar",
            validate: this.baseUrl + "validate_extra_profile_Iberia_minibar",
            update: this.baseUrl + "update_record_extra_profile_Iberia_minibar",
            download: this.baseUrl + "download_extra_profile_Iberia_minibar",
            history: this.baseUrl + "history_Extra_Profile_Iberia_And_Italy_MiniBar"
        };
        //incoterm exceptions 
        this.incoterm_exceptions = {
            list: this.baseUrl + "data_baseprice_incoterm",
            get: this.baseUrl + "get_record_baseprice_incoterm",
            add: this.baseUrl + "add_record_baseprice_incoterm",
            delete: this.baseUrl + "delete_record_baseprice_incoterm",
            upload: this.baseUrl + "upload_baseprice_incoterm",
            validate: this.baseUrl + "validate_baseprice_incoterm",
            update: this.baseUrl + "update_record_baseprice_incoterm",
            download: this.baseUrl + "download_baseprice_incoterm",
            history: this.baseUrl + "history_Base_Price_Incoterm_Exceptions"
        };
        this.incoterm_exceptions_mini_bar = {
            list: this.baseUrl + "data_baseprice_incoterm",
            get: this.baseUrl + "get_record_baseprice_incoterm",
            add: this.baseUrl + "add_record_baseprice_incoterm",
            delete: this.baseUrl + "delete_record_baseprice_incoterm",
            upload: this.baseUrl + "upload_baseprice_incoterm",
            validate: this.baseUrl + "validate_baseprice_incoterm",
            update: this.baseUrl + "update_record_baseprice_incoterm",
            download: this.baseUrl + "download_baseprice_incoterm",
        };
        //Mine
        //minton
        this.generic = {
            list: this.baseUrl + "generic_list",
            get: this.baseUrl + "generic_get",
            add: this.baseUrl + "generic_add",
            delete: this.baseUrl + "generic_delete",
            upload: this.baseUrl + "generic_upload",
            validate: this.baseUrl + "generic_validate",
            update: this.baseUrl + "generic_update",
            download: this.baseUrl + "generic_download",
            history: this.baseUrl + "generic_history"
        };
        this.minton = {
            list: this.baseUrl + "data_extra_minton",
            get: this.baseUrl + "get_record_minton",
            add: this.baseUrl + "add_record_extra_minton",
            delete: this.baseUrl + "delete_record_extra_minton",
            upload: this.baseUrl + "upload_extra_minton",
            validate: this.baseUrl + "validate_extra_minton",
            update: this.baseUrl + "update_record_extra_minton",
            download: this.baseUrl + "download_extra_minton",
            history: this.baseUrl + "history_Extra_minton"
        };
        this.minton_mini_bar = {
            list: this.baseUrl + "data_extra_minton_minibar",
            get: this.baseUrl + "get_record_extra_minton_minibar",
            add: this.baseUrl + "add_record_extra_minton_minibar",
            delete: this.baseUrl + "delete_record_extra_minton_minibar",
            upload: this.baseUrl + "upload_extra_minton_minibar",
            validate: this.baseUrl + "validate_extra_minton_minibar",
            update: this.baseUrl + "update_record_extra_minton_minibar",
            download: this.baseUrl + "download_extra_minton_minibar",
            history: this.baseUrl + "history_Extra_minton_MiniBar"
        };
        this.pricecount = {
            list: this.baseUrl + "data_extra_pricecount",
            get: this.baseUrl + "get_record_pricecount",
            add: this.baseUrl + "add_record_extra_pricecount",
            delete: this.baseUrl + "delete_record_extra_pricecount",
            upload: this.baseUrl + "upload_extra_pricecount",
            validate: this.baseUrl + "validate_extra_pricecount",
            update: this.baseUrl + "update_record_extra_pricecount",
            download: this.baseUrl + "download_extra_pricecount",
            history: this.baseUrl + "history_Extra_pricecount"
        };
        this.pricecount_mini_bar = {
            list: this.baseUrl + "data_extra_pricecount_minibar",
            get: this.baseUrl + "get_record_extra_pricecount_minibar",
            add: this.baseUrl + "add_record_extra_pricecount_minibar",
            delete: this.baseUrl + "delete_record_extra_pricecount_minibar",
            upload: this.baseUrl + "upload_extra_pricecount_minibar",
            validate: this.baseUrl + "validate_extra_pricecount_minibar",
            update: this.baseUrl + "update_record_extra_pricecount_minibar",
            download: this.baseUrl + "download_extra_pricecount_minibar",
            history: this.baseUrl + "history_Extra_pricecount_MiniBar"
        };
        this.dis_earlyptm = {
            list: this.baseUrl + "data_dis_earlyptm",
            get: this.baseUrl + "get_record_dis_earlyptm",
            add: this.baseUrl + "add_record_dis_earlyptm",
            delete: this.baseUrl + "delete_record_dis_earlyptm",
            upload: this.baseUrl + "upload_extra_dis_earlyptm",
            validate: this.baseUrl + "validate_dis_earlyptm",
            update: this.baseUrl + "update_record_dis_earlyptm",
            download: this.baseUrl + "download_dis_earlyptm",
            history: this.baseUrl + "history_dis_earlyptm"
        };
        this.dis_earlyptm_mini_bar = {
            list: this.baseUrl + "data_dis_earlyptm_minibar",
            get: this.baseUrl + "get_record_dis_earlyptm_minibar",
            add: this.baseUrl + "add_record_dis_earlyptm_minibar",
            delete: this.baseUrl + "delete_record_dis_earlyptm_minibar",
            upload: this.baseUrl + "upload_dis_earlyptm_minibar",
            validate: this.baseUrl + "validate_dis_earlyptm_minibar",
            update: this.baseUrl + "update_record_dis_earlyptm_minibar",
            download: this.baseUrl + "download_dis_earlyptm_minibar",
            history: this.baseUrl + "history_dis_earlyptm_MiniBar"
        };
        this.registration = {
            usergroupmanagement: this.baseUrl + "",
        };
        this.myTask = {
            offerStatus: this.baseUrl + "taskbar1_data",
            orderStatus: this.baseUrl + "order_status_delay",
            customerVolume: this.baseUrl + "",
            missingInvoicePayment: this.baseUrl + "invoice_payments"
        };
        this.userAccess = {
            login: this.baseUrl + "login",
            resetemail: this.baseUrl + "resetemail",
            reset_password: this.baseUrl + "reset_password",
            group_management_data: this.baseUrl + "group_management_data",
            email_availability_check: this.baseUrl + "existEmail",
            user_availability_check: this.baseUrl + "existUsername",
            add_single_user_management: this.baseUrl + "insert_values",
            user_access: this.baseUrl + "user_access",
            group_management_insert: this.baseUrl + "group_management_insert"
        };
        this.getAprovalRecord = this.baseUrl + "aproval_data";
        this.aproveRecords = this.baseUrl + "aprove_records";
        this.rejectRecords = this.baseUrl + "reject_records";
    }
}
CitGlobalConstantService.ɵfac = function CitGlobalConstantService_Factory(t) { return new (t || CitGlobalConstantService)(); };
CitGlobalConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CitGlobalConstantService, factory: CitGlobalConstantService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _services_api_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/api-collection */ "Tu6q");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _materials_materials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./materials/materials.module */ "bZ3k");
/* harmony import */ var _common_use_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common-use/header/header.component */ "1ivb");
/* harmony import */ var _common_use_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-use/footer/footer.component */ "IfuI");
/* harmony import */ var _common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common-use/sidebar/sidebar.component */ "kF05");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _services_authGard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/authGard.service */ "QyIu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















const APP_CONTAINERS = [
    _common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_api_collection__WEBPACK_IMPORTED_MODULE_5__["CitGlobalConstantService"], { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"], useValue: 'en-GB' }, _services_authGard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuardService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_8__["MaterialsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
        _common_use_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _common_use_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _materials_materials_module__WEBPACK_IMPORTED_MODULE_8__["MaterialsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();


/***/ }),

/***/ "bZ3k":
/*!***********************************************!*\
  !*** ./src/app/materials/materials.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ "fXoL");










































// import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgImageSliderModule } from 'ng-image-slider';



// import {FlexLayoutServerModule} from '@angular/flex-layout/server';
// import { ChartsModule } from 'ng2-charts';
// import { AngularEditorModule } from '@kolkov/angular-editor';
// import {NgxPaginationModule} from 'ngx-pagination'; 
class MaterialsModule {
}
MaterialsModule.ɵfac = function MaterialsModule_Factory(t) { return new (t || MaterialsModule)(); };
MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: MaterialsModule });
MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_43__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_43__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](MaterialsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_43__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_43__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "kF05":
/*!*********************************************************!*\
  !*** ./src/app/common-use/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "1ivb");




function SidebarComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function SidebarComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
const _c0 = function () { return ["active"]; };
function SidebarComponent_span_11_span_1_span_9_span_1_span_12_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item2_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sub_item2_r11.url)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_item2_r11 == null ? null : sub_item2_r11.name, " ");
} }
function SidebarComponent_span_11_span_1_span_9_span_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_span_11_span_1_span_9_span_1_span_12_li_1_Template, 4, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_item1_r6.children);
} }
function SidebarComponent_span_11_span_1_span_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_span_11_span_1_span_9_span_1_span_12_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + sub_item1_r6.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sub_item1_r6.active_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sub_item1_r6.inactive_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sub_item1_r6 == null ? null : sub_item1_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sub_item1_r6.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_item1_r6.children);
} }
function SidebarComponent_span_11_span_1_span_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", sub_item1_r6.url)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_item1_r6.name, " ");
} }
function SidebarComponent_span_11_span_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_span_11_span_1_span_9_span_1_Template, 13, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_span_11_span_1_span_9_span_2_Template, 6, 5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = ctx.$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_item1_r6.children && item_r4.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !sub_item1_r6.children);
} }
function SidebarComponent_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_span_11_span_1_span_9_Template, 3, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + item_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.active_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.inactive_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.children);
} }
function SidebarComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_span_11_span_1_Template, 10, 5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.navbarItem);
} }
// import { NavItems } from './sidebar';
class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.showFiller = false;
        this.collapsed = false;
        this.isOpen = false;
        this.version = '';
        // loadingRouteConfig: boolean = false;
        this.user = 'user';
        this.navbarItem = [];
        this.details = localStorage.getItem(("arc-userDetails"));
        this.userDeatails = JSON.parse(this.details);
        let localData = localStorage.getItem('arc-userDetails');
        this.navbarItem = JSON.parse(localData).sidebar_json;
        console.log(this.navbarItem, "Nav Item");
    }
    ngOnInit() {
        this.version = "1";
        // console.log(this.navbarItem)
    }
    toggleCollapse() {
        this.collapsed = !this.collapsed;
        console.log("toggle");
    }
    openNav() {
        this.isOpen = false;
        console.log("openNav");
    }
    offerClicked() {
        let doc = document.getElementById('offer-link');
        console.log(doc);
        doc.click();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 18, vars: 7, consts: [[1, "sidebar"], [1, "sidebar_toggler", 3, "click"], ["class", "fa fa-bars", 4, "ngIf"], ["class", "fas fa-times", 4, "ngIf"], [1, ""], [1, "container-fluid", "logo_outer"], [1, "logo"], ["src", "../../../assets/images/arcelorMittal_logo.png", "alt", "logo"], [1, "content"], [1, "line"], [1, "nav", "flex-column", "flex-nowrap", "overflow-hidden"], [4, "ngIf"], [1, "main_container_content"], [2, "margin-top", "10px"], [1, "fa", "fa-bars"], [1, "fas", "fa-times"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "sub_menu_con"], ["data-toggle", "collapse", 1, "items", "nav-link", "collapsed", "text-truncate"], ["alt", "icon", 1, "active_img", 3, "src"], ["alt", "icon-inactive", 1, "inactive_img", 3, "src"], [1, "d-none", "d-sm-inline"], ["aria-expanded", "false", 1, "collapse", 3, "id"], [1, "flex-column", "pl-2", "nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sub", "items", 3, "routerLink", "routerLinkActive"], [1, "sub_hyphen"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_i_2_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_i_3_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_span_11_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sidebar_open", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navbarItem.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("main_container_content_toggled", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464a !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 250px;\n  display: inline-block;\n  vertical-align: top;\n  box-shadow: 0px 0px 6px 0px #023e6d29;\n  position: absolute;\n  left: 0;\n  top: 0px;\n  bottom: 0;\n  z-index: 9998;\n  background-color: #ffffff;\n  transition: 0.1s;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar_toggler[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: -40px;\n  border: none;\n  border-radius: 3px;\n  background-color: white;\n  color: #f47d30;\n  padding: 5px 8px;\n  outline: none;\n  box-shadow: none;\n  font-size: 20px;\n  width: 33px;\n  height: 30px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo_outer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"medium\";\n  color: #1d9de0;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 50px;\n  object-fit: contain;\n}\n.sidebar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - 65px);\n  overflow: auto;\n  padding-bottom: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  border-left: 6px solid transparent;\n  padding: 13px 10px;\n  color: #6e6f70;\n  flex: 0 0 100%;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n}\n.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .active_img[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  padding: 7px 5px 7px 5px;\n  margin-left: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .sub_hyphen[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_l2[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 20px;\n  margin-left: 40px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_l2[_ngcontent-%COMP%]   .sub_hyphen[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-color: #1d9de0;\n  color: #1d9de0;\n  transition: border-color 0.5s;\n}\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .active_img[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .inactive_img[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #d7dfe8;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_menu_con[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_menu_con[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.main_container_content[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  float: right;\n  overflow: auto;\n  transition: 0.1s;\n}\n.sidebar_open[_ngcontent-%COMP%] {\n  left: -250px;\n}\n.main_container_content_toggled[_ngcontent-%COMP%] {\n  width: calc(100% - 0px);\n}\n.nav-link[data-toggle].collapsed[_ngcontent-%COMP%]:after {\n  content: \" \u25BE\";\n  float: right;\n}\n.nav-link[data-toggle][_ngcontent-%COMP%]:not(.collapsed):after {\n  content: \" \u25B4\";\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcZm9udC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVKO0FDQ0E7RUFDSSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRENKO0FDRUE7RUFDSSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREFKO0FDR0E7RUFDSSx3QkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRERKO0FDSUE7RUFDSSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREZKO0FDS0E7RUFDSSx5QkFBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREhKO0FDTUE7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREpKO0FDTUE7RUFDSSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREpKO0FDTUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FESko7QUNNQTtFQUNJLG1CQUFBO0FESEo7QUUzQkE7RUFDSSx5QkFBQTtBRjhCSjtBRTVCQTtFQUNJLHlCQUFBO0FGK0JKO0FFN0JBO0VBQ0kseUJBQUE7QUZnQ0o7QUU5QkE7RUFDSSxjQWRLO0FGK0NUO0FFL0JBO0VBQ0ksY0FoQkc7QUZrRFA7QUVoQ0E7RUFDSSxjQXhDTTtBRjJFVjtBQS9FQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJFVE07RUZVTixnQkFBQTtBQWtGSjtBQWpGSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNFRFE7RUZFUixnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW1GUjtBQS9FUTtFQUNJLGNFL0JKO0FGZ0hSO0FBOUVJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0VqQ0U7RUZrQ0YsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBZ0ZSO0FBL0VRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFpRlo7QUE5RUk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWdGUjtBQTlFSTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRVBVO0VGUVYsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFnRlI7QUEvRVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFpRlo7QUEvRVE7RUFDSSxhQUFBO0FBaUZaO0FBOUVJO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQWdGUjtBQS9FUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQWlGWjtBQTlFSTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7QUFnRlI7QUEvRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFpRlo7QUE5RUk7RUFDSSxxQkVwRkU7RUZxRkYsY0VyRkU7RUZzRkYsNkJBQUE7QUFnRlI7QUE5RVk7RUFDSSxxQkFBQTtBQWdGaEI7QUE5RVk7RUFDSSxhQUFBO0FBZ0ZoQjtBQTVFSTtFQUNJLFdBQUE7RUFDQSx5QkVoR007QUY4S2Q7QUE1RUk7RUFDSSxpQkFBQTtBQThFUjtBQTdFUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUErRVo7QUEzRUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTZFSjtBQTNFQTtFQUNJLFlBQUE7QUE4RUo7QUE1RUE7RUFDSSx1QkFBQTtBQStFSjtBQTdFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBZ0ZKO0FBOUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFpRkoiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJibGFja1wiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1CbGFjay50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInNlbWktYm9sZFwiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1TZW1pQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJsaWdodFwiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJleHRyYS1ib2xkXCI7XG4gIHNyYzogdXJsKFwiLi9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJpdGFsaWNcIjtcbiAgc3JjOiB1cmwoXCIuL2ZvbnRzL1BvcHBpbnMtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4vZm9udHMvUG9wcGlucy1NZWRpdW0udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uZm9udF93ZWlnaHRfYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbn1cblxuLmNvbG9yX3RleHQge1xuICBjb2xvcjogIzQxNDY0YSAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZ19iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGRjYTA7XG59XG5cbi5jb2xvcl93aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogI2Y3NmU2ZTtcbn1cblxuLmNvcHkge1xuICBjb2xvcjogIzMyYTZmMztcbn1cblxuLnByaW1hcnlfYSB7XG4gIGNvbG9yOiAjMWQ5ZGUwO1xufVxuXG4uc2lkZWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCAjMDIzZTZkMjk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogMC4xcztcbn1cbi5zaWRlYmFyIC5zaWRlYmFyX3RvZ2dsZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IC00MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjZjQ3ZDMwO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uc2lkZWJhciAubG9nb19vdXRlciAubG9nbyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnNpZGViYXIgLmxvZ28ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICBjb2xvcjogIzFkOWRlMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lkZWJhciAubG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc2lkZWJhciAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zaWRlYmFyIC5pdGVtcyB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgY29sb3I6ICM2ZTZmNzA7XG4gIGZsZXg6IDAgMCAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2lkZWJhciAuaXRlbXMgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zaWRlYmFyIC5pdGVtcyAuYWN0aXZlX2ltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZWJhciAuc3ViIHtcbiAgcGFkZGluZzogN3B4IDVweCA3cHggNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5zaWRlYmFyIC5zdWIgLnN1Yl9oeXBoZW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zaWRlYmFyIC5zdWJfbDIge1xuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4uc2lkZWJhciAuc3ViX2wyIC5zdWJfaHlwaGVuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2lkZWJhciAuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWQ5ZGUwO1xuICBjb2xvcjogIzFkOWRlMDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXM7XG59XG4uc2lkZWJhciAuYWN0aXZlIC5pbWcgLmFjdGl2ZV9pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc2lkZWJhciAuYWN0aXZlIC5pbWcgLmluYWN0aXZlX2ltZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZWJhciAubGluZSB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkZmU4O1xufVxuLnNpZGViYXIgLnN1Yl9tZW51X2NvbiB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLnNpZGViYXIgLnN1Yl9tZW51X2NvbiAuaXRlbXMge1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4ubWFpbl9jb250YWluZXJfY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG4uc2lkZWJhcl9vcGVuIHtcbiAgbGVmdDogLTI1MHB4O1xufVxuXG4ubWFpbl9jb250YWluZXJfY29udGVudF90b2dnbGVkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG59XG5cbi5uYXYtbGlua1tkYXRhLXRvZ2dsZV0uY29sbGFwc2VkOmFmdGVyIHtcbiAgY29udGVudDogXCIg4pa+XCI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5hdi1saW5rW2RhdGEtdG9nZ2xlXTpub3QoLmNvbGxhcHNlZCk6YWZ0ZXIge1xuICBjb250ZW50OiBcIiDilrRcIjtcbiAgZmxvYXQ6IHJpZ2h0O1xufSIsIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdibGFjayc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsaWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdleHRyYS1ib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG4uZm9udF93ZWlnaHRfYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59IiwiQGltcG9ydCBcIi4vZm9udC5zY3NzXCI7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJHByaW1hcnlCZzogI2YzZjNmMztcclxuJGJnV2hpdGU6ICNmZmZmZmY7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHByaW1hcnk6ICMxZDlkZTA7XHJcbiRwcmltYXJ5U2hhZGU6ICMzYWFjZTk7XHJcbiRpbnB1dEJvcmRlcjogI2Q3ZGZlODtcclxuJGlucHV0Qmc6ICNmMmY4ZmY7XHJcbiRpbnB1dFBsYWNlaG9sZGVyOiAjNDE0NjRhO1xyXG4kdGFibGVCb3JkZXI6ICNkZGRkZGQ7XHJcbiR0YWJsZUhlYWRCZzogI2ViZjBmNjtcclxuJHRhYmxlSGVhZGVyQm9yZGVyOiAjYWJjNGU0O1xyXG4kdGFibGVCb2R5Qm9yZGVyOiAjZTJlNmU5O1xyXG4kdGFibGVIZWFkQ29sb3I6ICM0NTQ5NGU7XHJcbiR0YWJsZUNvbG9yOiAjNDE0NjRhO1xyXG4kZGVsZXRlQnRuOiAjZDkzNDExO1xyXG4kdXBsb2FkQmc6ICNmNmY5ZmI7XHJcbiRtYWluQ29udGFpbmVySGVhZDogIzU2NTc1ODtcclxuJGludmFsaWQ6IHJnYigyNDgsIDk1LCA5NSk7XHJcbiRwcmltYXJ5T3JhbmdlOiAjZjQ3ZDMwO1xyXG4kc2Nyb2xsT3JhbmdlOiAjYzgzNjAwO1xyXG4kbGFiZWxDb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGFibGVTaGFkb3c6ICNjMGMwYzA7XHJcbiR0ZW1wbGF0ZV9jb2xvcjogIzc5Nzk3OTtcclxuJGRlbGV0ZTogcmdiKDI0NywgMTEwLCAxMTApO1xyXG4kY29weTogcmdiKDUwLCAxNjYsIDI0Myk7XHJcbi8vICRhVGFnOiMwMDdiZmY7XHJcbi8vIGRpcmVjdCBjb2xvclxyXG4uY29sb3JfdGV4dCB7XHJcbiAgICBjb2xvcjogIzQxNDY0YSAhaW1wb3J0YW50O1xyXG59XHJcbi53YXJuaW5nX2JnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGRjYTA7XHJcbn1cclxuLmNvbG9yX3doaXRlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogJGRlbGV0ZTtcclxufVxyXG4uY29weSB7XHJcbiAgICBjb2xvcjogJGNvcHk7XHJcbn1cclxuLnByaW1hcnlfYSB7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbn1cclxuLy8gbG9naW5cclxuJGxvZ2luSW5wdXRCb3JkZXI6ICMwMzYwYjg7XHJcbiRsb2dpbklucHV0UGxhY2Vob2xkZXI6ICMwNDUwOTc7XHJcblxyXG4vLyBzaWRlYmFyXHJcbiRzaWRlQmFySW5hY3RpdmU6ICM2ZTZmNzA7XHJcbiRzaWRlYmFyU2hhZG93OiAjMDIzZTZkMjk7XHJcblxyXG4vLyBoZWFkZXJcclxuJGhlYWRlclNoYWRvdzogIzAwMDAwMDI5O1xyXG5cclxuLy8gZGFzaGJvYXJkXHJcbiRjYXJkQ291bnQ6ICM1NzUzNTM7XHJcbiRjYXJkTmFtZTogIzg4OGY5NDtcclxuLy8gY2FyZHNcclxuJGNvcHlfY2FyZHM6ICNlOGJmYmI7XHJcbiR3YXJuaW5nX2NhcmRzOiAjZjRkY2EwO1xyXG4kY29uZmlybWVkX2NhcmRzOiAjZDRlM2JiO1xyXG4kYmx1ZV9jYXJkczogI2JiZDllYjtcclxuJHZpb2xldF9jYXJkczogI2RhYzVkNTtcclxuXHJcbi8vIGR1bW15IGlucHV0IGJvcmRlclxyXG4kZHVtbXlJbnB1dF9ib3JkZXI6ICM5ODk4OTg7XHJcblxyXG4vLyBvcmRlcl90YWJsZVxyXG4kZWRpdDogIzA4MzU5NjtcclxuJGFwcHJvdmU6IHJnYig5LCAxNDYsIDYxKTtcclxuJG9yZGVyX2Nsb3NlOiByZ2IoMjQwLCA4MiwgODIpO1xyXG5cclxuLy9teSB0YXNrXHJcbiRteVRhc2sxOiAjZThiZmJiO1xyXG4kbXlUYXNrMjogI2Y0ZGNhMDtcclxuJG15VGFzazM6ICNkNGUzYmI7XHJcbiRteVRhc2s0OiAjYmJkOWViO1xyXG5cclxuLy8gbXkgb2ZmZXJzXHJcbiRvZmZlckNvdW50OiAjNWQ1ZDVkO1xyXG5cclxuLy8gdGFibGUgZGV0YWlsc1xyXG4kZjVmNWY1OiAjZjVmNWY1O1xyXG4kaW5wdXRPbmU6ICNmNmMzYzQ7XHJcbiRpbnB1dFR3bzogI2Y2ZWVhYTtcclxuJGlucHV0VGhyZWU6ICNjNmY0YmM7XHJcbiR5ZWxsb3dJbnB1dDogI2ZjZmJmMDtcclxuLy9taW5pYmFyXHJcbiRtaW5pYmFyQWN0aXZlUm93OiAjYjFiMWIxO1xyXG4iXX0= */"] });


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-use/sidebar/sidebar.component */ "kF05");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: "full"
    },
    { path: 'alloy-scrap', loadChildren: () => Promise.all(/*! import() | views-alloy-scrap-alloy-scrap-module */[__webpack_require__.e("default~views-alloy-scrap-alloy-scrap-module~views-smb-smb-module"), __webpack_require__.e("views-alloy-scrap-alloy-scrap-module")]).then(__webpack_require__.bind(null, /*! ./views/alloy-scrap/alloy-scrap.module */ "ghUo")).then(m => m.AlloyScrapModule) },
    { path: 'smb', loadChildren: () => Promise.all(/*! import() | views-smb-smb-module */[__webpack_require__.e("default~views-alloy-scrap-alloy-scrap-module~views-smb-smb-module"), __webpack_require__.e("views-smb-smb-module")]).then(__webpack_require__.bind(null, /*! ./views/smb/smb.module */ "CI15")).then(m => m.SmbModule) },
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | authentication-authentication-module */ "authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule) },
    { path: 'management', loadChildren: () => __webpack_require__.e(/*! import() | views-my-management-my-management-module */ "views-my-management-my-management-module").then(__webpack_require__.bind(null, /*! ./views/my-management/my-management.module */ "F6Jo")).then(m => m.MyManagementModule) },
    { path: 'user', loadChildren: () => __webpack_require__.e(/*! import() | views-user-management-user-management-module */ "views-user-management-user-management-module").then(__webpack_require__.bind(null, /*! ./views/user-management/user-management.module */ "VXaw")).then(m => m.UserManagementModule) },
    {
        path: '**',
        component: _common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"],
        children: [{
                path: '',
                component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
            }]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
                scrollOffset: [0, 64],
                initialNavigation: 'enabled',
                useHash: false
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map