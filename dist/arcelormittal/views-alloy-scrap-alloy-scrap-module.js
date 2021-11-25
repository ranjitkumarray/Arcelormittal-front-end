(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-alloy-scrap-alloy-scrap-module"],{

/***/ "+XIG":
/*!****************************************************************************************!*\
  !*** ./src/app/views/alloy-scrap/history-alloy-scrap/history-alloy-scrap.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HistoryAlloyScrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryAlloyScrapComponent", function() { return HistoryAlloyScrapComponent; });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-collection */ "Tu6q");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function HistoryAlloyScrapComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function HistoryAlloyScrapComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Batch ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r17.Batch_ID, " ");
} }
function HistoryAlloyScrapComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "File Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r18.filename, " ");
} }
function HistoryAlloyScrapComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r19.username, " ");
} }
function HistoryAlloyScrapComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Condition Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r20.condition_type, " ");
} }
function HistoryAlloyScrapComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r21.date_time, " ");
} }
function HistoryAlloyScrapComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryAlloyScrapComponent_td_36_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.viewDetails(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoryAlloyScrapComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 32);
} }
function HistoryAlloyScrapComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 33);
} }
function HistoryAlloyScrapComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("No data matching the filter \"", ctx_r15.searchValue, "\" ");
} }
const _c0 = function () { return [10, 25, 50, 100, 150, 200]; };
class HistoryAlloyScrapComponent {
    constructor(apiString, apiMethod, router) {
        this.apiString = apiString;
        this.apiMethod = apiMethod;
        this.router = router;
        this.loadingRouteConfig = false;
        this.displayedColumns = ['Batch_ID', 'filename', 'username', 'condition_type', 'date_time', "action"];
        this.pageEvent = _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["PageEvent"];
        this.paginator = _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"];
        this.sort = _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"];
        this.pageLength = 10;
        this.pageOffset = 0;
        this.totalCount = 0;
    }
    ngOnInit() {
        this.getHistory();
    }
    //getting uploaded history of alloy scrap 
    getHistory() {
        this.loadingRouteConfig = true;
        let searchString;
        if (this.searchValue) {
            searchString = this.searchValue;
        }
        else {
            searchString = "all";
        }
        this.apiMethod.get_request(this.apiString.alloy_scrap_history + "?offset=" + this.pageOffset + "&limit=" + this.pageLength + "&search_string=" + searchString).subscribe(result => {
            console.log(result);
            let resultData = result;
            this.totalCount = resultData.totalCount;
            this.loadingRouteConfig = false;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](resultData.data);
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
        }, error => {
            this.loadingRouteConfig = false;
            this.apiMethod.popupMessage('error', 'Error while fatching history');
        });
    }
    //page change 
    pageChangeCall(event) {
        console.log(event);
        this.pageOffset = event.pageIndex;
        this.pageLength = event.pageSize;
        this.getHistory();
    }
    //filter 
    applyFilter() {
        const filterValue = this.searchValue;
        this.pageOffset = 0;
        this.pageLength = 10;
        this.getHistory();
    }
    viewDetails(rowData) {
        console.log(rowData);
        let string = (rowData.filename + "&" + rowData.condition_type + "&" + rowData.Batch_ID);
        console.log(string);
        var encodedString = btoa(string);
        console.log(string, encodedString);
        this.router.navigate(['/alloy-scrap/history/fileDetails/' + encodedString]);
    }
}
HistoryAlloyScrapComponent.ɵfac = function HistoryAlloyScrapComponent_Factory(t) { return new (t || HistoryAlloyScrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_4__["CitGlobalConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HistoryAlloyScrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoryAlloyScrapComponent, selectors: [["app-history-alloy-scrap"]], viewQuery: function HistoryAlloyScrapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 42, vars: 9, consts: [[4, "ngIf"], [1, "row"], [1, "col-12"], [1, "text-right", "mt-10"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["matSuffix", "", 1, "pointer", 3, "click"], [1, "my_offer_table_container"], [1, "text-center", "h-100"], [1, "table-outer-container", "offer_table_container", "position-relative", "h-100"], [1, "table-inner-container", "h-100"], ["mat-table", "", "matSort", "", 1, "custom_table", "order_table", 3, "dataSource"], ["matColumnDef", "Batch_ID"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "filename"], ["matColumnDef", "username"], ["matColumnDef", "condition_type"], ["matColumnDef", "date_time"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["paginators", ""], [1, "loading-overlay", "is-active"], [1, "signal"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function HistoryAlloyScrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HistoryAlloyScrapComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoryAlloyScrapComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchValue = $event; })("keyup.enter", function HistoryAlloyScrapComponent_Template_input_keyup_enter_9_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoryAlloyScrapComponent_Template_mat_icon_click_10_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, HistoryAlloyScrapComponent_th_20_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HistoryAlloyScrapComponent_td_21_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, HistoryAlloyScrapComponent_th_23_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, HistoryAlloyScrapComponent_td_24_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](25, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, HistoryAlloyScrapComponent_th_26_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, HistoryAlloyScrapComponent_td_27_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](28, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, HistoryAlloyScrapComponent_th_29_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, HistoryAlloyScrapComponent_td_30_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](31, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, HistoryAlloyScrapComponent_th_32_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, HistoryAlloyScrapComponent_td_33_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](34, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, HistoryAlloyScrapComponent_th_35_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, HistoryAlloyScrapComponent_td_36_Template, 3, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, HistoryAlloyScrapComponent_tr_37_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, HistoryAlloyScrapComponent_tr_38_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, HistoryAlloyScrapComponent_tr_39_Template, 3, 1, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-paginator", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("page", function HistoryAlloyScrapComponent_Template_mat_paginator_page_40_listener($event) { return ctx.pageEvent = ctx.pageChangeCall($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadingRouteConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.totalCount)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_0__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: [".mat-colomn-action[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type {\n  text-align: center;\n  color: #f05b31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hpc3RvcnktYWxsb3ktc2NyYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoiaGlzdG9yeS1hbGxveS1zY3JhcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sb21uLWFjdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2YwNWIzMTtcbn0iXX0= */"] });


/***/ }),

/***/ "17Hi":
/*!************************************************************!*\
  !*** ./src/app/views/alloy-scrap/alloy-scrap.component.ts ***!
  \************************************************************/
/*! exports provided: AlloyScrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlloyScrapComponent", function() { return AlloyScrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AlloyScrapComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlloyScrapComponent.ɵfac = function AlloyScrapComponent_Factory(t) { return new (t || AlloyScrapComponent)(); };
AlloyScrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlloyScrapComponent, selectors: [["app-alloy-scrap"]], decls: 1, vars: 0, template: function AlloyScrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxveS1zY3JhcC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Lt4x":
/*!**************************************************************************************!*\
  !*** ./src/app/views/alloy-scrap/upload-alloy-scrap/upload-alloy-scrap.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UploadAlloyScrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAlloyScrapComponent", function() { return UploadAlloyScrapComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-collection */ "Tu6q");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");





















function UploadAlloyScrapComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function UploadAlloyScrapComponent_mat_list_item_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_mat_list_item_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.uploadFiles(ctx_r13.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_mat_list_item_23_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.deleteFile(ctx_r15.selectedFiles.alloy_surcharge_wire.file, ctx_r15.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selectedFiles.alloy_surcharge_wire.file == null ? null : ctx_r2.selectedFiles.alloy_surcharge_wire.file.fileName);
} }
function UploadAlloyScrapComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_div_24_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.validateDataForm("alloy_surcharge_wire"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Validate Alloy Surcharge Wire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function UploadAlloyScrapComponent_div_24_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.applyFilter($event, ctx_r19.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " VKORG");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r38 == null ? null : element_r38.VKORG, " ");
} }
function UploadAlloyScrapComponent_div_25_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " COND_TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r39 == null ? null : element_r39.COND_TYPE, " ");
} }
function UploadAlloyScrapComponent_div_25_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DST_CH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r40 == null ? null : element_r40.DST_CH, " ");
} }
function UploadAlloyScrapComponent_div_25_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DIV");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r41 == null ? null : element_r41.DIV, " ");
} }
function UploadAlloyScrapComponent_div_25_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Month_year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r42 == null ? null : element_r42.Month_year, " ");
} }
function UploadAlloyScrapComponent_div_25_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r43 == null ? null : element_r43.Amount, " ");
} }
function UploadAlloyScrapComponent_div_25_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Customer_ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r44 == null ? null : element_r44.Customer_ID, " ");
} }
function UploadAlloyScrapComponent_div_25_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Internal_Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_25_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r45 == null ? null : element_r45.Internal_Grade, " ");
} }
function UploadAlloyScrapComponent_div_25_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 53);
} }
function UploadAlloyScrapComponent_div_25_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 54);
} }
const _c0 = function () { return [10, 30, 50, 100]; };
function UploadAlloyScrapComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UploadAlloyScrapComponent_div_25_th_8_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UploadAlloyScrapComponent_div_25_td_9_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UploadAlloyScrapComponent_div_25_th_11_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UploadAlloyScrapComponent_div_25_td_12_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UploadAlloyScrapComponent_div_25_th_14_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UploadAlloyScrapComponent_div_25_td_15_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, UploadAlloyScrapComponent_div_25_th_17_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UploadAlloyScrapComponent_div_25_td_18_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UploadAlloyScrapComponent_div_25_th_20_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UploadAlloyScrapComponent_div_25_td_21_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UploadAlloyScrapComponent_div_25_th_23_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UploadAlloyScrapComponent_div_25_td_24_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, UploadAlloyScrapComponent_div_25_th_26_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, UploadAlloyScrapComponent_div_25_td_27_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, UploadAlloyScrapComponent_div_25_th_29_Template, 2, 0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, UploadAlloyScrapComponent_div_25_td_30_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, UploadAlloyScrapComponent_div_25_tr_31_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UploadAlloyScrapComponent_div_25_tr_32_Template, 1, 0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "mat-paginator", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r4.alloy_surcharge_wire);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns_wire);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns_wire);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
} }
function UploadAlloyScrapComponent_mat_list_item_47_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_mat_list_item_47_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r47.uploadFiles(ctx_r47.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_mat_list_item_47_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r49.deleteFile(ctx_r49.selectedFiles.alloy_surcharge_billet.file, ctx_r49.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.selectedFiles.alloy_surcharge_billet.file == null ? null : ctx_r6.selectedFiles.alloy_surcharge_billet.file.fileName);
} }
function UploadAlloyScrapComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_div_48_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r51.validateDataForm("alloy_surcharge_billet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Validate Alloy Surcharge Billet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function UploadAlloyScrapComponent_div_48_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r53.applyFilter($event, ctx_r53.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " VKORG");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r74 == null ? null : element_r74.VKORG, " ");
} }
function UploadAlloyScrapComponent_div_49_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " COND_TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r75 == null ? null : element_r75.COND_TYPE, " ");
} }
function UploadAlloyScrapComponent_div_49_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DST_CH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r76 == null ? null : element_r76.DST_CH, " ");
} }
function UploadAlloyScrapComponent_div_49_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DIV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r77 == null ? null : element_r77.DIV, " ");
} }
function UploadAlloyScrapComponent_div_49_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Month_year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r78 == null ? null : element_r78.Month_year, " ");
} }
function UploadAlloyScrapComponent_div_49_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r79 == null ? null : element_r79.Amount, " ");
} }
function UploadAlloyScrapComponent_div_49_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " WARENEMPFAENGER_NR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r80 == null ? null : element_r80.WARENEMPFAENGER_NR, " ");
} }
function UploadAlloyScrapComponent_div_49_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " SEL_NR_MELDUNG");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r81 == null ? null : element_r81.SEL_NR_MELDUNG, " ");
} }
function UploadAlloyScrapComponent_div_49_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DRUCKSPERRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_49_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r82 == null ? null : element_r82.dRUCKSPERRE, " ");
} }
function UploadAlloyScrapComponent_div_49_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 53);
} }
function UploadAlloyScrapComponent_div_49_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 54);
} }
function UploadAlloyScrapComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UploadAlloyScrapComponent_div_49_th_8_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UploadAlloyScrapComponent_div_49_td_9_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UploadAlloyScrapComponent_div_49_th_11_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UploadAlloyScrapComponent_div_49_td_12_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UploadAlloyScrapComponent_div_49_th_14_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UploadAlloyScrapComponent_div_49_td_15_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, UploadAlloyScrapComponent_div_49_th_17_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UploadAlloyScrapComponent_div_49_td_18_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UploadAlloyScrapComponent_div_49_th_20_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UploadAlloyScrapComponent_div_49_td_21_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UploadAlloyScrapComponent_div_49_th_23_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UploadAlloyScrapComponent_div_49_td_24_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, UploadAlloyScrapComponent_div_49_th_26_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, UploadAlloyScrapComponent_div_49_td_27_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, UploadAlloyScrapComponent_div_49_th_29_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, UploadAlloyScrapComponent_div_49_td_30_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UploadAlloyScrapComponent_div_49_th_32_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, UploadAlloyScrapComponent_div_49_td_33_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, UploadAlloyScrapComponent_div_49_tr_34_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, UploadAlloyScrapComponent_div_49_tr_35_Template, 1, 0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "mat-paginator", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r8.alloy_surcharge_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r8.displayedColumns_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r8.displayedColumns_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
} }
function UploadAlloyScrapComponent_mat_list_item_71_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_mat_list_item_71_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r84.uploadFiles(ctx_r84.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_mat_list_item_71_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r86.deleteFile(ctx_r86.selectedFiles.scrap_surcharge_billet.file, ctx_r86.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.selectedFiles.scrap_surcharge_billet.file == null ? null : ctx_r10.selectedFiles.scrap_surcharge_billet.file.fileName);
} }
function UploadAlloyScrapComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_div_72_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r88.validateDataForm("scrap_surcharge_billet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Validate Scrap Surcharge Billet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function UploadAlloyScrapComponent_div_72_Template_input_keyup_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r90.applyFilter($event, ctx_r90.SelectedTab); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " VKORG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r111 == null ? null : element_r111.VKORG, " ");
} }
function UploadAlloyScrapComponent_div_73_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " COND_TYPE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r112 == null ? null : element_r112.COND_TYPE, " ");
} }
function UploadAlloyScrapComponent_div_73_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DST_CH");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r113 == null ? null : element_r113.DST_CH, " ");
} }
function UploadAlloyScrapComponent_div_73_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " DIV");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r114 == null ? null : element_r114.DIV, " ");
} }
function UploadAlloyScrapComponent_div_73_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Month_year");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r115 == null ? null : element_r115.Month_year, " ");
} }
function UploadAlloyScrapComponent_div_73_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r116 == null ? null : element_r116.Model, " ");
} }
function UploadAlloyScrapComponent_div_73_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Monthly Deviation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r117 == null ? null : element_r117.Monthly_Deviation, " ");
} }
function UploadAlloyScrapComponent_div_73_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r118 == null ? null : element_r118.Product, " ");
} }
function UploadAlloyScrapComponent_div_73_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UploadAlloyScrapComponent_div_73_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r119 == null ? null : element_r119.Amount, " ");
} }
function UploadAlloyScrapComponent_div_73_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 53);
} }
function UploadAlloyScrapComponent_div_73_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 54);
} }
function UploadAlloyScrapComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, UploadAlloyScrapComponent_div_73_th_8_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UploadAlloyScrapComponent_div_73_td_9_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, UploadAlloyScrapComponent_div_73_th_11_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UploadAlloyScrapComponent_div_73_td_12_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, UploadAlloyScrapComponent_div_73_th_14_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UploadAlloyScrapComponent_div_73_td_15_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, UploadAlloyScrapComponent_div_73_th_17_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UploadAlloyScrapComponent_div_73_td_18_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UploadAlloyScrapComponent_div_73_th_20_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UploadAlloyScrapComponent_div_73_td_21_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UploadAlloyScrapComponent_div_73_th_23_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UploadAlloyScrapComponent_div_73_td_24_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, UploadAlloyScrapComponent_div_73_th_26_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, UploadAlloyScrapComponent_div_73_td_27_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, UploadAlloyScrapComponent_div_73_th_29_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, UploadAlloyScrapComponent_div_73_td_30_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UploadAlloyScrapComponent_div_73_th_32_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, UploadAlloyScrapComponent_div_73_td_33_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, UploadAlloyScrapComponent_div_73_tr_34_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, UploadAlloyScrapComponent_div_73_tr_35_Template, 1, 0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "mat-paginator", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r12.scrap_surcharge_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumns_scrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumns_scrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
} }
class UploadAlloyScrapComponent {
    constructor(apiString, apiMethod, _snackBar) {
        this.apiString = apiString;
        this.apiMethod = apiMethod;
        this._snackBar = _snackBar;
        this.loading = false;
        this.displayedColumns_wire = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'Customer_ID', 'Internal_Grade'];
        this.displayedColumns_billet = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'WARENEMPFAENGER_NR', 'SEL_NR_MELDUNG', 'dRUCKSPERRE'];
        this.displayedColumns_scrap = [
            'VKORG',
            'COND_TYPE',
            'DST_CH',
            'DIV',
            'Month_year',
            'Model',
            'Amount',
            "Monthly_Deviation",
            "Product"
        ];
        this.paginator = _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"];
        this.sort = _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"];
        this.data = { "inputaction": '' };
        this.selectedFiles = {
            "alloy_surcharge_billet": { file: '', uploadCompleted: false },
            "alloy_surcharge_wire": { file: '', uploadCompleted: false },
            "scrap_surcharge_billet": { file: '', uploadCompleted: false }
        };
        this.loadingRouteConfig = false;
    }
    ngOnInit() {
        this.data = { "inputaction": '' };
        this.myTaksTabChange("Alloy Surcharge Wire");
    }
    //tab change event 
    myTaksTabChange(tabLable) {
        if (tabLable === 'Alloy Surcharge Wire') {
            this.SelectedTab = "alloy_surcharge_wire";
            console.log(this.SelectedTab);
        }
        else if (tabLable === 'Alloy Surcharge Billet') {
            console.log(tabLable);
            this.SelectedTab = "alloy_surcharge_billet";
        }
        else {
            console.log(tabLable);
            this.SelectedTab = "scrap_surcharge_billet";
        }
    }
    // ==================== file change event ========================
    dropFiles(ev) {
        ev.preventDefault();
        this.fileEv = ev;
        let data = ev.dataTransfer.items[0];
        console.log(data);
        if (data) {
            console.log("coming inside");
            // If dropped items aren't files, reject them
            const allowed_types = [
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            ];
            if (!lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](allowed_types, data.type)) {
                let imageError = 'Only xlsx are allowed.';
                this._snackBar.open(imageError, "", {
                    duration: 4000,
                    panelClass: ['error'],
                    horizontalPosition: 'end',
                    verticalPosition: 'bottom',
                });
                return false;
            }
            let obj;
            if (data.kind === 'file') {
                let file = data.getAsFile();
                obj = {
                    fileName: file.name,
                    selectedFile: file,
                };
            }
            if (this.SelectedTab === "alloy_surcharge_billet") {
                this.selectedFiles.alloy_surcharge_billet = {
                    file: obj,
                    uploadCompleted: true
                };
            }
            else if (this.SelectedTab === "alloy_surcharge_wire") {
                this.selectedFiles.alloy_surcharge_wire = {
                    file: obj,
                    uploadCompleted: true
                };
            }
            else {
                this.selectedFiles.scrap_surcharge_billet = {
                    file: obj,
                    uploadCompleted: true
                };
            }
        }
    }
    dragOverHandler(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    onSelectFile(event) {
        this.fileEv = event;
        console.log(event.target.files);
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                let file = event.target.files[i];
                console.log(file);
                let obj = {
                    fileName: file.name,
                    selectedFile: file
                };
                if (this.SelectedTab === "alloy_surcharge_billet") {
                    this.selectedFiles.alloy_surcharge_billet = {
                        file: obj,
                        uploadCompleted: true
                    };
                }
                else if (this.SelectedTab === "alloy_surcharge_wire") {
                    this.selectedFiles.alloy_surcharge_wire = {
                        file: obj,
                        uploadCompleted: true
                    };
                }
                else {
                    this.selectedFiles.scrap_surcharge_billet = {
                        file: obj,
                        uploadCompleted: true
                    };
                }
                // this.selectedFiles.push(obj);
                reader.onload = (event) => {
                };
                reader.readAsDataURL(event.target.files[i]);
                event.target.value = '';
            }
        }
    }
    deleteFile(file, tabName) {
        if (this.SelectedTab === "alloy_surcharge_billet") {
            this.alloy_surcharge_billet = '';
            this.selectedFiles.alloy_surcharge_billet = {
                file: "",
                uploadCompleted: false
            };
        }
        else if (this.SelectedTab === "alloy_surcharge_wire") {
            this.alloy_surcharge_wire = '';
            this.selectedFiles.alloy_surcharge_wire = {
                file: "",
                uploadCompleted: false
            };
        }
        else {
            this.scrap_surcharge_billet = '';
            this.selectedFiles.scrap_surcharge_billet = {
                file: "",
                uploadCompleted: false
            };
        }
        console.log(this.fileEv, "FILE EV ");
        // this.fileEv.target.value = "";
    }
    uploadFiles(uploadDataTo) {
        console.log(uploadDataTo);
        const formData = new FormData();
        let urlString;
        if (uploadDataTo === "alloy_surcharge_billet") {
            formData.append("filename", this.selectedFiles.alloy_surcharge_billet.file.selectedFile);
            urlString = this.apiString.alloy_billet_upload;
        }
        else if (uploadDataTo === "alloy_surcharge_wire") {
            formData.append("filename", this.selectedFiles.alloy_surcharge_wire.file.selectedFile);
            urlString = this.apiString.alloy_wire_upload;
        }
        else {
            formData.append("filename", this.selectedFiles.scrap_surcharge_billet.file.selectedFile);
            urlString = this.apiString.scrap_upload;
        }
        this.loadingRouteConfig = true;
        this.apiMethod.post_request(urlString, formData).subscribe((data) => {
            console.log(data);
            let resultData = data;
            this.loadingRouteConfig = false;
            if (uploadDataTo === "alloy_surcharge_billet") {
                this.alloy_surcharge_billet_data = resultData;
                this.alloy_surcharge_billet = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](JSON.parse(resultData.data));
                setTimeout(() => {
                    this.alloy_surcharge_billet.paginator = this.paginator;
                    this.alloy_surcharge_billet.sort = this.sort;
                }, 3000);
            }
            else if (uploadDataTo === "alloy_surcharge_wire") {
                this.alloy_surcharge_wire_data = resultData;
                this.alloy_surcharge_wire = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](JSON.parse(resultData.data));
                setTimeout(() => {
                    this.alloy_surcharge_wire.paginator = this.paginator;
                    this.alloy_surcharge_wire.sort = this.sort;
                });
            }
            else {
                this.scrap_surcharge_billet_data = resultData;
                this.scrap_surcharge_billet = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](JSON.parse(resultData.data));
                setTimeout(() => {
                    this.scrap_surcharge_billet.paginator = this.paginator;
                    this.scrap_surcharge_billet.sort = this.sort;
                });
            }
            this.apiMethod.popupMessage('success', 'File data read successfully');
        }, error => {
            this.loadingRouteConfig = false;
            this.apiMethod.popupMessage('error', 'Error while reading uploaded file');
        });
    }
    //==========================end===================================
    //filter 
    applyFilter(event, searchFrom) {
        const filterValue = event.target.value;
        console.log(filterValue, this.alloy_surcharge_wire);
        if (searchFrom === "alloy_surcharge_billet") {
            this.alloy_surcharge_billet.filter = filterValue.trim().toLowerCase();
            if (this.alloy_surcharge_billet.paginator) {
                this.alloy_surcharge_billet.paginator.firstPage();
            }
        }
        else if (searchFrom === "alloy_surcharge_wire") {
            this.alloy_surcharge_wire.filter = filterValue.trim().toLowerCase();
            if (this.alloy_surcharge_wire.paginator) {
                this.alloy_surcharge_wire.paginator.firstPage();
            }
        }
        else {
            this.scrap_surcharge_billet.filter = filterValue.trim().toLowerCase();
            if (this.scrap_surcharge_billet.paginator) {
                this.scrap_surcharge_billet.paginator.firstPage();
            }
        }
    }
    //data validate
    validateDataForm(uploadDataTo) {
        let urlString;
        let data;
        if (uploadDataTo === "alloy_surcharge_billet") {
            urlString = this.apiString.alloy_billet_validate;
            data = {
                "billet": JSON.parse(this.alloy_surcharge_billet_data.data),
                "filename": this.alloy_surcharge_billet_data.filename
            };
        }
        else if (uploadDataTo === "alloy_surcharge_wire") {
            urlString = this.apiString.alloy_wire_validate;
            data = {
                "wire": JSON.parse(this.alloy_surcharge_wire_data.data),
                "filename": this.alloy_surcharge_wire_data.filename
            };
        }
        else {
            urlString = this.apiString.scrap_validate;
            data = {
                "scrap": JSON.parse(this.scrap_surcharge_billet_data.data),
                "filename": this.scrap_surcharge_billet_data.filename
            };
        }
        this.loadingRouteConfig = true;
        this.apiMethod.post_request(urlString, data).subscribe((result) => {
            console.log("success");
            this.loadingRouteConfig = false;
            this.apiMethod.popupMessage('success', 'File validated successfully');
        }, error => {
            this.loadingRouteConfig = false;
            this.apiMethod.popupMessage('error', 'Error while validating uploaded file');
        });
    }
}
UploadAlloyScrapComponent.ɵfac = function UploadAlloyScrapComponent_Factory(t) { return new (t || UploadAlloyScrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_5__["CitGlobalConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
UploadAlloyScrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UploadAlloyScrapComponent, selectors: [["app-upload-alloy-scrap"]], viewQuery: function UploadAlloyScrapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 74, vars: 13, consts: [[4, "ngIf"], [3, "selectedTabChange"], ["label", "Alloy Surcharge Wire"], [1, "row", "bg-w"], [1, "col-sm-12", "col-lg-12", "col-md-12", "col-xl-12", "col-12"], [1, "mtb-10"], [1, "height-100"], ["id", "drag_zone", 1, "file-upload-wrapper", 3, "drop", "dragover"], [1, "pointCenter"], [1, "card-drag"], [1, "header"], ["type", "button", "color", "primary", "mat-raised-button", "", 3, "disabled", "click"], ["hidden", "", "type", "file", "id", "file", "accept", ".xls, .xlsx", 3, "change"], ["fileInput2", ""], ["class", "row", 4, "ngIf"], ["label", "Alloy Surcharge Billet"], ["label", "Scrap Surcharge Billet"], [1, "loading-overlay", "is-active"], [1, "signal"], ["mat-list-icon", ""], ["mat-line", ""], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], [1, "row"], [1, "col-6"], [1, "text-left", "mt-10"], ["type", "button", "color", "primary", "mat-raised-button", "", 3, "click"], [1, "text-right", "mt-10"], ["appearance", "outline"], ["matInput", "", 3, "keyup"], ["input", ""], ["matSuffix", ""], [1, "col-12"], [1, "my_offer_table_container"], [1, "text-center", "h-100"], [1, "table-outer-container", "offer_table_container", "position-relative", "h-100"], [1, "table-inner-container", "h-100"], ["mat-table", "", "matSort", "", 1, "custom_table", "order_table", 3, "dataSource"], ["matColumnDef", "VKORG"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "COND_TYPE"], ["matColumnDef", "DST_CH"], ["matColumnDef", "DIV"], ["matColumnDef", "Month_year"], ["matColumnDef", "Amount"], ["matColumnDef", "Customer_ID"], ["matColumnDef", "Internal_Grade"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["type", "button", "color", "primary", "mat-raised-button", "", 1, "text-right", "mt-10", 3, "click"], ["mat-table", "", 1, "custom_table", "order_table", 3, "dataSource"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "WARENEMPFAENGER_NR"], ["matColumnDef", "SEL_NR_MELDUNG"], ["matColumnDef", "dRUCKSPERRE"], ["mat-header-cell", ""], ["matColumnDef", "Model"], ["matColumnDef", "Monthly_Deviation"], ["matColumnDef", "Product"]], template: function UploadAlloyScrapComponent_Template(rf, ctx) { if (rf & 1) {
        const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, UploadAlloyScrapComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedTabChange", function UploadAlloyScrapComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) { return ctx.myTaksTabChange($event.tab.textLabel); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("drop", function UploadAlloyScrapComponent_Template_div_drop_9_listener($event) { return ctx.dropFiles($event); })("dragover", function UploadAlloyScrapComponent_Template_div_dragover_9_listener($event) { return ctx.dragOverHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " you can drag & drop your file here .. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " OR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r121); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Choose file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UploadAlloyScrapComponent_Template_input_change_19_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, UploadAlloyScrapComponent_mat_list_item_23_Template, 13, 1, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, UploadAlloyScrapComponent_div_24_Template, 14, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UploadAlloyScrapComponent_div_25_Template, 34, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("drop", function UploadAlloyScrapComponent_Template_div_drop_33_listener($event) { return ctx.dropFiles($event); })("dragover", function UploadAlloyScrapComponent_Template_div_dragover_33_listener($event) { return ctx.dragOverHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " you can drag & drop your file here .. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " OR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r121); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Choose file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UploadAlloyScrapComponent_Template_input_change_43_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, UploadAlloyScrapComponent_mat_list_item_47_Template, 13, 1, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, UploadAlloyScrapComponent_div_48_Template, 14, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, UploadAlloyScrapComponent_div_49_Template, 37, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("drop", function UploadAlloyScrapComponent_Template_div_drop_57_listener($event) { return ctx.dropFiles($event); })("dragover", function UploadAlloyScrapComponent_Template_div_dragover_57_listener($event) { return ctx.dragOverHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, " you can drag & drop your file here .. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " OR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UploadAlloyScrapComponent_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r121); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " Choose file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UploadAlloyScrapComponent_Template_input_change_67_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, UploadAlloyScrapComponent_mat_list_item_71_Template, 13, 1, "mat-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, UploadAlloyScrapComponent_div_72_Template, 14, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, UploadAlloyScrapComponent_div_73_Template, 37, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingRouteConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.selectedFiles.alloy_surcharge_wire.file != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFiles.alloy_surcharge_wire.uploadCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_wire && ctx.selectedFiles.alloy_surcharge_wire.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_wire && ctx.selectedFiles.alloy_surcharge_wire.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.selectedFiles.alloy_surcharge_billet.file != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFiles.alloy_surcharge_billet.uploadCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_billet && ctx.selectedFiles.alloy_surcharge_billet.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_billet && ctx.selectedFiles.alloy_surcharge_billet.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.selectedFiles.scrap_surcharge_billet.file != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFiles.scrap_surcharge_billet.uploadCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.scrap_surcharge_billet && ctx.selectedFiles.scrap_surcharge_billet.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.scrap_surcharge_billet && ctx.selectedFiles.scrap_surcharge_billet.file);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["@font-face {\n  font-family: \"black\";\n  src: url('Poppins-Black.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"bold\";\n  src: url('Poppins-Bold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"regular\";\n  src: url('Poppins-Regular.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"semi-bold\";\n  src: url('Poppins-SemiBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"light\";\n  src: url('Poppins-Light.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"extra-bold\";\n  src: url('Poppins-ExtraBold.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"italic\";\n  src: url('Poppins-Italic.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"medium\";\n  src: url('Poppins-Medium.ttf') format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"regular\";\n  font-size: 0.875rem;\n}\n.font_weight_bold[_ngcontent-%COMP%] {\n  font-family: \"bold\";\n}\n.color_text[_ngcontent-%COMP%] {\n  color: #41464A !important;\n}\n.warning_bg[_ngcontent-%COMP%] {\n  background-color: #f4dca0;\n}\n.color_white[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.delete[_ngcontent-%COMP%] {\n  color: #f76e6e;\n}\n.copy[_ngcontent-%COMP%] {\n  color: #32a6f3;\n}\n.primary_a[_ngcontent-%COMP%] {\n  color: #1d9de0;\n}\n.no_data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n}\na.offer_id_link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #1d9de0;\n}\na.offer_id_link[_ngcontent-%COMP%]:hover {\n  color: #1d9de0;\n}\n.mat-card[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n#drag_zone[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  margin: auto;\n  padding: 8px;\n  text-align: center;\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  color: black;\n}\n.pointCenter[_ngcontent-%COMP%] {\n  padding: 35px 0;\n  border: 3px dashed #f05b31;\n  text-align: center;\n}\n.test[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9mb250LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi91cGxvYWQtYWxsb3ktc2NyYXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLHdCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7QURLQTtFQUNJLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURNQTtFQUNJLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPQTtFQUNJLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURPQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRE9BO0VBQ0ksbUJBQUE7QUNKSjtBQzFCSTtFQUNJLHlCQUFBO0FENkJSO0FDM0JJO0VBQ0cseUJBQUE7QUQ4QlA7QUM1Qkk7RUFDSSx5QkFBQTtBRCtCUjtBQzdCSTtFQUNJLGNBZEE7QUQ4Q1I7QUM5Qkk7RUFDSSxjQWhCRjtBRGlETjtBQy9CSTtFQUNJLGNBeENDO0FEMEVUO0FBOUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQWlGSjtBQTlFQTtFQUlJLGVBQUE7RUFDQSxjQ2RLO0FENEZUO0FBbEZJO0VBQ0ksY0NYQztBRCtGVDtBQS9FQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWtGSjtBQTlFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtBQWdGSjtBQTlFQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBaUZKO0FBN0VBO0VBQ0ksVUFBQTtBQWdGSiIsImZpbGUiOiJ1cGxvYWQtYWxsb3ktc2NyYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYmxhY2snO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1TZW1pQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbGlnaHQnO1xyXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUG9wcGlucy1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZXh0cmEtYm9sZCc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLUV4dHJhQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnaXRhbGljJztcclxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BvcHBpbnMtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XHJcbiAgICBzcmM6IHVybCgnLi9mb250cy9Qb3BwaW5zLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuLmZvbnRfd2VpZ2h0X2JvbGQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdib2xkJztcclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvY29sb3Iuc2Nzc1wiO1xuLm5vX2RhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5hLm9mZmVyX2lkX2xpbmsge1xuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHByaW1hcnk7XG59XG4ubWF0LWNhcmQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLy9maWxlIHVwbG9hZCBjc3NcbiNkcmFnX3pvbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgLy8gYm9yZGVyOiAycHggZGFzaGVkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5wb2ludENlbnRlciB7XG4gICAgcGFkZGluZzogMzVweCAwO1xuICAgIGJvcmRlcjogM3B4IGRhc2hlZCAjZjA1YjMxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy9cbi50ZXN0IHtcbiAgICBjb2xvcjogcmVkO1xufVxuIiwiQGltcG9ydCAnLi9mb250LnNjc3MnO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHByaW1hcnlCZzojZjNmM2YzO1xyXG4kYmdXaGl0ZTojZmZmZmZmO1xyXG4kYmxhY2s6IzAwMDAwMDtcclxuJHByaW1hcnk6IzFkOWRlMDtcclxuJHByaW1hcnlTaGFkZTojM2FhY2U5O1xyXG4kaW5wdXRCb3JkZXI6I0Q3REZFODtcclxuJGlucHV0Qmc6I0YyRjhGRjtcclxuJGlucHV0UGxhY2Vob2xkZXI6IzQxNDY0QTtcclxuJHRhYmxlQm9yZGVyOiNkZGRkZGQ7XHJcbiR0YWJsZUhlYWRCZzojRUJGMEY2O1xyXG4kdGFibGVIZWFkZXJCb3JkZXI6I0FCQzRFNDtcclxuJHRhYmxlQm9keUJvcmRlcjojRTJFNkU5O1xyXG4kdGFibGVIZWFkQ29sb3I6IzQ1NDk0ZTtcclxuJHRhYmxlQ29sb3I6IzQxNDY0QTtcclxuJGRlbGV0ZUJ0bjojRDkzNDExO1xyXG4kdXBsb2FkQmc6I0Y2RjlGQjtcclxuJG1haW5Db250YWluZXJIZWFkOiM1NjU3NTg7XHJcbiRpbnZhbGlkOnJnYigyNDgsIDk1LCA5NSk7XHJcbiRwcmltYXJ5T3JhbmdlOiNGNDdEMzA7XHJcbiRzY3JvbGxPcmFuZ2U6I2M4MzYwMDtcclxuJGxhYmVsQ29sb3I6cmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4kdGFibGVTaGFkb3c6ICNjMGMwYzA7XHJcbiR0ZW1wbGF0ZV9jb2xvcjojNzk3OTc5O1xyXG4kZGVsZXRlOnJnYigyNDcsIDExMCwgMTEwKTtcclxuJGNvcHk6cmdiKDUwLCAxNjYsIDI0Myk7XHJcbi8vICRhVGFnOiMwMDdiZmY7XHJcbi8vIGRpcmVjdCBjb2xvciBcclxuICAgIC5jb2xvcl90ZXh0IHtcclxuICAgICAgICBjb2xvcjogIzQxNDY0QSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLndhcm5pbmdfYmcge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjRkY2EwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yX3doaXRlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgY29sb3I6ICRkZWxldGU7XHJcbiAgICB9XHJcbiAgICAuY29weSB7XHJcbiAgICAgICAgY29sb3I6ICRjb3B5O1xyXG4gICAgfVxyXG4gICAgLnByaW1hcnlfYSB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG4vLyBsb2dpblxyXG4gICAgJGxvZ2luSW5wdXRCb3JkZXI6IzAzNjBiODtcclxuICAgICRsb2dpbklucHV0UGxhY2Vob2xkZXI6IzA0NTA5NztcclxuXHJcbi8vIHNpZGViYXJcclxuICAgICRzaWRlQmFySW5hY3RpdmU6IzZlNmY3MDtcclxuICAgICRzaWRlYmFyU2hhZG93OiMwMjNFNkQyOTtcclxuXHJcbi8vIGhlYWRlclxyXG4gICAgJGhlYWRlclNoYWRvdzojMDAwMDAwMjk7XHJcblxyXG4vLyBkYXNoYm9hcmRcclxuICAgICRjYXJkQ291bnQ6IzU3NTM1MztcclxuICAgICRjYXJkTmFtZTojODg4Rjk0O1xyXG4gICAgLy8gY2FyZHNcclxuICAgICAgICAkY29weV9jYXJkczogI2U4YmZiYjtcclxuICAgICAgICAkd2FybmluZ19jYXJkczojZjRkY2EwO1xyXG4gICAgICAgICRjb25maXJtZWRfY2FyZHM6I2Q0ZTNiYjtcclxuICAgICAgICAkYmx1ZV9jYXJkczojYmJkOWViO1xyXG4gICAgICAgICR2aW9sZXRfY2FyZHM6I2RhYzVkNTtcclxuXHJcbi8vIGR1bW15IGlucHV0IGJvcmRlclxyXG4gICAgJGR1bW15SW5wdXRfYm9yZGVyOiM5ODk4OTg7XHJcblxyXG4vLyBvcmRlcl90YWJsZVxyXG4gICAgJGVkaXQ6IzA4MzU5NjtcclxuICAgICRhcHByb3ZlOnJnYig5LCAxNDYsIDYxKTtcclxuICAgICRvcmRlcl9jbG9zZTpyZ2IoMjQwLCA4MiwgODIpO1xyXG5cclxuLy9teSB0YXNrXHJcbiAgICAkbXlUYXNrMTogI2U4YmZiYjtcclxuICAgICRteVRhc2syOiNmNGRjYTA7XHJcbiAgICAkbXlUYXNrMzojZDRlM2JiO1xyXG4gICAgJG15VGFzazQ6I2JiZDllYjtcclxuXHJcbi8vIG15IG9mZmVyc1xyXG4gICAgJG9mZmVyQ291bnQ6IzVkNWQ1ZDtcclxuXHJcbi8vIHRhYmxlIGRldGFpbHMgXHJcbiAgICAkZjVmNWY1OiNmNWY1ZjU7XHJcbiAgICAkaW5wdXRPbmU6I2Y2YzNjNDtcclxuICAgICRpbnB1dFR3bzojZjZlZWFhO1xyXG4gICAgJGlucHV0VGhyZWU6I2M2ZjRiYztcclxuICAgICR5ZWxsb3dJbnB1dDojZmNmYmYwOyJdfQ== */"] });


/***/ }),

/***/ "g0Zk":
/*!*****************************************************************!*\
  !*** ./src/app/views/alloy-scrap/alloy-scrap-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AlloyScrapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlloyScrapRoutingModule", function() { return AlloyScrapRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common-use/sidebar/sidebar.component */ "kF05");
/* harmony import */ var _files_detailed_preview_files_detailed_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files-detailed-preview/files-detailed-preview.component */ "kfpF");
/* harmony import */ var _history_alloy_scrap_history_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-alloy-scrap/history-alloy-scrap.component */ "+XIG");
/* harmony import */ var _upload_alloy_scrap_upload_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-alloy-scrap/upload-alloy-scrap.component */ "Lt4x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: src_app_common_use_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"],
        children: [
            {
                path: 'upload',
                component: _upload_alloy_scrap_upload_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_4__["UploadAlloyScrapComponent"]
            },
            {
                path: 'history',
                children: [
                    {
                        path: '',
                        component: _history_alloy_scrap_history_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_3__["HistoryAlloyScrapComponent"],
                    },
                    {
                        path: "fileDetails/:fileDetails",
                        component: _files_detailed_preview_files_detailed_preview_component__WEBPACK_IMPORTED_MODULE_2__["FilesDetailedPreviewComponent"]
                    }
                ]
            }
        ]
    }
];
class AlloyScrapRoutingModule {
}
AlloyScrapRoutingModule.ɵfac = function AlloyScrapRoutingModule_Factory(t) { return new (t || AlloyScrapRoutingModule)(); };
AlloyScrapRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AlloyScrapRoutingModule });
AlloyScrapRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AlloyScrapRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ghUo":
/*!*********************************************************!*\
  !*** ./src/app/views/alloy-scrap/alloy-scrap.module.ts ***!
  \*********************************************************/
/*! exports provided: AlloyScrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlloyScrapModule", function() { return AlloyScrapModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alloy_scrap_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alloy-scrap-routing.module */ "g0Zk");
/* harmony import */ var _alloy_scrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alloy-scrap.component */ "17Hi");
/* harmony import */ var _upload_alloy_scrap_upload_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-alloy-scrap/upload-alloy-scrap.component */ "Lt4x");
/* harmony import */ var _history_alloy_scrap_history_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-alloy-scrap/history-alloy-scrap.component */ "+XIG");
/* harmony import */ var src_app_materials_materials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/materials/materials.module */ "bZ3k");
/* harmony import */ var _files_detailed_preview_files_detailed_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files-detailed-preview/files-detailed-preview.component */ "kfpF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AlloyScrapModule {
}
AlloyScrapModule.ɵfac = function AlloyScrapModule_Factory(t) { return new (t || AlloyScrapModule)(); };
AlloyScrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AlloyScrapModule });
AlloyScrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _alloy_scrap_routing_module__WEBPACK_IMPORTED_MODULE_1__["AlloyScrapRoutingModule"],
            src_app_materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AlloyScrapModule, { declarations: [_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_2__["AlloyScrapComponent"],
        _upload_alloy_scrap_upload_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_3__["UploadAlloyScrapComponent"],
        _history_alloy_scrap_history_alloy_scrap_component__WEBPACK_IMPORTED_MODULE_4__["HistoryAlloyScrapComponent"],
        _files_detailed_preview_files_detailed_preview_component__WEBPACK_IMPORTED_MODULE_6__["FilesDetailedPreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _alloy_scrap_routing_module__WEBPACK_IMPORTED_MODULE_1__["AlloyScrapRoutingModule"],
        src_app_materials_materials_module__WEBPACK_IMPORTED_MODULE_5__["MaterialsModule"]] }); })();


/***/ }),

/***/ "kfpF":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/alloy-scrap/files-detailed-preview/files-detailed-preview.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FilesDetailedPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDetailedPreviewComponent", function() { return FilesDetailedPreviewComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-collection */ "Tu6q");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");















function FilesDetailedPreviewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function FilesDetailedPreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesDetailedPreviewComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function FilesDetailedPreviewComponent_div_2_Template_input_keyup_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.applyFilter($event, "alloy_surcharge_wire"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VKORG");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r29 == null ? null : element_r29.VKORG, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " COND_TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r30 == null ? null : element_r30.COND_TYPE, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DST_CH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r31 == null ? null : element_r31.DST_CH, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DIV");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r32 == null ? null : element_r32.DIV, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Month_year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r33 == null ? null : element_r33.Month_year, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r34 == null ? null : element_r34.Amount, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Customer_ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r35 == null ? null : element_r35.Customer_ID, " ");
} }
function FilesDetailedPreviewComponent_div_3_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Internal_Grade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_3_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r36 == null ? null : element_r36.Internal_Grade, " ");
} }
function FilesDetailedPreviewComponent_div_3_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 34);
} }
function FilesDetailedPreviewComponent_div_3_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 35);
} }
const _c0 = function () { return [10, 30, 50, 100]; };
function FilesDetailedPreviewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FilesDetailedPreviewComponent_div_3_th_8_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FilesDetailedPreviewComponent_div_3_td_9_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FilesDetailedPreviewComponent_div_3_th_11_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FilesDetailedPreviewComponent_div_3_td_12_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FilesDetailedPreviewComponent_div_3_th_14_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FilesDetailedPreviewComponent_div_3_td_15_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, FilesDetailedPreviewComponent_div_3_th_17_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FilesDetailedPreviewComponent_div_3_td_18_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FilesDetailedPreviewComponent_div_3_th_20_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, FilesDetailedPreviewComponent_div_3_td_21_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](22, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, FilesDetailedPreviewComponent_div_3_th_23_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FilesDetailedPreviewComponent_div_3_td_24_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](25, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, FilesDetailedPreviewComponent_div_3_th_26_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, FilesDetailedPreviewComponent_div_3_td_27_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](28, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, FilesDetailedPreviewComponent_div_3_th_29_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, FilesDetailedPreviewComponent_div_3_td_30_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, FilesDetailedPreviewComponent_div_3_tr_31_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, FilesDetailedPreviewComponent_div_3_tr_32_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r2.alloy_surcharge_wire);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns_wire);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns_wire);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
} }
function FilesDetailedPreviewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesDetailedPreviewComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function FilesDetailedPreviewComponent_div_4_Template_input_keyup_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.applyFilter($event, "alloy_surcharge_billet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VKORG");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r62 == null ? null : element_r62.VKORG, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " COND_TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r63 == null ? null : element_r63.COND_TYPE, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DST_CH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r64 == null ? null : element_r64.DST_CH, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DIV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r65 == null ? null : element_r65.DIV, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Month_year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r66 == null ? null : element_r66.Month_year, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r67 == null ? null : element_r67.Amount, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " WARENEMPFAENGER_NR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r68 == null ? null : element_r68.WARENEMPFAENGER_NR, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Materialnr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r69 == null ? null : element_r69.Materialnr, " ");
} }
function FilesDetailedPreviewComponent_div_5_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DRUCKSPERRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_5_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r70 == null ? null : element_r70.dRUCKSPERRE, " ");
} }
function FilesDetailedPreviewComponent_div_5_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 34);
} }
function FilesDetailedPreviewComponent_div_5_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 35);
} }
function FilesDetailedPreviewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FilesDetailedPreviewComponent_div_5_th_8_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FilesDetailedPreviewComponent_div_5_td_9_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FilesDetailedPreviewComponent_div_5_th_11_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FilesDetailedPreviewComponent_div_5_td_12_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FilesDetailedPreviewComponent_div_5_th_14_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FilesDetailedPreviewComponent_div_5_td_15_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, FilesDetailedPreviewComponent_div_5_th_17_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FilesDetailedPreviewComponent_div_5_td_18_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FilesDetailedPreviewComponent_div_5_th_20_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, FilesDetailedPreviewComponent_div_5_td_21_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](22, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, FilesDetailedPreviewComponent_div_5_th_23_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FilesDetailedPreviewComponent_div_5_td_24_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](25, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, FilesDetailedPreviewComponent_div_5_th_26_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, FilesDetailedPreviewComponent_div_5_td_27_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](28, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, FilesDetailedPreviewComponent_div_5_th_29_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, FilesDetailedPreviewComponent_div_5_td_30_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](31, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, FilesDetailedPreviewComponent_div_5_th_32_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, FilesDetailedPreviewComponent_div_5_td_33_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, FilesDetailedPreviewComponent_div_5_tr_34_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, FilesDetailedPreviewComponent_div_5_tr_35_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r4.alloy_surcharge_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
} }
function FilesDetailedPreviewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesDetailedPreviewComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r73.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function FilesDetailedPreviewComponent_div_6_Template_input_keyup_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r75.applyFilter($event, "scrap_surcharge_billet"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " VKORG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r96 == null ? null : element_r96.VKORG, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " COND_TYPE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r97 == null ? null : element_r97.COND_TYPE, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DST_CH");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r98 == null ? null : element_r98.DST_CH, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " DIV");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r99 == null ? null : element_r99.DIV, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Month_year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r100 == null ? null : element_r100.Month_year, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r101 == null ? null : element_r101.Model, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Monthly Deviation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r102 == null ? null : element_r102.Monthly_Deviation, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r103 == null ? null : element_r103.Product, " ");
} }
function FilesDetailedPreviewComponent_div_7_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FilesDetailedPreviewComponent_div_7_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r104 == null ? null : element_r104.Amount, " ");
} }
function FilesDetailedPreviewComponent_div_7_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 34);
} }
function FilesDetailedPreviewComponent_div_7_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 35);
} }
function FilesDetailedPreviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](7, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FilesDetailedPreviewComponent_div_7_th_8_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FilesDetailedPreviewComponent_div_7_td_9_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FilesDetailedPreviewComponent_div_7_th_11_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FilesDetailedPreviewComponent_div_7_td_12_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FilesDetailedPreviewComponent_div_7_th_14_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FilesDetailedPreviewComponent_div_7_td_15_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, FilesDetailedPreviewComponent_div_7_th_17_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FilesDetailedPreviewComponent_div_7_td_18_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FilesDetailedPreviewComponent_div_7_th_20_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, FilesDetailedPreviewComponent_div_7_td_21_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](22, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, FilesDetailedPreviewComponent_div_7_th_23_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, FilesDetailedPreviewComponent_div_7_td_24_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](25, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, FilesDetailedPreviewComponent_div_7_th_26_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, FilesDetailedPreviewComponent_div_7_td_27_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](28, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, FilesDetailedPreviewComponent_div_7_th_29_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, FilesDetailedPreviewComponent_div_7_td_30_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](31, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, FilesDetailedPreviewComponent_div_7_th_32_Template, 2, 0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, FilesDetailedPreviewComponent_div_7_td_33_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, FilesDetailedPreviewComponent_div_7_tr_34_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, FilesDetailedPreviewComponent_div_7_tr_35_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r6.scrap_surcharge_billet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.displayedColumns_scrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r6.displayedColumns_scrap);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
} }
class FilesDetailedPreviewComponent {
    constructor(Route, router, apiString, apiMethod, location) {
        this.Route = Route;
        this.router = router;
        this.apiString = apiString;
        this.apiMethod = apiMethod;
        this.location = location;
        this.loadingRouteConfig = false;
        this.displayedColumns_wire = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'Customer_ID', 'Internal_Grade'];
        this.displayedColumns_billet = ['VKORG', 'COND_TYPE', 'DST_CH', 'DIV', 'Month_year', 'Amount', 'WARENEMPFAENGER_NR', 'Materialnr', 'dRUCKSPERRE'];
        this.displayedColumns_scrap = [
            'VKORG',
            'COND_TYPE',
            'DST_CH',
            'DIV',
            'Month_year',
            'Model',
            'Amount',
            "Monthly_Deviation",
            "Product"
        ];
        this.paginator = _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"];
        this.sort = _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"];
    }
    ngOnInit() {
        this.Route.paramMap.subscribe(params => {
            this.fileDetails = params.get('fileDetails');
        });
        if (this.fileDetails) {
            console.log(atob(this.fileDetails));
            this.getDetails();
        }
    }
    getDetails() {
        let requiredData = atob(this.fileDetails).split('&');
        let body = {
            filename: requiredData[0],
            condition_type: requiredData[1],
            Batch_ID: requiredData[2]
        };
        this.loadingRouteConfig = true;
        this.apiMethod.get_request_Param(this.apiString.get_history_file_data, body).subscribe(result => {
            console.log(result);
            this.loadingRouteConfig = false;
            let resultData = result;
            let tablename = Object.keys(result);
            console.log(tablename);
            if (tablename[0] === 'table_wire') {
                this.alloy_surcharge_wire = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]((resultData.table_wire));
                setTimeout(() => {
                    this.alloy_surcharge_wire.paginator = this.paginator;
                    this.alloy_surcharge_wire.sort = this.sort;
                });
            }
            if (tablename[0] === 'table_billet') {
                this.alloy_surcharge_billet = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]((resultData.table_billet));
                setTimeout(() => {
                    this.alloy_surcharge_billet.paginator = this.paginator;
                    this.alloy_surcharge_billet.sort = this.sort;
                });
            }
            if (tablename[0] === 'table_scrap') {
                this.scrap_surcharge_billet = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]((resultData.table_scrap));
                setTimeout(() => {
                    this.scrap_surcharge_billet.paginator = this.paginator;
                    this.scrap_surcharge_billet.sort = this.sort;
                });
            }
        }, error => {
            this.loadingRouteConfig = false;
            this.apiMethod.popupMessage('error', 'Error while fatching file details');
        });
    }
    applyFilter(event, searchFrom) {
        const filterValue = event.target.value;
        console.log(filterValue, this.alloy_surcharge_wire);
        if (searchFrom === "alloy_surcharge_billet") {
            this.alloy_surcharge_billet.filter = filterValue.trim().toLowerCase();
            if (this.alloy_surcharge_billet.paginator) {
                this.alloy_surcharge_billet.paginator.firstPage();
            }
        }
        if (searchFrom === "alloy_surcharge_wire") {
            this.alloy_surcharge_wire.filter = filterValue.trim().toLowerCase();
            if (this.alloy_surcharge_wire.paginator) {
                this.alloy_surcharge_wire.paginator.firstPage();
            }
        }
        if (searchFrom === "scrap_surcharge_billet") {
            this.scrap_surcharge_billet.filter = filterValue.trim().toLowerCase();
            if (this.scrap_surcharge_billet.paginator) {
                this.scrap_surcharge_billet.paginator.firstPage();
            }
        }
    }
    back() {
        this.location.back();
    }
}
FilesDetailedPreviewComponent.ɵfac = function FilesDetailedPreviewComponent_Factory(t) { return new (t || FilesDetailedPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_collection__WEBPACK_IMPORTED_MODULE_5__["CitGlobalConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"])); };
FilesDetailedPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FilesDetailedPreviewComponent, selectors: [["app-files-detailed-preview"]], viewQuery: function FilesDetailedPreviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 8, vars: 7, consts: [[4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "loading-overlay", "is-active"], [1, "signal"], [1, "row"], [1, "col-6"], [1, "text-left", "mt-10"], ["type", "button", "color", "primary", "mat-raised-button", "", 3, "click"], [1, "fa", "fa-arrow-alt-circle-left"], [1, "text-right", "mt-10"], ["appearance", "outline"], ["matInput", "", 3, "keyup"], ["input", ""], [1, "col-12"], [1, "my_offer_table_container"], [1, "text-center", "h-100"], [1, "table-outer-container", "offer_table_container", "position-relative", "h-100"], [1, "table-inner-container", "h-100"], ["mat-table", "", "matSort", "", 1, "custom_table", "order_table", 3, "dataSource"], ["matColumnDef", "VKORG"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "COND_TYPE"], ["matColumnDef", "DST_CH"], ["matColumnDef", "DIV"], ["matColumnDef", "Month_year"], ["matColumnDef", "Amount"], ["matColumnDef", "Customer_ID"], ["matColumnDef", "Internal_Grade"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", 1, "custom_table", "order_table", 3, "dataSource"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "WARENEMPFAENGER_NR"], ["matColumnDef", "Materialnr"], ["matColumnDef", "dRUCKSPERRE"], ["mat-header-cell", ""], ["matColumnDef", "Model"], ["matColumnDef", "Monthly_Deviation"], ["matColumnDef", "Product"]], template: function FilesDetailedPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FilesDetailedPreviewComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FilesDetailedPreviewComponent_div_2_Template, 13, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FilesDetailedPreviewComponent_div_3_Template, 34, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FilesDetailedPreviewComponent_div_4_Template, 13, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FilesDetailedPreviewComponent_div_5_Template, 37, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FilesDetailedPreviewComponent_div_6_Template, 13, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FilesDetailedPreviewComponent_div_7_Template, 37, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loadingRouteConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_wire);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_wire);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_billet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alloy_surcharge_billet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrap_surcharge_billet);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrap_surcharge_billet);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlcy1kZXRhaWxlZC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=views-alloy-scrap-alloy-scrap-module.js.map