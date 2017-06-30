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
var user_info_service_1 = require("./shared/user-info.service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.titleApplication = "testblaba application";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.userInfo
            .then(function (heroes) { return _this.userInfo = heroes; }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.tap = function () {
        var _this = this;
        this.service.userInfo
            .then(function (heroes) { return _this.userInfo = heroes; }, function (error) { return console.log(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: './app.component.html',
        styleUrls: [
            'app.component.css', 'dashboard.css'
        ]
    }),
    __metadata("design:paramtypes", [user_info_service_1.UserInfoService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map