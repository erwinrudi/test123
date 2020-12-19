(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-list/billing-list.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-list/billing-list.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBillingBillingListBillingListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"billing-info\">\r\n        <div class=\"header-container\">\r\n            <ion-toolbar class=\"toolbar-style\">\r\n                <ion-buttons (click)=\"generalService.goBack()\" slot=\"start\">\r\n                    <ion-icon size=\"large\" icon=\"chevron-back\"></ion-icon>\r\n                </ion-buttons>\r\n                <ion-title class=\"header-title\">FLIGHT INFO</ion-title>\r\n            </ion-toolbar>\r\n        </div>\r\n        <div class=\"content-container\">\r\n            <ng-container *ngFor=\"let data of billingList; let i = index\">\r\n                <ion-card [routerLink]=\"['/flight/flight-detail/', data.id]\">\r\n                    <ion-card-content>\r\n                        <ion-grid>\r\n                            <ion-row>\r\n                                <ion-col size=\"7\">\r\n                                    <div class=\"content-flight\">\r\n                                        <span class=\"status-style\"></span>\r\n                                    </div>\r\n                                </ion-col>\r\n                                <ion-col size=\"5\">\r\n                                    <div class=\"content-flight right\">\r\n                                        <span class=\"status-style complete\">Detail</span>\r\n                                    </div>\r\n                                </ion-col>\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-menu/billing-menu.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-menu/billing-menu.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBillingBillingMenuBillingMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"flight-cont\">\r\n        <div class=\"background-header\"></div>\r\n        <div class=\"header-container\">\r\n            <ion-toolbar class=\"toolbar-style\">\r\n                <ion-buttons (click)=\"generalService.goBack()\" slot=\"start\">\r\n                    <ion-icon size=\"large\" icon=\"chevron-back\"></ion-icon>\r\n                </ion-buttons>\r\n                <ion-title class=\"header-title\">BILLING</ion-title>\r\n            </ion-toolbar>\r\n        </div>\r\n        <div class=\"content-container\">\r\n            <ion-card [routerLink]=\"['/billing/billing-search']\">\r\n                <ion-card-content>\r\n                    <div class=\"list-container\">\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <img class=\"logo-style\" src=\"../../../assets/svg/document-round.svg\" alt=\"flight act\" />\r\n                            </ion-col>\r\n                            <ion-col size=\"10\">\r\n                                <div class=\"header-style\">\r\n                                    Estimated Billing\r\n                                </div>\r\n                                <div class=\"title-style\">\r\n                                    Lorem ipsum dolor sit amet, consectetur\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n            <ion-card [routerLink]=\"['/billing/invoice-search']\">\r\n                <ion-card-content>\r\n                    <div class=\"list-container\">\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                <img class=\"logo-style\" src=\"../../../assets/svg/invoice-round.svg\" alt=\"flight act\" />\r\n                            </ion-col>\r\n                            <ion-col size=\"10\">\r\n                                <div class=\"header-style\">\r\n                                    Invoice\r\n                                </div>\r\n                                <div class=\"title-style\">\r\n                                    Lorem ipsum dolor sit amet, consectetur\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </div>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-search/billing-search.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-search/billing-search.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBillingBillingSearchBillingSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"flight-schedule-cont\">\r\n        <div class=\"background-header\"></div>\r\n        <div class=\"header-container\">\r\n            <ion-toolbar class=\"toolbar-style\">\r\n                <ion-buttons (click)=\"generalService.goBack()\" slot=\"start\">\r\n                    <ion-icon size=\"large\" icon=\"chevron-back\"></ion-icon>\r\n                </ion-buttons>\r\n                <ion-title class=\"header-title\">ESTIMATED BILLING</ion-title>\r\n            </ion-toolbar>\r\n        </div>\r\n        <div class=\"content-container\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <form [formGroup]=\"formBilling\" (ngSubmit)=\"onSubmit($event)\" novalidate>\r\n                        <div class=\"datepick-container\">\r\n                            <ion-label class=\"input-label\">Start Date</ion-label>\r\n                            <div class=\"input-date-cont\">\r\n                                <ion-row>\r\n                                    <ion-col size=\"1\">\r\n                                        <ion-icon class=\"icon-datepick\" size=\"small\" icon=\"calendar-sharp\"></ion-icon>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                        <ion-datetime formControlName=\"startDate\" class=\"input-date\"\r\n                                            displayFormat=\"DD-MMMM-YYYY\"></ion-datetime>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"datepick-container\">\r\n                            <ion-label class=\"input-label\">End Date</ion-label>\r\n                            <div class=\"input-date-cont\">\r\n                                <ion-row>\r\n                                    <ion-col size=\"1\">\r\n                                        <ion-icon class=\"icon-datepick\" size=\"small\" icon=\"calendar-sharp\"></ion-icon>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                        <ion-datetime formControlName=\"endDate\" class=\"input-date\"\r\n                                            displayFormat=\"DD-MMMM-YYYY\"></ion-datetime>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"textbox-container\">\r\n                            <ion-label class=\"input-label\">Flight Number</ion-label>\r\n                            <div class=\"input-text-cont\">\r\n                                <ion-input formControlName=\"flightNumber\" class=\"input-text\" placeholder=\"e.g Number\">\r\n                                </ion-input>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"select-container\">\r\n                            <ion-label class=\"input-label\">Status</ion-label>\r\n                            <div class=\"input-select-cont\">\r\n                                <ion-select formControlName=\"status\" interface=\"action-sheet\" class=\"input-select\"\r\n                                    placeholder=\"Select One\">\r\n                                    <ion-select-option *ngFor=\"let statusOp of statusList\" [value]=\"statusOp\">\r\n                                        {{statusOp.text}}</ion-select-option>\r\n                                </ion-select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <ion-button type=\"submit\" style=\"margin-top: 45px;\" expand=\"block\">SEARCH</ion-button>\r\n                    </form>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/invoice-search/invoice-search.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billing/invoice-search/invoice-search.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBillingInvoiceSearchInvoiceSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"flight-schedule-cont\">\r\n        <div class=\"background-header\"></div>\r\n        <div class=\"header-container\">\r\n            <ion-toolbar class=\"toolbar-style\">\r\n                <ion-buttons (click)=\"generalService.goBack()\" slot=\"start\">\r\n                    <ion-icon size=\"large\" icon=\"chevron-back\"></ion-icon>\r\n                </ion-buttons>\r\n                <ion-title class=\"header-title\">INVOICE</ion-title>\r\n            </ion-toolbar>\r\n        </div>\r\n        <div class=\"content-container\">\r\n            <ion-card>\r\n                <ion-card-content>\r\n                    <form [formGroup]=\"formInvoice\" (ngSubmit)=\"onSubmit($event)\" novalidate>\r\n                        <div class=\"datepick-container\">\r\n                            <ion-label class=\"input-label\">Start Date</ion-label>\r\n                            <div class=\"input-date-cont\">\r\n                                <ion-row>\r\n                                    <ion-col size=\"1\">\r\n                                        <ion-icon class=\"icon-datepick\" size=\"small\" icon=\"calendar-sharp\"></ion-icon>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                        <ion-datetime formControlName=\"startDate\" class=\"input-date\"\r\n                                            displayFormat=\"DD-MMMM-YYYY\"></ion-datetime>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"datepick-container\">\r\n                            <ion-label class=\"input-label\">End Date</ion-label>\r\n                            <div class=\"input-date-cont\">\r\n                                <ion-row>\r\n                                    <ion-col size=\"1\">\r\n                                        <ion-icon class=\"icon-datepick\" size=\"small\" icon=\"calendar-sharp\"></ion-icon>\r\n                                    </ion-col>\r\n                                    <ion-col>\r\n                                        <ion-datetime formControlName=\"endDate\" class=\"input-date\"\r\n                                            displayFormat=\"DD-MMMM-YYYY\"></ion-datetime>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"textbox-container\">\r\n                            <ion-label class=\"input-label\">Flight Number</ion-label>\r\n                            <div class=\"input-text-cont\">\r\n                                <ion-input formControlName=\"flightNumber\" class=\"input-text\" placeholder=\"e.g Number\">\r\n                                </ion-input>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <ion-button type=\"submit\" style=\"margin-top: 45px;\" expand=\"block\">SEARCH</ion-button>\r\n                    </form>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/billing/billing-list/billing-list.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/billing/billing-list/billing-list.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBillingBillingListBillingListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".billing-info .header-container {\n  position: relative;\n}\n.billing-info .content-container {\n  position: relative;\n  margin-top: 25px;\n}\n.billing-info .content-container .content-flight {\n  height: 100%;\n  display: flex;\n  width: 100%;\n}\n.billing-info .content-container .content-flight.right {\n  justify-content: flex-end;\n}\n.billing-info .content-container .logo-style {\n  width: 9vw;\n}\n.billing-info .content-container .title-style-1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 3vw;\n  align-items: center;\n  color: #000000;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.billing-info .content-container .title-style-1.detail {\n  font-size: 3.5vw;\n  color: #146CAB;\n}\n.billing-info .content-container .status-style {\n  font-size: 3vw;\n  text-align: right;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.billing-info .content-container .status-style.complete {\n  color: #27AE60;\n}\n.billing-info .content-container .status-style.destination {\n  color: #146CAB;\n}\n.billing-info .content-container .status-style.int {\n  color: #898989;\n  margin: 0px 2px;\n}\n.billing-info .content-container .arrow-style {\n  font-size: 3vw;\n  margin: 0px 2px;\n  margin-top: 0.5vw;\n}\n.billing-info .toolbar-style {\n  --background: #146CAB;\n  --color: white;\n}\n.header-container {\n  position: relative;\n}\n.header-title {\n  text-align: center;\n  margin-left: -38px;\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9iaWxsaW5nLWxpc3QvYmlsbGluZy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQztFQUNDLGtCQUFBO0FBWEY7QUFhQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYRjtBQVlFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBVkg7QUFXRztFQUNDLHlCQUFBO0FBVEo7QUFZRTtFQUNDLFVBQUE7QUFWSDtBQVlFO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVkg7QUFXRztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQVRKO0FBWUU7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVkg7QUFXRztFQUNDLGNBQUE7QUFUSjtBQVdHO0VBQ0MsY0FBQTtBQVRKO0FBV0c7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQVRKO0FBWUU7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVkg7QUFhQztFQUNDLHFCQUFBO0VBQ0EsY0FBQTtBQVhGO0FBZUE7RUFDSSxrQkFBQTtBQVpKO0FBZUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFaSiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbmcvYmlsbGluZy1saXN0L2JpbGxpbmctbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJpbGxpbmctaW5mbyB7XHJcblx0Ly8gLmJhY2tncm91bmQtaGVhZGVyIHtcclxuXHQvLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG5cdC8vICAgICB3aWR0aDogMTUwJTtcclxuXHQvLyAgICAgaGVpZ2h0OiA1MCU7XHJcblx0Ly8gICAgIGxlZnQ6IC0yNSU7XHJcblx0Ly8gICAgIHRvcDogLTIwJTtcclxuXHQvLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdC8vICAgICBiYWNrZ3JvdW5kOiAjMTQ2Q0FCO1xyXG5cdC8vICAgICB6LWluZGV4OiAwO1xyXG5cdC8vIH1cclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jb250ZW50LWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tdG9wOiAyNXB4O1xyXG5cdFx0LmNvbnRlbnQtZmxpZ2h0IHtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ji5yaWdodCB7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmxvZ28tc3R5bGUge1xyXG5cdFx0XHR3aWR0aDogOXZ3O1xyXG5cdFx0fVxyXG5cdFx0LnRpdGxlLXN0eWxlLTEge1xyXG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRmb250LXNpemU6IDN2dztcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRcdG1hcmdpbi10b3A6IGF1dG87XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IGF1dG87XHJcblx0XHRcdCYuZGV0YWlsIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDMuNXZ3O1xyXG5cdFx0XHRcdGNvbG9yOiAjMTQ2Q0FCO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuc3RhdHVzLXN0eWxlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAzdnc7XHJcblx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiBhdXRvO1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG5cdFx0XHQmLmNvbXBsZXRlIHtcclxuXHRcdFx0XHRjb2xvcjogIzI3QUU2MDtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLmRlc3RpbmF0aW9uIHtcclxuXHRcdFx0XHRjb2xvcjogIzE0NkNBQjtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLmludCB7XHJcblx0XHRcdFx0Y29sb3I6ICM4OTg5ODk7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHggMnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuYXJyb3ctc3R5bGUge1xyXG5cdFx0XHRmb250LXNpemU6IDN2dztcclxuXHRcdFx0bWFyZ2luOiAwcHggMnB4O1xyXG5cdFx0XHRtYXJnaW4tdG9wOiAwLjV2dztcclxuXHRcdH1cclxuXHR9XHJcblx0LnRvb2xiYXItc3R5bGUge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjMTQ2Q0FCO1xyXG5cdFx0LS1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/billing/billing-list/billing-list.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/billing/billing-list/billing-list.page.ts ***!
      \***********************************************************/

    /*! exports provided: BillingListPage */

    /***/
    function srcAppBillingBillingListBillingListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillingListPage", function () {
        return BillingListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../general.service */
      "./src/app/general.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var BillingListPage = /*#__PURE__*/function () {
        function BillingListPage(generalService, activatedRoute, location, router) {
          _classCallCheck(this, BillingListPage);

          this.generalService = generalService;
          this.activatedRoute = activatedRoute;
          this.location = location;
          this.router = router;
          this.props = [{
            field: 'startDate',
            value: ''
          }, {
            field: 'endDate',
            value: ''
          }, {
            field: 'flightNumber',
            value: ''
          }, {
            field: 'status',
            value: ''
          }];
          this.search = {
            startDate: '',
            endDate: '',
            flightNumber: '',
            status: ''
          };
          this.billingList = [{
            id: 0,
            status: "Complete",
            arrival: {
              flightNo: 'GA 001',
              flightType: 'Int',
              from: 'CGK',
              to: 'SIN'
            },
            derpature: {
              flightNo: 'GA 001',
              flightType: 'Int',
              from: 'SIN',
              to: 'CGK'
            },
            stad: "5 Nov 2020 09:00"
          }, {
            id: 1,
            status: "Complete",
            arrival: {
              flightNo: 'GA 002',
              flightType: 'Int',
              from: 'CGK',
              to: 'SIN'
            },
            derpature: {
              flightNo: 'GA 002',
              flightType: 'Int',
              from: 'SIN',
              to: 'CGK'
            },
            stad: "5 Nov 2020 09:00"
          }];
        }

        _createClass(BillingListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getQueryParams();
          }
        }, {
          key: "getQueryParams",
          value: function getQueryParams() {
            var params = this.activatedRoute.snapshot.queryParams;
            var tempProp = this.props;
            this.props.map(function (prop, index) {
              if (params[prop.field]) {
                tempProp[index].value = params[prop.field];
              }
            });
          }
        }, {
          key: "getData",
          value: function getData() {}
        }]);

        return BillingListPage;
      }();

      BillingListPage.ctorParameters = function () {
        return [{
          type: _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      BillingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./billing-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-list/billing-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./billing-list.page.scss */
        "./src/app/billing/billing-list/billing-list.page.scss"))["default"]]
      })], BillingListPage);
      /***/
    },

    /***/
    "./src/app/billing/billing-menu/billing-menu.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/billing/billing-menu/billing-menu.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBillingBillingMenuBillingMenuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".flight-cont .background-header {\n  position: fixed;\n  width: 150%;\n  height: 50%;\n  left: -25%;\n  top: -30%;\n  border-radius: 50%;\n  background: #146CAB;\n  z-index: 0;\n}\n.flight-cont .header-container {\n  position: relative;\n}\n.flight-cont .content-container {\n  position: relative;\n}\n.flight-cont .content-container .list-container {\n  cursor: pointer;\n}\n.flight-cont .content-container .list-container .header-style {\n  font-weight: 600;\n  font-size: 4.5vw;\n  color: #146CAB;\n}\n.flight-cont .content-container .list-container .title-style {\n  font-weight: normal;\n  font-size: 3.5vw;\n  color: #898989;\n}\n.flight-cont .content-container .list-container .logo-style {\n  width: 11vw;\n  margin-top: 0.5vw;\n}\n.flight-cont .toolbar-style {\n  --background: transparent;\n  --color: white;\n}\n.header-container {\n  position: relative;\n}\n.header-title {\n  text-align: center;\n  text-transform: none !important;\n  margin-left: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9iaWxsaW5nLW1lbnUvYmlsbGluZy1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFBRjtBQUVDO0VBQ0Msa0JBQUE7QUFBRjtBQUVDO0VBQ0Msa0JBQUE7QUFBRjtBQUNFO0VBQ0MsZUFBQTtBQUNIO0FBQUc7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUc7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUc7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUVDO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFJQTtFQUNDLGtCQUFBO0FBREQ7QUFJQTtFQUNDLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUREIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy9iaWxsaW5nLW1lbnUvYmlsbGluZy1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlnaHQtY29udCB7XHJcblx0LmJhY2tncm91bmQtaGVhZGVyIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxNTAlO1xyXG5cdFx0aGVpZ2h0OiA1MCU7XHJcblx0XHRsZWZ0OiAtMjUlO1xyXG5cdFx0dG9wOiAtMzAlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogIzE0NkNBQjtcclxuXHRcdHotaW5kZXg6IDA7XHJcblx0fVxyXG5cdC5oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcblx0LmNvbnRlbnQtY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdC5saXN0LWNvbnRhaW5lciB7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0LmhlYWRlci1zdHlsZSB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0XHRmb250LXNpemU6IDQuNXZ3O1xyXG5cdFx0XHRcdGNvbG9yOiAjMTQ2Q0FCO1xyXG5cdFx0XHR9XHJcblx0XHRcdC50aXRsZS1zdHlsZSB7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdFx0XHRmb250LXNpemU6IDMuNXZ3O1xyXG5cdFx0XHRcdGNvbG9yOiAjODk4OTg5O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5sb2dvLXN0eWxlIHtcclxuXHRcdFx0XHR3aWR0aDogMTF2dztcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAwLjV2dztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQudG9vbGJhci1zdHlsZSB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0LS1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuXHRtYXJnaW4tbGVmdDogLTQwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/billing/billing-menu/billing-menu.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/billing/billing-menu/billing-menu.page.ts ***!
      \***********************************************************/

    /*! exports provided: BillingMenuPage */

    /***/
    function srcAppBillingBillingMenuBillingMenuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillingMenuPage", function () {
        return BillingMenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../general.service */
      "./src/app/general.service.ts");

      var BillingMenuPage = function BillingMenuPage(generalService) {
        _classCallCheck(this, BillingMenuPage);

        this.generalService = generalService;
      };

      BillingMenuPage.ctorParameters = function () {
        return [{
          type: _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]
        }];
      };

      BillingMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./billing-menu.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-menu/billing-menu.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./billing-menu.page.scss */
        "./src/app/billing/billing-menu/billing-menu.page.scss"))["default"]]
      })], BillingMenuPage);
      /***/
    },

    /***/
    "./src/app/billing/billing-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/billing/billing-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: BillingRoutingModule */

    /***/
    function srcAppBillingBillingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function () {
        return BillingRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _billing_menu_billing_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./billing-menu/billing-menu.page */
      "./src/app/billing/billing-menu/billing-menu.page.ts");
      /* harmony import */


      var _billing_search_billing_search_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./billing-search/billing-search.page */
      "./src/app/billing/billing-search/billing-search.page.ts");
      /* harmony import */


      var _invoice_search_invoice_search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invoice-search/invoice-search.page */
      "./src/app/billing/invoice-search/invoice-search.page.ts");
      /* harmony import */


      var _billing_list_billing_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./billing-list/billing-list.page */
      "./src/app/billing/billing-list/billing-list.page.ts");

      var routes = [{
        path: 'billing-menu',
        component: _billing_menu_billing_menu_page__WEBPACK_IMPORTED_MODULE_3__["BillingMenuPage"]
      }, {
        path: 'billing-search',
        component: _billing_search_billing_search_page__WEBPACK_IMPORTED_MODULE_4__["BillingSearchPage"]
      }, {
        path: 'invoice-search',
        component: _invoice_search_invoice_search_page__WEBPACK_IMPORTED_MODULE_5__["InvoiceSearchPage"]
      }, {
        path: 'billing-list',
        component: _billing_list_billing_list_page__WEBPACK_IMPORTED_MODULE_6__["BillingListPage"]
      }];

      var BillingRoutingModule = function BillingRoutingModule() {
        _classCallCheck(this, BillingRoutingModule);
      };

      BillingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        entryComponents: []
      })], BillingRoutingModule);
      /***/
    },

    /***/
    "./src/app/billing/billing-search/billing-search.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/billing/billing-search/billing-search.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBillingBillingSearchBillingSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".flight-schedule-cont .background-header {\n  position: fixed;\n  width: 150%;\n  height: 50%;\n  left: -25%;\n  top: -20%;\n  border-radius: 50%;\n  background: #146CAB;\n  z-index: 0;\n}\n.flight-schedule-cont .header-container {\n  position: relative;\n}\n.flight-schedule-cont .content-container {\n  position: relative;\n  margin-top: 20px;\n}\n.flight-schedule-cont .toolbar-style {\n  --background: transparent;\n  --color: white;\n}\n.header-container {\n  position: relative;\n}\n.header-title {\n  text-align: center;\n  margin-left: -38px;\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9iaWxsaW5nLXNlYXJjaC9iaWxsaW5nLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVDO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFJQTtFQUNJLGtCQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy9iaWxsaW5nLXNlYXJjaC9iaWxsaW5nLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxpZ2h0LXNjaGVkdWxlLWNvbnQge1xyXG5cdC5iYWNrZ3JvdW5kLWhlYWRlciB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogMTUwJTtcclxuXHRcdGhlaWdodDogNTAlO1xyXG5cdFx0bGVmdDogLTI1JTtcclxuXHRcdHRvcDogLTIwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6ICMxNDZDQUI7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdH1cclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jb250ZW50LWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQudG9vbGJhci1zdHlsZSB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0LS1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/billing/billing-search/billing-search.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/billing/billing-search/billing-search.page.ts ***!
      \***************************************************************/

    /*! exports provided: BillingSearchPage */

    /***/
    function srcAppBillingBillingSearchBillingSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillingSearchPage", function () {
        return BillingSearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../general.service */
      "./src/app/general.service.ts");

      var BillingSearchPage = /*#__PURE__*/function () {
        function BillingSearchPage(route, router, formBuilder, generalService, location) {
          _classCallCheck(this, BillingSearchPage);

          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.generalService = generalService;
          this.location = location;
          this.statusList = [{
            value: 'complete',
            text: 'Complete'
          }, {
            value: 'incomplete',
            text: 'Incomplete'
          }];
        }

        _createClass(BillingSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formBilling = this.formBuilder.group({
              startDate: '',
              endDate: '',
              flightNumber: '',
              status: ''
            });
            this.isLoading = false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(e) {
            var formValue = this.formBilling.value;
            var urlNext = "/flight/flight-list";
            var nullParam = true;

            if (formValue.startDate != "") {
              urlNext = urlNext + "?startDate=" + formValue.startDate;
              nullParam = false;
            }

            if (formValue.endDate != "") {
              if (nullParam == true) {
                urlNext = urlNext + "?endDate=" + formValue.endDate;
                nullParam = false;
              } else {
                urlNext = urlNext + "&endDate=" + formValue.endDate;
              }
            }

            if (formValue.flightNumber != "") {
              if (nullParam == true) {
                urlNext = urlNext + "?flightNumber=" + formValue.flightNumber;
                nullParam = false;
              } else {
                urlNext = urlNext + "&flightNumber=" + formValue.flightNumber;
              }
            }

            if (formValue.status != "") {
              if (nullParam == true) {
                urlNext = urlNext + "?status=" + formValue.status.value;
                nullParam = false;
              } else {
                urlNext = urlNext + "&status=" + formValue.status.value;
              }
            } // urlNext = encodeURI(urlNext)


            this.router.navigateByUrl(urlNext);
          }
        }]);

        return BillingSearchPage;
      }();

      BillingSearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      };

      BillingSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./billing-search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/billing-search/billing-search.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./billing-search.page.scss */
        "./src/app/billing/billing-search/billing-search.page.scss"))["default"]]
      })], BillingSearchPage);
      /***/
    },

    /***/
    "./src/app/billing/billing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/billing/billing.module.ts ***!
      \*******************************************/

    /*! exports provided: BillingPageModule */

    /***/
    function srcAppBillingBillingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillingPageModule", function () {
        return BillingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _billing_menu_billing_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./billing-menu/billing-menu.page */
      "./src/app/billing/billing-menu/billing-menu.page.ts");
      /* harmony import */


      var _billing_search_billing_search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./billing-search/billing-search.page */
      "./src/app/billing/billing-search/billing-search.page.ts");
      /* harmony import */


      var _invoice_search_invoice_search_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./invoice-search/invoice-search.page */
      "./src/app/billing/invoice-search/invoice-search.page.ts");
      /* harmony import */


      var _billing_list_billing_list_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./billing-list/billing-list.page */
      "./src/app/billing/billing-list/billing-list.page.ts");
      /* harmony import */


      var _billing_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./billing-routing.module */
      "./src/app/billing/billing-routing.module.ts");

      var BillingPageModule = function BillingPageModule() {
        _classCallCheck(this, BillingPageModule);
      };

      BillingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _billing_routing_module__WEBPACK_IMPORTED_MODULE_9__["BillingRoutingModule"]],
        declarations: [_billing_menu_billing_menu_page__WEBPACK_IMPORTED_MODULE_5__["BillingMenuPage"], _billing_search_billing_search_page__WEBPACK_IMPORTED_MODULE_6__["BillingSearchPage"], _invoice_search_invoice_search_page__WEBPACK_IMPORTED_MODULE_7__["InvoiceSearchPage"], _billing_list_billing_list_page__WEBPACK_IMPORTED_MODULE_8__["BillingListPage"]]
      })], BillingPageModule);
      /***/
    },

    /***/
    "./src/app/billing/invoice-search/invoice-search.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/billing/invoice-search/invoice-search.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBillingInvoiceSearchInvoiceSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".flight-schedule-cont .background-header {\n  position: fixed;\n  width: 150%;\n  height: 50%;\n  left: -25%;\n  top: -20%;\n  border-radius: 50%;\n  background: #146CAB;\n  z-index: 0;\n}\n.flight-schedule-cont .header-container {\n  position: relative;\n}\n.flight-schedule-cont .content-container {\n  position: relative;\n  margin-top: 20px;\n}\n.flight-schedule-cont .toolbar-style {\n  --background: transparent;\n  --color: white;\n}\n.header-container {\n  position: relative;\n}\n.header-title {\n  text-align: center;\n  margin-left: -38px;\n  text-transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGluZy9pbnZvaWNlLXNlYXJjaC9pbnZvaWNlLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0FBQUY7QUFFQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVDO0VBQ0MseUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFJQTtFQUNJLGtCQUFBO0FBREo7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvYmlsbGluZy9pbnZvaWNlLXNlYXJjaC9pbnZvaWNlLXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxpZ2h0LXNjaGVkdWxlLWNvbnQge1xyXG5cdC5iYWNrZ3JvdW5kLWhlYWRlciB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR3aWR0aDogMTUwJTtcclxuXHRcdGhlaWdodDogNTAlO1xyXG5cdFx0bGVmdDogLTI1JTtcclxuXHRcdHRvcDogLTIwJTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6ICMxNDZDQUI7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdH1cclxuXHQuaGVhZGVyLWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5jb250ZW50LWNvbnRhaW5lciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQudG9vbGJhci1zdHlsZSB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0LS1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/billing/invoice-search/invoice-search.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/billing/invoice-search/invoice-search.page.ts ***!
      \***************************************************************/

    /*! exports provided: InvoiceSearchPage */

    /***/
    function srcAppBillingInvoiceSearchInvoiceSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceSearchPage", function () {
        return InvoiceSearchPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../general.service */
      "./src/app/general.service.ts");

      var InvoiceSearchPage = /*#__PURE__*/function () {
        function InvoiceSearchPage(route, router, formBuilder, generalService, location) {
          _classCallCheck(this, InvoiceSearchPage);

          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.generalService = generalService;
          this.location = location;
        }

        _createClass(InvoiceSearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formInvoice = this.formBuilder.group({
              startDate: '',
              endDate: '',
              flightNumber: ''
            });
            this.isLoading = false;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(e) {
            var formValue = this.formInvoice.value;
            var urlNext = "/flight/flight-list";
            var nullParam = true;

            if (formValue.startDate != "") {
              urlNext = urlNext + "?startDate=" + formValue.startDate;
              nullParam = false;
            }

            if (formValue.endDate != "") {
              if (nullParam == true) {
                urlNext = urlNext + "?endDate=" + formValue.endDate;
                nullParam = false;
              } else {
                urlNext = urlNext + "&endDate=" + formValue.endDate;
              }
            }

            if (formValue.flightNumber != "") {
              if (nullParam == true) {
                urlNext = urlNext + "?flightNumber=" + formValue.flightNumber;
                nullParam = false;
              } else {
                urlNext = urlNext + "&flightNumber=" + formValue.flightNumber;
              }
            } // urlNext = encodeURI(urlNext)


            this.router.navigateByUrl(urlNext);
          }
        }]);

        return InvoiceSearchPage;
      }();

      InvoiceSearchPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      };

      InvoiceSearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./invoice-search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/billing/invoice-search/invoice-search.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./invoice-search.page.scss */
        "./src/app/billing/invoice-search/invoice-search.page.scss"))["default"]]
      })], InvoiceSearchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=billing-billing-module-es5.js.map