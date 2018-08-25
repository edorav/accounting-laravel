(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"authService.isLoggedIn()\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <!--<form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"{{'common.search' | translate}}\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">{{'common.search' | translate}}</button>\n    </form>-->\n    <ul class=\"navbar-nav\">\n      <li ngbDropdown class=\"nav-item dropdown\" placement=\"bottom-right\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" ngbDropdownToggle>\n          <i class=\"fa fa-language\"></i>\n        </a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" (click)=\"changeLang('it')\">Italiano</a>\n          <a class=\"dropdown-item\" (click)=\"changeLang('en')\">Inglese</a>\n        </div>\n      </li>\n      <li ngbDropdown class=\"nav-item dropdown\" placement=\"bottom-right\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" ngbDropdownToggle>\n          <i class=\"fa fa-user\"></i>\n        </a>\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/my-profile']\">Profilo</a>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/cross/service/auth.service */ "./src/app/cross/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, authService, router) {
        this.translate = translate;
        this.authService = authService;
        this.router = router;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        var browserLang = translate.getBrowserLang();
        // console.log(browserLang);
    }
    AppComponent.prototype.changeLang = function (langCode) {
        this.translate.use(langCode);
    };
    AppComponent.prototype.logout = function () {
        this.authService.destroySession();
        this.router.navigate(['login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _app_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_house_house_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/house/house.component */ "./src/app/house/house.component.ts");
/* harmony import */ var _app_house_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/house/house-detail/house-detail.component */ "./src/app/house/house-detail/house-detail.component.ts");
/* harmony import */ var _app_cost_cost_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/cost/cost.component */ "./src/app/cost/cost.component.ts");
/* harmony import */ var _app_cost_cost_detail_cost_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/cost/cost-detail/cost-detail.component */ "./src/app/cost/cost-detail/cost-detail.component.ts");
/* harmony import */ var _app_cross_component_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/cross/component/confirm/confirm.component */ "./src/app/cross/component/confirm/confirm.component.ts");
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @app/app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _app_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _app_house_house_component__WEBPACK_IMPORTED_MODULE_10__["HouseComponent"],
                _app_house_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_11__["HouseDetailComponent"],
                _app_cost_cost_component__WEBPACK_IMPORTED_MODULE_12__["CostComponent"],
                _app_cost_cost_detail_cost_detail_component__WEBPACK_IMPORTED_MODULE_13__["CostDetailComponent"],
                _app_cross_component_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"],
                _app_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_16__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_app_routes__WEBPACK_IMPORTED_MODULE_15__["appRoutes"]
                // { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })
            ],
            entryComponents: [
                _app_cross_component_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"]
            ],
            providers: [],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _house_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./house/house-detail/house-detail.component */ "./src/app/house/house-detail/house-detail.component.ts");
/* harmony import */ var _app_cross_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cross/service/auth.guard */ "./src/app/cross/service/auth.guard.ts");
/* harmony import */ var _app_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");





var appRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"], canActivate: [_app_cross_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]] },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'house', component: _house_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_2__["HouseDetailComponent"] },
    { path: 'house/:id', component: _house_house_detail_house_detail_component__WEBPACK_IMPORTED_MODULE_2__["HouseDetailComponent"] },
    { path: 'my-profile', component: _app_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
];


/***/ }),

/***/ "./src/app/cost/cost-detail/cost-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/cost/cost-detail/cost-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cost/cost-detail/cost-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cost/cost-detail/cost-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cost-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/cost/cost-detail/cost-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cost/cost-detail/cost-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: CostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostDetailComponent", function() { return CostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_cost_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cost/cost */ "./src/app/cost/cost.ts");
/* harmony import */ var _app_cost_cost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/cost/cost.service */ "./src/app/cost/cost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CostDetailComponent = /** @class */ (function () {
    function CostDetailComponent(route, _costService, fb) {
        this.route = route;
        this._costService = _costService;
        this.fb = fb;
    }
    CostDetailComponent.prototype.ngOnInit = function () {
        console.log(this.houseId);
        this.model = new _app_cost_cost__WEBPACK_IMPORTED_MODULE_3__["Cost"]();
        this.initForm();
    };
    CostDetailComponent.prototype.initForm = function () {
        this.costForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.name),
            homeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.houseId)
        });
    };
    CostDetailComponent.prototype.submit = function () {
        var _this = this;
        this._costService.save(this.costForm.value, this.model.id).subscribe(function (cost) {
            _this.model = cost;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CostDetailComponent.prototype, "houseId", void 0);
    CostDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-detail',
            template: __webpack_require__(/*! ./cost-detail.component.html */ "./src/app/cost/cost-detail/cost-detail.component.html"),
            styles: [__webpack_require__(/*! ./cost-detail.component.css */ "./src/app/cost/cost-detail/cost-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_cost_cost_service__WEBPACK_IMPORTED_MODULE_4__["CostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CostDetailComponent);
    return CostDetailComponent;
}());



/***/ }),

/***/ "./src/app/cost/cost.component.css":
/*!*****************************************!*\
  !*** ./src/app/cost/cost.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cost/cost.component.html":
/*!******************************************!*\
  !*** ./src/app/cost/cost.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"model\" (submit)=\"submit()\">\n    <form [formGroup]=\"costForm\" >\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-4\">\n                <label>costo</label>\n                <input type=\"text\" class=\"form-control\"  formControlName=\"name\">\n            </div>\n            <div class=\"form-group col-md-3\">\n                <label>amount</label>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\"  formControlName=\"amount\">\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">&euro;</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-md-3\">\n                <label>data</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                        formControlName=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                            <i class=\"fa fa-calendar\"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group col-md-2\">\n                <label>&nbsp;</label>\n                <button type=\"submit\" class=\"form-control btn btn-primary\">Add</button>\n            </div>\n        </div>\n            \n        \n    </form>    \n</div>\n"

/***/ }),

/***/ "./src/app/cost/cost.component.ts":
/*!****************************************!*\
  !*** ./src/app/cost/cost.component.ts ***!
  \****************************************/
/*! exports provided: CostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostComponent", function() { return CostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_cost_cost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cost/cost */ "./src/app/cost/cost.ts");
/* harmony import */ var _app_cost_cost_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/cost/cost.service */ "./src/app/cost/cost.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CostComponent = /** @class */ (function () {
    function CostComponent(route, _costService, fb) {
        this.route = route;
        this._costService = _costService;
        this.fb = fb;
        this.addNewCost = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CostComponent.prototype.ngOnInit = function () {
        this.model = new _app_cost_cost__WEBPACK_IMPORTED_MODULE_3__["Cost"]();
        this.initForm();
    };
    CostComponent.prototype.initForm = function () {
        this.costForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.name),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.amount),
            homeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.houseId),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.date)
        });
    };
    CostComponent.prototype.submit = function () {
        var _this = this;
        this.costForm.value.date = this.costForm.value.date.year + '/' + this.costForm.value.date.month + '/' + this.costForm.value.date.day;
        this._costService.save(this.costForm.value, this.model.id).subscribe(function (cost) {
            _this.addNewCost.emit(cost);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CostComponent.prototype, "houseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CostComponent.prototype, "addNewCost", void 0);
    CostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost',
            template: __webpack_require__(/*! ./cost.component.html */ "./src/app/cost/cost.component.html"),
            styles: [__webpack_require__(/*! ./cost.component.css */ "./src/app/cost/cost.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_cost_cost_service__WEBPACK_IMPORTED_MODULE_4__["CostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CostComponent);
    return CostComponent;
}());



/***/ }),

/***/ "./src/app/cost/cost.service.ts":
/*!**************************************!*\
  !*** ./src/app/cost/cost.service.ts ***!
  \**************************************/
/*! exports provided: CostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostService", function() { return CostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_cross_service_myhttpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cross/service/myhttpclient.service */ "./src/app/cross/service/myhttpclient.service.ts");
/* harmony import */ var _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/cross/service/auth.service */ "./src/app/cross/service/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CostService = /** @class */ (function (_super) {
    __extends(CostService, _super);
    function CostService(httpClient, authService, router) {
        return _super.call(this, httpClient, authService, router) || this;
    }
    CostService.prototype.getEndPoint = function () {
        return 'cost';
    };
    CostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CostService);
    return CostService;
}(_app_cross_service_myhttpclient_service__WEBPACK_IMPORTED_MODULE_3__["MyHttpClientService"]));



/***/ }),

/***/ "./src/app/cost/cost.ts":
/*!******************************!*\
  !*** ./src/app/cost/cost.ts ***!
  \******************************/
/*! exports provided: Cost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cost", function() { return Cost; });
/* harmony import */ var _app_cross_model_basic_bean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/cross/model/basic.bean */ "./src/app/cross/model/basic.bean.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cost = /** @class */ (function (_super) {
    __extends(Cost, _super);
    function Cost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cost;
}(_app_cross_model_basic_bean__WEBPACK_IMPORTED_MODULE_0__["BasicBean"]));



/***/ }),

/***/ "./src/app/cross/component/confirm/confirm.component.css":
/*!***************************************************************!*\
  !*** ./src/app/cross/component/confirm/confirm.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cross/component/confirm/confirm.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cross/component/confirm/confirm.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Hi there!</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('cancel')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Hello, name!</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"activeModal.close('confirm')\">Confirm</button>\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('cancel')\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/cross/component/confirm/confirm.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cross/component/confirm/confirm.component.ts ***!
  \**************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/cross/component/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/cross/component/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/cross/model/basic.bean.ts":
/*!*******************************************!*\
  !*** ./src/app/cross/model/basic.bean.ts ***!
  \*******************************************/
/*! exports provided: BasicBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicBean", function() { return BasicBean; });
var BasicBean = /** @class */ (function () {
    function BasicBean(json) {
        if (json) {
            this.assign(json);
            this._fixDates();
        }
    }
    BasicBean.prototype.assign = function (json) {
        if (json) {
            Object.assign(this, json);
            this._fixDates();
        }
    };
    BasicBean.prototype.isNew = function () {
        return !this.id;
    };
    BasicBean.prototype._fixDates = function () {
        if (this.createdAt && typeof this.createdAt === "string") {
            this.createdAt = new Date(this.createdAt);
        }
        if (this.updatedAt && typeof this.updatedAt === "string") {
            this.updatedAt = new Date(this.updatedAt);
        }
    };
    return BasicBean;
}());



/***/ }),

/***/ "./src/app/cross/service/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/cross/service/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/cross/service/auth.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(_router, _authService, _userService) {
        this._router = _router;
        this._authService = _authService;
        this._userService = _userService;
    }
    AuthenticationGuard.prototype.canActivate = function () {
        var _this = this;
        var token = this._authService.getToken();
        if (token) {
            this._userService.verifyToken().subscribe(function (response) {
                if (response) {
                    _this._authService.setUser(JSON.stringify(response));
                }
                else {
                    _this._authService.destroySession();
                    _this._router.navigate(['/login']);
                    return false;
                }
            });
            return true;
        }
        else {
            this._authService.destroySession();
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/cross/service/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/cross/service/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.USER_KEY = 'USER';
        this.TOKEN_KEY = 'TOKEN';
    }
    AuthService.prototype.setUser = function (userData) {
        localStorage.setItem(this.USER_KEY, userData);
    };
    AuthService.prototype.setToken = function (tokenData) {
        localStorage.setItem(this.TOKEN_KEY, tokenData);
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem(this.USER_KEY);
    };
    AuthService.prototype.getTokenValue = function () {
        return localStorage.getItem(this.TOKEN_KEY);
    };
    AuthService.prototype.destroySession = function () {
        localStorage.clear();
    };
    AuthService.prototype.getToken = function () {
        try {
            var userObj = JSON.parse(this.getTokenValue());
            return userObj.token;
        }
        catch (err) {
            return '';
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getToken() === '' ? false : true;
    };
    AuthService.prototype.getField = function (field) {
        try {
            var userObj = JSON.parse(this.getUser());
            return userObj.user[field];
        }
        catch (err) {
            return '';
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/cross/service/myhttpclient.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/cross/service/myhttpclient.service.ts ***!
  \*******************************************************/
/*! exports provided: MyHttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHttpClientService", function() { return MyHttpClientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var MyHttpClientService = /** @class */ (function () {
    function MyHttpClientService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.absolutePath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["config"].serverUrl;
    }
    MyHttpClientService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authService.getToken()
            })
        };
    };
    MyHttpClientService.prototype.getEndPointUri = function () {
        return this.absolutePath + this.getEndPoint() + '/';
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    MyHttpClientService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            _this.router.navigate(['network-error']);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    MyHttpClientService.prototype.get = function () {
        var url = this.absolutePath + this.getEndPoint();
        return this.http.get(url, this.getHttpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(// Log the result or error
        function (// Log the result or error
        data) { return data; }, function (error) { return error; }));
    };
    MyHttpClientService.prototype.findById = function (id) {
        var url = this.absolutePath + this.getEndPoint();
        return this.http.get(url + '/' + id, this.getHttpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(// Log the result or error
        function (// Log the result or error
        data) { return data; }, function (error) { return error; }));
    };
    MyHttpClientService.prototype.findByParentId = function (id) {
        var url = this.absolutePath + this.getEndPoint();
        return this.http.get(url + '/parent/' + id, this.getHttpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(// Log the result or error
        function (// Log the result or error
        data) { return data; }, function (error) { return error; }));
    };
    MyHttpClientService.prototype.save = function (model, id) {
        var url = this.absolutePath + this.getEndPoint();
        if (id) {
            url = url + '/' + id;
        }
        return this.http.post(url, model, this.getHttpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(// Log the result or error
        function (// Log the result or error
        data) { return data; }, function (error) { return error; }));
    };
    MyHttpClientService.prototype.delete = function (id) {
        var url = this.absolutePath + this.getEndPoint() + '/' + id;
        return this.http.delete(url, this.getHttpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(// Log the result or error
        function (// Log the result or error
        data) { return data; }, function (error) { return error; }));
    };
    return MyHttpClientService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"houses\">\n        <div class=\"col-md-3\" *ngFor=\"let house of houses\">\n            <app-house\n                [house]=\"house\"\n            ></app-house>\n        </div>\n    </div>\n</div>\n\n<a [routerLink]=\"['/house']\" class=\"btn btn-primary btn-add\">\n    <i class=\"fa fa-plus\"></i>\n</a>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _house_house_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../house/house.service */ "./src/app/house/house.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_houseService) {
        this._houseService = _houseService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHouses();
    };
    DashboardComponent.prototype.getHouses = function () {
        var _this = this;
        this._houseService.get().subscribe(function (houses) {
            _this.houses = houses;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_house_house_service__WEBPACK_IMPORTED_MODULE_1__["HouseService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/house/house-detail/house-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/house/house-detail/house-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/house/house-detail/house-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/house/house-detail/house-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"model\">\n    <form [formGroup]=\"houseForm\" (submit)=\"submit()\">\n        <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\"  formControlName=\"name\">\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>    \n</div>\n\n<hr/>\n<div class=\"container-fluid\">\n    <h2>Lista dei costi</h2>\n</div>\n\n<app-cost\n    *ngIf=\"model\"\n    [houseId]=\"model.id\"\n    (addNewCost)=\"getCostList($event)\"\n></app-cost>\n\n<div class=\"container-fluid\" *ngIf=\"costList\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover table-sm\">\n            <thead class=\"thead-light\">\n                <tr>\n                <th scope=\"col\">Costo</th>\n                <th scope=\"col\">Importo</th>\n                <th scope=\"col\">Data</th>\n                <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let cost of costList\">\n                    <td>{{cost.name}}</td>\n                    <td>{{cost.amount}} &euro;</td>\n                    <td>{{cost.date | date: 'd/M/yyyy' }}</td>\n                    <td>\n                        <button class=\"btn btn-default\"><i class=\"fa fa-pencil\"></i></button>\n                        <button class=\"btn btn-danger ml-1\" (click)=deleteCost(cost.id)><i class=\"fa fa-trash\"></i></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/house/house-detail/house-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/house/house-detail/house-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: HouseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseDetailComponent", function() { return HouseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_cost_cost_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cost/cost.service */ "./src/app/cost/cost.service.ts");
/* harmony import */ var _app_house_house__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/house/house */ "./src/app/house/house.ts");
/* harmony import */ var _app_house_house_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/house/house.service */ "./src/app/house/house.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_cross_component_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/cross/component/confirm/confirm.component */ "./src/app/cross/component/confirm/confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HouseDetailComponent = /** @class */ (function () {
    function HouseDetailComponent(route, _houseService, _costService, fb, modalService) {
        this.route = route;
        this._houseService = _houseService;
        this._costService = _costService;
        this.fb = fb;
        this.modalService = modalService;
    }
    HouseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this._houseService.findById(params.id).subscribe(function (house) {
                    _this.model = house;
                    _this.getCostList();
                    _this.initForm();
                });
            }
            else {
                _this.model = new _app_house_house__WEBPACK_IMPORTED_MODULE_4__["House"]();
                _this.initForm();
            }
        });
    };
    HouseDetailComponent.prototype.getCostList = function () {
        var _this = this;
        this._costService.findByParentId(this.model.id).subscribe(function (costList) {
            _this.costList = costList;
        });
    };
    HouseDetailComponent.prototype.initForm = function () {
        this.houseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.name),
        });
    };
    HouseDetailComponent.prototype.submit = function () {
        var _this = this;
        this._houseService.save(this.houseForm.value, this.model.id).subscribe(function (house) {
            _this.model = house;
        });
    };
    HouseDetailComponent.prototype.deleteCost = function (costId) {
        var _this = this;
        this.modalService.open(_app_cross_component_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"]).result.then(function (result) {
            if (result === 'confirm') {
                _this._costService.delete(costId).subscribe(function () {
                    _this.getCostList();
                });
            }
        });
    };
    HouseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house-detail',
            template: __webpack_require__(/*! ./house-detail.component.html */ "./src/app/house/house-detail/house-detail.component.html"),
            styles: [__webpack_require__(/*! ./house-detail.component.css */ "./src/app/house/house-detail/house-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _app_house_house_service__WEBPACK_IMPORTED_MODULE_5__["HouseService"],
            _app_cost_cost_service__WEBPACK_IMPORTED_MODULE_3__["CostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], HouseDetailComponent);
    return HouseDetailComponent;
}());



/***/ }),

/***/ "./src/app/house/house.component.css":
/*!*******************************************!*\
  !*** ./src/app/house/house.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/house/house.component.html":
/*!********************************************!*\
  !*** ./src/app/house/house.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-2\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{house.name}}</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n    <a [routerLink]=\"['/house',house.id]\" class=\"card-link\">Detail</a>\n    <a href=\"#\" class=\"card-link\">Another link</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/house/house.component.ts":
/*!******************************************!*\
  !*** ./src/app/house/house.component.ts ***!
  \******************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_house_house__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/house/house */ "./src/app/house/house.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HouseComponent = /** @class */ (function () {
    function HouseComponent() {
    }
    HouseComponent.prototype.ngOnInit = function () {
        //console.log(this.house);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_house_house__WEBPACK_IMPORTED_MODULE_1__["House"])
    ], HouseComponent.prototype, "house", void 0);
    HouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house',
            template: __webpack_require__(/*! ./house.component.html */ "./src/app/house/house.component.html"),
            styles: [__webpack_require__(/*! ./house.component.css */ "./src/app/house/house.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/house/house.service.ts":
/*!****************************************!*\
  !*** ./src/app/house/house.service.ts ***!
  \****************************************/
/*! exports provided: HouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseService", function() { return HouseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_cross_service_myhttpclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/cross/service/myhttpclient.service */ "./src/app/cross/service/myhttpclient.service.ts");
/* harmony import */ var _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/cross/service/auth.service */ "./src/app/cross/service/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HouseService = /** @class */ (function (_super) {
    __extends(HouseService, _super);
    function HouseService(httpClient, authService, router) {
        return _super.call(this, httpClient, authService, router) || this;
    }
    HouseService.prototype.getEndPoint = function () {
        return 'home';
    };
    HouseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HouseService);
    return HouseService;
}(_app_cross_service_myhttpclient_service__WEBPACK_IMPORTED_MODULE_3__["MyHttpClientService"]));



/***/ }),

/***/ "./src/app/house/house.ts":
/*!********************************!*\
  !*** ./src/app/house/house.ts ***!
  \********************************/
/*! exports provided: House */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "House", function() { return House; });
/* harmony import */ var _app_cross_model_basic_bean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/cross/model/basic.bean */ "./src/app/cross/model/basic.bean.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var House = /** @class */ (function (_super) {
    __extends(House, _super);
    function House() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return House;
}(_app_cross_model_basic_bean__WEBPACK_IMPORTED_MODULE_0__["BasicBean"]));



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <div class=\"row align-items-center h-100\">\n     <div class=\"col-d-4 my-auto mx-auto\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\" >\n        <div class=\"card\">\n          <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n              </div>\n            <button class=\"btn btn-primary btn-block\">Login</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/user/user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, _userService, router) {
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this.router = router;
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this._userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(function (user) {
                if (user) {
                    _this.router.navigate(['']);
                }
                else {
                    _this.error = true;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _app_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/profile/profile.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"model\" >\n  <form [formGroup]=\"myProfileForm\" (submit)=\"submit()\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label>Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/user/user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, fb) {
        this.userService = userService;
        this.fb = fb;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.verifyToken().subscribe(function (user) {
            _this.model = user;
            _this.initForm();
        });
    };
    ProfileComponent.prototype.submit = function () {
        var _this = this;
        this.userService.save(this.myProfileForm.value, this.model.id).subscribe(function (user) {
            _this.model = user;
        });
    };
    ProfileComponent.prototype.initForm = function () {
        this.myProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.name),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.email)
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/cross/service/auth.service */ "./src/app/cross/service/auth.service.ts");
/* harmony import */ var _app_cross_service_myhttpclient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/cross/service/myhttpclient.service */ "./src/app/cross/service/myhttpclient.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http, authService, router) {
        return _super.call(this, http, authService, router) || this;
    }
    UserService.prototype.getEndPoint = function () {
        return 'user';
    };
    UserService.prototype.verifyToken = function () {
        return this.http.post(this.getEndPointUri() + 'verifyToken', {}, this.getHttpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    /** GET heroes from the server */
    UserService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.getEndPointUri() + 'login', { email: email, password: password }, this.getHttpOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            if (data) {
                _this.authService.setToken(JSON.stringify(data));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('userLogin', [])));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_cross_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}(_app_cross_service_myhttpclient_service__WEBPACK_IMPORTED_MODULE_5__["MyHttpClientService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
var config = {
    serverUrl: 'http://localhost:8000/api/',
    version: '1.0'
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/edoardo/Documents/development/accounting-laravel/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map