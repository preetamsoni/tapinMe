function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api-loader/api-loader.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/api-loader/api-loader.component.ts ***!
    \****************************************************/

  /*! exports provided: ApiLoaderComponent */

  /***/
  function srcAppApiLoaderApiLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiLoaderComponent", function () {
      return ApiLoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApiLoaderComponent =
    /*#__PURE__*/
    function () {
      function ApiLoaderComponent() {
        _classCallCheck(this, ApiLoaderComponent);
      }

      _createClass(ApiLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApiLoaderComponent;
    }();

    ApiLoaderComponent.ɵfac = function ApiLoaderComponent_Factory(t) {
      return new (t || ApiLoaderComponent)();
    };

    ApiLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApiLoaderComponent,
      selectors: [["api-loader"]],
      decls: 2,
      vars: 0,
      consts: [[1, "loader-wrapper"], [1, "loader"]],
      template: function ApiLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".loader-wrapper[_ngcontent-%COMP%] {\n  z-index: 999;\n  position: fixed;\n  background-color: black;\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%] {\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #3a8e82;\n  top: 50%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  left: 47%;\n  position: absolute;\n  background-color: transparent;\n  z-index: 2;\n}\n\n\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvZnRyZWZpbmUvUHJlZXRhbS90YWtlLWluL3NyYy9hcHAvYXBpLWxvYWRlci9hcGktbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcGktbG9hZGVyL2FwaS1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRENBLFdBQUE7O0FBQ0E7RUFDSTtJQUFLLCtCQUFBO0VDR1A7RURGRTtJQUFPLGlDQUFBO0VDS1Q7QUFDRjs7QURIQTtFQUNJO0lBQUssdUJBQUE7RUNNUDtFRExFO0lBQU8seUJBQUE7RUNRVDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBpLWxvYWRlci9hcGktbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci13cmFwcGVye1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6MDtcbn1cbi5sb2FkZXIge1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjM2E4ZTgyO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBsZWZ0OiA0NyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi8qIFNhZmFyaSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn0iLCIubG9hZGVyLXdyYXBwZXIge1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG4ubG9hZGVyIHtcbiAgYm9yZGVyOiA4cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgIzNhOGU4MjtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgbGVmdDogNDclO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBTYWZhcmkgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'api-loader',
          templateUrl: './api-loader.component.html',
          styleUrls: ['./api-loader.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-home/user-home.component */
    "./src/app/user-home/user-home.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/change-password/change-password.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main-home/main-home.component */
    "./src/app/main-home/main-home.component.ts");
    /* harmony import */


    var _fetch_profile_fetch_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./fetch-profile/fetch-profile.component */
    "./src/app/fetch-profile/fetch-profile.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      data: {
        title: 'Login'
      }
    }, {
      path: 'sign-up',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
      data: {
        title: 'sign-up'
      }
    }, {
      path: 'user-home/:username',
      component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"],
      data: {
        title: 'sign-up'
      }
    }, {
      path: 'edit-profile',
      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"],
      data: {
        title: 'edit-profile'
      }
    }, {
      path: 'settings',
      component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
      data: {
        title: 'edit-profile'
      }
    }, {
      path: 'change-password',
      component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"],
      data: {
        title: 'edit-profile'
      }
    }, {
      path: 'user/:username',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
      data: {
        title: 'user'
      }
    }, {
      path: 'main-home/:userId',
      component: _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_10__["MainHomeComponent"],
      data: {
        title: 'user'
      }
    }, {
      path: 'fetch-profile/:username',
      component: _fetch_profile_fetch_profile_component__WEBPACK_IMPORTED_MODULE_11__["FetchProfileComponent"],
      data: {
        title: 'fetchs-profile'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_loader_api_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api-loader/api-loader.component */
    "./src/app/api-loader/api-loader.component.ts");

    function AppComponent_api_loader_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "api-loader");
      }
    }

    var AppComponent = function AppComponent(authService, cdr) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.authService = authService;
      this.cdr = cdr;
      this.loader = false;
      this.authService.getLoader().subscribe(function (value) {
        setTimeout(function () {
          _this.loader = value;
        }, 100);
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_api_loader_0_Template, 1, 0, "api-loader", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _api_loader_api_loader_component__WEBPACK_IMPORTED_MODULE_4__["ApiLoaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-home/user-home.component */
    "./src/app/user-home/user-home.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/change-password/change-password.component.ts");
    /* harmony import */


    var _api_loader_api_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./api-loader/api-loader.component */
    "./src/app/api-loader/api-loader.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _edit_profile_image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./edit-profile/image-cropper-modal/image-cropper-modal.component */
    "./src/app/edit-profile/image-cropper-modal/image-cropper-modal.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./main-home/main-home.component */
    "./src/app/main-home/main-home.component.ts");
    /* harmony import */


    var _fetch_profile_fetch_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./fetch-profile/fetch-profile.component */
    "./src/app/fetch-profile/fetch-profile.component.ts");

    function tokenGetter() {
      return localStorage.getItem('token');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
        positionClass: 'toast-top-right',
        preventDuplicates: false
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__["ImageCropperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['18.191.52.3'],
          blacklistedRoutes: ['http://18.191.52.3/TapinBackend/public/api/login']
        }
      }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_12__["UserHomeComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_14__["EditProfileComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"], _api_loader_api_loader_component__WEBPACK_IMPORTED_MODULE_18__["ApiLoaderComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"], _edit_profile_image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_20__["ImageCropperModalComponent"], _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_22__["MainHomeComponent"], _fetch_profile_fetch_profile_component__WEBPACK_IMPORTED_MODULE_23__["FetchProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__["ImageCropperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_12__["UserHomeComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_14__["EditProfileComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"], _api_loader_api_loader_component__WEBPACK_IMPORTED_MODULE_18__["ApiLoaderComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"], _edit_profile_image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_20__["ImageCropperModalComponent"], _main_home_main_home_component__WEBPACK_IMPORTED_MODULE_22__["MainHomeComponent"], _fetch_profile_fetch_profile_component__WEBPACK_IMPORTED_MODULE_23__["FetchProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
            positionClass: 'toast-top-right',
            preventDuplicates: false
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_15__["ImageCropperModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['18.191.52.3'],
              blacklistedRoutes: ['http://18.191.52.3/TapinBackend/public/api/login']
            }
          }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/change-password/change-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/change-password/change-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(router, toast, authService, formBuilder) {
        _classCallCheck(this, ChangePasswordComponent);

        this.router = router;
        this.toast = toast;
        this.authService = authService;
        this.formBuilder = formBuilder;
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetPasswordForm = this.formBuilder.group({
            current_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigateByUrl('/settings');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this2 = this;

          var username = localStorage.getItem('username');
          this.authService.setLoader(true);
          var body = new URLSearchParams();
          body.set('current_password', data.current_password);
          body.set('password', data.password);
          this.authService.postData('users/reset-password', body.toString()).subscribe(function (response) {
            _this2.authService.setLoader(false);

            if (response.status === 200) {
              var res = response.data;

              _this2.router.navigateByUrl('/user-home/' + username);
            }
          }, function (error) {
            _this2.authService.setLoader(false);

            _this2.toast.error(error);
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 27,
      vars: 2,
      consts: [[1, "headerPanel"], [1, "col-md-6", "offset-md-3"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "text-black"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Popl logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center"], [1, "text-black", "btn", 3, "click"], [1, "main-section"], [1, "w-100", "text-center", "float-left", "mt-3"], [1, "settingTitle", "mb-3"], [3, "formGroup"], [1, "form-group"], ["type", "password", "formControlName", "current_password", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Current password", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "New password", 1, "form-control"], ["type", "password", "formControlName", "confirm_password", "placeholder", "Confirm new password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled", "click"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_a_click_10_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_25_listener() {
            return ctx.onSubmit(ctx.resetPasswordForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.resetPasswordForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".headerPanel[_ngcontent-%COMP%] {width: 100%; float: left; padding: 10px 0; border-bottom: 1px solid #DADADA;}\n.justify-space-between[_ngcontent-%COMP%] {justify-content: space-between;}\n.aline-center[_ngcontent-%COMP%]{align-items: center;}\n.rippllogo[_ngcontent-%COMP%] {height: 40px; padding: 1px}\n.text-black[_ngcontent-%COMP%]{color: #000}\n.settingTitle[_ngcontent-%COMP%]{font-size: 1.5rem;}\n.form-control[_ngcontent-%COMP%]:focus:hover, .form-control[_ngcontent-%COMP%]:visited:hover, .form-control[_ngcontent-%COMP%]:active, .form-control[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]{background-color: #e9e9e9; padding: 8px; border-radius: 10px;}\n.form-control[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:visited{box-shadow: none; background-color: #ffffff}\n.save-button[_ngcontent-%COMP%]{background-color: #00aced; border-color: #00aced; font-size: 20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0NBQWdDLENBQUM7QUFDMUYsd0JBQXdCLDhCQUE4QixDQUFDO0FBQ3ZELGNBQWMsbUJBQW1CLENBQUM7QUFDbEMsWUFBWSxZQUFZLEVBQUUsWUFBWTtBQUN0QyxZQUFZLFdBQVc7QUFDdkIsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxpSEFBaUgseUJBQXlCLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO0FBQzlLLDJDQUEyQyxnQkFBZ0IsRUFBRSx5QkFBeUI7QUFDdEYsYUFBYSx5QkFBeUIsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyUGFuZWwge3dpZHRoOiAxMDAlOyBmbG9hdDogbGVmdDsgcGFkZGluZzogMTBweCAwOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RBREFEQTt9XG4uanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fVxuLmFsaW5lLWNlbnRlcnthbGlnbi1pdGVtczogY2VudGVyO31cbi5yaXBwbGxvZ28ge2hlaWdodDogNDBweDsgcGFkZGluZzogMXB4fVxuLnRleHQtYmxhY2t7Y29sb3I6ICMwMDB9XG4uc2V0dGluZ1RpdGxle2ZvbnQtc2l6ZTogMS41cmVtO31cbi5mb3JtLWNvbnRyb2w6Zm9jdXM6aG92ZXIsIC5mb3JtLWNvbnRyb2w6dmlzaXRlZDpob3ZlciwgLmZvcm0tY29udHJvbDphY3RpdmUsIC5mb3JtLWNvbnRyb2w6aG92ZXIsIC5mb3JtLWNvbnRyb2x7YmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTsgcGFkZGluZzogOHB4OyBib3JkZXItcmFkaXVzOiAxMHB4O31cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLWNvbnRyb2w6dmlzaXRlZHtib3gtc2hhZG93OiBub25lOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmfVxuLnNhdmUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6ICMwMGFjZWQ7IGJvcmRlci1jb2xvcjogIzAwYWNlZDsgZm9udC1zaXplOiAyMHB4O30iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-password',
          templateUrl: './change-password.component.html',
          styleUrls: ['./change-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-profile/edit-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-cropper-modal/image-cropper-modal.component */
    "./src/app/edit-profile/image-cropper-modal/image-cropper-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function EditProfileComponent_img_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 90);
      }

      if (rf & 2) {
        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r63.logoImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function EditProfileComponent_img_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 91);
      }

      if (rf & 2) {
        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r64.selectedPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var EditProfileComponent =
    /*#__PURE__*/
    function () {
      function EditProfileComponent(router, modalService, toast, authService, formBuilder) {
        _classCallCheck(this, EditProfileComponent);

        this.router = router;
        this.modalService = modalService;
        this.toast = toast;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.croppedImage1 = '';
        this.selectedImage = '';
        this.selectedPic = '';
        this.logoImage = 'assets/images/users.jpg';
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.updateForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            bio: [''],
            instagram: [''],
            whatsapp: [''],
            snapchat: [''],
            facebook: [''],
            mail: [''],
            twitter: [''],
            linkedin: [''],
            imessage: [''],
            customLink: [''],
            youtube: [''],
            tiktok: [''],
            soundcloud: [''],
            spotify: [''],
            applemusic: [''],
            venmo: [''],
            cashapp: [''],
            safari: [''],
            twitch: [''],
            logo: ['']
          });
        } // fileChangeEvent(event: any) {
        //   if (event) {
        //     this.imageChangedEvent = event;
        //     document.getElementById('openModalButton').click();
        //   }
        // }

      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          var _this3 = this;

          console.log(event);
          var file = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            var modalRef = _this3.modalService.open(_image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_3__["ImageCropperModalComponent"], {
              centered: true
            });

            modalRef.componentInstance.imageBase64 = reader.result;
            modalRef.result.then(function (result) {
              if (result) {
                _this3.selectedPic = result;
                _this3.cropImg = _this3.dataURLtoFile(_this3.selectedPic, 'logo');
              }
            });
          };
        }
      }, {
        key: "onSelect",
        value: function onSelect(base64Img) {
          var base64 = base64Img;
          var arrayBufferFromBase64 = this.convertDataURIToBinary(base64);
          var imagemAsFile = new File([arrayBufferFromBase64], 'Nome da Imagem', {
            type: 'image/png'
          }); // this.files.push(imagemAsFile);
        }
      }, {
        key: "convertDataURIToBinary",
        value: function convertDataURIToBinary(dataURI) {
          var BASE64_MARKER = ';base64,';
          var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
          var base64 = dataURI.substring(base64Index);
          var raw = window.atob(base64);
          var rawLength = raw.length;
          var array = new Uint8Array(new ArrayBuffer(rawLength));

          for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
          }

          return array;
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this4 = this;

          var userId = localStorage.getItem('userId');
          this.authService.setLoader(true);
          this.authService.getData('users/' + userId).subscribe(function (response) {
            _this4.authService.setLoader(false);

            if (response.data) {
              var userData = response.data;

              _this4.updateForm.patchValue({
                username: userData.username,
                bio: userData.bio
              });

              if (userData.profile_image != null) {
                _this4.selectedPic = userData.profile_image;
              }

              for (var i = 0; i < userData.social.length; i++) {
                if (userData.social[i].title === 'applemusic') {
                  _this4.updateForm.patchValue({
                    applemusic: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'instagram') {
                  _this4.updateForm.patchValue({
                    instagram: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'whatsapp') {
                  _this4.updateForm.patchValue({
                    whatsapp: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'snapchat') {
                  _this4.updateForm.patchValue({
                    snapchat: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'facebook') {
                  _this4.updateForm.patchValue({
                    facebook: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'mail') {
                  _this4.updateForm.patchValue({
                    mail: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'twitter') {
                  _this4.updateForm.patchValue({
                    twitter: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'linkedin') {
                  _this4.updateForm.patchValue({
                    linkedin: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'imessage') {
                  _this4.updateForm.patchValue({
                    imessage: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'customLink') {
                  _this4.updateForm.patchValue({
                    customLink: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'youtube') {
                  _this4.updateForm.patchValue({
                    youtube: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'tiktok') {
                  _this4.updateForm.patchValue({
                    tiktok: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'soundcloud') {
                  _this4.updateForm.patchValue({
                    soundcloud: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'spotify') {
                  _this4.updateForm.patchValue({
                    spotify: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'venmo') {
                  _this4.updateForm.patchValue({
                    venmo: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'cashapp') {
                  _this4.updateForm.patchValue({
                    cashapp: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'safari') {
                  _this4.updateForm.patchValue({
                    safari: userData.social[i].link
                  });
                }

                if (userData.social[i].title === 'twitch') {
                  _this4.updateForm.patchValue({
                    twitch: userData.social[i].link
                  });
                }
              }
            }
          }, function (error) {
            _this4.authService.setLoader(false);

            _this4.toast.error(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this5 = this;

          var userId = localStorage.getItem('userId');
          var username = localStorage.getItem('username');
          this.authService.setLoader(true); // if (this.selectedImage === '') {
          //   const logoImg = this.logoImage;
          //   this.getBase64ImageFromURL(logoImg).subscribe(base64data => {
          //     // this is the image as dataUrl
          //     this.base64Image = 'data:image/jpg;base64,' + base64data;
          //     const crop = this.dataURLtoFile(this.base64Image, 'logo');
          //     data.logo = crop;
          //     // formData.logo = crop;
          //   });
          // } else {
          //   data.logo = this.cropImg;
          //   // formData.logo = this.selectedImage;
          // }

          var addAllLinks = [{
            title: "whatsapp",
            link: data.whatsapp
          }, {
            title: "facebook",
            link: data.facebook
          }, {
            title: "mail",
            link: data.mail
          }, {
            title: "instagram",
            link: data.instagram
          }, {
            title: "snapchat",
            link: data.snapchat
          }, {
            title: "twitter",
            link: data.twitter
          }, {
            title: "linkedin",
            link: data.linkedin
          }, {
            title: "imessage",
            link: data.imessage
          }, {
            title: "youtube",
            link: data.youtube
          }, {
            title: "tiktok",
            link: data.tiktok
          }, {
            title: "soundcloud",
            link: data.soundcloud
          }, {
            title: "spotify",
            link: data.spotify
          }, {
            title: "applemusic",
            link: data.applemusic
          }, {
            title: "cashapp",
            link: data.cashapp
          }, {
            title: "safari",
            link: data.safari
          }, {
            title: "customLink",
            link: data.customLink
          }, {
            title: "twitch",
            link: data.twitch
          }];
          var body = new URLSearchParams();

          if (this.cropImg) {
            body.set('profile_image', this.selectedPic);
          } else {
            body.set('profile_image', '');
          }

          body.set('username', data.username);
          body.set('bio', data.bio);

          for (var i = 0; i < addAllLinks.length; i++) {
            body.set('social[' + [i] + '][link]', addAllLinks[i].link);
            body.set('social[' + [i] + '][title]', addAllLinks[i].title);
          }

          var dataUpdate = this.authService.setData(data);
          this.authService.postData('users/' + userId, body.toString()).subscribe(function (response) {
            _this5.authService.setLoader(false);

            if (response.data) {
              _this5.authService.setUserData({
                'username': response.data.username,
                'bio': response.data.bio
              });

              var res = response.data;

              _this5.router.navigateByUrl('/user-home/' + username);
            }
          }, function (error) {
            _this5.authService.setLoader(false);

            _this5.toast.error(error);
          });
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "onCloseDialog",
        value: function onCloseDialog() {
          var crop = this.dataURLtoFile(this.croppedImage, 'logo');
          this.selectedImage = crop;
          this.croppedImage1 = this.croppedImage;
        }
      }, {
        key: "dataURLtoFile",
        value: function dataURLtoFile(dataurl, filename) {
          var arr = dataurl.split(',');
          var mime = arr[0].match(/:(.*?);/)[1];
          var bstr = atob(arr[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          return new File([u8arr], filename, {
            type: mime
          });
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var binary = atob(dataURI.split(',')[1]);
          var array = [];

          for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
          }

          return new Blob([new Uint8Array(array)], {
            type: 'image/png'
          });
        }
      }, {
        key: "getBase64ImageFromURL",
        value: function getBase64ImageFromURL(url) {
          var _this6 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // create an image object
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;

            if (!img.complete) {
              // This will call another method that will create image from url
              img.onload = function () {
                observer.next(_this6.getBase64Image(img));
                observer.complete();
              };

              img.onerror = function (err) {
                observer.error(err);
              };
            } else {
              observer.next(_this6.getBase64Image(img));
              observer.complete();
            }
          });
        }
      }, {
        key: "getBase64Image",
        value: function getBase64Image(img) {
          // We create a HTML canvas object that will create a 2d image
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d'); // This will draw image

          ctx.drawImage(img, 0, 0); // Convert the drawn image to Data URL

          var dataURL = canvas.toDataURL('image/png');
          return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigateByUrl('/settings');
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
      return new (t || EditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditProfileComponent,
      selectors: [["app-edit-profile"]],
      decls: 287,
      vars: 11,
      consts: [[1, "headerPanel"], [1, "col-md-6", "offset-md-3"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "text-black", 3, "click"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Popl logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center"], [1, "text-black"], ["name", "updateForm", "novalidate", "", 3, "formGroup"], [1, "container"], [1, "row", "main-row"], [1, "col-12"], [1, "MainuserSection"], [1, "profile-logo", "mt-4"], ["for", "upload-image"], ["style", "border-radius: 100%;", 3, "src", 4, "ngIf"], ["style", "border-radius: 100%;", "class", "cropped-image", 3, "src", 4, "ngIf"], [1, "btm"], ["src", "./assets/camera.png"], ["type", "file", "id", "upload-image", "formControlName", "logo", "accept", "image/png, image/jpeg", 2, "display", "none", 3, "change"], [1, "user-detail"], [1, "form-group"], ["type", "text", "id", "username", "formControlName", "username", "value", "kedar", 1, "form-control", "text-dark", "bg-gray"], ["rows", "3", "formControlName", "bio", 1, "form-control", "bg-gray"], [1, "profile-detail"], [1, "profile-public"], ["type", "checkbox", "checked", "", "data-toggle", "toggle", "data-size", "lg"], [1, "private_text", "proxima-nova"], [1, "social-part"], [1, "row"], [1, "col-10"], [1, "sr-only"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/social/insta.png"], ["type", "text", "formControlName", "instagram", "placeholder", "Username", 1, "form-control"], [1, "fa", "fa-remove", "remove-class"], [1, "col-2", "align-center"], [1, "fa", "fa-info-circle", "info-icon"], ["src", "assets/social/whatsapp.png"], ["type", "text", "formControlName", "whatsapp", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/mailicon.png"], ["type", "text", "formControlName", "mail", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/facebookicon.png"], ["type", "text", "formControlName", "facebook", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/snapchat.png"], ["type", "text", "formControlName", "snapchat", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/youtube.png"], ["type", "text", "formControlName", "youtube", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/twitter.png"], ["type", "text", "formControlName", "twitter", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/linkedin.png"], ["type", "text", "formControlName", "linkedin", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/imessage.png"], ["type", "text", "formControlName", "imessage", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/customlink.png"], ["type", "text", "formControlName", "customLink", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/twitch.png"], ["type", "text", "formControlName", "twitch", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/tiktoknew.png"], ["type", "text", "formControlName", "tiktok", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/soundcloudnew.png"], ["type", "text", "formControlName", "soundcloud", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/spotify.png"], ["type", "text", "formControlName", "spotify", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/applemusicicon.png"], ["type", "text", "formControlName", "applemusic", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/venmo.png"], ["type", "text", "formControlName", "venmo", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/cash.png"], ["type", "text", "formControlName", "cashapp", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/safari.png"], ["type", "text", "formControlName", "safari", "placeholder", "Username", 1, "form-control"], [1, "save-bottom-sectopn"], [1, "col-md-4", "offset-md-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "openModalButton", "data-toggle", "modal", "data-target", "#myModal", 3, "hidden"], ["id", "myModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["format", "png", "outputType", "base64", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "onlyScaleDown", "roundCropper", "imageCropped"], [1, "modal-footer"], [1, "col-lg-12", "text-center", "mt-3"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "box-shadow--16dp", 3, "click"], [2, "border-radius", "100%", 3, "src"], [1, "cropped-image", 2, "border-radius", "100%", 3, "src"]],
      template: function EditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_a_click_4_listener() {
            return ctx.settings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditProfileComponent_img_22_Template, 1, 1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EditProfileComponent_img_23_Template, 1, 1, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProfileComponent_Template_input_change_26_listener($event) {
            return ctx.fileChangeEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Profile Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Make profile public");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "When your profile is public, others can access your profile using the link:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "tapinme.co/shani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_268_listener() {
            return ctx.onSubmit(ctx.updateForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Open Modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h4", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Profile Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "button", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "image-cropper", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function EditProfileComponent_Template_image_cropper_imageCropped_282_listener($event) {
            return ctx.imageCropped($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "button", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_285_listener() {
            return ctx.onCloseDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPic == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedPic != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 3 / 3)("onlyScaleDown", true)("roundCropper", true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropperComponent"]],
      styles: [".top-headear[_ngcontent-%COMP%]{\n    width: 33.33%;\n}\n.headerPanel[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 10px 0;\n    border-bottom: 1px solid #DADADA;\n}\n.rippllogo[_ngcontent-%COMP%] {\n    height: 40px;\n    padding: 1px\n}\n.EditProfile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: black;\n}\n.main-row[_ngcontent-%COMP%]{\n    justify-content: center;\n    align-items: center;\n}\n.justify-space-between[_ngcontent-%COMP%] {\n    justify-content: space-between\n}\n.aline-center[_ngcontent-%COMP%]{align-items: center;}\n.profile-logo[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n.profile-logo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 0px !important;\n    display: block !important;\n    margin-left: auto;\n    margin-right: auto;\n    width: 30%;\n    position: relative;\n  }\n.profile-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: block;\n    border-radius: 50%;\n    width: 68%;\n   }\n.profile-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-top: -17px;\n    position: absolute;\n    right: 190px;\n  }\n.btm[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 100%;\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    right: 55px;\n    margin-top: -43px;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n  }\n.btm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px;\n    height: 15px;\n    margin: 7px;\n  }\n\n.ChangePhoto[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    margin-bottom: 10px;\n    float: left;\n}\n.private_text[_ngcontent-%COMP%]{\n\tfont-size: 14px;\n    float: left;\n    text-align: center;\n    margin-bottom: 25px;\n    margin-top: 10px;\n    width: 100%;\n}\n.profile-detail[_ngcontent-%COMP%]{\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.user-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color: #818181}\n.user-detail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    padding: 8px;\n    border-radius: 10px;\n}\n.bg-gray[_ngcontent-%COMP%]{background: #e9e9e9;}\n.text-black[_ngcontent-%COMP%]{color: #000}\n.profile-detail[_ngcontent-%COMP%], .user-detail[_ngcontent-%COMP%], .social-part[_ngcontent-%COMP%]{width: 100%; float: left}\n.social-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 20px; height: 20px}\n.social-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background: #e9e9e9;}\n.social-part[_ngcontent-%COMP%]   .remove-class[_ngcontent-%COMP%]{color: #A7A9AB;\n    font-size: 24px;\n    position: absolute;\n    right: 12px;\n    top: 5px;\n    cursor: pointer;\n    z-index: 9;}\n.social-part[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {font-size: 30px; color: #c2c0c0;}\n.align-center[_ngcontent-%COMP%] {text-align: center;}\n.save-bottom-sectopn[_ngcontent-%COMP%] { width: 100%; z-index: 999999999999; background-color: white; overflow-x: hidden; transition: 0.5s; color: #818181; position: fixed; bottom: 0; height: 70px;display: flex; align-items: center;}\n.save-bottom-sectopn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width: 100%; float: left}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJO0FBQ0o7QUFDQSxjQUFjLG1CQUFtQixDQUFDO0FBR2xDO0lBQ0ksV0FBVztFQUNiO0FBRUE7SUFDRSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0dBQ1g7QUFHRDtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEdBQTRHO0VBQzlHO0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUVGOzs7Ozs7Ozs7Ozs7R0FZRztBQUNIO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7Q0FDQyxlQUFlO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBLFNBQVMsbUJBQW1CLENBQUM7QUFDN0IsWUFBWSxXQUFXO0FBQ3ZCLDRDQUE0QyxXQUFXLEVBQUUsV0FBVztBQUNwRSxpQkFBaUIsV0FBVyxFQUFFLFlBQVk7QUFDMUMsbUJBQW1CLG1CQUFtQixDQUFDO0FBQ3ZDLDJCQUEyQixjQUFjO0lBQ3JDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVSxDQUFDO0FBQ2YseUJBQXlCLGVBQWUsRUFBRSxjQUFjLENBQUM7QUFFekQsZUFBZSxrQkFBa0IsQ0FBQztBQUVsQyx1QkFBdUIsV0FBVyxFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUM7QUFFdE4sNEJBQTRCLFdBQVcsRUFBRSxXQUFXIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1oZWFkZWFye1xuICAgIHdpZHRoOiAzMy4zMyU7XG59XG4uaGVhZGVyUGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RBREFEQTtcbn1cbi5yaXBwbGxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAxcHhcbn1cbi5FZGl0UHJvZmlsZSBpIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLm1haW4tcm93e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cbn1cbi5hbGluZS1jZW50ZXJ7YWxpZ24taXRlbXM6IGNlbnRlcjt9XG5cblxuLnByb2ZpbGUtbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5wcm9maWxlLWxvZ28gbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAucHJvZmlsZS1sb2dvIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA2OCU7XG4gICB9XG4gIFxuICBcbiAgLnByb2ZpbGUtbG9nbyBpIHtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE5MHB4O1xuICB9XG4gIC5idG0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTVweDtcbiAgICBtYXJnaW4tdG9wOiAtNDNweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gIH1cbiAgXG4gIC5idG0gaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gIH1cblxuLyogLnByb2ZpbGUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnByb2ZpbGUtaW1hZ2UgaSB7XG4gICAgY29sb3I6ICNkM2QzZDM7XG4gICAgZm9udC1zaXplOiAxNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogMTYwcHg7XG59ICovXG4uQ2hhbmdlUGhvdG8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnByaXZhdGVfdGV4dHtcblx0Zm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZS1kZXRhaWx7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4udXNlci1kZXRhaWwgbGFiZWx7Y29sb3I6ICM4MTgxODF9XG4udXNlci1kZXRhaWwgaW5wdXR7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmctZ3JheXtiYWNrZ3JvdW5kOiAjZTllOWU5O31cbi50ZXh0LWJsYWNre2NvbG9yOiAjMDAwfVxuLnByb2ZpbGUtZGV0YWlsLCAudXNlci1kZXRhaWwsIC5zb2NpYWwtcGFydHt3aWR0aDogMTAwJTsgZmxvYXQ6IGxlZnR9XG4uc29jaWFsLXBhcnQgaW1ne3dpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHh9XG4uc29jaWFsLXBhcnQgaW5wdXR7YmFja2dyb3VuZDogI2U5ZTllOTt9XG4uc29jaWFsLXBhcnQgLnJlbW92ZS1jbGFzc3tjb2xvcjogI0E3QTlBQjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIHRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5O31cbi5zb2NpYWwtcGFydCAuaW5mby1pY29uIHtmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjYzJjMGMwO31cblxuLmFsaWduLWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cblxuLnNhdmUtYm90dG9tLXNlY3RvcG4geyB3aWR0aDogMTAwJTsgei1pbmRleDogOTk5OTk5OTk5OTk5OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgb3ZlcmZsb3cteDogaGlkZGVuOyB0cmFuc2l0aW9uOiAwLjVzOyBjb2xvcjogIzgxODE4MTsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDA7IGhlaWdodDogNzBweDtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cblxuLnNhdmUtYm90dG9tLXNlY3RvcG4gYnV0dG9ue3dpZHRoOiAxMDAlOyBmbG9hdDogbGVmdH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-profile',
          templateUrl: './edit-profile.component.html',
          styleUrls: ['./edit-profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-profile/image-cropper-modal/image-cropper-modal.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/edit-profile/image-cropper-modal/image-cropper-modal.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ImageCropperModalComponent */

  /***/
  function srcAppEditProfileImageCropperModalImageCropperModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageCropperModalComponent", function () {
      return ImageCropperModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function ImageCropperModalComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "image-cropper", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function ImageCropperModalComponent_div_5_Template_image_cropper_imageCropped_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.imageCropped($event);
        })("imageLoaded", function ImageCropperModalComponent_div_5_Template_image_cropper_imageLoaded_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r60.imageLoaded();
        })("cropperReady", function ImageCropperModalComponent_div_5_Template_image_cropper_cropperReady_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.cropperReady($event);
        })("loadImageFailed", function ImageCropperModalComponent_div_5_Template_image_cropper_loadImageFailed_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r62.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r57.showCropper ? null : "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageBase64", ctx_r57.imageBase64)("maintainAspectRatio", false)("containWithinAspectRatio", ctx_r57.containWithinAspectRatio)("cropperMinWidth", 128)("onlyScaleDown", true)("roundCropper", false)("canvasRotation", ctx_r57.canvasRotation)("transform", ctx_r57.transform)("alignImage", "center");
      }
    }

    var ImageCropperModalComponent =
    /*#__PURE__*/
    function () {
      function ImageCropperModalComponent(activeModal) {
        _classCallCheck(this, ImageCropperModalComponent);

        this.activeModal = activeModal;
        this.croppedImage = '';
        this.canvasRotation = 0;
        this.rotation = 0;
        this.scale = 1;
        this.showCropper = false;
        this.containWithinAspectRatio = false;
        this.transform = {};
      }

      _createClass(ImageCropperModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64; // console.log(event, base64ToFile(event.base64));
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {
          this.showCropper = true; // this.apiloader.setLoader(false);
        }
      }, {
        key: "cropperReady",
        value: function cropperReady(sourceImageDimensions) {// console.log('Cropper ready', sourceImageDimensions);
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {
          console.log('Load failed'); // this.apiloader.setLoader(false);
        }
      }, {
        key: "passBack",
        value: function passBack() {
          this.activeModal.close(this.croppedImage);
        }
      }]);

      return ImageCropperModalComponent;
    }();

    ImageCropperModalComponent.ɵfac = function ImageCropperModalComponent_Factory(t) {
      return new (t || ImageCropperModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    ImageCropperModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageCropperModalComponent,
      selectors: [["app-image-cropper-modal"]],
      inputs: {
        imageBase64: "imageBase64"
      },
      decls: 11,
      vars: 1,
      consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["format", "jpeg", 1, "image-cropper", 3, "imageBase64", "maintainAspectRatio", "containWithinAspectRatio", "cropperMinWidth", "onlyScaleDown", "roundCropper", "canvasRotation", "transform", "alignImage", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"]],
      template: function ImageCropperModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageCropperModalComponent_Template_button_click_1_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageCropperModalComponent_div_5_Template, 2, 11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageCropperModalComponent_Template_button_click_7_listener() {
            return ctx.passBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageCropperModalComponent_Template_button_click_9_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageBase64);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_3__["ImageCropperComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9pbWFnZS1jcm9wcGVyLW1vZGFsL2ltYWdlLWNyb3BwZXItbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-image-cropper-modal',
          templateUrl: './image-cropper-modal.component.html',
          styleUrls: ['./image-cropper-modal.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        imageBase64: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fetch-profile/fetch-profile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fetch-profile/fetch-profile.component.ts ***!
    \**********************************************************/

  /*! exports provided: FetchProfileComponent */

  /***/
  function srcAppFetchProfileFetchProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchProfileComponent", function () {
      return FetchProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _edit_profile_image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../edit-profile/image-cropper-modal/image-cropper-modal.component */
    "./src/app/edit-profile/image-cropper-modal/image-cropper-modal.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    var FetchProfileComponent =
    /*#__PURE__*/
    function () {
      function FetchProfileComponent(router, modalService, activatedRoute, toast, authService, formBuilder) {
        _classCallCheck(this, FetchProfileComponent);

        this.router = router;
        this.modalService = modalService;
        this.activatedRoute = activatedRoute;
        this.toast = toast;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.croppedImage1 = '';
        this.selectedImage = '';
        this.logoImage = 'assets/images/users.jpg';
      }

      _createClass(FetchProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.username = this.activatedRoute.snapshot.url[1].path;
          this.getData();
          this.updateForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            bio: [''],
            instagram: [''],
            whatsapp: [''],
            snapchat: [''],
            facebook: [''],
            mail: [''],
            twitter: [''],
            linkedin: [''],
            imessage: [''],
            customLink: [''],
            youtube: [''],
            tiktok: [''],
            soundcloud: [''],
            spotify: [''],
            applemusic: [''],
            venmo: [''],
            cashapp: [''],
            safari: [''],
            twitch: [''],
            logo: ['']
          });
        } // fileChangeEvent(event: any) {
        //   if (event) {
        //     this.imageChangedEvent = event;
        //     document.getElementById('openModalButton').click();
        //   }
        // }

      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          console.log(event);
          var modalRef = this.modalService.open(_edit_profile_image_cropper_modal_image_cropper_modal_component__WEBPACK_IMPORTED_MODULE_3__["ImageCropperModalComponent"], {
            centered: true
          });
          modalRef.componentInstance.imageBase64 = event.target;
          modalRef.result.then(function (result) {
            if (result) {
              console.log('jhjhg'); // this.selectedPic = result;
              // this.onSelect(result);
            }
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(base64Img) {
          var base64 = base64Img;
          var arrayBufferFromBase64 = this.convertDataURIToBinary(base64);
          var imagemAsFile = new File([arrayBufferFromBase64], 'Nome da Imagem', {
            type: 'image/png'
          }); // this.files.push(imagemAsFile);
        }
      }, {
        key: "convertDataURIToBinary",
        value: function convertDataURIToBinary(dataURI) {
          var BASE64_MARKER = ';base64,';
          var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
          var base64 = dataURI.substring(base64Index);
          var raw = window.atob(base64);
          var rawLength = raw.length;
          var array = new Uint8Array(new ArrayBuffer(rawLength));

          for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
          }

          return array;
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this7 = this;

          this.authService.setLoader(true);
          this.authService.getData('find_user/' + this.username).subscribe(function (response) {
            _this7.authService.setLoader(false);

            if (response.user) {
              var userProfileData = response.user;

              _this7.updateForm.patchValue({
                username: userProfileData[0][0].username,
                bio: userProfileData[0][0].bio
              });
            }

            var data = [];
            var userData = response.data;

            if (response.data) {
              console.log(response.data);

              for (var i = 0; i < userData.length; i++) {
                if (userData[i].title === 'applemusic') {
                  _this7.updateForm.patchValue({
                    applemusic: userData[i].link
                  });
                }

                if (userData[i].title === 'instagram') {
                  _this7.updateForm.patchValue({
                    instagram: userData[i].link
                  });
                }

                if (userData[i].title === 'whatsapp') {
                  _this7.updateForm.patchValue({
                    whatsapp: userData[i].link
                  });
                }

                if (userData[i].title === 'snapchat') {
                  _this7.updateForm.patchValue({
                    snapchat: userData[i].link
                  });
                }

                if (userData[i].title === 'facebook') {
                  _this7.updateForm.patchValue({
                    facebook: userData[i].link
                  });
                }

                if (userData[i].title === 'mail') {
                  _this7.updateForm.patchValue({
                    mail: userData[i].link
                  });
                }

                if (userData[i].title === 'twitter') {
                  _this7.updateForm.patchValue({
                    twitter: userData[i].link
                  });
                }

                if (userData[i].title === 'linkedin') {
                  _this7.updateForm.patchValue({
                    linkedin: userData[i].link
                  });
                }

                if (userData[i].title === 'imessage') {
                  _this7.updateForm.patchValue({
                    imessage: userData[i].link
                  });
                }

                if (userData[i].title === 'customLink') {
                  _this7.updateForm.patchValue({
                    customLink: userData[i].link
                  });
                }

                if (userData[i].title === 'youtube') {
                  _this7.updateForm.patchValue({
                    youtube: userData[i].link
                  });
                }

                if (userData[i].title === 'tiktok') {
                  _this7.updateForm.patchValue({
                    tiktok: userData[i].link
                  });
                }

                if (userData[i].title === 'soundcloud') {
                  _this7.updateForm.patchValue({
                    soundcloud: userData[i].link
                  });
                }

                if (userData[i].title === 'spotify') {
                  _this7.updateForm.patchValue({
                    spotify: userData[i].link
                  });
                }

                if (userData[i].title === 'venmo') {
                  _this7.updateForm.patchValue({
                    venmo: userData[i].link
                  });
                }

                if (userData[i].title === 'cashapp') {
                  _this7.updateForm.patchValue({
                    cashapp: userData[i].link
                  });
                }

                if (userData[i].title === 'safari') {
                  _this7.updateForm.patchValue({
                    safari: userData[i].link
                  });
                }

                if (userData[i].title === 'twitch') {
                  _this7.updateForm.patchValue({
                    twitch: userData[i].link
                  });
                }
              }
            }
          }, function (error) {
            _this7.authService.setLoader(false);

            _this7.toast.error(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this8 = this;

          var userId = localStorage.getItem('userId');
          var username = localStorage.getItem('username');
          this.authService.setLoader(true);

          if (this.selectedImage === '') {
            var logoImg = this.logoImage;
            this.getBase64ImageFromURL(logoImg).subscribe(function (base64data) {
              // this is the image as dataUrl
              _this8.base64Image = 'data:image/jpg;base64,' + base64data;

              var crop = _this8.dataURLtoFile(_this8.base64Image, 'logo');

              data.logo = _this8.base64Image; // formData.logo = crop;
            });
          } else {
            data.logo = this.croppedImage; // formData.logo = this.selectedImage;
          }

          var addAllLinks = [{
            title: "whatsapp",
            link: data.whatsapp
          }, {
            title: "facebook",
            link: data.facebook
          }, {
            title: "mail",
            link: data.mail
          }, {
            title: "instagram",
            link: data.instagram
          }, {
            title: "snapchat",
            link: data.snapchat
          }, {
            title: "twitter",
            link: data.twitter
          }, {
            title: "linkedin",
            link: data.linkedin
          }, {
            title: "imessage",
            link: data.imessage
          }, {
            title: "youtube",
            link: data.youtube
          }, {
            title: "tiktok",
            link: data.tiktok
          }, {
            title: "soundcloud",
            link: data.soundcloud
          }, {
            title: "spotify",
            link: data.spotify
          }, {
            title: "applemusic",
            link: data.applemusic
          }, {
            title: "cashapp",
            link: data.cashapp
          }, {
            title: "safari",
            link: data.safari
          }, {
            title: "customLink",
            link: data.customLink
          }, {
            title: "twitch",
            link: data.twitch
          }];
          var body = new URLSearchParams();
          body.set('username', data.username);
          body.set('bio', data.bio);

          for (var i = 0; i < addAllLinks.length; i++) {
            body.set('social[' + [i] + '][link]', addAllLinks[i].link);
            body.set('social[' + [i] + '][title]', addAllLinks[i].title);
          } //const dataUpdate = this.authService.setData(data);


          this.authService.postData('updateUser/' + this.username, body.toString()).subscribe(function (response) {
            _this8.authService.setLoader(false);

            if (response.data) {
              _this8.authService.setUserData({
                'username': response.data.username,
                'bio': response.data.bio
              });

              var res = response.data;

              _this8.router.navigateByUrl('/main-home/' + res.id);
            }
          }, function (error) {
            _this8.authService.setLoader(false);

            _this8.toast.error(error);
          });
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "onCloseDialog",
        value: function onCloseDialog() {
          var crop = this.dataURLtoFile(this.croppedImage, 'logo');
          this.selectedImage = crop;
          this.croppedImage1 = this.croppedImage;
        }
      }, {
        key: "dataURLtoFile",
        value: function dataURLtoFile(dataurl, filename) {
          var arr = dataurl.split(',');
          var mime = arr[0].match(/:(.*?);/)[1];
          var bstr = atob(arr[1]);
          var n = bstr.length;
          var u8arr = new Uint8Array(n);

          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }

          return new File([u8arr], filename, {
            type: mime
          });
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var binary = atob(dataURI.split(',')[1]);
          var array = [];

          for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
          }

          return new Blob([new Uint8Array(array)], {
            type: 'image/png'
          });
        }
      }, {
        key: "getBase64ImageFromURL",
        value: function getBase64ImageFromURL(url) {
          var _this9 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // create an image object
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;

            if (!img.complete) {
              // This will call another method that will create image from url
              img.onload = function () {
                observer.next(_this9.getBase64Image(img));
                observer.complete();
              };

              img.onerror = function (err) {
                observer.error(err);
              };
            } else {
              observer.next(_this9.getBase64Image(img));
              observer.complete();
            }
          });
        }
      }, {
        key: "getBase64Image",
        value: function getBase64Image(img) {
          // We create a HTML canvas object that will create a 2d image
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d'); // This will draw image

          ctx.drawImage(img, 0, 0); // Convert the drawn image to Data URL

          var dataURL = canvas.toDataURL('image/png');
          return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
        }
      }, {
        key: "settings",
        value: function settings() {
          this.router.navigateByUrl('/settings');
        }
      }]);

      return FetchProfileComponent;
    }();

    FetchProfileComponent.ɵfac = function FetchProfileComponent_Factory(t) {
      return new (t || FetchProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    FetchProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FetchProfileComponent,
      selectors: [["app-fetch-profile"]],
      decls: 282,
      vars: 9,
      consts: [[1, "headerPanel"], [1, "col-md-6", "offset-md-3"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "fa", "fa-sliders", 2, "font-size", "30px", "color", "black"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Popl logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center"], [1, "text-black"], ["name", "updateForm", "novalidate", "", 3, "formGroup"], [1, "container"], [1, "row", "main-row"], [1, "col-12"], [1, "MainuserSection"], [1, "profile-image"], [1, "fa", "fa-user"], ["href", "#", 1, "ChangePhoto"], [1, "user-detail"], [1, "form-group"], ["type", "text", "id", "username", "formControlName", "username", "value", "kedar", 1, "form-control", "text-dark", "bg-gray"], ["rows", "3", "formControlName", "bio", 1, "form-control", "bg-gray"], [1, "profile-detail"], [1, "profile-public"], ["type", "checkbox", "checked", "", "data-toggle", "toggle", "data-size", "lg"], [1, "private_text", "proxima-nova"], [1, "social-part"], [1, "row"], [1, "col-10"], [1, "sr-only"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], ["src", "assets/social/insta.png"], ["type", "text", "formControlName", "instagram", "placeholder", "Username", 1, "form-control"], [1, "fa", "fa-remove", "remove-class"], [1, "col-2", "align-center"], [1, "fa", "fa-info-circle", "info-icon"], ["src", "assets/social/whatsapp.png"], ["type", "text", "formControlName", "whatsapp", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/mailicon.png"], ["type", "text", "formControlName", "mail", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/facebookicon.png"], ["type", "text", "formControlName", "facebook", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/snapchat.png"], ["type", "text", "formControlName", "snapchat", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/youtube.png"], ["type", "text", "formControlName", "youtube", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/twitter.png"], ["type", "text", "formControlName", "twitter", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/linkedin.png"], ["type", "text", "formControlName", "linkedin", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/imessage.png"], ["type", "text", "formControlName", "imessage", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/customlink.png"], ["type", "text", "formControlName", "customLink", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/twitch.png"], ["type", "text", "formControlName", "twitch", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/tiktoknew.png"], ["type", "text", "formControlName", "tiktok", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/soundcloudnew.png"], ["type", "text", "formControlName", "soundcloud", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/spotify.png"], ["type", "text", "formControlName", "spotify", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/applemusicicon.png"], ["type", "text", "formControlName", "applemusic", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/venmo.png"], ["type", "text", "formControlName", "venmo", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/cash.png"], ["type", "text", "formControlName", "cashapp", "placeholder", "Username", 1, "form-control"], ["src", "assets/social/safari.png"], ["type", "text", "formControlName", "safari", "placeholder", "Username", 1, "form-control"], [1, "save-bottom-sectopn"], [1, "col-md-4", "offset-md-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "openModalButton", "data-toggle", "modal", "data-target", "#myModal", 3, "hidden"], ["id", "myModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["format", "png", "outputType", "base64", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "onlyScaleDown", "roundCropper", "imageCropped"], [1, "modal-footer"], [1, "col-lg-12", "text-center", "mt-3"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-info", "box-shadow--16dp", 3, "click"]],
      template: function FetchProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Change Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Profile Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Make profile public");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "When your profile is public, others can access your profile using the link:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "tapinme.co/shani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "input", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FetchProfileComponent_Template_button_click_263_listener() {
            return ctx.onSubmit(ctx.updateForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Open Modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h4", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Profile Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "image-cropper", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function FetchProfileComponent_Template_image_cropper_imageCropped_277_listener($event) {
            return ctx.imageCropped($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FetchProfileComponent_Template_button_click_280_listener() {
            return ctx.onCloseDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 3 / 3)("onlyScaleDown", true)("roundCropper", true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperComponent"]],
      styles: [".top-headear[_ngcontent-%COMP%]{\n    width: 33.33%;\n}\n.headerPanel[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 10px 0;\n    border-bottom: 1px solid #DADADA;\n}\n.rippllogo[_ngcontent-%COMP%] {\n    height: 40px;\n    padding: 1px\n}\n.EditProfile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: black;\n}\n.main-row[_ngcontent-%COMP%]{\n    justify-content: center;\n    align-items: center;\n}\n.justify-space-between[_ngcontent-%COMP%] {\n    justify-content: space-between\n}\n.aline-center[_ngcontent-%COMP%]{align-items: center;}\n\n.profile-image[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n}\n.profile-image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #d3d3d3;\n    font-size: 160px;\n    text-align: center;\n    margin: 0 auto;\n    display: block;\n    margin-bottom: 30px;\n    width: 160px;\n}\n.ChangePhoto[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n    margin-bottom: 10px;\n    float: left;\n}\n.private_text[_ngcontent-%COMP%]{\n\tfont-size: 14px;\n    float: left;\n    text-align: center;\n    margin-bottom: 25px;\n    margin-top: 10px;\n    width: 100%;\n}\n.profile-detail[_ngcontent-%COMP%]{\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.user-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color: #818181}\n.user-detail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    padding: 8px;\n    border-radius: 10px;\n}\n.bg-gray[_ngcontent-%COMP%]{background: #e9e9e9;}\n.text-black[_ngcontent-%COMP%]{color: #000}\n.profile-detail[_ngcontent-%COMP%], .user-detail[_ngcontent-%COMP%], .social-part[_ngcontent-%COMP%]{width: 100%; float: left}\n.social-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 20px; height: 20px}\n.social-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background: #e9e9e9;}\n.social-part[_ngcontent-%COMP%]   .remove-class[_ngcontent-%COMP%]{color: #A7A9AB;\n    font-size: 24px;\n    position: absolute;\n    right: 12px;\n    top: 5px;\n    cursor: pointer;\n    z-index: 9;}\n.social-part[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {font-size: 30px; color: #c2c0c0;}\n.align-center[_ngcontent-%COMP%] {text-align: center;}\n.save-bottom-sectopn[_ngcontent-%COMP%] { width: 100%; z-index: 999999999999; background-color: white; overflow-x: hidden; transition: 0.5s; color: #818181; position: fixed; bottom: 0; height: 70px;display: flex; align-items: center;}\n.save-bottom-sectopn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width: 100%; float: left}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmV0Y2gtcHJvZmlsZS9mZXRjaC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFlBQVk7SUFDWjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7QUFDSjtBQUNBLGNBQWMsbUJBQW1CLENBQUM7QUFHbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUNDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0EsU0FBUyxtQkFBbUIsQ0FBQztBQUM3QixZQUFZLFdBQVc7QUFDdkIsNENBQTRDLFdBQVcsRUFBRSxXQUFXO0FBQ3BFLGlCQUFpQixXQUFXLEVBQUUsWUFBWTtBQUMxQyxtQkFBbUIsbUJBQW1CLENBQUM7QUFDdkMsMkJBQTJCLGNBQWM7SUFDckMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLGVBQWU7SUFDZixVQUFVLENBQUM7QUFDZix5QkFBeUIsZUFBZSxFQUFFLGNBQWMsQ0FBQztBQUV6RCxlQUFlLGtCQUFrQixDQUFDO0FBRWxDLHVCQUF1QixXQUFXLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztBQUV0Tiw0QkFBNEIsV0FBVyxFQUFFLFdBQVciLCJmaWxlIjoic3JjL2FwcC9mZXRjaC1wcm9maWxlL2ZldGNoLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtaGVhZGVhcntcbiAgICB3aWR0aDogMzMuMzMlO1xufVxuLmhlYWRlclBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7XG59XG4ucmlwcGxsb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMXB4XG59XG4uRWRpdFByb2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5tYWluLXJvd3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXG59XG4uYWxpbmUtY2VudGVye2FsaWduLWl0ZW1zOiBjZW50ZXI7fVxuXG5cbi8qIC5wcm9maWxlLWxvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucHJvZmlsZS1sb2dvIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnByb2ZpbGUtbG9nbyBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNjglO1xuICAgfVxuICBcbiAgXG4gIC5wcm9maWxlLWxvZ28gaSB7XG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxOTBweDtcbiAgfVxuICAuYnRtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDU1cHg7XG4gICAgbWFyZ2luLXRvcDogLTQzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICB9XG4gIFxuICAuYnRtIGltZyB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbjogN3B4O1xuICB9XG4qL1xuLnByb2ZpbGUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnByb2ZpbGUtaW1hZ2UgaSB7XG4gICAgY29sb3I6ICNkM2QzZDM7XG4gICAgZm9udC1zaXplOiAxNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogMTYwcHg7XG59XG4uQ2hhbmdlUGhvdG8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnByaXZhdGVfdGV4dHtcblx0Zm9udC1zaXplOiAxNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZmlsZS1kZXRhaWx7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4udXNlci1kZXRhaWwgbGFiZWx7Y29sb3I6ICM4MTgxODF9XG4udXNlci1kZXRhaWwgaW5wdXR7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmctZ3JheXtiYWNrZ3JvdW5kOiAjZTllOWU5O31cbi50ZXh0LWJsYWNre2NvbG9yOiAjMDAwfVxuLnByb2ZpbGUtZGV0YWlsLCAudXNlci1kZXRhaWwsIC5zb2NpYWwtcGFydHt3aWR0aDogMTAwJTsgZmxvYXQ6IGxlZnR9XG4uc29jaWFsLXBhcnQgaW1ne3dpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHh9XG4uc29jaWFsLXBhcnQgaW5wdXR7YmFja2dyb3VuZDogI2U5ZTllOTt9XG4uc29jaWFsLXBhcnQgLnJlbW92ZS1jbGFzc3tjb2xvcjogI0E3QTlBQjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIHRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5O31cbi5zb2NpYWwtcGFydCAuaW5mby1pY29uIHtmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjYzJjMGMwO31cblxuLmFsaWduLWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cblxuLnNhdmUtYm90dG9tLXNlY3RvcG4geyB3aWR0aDogMTAwJTsgei1pbmRleDogOTk5OTk5OTk5OTk5OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgb3ZlcmZsb3cteDogaGlkZGVuOyB0cmFuc2l0aW9uOiAwLjVzOyBjb2xvcjogIzgxODE4MTsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDA7IGhlaWdodDogNzBweDtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cblxuLnNhdmUtYm90dG9tLXNlY3RvcG4gYnV0dG9ue3dpZHRoOiAxMDAlOyBmbG9hdDogbGVmdH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FetchProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fetch-profile',
          templateUrl: './fetch-profile.component.html',
          styleUrls: ['./fetch-profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "signup",
        value: function signup() {
          this.router.navigate(['/sign-up']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 38,
      vars: 0,
      consts: [[1, "popl", "btn"], [1, "header"], ["src", "assets/logo/Attachment_1588757267.png", 1, "logo", "my-3"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3", "m-t-80"], [1, "title", "text-center"], [1, "card"], [1, "card-body"], [1, "card-title", "text-center"], [1, "row", "text-center"], [1, "col-12"], ["type", "submit", 1, "btn", "login", "mt-5", "text-center", 3, "click"], [1, "row", "mt-3"], [1, "col-12", "text-center"], [1, "left"], [1, "text-center", "text"], [1, "right"], [1, "join-row", "text-center"], ["type", "submit", 1, "btn", "join", "mt-3", 3, "click"], [1, "footerMain"], [1, "PoweredSection"], [1, "PoweredBy"], [1, "fa", "fa-check-circle"], ["href", "#"], [1, "hr"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tap Here To get Your Tap in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome to Tap in \uD83D\uDCA5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "What would you like to do?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_25_listener() {
            return ctx.signup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Patent Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TapIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card-row[_ngcontent-%COMP%]{\n    justify-content: center;\n    align-items: center;\n}\n.join-link[_ngcontent-%COMP%]{\n    margin-left: 30px;\n    font-weight: 350px;\n    color:black !important;\n}\n.logo[_ngcontent-%COMP%]{\n    height:60px;\n    width:60px;\n}\n.header[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 100%;\n    border-bottom: 1px solid #DADADA;\n}\n.card-col[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 210px;\n}\n.m-t-80[_ngcontent-%COMP%] {margin-top: 80px;}\n.card[_ngcontent-%COMP%]{\n    background-color: #F3F3F3;\n    border:none !important;\n}\n.title[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size:40px;\n}\n.card-title[_ngcontent-%COMP%]{\n    font-size:30px;\n    font-size:25px;\n}\n.email[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 12px;\n}\n.password[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 12px;\n}\n.login[_ngcontent-%COMP%]{\n    width:60%;\n    border : 5px solid black;\n    border-radius: 50px;\n    font-weight: 550;\n    margin-bottom: 10px;\n}\n.login[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n.join[_ngcontent-%COMP%]:hover{\n    background-color: black;\n    color: white;\n}\n.popl[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: #3BD950;\n    color: white;\n    font-weight: 550;\n    text-align: center;\n    border:none;\n}\n.text[_ngcontent-%COMP%]{\n    font-size: 20px;\n}\n.join[_ngcontent-%COMP%]{\n    width:60%;\n    border : 5px solid black;\n    border-radius: 50px;\n    font-weight: 550;\n    margin-bottom: 10px;\n}\n.forgot[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    margin: 20px;\n    font-size: 15px;\n}\n.left[_ngcontent-%COMP%]{\n    background: black;\n    width: 40%;\n    float: left;\n    margin-top: 10px !important;\n}\n.right[_ngcontent-%COMP%]{\n    background: black;\n    width: 40%;\n    float: right;\n    margin-top: 10px !important;\n}\n.PoweredSection[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    margin-top: 50px;\n}\n.PoweredBy[_ngcontent-%COMP%]{\n    padding-top: 20px;\n    width: 100%;\n    text-align: center;\n    color: #00aced;\n    font-size: 18px;\n}\n.PoweredSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n    margin: auto;\n    width: 32%;\n}\n@media only screen and (max-width: 992px) {\n   .title[_ngcontent-%COMP%] { font-size: 30px;}\n   .card-title[_ngcontent-%COMP%]{font-size: 24px;}\n   .m-t-80[_ngcontent-%COMP%] {margin-top: 40px;}\n  }\n@media only screen and (max-width: 500px) {\n    .card-title[_ngcontent-%COMP%]{font-size: 20px;}\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQSxTQUFTLGdCQUFnQixDQUFDO0FBQzFCO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBRUE7R0FDRyxTQUFTLGVBQWUsQ0FBQztHQUN6QixZQUFZLGVBQWUsQ0FBQztHQUM1QixTQUFTLGdCQUFnQixDQUFDO0VBQzNCO0FBQ0E7SUFDRSxZQUFZLGVBQWUsQ0FBQztHQUM3QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcm93e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uam9pbi1saW5re1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTBweDtcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xufVxuLmxvZ297XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgd2lkdGg6NjBweDtcbn1cbi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREFEQURBO1xufVxuLmNhcmQtY29se1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIxMHB4O1xufVxuLm0tdC04MCB7bWFyZ2luLXRvcDogODBweDt9XG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjQwcHg7XG59XG4uY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5lbWFpbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ucGFzc3dvcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmxvZ2lue1xuICAgIHdpZHRoOjYwJTtcbiAgICBib3JkZXIgOiA1cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubG9naW46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmpvaW46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnBvcGx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCRDk1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOm5vbmU7XG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uam9pbntcbiAgICB3aWR0aDo2MCU7XG4gICAgYm9yZGVyIDogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcmdvdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ubGVmdHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5yaWdodHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uUG93ZXJlZFNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLlBvd2VyZWRCeXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMGFjZWQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLlBvd2VyZWRTZWN0aW9uIGhye1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMzIlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAudGl0bGUgeyBmb250LXNpemU6IDMwcHg7fVxuICAgLmNhcmQtdGl0bGV7Zm9udC1zaXplOiAyNHB4O31cbiAgIC5tLXQtODAge21hcmdpbi10b3A6IDQwcHg7fVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY2FyZC10aXRsZXtmb250LXNpemU6IDIwcHg7fVxuICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_small_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, toast, authService, formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.toast = toast;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loginFormErrors = {
          email: {},
          password: {}
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.loginForm.valueChanges.subscribe(function () {
            _this10.onLoginFormValuesChanged();
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this11 = this;

          this.authService.setLoader(true);
          var body = new URLSearchParams();
          body.set('email', data.email);
          body.set('password', data.password);
          this.authService.postData('login', body.toString()).subscribe(function (response) {
            _this11.authService.setLoader(false);

            if (response.data) {
              var res = response.data;
              localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.id);
              localStorage.setItem('email', res.email);
              localStorage.setItem('username', res.username);
              localStorage.setItem('bio', res.bio);

              _this11.authService.setUserData({
                'username': res.username,
                'bio': res.bio
              });

              _this11.router.navigateByUrl('/user-home/' + res.username);
            }
          }, function (error) {
            _this11.authService.setLoader(false);

            _this11.toast.error(error);
          });
        }
      }, {
        key: "onLoginFormValuesChanged",
        value: function onLoginFormValuesChanged() {
          for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
              continue;
            } // Clear previous errors


            this.loginFormErrors[field] = {}; // Get the control

            var control = this.loginForm.get(field);

            if (control && control.dirty && !control.valid) {
              this.loginFormErrors[field] = control.errors;
            }
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 4,
      consts: [[1, "header"], ["src", "assets/logo/Attachment_1588757267.png", 1, "logo", "my-3"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3", "m-t-80"], [1, "title", "text-center"], [1, "card"], [1, "card-title", "text-center"], ["name", "loginForm", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Email", 1, "form-control", "email"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", "password"], ["type", "submit", 1, "btn", "btn-primary", "login"], [1, "text-center", "text-primary", "forgot"], ["type", "submit", "routerLink", "/sign-up", 1, "btn", "btn-primary", "join"], [1, "text-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome Back!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your email and password to login to your Tap in profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit(ctx.loginForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_small_13_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_small_14_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Forgot Password ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Don't have a Profile? Join here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormErrors.email.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginFormErrors.email.required && ctx.loginFormErrors.email.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormErrors.password.required);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".card-row[_ngcontent-%COMP%]{\n    justify-content: center;\n    align-items: center;\n}\n.join-link[_ngcontent-%COMP%]{\n    margin-left: 80px;\n    font-weight: 350px;\n    color:black !important;\n}\n.logo[_ngcontent-%COMP%]{\n    height:60px;\n    width:60px;\n}\n.header[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 100%;\n    border-bottom: 1px solid #DADADA;\n}\n.card-col[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 159px;\n}\n.card[_ngcontent-%COMP%]{\n    background-color: #F3F3F3;\n    border:none !important;\n}\n.title[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size:40px;\n}\n.card-title[_ngcontent-%COMP%]{\n    font-size:30px;\n    font-size:25px;\n}\n.email[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 12px;\n}\n.password[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 12px;\n}\n.login[_ngcontent-%COMP%]{\n    width:100%;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n.join[_ngcontent-%COMP%]{\n    width:100%;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n.forgot[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    margin: 20px;\n    font-size: 15px;\n}\n.m-t-80[_ngcontent-%COMP%] {margin-top: 80px;}\n@media only screen and (max-width: 992px) {\n    .title[_ngcontent-%COMP%] { font-size: 30px;}\n    .card-title[_ngcontent-%COMP%]{font-size: 22px;}\n    .m-t-80[_ngcontent-%COMP%] {margin-top: 40px;}\n   }\n@media only screen and (max-width: 500px) {\n     .card-title[_ngcontent-%COMP%]{font-size: 20px;}\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQSxTQUFTLGdCQUFnQixDQUFDO0FBQzFCO0lBQ0ksU0FBUyxlQUFlLENBQUM7SUFDekIsWUFBWSxlQUFlLENBQUM7SUFDNUIsU0FBUyxnQkFBZ0IsQ0FBQztHQUMzQjtBQUNBO0tBQ0UsWUFBWSxlQUFlLENBQUM7SUFDN0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcm93e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uam9pbi1saW5re1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzNTBweDtcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xufVxuLmxvZ297XG4gICAgaGVpZ2h0OjYwcHg7XG4gICAgd2lkdGg6NjBweDtcbn1cbi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREFEQURBO1xufVxuLmNhcmQtY29se1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1OXB4O1xufVxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xufVxuLmNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgZm9udC1zaXplOjI1cHg7XG59XG4uZW1haWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnBhc3N3b3Jke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5sb2dpbntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5qb2lue1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcmdvdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ubS10LTgwIHttYXJnaW4tdG9wOiA4MHB4O31cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudGl0bGUgeyBmb250LXNpemU6IDMwcHg7fVxuICAgIC5jYXJkLXRpdGxle2ZvbnQtc2l6ZTogMjJweDt9XG4gICAgLm0tdC04MCB7bWFyZ2luLXRvcDogNDBweDt9XG4gICB9XG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgIC5jYXJkLXRpdGxle2ZvbnQtc2l6ZTogMjBweDt9XG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-home/main-home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-home/main-home.component.ts ***!
    \**************************************************/

  /*! exports provided: MainHomeComponent */

  /***/
  function srcAppMainHomeMainHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHomeComponent", function () {
      return MainHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["searchInput"];

    function MainHomeComponent_div_37_ng_container_1_div_1_a_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r74.title);
      }
    }

    function MainHomeComponent_div_37_ng_container_1_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainHomeComponent_div_37_ng_container_1_div_1_a_1_div_2_Template, 2, 1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var data_r74 = ctx_r80.$implicit;
        var i_r75 = ctx_r80.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r74.SocialLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r74.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r75 == 0);
      }
    }

    function MainHomeComponent_div_37_ng_container_1_div_1_a_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r74.title);
      }
    }

    function MainHomeComponent_div_37_ng_container_1_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainHomeComponent_div_37_ng_container_1_div_1_a_2_div_2_Template, 2, 1, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var data_r74 = ctx_r83.$implicit;
        var i_r75 = ctx_r83.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r74.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r75 > 0);
      }
    }

    function MainHomeComponent_div_37_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainHomeComponent_div_37_ng_container_1_div_1_a_1_Template, 3, 3, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainHomeComponent_div_37_ng_container_1_div_1_a_2_Template, 3, 2, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r75 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r75 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r75 > 0);
      }
    }

    function MainHomeComponent_div_37_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainHomeComponent_div_37_ng_container_1_div_1_Template, 3, 2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r71.dataSource);
      }
    }

    function MainHomeComponent_div_37_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r85 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r85.SocialLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r85.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r85.title);
      }
    }

    function MainHomeComponent_div_37_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainHomeComponent_div_37_ng_container_2_div_1_Template, 5, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_37_ng_container_2_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r86.addnewLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r72.dataSource);
      }
    }

    function MainHomeComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainHomeComponent_div_37_ng_container_1_Template, 6, 1, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainHomeComponent_div_37_ng_container_2_Template, 6, 1, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.caption == "Direct On");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.caption == "Direct Off");
      }
    }

    function MainHomeComponent_div_38_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_38_div_2_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var img_r89 = ctx.$implicit;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r91["delete"](img_r89.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r89 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", img_r89.SocialLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r89.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r89.title);
      }
    }

    function MainHomeComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function MainHomeComponent_div_38_Template_div_cdkDropListDropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainHomeComponent_div_38_div_2_Template, 7, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_38_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.addnewLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.dataSource);
      }
    }

    function MainHomeComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_52_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r96.closeLinkQr();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add to wallet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scan this code with any camera to share your Tapin profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "If you have the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tapin app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", ctx_r67.userName, " will be added to your People Page! ");
      }
    }

    function MainHomeComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_53_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r98.addLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_53_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.saveSocialSequence();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Drag and drop links to reorder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "opacity": a0
      };
    };

    function MainHomeComponent_div_54_div_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var extra_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", extra_r102.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r103.change));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](extra_r102.title);
      }
    }

    function MainHomeComponent_div_54_div_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_54_div_7_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);

          var extra_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r106.popUp(extra_r102.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var extra_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", extra_r102.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r104.change));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](extra_r102.title);
      }
    }

    function MainHomeComponent_div_54_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainHomeComponent_div_54_div_7_ng_container_1_Template, 6, 5, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainHomeComponent_div_54_div_7_ng_container_2_Template, 5, 5, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var extra_r102 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extra_r102.disableLink === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extra_r102.disableLink == true);
      }
    }

    function MainHomeComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_54_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.closeLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a Social Link To add :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainHomeComponent_div_54_div_7_Template, 3, 2, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r69.allLinks);
      }
    }

    function MainHomeComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_55_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r113.closeLinkUsername();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 86, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainHomeComponent_div_55_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r115.addUsername = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_55_Template_i_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r116.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_div_55_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r117.added(ctx_r117.sourceLink, ctx_r117.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter Your ", ctx_r70.placeholder, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r70.sourceLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r70.placeholder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r70.addUsername);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r70.linkDescription, " ");
      }
    }

    var _c2 = function _c2(a0, a1) {
      return {
        "green": a0,
        "red": a1
      };
    };

    var MainHomeComponent =
    /*#__PURE__*/
    function () {
      function MainHomeComponent(router, activatedRoute, authService, toast) {
        var _this12 = this;

        _classCallCheck(this, MainHomeComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.toast = toast;
        this.dataSource = []; // dataSource = [
        //   { name: './assets/social/mailicon.png', title: "Mail", id: 3 }
        // ];

        this.images = [{
          imageLink: "./assets/social/whatsapp.png",
          title: "whatsapp"
        }, {
          imageLink: "./assets/social/facebookicon.png",
          title: "facebook"
        }, {
          imageLink: "./assets/social/mailicon.png",
          title: "mail"
        }, {
          imageLink: "./assets/social/contacts.png",
          title: "contact"
        }, {
          imageLink: "./assets/social/insta.png",
          title: "Whatsapp"
        }];
        this.addLinks = [{
          imageLink: './assets/social/whatsapp.png',
          title: "whatsapp",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/facebookicon.png',
          title: "facebook",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/mailicon.png',
          title: "mail",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/insta.png',
          title: "instagram",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/snapchat.png',
          title: "snapchat",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/twitter.png',
          title: "twitter",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/linkedin.png',
          title: "linkedin",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/imessage.png',
          title: "imessage",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/youtube.png',
          title: "youtube",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/tiktoknew.png',
          title: "tiktok",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/soundcloudnew.png',
          title: "soundcloud",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/spotify.png',
          title: "spotify",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/applemusicicon.png',
          title: "applemusic",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/cash.png',
          title: "cashapp",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/safari.png',
          title: "safari",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/venmo.png',
          title: "twitch",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/twitch.png',
          title: "twitch",
          link: '',
          disableLink: true
        }];
        this.pop = false;
        this.show = false;
        this.qrCode = false;
        this.appear = false;
        this.notDraggable = true;
        this.Draggable = false;
        this.toggle = true;
        this.seen = true;
        this.detect = false;
        this.status1 = 'Enable';
        this.caption = 'Direct Off';
        this.status = 'Enable';
        this.name = 'Edit';
        this.isDisabled = false;
        this.linkDisabled = false;
        this.change = false;
        this.allLinks = [];
        this.submitAllLinks = [];
        this.isDisabledLink = false;
        this.activatedRoute.params.subscribe(function (params) {
          _this12.userId = params['userId'];
        });
      }

      _createClass(MainHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "added",
        value: function added(sourceLink, titleName) {
          var data = [];
          this.dataSource.push({
            imageLink: sourceLink,
            title: titleName.toLowerCase(),
            link: this.addUsername,
            disableLink: false
          });
          this.saveSocialSequence();
          this.pop = false;
        }
      }, {
        key: "popUp",
        value: function popUp(event) {
          if (event === 'whatsapp') {
            this.sourceLink = './assets/social/whatsapp.png', this.placeholder = 'WhatsApp Number';
            this.title = 'whatsApp';
            this.linkDescription = 'Open WhatsApp and go to settings. Tap your profile at the top and add your phone number here. Make sure to include your country code!';
          } else if (event === 'facebook') {
            this.sourceLink = './assets/social/facebookicon.png', this.placeholder = 'Facebook Profile link';
            this.title = 'facebook';
            this.linkDescription = 'Go to facebook.com and open your Facebook profile or page. Then copy and paste the url link here.';
          } else if (event === 'mail') {
            this.sourceLink = './assets/social/mailicon.png', this.placeholder = 'Email';
            this.title = 'mail';
            this.linkDescription = 'Input your email address. This email can be the same or different from the one used for your account signup.';
          } else if (event === 'contacts') {
            this.sourceLink = './assets/social/contacts.png', this.placeholder = 'FaceBook Id';
            this.title = 'contacts';
            this.linkDescription = 'Open WhatsApp and go to settings. Tap your profile at the top and add your phone number here. Make sure to include your country code!';
          } else if (event == 'instagram') {
            this.sourceLink = './assets/social/insta.png', this.placeholder = 'Instagram username';
            this.title = 'instagram';
            this.linkDescription = 'Open the Instagram app and go to your profile. Your instagram username will be at the top of your screen.';
          } else if (event == 'snapchat') {
            this.sourceLink = './assets/social/snapchat.png', this.placeholder = 'Snapchat username';
            this.title = 'snapchat';
            this.linkDescription = 'Open Snapchat and tap your profile picture in the top left corner. Your snapchat username will be below your Snapchat name.';
          } else if (event == 'twitter') {
            this.sourceLink = './assets/social/twitter.png', this.placeholder = 'Twitter username';
            this.title = 'twitter';
            this.linkDescription = 'Open the Twitter app and tap your profile picture in the top left corner. Your twitter username will be in grey with an @ sign.';
          } else if (event == 'linkedin') {
            this.sourceLink = './assets/social/linkedin.png', this.placeholder = 'LinkedIn profile link';
            this.title = 'linkedin';
            this.linkDescription = 'Go to your Linkedin profile and scroll down to the “contact” section. Find your LinkedIn profile link in this section and copy/paste here!';
          } else if (event == 'imessage') {
            this.sourceLink = './assets/social/imessage.png', this.placeholder = 'Phone number';
            this.title = 'imessage';
            this.linkDescription = 'Input your phone number with your country code (Example +1 for USA).';
          } else if (event == 'youtube') {
            this.sourceLink = './assets/social/youtube.png', this.placeholder = 'Youtube user/channel link';
            this.title = 'youtube';
            this.linkDescription = 'Open the Youtube app and go to your channel. Then tap the three dots in the top right corner and tap share. Copy/paste the link here.';
          } else if (event == 'tiktok') {
            this.sourceLink = './assets/social/tiktoknew.png', this.placeholder = 'TikTok username';
            this.title = 'tiktok';
            this.linkDescription = 'Open TikTok and go to the “me” tab. Your TikTok username is under your profile picture.';
          } else if (event == 'soundcloud') {
            this.sourceLink = './assets/social/soundcloudnew.png', this.placeholder = 'Soundcloud username';
            this.title = 'soundcloud';
            this.linkDescription = 'Open the Soundcloud app and go to your profile. Copy and paste your username here.';
          } else if (event == 'spotify') {
            this.sourceLink = './assets/social/spotify.png', this.placeholder = 'Link to Spotify';
            this.title = 'spotify';
            this.linkDescription = 'Pick your favorite playlist/track/album and tap the three dots in the top right corner. Tap share and copy/paste the link here.';
          } else if (event == 'applemusic') {
            this.sourceLink = './assets/social/applemusicicon.png', this.placeholder = 'Link to Apple Music';
            this.title = 'applemusic';
            this.linkDescription = 'Pick your favorite playlist/track/album and tap the three dots in the top right corner. Tap share and copy/paste link here.';
          } else if (event == 'cashapp') {
            this.sourceLink = './assets/social/cash.png', this.placeholder = 'Cash App username';
            this.title = 'cashapp';
            this.linkDescription = 'Open CashApp and tap the profile icon in the top right corner. Your CashApp username will be in grey with a $.';
          } else if (event == 'safari') {
            this.sourceLink = './assets/social/safari.png', this.placeholder = 'Website link';
            this.title = 'safari';
            this.linkDescription = 'Open your desired website and copy/paste the url here.';
          } else if (event == 'venmo') {
            this.sourceLink = './assets/social/venmo.png', this.placeholder = 'venmo username';
            this.title = 'venmo';
            this.linkDescription = 'Open the Venmo app and tap the three lines in the top left corner. Your username will be in grey with an @ sign.';
          }

          this.show = false;
          this.appear = false;
          this.pop = true;
        }
      }, {
        key: "editLinks",
        value: function editLinks() {
          this.notDraggable = false;
          this.Draggable = true;
          this.show = true;
          this.toggle = !this.toggle;
          this.status = this.toggle ? 'Enable' : 'Disable';

          if (this.name == 'Edit') {
            this.name = 'Save';
            this.isDisabled = true;
          } else {
            this.isDisabled = false;
            this.notDraggable = true;
            this.Draggable = false;
            this.show = false;
            this.saveSocialSequence();
            this.name = 'Edit';
          }
        } // delete(id) {
        //   this.images.splice(id, 1);
        // }

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this13 = this;

          if (confirm("Are you sure you want to delete?")) {
            this.authService.setLoader(true);
            this.authService.postData('updateUserSocial/' + id).subscribe(function (response) {
              if (response.status === 200) {
                _this13.authService.setLoader(false);

                _this13.getData();

                _this13.toast.success('Deleted Successfully!.');
              }
            }, function (error) {
              _this13.authService.setLoader(false);

              _this13.toast.error(error);
            });
          }
        }
      }, {
        key: "addLink",
        value: function addLink() {
          var _this14 = this;

          var array = [];
          this.dataSource.forEach(function (item2) {
            _this14.addLinks = _this14.addLinks.filter(function (item1) {
              if (JSON.stringify(item1.title) !== JSON.stringify(item2.title)) {
                return JSON.stringify(item2);
              }
            });
          });
          this.allLinks = this.dataSource.concat(this.addLinks);
          this.appear = true;
        }
      }, {
        key: "directoff",
        value: function directoff() {
          this.seen = !this.seen;
          this.status1 = this.seen ? 'Enable' : 'Disable';
          var dataAll = [];

          if (this.caption == 'Direct Off') {
            this.caption = 'Direct On';
          } else {
            this.caption = 'Direct Off'; // this.directOffFun();
          }
        }
      }, {
        key: "addnewLink",
        value: function addnewLink() {
          var _this15 = this;

          this.dataSource.forEach(function (item2) {
            _this15.addLinks = _this15.addLinks.filter(function (item1) {
              if (JSON.stringify(item1.title) !== JSON.stringify(item2.title)) {
                return JSON.stringify(item2);
              }
            });
          });
          this.allLinks = this.dataSource.concat(this.addLinks);
          this.appear = true;
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.router.navigateByUrl('/edit-profile');
        }
      }, {
        key: "closeLink",
        value: function closeLink() {
          this.appear = false;

          if (this.show == true) {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      }, {
        key: "closeLinkUsername",
        value: function closeLinkUsername() {
          this.pop = false;

          if (this.show == true) {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      }, {
        key: "saveLink",
        value: function saveLink() {
          this.isDisabled = false;
          this.notDraggable = true;
          this.Draggable = false;
          this.show = false;
          this.toggle = !this.toggle;
          this.status = this.toggle ? 'Enable' : 'Disable';
          this.name = 'Edit';
        }
      }, {
        key: "drop",
        value: function drop(event) {
          // if (event.previousContainer === event.container) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.dataSource, event.previousIndex, event.currentIndex); // }
          // else {
          //   transferArrayItem(event.previousContainer.data,
          //     event.container.data,
          //     event.previousIndex,
          //     event.currentIndex);
          // }
        } //   moveItemInArray(this.images, event.previousIndex, event.currentIndex)
        // }

      }, {
        key: "clear",
        value: function clear() {
          this.searchInput.nativeElement.value = '';
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this16 = this;

          this.authService.setLoader(true);
          this.authService.getData('getUserSequence/' + this.userId).subscribe(function (response) {
            _this16.authService.setLoader(false);

            if (response.user) {
              var userData = response.user;
              _this16.userName = userData[0].username;

              if (userData[0].bio !== 'null') {
                _this16.desc = userData[0].bio;
              }
            }

            var data = [];

            if (response.data) {
              for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].link !== '') {
                  if (response.data[i].title === 'applemusic') {
                    response.data[i].SocialLink = 'https://itunes.apple.com/profile/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'instagram') {
                    response.data[i].SocialLink = 'https://www.instagram.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'whatsapp') {
                    response.data[i].SocialLink = 'https://api.whatsapp.com/send?phone=' + response.data[i].link;
                  }

                  if (response.data[i].title === 'snapchat') {
                    response.data[i].SocialLink = 'https://www.snapchat.com/add/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'facebook') {
                    response.data[i].SocialLink = 'https://www.facebook.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'mail') {
                    response.data[i].SocialLink = 'mailto:' + response.data[i].link;
                  }

                  if (response.data[i].title === 'twitter') {
                    response.data[i].SocialLink = 'https://twitter.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'linkedin') {
                    response.data[i].SocialLink = 'https://ca.linkedin.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'imessage') {
                    response.data[i].SocialLink = 'sms:' + response.data[i].link;
                  }

                  if (response.data[i].title === 'customLink') {
                    response.data[i].SocialLink = 'http://' + response.data[i].link;
                  }

                  if (response.data[i].title === 'youtube') {
                    response.data[i].SocialLink = 'https://www.youtube.com/c/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'tiktok') {
                    response.data[i].SocialLink = 'http://vt.tiktok.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'soundcloud') {
                    response.data[i].SocialLink = 'https://soundcloud.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'spotify') {
                    response.data[i].SocialLink = 'https://open.spotify.com/user/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'venmo') {
                    response.data[i].SocialLink = 'https://venmo.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'cashapp') {
                    response.data[i].SocialLink = 'https://cash.app/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'safari') {
                    response.data[i].SocialLink = 'http://' + response.data[i].link;
                  }

                  if (response.data[i].title === 'twitch') {
                    response.data[i].SocialLink = 'https://www.twitch.tv/' + response.data[i].link;
                  }

                  data.push(response.data[i]);
                }

                response.data[i].disableLink = false;
              }

              _this16.dataSource = data;
            }
          }, function (error) {
            _this16.authService.setLoader(false);

            _this16.toast.error(error);
          });
        }
      }, {
        key: "saveSocialSequence",
        value: function saveSocialSequence() {
          var _this17 = this;

          var body = new URLSearchParams();
          this.dataSource.forEach(function (item2) {
            _this17.addLinks = _this17.addLinks.filter(function (item1) {
              if (JSON.stringify(item1.title) !== JSON.stringify(item2.title)) {
                return JSON.stringify(item2);
              }
            });
          });
          this.submitAllLinks = this.dataSource.concat(this.addLinks);

          if (this.dataSource.length > 0) {
            for (var i = 0; i < this.submitAllLinks.length; i++) {
              body.set('social[' + [i] + '][imageLink]', this.submitAllLinks[i].imageLink);
              body.set('social[' + [i] + '][title]', this.submitAllLinks[i].title);
              body.set('social[' + [i] + '][link]', this.submitAllLinks[i].link);
            }
          }

          this.authService.setLoader(true);
          this.authService.postData('socialUserSequence/' + this.userId, body.toString()).subscribe(function (response) {
            _this17.authService.setLoader(false);

            if (response.status === 200) {
              _this17.getData();
            }
          }, function (error) {
            _this17.authService.setLoader(false);

            _this17.toast.error(error);
          });
        }
      }, {
        key: "qrCodeEnable",
        value: function qrCodeEnable() {
          this.qrCode = true;
        }
      }, {
        key: "closeLinkQr",
        value: function closeLinkQr() {
          if (this.qrCode == true) {
            this.qrCode = false;
          } else {
            this.qrCode = true;
          }
        }
      }, {
        key: "onClickWallet",
        value: function onClickWallet() {
          var _this18 = this;

          var userId = localStorage.getItem('userId');
          this.authService.setLoader(true);
          this.authService.getData('pkGenerateQ/' + this.userId).subscribe(function (response) {
            _this18.authService.setLoader(false); // console.log(response);


            if (response.status === 200) {
              var url = response.data;
              var elem = document.createElement('a');
              elem.href = url;
              elem.target = 'hiddenIframe';
              elem.click(); // const windowReference = window.open();
              // windowReference.location = response.data;
              // this.safariWindow = window.open();
              // this.safariWindow.location.href = response.data;
              // window.open(response.data,'_blank');
            }
          }, function (error) {
            _this18.authService.setLoader(false);

            _this18.toast.error(error);
          });
        }
      }]);

      return MainHomeComponent;
    }();

    MainHomeComponent.ɵfac = function MainHomeComponent_Factory(t) {
      return new (t || MainHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    MainHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainHomeComponent,
      selectors: [["app-main-home"]],
      viewQuery: function MainHomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      decls: 56,
      vars: 19,
      consts: [[1, "top"], [1, "btn", "btn-top"], [1, "headerPanel", "mb-3"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3", "mt-5"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "EditProfile", 3, "click"], [1, "fa", "fa-sliders"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Popl logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center", 3, "click"], ["src", "https://poplme.co/templates/assets/frontend/images/QRBlackNew.png", "width", "40px"], [1, "row", "text-center"], [1, "col-md-6", "offset-md-3"], [1, "profileSection"], [1, "profileImage"], [1, "fa", "fa-user-circle-o"], [1, "bio"], [1, "prfileContant"], [1, "d-flex", "flex-row", "bd-highlight", "justify-content-center", "buttonSection", "mt-3"], [1, "btn", "directButton", 3, "disabled", "ngClass", "click"], [1, "btn", "directButton", 3, "ngClass", "click"], ["class", "row mt-3", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], [1, "footerMain"], [1, "PoweredSection"], [1, "PoweredBy"], [1, "fa", "fa-check-circle"], ["href", "#"], [1, "hr"], ["href", "#", 1, "PoweredBy", "helpSection"], ["class", "qrgenerateSection", 4, "ngIf"], ["class", "bottom text-center", 4, "ngIf"], ["class", "Links pt-5", 4, "ngIf"], ["class", "last add-social", 4, "ngIf"], [1, "row", "mt-3"], [4, "ngIf"], ["class", "col-6 mt-3 column", 4, "ngFor", "ngForOf"], [1, "col-6", "mt-3", "column", "setOpacity"], ["src", "https://poplme.co/templates/assets/frontend/images/icons/plusicon.png", 1, "whtsapp"], [1, "desc"], [1, "col-6", "mt-3", "column"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "setOpacity", "target", "_blank", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "whtsapp", 3, "src"], ["class", "desc", 4, "ngIf"], ["target", "_blank", 1, "setOpacity"], ["class", "desc", "class", "setOpacity", 4, "ngIf"], [1, "setOpacity"], [1, "col-6", "mt-3", "column", 3, "click"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", "src", "https://poplme.co/templates/assets/frontend/images/icons/plusicon.png", 1, "whtsapp"], [1, "close", 3, "click"], [1, "fa", "fa-times-circle"], ["cdkDrag", "", 1, "whtsapp", 3, "src"], [1, "qrgenerateSection"], [1, "closeqr", 3, "click"], [1, "qr-content", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "addWalletbtn"], [1, "fa", "fa-download"], [1, "scan-taxt"], ["alt", "qrimage", "src", "https://api.qrserver.com/v1/create-qr-code/?size=110x110&color=00aced&data=https://poplme.com/?link=https%3A%2F%2Fpoplme%2Eco%2Fshani/q"], ["name", "hiddenIframe", "id", "hiddenIframe", 2, "display", "none"], [1, "bottom", "text-center"], [1, "d-flex", "flex-row", "bd-highlight", "justify-content-center", "buttonSection", "pt-4", "ng-star-inserted"], [1, "btn", "directButton", "green", 3, "click"], [1, "btn", "directButton", "red", 3, "click"], [1, "bottom-text", "text-secondary", "pt-2"], [1, "Links", "pt-5"], [1, "close-button", 3, "click"], [1, "text-center", "link-text", "text-secondary"], [1, "row", "mt-5"], ["class", "col-3 text-center mt-3 ", 4, "ngFor", "ngForOf"], [1, "col-3", "text-center", "mt-3"], [1, "links-button"], [1, "extra-img", 3, "ngClass", "src"], [1, "caption"], [1, "links-button", 3, "click"], [1, "last", "add-social"], [1, "text-center", "text-secondary", "user-title", "my-3"], [1, "input-group"], [1, "input-group-addon-new"], [1, "inner-img", 3, "src"], ["type", "text", 1, "link-input", "form-control", "form-control-new", "mb-3", "lb-none", 3, "ngModel", "placeholder", "ngModelChange"], ["searchInput", ""], [1, "fa", "fa-times-circle", "closeBtn", 3, "click"], [1, "link-caption"], [1, "btn", "btn-success", "last-btn", 3, "click"], [1, "fa", "fa-check"]],
      template: function MainHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tap here to download to new Tap in App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_Template_a_click_9_listener() {
            return ctx.editProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_Template_li_click_14_listener() {
            return ctx.qrCodeEnable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Taps: 0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_Template_button_click_31_listener() {
            return ctx.directoff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainHomeComponent_Template_button_click_34_listener() {
            return ctx.editLinks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MainHomeComponent_div_37_Template, 3, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MainHomeComponent_div_38_Template, 7, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Patent Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "TapIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Help Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MainHomeComponent_div_52_Template, 19, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, MainHomeComponent_div_53_Template, 11, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MainHomeComponent_div_54_Template, 8, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MainHomeComponent_div_55_Template, 18, 5, "div", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c2, ctx.seen, !ctx.seen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.caption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx.toggle, !ctx.toggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notDraggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pop);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".btn-top[_ngcontent-%COMP%] {\n    background-color: black;\n    font-weight: 500;\n    color: white;\n    width: 100%;\n    border-radius: 0 !important;\n    position: fixed;\n    z-index: 9999;\n  }\n  \n  .logo[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 60px;\n  }\n  \n  .new-link-row[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .column-ten[_ngcontent-%COMP%]{\n    padding-left: 0px !important;\n    padding-top: 5px;\n  }\n  \n  .link-caption[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: grey;\n    margin-top: 10px;\n  }\n  \n  .last-btn[_ngcontent-%COMP%]{\n    width: 100%;\n    margin-top: 20px;\n  }\n  \n  .inner-row[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 10px;\n  }\n  \n  .cross[_ngcontent-%COMP%]{\n    position: absolute;\n    right:15px;\n    font-size: 20px;\n  }\n  \n  .user-title[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n  \n  .inner-img[_ngcontent-%COMP%]{\n    width: 30px;\n    height: 30px;\n  }\n  \n  .header[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    border: 1px solid black;\n  }\n  \n  .link-input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    background-color: #e9e9e9;\n  }\n  \n  .link-input[_ngcontent-%COMP%]:focus{\n    outline:none !important;\n  }\n  \n  .last[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 250px;\n    background-color: white;\n    position: fixed;\n    bottom: 0;\n  }\n  \n  .img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 60px;\n  }\n  \n  .whtsapp[_ngcontent-%COMP%] {\n    width: 82%;\n  }\n  \n  .close-button[_ngcontent-%COMP%]{\n      color: #00aced !important;\n      top: 7px;\n      right:20px;\n      font-size: 30px;\n      position: absolute;\n  }\n  \n  .opacity[_ngcontent-%COMP%]{\n    opacity: 0.1;\n  }\n  \n  .links-button[_ngcontent-%COMP%]{\n      border: none;\n      background: white;\n      width: 100%;\n  }\n  \n  .links-button[_ngcontent-%COMP%]:focus{\n    box-shadow: none !important;\n    outline:none !important;\n    border:none !important;\n  }\n  \n  .green[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 4px;\n      background-color: #00aced;\n      border-color: #00aced;\n      font-size: 18px;\n      font-family: proxima-nova, Arial, Helvetica, sans-serif;\n      font-weight: 400;\n      overflow: hidden;\n      margin-left: 8px;\n      margin-right: 15px;\n      color: white;\n  }\n  \n  .red[_ngcontent-%COMP%] {\n      color: white;\n      background-color: #28a745;\n      width: 100%;\n      padding: 4px;\n      font-size: 18px;\n      font-family: proxima-nova, Arial, Helvetica, sans-serif;\n      font-weight: 400;\n      overflow: hidden;\n      margin-left: 8px;\n      margin-right: 15px;\n  }\n  \n  .extra-img[_ngcontent-%COMP%]{\n      width: 100%;\n  }\n  \n  .btn-1[_ngcontent-%COMP%]{\n      width: 250px;\n  }\n  \n  .link-text[_ngcontent-%COMP%]{\n      font-size: 30px;\n      font-weight: 400;\n  }\n  \n  .Links[_ngcontent-%COMP%]{\n      position: fixed;\n      max-height: 500px;\n      overflow: scroll;\n      width: 100%;\n      bottom: 0;\n      background-color: white;\n      z-index: 9999;\n  }\n  \n  .bottom-text[_ngcontent-%COMP%]{\n      font-size: 22px;\n      font-weight: 400;\n  }\n  \n  .popl[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: #000000;\n    color: white;\n    font-weight: 550;\n    text-align: center;\n    border: none;\n    border-radius: 0;\n    float: left;\n  }\n  \n  .column[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  \n  .column[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n  }\n  \n  .bottom[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    background-color: #fff;\n    z-index: 9999;\n  }\n  \n  .close[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 34px;\n  }\n  \n  desc[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n  .headerPanel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 110px;\n    float: left;\n    padding: 10px 0;\n    border-bottom: 1px solid #DADADA;\n  }\n  \n  .image-col[_ngcontent-%COMP%] {\n    float: left;\n  }\n  \n  .rippllogo[_ngcontent-%COMP%] {\n    height: 40px;\n    padding: 1px\n  }\n  \n  .EditProfile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: black;\n  }\n  \n  .justify-space-between[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  \n  .mainprofileSection[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n  }\n  \n  .profileSection[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n  }\n  \n  .profileImage[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 100px;\n    color: #818181;\n  }\n  \n  .bio[_ngcontent-%COMP%] {\n    display: block;\n    padding-top: 3px;\n    text-align: center\n  }\n  \n  .prfileContant[_ngcontent-%COMP%] {\n    color: #000;\n    width: 100%;\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\n    font-weight: 700;\n  }\n  \n  .buttonSection[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4px;\n    background-color: #00aced;\n    border-color: #00aced;\n    font-size: 18px;\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\n    font-weight: 400;\n    overflow: hidden;\n    margin-left: 8px;\n    margin-right: 15px;\n  }\n  \n  button.btn.btn-primary.directButton[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin: 0 15px;\n  }\n  \n  .directButton[_ngcontent-%COMP%]{\n     \n  }\n  \n  .prfileContant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px\n  }\n  \n  .prfileContant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n  }\n  \n  .iconImage[_ngcontent-%COMP%] {\n    width: 40%;\n    display: inline-block;\n    padding: 10px;\n    margin: 12px;\n    margin-bottom: -10px;\n    position: relative;\n  }\n  \n  .iconImage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000000\n  }\n  \n  .iconImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%\n  }\n  \n  .mainIcone[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 1px;\n    overflow: hidden;\n  }\n  \n  .PoweredSection[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    margin-top: 50px;\n  }\n  \n  .PoweredBy[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    width: 100%;\n    text-align: center;\n    color: #00aced;\n    font-size: 18px;\n  }\n  \n  .PoweredSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 32%;\n  }\n  \n  .PoweredBy.helpSection[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    font-size: 22px;\n  }\n  \n  \n  \n  .qrgenerateSection[_ngcontent-%COMP%] {\n      height: 420px;\n      width: 100%;\n      z-index: 999999999999;\n      background-color: white;\n      overflow-x: hidden;\n      transition: 0.5s;\n      position: fixed;\n      bottom: 0;\n  }\n  \n  .qrgenerateSection[_ngcontent-%COMP%]   .closeqr[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 1px;\n      right: 10px;\n      font-size: 30px;\n      color: #00aced;\n  }\n  \n  .qr-content[_ngcontent-%COMP%]   .addWalletbtn[_ngcontent-%COMP%] {\n      margin: 0 auto;\n      background-color: #00aced;\n      border-color: #00aced;\n      font-size: 22px;\n      color: #ffffff;\n      margin-top: 65px;\n      margin-bottom: 0px;\n      padding: 3px;\n  }\n  \n  .qrgenerateSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      text-decoration: none;\n      font-size: 36px;\n      color: #818181;\n      display: block;\n      transition: 0.3s;\n  }\n  \n  .qr-content[_ngcontent-%COMP%]   .scan-taxt[_ngcontent-%COMP%]{\n      color: #818181;\n      font-size: 18px ;\n      padding-top: 20px;\n  }\n  \n  .qr-content[_ngcontent-%COMP%]   .scan-taxt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      padding: 0px;\n      display: inline-block;\n      color: #00aced;\n      font-size: 18px;}\n  \n  .disabled[_ngcontent-%COMP%]\n     {\n      cursor: not-allowed;\n         \n      }\n  \n  .setOpacity[_ngcontent-%COMP%] {\n      opacity: 0.1;\n     }\n  \n  .setOpacity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        cursor: no-drop;\n      }\n  \n  .setOpacity[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        cursor: no-drop;\n      }\n  \n  .disabled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        -webkit-filter: blur(5px);\n        -moz-filter: blur(5px);\n        -o-filter: blur(5px);\n        -ms-filter: blur(5px);\n        filter: blur(5px);\n        background: #dddddd;\n        cursor: not-allowed;\n        z-index: 1;\n      }\n  \n  .add-social[_ngcontent-%COMP%]   .input-group-addon-new[_ngcontent-%COMP%] {\n        line-height: 22px !important;\n      padding: 5px !important;\n      width: 20px !important;\n      height: 42px !important;\n      background: #e9e9e9 !important;\n      border: 0 !important;\n      width: 55px !important;\n      border-radius: 10px;\n      margin-right: -10px;\n      z-index: 999;\n    }\n  \n  .add-social[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n      position: relative;\n      display: flex;\n      width: 100%;\n  }\n  \n  .add-social[_ngcontent-%COMP%]   .input-group-addon-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      width: 32px;\n      height: 32px;\n      margin-left: 1px;\n  }\n  \n  .add-social[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n      position: relative;\n      z-index: 2;\n      flex: 1 1 auto;\n      width: 1%;\n      margin-bottom: 0;\n  }\n  \n  .add-social[_ngcontent-%COMP%]   .form-control-new[_ngcontent-%COMP%]:visited, .form-control-new[_ngcontent-%COMP%]:hover, .form-control-new[_ngcontent-%COMP%]:active, .form-control-new[_ngcontent-%COMP%] {\n      background: #e9e9e9;\n      padding: 12px 30px;\n      border-radius: 10px !important;\n      height: 42px;\n      border: 0;\n      margin-left: -7px;\n      \n  }\n  \n  .add-social[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]:hover, .closeBtn[_ngcontent-%COMP%]:active, .closeBtn[_ngcontent-%COMP%] {\n    color: #A7A9AB;\n    font-size: 24px;\n    position: absolute;\n    right: 12px;\n    top: 9px;\n    cursor: pointer;\n    z-index: 9;\n  }\n  \n  .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 2;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0;\n  }\n  \n  @media only screen and (max-width: 992px) {\n    .user-title[_ngcontent-%COMP%]{font-size: 22px;}\n   }\n  \n  @media only screen and (max-width: 500px) {\n    .user-title[_ngcontent-%COMP%]{font-size: 18px;}\n    .Links[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {font-size: 10px; word-break: break-all;}\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1ob21lL21haW4taG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUNBO01BQ0kseUJBQXlCO01BQ3pCLFFBQVE7TUFDUixVQUFVO01BQ1YsZUFBZTtNQUNmLGtCQUFrQjtFQUN0Qjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFDQTtNQUNJLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsV0FBVztFQUNmOztFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7O0VBQ0E7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixxQkFBcUI7TUFDckIsZUFBZTtNQUNmLHVEQUF1RDtNQUN2RCxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWTtFQUNoQjs7RUFFQTtNQUNJLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsdURBQXVEO01BQ3ZELGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtFQUN0Qjs7RUFDQTtNQUNJLFdBQVc7RUFDZjs7RUFDQTtNQUNJLFlBQVk7RUFDaEI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsZ0JBQWdCO0VBQ3BCOztFQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsYUFBYTtFQUNqQjs7RUFDQTtNQUNJLGVBQWU7TUFDZixnQkFBZ0I7RUFDcEI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQjtFQUNGOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCx1REFBdUQ7SUFDdkQsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix1REFBdUQ7SUFDdkQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBQ0E7O0VBRUE7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBLFlBQVk7O0VBRVo7TUFDSSxhQUFhO01BQ2IsV0FBVztNQUNYLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsU0FBUztFQUNiOztFQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixXQUFXO01BQ1gsZUFBZTtNQUNmLGNBQWM7RUFDbEI7O0VBQ0E7TUFDSSxjQUFjO01BQ2QseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWTtFQUNoQjs7RUFDQTtNQUNJLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsY0FBYztNQUNkLGNBQWM7TUFDZCxnQkFBZ0I7RUFDcEI7O0VBQ0E7TUFDSSxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQjs7RUFDQTtNQUNJLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsY0FBYztNQUNkLGVBQWUsQ0FBQzs7RUFFaEI7O01BRUEsbUJBQW1COztNQUVuQjs7RUFFQTtNQUNBLFlBQVk7S0FDYjs7RUFFQztRQUNFLGVBQWU7TUFDakI7O0VBRUE7UUFDRSxlQUFlO01BQ2pCOztFQUVBO1FBQ0UseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLFVBQVU7TUFDWjs7RUFDQTtRQUNFLDRCQUE0QjtNQUM5Qix1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qiw4QkFBOEI7TUFDOUIsb0JBQW9CO01BQ3BCLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFlBQVk7SUFDZDs7RUFDQTtNQUNFLGtCQUFrQjtNQUVsQixhQUFhO01BQ2IsV0FBVztFQUNmOztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7RUFDcEI7O0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsVUFBVTtNQUVWLGNBQWM7TUFDZCxTQUFTO01BQ1QsZ0JBQWdCO0VBQ3BCOztFQUNBO01BQ0ksbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLFNBQVM7TUFDVCxpQkFBaUI7O0VBRXJCOztFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVTtFQUNaOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFFVixjQUFjO0lBQ2QsU0FBUztJQUNULGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVksZUFBZSxDQUFDO0dBQzdCOztFQUNBO0lBQ0MsWUFBWSxlQUFlLENBQUM7SUFDNUIsaUJBQWlCLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQztFQUMxRCIsImZpbGUiOiJzcmMvYXBwL21haW4taG9tZS9tYWluLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gIH1cbiAgXG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgXG4gIC5uZXctbGluay1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jb2x1bW4tdGVue1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICBcbiAgLmxpbmstY2FwdGlvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLmxhc3QtYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5pbm5lci1yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAuY3Jvc3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OjE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIFxuICAudXNlci10aXRsZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgXG4gIC5pbm5lci1pbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG4gIC5saW5rLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgfVxuICBcbiAgLmxpbmstaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sYXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgXG4gIC5pbWcge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxuICBcbiAgLndodHNhcHAge1xuICAgIHdpZHRoOiA4MiU7XG4gIH1cbiAgLmNsb3NlLWJ1dHRvbntcbiAgICAgIGNvbG9yOiAjMDBhY2VkICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDdweDtcbiAgICAgIHJpZ2h0OjIwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLm9wYWNpdHl7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIC5saW5rcy1idXR0b257XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5saW5rcy1idXR0b246Zm9jdXN7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmdyZWVuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwYWNlZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5yZWQge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICAuZXh0cmEtaW1ne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ0bi0xe1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICB9XG4gIFxuICAubGluay10ZXh0e1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuTGlua3N7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgfVxuICAuYm90dG9tLXRleHR7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5wb3BsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLmNvbHVtbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuY29sdW1uOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmJvdHRvbSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDM0cHg7XG4gIH1cbiAgXG4gIGRlc2Mge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuaGVhZGVyUGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREFEQURBO1xuICB9XG4gIFxuICAuaW1hZ2UtY29sIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLnJpcHBsbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDFweFxuICB9XG4gIFxuICAuRWRpdFByb2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIFxuICAubWFpbnByb2ZpbGVTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLnByb2ZpbGVTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnByb2ZpbGVJbWFnZSBpIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICB9XG4gIFxuICAuYmlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG4gIFxuICAucHJmaWxlQ29udGFudCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIFxuICAuYnV0dG9uU2VjdGlvbiBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICBib3JkZXItY29sb3I6ICMwMGFjZWQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIFxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LmRpcmVjdEJ1dHRvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuICAuZGlyZWN0QnV0dG9ue1xuICAgICBcbiAgfVxuICBcbiAgLnByZmlsZUNvbnRhbnQgaDMge1xuICAgIGZvbnQtc2l6ZTogMzBweFxuICB9XG4gIFxuICAucHJmaWxlQ29udGFudCBwIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAuaWNvbkltYWdlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pY29uSW1hZ2UgYSB7XG4gICAgY29sb3I6ICMwMDAwMDBcbiAgfVxuICBcbiAgLmljb25JbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJVxuICB9XG4gIFxuICAubWFpbkljb25lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuUG93ZXJlZFNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIFxuICAuUG93ZXJlZEJ5IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMGFjZWQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuUG93ZXJlZFNlY3Rpb24gaHIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIFxuICAuUG93ZXJlZEJ5LmhlbHBTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgXG4gIC8qUXIgY29kZSAgKi9cbiAgXG4gIC5xcmdlbmVyYXRlU2VjdGlvbiB7XG4gICAgICBoZWlnaHQ6IDQyMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDA7XG4gIH1cbiAgLnFyZ2VuZXJhdGVTZWN0aW9uIC5jbG9zZXFyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMXB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBjb2xvcjogIzAwYWNlZDtcbiAgfVxuICAucXItY29udGVudCAuYWRkV2FsbGV0YnRuIHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwYWNlZDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIHBhZGRpbmc6IDNweDtcbiAgfVxuICAucXJnZW5lcmF0ZVNlY3Rpb24gYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBjb2xvcjogIzgxODE4MTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICAucXItY29udGVudCAuc2Nhbi10YXh0e1xuICAgICAgY29sb3I6ICM4MTgxODE7XG4gICAgICBmb250LXNpemU6IDE4cHggO1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLnFyLWNvbnRlbnQgLnNjYW4tdGF4dCBhe1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgY29sb3I6ICMwMGFjZWQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7fVxuICBcbiAgICAgIC5kaXNhYmxlZFxuICAgICB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgXG4gICAgICB9XG4gIFxuICAgICAgLnNldE9wYWNpdHkge1xuICAgICAgb3BhY2l0eTogMC4xO1xuICAgICB9XG4gIFxuICAgICAgLnNldE9wYWNpdHkgYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgICAgfVxuICBcbiAgICAgIC5zZXRPcGFjaXR5IGltZyB7XG4gICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgIH1cbiAgXG4gICAgICAuZGlzYWJsZWQgaW1nIHtcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgICAgZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgICAuYWRkLXNvY2lhbCAuaW5wdXQtZ3JvdXAtYWRkb24tbmV3IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogNTVweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuICAgIC5hZGQtc29jaWFsIC5pbnB1dC1ncm91cCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmFkZC1zb2NpYWwgLmlucHV0LWdyb3VwLWFkZG9uLW5ldyBpbWcge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBtYXJnaW4tbGVmdDogMXB4O1xuICB9XG4gIC5hZGQtc29jaWFsIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIHdpZHRoOiAxJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmFkZC1zb2NpYWwgLmZvcm0tY29udHJvbC1uZXc6dmlzaXRlZCwgLmZvcm0tY29udHJvbC1uZXc6aG92ZXIsIC5mb3JtLWNvbnRyb2wtbmV3OmFjdGl2ZSwgLmZvcm0tY29udHJvbC1uZXcge1xuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgXG4gIH1cbiAgLmFkZC1zb2NpYWwgLmNsb3NlQnRuOmhvdmVyLCAuY2xvc2VCdG46YWN0aXZlLCAuY2xvc2VCdG4ge1xuICAgIGNvbG9yOiAjQTdBOUFCO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgdG9wOiA5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDk7XG4gIH1cbiAgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB3aWR0aDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC51c2VyLXRpdGxle2ZvbnQtc2l6ZTogMjJweDt9XG4gICB9XG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLnVzZXItdGl0bGV7Zm9udC1zaXplOiAxOHB4O31cbiAgICAuTGlua3MgLmNhcHRpb24ge2ZvbnQtc2l6ZTogMTBweDsgd29yZC1icmVhazogYnJlYWstYWxsO31cbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-home',
          templateUrl: './main-home.component.html',
          styleUrls: ['./main-home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, {
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userData$ = this.userData.asObservable();
        this.loader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.userdata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.localDataValuesChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.baseUrl = 'http://18.191.52.3/TapinBackend/public/api/';
      }

      _createClass(AuthService, [{
        key: "setHeaders",
        value: function setHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('Accept', 'application/json');
          headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
          return headers;
        }
      }, {
        key: "sendUserData",
        value: function sendUserData(data) {
          this.userData.next(data);
        }
      }, {
        key: "getData",
        value: function getData(url, data) {
          var headers = this.setHeaders();

          if (data) {
            var queryParams = Object.keys(data).map(function (key) {
              return key + '=' + data[key];
            }).join('&');
            url += '?' + queryParams;
          }

          var options = {
            headers: headers
          };
          return this.http.get(this.baseUrl + url, options).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "postData",
        value: function postData(url, data, type) {
          var headers = this.setHeaders();
          /* if (type === 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344' );
          } */

          var options = {
            headers: headers
          };
          return this.http.post(this.baseUrl + url, data, options).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "deleteData",
        value: function deleteData(url) {
          var headers = this.setHeaders();
          var options = {
            headers: headers
          };
          return this.http["delete"](this.baseUrl + url, options).map(this.extractData)["catch"](this.handleError);
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          var body = res;
          return body || {};
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errMsg = error.error;

          if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) {
              return errMsg.message[k];
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
        }
      }, {
        key: "setData",
        value: function setData(data) {
          var key = '';
          var body = new URLSearchParams();

          for (key in data) {
            if (data[key] != null) {
              body.set(key, data[key]);
            }
          }

          return body.toString();
        }
      }, {
        key: "setLoader",
        value: function setLoader(value) {
          this.loader.next(value);
        }
      }, {
        key: "getLoader",
        value: function getLoader() {
          return this.loader.asObservable();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          return this.userdata.asObservable();
        }
      }, {
        key: "setUserData",
        value: function setUserData(data) {
          this.userdata.next(data);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/settings/settings.component.ts":
  /*!************************************************!*\
    !*** ./src/app/settings/settings.component.ts ***!
    \************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var SettingsComponent =
    /*#__PURE__*/
    function () {
      function SettingsComponent(router, authService, toast) {
        _classCallCheck(this, SettingsComponent);

        this.router = router;
        this.authService = authService;
        this.toast = toast;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "change",
        value: function change() {
          this.router.navigateByUrl('/change-password');
        }
      }, {
        key: "back",
        value: function back() {
          var username = localStorage.getItem('username');
          this.router.navigateByUrl('/user-home/' + username);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this19 = this;

          this.authService.postData('users/logout', {}, 'reset').subscribe(function (response) {
            if (response.status === 200) {
              localStorage.removeItem('userId');
              localStorage.removeItem('email');
              localStorage.removeItem('username');

              _this19.router.navigate(['/login']);
            }
          });
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount() {
          var _this20 = this;

          var userId = localStorage.getItem('userId');
          this.authService.deleteData('users/' + userId).subscribe(function (response) {
            if (response.status === 200) {
              _this20.router.navigate(['/login']);
            }
          }, function (error) {
            _this20.authService.setLoader(false);

            _this20.toast.error(error);
          });
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 33,
      vars: 0,
      consts: [[1, "headerPanel"], [1, "col-md-6", "offset-md-3"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "text-black"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Popl logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center"], [1, "text-black", 3, "click"], [1, "main-section"], [1, "w-100", "text-center", "float-left", "mt-3"], [1, "settingTitle", "mb-3"], [1, "btn", "btn-primary", "change-password", "mb-3", "text-white", 3, "click"], ["href", "#", 1, "btn", "btn-primary", "compatible-phone", "mb-3"], [1, "btn", "btn-primary", "log-out", "mb-3", 3, "click"], [1, "d-flex", "flex-column", "aline-center", "justify-content-center"], ["href", "#", 1, "btn", "btn-custom", "mb-3", 3, "click"], [1, "versionText"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_10_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_18_listener() {
            return ctx.change();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Compatible Phones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_24_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_28_listener() {
            return ctx.deleteAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Delete Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TapIn Profiles - Version 3.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".headerPanel[_ngcontent-%COMP%] {width: 100%; float: left; padding: 10px 0; border-bottom: 1px solid #DADADA;}\n.justify-space-between[_ngcontent-%COMP%] {justify-content: space-between;}\n.aline-center[_ngcontent-%COMP%]{align-items: center;}\n.rippllogo[_ngcontent-%COMP%] {height: 40px; padding: 1px}\n.text-black[_ngcontent-%COMP%]{color: #000}\n.settingTitle[_ngcontent-%COMP%]{font-size: 1.5rem;}\n.main-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{width: 100%; padding: 10px;font-size: 18px;font-weight: 400;}\n.change-password[_ngcontent-%COMP%] {background-color: #00aced; border-color: #00aced;}\n.compatible-phone[_ngcontent-%COMP%]{background-color: #738491; border-color: #738491}\n.log-out[_ngcontent-%COMP%]{background-color: #f97080; border-color: #f97080; color: #fff;}\n.btn.btn-custom.mb-3[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    width: auto;\n    float: left;\n}\n.versionText[_ngcontent-%COMP%] {color: #b5b5b5;}\n@media only screen and (max-width: 767px){\n    .main-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n        padding: 8px;\n        font-size: 16px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGdDQUFnQyxDQUFDO0FBQzFGLHdCQUF3Qiw4QkFBOEIsQ0FBQztBQUN2RCxjQUFjLG1CQUFtQixDQUFDO0FBQ2xDLFlBQVksWUFBWSxFQUFFLFlBQVk7QUFDdEMsWUFBWSxXQUFXO0FBQ3ZCLGNBQWMsaUJBQWlCLENBQUM7QUFDaEMsMkJBQTJCLFdBQVcsRUFBRSxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZGLGtCQUFrQix5QkFBeUIsRUFBRSxxQkFBcUIsQ0FBQztBQUNuRSxrQkFBa0IseUJBQXlCLEVBQUUscUJBQXFCO0FBQ2xFLFNBQVMseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxDQUFDO0FBQ3ZFO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0EsY0FBYyxjQUFjLENBQUM7QUFFN0I7SUFDSTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclBhbmVsIHt3aWR0aDogMTAwJTsgZmxvYXQ6IGxlZnQ7IHBhZGRpbmc6IDEwcHggMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7fVxuLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO31cbi5hbGluZS1jZW50ZXJ7YWxpZ24taXRlbXM6IGNlbnRlcjt9XG4ucmlwcGxsb2dvIHtoZWlnaHQ6IDQwcHg7IHBhZGRpbmc6IDFweH1cbi50ZXh0LWJsYWNre2NvbG9yOiAjMDAwfVxuLnNldHRpbmdUaXRsZXtmb250LXNpemU6IDEuNXJlbTt9XG4ubWFpbi1zZWN0aW9uIC5idG4tcHJpbWFyeXt3aWR0aDogMTAwJTsgcGFkZGluZzogMTBweDtmb250LXNpemU6IDE4cHg7Zm9udC13ZWlnaHQ6IDQwMDt9XG4uY2hhbmdlLXBhc3N3b3JkIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkOyBib3JkZXItY29sb3I6ICMwMGFjZWQ7fVxuLmNvbXBhdGlibGUtcGhvbmV7YmFja2dyb3VuZC1jb2xvcjogIzczODQ5MTsgYm9yZGVyLWNvbG9yOiAjNzM4NDkxfVxuLmxvZy1vdXR7YmFja2dyb3VuZC1jb2xvcjogI2Y5NzA4MDsgYm9yZGVyLWNvbG9yOiAjZjk3MDgwOyBjb2xvcjogI2ZmZjt9XG4uYnRuLmJ0bi1jdXN0b20ubWItMyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4udmVyc2lvblRleHQge2NvbG9yOiAjYjViNWI1O31cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XG4gICAgLm1haW4tc2VjdGlvbiAuYnRuLXByaW1hcnkge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, toast, authService, formBuilder) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.toast = toast;
        this.authService = authService;
        this.formBuilder = formBuilder;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this21 = this;

          var addLinks = [{
            imageLink: './assets/social/whatsapp.png',
            title: "whatsapp"
          }, {
            imageLink: './assets/social/facebookicon.png',
            title: "facebook"
          }, {
            imageLink: './assets/social/mailicon.png',
            title: "mail"
          }, {
            imageLink: './assets/social/insta.png',
            title: "instagram"
          }, {
            imageLink: './assets/social/snapchat.png',
            title: "snapchat"
          }, {
            imageLink: './assets/social/twitter.png',
            title: "twitter"
          }, {
            imageLink: './assets/social/linkedin.png',
            title: "linkedin"
          }, {
            imageLink: './assets/social/imessage.png',
            title: "imessage"
          }, {
            imageLink: './assets/social/youtube.png',
            title: "youtube"
          }, {
            imageLink: './assets/social/tiktoknew.png',
            title: "tiktok"
          }, {
            imageLink: './assets/social/soundcloudnew.png',
            title: "soundcloud"
          }, {
            imageLink: './assets/social/spotify.png',
            title: "spotify"
          }, {
            imageLink: './assets/social/applemusicicon.png',
            title: "applemusic"
          }, {
            imageLink: './assets/social/cash.png',
            title: "cashapp"
          }, {
            imageLink: './assets/social/safari.png',
            title: "safari"
          }, {
            imageLink: './assets/social/customlink.png',
            title: "customLink"
          }, {
            imageLink: './assets/social/twitch.png',
            title: "twitch"
          }];
          this.authService.setLoader(true);
          var body = new URLSearchParams();
          body.set('username', data.username);
          body.set('email', data.email);
          body.set('password', data.password);

          for (var i = 0; i < addLinks.length; i++) {
            body.set('social[' + [i] + '][imageLink]', addLinks[i].imageLink);
            body.set('social[' + [i] + '][title]', addLinks[i].title);
          }

          this.authService.postData('register', body.toString()).subscribe(function (response) {
            _this21.authService.setLoader(false);

            if (response.data) {
              var res = response.data;
              localStorage.setItem('token', res.token);
              localStorage.setItem('userId', res.id);
              localStorage.setItem('email', res.email);
              localStorage.setItem('username', res.username);

              _this21.router.navigateByUrl('/user-home/' + res.username);
            }
          }, function (error) {
            _this21.authService.setLoader(false);

            _this21.toast.error(error);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 41,
      vars: 4,
      consts: [[1, "popl", "btn"], [1, "headerPanel"], [1, "col-md-6", "offset-md-3"], [1, "nav"], [1, "top-headear", "text-right", "align-self-center"], [1, "top-headear", "text-center", "align-self-center"], ["src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "join-link", 3, "routerLink"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3", "m-t-80"], [1, "title", "text-center"], [1, "card"], [1, "card-title", "text-center"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "username", "id", "exampleInputPassword1", "placeholder", "Username", 1, "form-control", "password"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Email", 1, "form-control", "email"], ["type", "password", "formControlName", "password", "id", "exampleInputPassword1", "placeholder", "Create Password", 1, "form-control", "password"], ["type", "submit", 1, "btn", "btn-primary", "login", 3, "disabled", "click"], [1, "mb-3", "text-center"], ["href", "#"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-primary", "join"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tap Here To get Your Tap in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Set Up Your TapIn!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter your information below to set up your TapIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_29_listener() {
            return ctx.onSubmit(ctx.registerForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "By registering, you agree to our ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Terms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Privacy Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already set Up? Log in here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".card-row[_ngcontent-%COMP%]{\n    justify-content: center;\n    align-items: center;\n}\n.join-link[_ngcontent-%COMP%]{\n    color:black !important;\n    margin-left: 80px;\n    font-weight: 350px;\n}\n.logo[_ngcontent-%COMP%]{\n    height:60px;\n    width:60px;\n}\n.header[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 100%;\n    border-bottom: 1px solid #DADADA;\n}\n.card-col[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 159px;\n}\n.card[_ngcontent-%COMP%]{\n    background-color: #F3F3F3;\n    border:none !important;\n}\n.title[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size:34px;\n}\n.card-title[_ngcontent-%COMP%]{\n    font-size:30px;\n    font-size:25px;\n}\n.email[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 12px;\n}\n.popl[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: #3BD950;\n    color: white;\n    font-weight: 550;\n    text-align: center;\n    border:none;\n}\n.password[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 12px;\n}\n.login[_ngcontent-%COMP%]{\n    width:100%;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n.join[_ngcontent-%COMP%]{\n    width:100%;\n    font-weight: 500;\n    margin-bottom: 10px;\n}\n.forgot[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    margin: 20px;\n    font-size: 15px;\n}\n.m-t-80[_ngcontent-%COMP%] {margin-top: 80px;}\n@media only screen and (max-width: 992px) {\n    .title[_ngcontent-%COMP%] { font-size: 30px;}\n    .card-title[_ngcontent-%COMP%]{font-size: 22px;}\n    .m-t-80[_ngcontent-%COMP%] {margin-top: 40px;}\n   }\n@media only screen and (max-width: 500px) {\n     .card-title[_ngcontent-%COMP%]{font-size: 20px;}\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQSxTQUFTLGdCQUFnQixDQUFDO0FBRTFCO0lBQ0ksU0FBUyxlQUFlLENBQUM7SUFDekIsWUFBWSxlQUFlLENBQUM7SUFDNUIsU0FBUyxnQkFBZ0IsQ0FBQztHQUMzQjtBQUNBO0tBQ0UsWUFBWSxlQUFlLENBQUM7SUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1yb3d7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qb2luLWxpbmt7XG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBmb250LXdlaWdodDogMzUwcHg7XG59XG4ubG9nb3tcbiAgICBoZWlnaHQ6NjBweDtcbiAgICB3aWR0aDo2MHB4O1xufVxuLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7XG59XG4uY2FyZC1jb2x7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTU5cHg7XG59XG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjM0cHg7XG59XG4uY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBmb250LXNpemU6MjVweDtcbn1cbi5lbWFpbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ucG9wbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0JEOTUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6bm9uZTtcbn1cbi5wYXNzd29yZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ubG9naW57XG4gICAgd2lkdGg6MTAwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uam9pbntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb3Jnb3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLm0tdC04MCB7bWFyZ2luLXRvcDogODBweDt9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAudGl0bGUgeyBmb250LXNpemU6IDMwcHg7fVxuICAgIC5jYXJkLXRpdGxle2ZvbnQtc2l6ZTogMjJweDt9XG4gICAgLm0tdC04MCB7bWFyZ2luLXRvcDogNDBweDt9XG4gICB9XG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgIC5jYXJkLXRpdGxle2ZvbnQtc2l6ZTogMjBweDt9XG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-home/user-home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-home/user-home.component.ts ***!
    \**************************************************/

  /*! exports provided: UserHomeComponent */

  /***/
  function srcAppUserHomeUserHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
      return UserHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["searchInput"];

    function UserHomeComponent_div_37_ng_container_1_div_1_a_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r12.title);
      }
    }

    function UserHomeComponent_div_37_ng_container_1_div_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserHomeComponent_div_37_ng_container_1_div_1_a_1_div_2_Template, 2, 1, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var data_r12 = ctx_r18.$implicit;
        var i_r13 = ctx_r18.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r12.SocialLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r12.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 == 0);
      }
    }

    function UserHomeComponent_div_37_ng_container_1_div_1_a_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r12.title);
      }
    }

    function UserHomeComponent_div_37_ng_container_1_div_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserHomeComponent_div_37_ng_container_1_div_1_a_2_div_2_Template, 2, 1, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var data_r12 = ctx_r21.$implicit;
        var i_r13 = ctx_r21.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r12.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 > 0);
      }
    }

    function UserHomeComponent_div_37_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserHomeComponent_div_37_ng_container_1_div_1_a_1_Template, 3, 3, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserHomeComponent_div_37_ng_container_1_div_1_a_2_Template, 3, 2, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r13 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 > 0);
      }
    }

    function UserHomeComponent_div_37_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserHomeComponent_div_37_ng_container_1_div_1_Template, 3, 2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.dataSource);
      }
    }

    function UserHomeComponent_div_37_ng_container_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var data_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", data_r23.SocialLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r23.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r23.title);
      }
    }

    function UserHomeComponent_div_37_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserHomeComponent_div_37_ng_container_2_div_1_Template, 5, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_37_ng_container_2_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.addnewLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.dataSource);
      }
    }

    function UserHomeComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserHomeComponent_div_37_ng_container_1_Template, 6, 1, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserHomeComponent_div_37_ng_container_2_Template, 6, 1, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.caption == "Direct On");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.caption == "Direct Off");
      }
    }

    function UserHomeComponent_div_38_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_38_div_2_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var img_r27 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29["delete"](img_r27.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", img_r27.SocialLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r27.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r27.title);
      }
    }

    function UserHomeComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function UserHomeComponent_div_38_Template_div_cdkDropListDropped_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.drop($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserHomeComponent_div_38_div_2_Template, 7, 3, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_38_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.addnewLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dataSource);
      }
    }

    function UserHomeComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_52_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.closeLinkQr();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_52_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.onClickWallet();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add to wallet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Scan this code with any camera to share your Tapin profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "If you have the ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tapin app");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", ", ctx_r5.userName, " will be added to your People Page! ");
      }
    }

    function UserHomeComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_53_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.addLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_53_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.saveSocialSequence();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Drag and drop links to reorder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "opacity": a0
      };
    };

    function UserHomeComponent_div_54_div_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var extra_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", extra_r41.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r42.change));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](extra_r41.title);
      }
    }

    function UserHomeComponent_div_54_div_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_54_div_7_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var extra_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r45.popUp(extra_r41.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var extra_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", extra_r41.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r43.change));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](extra_r41.title);
      }
    }

    function UserHomeComponent_div_54_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserHomeComponent_div_54_div_7_ng_container_1_Template, 6, 5, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserHomeComponent_div_54_div_7_ng_container_2_Template, 5, 5, "ng-container", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var extra_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extra_r41.disableLink === false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", extra_r41.disableLink == true);
      }
    }

    function UserHomeComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_54_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.closeLink();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose a Social Link To add :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserHomeComponent_div_54_div_7_Template, 3, 2, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allLinks);
      }
    }

    function UserHomeComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_55_Template_span_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.closeLinkUsername();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 86, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserHomeComponent_div_55_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.addUsername = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_55_Template_i_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_div_55_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.added(ctx_r56.sourceLink, ctx_r56.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter Your ", ctx_r8.placeholder, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.sourceLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r8.placeholder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.addUsername);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.linkDescription, " ");
      }
    }

    var _c2 = function _c2(a0, a1) {
      return {
        "green": a0,
        "red": a1
      };
    };

    var UserHomeComponent =
    /*#__PURE__*/
    function () {
      function UserHomeComponent(router, activatedRoute, authService, toast) {
        _classCallCheck(this, UserHomeComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.toast = toast;
        this.dataSource = []; // dataSource = [
        //   { name: './assets/social/mailicon.png', title: "Mail", id: 3 }
        // ];

        this.images = [{
          imageLink: "./assets/social/whatsapp.png",
          title: "whatsapp"
        }, {
          imageLink: "./assets/social/facebookicon.png",
          title: "facebook"
        }, {
          imageLink: "./assets/social/mailicon.png",
          title: "mail"
        }, {
          imageLink: "./assets/social/contacts.png",
          title: "contact"
        }, {
          imageLink: "./assets/social/insta.png",
          title: "Whatsapp"
        }];
        this.addLinks = [{
          imageLink: './assets/social/whatsapp.png',
          title: "whatsapp",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/facebookicon.png',
          title: "facebook",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/mailicon.png',
          title: "mail",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/insta.png',
          title: "instagram",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/snapchat.png',
          title: "snapchat",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/twitter.png',
          title: "twitter",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/linkedin.png',
          title: "linkedin",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/imessage.png',
          title: "imessage",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/youtube.png',
          title: "youtube",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/tiktoknew.png',
          title: "tiktok",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/soundcloudnew.png',
          title: "soundcloud",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/spotify.png',
          title: "spotify",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/applemusicicon.png',
          title: "applemusic",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/cash.png',
          title: "cashapp",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/safari.png',
          title: "safari",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/venmo.png',
          title: "twitch",
          link: '',
          disableLink: true
        }, {
          imageLink: './assets/social/twitch.png',
          title: "twitch",
          link: '',
          disableLink: true
        }];
        this.pop = false;
        this.show = false;
        this.qrCode = false;
        this.appear = false;
        this.notDraggable = true;
        this.Draggable = false;
        this.toggle = true;
        this.seen = true;
        this.detect = false;
        this.status1 = 'Enable';
        this.caption = 'Direct Off';
        this.status = 'Enable';
        this.name = 'Edit';
        this.isDisabled = false;
        this.linkDisabled = false;
        this.change = false;
        this.allLinks = [];
        this.submitAllLinks = [];
        this.isDisabledLink = false;
      }

      _createClass(UserHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = localStorage.getItem('userId');
          this.getData(); // if(this.userId) {
          //   this.getData();
          // } else {
          //   const username = this.activatedRoute.snapshot.url[1].path;
          //   this.router.navigateByUrl('/user/' + username);
          // }

          this.userName = localStorage.getItem('username');

          if (localStorage.getItem('bio') !== 'null') {
            this.desc = localStorage.getItem('bio');
          } // this.authService.getUserData().subscribe(value => {
          //   this.userName = value.username;
          //   if (value.bio !== 'null') {
          //     this.desc = value.bio;
          //   }
          // });

        }
      }, {
        key: "added",
        value: function added(sourceLink, titleName) {
          var data = [];
          this.dataSource.push({
            imageLink: sourceLink,
            title: titleName.toLowerCase(),
            link: this.addUsername,
            disableLink: false
          });
          this.saveSocialSequence();
          this.pop = false;
        }
      }, {
        key: "popUp",
        value: function popUp(event) {
          if (event === 'whatsapp') {
            this.sourceLink = './assets/social/whatsapp.png', this.placeholder = 'WhatsApp Number';
            this.title = 'whatsApp';
            this.linkDescription = 'Open WhatsApp and go to settings. Tap your profile at the top and add your phone number here. Make sure to include your country code!';
          } else if (event === 'facebook') {
            this.sourceLink = './assets/social/facebookicon.png', this.placeholder = 'Facebook Profile link';
            this.title = 'facebook';
            this.linkDescription = 'Go to facebook.com and open your Facebook profile or page. Then copy and paste the url link here.';
          } else if (event === 'mail') {
            this.sourceLink = './assets/social/mailicon.png', this.placeholder = 'Email';
            this.title = 'mail';
            this.linkDescription = 'Input your email address. This email can be the same or different from the one used for your account signup.';
          } else if (event === 'contacts') {
            this.sourceLink = './assets/social/contacts.png', this.placeholder = 'FaceBook Id';
            this.title = 'contacts';
            this.linkDescription = 'Open WhatsApp and go to settings. Tap your profile at the top and add your phone number here. Make sure to include your country code!';
          } else if (event == 'instagram') {
            this.sourceLink = './assets/social/insta.png', this.placeholder = 'Instagram username';
            this.title = 'instagram';
            this.linkDescription = 'Open the Instagram app and go to your profile. Your instagram username will be at the top of your screen.';
          } else if (event == 'snapchat') {
            this.sourceLink = './assets/social/snapchat.png', this.placeholder = 'Snapchat username';
            this.title = 'snapchat';
            this.linkDescription = 'Open Snapchat and tap your profile picture in the top left corner. Your snapchat username will be below your Snapchat name.';
          } else if (event == 'twitter') {
            this.sourceLink = './assets/social/twitter.png', this.placeholder = 'Twitter username';
            this.title = 'twitter';
            this.linkDescription = 'Open the Twitter app and tap your profile picture in the top left corner. Your twitter username will be in grey with an @ sign.';
          } else if (event == 'linkedin') {
            this.sourceLink = './assets/social/linkedin.png', this.placeholder = 'LinkedIn profile link';
            this.title = 'linkedin';
            this.linkDescription = 'Go to your Linkedin profile and scroll down to the “contact” section. Find your LinkedIn profile link in this section and copy/paste here!';
          } else if (event == 'imessage') {
            this.sourceLink = './assets/social/imessage.png', this.placeholder = 'Phone number';
            this.title = 'imessage';
            this.linkDescription = 'Input your phone number with your country code (Example +1 for USA).';
          } else if (event == 'youtube') {
            this.sourceLink = './assets/social/youtube.png', this.placeholder = 'Youtube user/channel link';
            this.title = 'youtube';
            this.linkDescription = 'Open the Youtube app and go to your channel. Then tap the three dots in the top right corner and tap share. Copy/paste the link here.';
          } else if (event == 'tiktok') {
            this.sourceLink = './assets/social/tiktoknew.png', this.placeholder = 'TikTok username';
            this.title = 'tiktok';
            this.linkDescription = 'Open TikTok and go to the “me” tab. Your TikTok username is under your profile picture.';
          } else if (event == 'soundcloud') {
            this.sourceLink = './assets/social/soundcloudnew.png', this.placeholder = 'Soundcloud username';
            this.title = 'soundcloud';
            this.linkDescription = 'Open the Soundcloud app and go to your profile. Copy and paste your username here.';
          } else if (event == 'spotify') {
            this.sourceLink = './assets/social/spotify.png', this.placeholder = 'Link to Spotify';
            this.title = 'spotify';
            this.linkDescription = 'Pick your favorite playlist/track/album and tap the three dots in the top right corner. Tap share and copy/paste the link here.';
          } else if (event == 'applemusic') {
            this.sourceLink = './assets/social/applemusicicon.png', this.placeholder = 'Link to Apple Music';
            this.title = 'applemusic';
            this.linkDescription = 'Pick your favorite playlist/track/album and tap the three dots in the top right corner. Tap share and copy/paste link here.';
          } else if (event == 'cashapp') {
            this.sourceLink = './assets/social/cash.png', this.placeholder = 'Cash App username';
            this.title = 'cashapp';
            this.linkDescription = 'Open CashApp and tap the profile icon in the top right corner. Your CashApp username will be in grey with a $.';
          } else if (event == 'safari') {
            this.sourceLink = './assets/social/safari.png', this.placeholder = 'Website link';
            this.title = 'safari';
            this.linkDescription = 'Open your desired website and copy/paste the url here.';
          } else if (event == 'venmo') {
            this.sourceLink = './assets/social/venmo.png', this.placeholder = 'venmo username';
            this.title = 'venmo';
            this.linkDescription = 'Open the Venmo app and tap the three lines in the top left corner. Your username will be in grey with an @ sign.';
          }

          this.show = false;
          this.appear = false;
          this.pop = true;
        }
      }, {
        key: "editLinks",
        value: function editLinks() {
          this.notDraggable = false;
          this.Draggable = true;
          this.show = true;
          this.toggle = !this.toggle;
          this.status = this.toggle ? 'Enable' : 'Disable';

          if (this.name == 'Edit') {
            this.name = 'Save';
            this.isDisabled = true;
          } else {
            this.isDisabled = false;
            this.notDraggable = true;
            this.Draggable = false;
            this.show = false;
            this.saveSocialSequence();
            this.name = 'Edit';
          }
        } // delete(id) {
        //   this.images.splice(id, 1);
        // }

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this22 = this;

          if (confirm("Are you sure you want to delete?")) {
            this.authService.setLoader(true);
            this.authService.postData('users/updateSocial/' + id).subscribe(function (response) {
              if (response.status === 200) {
                _this22.authService.setLoader(false);

                _this22.getData();

                _this22.toast.success('Deleted Successfully!.');
              }
            }, function (error) {
              _this22.authService.setLoader(false);

              _this22.toast.error(error);
            });
          }
        }
      }, {
        key: "addLink",
        value: function addLink() {
          var _this23 = this;

          var array = [];
          this.dataSource.forEach(function (item2) {
            _this23.addLinks = _this23.addLinks.filter(function (item1) {
              if (JSON.stringify(item1.title) !== JSON.stringify(item2.title)) {
                return JSON.stringify(item2);
              }
            });
          });
          this.allLinks = this.dataSource.concat(this.addLinks);
          this.appear = true;
        }
      }, {
        key: "directoff",
        value: function directoff() {
          this.seen = !this.seen;
          this.status1 = this.seen ? 'Enable' : 'Disable';
          var dataAll = [];

          if (this.caption == 'Direct Off') {
            this.caption = 'Direct On';
          } else {
            this.caption = 'Direct Off'; // this.directOffFun();
          }
        }
      }, {
        key: "addnewLink",
        value: function addnewLink() {
          var _this24 = this;

          this.dataSource.forEach(function (item2) {
            _this24.addLinks = _this24.addLinks.filter(function (item1) {
              if (JSON.stringify(item1.title) !== JSON.stringify(item2.title)) {
                return JSON.stringify(item2);
              }
            });
          });
          this.allLinks = this.dataSource.concat(this.addLinks);
          this.appear = true;
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.router.navigateByUrl('/edit-profile');
        }
      }, {
        key: "closeLink",
        value: function closeLink() {
          this.appear = false;

          if (this.show == true) {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      }, {
        key: "closeLinkUsername",
        value: function closeLinkUsername() {
          this.pop = false;

          if (this.show == true) {
            this.show = true;
          } else {
            this.show = false;
          }
        }
      }, {
        key: "saveLink",
        value: function saveLink() {
          this.isDisabled = false;
          this.notDraggable = true;
          this.Draggable = false;
          this.show = false;
          this.toggle = !this.toggle;
          this.status = this.toggle ? 'Enable' : 'Disable';
          this.name = 'Edit';
        }
      }, {
        key: "drop",
        value: function drop(event) {
          // if (event.previousContainer === event.container) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(this.dataSource, event.previousIndex, event.currentIndex); // }
          // else {
          //   transferArrayItem(event.previousContainer.data,
          //     event.container.data,
          //     event.previousIndex,
          //     event.currentIndex);
          // }
        } //   moveItemInArray(this.images, event.previousIndex, event.currentIndex)
        // }

      }, {
        key: "clear",
        value: function clear() {
          this.searchInput.nativeElement.value = '';
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this25 = this;

          var userId = localStorage.getItem('userId');
          this.authService.setLoader(true);
          this.authService.getData('users/getSequence/' + userId).subscribe(function (response) {
            _this25.authService.setLoader(false);

            var data = [];

            if (response.data) {
              for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].link !== '') {
                  if (response.data[i].title === 'applemusic') {
                    response.data[i].SocialLink = 'https://itunes.apple.com/profile/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'instagram') {
                    response.data[i].SocialLink = 'https://www.instagram.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'whatsapp') {
                    response.data[i].SocialLink = 'https://api.whatsapp.com/send?phone=' + response.data[i].link;
                  }

                  if (response.data[i].title === 'snapchat') {
                    response.data[i].SocialLink = 'https://www.snapchat.com/add/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'facebook') {
                    response.data[i].SocialLink = 'https://www.facebook.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'mail') {
                    response.data[i].SocialLink = 'mailto:' + response.data[i].link;
                  }

                  if (response.data[i].title === 'twitter') {
                    response.data[i].SocialLink = 'https://twitter.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'linkedin') {
                    response.data[i].SocialLink = 'https://ca.linkedin.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'imessage') {
                    response.data[i].SocialLink = 'sms:' + response.data[i].link;
                  }

                  if (response.data[i].title === 'customLink') {
                    response.data[i].SocialLink = 'http://' + response.data[i].link;
                  }

                  if (response.data[i].title === 'youtube') {
                    response.data[i].SocialLink = 'https://www.youtube.com/c/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'tiktok') {
                    response.data[i].SocialLink = 'http://vt.tiktok.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'soundcloud') {
                    response.data[i].SocialLink = 'https://soundcloud.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'spotify') {
                    response.data[i].SocialLink = 'https://open.spotify.com/user/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'venmo') {
                    response.data[i].SocialLink = 'https://venmo.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'cashapp') {
                    response.data[i].SocialLink = 'https://cash.app/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'safari') {
                    response.data[i].SocialLink = 'http://' + response.data[i].link;
                  }

                  if (response.data[i].title === 'twitch') {
                    response.data[i].SocialLink = 'https://www.twitch.tv/' + response.data[i].link;
                  }

                  data.push(response.data[i]);
                }

                response.data[i].disableLink = false;
              }

              _this25.dataSource = data;
            }
          }, function (error) {
            _this25.authService.setLoader(false);

            _this25.toast.error(error);
          });
        }
      }, {
        key: "saveSocialSequence",
        value: function saveSocialSequence() {
          var _this26 = this;

          var body = new URLSearchParams();
          this.dataSource.forEach(function (item2) {
            _this26.addLinks = _this26.addLinks.filter(function (item1) {
              if (JSON.stringify(item1.title) !== JSON.stringify(item2.title)) {
                return JSON.stringify(item2);
              }
            });
          });
          this.submitAllLinks = this.dataSource.concat(this.addLinks);

          if (this.dataSource.length > 0) {
            for (var i = 0; i < this.submitAllLinks.length; i++) {
              body.set('social[' + [i] + '][imageLink]', this.submitAllLinks[i].imageLink);
              body.set('social[' + [i] + '][title]', this.submitAllLinks[i].title);
              body.set('social[' + [i] + '][link]', this.submitAllLinks[i].link);
            }
          }

          var userId = localStorage.getItem('userId');
          this.authService.setLoader(true);
          this.authService.postData('users/socialSequence/' + userId, body.toString()).subscribe(function (response) {
            _this26.authService.setLoader(false);

            if (response.status === 200) {
              _this26.getData();
            }
          }, function (error) {
            _this26.authService.setLoader(false);

            _this26.toast.error(error);
          });
        }
      }, {
        key: "qrCodeEnable",
        value: function qrCodeEnable() {
          this.qrCode = true;
        }
      }, {
        key: "closeLinkQr",
        value: function closeLinkQr() {
          if (this.qrCode == true) {
            this.qrCode = false;
          } else {
            this.qrCode = true;
          }
        }
      }, {
        key: "onClickWallet",
        value: function onClickWallet() {
          var _this27 = this;

          var userId = localStorage.getItem('userId');
          this.authService.setLoader(true);
          this.authService.getData('pkGenerateQ/' + userId).subscribe(function (response) {
            _this27.authService.setLoader(false); // console.log(response);


            if (response.status === 200) {
              var url = response.data;
              var elem = document.createElement('a');
              elem.href = url;
              elem.target = 'hiddenIframe';
              elem.click(); // const windowReference = window.open();
              // windowReference.location = response.data;
              // this.safariWindow = window.open();
              // this.safariWindow.location.href = response.data;
              // window.open(response.data,'_blank');
            }
          }, function (error) {
            _this27.authService.setLoader(false);

            _this27.toast.error(error);
          });
        }
      }]);

      return UserHomeComponent;
    }();

    UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) {
      return new (t || UserHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserHomeComponent,
      selectors: [["app-user-home"]],
      viewQuery: function UserHomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      decls: 56,
      vars: 19,
      consts: [[1, "top"], [1, "btn", "btn-top"], [1, "headerPanel", "mb-3"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3", "mt-5"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "EditProfile", 3, "click"], [1, "fa", "fa-sliders"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Popl logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center", 3, "click"], ["src", "https://poplme.co/templates/assets/frontend/images/QRBlackNew.png", "width", "40px"], [1, "row", "text-center"], [1, "col-md-6", "offset-md-3"], [1, "profileSection"], [1, "profileImage"], [1, "fa", "fa-user-circle-o"], [1, "bio"], [1, "prfileContant"], [1, "d-flex", "flex-row", "bd-highlight", "justify-content-center", "buttonSection", "mt-3"], [1, "btn", "directButton", 3, "disabled", "ngClass", "click"], [1, "btn", "directButton", 3, "ngClass", "click"], ["class", "row mt-3", 4, "ngIf"], ["cdkDropList", "", 3, "cdkDropListDropped", 4, "ngIf"], [1, "footerMain"], [1, "PoweredSection"], [1, "PoweredBy"], [1, "fa", "fa-check-circle"], ["href", "#"], [1, "hr"], ["href", "#", 1, "PoweredBy", "helpSection"], ["class", "qrgenerateSection", 4, "ngIf"], ["class", "bottom text-center", 4, "ngIf"], ["class", "Links pt-5", 4, "ngIf"], ["class", "last add-social", 4, "ngIf"], [1, "row", "mt-3"], [4, "ngIf"], ["class", "col-6 mt-3 column", 4, "ngFor", "ngForOf"], [1, "col-6", "mt-3", "column", "setOpacity"], ["src", "https://poplme.co/templates/assets/frontend/images/icons/plusicon.png", 1, "whtsapp"], [1, "desc"], [1, "col-6", "mt-3", "column"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "setOpacity", "target", "_blank", 4, "ngIf"], ["target", "_blank", 3, "href"], [1, "whtsapp", 3, "src"], ["class", "desc", 4, "ngIf"], ["target", "_blank", 1, "setOpacity"], ["class", "desc", "class", "setOpacity", 4, "ngIf"], [1, "setOpacity"], [1, "col-6", "mt-3", "column", 3, "click"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", "src", "https://poplme.co/templates/assets/frontend/images/icons/plusicon.png", 1, "whtsapp"], [1, "close", 3, "click"], [1, "fa", "fa-times-circle"], ["cdkDrag", "", 1, "whtsapp", 3, "src"], [1, "qrgenerateSection"], [1, "closeqr", 3, "click"], [1, "qr-content", "text-center"], [1, "btn", "btn-primary", "addWalletbtn", 3, "click"], [1, "fa", "fa-download"], [1, "scan-taxt"], ["alt", "qrimage", "src", "https://api.qrserver.com/v1/create-qr-code/?size=110x110&color=00aced&data=https://poplme.com/?link=https%3A%2F%2Fpoplme%2Eco%2Fshani/q"], ["name", "hiddenIframe", "id", "hiddenIframe", 2, "display", "none"], [1, "bottom", "text-center"], [1, "d-flex", "flex-row", "bd-highlight", "justify-content-center", "buttonSection", "pt-4", "ng-star-inserted"], [1, "btn", "directButton", "green", 3, "click"], [1, "btn", "directButton", "red", 3, "click"], [1, "bottom-text", "text-secondary", "pt-2"], [1, "Links", "pt-5"], [1, "close-button", 3, "click"], [1, "text-center", "link-text", "text-secondary"], [1, "row", "mt-5"], ["class", "col-3 text-center mt-3 ", 4, "ngFor", "ngForOf"], [1, "col-3", "text-center", "mt-3"], [1, "links-button"], [1, "extra-img", 3, "ngClass", "src"], [1, "caption"], [1, "links-button", 3, "click"], [1, "last", "add-social"], [1, "text-center", "text-secondary", "user-title", "my-3"], [1, "input-group"], [1, "input-group-addon-new"], [1, "inner-img", 3, "src"], ["type", "text", 1, "link-input", "form-control", "form-control-new", "mb-3", "lb-none", 3, "ngModel", "placeholder", "ngModelChange"], ["searchInput", ""], [1, "fa", "fa-times-circle", "closeBtn", 3, "click"], [1, "link-caption"], [1, "btn", "btn-success", "last-btn", 3, "click"], [1, "fa", "fa-check"]],
      template: function UserHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tap here to download to new Tap in App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_a_click_9_listener() {
            return ctx.editProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_li_click_14_listener() {
            return ctx.qrCodeEnable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Taps: 0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_button_click_31_listener() {
            return ctx.directoff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserHomeComponent_Template_button_click_34_listener() {
            return ctx.editLinks();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserHomeComponent_div_37_Template, 3, 2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserHomeComponent_div_38_Template, 7, 1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Patent Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "TapIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Help Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UserHomeComponent_div_52_Template, 19, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UserHomeComponent_div_53_Template, 11, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, UserHomeComponent_div_54_Template, 8, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, UserHomeComponent_div_55_Template, 18, 5, "div", 36);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c2, ctx.seen, !ctx.seen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.caption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c2, ctx.toggle, !ctx.toggle));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notDraggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Draggable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pop);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".btn-top[_ngcontent-%COMP%] {\n  background-color: black;\n  font-weight: 500;\n  color: white;\n  width: 100%;\n  border-radius: 0 !important;\n  position: fixed;\n  z-index: 9999;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n\n.new-link-row[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.column-ten[_ngcontent-%COMP%]{\n  padding-left: 0px !important;\n  padding-top: 5px;\n}\n\n.link-caption[_ngcontent-%COMP%]{\n  font-size: 15px;\n  color: grey;\n  margin-top: 10px;\n}\n\n.last-btn[_ngcontent-%COMP%]{\n  width: 100%;\n  margin-top: 20px;\n}\n\n.inner-row[_ngcontent-%COMP%]{\n  background-color: #e9e9e9;\n  border-radius: 10px;\n}\n\n.cross[_ngcontent-%COMP%]{\n  position: absolute;\n  right:15px;\n  font-size: 20px;\n}\n\n.user-title[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n\n.inner-img[_ngcontent-%COMP%]{\n  width: 30px;\n  height: 30px;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  border: 1px solid black;\n}\n\n.link-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background-color: #e9e9e9;\n}\n\n.link-input[_ngcontent-%COMP%]:focus{\n  outline:none !important;\n}\n\n.last[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  background-color: white;\n  position: fixed;\n  bottom: 0;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n\n.whtsapp[_ngcontent-%COMP%] {\n  width: 82%;\n}\n\n.close-button[_ngcontent-%COMP%]{\n    color: #00aced !important;\n    top: 7px;\n    right:20px;\n    font-size: 30px;\n    position: absolute;\n}\n\n.opacity[_ngcontent-%COMP%]{\n  opacity: 0.1;\n}\n\n.links-button[_ngcontent-%COMP%]{\n    border: none;\n    background: white;\n    width: 100%;\n}\n\n.links-button[_ngcontent-%COMP%]:focus{\n  box-shadow: none !important;\n  outline:none !important;\n  border:none !important;\n}\n\n.green[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4px;\n    background-color: #00aced;\n    border-color: #00aced;\n    font-size: 18px;\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\n    font-weight: 400;\n    overflow: hidden;\n    margin-left: 8px;\n    margin-right: 15px;\n    color: white;\n}\n\n.red[_ngcontent-%COMP%] {\n    color: white;\n    background-color: #28a745;\n    width: 100%;\n    padding: 4px;\n    font-size: 18px;\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\n    font-weight: 400;\n    overflow: hidden;\n    margin-left: 8px;\n    margin-right: 15px;\n}\n\n.extra-img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.btn-1[_ngcontent-%COMP%]{\n    width: 250px;\n}\n\n.link-text[_ngcontent-%COMP%]{\n    font-size: 30px;\n    font-weight: 400;\n}\n\n.Links[_ngcontent-%COMP%]{\n    position: fixed;\n    max-height: 500px;\n    overflow: scroll;\n    width: 100%;\n    bottom: 0;\n    background-color: white;\n    z-index: 9999;\n}\n\n.bottom-text[_ngcontent-%COMP%]{\n    font-size: 22px;\n    font-weight: 400;\n}\n\n.popl[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #000000;\n  color: white;\n  font-weight: 550;\n  text-align: center;\n  border: none;\n  border-radius: 0;\n  float: left;\n}\n\n.column[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.column[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  background-color: #fff;\n  z-index: 9999;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 34px;\n}\n\ndesc[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.headerPanel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  float: left;\n  padding: 10px 0;\n  border-bottom: 1px solid #DADADA;\n}\n\n.image-col[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.rippllogo[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 1px\n}\n\n.EditProfile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: black;\n}\n\n.justify-space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.mainprofileSection[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n}\n\n.profileSection[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n}\n\n.profileImage[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #818181;\n}\n\n.bio[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 3px;\n  text-align: center\n}\n\n.prfileContant[_ngcontent-%COMP%] {\n  color: #000;\n  width: 100%;\n  font-family: proxima-nova, Arial, Helvetica, sans-serif;\n  font-weight: 700;\n}\n\n.buttonSection[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px;\n  background-color: #00aced;\n  border-color: #00aced;\n  font-size: 18px;\n  font-family: proxima-nova, Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  overflow: hidden;\n  margin-left: 8px;\n  margin-right: 15px;\n}\n\nbutton.btn.btn-primary.directButton[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0 15px;\n}\n\n.directButton[_ngcontent-%COMP%]{\n   \n}\n\n.prfileContant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px\n}\n\n.prfileContant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.iconImage[_ngcontent-%COMP%] {\n  width: 40%;\n  display: inline-block;\n  padding: 10px;\n  margin: 12px;\n  margin-bottom: -10px;\n  position: relative;\n}\n\n.iconImage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000000\n}\n\n.iconImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%\n}\n\n.mainIcone[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 1px;\n  overflow: hidden;\n}\n\n.PoweredSection[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 50px;\n}\n\n.PoweredBy[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  width: 100%;\n  text-align: center;\n  color: #00aced;\n  font-size: 18px;\n}\n\n.PoweredSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 32%;\n}\n\n.PoweredBy.helpSection[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  font-size: 22px;\n}\n\n\n\n.qrgenerateSection[_ngcontent-%COMP%] {\n    height: 420px;\n    width: 100%;\n    z-index: 999999999999;\n    background-color: white;\n    overflow-x: hidden;\n    transition: 0.5s;\n    position: fixed;\n    bottom: 0;\n}\n\n.qrgenerateSection[_ngcontent-%COMP%]   .closeqr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 1px;\n    right: 10px;\n    font-size: 30px;\n    color: #00aced;\n}\n\n.qr-content[_ngcontent-%COMP%]   .addWalletbtn[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    background-color: #00aced;\n    border-color: #00aced;\n    font-size: 22px;\n    color: #ffffff;\n    margin-top: 65px;\n    margin-bottom: 0px;\n    padding: 3px;\n}\n\n.qrgenerateSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    font-size: 36px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n\n.qr-content[_ngcontent-%COMP%]   .scan-taxt[_ngcontent-%COMP%]{\n    color: #818181;\n    font-size: 18px ;\n    padding-top: 20px;\n}\n\n.qr-content[_ngcontent-%COMP%]   .scan-taxt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    padding: 0px;\n    display: inline-block;\n    color: #00aced;\n    font-size: 18px;}\n\n.disabled[_ngcontent-%COMP%]\n   {\n    cursor: not-allowed;\n       \n    }\n\n.setOpacity[_ngcontent-%COMP%] {\n    opacity: 0.1;\n   }\n\n.setOpacity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      cursor: no-drop;\n    }\n\n.setOpacity[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      cursor: no-drop;\n    }\n\n.disabled[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      -webkit-filter: blur(5px);\n      -moz-filter: blur(5px);\n      -o-filter: blur(5px);\n      -ms-filter: blur(5px);\n      filter: blur(5px);\n      background: #dddddd;\n      cursor: not-allowed;\n      z-index: 1;\n    }\n\n.add-social[_ngcontent-%COMP%]   .input-group-addon-new[_ngcontent-%COMP%] {\n      line-height: 22px !important;\n    padding: 5px !important;\n    width: 20px !important;\n    height: 42px !important;\n    background: #e9e9e9 !important;\n    border: 0 !important;\n    width: 55px !important;\n    border-radius: 10px;\n    margin-right: -10px;\n    z-index: 999;\n  }\n\n.add-social[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    width: 100%;\n}\n\n.add-social[_ngcontent-%COMP%]   .input-group-addon-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    margin-left: 1px;\n}\n\n.add-social[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 2;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0;\n}\n\n.add-social[_ngcontent-%COMP%]   .form-control-new[_ngcontent-%COMP%]:visited, .form-control-new[_ngcontent-%COMP%]:hover, .form-control-new[_ngcontent-%COMP%]:active, .form-control-new[_ngcontent-%COMP%] {\n    background: #e9e9e9;\n    padding: 12px 30px;\n    border-radius: 10px !important;\n    height: 42px;\n    border: 0;\n    margin-left: -7px;\n    \n}\n\n.add-social[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%]:hover, .closeBtn[_ngcontent-%COMP%]:active, .closeBtn[_ngcontent-%COMP%] {\n  color: #A7A9AB;\n  font-size: 24px;\n  position: absolute;\n  right: 12px;\n  top: 9px;\n  cursor: pointer;\n  z-index: 9;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n\n@media only screen and (max-width: 992px) {\n  .user-title[_ngcontent-%COMP%]{font-size: 22px;}\n }\n\n@media only screen and (max-width: 500px) {\n  .user-title[_ngcontent-%COMP%]{font-size: 18px;}\n  .Links[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {font-size: 10px; word-break: break-all;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHVEQUF1RDtJQUN2RCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsdURBQXVEO0lBQ3ZELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx1REFBdUQ7RUFDdkQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix1REFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7O0FBRUE7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLFlBQVk7O0FBRVo7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWUsQ0FBQzs7QUFFaEI7O0lBRUEsbUJBQW1COztJQUVuQjs7QUFFQTtJQUNBLFlBQVk7R0FDYjs7QUFFQztNQUNFLGVBQWU7SUFDakI7O0FBRUE7TUFDRSxlQUFlO0lBQ2pCOztBQUVBO01BQ0UseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixvQkFBb0I7TUFDcEIscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLFVBQVU7SUFDWjs7QUFDQTtNQUNFLDRCQUE0QjtJQUM5Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGtCQUFrQjtJQUVsQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUVWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFNBQVM7SUFDVCxpQkFBaUI7O0FBRXJCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFFVixjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVksZUFBZSxDQUFDO0NBQzdCOztBQUNBO0VBQ0MsWUFBWSxlQUFlLENBQUM7RUFDNUIsaUJBQWlCLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQztBQUMxRCIsImZpbGUiOiJzcmMvYXBwL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9nbyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5uZXctbGluay1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbHVtbi10ZW57XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5saW5rLWNhcHRpb257XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sYXN0LWJ0bntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbm5lci1yb3d7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jcm9zc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDoxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi51c2VyLXRpdGxle1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5pbm5lci1pbWd7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmxpbmstaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xufVxuXG4ubGluay1pbnB1dDpmb2N1c3tcbiAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sYXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cblxuLmltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi53aHRzYXBwIHtcbiAgd2lkdGg6IDgyJTtcbn1cbi5jbG9zZS1idXR0b257XG4gICAgY29sb3I6ICMwMGFjZWQgIWltcG9ydGFudDtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDoyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ub3BhY2l0eXtcbiAgb3BhY2l0eTogMC4xO1xufVxuLmxpbmtzLWJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubGlua3MtYnV0dG9uOmZvY3Vze1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xufVxuLmdyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICBib3JkZXItY29sb3I6ICMwMGFjZWQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5leHRyYS1pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLTF7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubGluay10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLkxpbmtze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuLmJvdHRvbS10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLnBvcGwge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTUwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb2x1bW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2x1bW46aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvdHRvbSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzRweDtcbn1cblxuZGVzYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGVhZGVyUGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQURBREE7XG59XG5cbi5pbWFnZS1jb2wge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJpcHBsbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMXB4XG59XG5cbi5FZGl0UHJvZmlsZSBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5qdXN0aWZ5LXNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYWlucHJvZmlsZVNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wcm9maWxlU2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZmlsZUltYWdlIGkge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBjb2xvcjogIzgxODE4MTtcbn1cblxuLmJpbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLnByZmlsZUNvbnRhbnQge1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idXR0b25TZWN0aW9uIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkO1xuICBib3JkZXItY29sb3I6ICMwMGFjZWQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5LmRpcmVjdEJ1dHRvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuLmRpcmVjdEJ1dHRvbntcbiAgIFxufVxuXG4ucHJmaWxlQ29udGFudCBoMyB7XG4gIGZvbnQtc2l6ZTogMzBweFxufVxuXG4ucHJmaWxlQ29udGFudCBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmljb25JbWFnZSB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbkltYWdlIGEge1xuICBjb2xvcjogIzAwMDAwMFxufVxuXG4uaWNvbkltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCVcbn1cblxuLm1haW5JY29uZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLlBvd2VyZWRTZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLlBvd2VyZWRCeSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwYWNlZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uUG93ZXJlZFNlY3Rpb24gaHIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAzMiU7XG59XG5cbi5Qb3dlcmVkQnkuaGVscFNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLypRciBjb2RlICAqL1xuXG4ucXJnZW5lcmF0ZVNlY3Rpb24ge1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG59XG4ucXJnZW5lcmF0ZVNlY3Rpb24gLmNsb3NlcXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFweDtcbiAgICByaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMGFjZWQ7XG59XG4ucXItY29udGVudCAuYWRkV2FsbGV0YnRuIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkO1xuICAgIGJvcmRlci1jb2xvcjogIzAwYWNlZDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogM3B4O1xufVxuLnFyZ2VuZXJhdGVTZWN0aW9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5xci1jb250ZW50IC5zY2FuLXRheHR7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZm9udC1zaXplOiAxOHB4IDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5xci1jb250ZW50IC5zY2FuLXRheHQgYXtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjMDBhY2VkO1xuICAgIGZvbnQtc2l6ZTogMThweDt9XG5cbiAgICAuZGlzYWJsZWRcbiAgIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgIFxuICAgIH1cblxuICAgIC5zZXRPcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICB9XG5cbiAgICAuc2V0T3BhY2l0eSBidXR0b24ge1xuICAgICAgY3Vyc29yOiBuby1kcm9wO1xuICAgIH1cblxuICAgIC5zZXRPcGFjaXR5IGltZyB7XG4gICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgfVxuXG4gICAgLmRpc2FibGVkIGltZyB7XG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAgIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICAgICAgZmlsdGVyOiBibHVyKDVweCk7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIC5hZGQtc29jaWFsIC5pbnB1dC1ncm91cC1hZGRvbi1uZXcge1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTkgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmFkZC1zb2NpYWwgLmlucHV0LWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1zb2NpYWwgLmlucHV0LWdyb3VwLWFkZG9uLW5ldyBpbWcge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xufVxuLmFkZC1zb2NpYWwgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB3aWR0aDogMSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hZGQtc29jaWFsIC5mb3JtLWNvbnRyb2wtbmV3OnZpc2l0ZWQsIC5mb3JtLWNvbnRyb2wtbmV3OmhvdmVyLCAuZm9ybS1jb250cm9sLW5ldzphY3RpdmUsIC5mb3JtLWNvbnRyb2wtbmV3IHtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBhZGRpbmc6IDEycHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICBcbn1cbi5hZGQtc29jaWFsIC5jbG9zZUJ0bjpob3ZlciwgLmNsb3NlQnRuOmFjdGl2ZSwgLmNsb3NlQnRuIHtcbiAgY29sb3I6ICNBN0E5QUI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiA5cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogOTtcbn1cbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnVzZXItdGl0bGV7Zm9udC1zaXplOiAyMnB4O31cbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudXNlci10aXRsZXtmb250LXNpemU6IDE4cHg7fVxuICAuTGlua3MgLmNhcHRpb24ge2ZvbnQtc2l6ZTogMTBweDsgd29yZC1icmVhazogYnJlYWstYWxsO31cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-home',
          templateUrl: './user-home.component.html',
          styleUrls: ['./user-home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, {
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(router, activatedRoute, authService, toast) {
        _classCallCheck(this, UserComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.toast = toast;
        this.dataSource = [];
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.username = this.activatedRoute.snapshot.url[1].path;
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this28 = this;

          this.authService.setLoader(true);
          this.authService.getData('find_user/' + this.username).subscribe(function (response) {
            _this28.authService.setLoader(false);

            var data = [];

            if (response.data) {
              console.log(response.data);

              for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].link !== '') {
                  if (response.data[i].title === 'applemusic') {
                    response.data[i].SocialLink = 'https://itunes.apple.com/profile/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'instagram') {
                    response.data[i].SocialLink = 'https://www.instagram.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'whatsapp') {
                    response.data[i].SocialLink = 'https://api.whatsapp.com/send?phone=' + response.data[i].link;
                  }

                  if (response.data[i].title === 'snapchat') {
                    response.data[i].SocialLink = '';
                  }

                  if (response.data[i].title === 'facebook') {
                    response.data[i].SocialLink = 'https://www.facebook.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'mail') {
                    response.data[i].SocialLink = 'mailto:' + response.data[i].link;
                  }

                  if (response.data[i].title === 'twitter') {
                    response.data[i].SocialLink = 'https://twitter.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'linkedin') {
                    response.data[i].SocialLink = 'https://ca.linkedin.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'imessage') {
                    response.data[i].SocialLink = '';
                  }

                  if (response.data[i].title === 'customLink') {
                    response.data[i].SocialLink = response.data[i].link;
                  }

                  if (response.data[i].title === 'youtube') {
                    response.data[i].SocialLink = 'https://www.youtube.com/c/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'tiktok') {
                    response.data[i].SocialLink = 'http://vt.tiktok.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'soundcloud') {
                    response.data[i].SocialLink = 'https://soundcloud.com/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'spotify') {
                    response.data[i].SocialLink = 'https://open.spotify.com/user/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'venmo') {
                    response.data[i].SocialLink = '';
                  }

                  if (response.data[i].title === 'cashapp') {
                    response.data[i].SocialLink = 'https://cash.app/' + response.data[i].link;
                  }

                  if (response.data[i].title === 'safari') {
                    response.data[i].SocialLink = '';
                  }

                  if (response.data[i].title === 'twitch') {
                    response.data[i].SocialLink = 'https://www.twitch.tv/' + response.data[i].link;
                  }

                  data.push(response.data[i]);
                }

                response.data[i].disableLink = false;
              }

              _this28.dataSource = data;
            }
          }, function (error) {
            _this28.authService.setLoader(false);

            _this28.toast.error(error);
          });
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 60,
      vars: 0,
      consts: [[1, "top"], [1, "tapin-header", "btn"], [1, "headerPanel", "mb-3"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "nav"], [1, "top-headear", "text-left", "align-self-center"], [1, "taxt-black", "btn"], [1, "top-headear", "text-center", "align-self-center"], ["alt", "Tap In logo", "src", "assets/logo/Attachment_1588757267.png", 1, "rippllogo"], [1, "top-headear", "text-right", "align-self-center"], ["href", "#", 1, "taxt-black", "btn"], [1, "profileSection"], [1, "profileImage"], [1, "fa", "fa-user-circle-o"], [1, "bio"], [1, "prfileContant"], [1, "d-flex", "flex-row", "bd-highlight", "justify-content-center", "buttonSection", "mt-3"], [1, "btn", "btn-primary"], [1, "fa", "fa-download"], [1, "row", "mt-3", "text-center"], [1, "col-6", "mt-3", "column", "ng-star-inserted"], ["src", "./assets/social/whatsapp.png", 1, "whtsapp"], [1, "desc"], ["src", "./assets/social/facebookicon.png", 1, "whtsapp"], ["_ngcontent-anx-c64", "", 1, "desc"], [1, "footerMain"], [1, "PoweredSection"], [1, "PoweredBy"], [1, "fa", "fa-check-circle"], ["href", "#"], [1, "hr"], ["href", "#", 1, "PoweredBy", "helpSection"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tap here to download to new Tap in App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "pops: 0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Shani");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I am computer engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Add to Contacts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "whatsapp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Patent Pending ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "TapIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Help Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".btn-top[_ngcontent-%COMP%] {\n    background-color: black;\n    font-weight: 500;\n    color: white;\n    width: 100%;\n    border-radius: 0 !important;\n    position: fixed;\n    z-index: 9999;\n  }\n  .taxt-black[_ngcontent-%COMP%]{color: #000;}\n  .logo[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 60px;\n  }\n  .new-link-row[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n  .column-ten[_ngcontent-%COMP%]{\n    padding-left: 0px !important;\n    padding-top: 5px;\n  }\n  .link-caption[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: grey;\n    margin-top: 10px;\n  }\n  .last-btn[_ngcontent-%COMP%]{\n    width: 100%;\n    margin-top: 20px;\n  }\n  .inner-row[_ngcontent-%COMP%]{\n    background-color: #e9e9e9;\n    border-radius: 10px;\n  }\n  .cross[_ngcontent-%COMP%]{\n    position: absolute;\n    right:15px;\n    font-size: 20px;\n  }\n  .user-title[_ngcontent-%COMP%]{\n    font-size: 30px;\n  }\n  .inner-img[_ngcontent-%COMP%]{\n    width: 30px;\n    height: 30px;\n  }\n  .header[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    border: 1px solid black;\n  }\n  .link-input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: none;\n    background-color: #e9e9e9;\n  }\n  .link-input[_ngcontent-%COMP%]:focus{\n    outline:none !important;\n  }\n  .last[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 250px;\n    background-color: white;\n    position: fixed;\n    bottom: 0;\n  }\n  .img[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 60px;\n  }\n  .profileImage[_ngcontent-%COMP%] {\n    padding-right: 30px;\n}\n  .whtsapp[_ngcontent-%COMP%] {\n    width: 82%;\n  }\n  .close-button[_ngcontent-%COMP%]{\n      color: #00aced !important;\n      top: 7px;\n      right:20px;\n      font-size: 30px;\n      position: absolute;\n  }\n  .opacity[_ngcontent-%COMP%]{\n    opacity: 0.1;\n  }\n  .links-button[_ngcontent-%COMP%]{\n      border: none;\n      background: white;\n      width: 100%;\n  }\n  .links-button[_ngcontent-%COMP%]:focus{\n    box-shadow: none !important;\n    outline:none !important;\n    border:none !important;\n  }\n  .green[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 4px;\n      background-color: #00aced;\n      border-color: #00aced;\n      font-size: 18px;\n      font-family: proxima-nova, Arial, Helvetica, sans-serif;\n      font-weight: 400;\n      overflow: hidden;\n      margin-left: 8px;\n      margin-right: 15px;\n      color: white;\n  }\n  .red[_ngcontent-%COMP%] {\n      color: white;\n      background-color: #28a745;\n      width: 100%;\n      padding: 4px;\n      font-size: 18px;\n      font-family: proxima-nova, Arial, Helvetica, sans-serif;\n      font-weight: 400;\n      overflow: hidden;\n      margin-left: 8px;\n      margin-right: 15px;\n  }\n  .extra-img[_ngcontent-%COMP%]{\n      width: 100%;\n  }\n  .btn-1[_ngcontent-%COMP%]{\n      width: 250px;\n  }\n  .link-text[_ngcontent-%COMP%]{\n      font-size: 30px;\n      font-weight: 400;\n  }\n  .Links[_ngcontent-%COMP%]{\n      position: fixed;\n      max-height: 500px;\n      overflow: scroll;\n      width: 100%;\n      bottom: 0;\n      background-color: white;\n      z-index: 9999;\n  }\n  .bottom-text[_ngcontent-%COMP%]{\n      font-size: 22px;\n      font-weight: 400;\n  }\n  .popl[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: #000000;\n    color: white;\n    font-weight: 550;\n    text-align: center;\n    border: none;\n    border-radius: 0;\n    float: left;\n  }\n  .column[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .column[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n  }\n  .bottom[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    background-color: #fff;\n    z-index: 9999;\n  }\n  .close[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 34px;\n  }\n  desc[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .headerPanel[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 10px 0;\n    border-bottom: 1px solid #DADADA;\n  }\n  .image-col[_ngcontent-%COMP%] {\n    float: left;\n  }\n  .rippllogo[_ngcontent-%COMP%] {\n    height: 40px;\n    padding: 1px\n  }\n  .EditProfile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: black;\n  }\n  .justify-space-between[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .mainprofileSection[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n  }\n  .profileSection[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    vertical-align: middle;\n    align-items: center;\n  }\n  .profileImage[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 100px;\n    color: #818181;\n  }\n  .bio[_ngcontent-%COMP%] {\n    display: block;\n    padding-top: 3px;\n    text-align: center\n  }\n  .prfileContant[_ngcontent-%COMP%] {\n    color: #000;\n    width: 100%;\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\n    font-weight: 700;\n  }\n  .buttonSection[_ngcontent-%COMP%]   button.btn.btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 4px;\n    background-color: #00aced;\n    border-color: #00aced;\n    font-size: 18px;\n    font-family: proxima-nova, Arial, Helvetica, sans-serif;\n    font-weight: 400;\n    overflow: hidden;\n  }\n  button.btn.btn-primary.directButton[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin: 0 15px;\n  }\n  .prfileContant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px\n  }\n  .prfileContant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 400;\n  }\n  .iconImage[_ngcontent-%COMP%] {\n    width: 40%;\n    display: inline-block;\n    padding: 10px;\n    margin: 12px;\n    margin-bottom: -10px;\n    position: relative;\n  }\n  .iconImage[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #000000\n  }\n  .iconImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%\n  }\n  .mainIcone[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 1px;\n    overflow: hidden;\n  }\n  .PoweredSection[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    margin-top: 50px;\n  }\n  .PoweredBy[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    width: 100%;\n    text-align: center;\n    color: #00aced;\n    font-size: 18px;\n  }\n  .PoweredSection[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 32%;\n  }\n  .PoweredBy.helpSection[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    font-size: 22px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQSxZQUFZLFdBQVcsQ0FBQztFQUN4QjtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFFQTtJQUNFLGVBQWU7RUFDakI7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztFQUNYO0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxtQkFBbUI7QUFDdkI7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO01BQ0kseUJBQXlCO01BQ3pCLFFBQVE7TUFDUixVQUFVO01BQ1YsZUFBZTtNQUNmLGtCQUFrQjtFQUN0QjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7TUFDSSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLFdBQVc7RUFDZjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7RUFDQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsdURBQXVEO01BQ3ZELGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixZQUFZO0VBQ2hCO0VBRUE7TUFDSSxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLHVEQUF1RDtNQUN2RCxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixrQkFBa0I7RUFDdEI7RUFDQTtNQUNJLFdBQVc7RUFDZjtFQUNBO01BQ0ksWUFBWTtFQUNoQjtFQUVBO01BQ0ksZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjtFQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLFNBQVM7TUFDVCx1QkFBdUI7TUFDdkIsYUFBYTtFQUNqQjtFQUNBO01BQ0ksZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjtFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0NBQWdDO0VBQ2xDO0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFFQTtJQUNFLFlBQVk7SUFDWjtFQUNGO0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7RUFDRjtFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCx1REFBdUQ7SUFDdkQsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHVEQUF1RDtJQUN2RCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjtFQUVBO0lBQ0U7RUFDRjtFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0U7RUFDRjtFQUVBO0lBQ0UsV0FBVztJQUNYO0VBQ0Y7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0VBQ1o7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi10b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICAudGF4dC1ibGFja3tjb2xvcjogIzAwMDt9XG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbiAgXG4gIC5uZXctbGluay1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5jb2x1bW4tdGVue1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICBcbiAgLmxpbmstY2FwdGlvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBcbiAgLmxhc3QtYnRue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5pbm5lci1yb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAuY3Jvc3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OjE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIFxuICAudXNlci10aXRsZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgXG4gIC5pbm5lci1pbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgXG4gIC5saW5rLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgfVxuICBcbiAgLmxpbmstaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5sYXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgXG4gIC5pbWcge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgfVxuICAucHJvZmlsZUltYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuICAud2h0c2FwcCB7XG4gICAgd2lkdGg6IDgyJTtcbiAgfVxuICAuY2xvc2UtYnV0dG9ue1xuICAgICAgY29sb3I6ICMwMGFjZWQgIWltcG9ydGFudDtcbiAgICAgIHRvcDogN3B4O1xuICAgICAgcmlnaHQ6MjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAub3BhY2l0eXtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgLmxpbmtzLWJ1dHRvbntcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxpbmtzLWJ1dHRvbjpmb2N1c3tcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZ3JlZW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2VkO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDBhY2VkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLnJlZCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LWZhbWlseTogcHJveGltYS1ub3ZhLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5leHRyYS1pbWd7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYnRuLTF7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgXG4gIC5saW5rLXRleHR7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5MaW5rc3tcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIC5ib3R0b20tdGV4dHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLnBvcGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAuY29sdW1uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5jb2x1bW46aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuYm90dG9tIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIFxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzRweDtcbiAgfVxuICBcbiAgZGVzYyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5oZWFkZXJQYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREFEQURBO1xuICB9XG4gIFxuICAuaW1hZ2UtY29sIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLnJpcHBsbG9nbyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDFweFxuICB9XG4gIFxuICAuRWRpdFByb2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIFxuICAubWFpbnByb2ZpbGVTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLnByb2ZpbGVTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnByb2ZpbGVJbWFnZSBpIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICB9XG4gIFxuICAuYmlvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG4gIFxuICAucHJmaWxlQ29udGFudCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIFxuICAuYnV0dG9uU2VjdGlvbiBidXR0b24uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICBib3JkZXItY29sb3I6ICMwMGFjZWQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5LmRpcmVjdEJ1dHRvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuICBcbiAgLnByZmlsZUNvbnRhbnQgaDMge1xuICAgIGZvbnQtc2l6ZTogMzBweFxuICB9XG4gIFxuICAucHJmaWxlQ29udGFudCBwIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAuaWNvbkltYWdlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pY29uSW1hZ2UgYSB7XG4gICAgY29sb3I6ICMwMDAwMDBcbiAgfVxuICBcbiAgLmljb25JbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJVxuICB9XG4gIFxuICAubWFpbkljb25lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAuUG93ZXJlZFNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIFxuICAuUG93ZXJlZEJ5IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMGFjZWQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuUG93ZXJlZFNlY3Rpb24gaHIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMzIlO1xuICB9XG4gIFxuICAuUG93ZXJlZEJ5LmhlbHBTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/softrefine/Preetam/take-in/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.8562bb88733b1f0ee35c.js.map