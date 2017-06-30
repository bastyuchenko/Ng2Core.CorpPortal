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
var ToggleComponent = (function () {
    function ToggleComponent() {
        this.activeChange = new core_1.EventEmitter();
    }
    ToggleComponent.prototype.ngOnInit = function () {
        this.toggleValue = this.active;
    };
    ToggleComponent.prototype.ngOnChanges = function () {
        //this.activeChange.emit(this.toggleValue);
    };
    ToggleComponent.prototype.toggleInvoke = function () {
        this.activeChange.emit(this.toggleValue);
    };
    return ToggleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ToggleComponent.prototype, "active", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ToggleComponent.prototype, "activeChange", void 0);
ToggleComponent = __decorate([
    core_1.Component({
        selector: 'toggle',
        templateUrl: './toggle.component.html',
        styleUrls: [
            './toggle.component.css'
        ]
    })
], ToggleComponent);
exports.ToggleComponent = ToggleComponent;
//# sourceMappingURL=toggle.component.js.map