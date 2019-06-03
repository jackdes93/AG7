(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-adminpage-adminpage-module"],{

/***/ "./src/app/components/adminpage/adminpage-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/adminpage/adminpage-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AdminpageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageRoutingModule", function() { return AdminpageRoutingModule; });
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userpage/userpage.component */ "./src/app/components/userpage/userpage.component.ts");
/* harmony import */ var _devicepage_devicepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../devicepage/devicepage.component */ "./src/app/components/devicepage/devicepage.component.ts");
/* harmony import */ var _inforuserpage_inforuserpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inforuserpage/inforuserpage.component */ "./src/app/components/inforuserpage/inforuserpage.component.ts");




var AdminpageRoutingModule = [
    {
        path: 'dashboard',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__["HomepageComponent"]
    },
    {
        path: 'users',
        component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_1__["UserpageComponent"]
    },
    {
        path: 'devices',
        component: _devicepage_devicepage_component__WEBPACK_IMPORTED_MODULE_2__["DevicepageComponent"]
    },
    {
        path: 'info',
        component: _inforuserpage_inforuserpage_component__WEBPACK_IMPORTED_MODULE_3__["InforuserpageComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/adminpage/adminpage.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/adminpage/adminpage.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminpageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageModule", function() { return AdminpageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _adminpage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminpage-routing.module */ "./src/app/components/adminpage/adminpage-routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../userpage/userpage.component */ "./src/app/components/userpage/userpage.component.ts");
/* harmony import */ var _detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../detail-user/detail-user.component */ "./src/app/components/detail-user/detail-user.component.ts");
/* harmony import */ var _devicepage_devicepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../devicepage/devicepage.component */ "./src/app/components/devicepage/devicepage.component.ts");
/* harmony import */ var _detail_device_detail_device_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../detail-device/detail-device.component */ "./src/app/components/detail-device/detail-device.component.ts");
/* harmony import */ var _inforuserpage_inforuserpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../inforuserpage/inforuserpage.component */ "./src/app/components/inforuserpage/inforuserpage.component.ts");
/* harmony import */ var _formadddevice_formadddevice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formadddevice/formadddevice.component */ "./src/app/components/formadddevice/formadddevice.component.ts");
/* harmony import */ var _formadduser_formadduser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../formadduser/formadduser.component */ "./src/app/components/formadduser/formadduser.component.ts");
/* harmony import */ var _alerbox_alerbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../alerbox/alerbox.component */ "./src/app/components/alerbox/alerbox.component.ts");
















var AdminpageModule = /** @class */ (function () {
    function AdminpageModule() {
    }
    AdminpageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_8__["UserpageComponent"],
                _detail_user_detail_user_component__WEBPACK_IMPORTED_MODULE_9__["DetailUserComponent"],
                _detail_device_detail_device_component__WEBPACK_IMPORTED_MODULE_11__["DetailDeviceComponent"],
                _devicepage_devicepage_component__WEBPACK_IMPORTED_MODULE_10__["DevicepageComponent"],
                _inforuserpage_inforuserpage_component__WEBPACK_IMPORTED_MODULE_12__["InforuserpageComponent"],
                _formadddevice_formadddevice_component__WEBPACK_IMPORTED_MODULE_13__["FormadddeviceComponent"],
                _formadduser_formadduser_component__WEBPACK_IMPORTED_MODULE_14__["FormadduserComponent"],
                _alerbox_alerbox_component__WEBPACK_IMPORTED_MODULE_15__["AlerboxComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_adminpage_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminpageRoutingModule"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]]
        })
    ], AdminpageModule);
    return AdminpageModule;
}());



/***/ }),

/***/ "./src/app/components/alerbox/alerbox.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/alerbox/alerbox.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcmJveC9hbGVyYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/alerbox/alerbox.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/alerbox/alerbox.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-show background-opacity\">\n  <div class=\"block-detail\" style=\"width: 100%;\">\n    <div class=\"block block-title header-form\" style=\"width:100%\">\n      <h3 class=\"title-form retry\">ALERT</h3>\n    </div>\n    <div class=\"block block-info\">\n      <div class=\"form-group\">\n        <p>{{data.message}}</p>\n      </div>\n      <div class=\"form-group flex-row\">\n        <button class=\"btn btn-save\" (click)=\"handle_close()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/alerbox/alerbox.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/alerbox/alerbox.component.ts ***!
  \*********************************************************/
/*! exports provided: AlerboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlerboxComponent", function() { return AlerboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlerboxComponent = /** @class */ (function () {
    function AlerboxComponent() {
        this.handle_event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = {
            status: false,
            message: ''
        };
    }
    AlerboxComponent.prototype.ngOnInit = function () {
    };
    AlerboxComponent.prototype.handle_close = function () {
        this.handle_event.emit({ 'status': this.data.status, 'close': false });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlerboxComponent.prototype, "handle_event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlerboxComponent.prototype, "data", void 0);
    AlerboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerbox',
            template: __webpack_require__(/*! ./alerbox.component.html */ "./src/app/components/alerbox/alerbox.component.html"),
            styles: [__webpack_require__(/*! ./alerbox.component.css */ "./src/app/components/alerbox/alerbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlerboxComponent);
    return AlerboxComponent;
}());



/***/ }),

/***/ "./src/app/components/detail-device/detail-device.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/detail-device/detail-device.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWRldmljZS9kZXRhaWwtZGV2aWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/detail-device/detail-device.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/detail-device/detail-device.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-show background-opacity\" *ngIf=\"device\">\n    <div class=\"block-detail\" >\n      <div class=\"block block-title header-form\" style=\"width:100%\">\n        <h3 class=\"title-form retry\">Thông Tin Device</h3>\n        <div class=\"btn btn-close\" (click)=\"onSelect()\">X</div>\n      </div>\n      <form #formeditdevice=\"ngForm\">\n        <div class=\"block block-info\">\n          <div class=\"form-group flex-row\" style=\"width:100%; justify-content: space-between\"> \n            <p class=\"label text-small\" style=\"width: 36px;\">ID</p>\n            <p class=\"text-center\">{{device._id}}</p>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group flex-row\" style=\"width:100%;\"> \n              <p class=\"label text-small\" style=\"width: 100px;\">IP</p>\n              <input type=\"text\" class=\"text-center\" [readonly]=\"readonly\" name=\"ip\" placeholder=\"0.0.0.0\" [(ngModel)]=\"device.ip\" #ip=\"ngModel\" required pattern=\"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$\">\n            </div>\n            <p class=\"label error\" *ngIf=\"ip.errors?.required && ip.touched\">Ip address is required</p>\n            <p class=\"label error\" *ngIf=\"ip.errors?.pattern\"> Id address is not correct format</p>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group flex-row\" style=\"width:100%;\"> \n              <p class=\"label text-small\" style=\"width: 100px;\">Phone</p>\n              <input type=\"text\" class=\"text-center\" [readonly]=\"readonly\" name=\"phonenumber\" placeholder=\"Phone number\" [(ngModel)]=\"device.phone_number\" #phonenumber=\"ngModel\" required maxlength=\"10\" pattern=\"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$\">\n            </div>\n            <p class=\"label error\" *ngIf=\"phonenumber.errors?.required && phonenumber.touched\">Phone number is required</p>\n            <p class=\"label error\" *ngIf=\"phonenumber.errors?.pattern\"> Phone number is not correct format</p>\n            <p class=\"label error\" *ngIf=\"phonenumber.errors?.maxlength\"> Phone number is least 10 characters</p>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group flex-row\" style=\"width:100%;\"> \n              <p class=\"label text-small\" style=\"width: 100px;\">Address</p>\n              <input type=\"text\" class=\"text-center\" [readonly]=\"readonly\" name=\"address\" placeholder=\"Address\" [(ngModel)]=\"device.address\" #address=\"ngModel\" required>\n            </div>\n            <p class=\"label error\" *ngIf=\"address.errors?.required && address.touched\">Address is required</p>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"form-group flex-row\" style=\"width: 100%;\">\n                <p class=\"label text-small\" style=\"width: 100px;\">Sensor</p>\n                <input type=\"text\" class=\"text-center\" readonly name=\"sensor\" placeholder=\"sensor_status\" [(ngModel)]=\"device.sensor_status\" #sensor=\"ngModel\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <div class=\"form-group flex-row\" style=\"width: 100%;\">\n                  <p class=\"label text-small\" style=\"width: 100px;\">Fslim</p>\n                  <input type=\"text\" class=\"text-center\" readonly name=\"fslim\" placeholder=\"fslim\" [(ngModel)]=\"device.fslim_status\" #fslim=\"ngModel\" >\n              </div>\n            </div>\n          <div class=\"form-group flex-row\">\n            <button class=\"btn btn-cancle\" (click)=\"onSelect()\">CANCLE</button>\n            <button class=\"btn btn-save\" (click)=\"edit_info()\" *ngIf=\"readonly\" >EDIT</button>\n            <button class=\"btn btn-save\" (click)=\"update_info()\" *ngIf=\"!readonly\" [disabled]=\"!formeditdevice.form.valid\">SAVE</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/detail-device/detail-device.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/detail-device/detail-device.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDeviceComponent", function() { return DetailDeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Device */ "./src/app/models/Device.ts");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");




var DetailDeviceComponent = /** @class */ (function () {
    function DetailDeviceComponent(issueService) {
        this.issueService = issueService;
        this.handle_show = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.readonly = true;
    }
    DetailDeviceComponent.prototype.ngOnInit = function () {
    };
    DetailDeviceComponent.prototype.onSelect = function () {
        this.device = null;
        this.handle_show.emit(null);
        this.readonly = true;
    };
    DetailDeviceComponent.prototype.edit_info = function () {
        this.readonly = false;
    };
    DetailDeviceComponent.prototype.update_info = function () {
        var _this = this;
        console.log('aaa');
        this.issueService.handle_update_device(this.device._id, this.device).subscribe(function (issue) {
            if (issue["status"] == 200) {
                _this.readonly = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Device__WEBPACK_IMPORTED_MODULE_2__["Device"])
    ], DetailDeviceComponent.prototype, "device", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailDeviceComponent.prototype, "errors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailDeviceComponent.prototype, "handle_show", void 0);
    DetailDeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-device',
            template: __webpack_require__(/*! ./detail-device.component.html */ "./src/app/components/detail-device/detail-device.component.html"),
            styles: [__webpack_require__(/*! ./detail-device.component.css */ "./src/app/components/detail-device/detail-device.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"]])
    ], DetailDeviceComponent);
    return DetailDeviceComponent;
}());



/***/ }),

/***/ "./src/app/components/detail-user/detail-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/detail-user/detail-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLXVzZXIvZGV0YWlsLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/detail-user/detail-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-user/detail-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-show background-opacity\" *ngIf=\"user\">\n  <div class=\"block-detail\" >\n    <form #formdetailuser=\"ngForm\">\n      <div class=\"block block-title header-form\" style=\"width:100%\">\n        <h3 class=\"title-form retry\">Thông Tin User</h3>\n        <div class=\"btn btn-close\" (click)=\"onSelect()\">X</div>\n      </div>\n      <div class=\"block block-info\">\n        <div class=\"form-group flex-row\" style=\"width:100%; justify-content: space-between\"> \n          <p class=\"label text-small\" style=\"width: 36px;\">ID</p>\n          <p class=\"text-center\">{{user._id}}</p>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-group flex-row\" style=\"width:100%;\"> \n            <p class=\"label text-small\" style=\"width: 100px;\">Email</p>\n            <input type=\"text\" class=\"text-center\" [readonly]=\"readonly\" name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\n          </div>\n          <p class=\"label error\" *ngIf=\"email.errors?.required && email.touched\">Email is required</p>\n          <p class=\"label error\" *ngIf=\"email.errors?.pattern\">Email is not correct format</p>\n        </div>\n        <div class=\"form-group flex-row\" style=\"width:100%;\"> \n          <p class=\"label text-small\" style=\"width: 100px;\">Username</p>\n          <input type=\"text\" class=\"text-center\" readonly value=\"{{user.user_name}}\">\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-group flex-row\" style=\"width:100%;\"> \n            <p class=\"label text-small\" style=\"width: 100px;\">Full Name</p>\n            <input type=\"text\" class=\"text-center\" [readonly]=\"readonly\" name=\"full_name\" [(ngModel)]=\"user.full_name\" #full_name=\"ngModel\" required>\n          </div>\n          <p class=\"label error\" *ngIf=\"full_name.errors?.required && full_name.touched\">Full name is required</p>\n        </div>\n        <div class=\"form-group flex-row\">\n          <button class=\"btn btn-cancle\" (click)=\"onSelect()\">CANCLE</button>\n          <button class=\"btn btn-save\" (click)=\"edit_info()\" *ngIf=\"readonly\">EDIT</button>\n          <button class=\"btn btn-save\" (click)=\"update_info()\" *ngIf=\"!readonly\">SAVE</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/detail-user/detail-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-user/detail-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailUserComponent", function() { return DetailUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");




var DetailUserComponent = /** @class */ (function () {
    function DetailUserComponent(issueService) {
        this.issueService = issueService;
        this.handleShowChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.readonly = true;
        this.property_update = [];
    }
    DetailUserComponent.prototype.ngOnInit = function () {
    };
    DetailUserComponent.prototype.onSelect = function () {
        this.user = null;
        this.handleShowChange.emit(null);
        this.readonly = true;
    };
    DetailUserComponent.prototype.edit_info = function () {
        this.readonly = false;
    };
    DetailUserComponent.prototype.update_info = function () {
        var _this = this;
        this.issueService.handle_update_user(this.user._id, this.user).subscribe(function (issue) {
            if (issue['status'] == 200) {
                _this.readonly = true;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], DetailUserComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailUserComponent.prototype, "handleShowChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailUserComponent.prototype, "errors", void 0);
    DetailUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-user',
            template: __webpack_require__(/*! ./detail-user.component.html */ "./src/app/components/detail-user/detail-user.component.html"),
            styles: [__webpack_require__(/*! ./detail-user.component.css */ "./src/app/components/detail-user/detail-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"]])
    ], DetailUserComponent);
    return DetailUserComponent;
}());



/***/ }),

/***/ "./src/app/components/devicepage/devicepage.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/devicepage/devicepage.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV2aWNlcGFnZS9kZXZpY2VwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/devicepage/devicepage.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/devicepage/devicepage.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-container\">\n    <div class=\"content\">\n      <div class=\"block block-list background-gray\" >\n        <div class=\"block form-group\" *ngIf=\"!devices\">\n          <p class=\"title-no-data text-uppercase\">Không có dữ liệu</p>\n        </div>\n        <div class=\"block block-items \">\n          <div class=\"item box-shadow-arround\" *ngFor=\"let device of devices\" (click)=\"onSelect(device)\">\n            <div class=\"form-group\" style=\"align-items: flex-start; justify-content: flex-start;\">\n              <p class=\"text-normal\">{{device._id}}</p>\n            </div>\n            <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n              <i class=\"fas fa-wifi color-black box-content\"></i>\n              <p class=\"text-normal\">{{device.ip}}</p>\n            </div>\n            <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n              <i class=\"fas fa-mobile-alt color-black box-content\"></i>\n              <p class=\"text-normal\">{{device.phone_number}}</p>\n            </div>\n            <div class=\"form-group flex-row\" style=\"align-items: flex-start;\">\n              <i class=\"fas fa-map-marker-alt color-black box-content\"></i>\n              <p class=\"text-normal text-overflow \">{{device.address}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn btn-add primary-btn-background\" (click)=\"handle_add_device()\">\n        <span><i class=\"fas fa-plus\"></i></span>\n      </div>\n      <app-detail-device [device]=\"device_selected\" (handle_show)=\"handleClose($event)\"></app-detail-device>\n      <app-formadddevice *ngIf=\"add_new_device\" (handle_show)=\"handleClose($event)\" (transfer_new_device)=\"handle_new_device($event)\"></app-formadddevice>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/devicepage/devicepage.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/devicepage/devicepage.component.ts ***!
  \***************************************************************/
/*! exports provided: DevicepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicepageComponent", function() { return DevicepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");



var DevicepageComponent = /** @class */ (function () {
    function DevicepageComponent(issueService) {
        this.issueService = issueService;
        this.add_new_device = false;
    }
    DevicepageComponent.prototype.ngOnInit = function () {
        this.getDevices();
    };
    DevicepageComponent.prototype.getDevices = function () {
        var _this = this;
        this.issueService.handle_get_devices().subscribe(function (issue) {
            return _this.devices = (issue["status"] == 200) ? issue["devices"] : [];
        });
    };
    DevicepageComponent.prototype.onSelect = function (device) {
        this.device_selected = device;
    };
    DevicepageComponent.prototype.handleClose = function ($event) {
        this.device_selected = $event;
        this.add_new_device = $event;
    };
    DevicepageComponent.prototype.handle_add_device = function () {
        this.add_new_device = true;
    };
    DevicepageComponent.prototype.handle_new_device = function ($event) {
        this.devices.push($event);
    };
    DevicepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devicepage',
            template: __webpack_require__(/*! ./devicepage.component.html */ "./src/app/components/devicepage/devicepage.component.html"),
            styles: [__webpack_require__(/*! ./devicepage.component.css */ "./src/app/components/devicepage/devicepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"]])
    ], DevicepageComponent);
    return DevicepageComponent;
}());



/***/ }),

/***/ "./src/app/components/formadddevice/formadddevice.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/formadddevice/formadddevice.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybWFkZGRldmljZS9mb3JtYWRkZGV2aWNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/formadddevice/formadddevice.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/formadddevice/formadddevice.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-show background-opacity\">\n  <div class=\"block-detail\" style=\"width: 100%;\">\n    <div class=\"block block-title header-form\" style=\"width:100%\">\n      <h3 class=\"title-form retry\">Add Device</h3>\n      <div class=\"btn btn-close\" (click)=\"onSelect()\">X</div>\n    </div>\n    <div class=\"block block-info\">\n      <form class=\"form-add-user\" #formadddevice=\"ngForm\">\n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"text\" class=\"text-center\" name=\"ip\" placeholder=\"0.0.0.0\" [(ngModel)]=\"new_device.ip\" #ip=\"ngModel\" required pattern=\"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$\">\n          <p class=\"label error\" *ngIf=\"ip.errors?.required && ip.touched\">IP Address is required</p> \n          <p class=\"label error\" *ngIf=\"ip.errors?.pattern\">IP Address is not correct format</p>\n        </div>   \n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"email\" class=\"text-center\" name=\"phonenumber\" placeholder=\"0xxxxxxxxx\" [(ngModel)]=\"new_device.phone_number\" #phonenumber=\"ngModel\" required pattern=\"^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$\" maxlength=\"10\">\n          <p class=\"label error\" *ngIf=\"phonenumber.errors?.required && phonenumber.touched\">Phone number is required</p> \n          <p class=\"label error\" *ngIf=\"phonenumber.errors?.pattern\">Phone number is not correct format</p>\n          <p class=\"label error\" *ngIf=\"phonenumber.errors?.pattern\">Phone number is least 10 numbers</p>\n        </div>  \n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"text\" class=\"text-center\" name=\"address\" placeholder=\"Address\" [(ngModel)]=\"new_device.address\" #address=\"ngModel\" required>\n          <p class=\"label error\" *ngIf=\"address.errors?.required && address.touched\">Addess is required</p> \n        </div>    \n        <div class=\"form-group flex-row\">\n          <button class=\"btn btn-cancle\" (click)=\"onSelect()\">CANCLE</button>\n          <button class=\"btn btn-save\" (click)=\"handle_add_new_device()\" [disabled]=\"!formadddevice.form.valid\">SAVE</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-alerbox *ngIf=\"is_show\" [data]=\"data\" (handle_event)=\"onCloseAlert($event)\"></app-alerbox>\n"

/***/ }),

/***/ "./src/app/components/formadddevice/formadddevice.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/formadddevice/formadddevice.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormadddeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormadddeviceComponent", function() { return FormadddeviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");



var FormadddeviceComponent = /** @class */ (function () {
    function FormadddeviceComponent(issueService) {
        this.issueService = issueService;
        this.handle_show = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transfer_new_device = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.new_device = {
            ip: '',
            phone_number: '',
            address: '',
        };
        this.is_show = false;
        this.data = { 'status': true, 'message': '' };
    }
    FormadddeviceComponent.prototype.ngOnInit = function () {
    };
    FormadddeviceComponent.prototype.onSelect = function () {
        this.handle_show.emit(false);
    };
    FormadddeviceComponent.prototype.onCloseAlert = function ($event) {
        this.is_show = $event.close;
        if ($event.status) {
            this.handle_show.emit($event.close);
        }
    };
    FormadddeviceComponent.prototype.handle_add_new_device = function () {
        var _this = this;
        this.issueService.handle_add_new_device(this.new_device).subscribe(function (issue) {
            _this.is_show = true;
            if (issue["status"] == 201) {
                _this.data = { 'status': true, 'message': 'Add new device success!!' };
                _this.transfer_new_device.emit(issue['device']);
            }
            else {
                _this.data = { 'status': false, 'message': 'Add new device fail!!' };
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormadddeviceComponent.prototype, "handle_show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormadddeviceComponent.prototype, "transfer_new_device", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormadddeviceComponent.prototype, "errors", void 0);
    FormadddeviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formadddevice',
            template: __webpack_require__(/*! ./formadddevice.component.html */ "./src/app/components/formadddevice/formadddevice.component.html"),
            styles: [__webpack_require__(/*! ./formadddevice.component.css */ "./src/app/components/formadddevice/formadddevice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"]])
    ], FormadddeviceComponent);
    return FormadddeviceComponent;
}());



/***/ }),

/***/ "./src/app/components/formadduser/formadduser.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/formadduser/formadduser.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybWFkZHVzZXIvZm9ybWFkZHVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/formadduser/formadduser.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/formadduser/formadduser.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-show background-opacity\">\n  <div class=\"block-detail\" style=\"width: 100%;\">\n    <div class=\"block block-title header-form\" style=\"width:100%\">\n      <h3 class=\"title-form retry\">Add User</h3>\n      <div class=\"btn btn-close\" (click)=\"onSelect()\">X</div>\n    </div>\n    <div class=\"block block-info\">\n      <form class=\"form-add-user\" #formadduser=\"ngForm\">\n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"text\" class=\"text-center\" name=\"fullname\" placeholder=\"Full Name\" [(ngModel)]=\"newuser.full_name\" #full_name=\"ngModel\" required minlength=\"4\">\n          <p class=\"label error\" *ngIf=\"full_name.errors?.required && full_name.touched\">Full name is required</p> \n          <p class=\"label error\" *ngIf=\"full_name.errors?.minlength && full_name.touched\">Full name is least 4 characters</p>\n        </div>   \n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"email\" class=\"text-center\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"newuser.email\" #email=\"ngModel\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\n          <p class=\"label error\" *ngIf=\"email.errors?.required && email.touched\">Email is required</p> \n          <p class=\"label error\" *ngIf=\"email.errors?.pattern\">Email is not correct format</p>\n        </div>  \n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"text\" class=\"text-center\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"newuser.user_name\" #user_name=\"ngModel\" required minlength=\"4\">\n          <p class=\"label error\" *ngIf=\"user_name.errors?.required && user_name.touched\">User name is required</p> \n          <p class=\"label error\" *ngIf=\"user_name.errors?.minlength\">User name is least 4 characters</p>\n        </div>    \n        <div class=\"form-group\" style=\"width:100%;\"> \n          <input type=\"password\" class=\"text-center\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"newuser.password\" #password=\"ngModel\" required minlength=\"6\">\n          <p class=\"label error\" *ngIf=\"password.errors?.required && password.touched\">Password is required</p>\n          <p class=\"label error\" *ngIf=\"password.errors?.minlength\">Password is least 6 characters</p>\n        </div>\n        <div class=\"form-group\" style=\"width:100%;\">\n          <input type=\"password\" name=\"confirmpwd\" class=\"text-center\" placeholder=\"Confirm Password\" [(ngModel)]=\"newuser.confirm_password\" #confirmpwd=\"ngModel\" pattern=\"{{password.value}}\" required>\n          <p class=\"label error\" *ngIf=\"confirmpwd.errors?.required && confirmpwd.touched\">Confirm Password is required</p>\n          <p class=\"label error\" *ngIf=\"confirmpwd.errors?.pattern\">Confirm Password is not same</p>\n        </div>\n        <div class=\"form-group flex-row\">\n          <button class=\"btn btn-cancle\" (click)=\"onSelect()\">CANCLE</button>\n          <button class=\"btn btn-save\" (click)=\"handle_add_new_user()\" [disabled]=\"!formadduser.form.valid\">SAVE</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<app-alerbox *ngIf=\"is_show\" [data]=\"data\" (handle_event)=\"onCloseAlert($event)\"></app-alerbox>\n"

/***/ }),

/***/ "./src/app/components/formadduser/formadduser.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/formadduser/formadduser.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormadduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormadduserComponent", function() { return FormadduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");



var FormadduserComponent = /** @class */ (function () {
    function FormadduserComponent(issueService) {
        this.issueService = issueService;
        this.handle_show = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.transfer_new_user = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newuser = {
            full_name: '',
            user_name: '',
            email: '',
            password: '',
            confirm_password: ''
        };
        this.is_show = false;
        this.data = {
            'status': true,
            'message': ''
        };
    }
    FormadduserComponent.prototype.ngOnInit = function () {
    };
    FormadduserComponent.prototype.onSelect = function () {
        this.handle_show.emit(false);
    };
    FormadduserComponent.prototype.onCloseAlert = function ($event) {
        this.is_show = $event.close;
        if ($event.status) {
            this.handle_show.emit($event.close);
        }
    };
    FormadduserComponent.prototype.handle_add_new_user = function () {
        var _this = this;
        this.issueService.handle_add_user(this.newuser).subscribe(function (issue) {
            _this.is_show = true;
            if (issue["status"] == 201) {
                _this.data = { 'message': 'Add new user success!!', 'status': true };
                _this.transfer_new_user.emit(issue["data"]);
            }
            else {
                _this.data = { 'message': 'Add new user fail!!', 'status': false };
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormadduserComponent.prototype, "handle_show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormadduserComponent.prototype, "transfer_new_user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormadduserComponent.prototype, "errors", void 0);
    FormadduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formadduser',
            template: __webpack_require__(/*! ./formadduser.component.html */ "./src/app/components/formadduser/formadduser.component.html"),
            styles: [__webpack_require__(/*! ./formadduser.component.css */ "./src/app/components/formadduser/formadduser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"]])
    ], FormadduserComponent);
    return FormadduserComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-container\">\n  <div class=\"content\">\n    <div class=\"block block-list background-gray\">\n      <div class=\"block block-items \">\n        <div class=\"item box-shadow-arround\" *ngFor=\"let device of devices\" (click)=\"onSelect(device)\">\n          <div class=\"form-group\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <p class=\"text-normal\">{{device.id}}</p>\n          </div>\n          <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <i class=\"fas fa-wifi color-black box-content\"></i>\n            <p class=\"text-normal\">{{device.ip}}</p>\n          </div>\n          <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <i class=\"fas fa-mobile-alt color-black box-content\"></i>\n            <p class=\"text-normal\">{{device.phone_number}}</p>\n          </div>\n          <div class=\"form-group flex-row\" style=\"align-items: flex-start;\">\n            <i class=\"fas fa-map-marker-alt color-black box-content\"></i>\n            <p class=\"text-normal text-overflow \">{{device.address}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-detail-device [device]=\"device_selected\" (handle_show)=\"handleClose($event)\"></app-detail-device>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(issueService, cookieService, router) {
        this.issueService = issueService;
        this.cookieService = cookieService;
        this.router = router;
        this.token = '';
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.token = this.cookieService.get("access_token");
        if (this.token.length == 0) {
            return this.router.navigate(['/login']);
        }
        this.getDevices();
    };
    HomepageComponent.prototype.getDevices = function () {
        var _this = this;
        this.issueService.handle_get_devices().subscribe(function (issue) {
            _this.devices = issue["devices"];
        });
    };
    HomepageComponent.prototype.onSelect = function (device) {
        this.device_selected = device;
    };
    HomepageComponent.prototype.handleClose = function ($event) {
        this.device_selected = $event;
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/inforuserpage/inforuserpage.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/inforuserpage/inforuserpage.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mb3J1c2VycGFnZS9pbmZvcnVzZXJwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/inforuserpage/inforuserpage.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/inforuserpage/inforuserpage.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-container\">\n  <div class=\"content\">\n    <div class=\"block block-summary\">\n      <div class=\"block block-title block-under-line\" style=\"width:100%; justify-content: flex-start;\">\n        <h3 class=\"title md-size\">Thông Tin User</h3>\n      </div>\n      <div class=\"block flex-row\" style=\"align-items: flex-start; margin-top: 10px;\">\n        <div class=\"block block-list box-shadow-arround \" style=\"padding: 10px; width: 65%;\">\n            <div class=\"form-group flex-row\">\n              <p class=\"label text-normal\">ID</p>\n              <p class=\"label text-normal\">9347349</p>\n            </div>\n            <div class=\"form-group flex-row\">\n              <p class=\"label text-normal\">Full Name</p>\n              <input type=\"text\" class=\"text-center\" name=\"fullname\" value=\"Administrator\" [readonly]=\"readonly\">\n            </div>\n            <div class=\"form-group flex-row\">\n              <p class=\"label text-normal\">Email</p>\n              <input type=\"email\" class=\"text-center\" name=\"email\" value=\"admin@support.com\" [readonly]=\"readonly\">\n            </div>\n            <div class=\"form-group flex-row\">\n              <p class=\"label text-normal\">Address</p>\n              <input type=\"text\" class=\"text-center\" name=\"address\" value=\"499 Trần Hưng Đạo, Phường Cầu Kho, Quận 1, TP Hồ Chí Minh\" [readonly]=\"readonly\">\n            </div>\n            <div class=\"form-group flex-row\">\n              <p class=\"label text-normal\">Phone</p>\n              <input type=\"text\" class=\"text-center\" name=\"phone\" value=\"0907989977\"  [readonly]=\"readonly\">\n            </div>\n            <div class=\"form-group flex-row\">\n              <button class=\"btn btn-cancel\" (click)=\"handle_cancel()\" *ngIf=\"!readonly\">CANCEL</button>\n              <button class=\"btn btn-save\" (click)=\"handle_edit()\" *ngIf=\"readonly\">EDIT</button>\n              <button class=\"btn btn-save\" (click)=\"handle_update()\" *ngIf=\"!readonly\">UPDATE</button>\n            </div>\n        </div>\n        <div class=\"block block-list box-shadow-arround \" style=\"padding: 10px; width: 33%;\">\n          <div class=\"form-group flex-row\">\n            <p class=\"label text-normal\">ID</p>\n            <p class=\"label text-normal\">9347349</p>\n          </div>\n          <div class=\"form-group flex-row\">\n            <p class=\"label text-normal\">Full Name</p>\n            <p class=\"label text-normal\">9347349</p>\n          </div>\n          <div class=\"form-group flex-row\">\n            <p class=\"label text-normal\">Email</p>\n            <p class=\"label text-normal\">9347349</p>\n          </div>\n          <div class=\"form-group flex-row\">\n            <p class=\"label text-normal\">Address</p>\n            <p class=\"label text-normal\">9347349</p>\n          </div>\n          <div class=\"form-group flex-row\">\n            <p class=\"label text-normal\">Phone</p>\n            <p class=\"label text-normal\">9347349</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/inforuserpage/inforuserpage.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/inforuserpage/inforuserpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: InforuserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InforuserpageComponent", function() { return InforuserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InforuserpageComponent = /** @class */ (function () {
    function InforuserpageComponent() {
        this.readonly = true;
    }
    InforuserpageComponent.prototype.ngOnInit = function () {
    };
    InforuserpageComponent.prototype.handle_edit = function () {
        this.readonly = false;
    };
    InforuserpageComponent.prototype.handle_update = function () {
        this.readonly = true;
    };
    InforuserpageComponent.prototype.handle_cancel = function () {
        this.readonly = true;
    };
    InforuserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inforuserpage',
            template: __webpack_require__(/*! ./inforuserpage.component.html */ "./src/app/components/inforuserpage/inforuserpage.component.html"),
            styles: [__webpack_require__(/*! ./inforuserpage.component.css */ "./src/app/components/inforuserpage/inforuserpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InforuserpageComponent);
    return InforuserpageComponent;
}());



/***/ }),

/***/ "./src/app/components/userpage/userpage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/userpage/userpage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/userpage/userpage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/userpage/userpage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-container\">\n  <div class=\"content\">\n    <div class=\"block block-list background-gray\">\n      <div class=\"block form-group\" *ngIf=\"!Users\">\n        <p class=\"title-no-data text-uppercase\">Không có dữ liệu</p>\n      </div>\n      <div class=\"block block-items \">\n        <div class=\"item box-shadow-arround\" *ngFor=\"let user of Users\" (click)=\"onSelect(user)\">\n          <div class=\"form-group\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <p class=\"text-normal\">{{user._id}}</p>\n          </div>\n          <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <i class=\"fas fa-at color-black box-content\"></i>\n            <p class=\"text-normal\">{{user.email}}</p>\n          </div>\n          <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <i class=\"fas fa-user color-black box-content\"></i>\n            <p class=\"text-normal\">{{user.user_name}}</p>\n          </div>\n          <div class=\"form-group flex-row\" style=\"align-items: flex-start; justify-content: flex-start;\">\n            <i class=\"fas fa-user color-black box-content\"></i>\n            <p class=\"text-normal\">{{user.full_name}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"btn btn-add primary-btn-background \" (click)=\"handle_add()\">\n      <span><i class=\"fas fa-plus\"></i></span>\n    </div>\n    <app-detail-user [user]=\"Selected_User\" (handleShowChange)=\"handleClose($event)\"></app-detail-user>\n    <app-formadduser *ngIf=\"add_new_user\" (handle_show)=\"handleClose($event)\" (transfer_new_user)=\"handle_new_user($event)\"></app-formadduser>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/components/userpage/userpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/userpage/userpage.component.ts ***!
  \***********************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");



var UserpageComponent = /** @class */ (function () {
    function UserpageComponent(issueService) {
        this.issueService = issueService;
        this.add_new_user = false;
    }
    UserpageComponent.prototype.ngOnInit = function () {
        this.getListUser();
    };
    UserpageComponent.prototype.getListUser = function () {
        var _this = this;
        this.issueService.getUsers().subscribe(function (issue) {
            return _this.Users = (issue["status"] == 200) ? issue["users"] : [];
        });
    };
    UserpageComponent.prototype.onSelect = function (user) {
        this.Selected_User = user;
    };
    UserpageComponent.prototype.handleClose = function ($event) {
        this.Selected_User = $event;
        this.add_new_user = $event;
    };
    UserpageComponent.prototype.handle_add = function () {
        this.add_new_user = true;
    };
    UserpageComponent.prototype.handle_new_user = function ($event) {
        this.Users.push($event);
    };
    UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userpage',
            template: __webpack_require__(/*! ./userpage.component.html */ "./src/app/components/userpage/userpage.component.html"),
            styles: [__webpack_require__(/*! ./userpage.component.css */ "./src/app/components/userpage/userpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"]])
    ], UserpageComponent);
    return UserpageComponent;
}());



/***/ }),

/***/ "./src/app/models/Device.ts":
/*!**********************************!*\
  !*** ./src/app/models/Device.ts ***!
  \**********************************/
/*! exports provided: Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
var Device = /** @class */ (function () {
    function Device() {
    }
    return Device;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * DEMO API
 * This is file defind User model
 * Make by Đái Phương Bình
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=components-adminpage-adminpage-module.js.map