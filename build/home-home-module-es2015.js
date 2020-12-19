(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"beranda-cont\">\r\n        <div class=\"header-container\">\r\n            <img class=\"logo-styles\" src=\"../../../assets/svg/angkasapuralogo.svg\" alt=\"React Logo\" />\r\n            <div class=\"user-container\">\r\n                <img class=\"ava-styles\" src=\"../../../assets/svg/ava.svg\" alt=\"React Logo\" />\r\n                <div class=\"profile-container\">\r\n                    <div class=\"fullname\">\r\n                        FACHRI RAMADHAN\r\n                    </div>\r\n                    <div class=\"airlines\">\r\n                        PT GARUDA INDONESIA - CGK\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content-container\">\r\n            <div class=\"promo-container\">\r\n                <div>\r\n                    <img class=\"image-style\" src=\"../../../assets/img/promo.png\" alt=\"React Logo\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"menu-container\">\r\n                <ion-row>\r\n                    <ion-col [routerLink]=\"['/flight/flight-menu']\" size=\"3\">\r\n                        <div class=\"submenu-container\">\r\n                            <img class=\"icon-style\" src=\"../../../assets/svg/flightact-round.svg\" alt=\"React Logo\" />\r\n                            <div class=\"text\">\r\n                                Flight Activity\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col [routerLink]=\"['/billing/billing-menu']\" size=\"3\">\r\n                        <div class=\"submenu-container\">\r\n                            <img class=\"icon-style\" src=\"../../../assets/svg/report-round.svg\" alt=\"React Logo\" />\r\n                            <div class=\"text\">\r\n                                Report\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col [routerLink]=\"['/billing/billing-menu']\" size=\"3\">\r\n                        <div class=\"submenu-container\">\r\n                            <img class=\"icon-style\" src=\"../../../assets/svg/billing-round.svg\" alt=\"React Logo\" />\r\n                            <div class=\"text\">\r\n                                Billing\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n            <div class=\"news-container\">\r\n                <div class=\"text-news\">\r\n                    News\r\n                </div>\r\n\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"6\">\r\n                            <div class=\"news-feed\">\r\n                                <img class=\"image-style\" src=\"../../../assets/img/news.png\" alt=\"React Logo\" />\r\n                                <div class=\"text-style\">\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"6\">\r\n                            <div class=\"news-feed\">\r\n                                <img class=\"image-style\" src=\"../../../assets/img/news.png\" alt=\"React Logo\" />\r\n                                <div class=\"text-style\">\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"6\">\r\n                            <div class=\"news-feed\">\r\n                                <img class=\"image-style\" src=\"../../../assets/img/news.png\" alt=\"React Logo\" />\r\n                                <div class=\"text-style\">\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"6\">\r\n                            <div class=\"news-feed\">\r\n                                <img class=\"image-style\" src=\"../../../assets/img/news.png\" alt=\"React Logo\" />\r\n                                <div class=\"text-style\">\r\n                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\r\n                                </div>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home/home-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/home/home-routing.module.ts ***!
  \**************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        entryComponents: []
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home/home.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/home/home.module.ts ***!
  \******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home/home.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/home/home.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".beranda-cont .header-container {\n  position: absolute;\n  width: 170%;\n  height: 50%;\n  left: -35%;\n  top: -5%;\n  border-radius: 50%;\n  background: #146CAB;\n}\n.beranda-cont .header-container .logo-styles {\n  position: absolute;\n  width: 100%;\n  height: 23%;\n  top: 20%;\n  left: 1%;\n}\n.beranda-cont .header-container .user-container {\n  position: absolute;\n  left: 24%;\n  top: 50%;\n  display: flex;\n  width: 100%;\n}\n.beranda-cont .header-container .user-container .ava-styles {\n  width: 7%;\n}\n.beranda-cont .header-container .user-container .profile-container {\n  margin-left: 15px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.beranda-cont .header-container .user-container .profile-container .fullname {\n  font-size: 3vw;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n.beranda-cont .header-container .user-container .profile-container .airlines {\n  font-size: 3vw;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n.beranda-cont .content-container {\n  margin: 10px;\n  margin-top: 55% !important;\n}\n.beranda-cont .content-container .promo-container {\n  position: relative;\n}\n.beranda-cont .content-container .promo-container .image-style {\n  width: 90%;\n  border-radius: 10%;\n}\n.beranda-cont .content-container .menu-container {\n  margin-top: 40px;\n}\n.beranda-cont .content-container .menu-container .submenu-container {\n  text-align: center;\n}\n.beranda-cont .content-container .menu-container .submenu-container .icon-style {\n  width: 55%;\n}\n.beranda-cont .content-container .menu-container .submenu-container .text {\n  margin-top: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 3vw;\n  align-items: center;\n  text-align: center;\n}\n.beranda-cont .content-container .news-container {\n  margin-top: 10px;\n}\n.beranda-cont .content-container .news-container .text-news {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 5vw;\n  display: flex;\n  align-items: center;\n  margin: 10px;\n  color: #0769B3;\n}\n.beranda-cont .content-container .news-container .news-feed .image-style {\n  width: 100%;\n  border-radius: 10%;\n}\n.beranda-cont .content-container .news-container .news-feed .text-style {\n  padding: 5px 5px;\n  text-align: justify;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 3vw;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBQ0U7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFDSDtBQUNFO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0g7QUFBRztFQUNDLFNBQUE7QUFFSjtBQUFHO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFESTtFQUNDLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFHTDtBQURJO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUdMO0FBRUM7RUFDQyxZQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUNFO0VBQ1Usa0JBQUE7QUFDWjtBQUFZO0VBQ1IsVUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFFWTtFQUNJLGtCQUFBO0FBQWhCO0FBRWdCO0VBQ0ksVUFBQTtBQUFwQjtBQUdnQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRHBCO0FBTUU7RUFDQyxnQkFBQTtBQUpIO0FBS0c7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSEo7QUFPSTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtBQUxMO0FBUUk7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTkwiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVyYW5kYS1jb250IHtcclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR3aWR0aDogMTcwJTtcclxuXHRcdGhlaWdodDogNTAlO1xyXG5cdFx0bGVmdDogLTM1JTtcclxuXHRcdHRvcDogLTUlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogIzE0NkNBQjtcclxuXHRcdC5sb2dvLXN0eWxlcyB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMjMlO1xyXG5cdFx0XHR0b3A6IDIwJTtcclxuXHRcdFx0bGVmdDogMSU7XHJcblx0XHR9XHJcblx0XHQudXNlci1jb250YWluZXIge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDI0JTtcclxuXHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHQuYXZhLXN0eWxlcyB7XHJcblx0XHRcdFx0d2lkdGg6IDclO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9maWxlLWNvbnRhaW5lciB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE1cHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogYXV0bztcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG5cdFx0XHRcdC5mdWxsbmFtZSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDN2dztcclxuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcblx0XHRcdFx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmFpcmxpbmVzIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogM3Z3O1xyXG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuXHRcdFx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQuY29udGVudC1jb250YWluZXIge1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNTUlICFpbXBvcnRhbnQ7XHJcblx0XHQucHJvbW8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAuaW1hZ2Utc3R5bGV7XHJcblx0XHRcdFx0d2lkdGg6IDkwJTtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIC5zdWJtZW51LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuaWNvbi1zdHlsZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Lm5ld3MtY29udGFpbmVye1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0XHQudGV4dC1uZXdze1xyXG5cdFx0XHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRmb250LXNpemU6IDV2dztcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0bWFyZ2luOlx0MTBweDtcclxuXHRcdFx0XHRjb2xvcjogIzA3NjlCMztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Lm5ld3MtZmVlZHtcclxuXHRcdFx0XHQuaW1hZ2Utc3R5bGV7XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwJTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC50ZXh0LXN0eWxle1xyXG5cdFx0XHRcdFx0cGFkZGluZzogNXB4IDVweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblx0XHRcdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAzdnc7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home/home.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/home/home.page.ts ***!
  \****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map