"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var UserInfoService = (function () {
    function UserInfoService(http) {
        this.http = http;
        this._userInfo = null;
        this._userInfo = this.getUserInfo();
    }
    Object.defineProperty(UserInfoService.prototype, "userInfo", {
        get: function () {
            return this._userInfo;
        },
        enumerable: true,
        configurable: true
    });
    UserInfoService.prototype.ngOnInit = function () {
        console.log("init run");
    };
    UserInfoService.prototype.getUserInfo = function () {
        return this.http.get('/api/AccountApi/GetUserInfo')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UserInfoService.prototype.extractData = function (res) {
        var tempResult = res.json();
        return tempResult;
    };
    UserInfoService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return UserInfoService;
}());
UserInfoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserInfoService);
exports.UserInfoService = UserInfoService;
//# sourceMappingURL=user-info.service.js.map