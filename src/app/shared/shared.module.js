"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var star_component_1 = require("./star.component");
var counter_component_1 = require("./counter/counter.component");
var loader_component_1 = require("./loader/loader.component");
var toggle_component_1 = require("./toggle/toggle.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            star_component_1.StarComponent,
            counter_component_1.CounterComponent,
            loader_component_1.LoaderComponent,
            toggle_component_1.ToggleComponent
        ],
        exports: [
            star_component_1.StarComponent,
            counter_component_1.CounterComponent,
            loader_component_1.LoaderComponent,
            toggle_component_1.ToggleComponent
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map