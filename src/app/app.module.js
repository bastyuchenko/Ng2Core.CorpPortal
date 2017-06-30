"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var award_module_1 = require("./award/award.module");
var country_module_1 = require("./country/country.module");
var app_component_1 = require("./app.component");
var page_notfound_component_1 = require("./shared/page-notfound.component");
var welcome_component_1 = require("./home/welcome.component");
var about_component_1 = require("./about/about.component");
var user_info_component_1 = require("./user-info/user-info.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var shared_service_1 = require("./shared/shared.service");
var user_info_service_1 = require("./shared/user-info.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            award_module_1.AwardModule,
            country_module_1.CountryModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', component: page_notfound_component_1.PageNotFoundComponent }
            ], { useHash: true })
        ],
        declarations: [
            user_info_component_1.UserInfoComponent,
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            welcome_component_1.WelcomeComponent,
            page_notfound_component_1.PageNotFoundComponent
        ],
        providers: [shared_service_1.SharedService, user_info_service_1.UserInfoService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map