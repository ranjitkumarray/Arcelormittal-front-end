(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ranjitray/new-ui/external-project/arcelormittal/src/main.ts */"zUnb");


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

class HeaderComponent {
    constructor() {
        this.isLoggedIn = localStorage.getItem('user') ? true : false;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.isLoggedIn = localStorage.getItem('user') ? true : false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 0, consts: [[1, "custom_header"], [1, "logo_text"], [1, "nav", "navbar-nav", "pr-3"], [1, "d-flex", "align-items-center", "color_white", "text-decoration-none"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " One integrated Platform ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464A !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.custom_header[_ngcontent-%COMP%] {\n  background-color: #F47D30;\n  position: relative;\n  z-index: 999;\n  box-shadow: 0px 1px 2px 0px #00000029;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.custom_header[_ngcontent-%COMP%]   .profile_img[_ngcontent-%COMP%] {\n  color: #F47D30;\n  background-color: #ffffff;\n  width: 30px;\n  height: 30px;\n  border-radius: 5000px;\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n  font-family: \"semi-bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom_header[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"medium\";\n  color: #1d9de0;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  height: 60px;\n  margin-left: 10px;\n  justify-content: center;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 50px;\n  object-fit: contain;\n}\n.logo_text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-family: \"bold\";\n  color: #ffffff;\n  padding: 0 300px;\n  text-transform: uppercase;\n}\n.main_container[_ngcontent-%COMP%] {\n  height: calc(100vh - 60px);\n  overflow: auto;\n}\n.version[_ngcontent-%COMP%] {\n  color: white;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250LnNjc3MiLCIuLi8uLi8uLi8uLi9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLHdCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7QURLQTtFQUNJLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURNQTtFQUNJLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPQTtFQUNJLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBQzFCSTtFQUNJLHlCQUFBO0FENkJSO0FDM0JJO0VBQ0cseUJBQUE7QUQ4QlA7QUM1Qkk7RUFDSSx5QkFBQTtBRCtCUjtBQzdCSTtFQUNJLGNBZEE7QUQ4Q1I7QUM5Qkk7RUFDSSxjQWhCRjtBRGlETjtBQy9CSTtFQUNJLGNBeENDO0FEMEVUO0FBN0VBO0VBQ0kseUJDaUJXO0VEaEJYLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBZ0ZKO0FBL0VJO0VBQ0ksY0NRTztFRFBQLHlCQ1pEO0VEYUMsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFpRlI7QUEvRUk7RUFDSSxZQUFBO0FBaUZSO0FBM0VBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0M5Qks7RUQrQkwsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUE4RUo7QUE3RUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQStFUjtBQTVFQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0MzREc7RUQ0REgsZ0JBQUE7RUFDQSx5QkFBQTtBQStFSjtBQTdFQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQWdGSjtBQXhEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBMkRKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdibGFjayc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsaWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdleHRyYS1ib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG4uZm9udF93ZWlnaHRfYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59IiwiXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvY29sb3Iuc2Nzcyc7XG4uY3VzdG9tX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlPcmFuZ2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggJGhlYWRlclNoYWRvdztcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAucHJvZmlsZV9pbWcge1xuICAgICAgICBjb2xvcjogJHByaW1hcnlPcmFuZ2U7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLm5hdmJhci1uYXYge1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxufVxuLmxvZ2luX2hlYWRlciB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubG9nb3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbn1cbi5sb2dvX3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgcGFkZGluZzogMCAzMDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm1haW5fY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi8vIC5jdXN0b21fZm9vdGVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdXaGl0ZTtcbi8vICAgICBjb2xvcjogJHByaW1hcnk7XG4vLyAgICAgcGFkZGluZzogMTBweCAxNXB4IDBweCAxNXB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuLy8gICAgIGZsb2F0OiByaWdodDtcbi8vICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDJweCAwcHggJGhlYWRlclNoYWRvdztcbi8vICAgICAuY29weV9yaWdodCB7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgICAgICBvcGFjaXR5OiAwLjc0O1xuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG4vLyAgICAgfVxuLy8gfVxuLy8gLmN1c3RvbV9mb290ZXJfbG9naW4ge1xuLy8gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi52ZXJzaW9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1cHg7XG59IiwiQGltcG9ydCAnLi9mb250LnNjc3MnO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHByaW1hcnlCZzojZjNmM2YzO1xyXG4kYmdXaGl0ZTojZmZmZmZmO1xyXG4kYmxhY2s6IzAwMDAwMDtcclxuJHByaW1hcnk6IzFkOWRlMDtcclxuJHByaW1hcnlTaGFkZTojM2FhY2U5O1xyXG4kaW5wdXRCb3JkZXI6I0Q3REZFODtcclxuJGlucHV0Qmc6I0YyRjhGRjtcclxuJGlucHV0UGxhY2Vob2xkZXI6IzQxNDY0QTtcclxuJHRhYmxlQm9yZGVyOiNkZGRkZGQ7XHJcbiR0YWJsZUhlYWRCZzojRUJGMEY2O1xyXG4kdGFibGVIZWFkZXJCb3JkZXI6I0FCQzRFNDtcclxuJHRhYmxlQm9keUJvcmRlcjojRTJFNkU5O1xyXG4kdGFibGVIZWFkQ29sb3I6IzQ1NDk0ZTtcclxuJHRhYmxlQ29sb3I6IzQxNDY0QTtcclxuJGRlbGV0ZUJ0bjojRDkzNDExO1xyXG4kdXBsb2FkQmc6I0Y2RjlGQjtcclxuJG1haW5Db250YWluZXJIZWFkOiM1NjU3NTg7XHJcbiRpbnZhbGlkOnJnYigyNDgsIDk1LCA5NSk7XHJcbiRwcmltYXJ5T3JhbmdlOiNGNDdEMzA7XHJcbiRzY3JvbGxPcmFuZ2U6I2M4MzYwMDtcclxuJGxhYmVsQ29sb3I6cmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGFibGVTaGFkb3c6ICNjMGMwYzA7XHJcbiR0ZW1wbGF0ZV9jb2xvcjojNzk3OTc5O1xyXG4kZGVsZXRlOnJnYigyNDcsIDExMCwgMTEwKTtcclxuJGNvcHk6cmdiKDUwLCAxNjYsIDI0Myk7XHJcbi8vICRhVGFnOiMwMDdiZmY7XHJcbi8vIGRpcmVjdCBjb2xvciBcclxuICAgIC5jb2xvcl90ZXh0IHtcclxuICAgICAgICBjb2xvcjogIzQxNDY0QSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLndhcm5pbmdfYmcge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjRkY2EwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yX3doaXRlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgY29sb3I6ICRkZWxldGU7XHJcbiAgICB9XHJcbiAgICAuY29weSB7XHJcbiAgICAgICAgY29sb3I6ICRjb3B5O1xyXG4gICAgfVxyXG4gICAgLnByaW1hcnlfYSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG4vLyBsb2dpblxyXG4gICAgJGxvZ2luSW5wdXRCb3JkZXI6IzAzNjBiODtcclxuICAgICRsb2dpbklucHV0UGxhY2Vob2xkZXI6IzA0NTA5NztcclxuXHJcbi8vIHNpZGViYXJcclxuICAgICRzaWRlQmFySW5hY3RpdmU6IzZlNmY3MDtcclxuICAgICRzaWRlYmFyU2hhZG93OiMwMjNFNkQyOTtcclxuXHJcbi8vIGhlYWRlclxyXG4gICAgJGhlYWRlclNoYWRvdzojMDAwMDAwMjk7XHJcblxyXG4vLyBkYXNoYm9hcmRcclxuICAgICRjYXJkQ291bnQ6IzU3NTM1MztcclxuICAgICRjYXJkTmFtZTojODg4Rjk0O1xyXG4gICAgLy8gY2FyZHNcclxuICAgICAgICAkY29weV9jYXJkczogI2U4YmZiYjtcclxuICAgICAgICAkd2FybmluZ19jYXJkczojZjRkY2EwO1xyXG4gICAgICAgICRjb25maXJtZWRfY2FyZHM6I2Q0ZTNiYjtcclxuICAgICAgICAkYmx1ZV9jYXJkczojYmJkOWViO1xyXG4gICAgICAgICR2aW9sZXRfY2FyZHM6I2RhYzVkNTtcclxuXHJcbi8vIGR1bW15IGlucHV0IGJvcmRlclxyXG4gICAgJGR1bW15SW5wdXRfYm9yZGVyOiM5ODk4OTg7XHJcblxyXG4vLyBvcmRlcl90YWJsZVxyXG4gICAgJGVkaXQ6IzA4MzU5NjtcclxuICAgICRhcHByb3ZlOnJnYig5LCAxNDYsIDYxKTtcclxuICAgICRvcmRlcl9jbG9zZTpyZ2IoMjQwLCA4MiwgODIpO1xyXG5cclxuLy9teSB0YXNrXHJcbiAgICAkbXlUYXNrMTogI2U4YmZiYjtcclxuICAgICRteVRhc2syOiNmNGRjYTA7XHJcbiAgICAkbXlUYXNrMzojZDRlM2JiO1xyXG4gICAgJG15VGFzazQ6I2JiZDllYjtcclxuXHJcbi8vIG15IG9mZmVyc1xyXG4gICAgJG9mZmVyQ291bnQ6IzVkNWQ1ZDtcclxuXHJcbi8vIHRhYmxlIGRldGFpbHMgXHJcbiAgICAkZjVmNWY1OiNmNWY1ZjU7XHJcbiAgICAkaW5wdXRPbmU6I2Y2YzNjNDtcclxuICAgICRpbnB1dFR3bzojZjZlZWFhO1xyXG4gICAgJGlucHV0VGhyZWU6I2M2ZjRiYztcclxuICAgICR5ZWxsb3dJbnB1dDojZmNmYmYwOyJdfQ== */"] });


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
    domain: "http://18.159.253.5:5000/"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class ApiService {
    constructor(https, _snackBar) {
        this.https = https;
        this._snackBar = _snackBar;
        this.baseURI = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].domain;
        this.selectedIndex = '';
    }
    get_request(url) {
        return this.https.get(url);
    }
    post_request(url, param) {
        return this.https.post(url, param);
    }
    put_request(url, param) {
        return this.https.put(url, param);
    }
    patch_request(url, param) {
        return this.https.patch(url, param);
    }
    get_request_Param(url, param) {
        return this.https.get(url, {
            params: param
        });
    }
    delete_request_Param(url, param) {
        return this.https.delete(url, {
            params: param
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
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });


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
        this.myTask = {
            offerStatus: this.baseUrl + "taskbar1_data",
            orderStatus: this.baseUrl + "",
            customerVolume: this.baseUrl + "",
            missingInvoicePayment: this.baseUrl + ""
        };
    }
}
CitGlobalConstantService.ɵfac = function CitGlobalConstantService_Factory(t) { return new (t || CitGlobalConstantService)(); };
CitGlobalConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CitGlobalConstantService, factory: CitGlobalConstantService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "WLZL":
/*!***********************************************!*\
  !*** ./src/app/common-use/sidebar/sidebar.ts ***!
  \***********************************************/
/*! exports provided: NavItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItems", function() { return NavItems; });
const NavItems = [
    {
        name: 'Alloy & Scrap',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'alloy_scrap',
        type: "admin",
        children: [
            {
                name: 'upload alloy & Scrap',
                url: '/alloy-scrap/upload',
                icon: 'fa fa-file',
                tag: 'alloy_scrap_sub_menu',
            },
            {
                name: 'History',
                url: '/alloy-scrap/history',
                icon: 'fa fa-history',
                tag: 'alloy_scrap_sub_menu',
            }
        ]
    },
    {
        name: 'SMB',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'smb',
        type: 'admin',
        children: [
            {
                name: 'Base Price Addition',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Base_Price_Addition',
                children: [
                    {
                        name: 'Price Addition List',
                        url: '/smb/base-price/list',
                        icon: 'fa fa-file',
                        tag: 'alloy_scrap_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/base-price/history',
                        icon: 'fa fa-history',
                        tag: 'alloy_scrap_sub_menu',
                    }
                ]
            },
            {
                name: 'Incoterm Exceptions',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Incoterm_Exceptions',
                children: [
                    {
                        name: 'Incoterm Exceptions List',
                        url: '/smb/incoterm-exceptions/list',
                        icon: 'fa fa-file',
                        tag: 'Incoterm_Exceptions_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/incoterm-exceptions/history',
                        icon: 'fa fa-history',
                        tag: 'Incoterm_Exceptions_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Certificate',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Certificate',
                children: [
                    {
                        name: 'Certificate List',
                        url: '/smb/extra-certificate/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Certificate_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/extra-certificate/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Certificate_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Delivery Mill',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Delivery_Mill',
                children: [
                    {
                        name: 'Delivery Mill List',
                        url: '/smb/delivery-mill/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Delivery_Mill_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/delivery-mill/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Delivery_Mill_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Freight Parity',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Freight_Parity',
                children: [
                    {
                        name: 'Freight Parity List',
                        url: '/smb/freight-parity/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Freight_Parity_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/freight-parity/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Freight_Parity_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Grade',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Grade',
                children: [
                    {
                        name: 'Grade List',
                        url: '/smb/grade/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Grade_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/grade/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Grade_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Length Logistic',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Length_Logistic',
                children: [
                    {
                        name: 'Length Logistic List',
                        url: '/smb/length-logistic/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Length_Logistic_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/length-logistic/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Length_Logistic_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Length Production',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Length_Production',
                children: [
                    {
                        name: 'Length Production List',
                        url: '/smb/length-production/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Length_Production_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/length-production/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Length_Production_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Profile',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Profile',
                children: [
                    {
                        name: 'Profile List',
                        url: '/smb/profile/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Profile_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/profile/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Profile_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Profile Iberia & Italy',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Profile_Iberia_and_Italy',
                children: [
                    {
                        name: 'Profile Iberia & Italy List',
                        url: '/smb/profile-lberia-italy/list',
                        icon: 'fa fa-file',
                        tag: 'Profile_Iberia_and_Italy_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/profile-lberia-italy/history',
                        icon: 'fa fa-history',
                        tag: 'Profile_Iberia_and_Italy_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra - Transport Mode',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'Extra_Transport_Mode',
                children: [
                    {
                        name: 'Transport Mode List',
                        url: '/smb/transport-mode/list',
                        icon: 'fa fa-file',
                        tag: 'Extra_Transport_Mode_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/transport-mode/history',
                        icon: 'fa fa-history',
                        tag: 'Extra_Transport_Mode_sub_menu',
                    }
                ]
            }
        ]
    },
    {
        name: 'SMB-miniBar',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'smb_mini_bar',
        type: "admin",
        children: [
            {
                name: 'Base Price Addition',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Base_Price_Addition',
                children: [
                    {
                        name: 'Price Addition List',
                        url: '/smb/base-price/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_alloy_scrap_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/base-price/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_alloy_scrap_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Certificate',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Certificate',
                children: [
                    {
                        name: 'Certificate List',
                        url: '/smb/extra-certificate/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Certificate_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/extra-certificate/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Certificate_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Delivery Mill',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Delivery_Mill',
                children: [
                    {
                        name: 'Delivery Mill List',
                        url: '/smb/delivery-mill/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Delivery_Mill_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/delivery-mill/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Delivery_Mill_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Freight Parity',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Freight_Parity',
                children: [
                    {
                        name: 'Freight Parity List',
                        url: '/smb/freight-parity/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Freight_Parity_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/freight-parity/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Freight_Parity_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Grade',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Grade',
                children: [
                    {
                        name: 'Grade List',
                        url: '/smb/grade/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Grade_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/grade/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Grade_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Length Logistic',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Length_Logistic',
                children: [
                    {
                        name: 'Length Logistic List',
                        url: '/smb/length-logistic/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Length_Logistic_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/length-logistic/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Length_Logistic_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Length Production',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Length_Production',
                children: [
                    {
                        name: 'Length Production List',
                        url: '/smb/length-production/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Length_Production_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/length-production/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Length_Production_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Profile',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Profile',
                children: [
                    {
                        name: 'Profile List',
                        url: '/smb/profile/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Profile_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/profile/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Profile_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra Profile Iberia & Italy',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Profile_Iberia_and_Italy',
                children: [
                    {
                        name: 'Profile Iberia & Italy List',
                        url: '/smb/profile-lberia-italy/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Profile_Iberia_and_Italy_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/profile-lberia-italy/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Profile_Iberia_and_Italy_sub_menu',
                    }
                ]
            },
            {
                name: 'Extra - Transport Mode',
                url: '',
                active_img: '../../../assets/images/order.png',
                inactive_img: '../../../assets/images/order 2.png',
                tag: 'smb_mini_bar_Extra_Transport_Mode',
                children: [
                    {
                        name: 'Transport Mode List',
                        url: '/smb/transport-mode/mini-bar/list',
                        icon: 'fa fa-file',
                        tag: 'smb_mini_bar_Extra_Transport_Mode_sub_menu',
                    },
                    {
                        name: 'upload History',
                        url: '/smb/transport-mode/mini-bar/history',
                        icon: 'fa fa-history',
                        tag: 'smb_mini_bar_Extra_Transport_Mode_sub_menu',
                    }
                ]
            }
        ]
    },
    {
        name: 'My Tasks',
        url: '',
        active_img: '../../../assets/images/order.png',
        inactive_img: '../../../assets/images/order 2.png',
        tag: 'My_Tasks',
        type: "user",
        children: [
            {
                name: 'Offer status / Pending approval',
                url: '/management/offer-status',
                icon: '',
                tag: 'offer_status_sub_menu',
            },
            {
                name: 'Order status & delay',
                url: '/management/order-status',
                icon: '',
                tag: 'order_status_sub_menu',
            },
            {
                name: 'Customer Volume & Over Booking',
                url: '/management/customer-volume',
                icon: '',
                tag: 'customer_volume_sub_menu',
            },
            {
                name: 'Missing Invoice Payments',
                url: '/management/missing-invoice-payment',
                icon: '',
                tag: 'missing_invoice_payment_sub_menu',
            },
        ]
    },
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













const APP_CONTAINERS = [
    _common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"]
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_api_collection__WEBPACK_IMPORTED_MODULE_5__["CitGlobalConstantService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _materials_materials_module__WEBPACK_IMPORTED_MODULE_8__["MaterialsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "WLZL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "1ivb");





function SidebarComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 14);
} }
function SidebarComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 15);
} }
const _c0 = function () { return ["active"]; };
function SidebarComponent_span_11_span_1_span_9_span_1_span_12_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item2_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sub_item2_r11.url)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sub_item2_r11 == null ? null : sub_item2_r11.name, " ");
} }
function SidebarComponent_span_11_span_1_span_9_span_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_span_11_span_1_span_9_span_1_span_12_li_1_Template, 4, 4, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sub_item1_r6.children);
} }
function SidebarComponent_span_11_span_1_span_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SidebarComponent_span_11_span_1_span_9_span_1_span_12_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", item_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + sub_item1_r6.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", sub_item1_r6.active_img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", sub_item1_r6.inactive_img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", sub_item1_r6 == null ? null : sub_item1_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", sub_item1_r6.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sub_item1_r6.children);
} }
function SidebarComponent_span_11_span_1_span_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", item_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sub_item1_r6.url)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sub_item1_r6.name, " ");
} }
function SidebarComponent_span_11_span_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_span_11_span_1_span_9_span_1_Template, 13, 7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_span_11_span_1_span_9_span_2_Template, 6, 5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item1_r6 = ctx.$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sub_item1_r6.children && item_r4.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sub_item1_r6.children);
} }
function SidebarComponent_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SidebarComponent_span_11_span_1_span_9_Template, 3, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + item_r4.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.active_img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.inactive_img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r4.children);
} }
function SidebarComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_span_11_span_1_Template, 10, 5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.navbarItem);
} }
class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.navLink = _sidebar__WEBPACK_IMPORTED_MODULE_0__["NavItems"];
        this.showFiller = false;
        this.collapsed = false;
        this.isOpen = false;
        this.version = '';
        this.user = 'user';
        this.navbarItem = [];
        if (this.user === 'admin') {
            this.router.navigate(['/management/offer-status']);
            this.navbarItem = this.navLink.filter((x) => x.type === 'admin');
        }
        else {
            this.navbarItem = this.navLink.filter((x) => x.type === 'user');
        }
        console.log(this.navbarItem, "Nav Item");
    }
    ngOnInit() {
        this.version = "1";
        console.log(this.navbarItem);
    }
    toggleCollapse() {
        this.collapsed = !this.collapsed;
    }
    openNav() {
        this.isOpen = false;
    }
    offerClicked() {
        let doc = document.getElementById('offer-link');
        doc.click();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 17, vars: 7, consts: [[1, "sidebar"], [1, "sidebar_toggler", 3, "click"], ["class", "fa fa-bars", 4, "ngIf"], ["class", "fas fa-times", 4, "ngIf"], [1, ""], [1, "container-fluid", "logo_outer"], [1, "logo"], ["src", "../../../assets/images/arcelorMittal_logo.png", "alt", "logo"], [1, "content"], [1, "line"], [1, "nav", "flex-column", "flex-nowrap", "overflow-hidden"], [4, "ngIf"], [1, "main_container_content"], [2, "margin-top", "10px"], [1, "fa", "fa-bars"], [1, "fas", "fa-times"], [4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "sub_menu_con"], ["data-toggle", "collapse", 1, "items", "nav-link", "collapsed", "text-truncate"], ["alt", "icon", 1, "active_img", 3, "src"], ["alt", "icon-inactive", 1, "inactive_img", 3, "src"], [1, "d-none", "d-sm-inline"], ["aria-expanded", "false", 1, "collapse", 3, "id"], [1, "flex-column", "pl-2", "nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sub", "items", 3, "routerLink", "routerLinkActive"], [1, "sub_hyphen"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_i_2_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_i_3_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SidebarComponent_span_11_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sidebar_open", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.navbarItem.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("main_container_content_toggled", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464A !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 250px;\n  display: inline-block;\n  vertical-align: top;\n  box-shadow: 0px 0px 6px 0px #023E6D29;\n  position: absolute;\n  left: 0;\n  top: 0px;\n  bottom: 0;\n  z-index: 9998;\n  background-color: #ffffff;\n  transition: 0.1s;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar_toggler[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: -40px;\n  border: none;\n  border-radius: 3px;\n  background-color: white;\n  color: #F47D30;\n  padding: 5px 8px;\n  outline: none;\n  box-shadow: none;\n  font-size: 20px;\n  width: 33px;\n  height: 30px;\n}\n.sidebar[_ngcontent-%COMP%]   .logo_outer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"medium\";\n  color: #1d9de0;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  height: 60px;\n  justify-content: center;\n}\n.sidebar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 50px;\n  object-fit: contain;\n}\n.sidebar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: calc(100% - 65px);\n  overflow: auto;\n  padding-bottom: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  border-left: 6px solid transparent;\n  padding: 13px 10px;\n  color: #6e6f70;\n  flex: 0 0 100%;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n}\n.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .active_img[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  padding: 7px 5px 7px 5px;\n  margin-left: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   .sub_hyphen[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_l2[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 20px;\n  margin-left: 40px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_l2[_ngcontent-%COMP%]   .sub_hyphen[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 10px;\n}\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-color: #1d9de0;\n  color: #1d9de0;\n  transition: border-color 0.5s;\n}\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .active_img[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .inactive_img[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #D7DFE8;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_menu_con[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n}\n.sidebar[_ngcontent-%COMP%]   .sub_menu_con[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n.main_container_content[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  float: right;\n  overflow: auto;\n  transition: 0.1s;\n}\n.sidebar_open[_ngcontent-%COMP%] {\n  left: -250px;\n}\n.main_container_content_toggled[_ngcontent-%COMP%] {\n  width: calc(100% - 0px);\n}\n.nav-link[data-toggle].collapsed[_ngcontent-%COMP%]:after {\n  content: \" \u25BE\";\n  float: right;\n}\n.nav-link[data-toggle][_ngcontent-%COMP%]:not(.collapsed):after {\n  content: \" \u25B4\";\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvZm9udC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksb0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0NBO0VBQ0ksbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURDSjtBQ0VBO0VBQ0ksc0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0dBO0VBQ0ksd0JBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURESjtBQ0lBO0VBQ0ksb0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURGSjtBQ0tBO0VBQ0kseUJBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURISjtBQ01BO0VBQ0kscUJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ01BO0VBQ0kscUJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ01BO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBREpKO0FDTUE7RUFDSSxtQkFBQTtBREhKO0FFM0JJO0VBQ0kseUJBQUE7QUY4QlI7QUU1Qkk7RUFDRyx5QkFBQTtBRitCUDtBRTdCSTtFQUNJLHlCQUFBO0FGZ0NSO0FFOUJJO0VBQ0ksY0FkQTtBRitDUjtBRS9CSTtFQUNJLGNBaEJGO0FGa0ROO0FFaENJO0VBQ0ksY0F4Q0M7QUYyRVQ7QUEvRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRVRLO0VGVUwsZ0JBQUE7QUFrRko7QUFqRkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRURPO0VGRVAsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFtRlI7QUEvRVE7RUFDSSxjRS9CTDtBRmdIUDtBQTlFSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNFakNDO0VGa0NELGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQWdGUjtBQS9FUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaUZaO0FBOUVJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFnRlI7QUE5RUk7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0VQYTtFRlFiLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBZ0ZSO0FBL0VRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBaUZaO0FBL0VRO0VBQ0ksYUFBQTtBQWlGWjtBQTlFSTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUFnRlI7QUEvRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFpRlo7QUE5RUk7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBZ0ZSO0FBL0VRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBaUZaO0FBOUVJO0VBQ0kscUJFcEZDO0VGcUZELGNFckZDO0VGc0ZELDZCQUFBO0FBZ0ZSO0FBOUVZO0VBQ0kscUJBQUE7QUFnRmhCO0FBOUVZO0VBQ0ksYUFBQTtBQWdGaEI7QUE1RUk7RUFDSSxXQUFBO0VBQ0EseUJFaEdLO0FGOEtiO0FBNUVJO0VBQ0ksaUJBQUE7QUE4RVI7QUE3RVE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBK0VaO0FBM0VBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUE2RUo7QUEzRUE7RUFDSSxZQUFBO0FBOEVKO0FBNUVBO0VBQ0ksdUJBQUE7QUErRUo7QUE3RUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQWdGSjtBQTlFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBaUZKIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2NvbG9yLnNjc3NcIjtcbi5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCAkc2lkZWJhclNoYWRvdztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk5ODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdXaGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xuICAgIC5zaWRlYmFyX3RvZ2dsZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgcmlnaHQ6IC00MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeU9yYW5nZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAubG9nb19vdXRlciB7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6JHByaW1hcnk7XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvZ28ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1lZGl1bVwiO1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5pdGVtcyB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgICAgICAgY29sb3I6ICRzaWRlQmFySW5hY3RpdmU7XG4gICAgICAgIGZsZXg6IDAgMCAxMDAlOyAgICAgICAgXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3RpdmVfaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnN1YiB7XG4gICAgICAgIHBhZGRpbmc6IDdweCA1cHggN3B4IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIC5zdWJfaHlwaGVuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3ViX2wyIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDIwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAuc3ViX2h5cGhlbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXM7XG4gICAgICAgIC5pbWcge1xuICAgICAgICAgICAgLmFjdGl2ZV9pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbmFjdGl2ZV9pbWcge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpbmUge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0Qm9yZGVyO1xuICAgIH1cbiAgICAuc3ViX21lbnVfY29uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIC5pdGVtcyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5tYWluX2NvbnRhaW5lcl9jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjUwcHgpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIC8vIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuLnNpZGViYXJfb3BlbiB7XG4gICAgbGVmdDogLTI1MHB4O1xufVxuLm1haW5fY29udGFpbmVyX2NvbnRlbnRfdG9nZ2xlZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDBweCk7XG59XG4ubmF2LWxpbmtbZGF0YS10b2dnbGVdLmNvbGxhcHNlZDphZnRlciB7XG4gICAgY29udGVudDogXCIg4pa+XCI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLm5hdi1saW5rW2RhdGEtdG9nZ2xlXTpub3QoLmNvbGxhcHNlZCk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIOKWtFwiO1xuICAgIGZsb2F0OiByaWdodDtcblxufSIsIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdibGFjayc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdsaWdodCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdleHRyYS1ib2xkJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG4uZm9udF93ZWlnaHRfYm9sZCB7XHJcbiAgICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59IiwiQGltcG9ydCAnLi9mb250LnNjc3MnO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHByaW1hcnlCZzojZjNmM2YzO1xyXG4kYmdXaGl0ZTojZmZmZmZmO1xyXG4kYmxhY2s6IzAwMDAwMDtcclxuJHByaW1hcnk6IzFkOWRlMDtcclxuJHByaW1hcnlTaGFkZTojM2FhY2U5O1xyXG4kaW5wdXRCb3JkZXI6I0Q3REZFODtcclxuJGlucHV0Qmc6I0YyRjhGRjtcclxuJGlucHV0UGxhY2Vob2xkZXI6IzQxNDY0QTtcclxuJHRhYmxlQm9yZGVyOiNkZGRkZGQ7XHJcbiR0YWJsZUhlYWRCZzojRUJGMEY2O1xyXG4kdGFibGVIZWFkZXJCb3JkZXI6I0FCQzRFNDtcclxuJHRhYmxlQm9keUJvcmRlcjojRTJFNkU5O1xyXG4kdGFibGVIZWFkQ29sb3I6IzQ1NDk0ZTtcclxuJHRhYmxlQ29sb3I6IzQxNDY0QTtcclxuJGRlbGV0ZUJ0bjojRDkzNDExO1xyXG4kdXBsb2FkQmc6I0Y2RjlGQjtcclxuJG1haW5Db250YWluZXJIZWFkOiM1NjU3NTg7XHJcbiRpbnZhbGlkOnJnYigyNDgsIDk1LCA5NSk7XHJcbiRwcmltYXJ5T3JhbmdlOiNGNDdEMzA7XHJcbiRzY3JvbGxPcmFuZ2U6I2M4MzYwMDtcclxuJGxhYmVsQ29sb3I6cmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGFibGVTaGFkb3c6ICNjMGMwYzA7XHJcbiR0ZW1wbGF0ZV9jb2xvcjojNzk3OTc5O1xyXG4kZGVsZXRlOnJnYigyNDcsIDExMCwgMTEwKTtcclxuJGNvcHk6cmdiKDUwLCAxNjYsIDI0Myk7XHJcbi8vICRhVGFnOiMwMDdiZmY7XHJcbi8vIGRpcmVjdCBjb2xvciBcclxuICAgIC5jb2xvcl90ZXh0IHtcclxuICAgICAgICBjb2xvcjogIzQxNDY0QSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLndhcm5pbmdfYmcge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjRkY2EwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yX3doaXRlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgY29sb3I6ICRkZWxldGU7XHJcbiAgICB9XHJcbiAgICAuY29weSB7XHJcbiAgICAgICAgY29sb3I6ICRjb3B5O1xyXG4gICAgfVxyXG4gICAgLnByaW1hcnlfYSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG4vLyBsb2dpblxyXG4gICAgJGxvZ2luSW5wdXRCb3JkZXI6IzAzNjBiODtcclxuICAgICRsb2dpbklucHV0UGxhY2Vob2xkZXI6IzA0NTA5NztcclxuXHJcbi8vIHNpZGViYXJcclxuICAgICRzaWRlQmFySW5hY3RpdmU6IzZlNmY3MDtcclxuICAgICRzaWRlYmFyU2hhZG93OiMwMjNFNkQyOTtcclxuXHJcbi8vIGhlYWRlclxyXG4gICAgJGhlYWRlclNoYWRvdzojMDAwMDAwMjk7XHJcblxyXG4vLyBkYXNoYm9hcmRcclxuICAgICRjYXJkQ291bnQ6IzU3NTM1MztcclxuICAgICRjYXJkTmFtZTojODg4Rjk0O1xyXG4gICAgLy8gY2FyZHNcclxuICAgICAgICAkY29weV9jYXJkczogI2U4YmZiYjtcclxuICAgICAgICAkd2FybmluZ19jYXJkczojZjRkY2EwO1xyXG4gICAgICAgICRjb25maXJtZWRfY2FyZHM6I2Q0ZTNiYjtcclxuICAgICAgICAkYmx1ZV9jYXJkczojYmJkOWViO1xyXG4gICAgICAgICR2aW9sZXRfY2FyZHM6I2RhYzVkNTtcclxuXHJcbi8vIGR1bW15IGlucHV0IGJvcmRlclxyXG4gICAgJGR1bW15SW5wdXRfYm9yZGVyOiM5ODk4OTg7XHJcblxyXG4vLyBvcmRlcl90YWJsZVxyXG4gICAgJGVkaXQ6IzA4MzU5NjtcclxuICAgICRhcHByb3ZlOnJnYig5LCAxNDYsIDYxKTtcclxuICAgICRvcmRlcl9jbG9zZTpyZ2IoMjQwLCA4MiwgODIpO1xyXG5cclxuLy9teSB0YXNrXHJcbiAgICAkbXlUYXNrMTogI2U4YmZiYjtcclxuICAgICRteVRhc2syOiNmNGRjYTA7XHJcbiAgICAkbXlUYXNrMzojZDRlM2JiO1xyXG4gICAgJG15VGFzazQ6I2JiZDllYjtcclxuXHJcbi8vIG15IG9mZmVyc1xyXG4gICAgJG9mZmVyQ291bnQ6IzVkNWQ1ZDtcclxuXHJcbi8vIHRhYmxlIGRldGFpbHMgXHJcbiAgICAkZjVmNWY1OiNmNWY1ZjU7XHJcbiAgICAkaW5wdXRPbmU6I2Y2YzNjNDtcclxuICAgICRpbnB1dFR3bzojZjZlZWFhO1xyXG4gICAgJGlucHV0VGhyZWU6I2M2ZjRiYztcclxuICAgICR5ZWxsb3dJbnB1dDojZmNmYmYwOyJdfQ== */"] });


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
        redirectTo: 'alloy-scrap/upload',
        pathMatch: "full"
    },
    { path: 'alloy-scrap', loadChildren: () => Promise.all(/*! import() | views-alloy-scrap-alloy-scrap-module */[__webpack_require__.e("default~views-alloy-scrap-alloy-scrap-module~views-smb-smb-module"), __webpack_require__.e("views-alloy-scrap-alloy-scrap-module")]).then(__webpack_require__.bind(null, /*! ./views/alloy-scrap/alloy-scrap.module */ "ghUo")).then(m => m.AlloyScrapModule) },
    { path: 'smb', loadChildren: () => Promise.all(/*! import() | views-smb-smb-module */[__webpack_require__.e("default~views-alloy-scrap-alloy-scrap-module~views-smb-smb-module"), __webpack_require__.e("views-smb-smb-module")]).then(__webpack_require__.bind(null, /*! ./views/smb/smb.module */ "CI15")).then(m => m.SmbModule) },
    { path: 'management', loadChildren: () => __webpack_require__.e(/*! import() | views-my-management-my-management-module */ "views-my-management-my-management-module").then(__webpack_require__.bind(null, /*! ./views/my-management/my-management.module */ "F6Jo")).then(m => m.MyManagementModule) },
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