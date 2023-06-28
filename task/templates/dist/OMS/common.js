(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService, isNullOrUndefine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefine", function() { return isNullOrUndefine; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "n90K");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _navigate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigate.service */ "RANn");








class ApiService {
    constructor(storageService, httpClient, translateService, dialogService, navigateService) {
        this.storageService = storageService;
        this.httpClient = httpClient;
        this.translateService = translateService;
        this.dialogService = dialogService;
        this.navigateService = navigateService;
        // tslint:disable-next-line:variable-name
        this._baseUrl = "http://127.0.0.1:5000/";
    }
    get(url, params) {
        return this.httpClient.get(this._baseUrl + url, params);
    }
    post(url, params) {
        if (url == 'login' || url == 'register') {
            return this.httpClient.post(this._baseUrl + url, params);
        }
        return this.httpClient.post(this._baseUrl + url, params, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('token', this.storageService.getItem('token'))
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_navigate_service__WEBPACK_IMPORTED_MODULE_5__["NavigateService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: _navigate_service__WEBPACK_IMPORTED_MODULE_5__["NavigateService"] }]; }, null); })();
function isNullOrUndefine(target) {
    return target === null || typeof target === 'undefined';
}


/***/ })

}]);
//# sourceMappingURL=common.js.map