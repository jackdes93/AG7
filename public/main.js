(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/adminpage/adminpage.module": [
		"./src/app/components/adminpage/adminpage.module.ts",
		"components-adminpage-adminpage-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _app_components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/components/forgotpassword/forgotpassword.component */ "./src/app/components/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _app_components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/components/resetpassword/resetpassword.component */ "./src/app/components/resetpassword/resetpassword.component.ts");
/* harmony import */ var _app_components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/components/adminpage/adminpage.component */ "./src/app/components/adminpage/adminpage.component.ts");
/* harmony import */ var _app_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/components/errorpage/errorpage.component */ "./src/app/components/errorpage/errorpage.component.ts");










var routes = [
    { path: '', component: _app_components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: 'login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _app_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'forgot-password', component: _app_components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordComponent"] },
    { path: 'reset-password', component: _app_components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_7__["ResetpasswordComponent"] },
    {
        path: 'admin',
        component: _app_components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_8__["AdminpageComponent"],
        children: [
            { path: '', loadChildren: './components/adminpage/adminpage.module#AdminpageModule' }
        ]
    },
    { path: '**', component: _app_components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_9__["ErrorpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap-container\">\n  <router-outlet></router-outlet> \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forgotpassword/forgotpassword.component */ "./src/app/components/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/resetpassword/resetpassword.component */ "./src/app/components/resetpassword/resetpassword.component.ts");
/* harmony import */ var _components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/adminpage/adminpage.component */ "./src/app/components/adminpage/adminpage.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/errorpage/errorpage.component */ "./src/app/components/errorpage/errorpage.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_13__["AdminpageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _components_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_11__["ForgotpasswordComponent"],
                _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_12__["ResetpasswordComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_14__["LandingPageComponent"],
                _components_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__["ErrorpageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _issue_service__WEBPACK_IMPORTED_MODULE_8__["IssueService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/adminpage/adminpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/adminpage/adminpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW5wYWdlL2FkbWlucGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/adminpage/adminpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/adminpage/adminpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav>\n        <div class=\"nav-bar\">\n            <ul class=\"nav-items\">\n                <li>\n                    <a routerLink=\"dashboard\" class=\"link\" routerLinkActive=\"active\"> <span class=\"box-icon\"><img src=\"assets/image/Dashboard-icon.png\" alt=\"Dashboard\"></span> Dash Board</a>\n                </li>\n                <li>\n                    <a routerLink=\"users\" class=\"link\" routerLinkActive=\"active\"> <span class=\"box-icon\"><img src=\"assets/image/multi-icon.png\" alt=\"Users\"></span> Users</a>\n                </li>\n                <li>\n                    <a routerLink=\"devices\" class=\"link\" routerLinkActive=\"active\"><span class=\"box-icon\"><img src=\"assets/image/Devices.png\" alt=\"Devices\"></span> Devices</a>\n                </li>\n            </ul>\n            <div class=\"block block-info-user\" (click)=\"showInforUser($event)\">\n                <div class=\"block block-name\">\n                    <p class=\"title-name text-center text-color-white\">{{user}}</p>\n                </div>\n                <div class=\"block block-avatar\">\n                    <img src=\"assets/image/Account.png\" alt=\"Avatar User\">\n                </div>\n                <i class=\"fas fa-caret-down\"></i>   \n            </div>\n            <div class=\"block block-toogle\" *ngIf=\"!toogle_info\">\n                <ul class=\"list\">\n                    <li><a routerLink=\"info\">Infor User</a></li>\n                    <li><a (click)=\"log_out()\">Sign Out</a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/adminpage/adminpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/adminpage/adminpage.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageComponent", function() { return AdminpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");





var AdminpageComponent = /** @class */ (function () {
    function AdminpageComponent(router, cookieService, issueService) {
        this.router = router;
        this.cookieService = cookieService;
        this.issueService = issueService;
        this.user = '';
        this.token = '';
        this.toogle_info = true;
        this.is_selected = false;
    }
    AdminpageComponent.prototype.ngOnInit = function () {
        this.token = this.cookieService.get('access_token');
        this.check_is_login();
    };
    AdminpageComponent.prototype.check_is_login = function () {
        var _this = this;
        if (this.token.length == 0) {
            this.router.navigate(['/login']);
        }
        else {
            this.issueService.verify_token(this.token).subscribe(function (issue) {
                if (issue['state']) {
                    _this.user = _this.cookieService.get('full_name');
                    console.log(_this.user);
                    return _this.router.navigate(['/admin/dashboard']);
                }
                else {
                    _this.cookieService.delete('access_token');
                }
                return _this.router.navigate(['/login']);
            });
        }
    };
    AdminpageComponent.prototype.showInforUser = function ($event) {
        $event.stopPropagation();
        this.toogle_info = !this.toogle_info;
    };
    AdminpageComponent.prototype.onClick = function () {
        this.toogle_info = true;
    };
    AdminpageComponent.prototype.log_out = function () {
        this.cookieService.delete('access_token');
        this.router.navigate(['/login']);
    };
    AdminpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminpage',
            template: __webpack_require__(/*! ./adminpage.component.html */ "./src/app/components/adminpage/adminpage.component.html"),
            host: {
                "(window:click)": "onClick()"
            },
            styles: [__webpack_require__(/*! ./adminpage.component.css */ "./src/app/components/adminpage/adminpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"]])
    ], AdminpageComponent);
    return AdminpageComponent;
}());



/***/ }),

/***/ "./src/app/components/errorpage/errorpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/errorpage/errorpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3JwYWdlL2Vycm9ycGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/errorpage/errorpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/errorpage/errorpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrap-container\">\n    <div class=\"block-error\">\n      <div class=\"block block-title flex-direction\">\n        <h2 class=\"title text-bold lg-size\">404</h2>\n        <h3 class=\"title text-light md-size text-uppercase\"> oops, sorry we can't find that page! </h3>\n        <p class=\"sm-size\">Either something went wrong or the page doesn't exist anymore.</p>\n        <hr>\n      </div>\n      <a (click)=\"returnBack()\" class=\"link btn-sign-in\"> RETURN BACK </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/errorpage/errorpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/errorpage/errorpage.component.ts ***!
  \*************************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent(_location) {
        this._location = _location;
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent.prototype.returnBack = function () {
        this._location.back();
    };
    ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! ./errorpage.component.html */ "./src/app/components/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.css */ "./src/app/components/errorpage/errorpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/components/forgotpassword/forgotpassword.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/forgotpassword/forgotpassword.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/forgotpassword/forgotpassword.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgotpassword/forgotpassword.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container banner\">\n  <div class=\"block block-form\" *ngIf=\"isShow; else notShow\">\n    <form  class=\"form-login\" #formForget=\"ngForm\">\n      <div class=\"form-group\">\n        <h3 class=\"title-form\">Forget Password</h3>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #email=\"ngModel\" required>\n        <p class=\"label error\" *ngIf=\"email.errors?.required && email.touched\">Email is required</p>\n        <p class=\"label error\" *ngIf=\"email.errors?.pattern && email.touched\">Email is wrong!!!</p>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-submit\" (click)=\"VerifyEmail()\" [disabled]=\"!formForget.form.valid\" >Reset</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"link text-bold sign text-small\">Sign In</a>\n      </div>\n    </form>\n  </div>\n  <ng-template #notShow>\n    <div class=\"block block-result\" >\n      <div class=\"alert alert-error\" *ngIf=\"!isSuccess; else notSuccess\">\n        <p>Please check email again.</p>\n        <a (click)=\"Retry()\" class=\"link text-bold retry text-small\"> Retry</a>\n      </div>\n      <ng-template #notSuccess>\n        <div class=\"alert alert-success\">\n          <p>You will give a link reset password.</p>\n          <a routerLink=\"/login\" class=\"link text-bold sign text-small\" style=\"color: #FFF;\">Sign In</a>\n        </div>\n      </ng-template>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/components/forgotpassword/forgotpassword.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forgotpassword/forgotpassword.component.ts ***!
  \***********************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent() {
        this.isShow = true;
        this.data = {
            email: ''
        };
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.VerifyEmail = function () {
        this.isShow = !this.isShow;
        this.isSuccess = true;
    };
    ForgotpasswordComponent.prototype.Retry = function () {
        this.isShow = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ForgotpasswordComponent.prototype, "errors", void 0);
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/components/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/components/forgotpassword/forgotpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block-landing landing-page\">\n  <div class=\"block block-title opacity\">\n    <h3 class=\"title title-header text-center text-color-white text-shadow \">Demo Website <br> Front End Angular + Node JS API Back End </h3>\n  </div>\n  <a routerLink=\"login\" class=\"link btn-sign-in\"> Login DashBoard </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container banner\">\n  <div class=\"block block-form\">\n    <form  class=\"form-login\" #formlogin=\"ngForm\">\n      <div class=\"form-group\">\n        <h3 class=\"title-form\">Login</h3>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"username\" placeholder=\"User Name\" required [(ngModel)]=\"userInfor.user_name\" #user_name=\"ngModel\"> \n        <p class=\"label error\" *ngIf=\"user_name.errors?.required && user_name.touched\">User name is required</p>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"userInfor.password\" #password=\"ngModel\" required minlength=\"6\">\n        <p class=\"label error\" *ngIf=\"password.errors?.required && password.touched\">User name is required</p>\n        <p class=\"label error\" *ngIf=\"password.errors?.minlength && password.touched\"> Password is least 6 characters.</p>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-submit\" (click)=\"SignIn()\" [disabled]=\"!formlogin.form.valid\">LOGIN</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/forgot-password\" class=\"link text-italic text-small text-color-gray\">Forget Password ?</a>\n        <a routerLink=\"/register\" class=\"link text-bold register text-small\">Sign Up</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, issueService, cookieService) {
        this.router = router;
        this.issueService = issueService;
        this.cookieService = cookieService;
        this.token = '';
        this.userInfor = {
            user_name: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.cookieService.get('access_token').length > 0) {
            this.router.navigate(['/admin/dashboard']);
        }
    };
    LoginComponent.prototype.SignIn = function () {
        var _this = this;
        if (this.userInfor.user_name.length > 0 && this.userInfor.password.length >= 6) {
            this.issueService.handle_login(this.userInfor).subscribe(function (issue) {
                if (issue["status"] == 200) {
                    _this.cookieService.set("access_token", issue["token"], 0.02);
                    _this.cookieService.set("full_name", issue["user"].full_name, 0.02);
                    _this.cookieService.set("_id", issue["user"]._id, 0.02);
                    _this.cookieService.set("email", issue["user"].email, 0.02);
                    _this.router.navigate(['/admin/dashboard']);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "errors", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/resetpassword/resetpassword.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/resetpassword/resetpassword.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/resetpassword/resetpassword.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/resetpassword/resetpassword.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container banner\">\n  <div class=\"block block-form\" >\n    <form  class=\"form-login\" #formResetPwd=\"ngForm\">\n      <div class=\"form-group\">\n        <h3 class=\"title-form\">Reset Password</h3>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" placeholder=\"New Password\" [(ngModel)]=\"data.password\" #password=\"ngModel\" required minlength=\"6\">\n        <p class=\"label error\" *ngIf=\"password.errors?.required && password.touched\">New Password is required</p>\n        <p class=\"label error\" *ngIf=\"password.errors?.minlength && password.touched\">New Password is least 6 characters</p>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"confirmpassword\" placeholder=\"New Password\" [(ngModel)]=\"data.confirmpassword\" #confirmpassword=\"ngModel\" required pattern=\"{{password.value}}\">\n        <p class=\"label error\" *ngIf=\"confirmpassword.errors?.required && confirmpassword.touched\">Confirm Password is required</p>\n        <p class=\"label error\" *ngIf=\"confirmpassword.errors?.pattern && confirmpassword.touched\">Confirm Password is not same</p>\n      </div>\n      \n      <div class=\"form-group\">\n        <button class=\"btn btn-submit\" (click)=\"renewPassword()\" [disabled]=\"!formResetPwd.form.valid\" > Reset</button>\n      </div>\n      <div class=\"form-group\">\n        <a routerLink=\"/login\" class=\"link text-bold sign text-small\">Sign In</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/resetpassword/resetpassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/resetpassword/resetpassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(router) {
        this.router = router;
        this.data = {
            password: '',
            confirmpassword: ''
        };
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent.prototype.renewPassword = function () {
        alert(this.data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResetpasswordComponent.prototype, "errors", void 0);
    ResetpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/components/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/components/resetpassword/resetpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container banner\">\n    <div class=\"block block-form\">\n      <form  class=\"form-register\" #formsignup=\"ngForm\">\n        <div class=\"form-group\">\n          <h3 class=\"title-form\" style=\"font-size: 2em;\">Sign Up</h3>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"username\" placeholder=\"User Name\" [(ngModel)]=\"newUser.user_name\" #user_name=\"ngModel\" required minlength=\"4\">\n          <p class=\"label error\" *ngIf=\"user_name.errors?.required && user_name.touched\">User name is required</p>\n          <p class=\"label error\" *ngIf=\"user_name.errors?.minlength && user_name.touched\">User name is least 4 characters</p>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\" #password=\"ngModel\" required minlength=\"6\">\n          <p class=\"label error\" *ngIf=\"password.errors?.required && password.touched\">Password is required</p>\n          <p class=\"label error\" *ngIf=\"password.errors?.minlength && password.touched\">Password is least 6 characters</p>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" name=\"confirmpassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"newUser.confirmpassword\" #confirmpassword=\"ngModel\" required minlength=\"6\" pattern=\"{{password.value}}\">\n          <p class=\"label error\" *ngIf=\"confirmpassword.errors?.required && confirmpassword.touched\">Confirm Password is required</p>\n          <p class=\"label error\" *ngIf=\"confirmpassword.errors?.minlength\"> Confirm Password is least 6 characters</p>\n          <p class=\"label error\" *ngIf=\"confirmpassword.errors?.pattern\">Confirm Password is not same</p>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"newUser.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #email=\"ngModel\" required>\n          <p class=\"label error\" *ngIf=\"email.errors?.required && email.touched\"> Email is required </p>\n          <p class=\"label error\" *ngIf=\"email.errors?.pattern\">Email is not correct!!</p>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"fullname\" placeholder=\"Full Name\" [(ngModel)]=\"newUser.full_name\" #full_name=\"ngModel\" required>\n          <p class=\"label error\" *ngIf=\"full_name.errors?.required && full_name.touched\">Full name is required</p>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-submit\" (click)=\"SignUp()\" [disabled]=\"!formsignup.form.valid\">Register</button>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, issueService) {
        this.router = router;
        this.issueService = issueService;
        this.newUser = {
            user_name: '',
            password: '',
            confirmpassword: '',
            email: '',
            full_name: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.SignUp = function () {
        var _this = this;
        this.issueService.handle_register(this.newUser).subscribe(function (issue) {
            if (issue["status"] == 201) {
                _this.router.navigate(['/login']);
            }
            else {
                alert('FAIL!!');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupComponent.prototype, "errors", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var IssueService = /** @class */ (function () {
    function IssueService(http, issueService) {
        this.http = http;
        this.issueService = issueService;
        this.link_api = '/api/v1';
    }
    IssueService.prototype.verify_token = function (token) {
        return this.http.get(this.link_api + "/check/" + token);
    };
    IssueService.prototype.handle_register = function (new_user) {
        return this.http.post(this.link_api + "/users/register", new_user);
    };
    IssueService.prototype.handle_login = function (user) {
        return this.http.post(this.link_api + "/users/login", user);
    };
    // Handle User
    IssueService.prototype.getUsers = function () {
        var token = this.issueService.get('access_token');
        return this.http.get(this.link_api + "/users", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.getUserById = function (id_user) {
        var token = this.issueService.get('access_token');
        return this.http.get(this.link_api + "/users/" + id_user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_add_user = function (new_user) {
        var token = this.issueService.get('access_token');
        return this.http.post(this.link_api + "/users", new_user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_update_user = function (id_user, info_update) {
        var token = this.issueService.get('access_token');
        return this.http.patch(this.link_api + "/users/" + id_user, info_update, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_delete_user = function (id_user) {
        var token = this.issueService.get('access_token');
        return this.http.delete(this.link_api + "/users/" + id_user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    // Device
    IssueService.prototype.handle_get_devices = function () {
        var token = this.issueService.get('access_token');
        return this.http.get(this.link_api + "/devices", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_get_device = function (id_device) {
        var token = this.issueService.get('access_token');
        return this.http.get(this.link_api + "/devices/" + id_device, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_add_new_device = function (new_device) {
        var token = this.issueService.get('access_token');
        return this.http.post(this.link_api + "/devices", new_device, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_update_device = function (id_device, info) {
        var token = this.issueService.get('access_token');
        return this.http.patch(this.link_api + "/devices/" + id_device, info, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService.prototype.handle_delete_device = function (id_device) {
        var token = this.issueService.get('access_token');
        return this.http.delete(this.link_api + "/devices/" + id_device, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'Application/json',
                'Authorization': "Bearer " + token,
                'Access-Control-Expose-Headers': 'Authorization'
            })
        });
    };
    IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daibinh/Documents/Demo/Front-End/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map