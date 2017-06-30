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
require("./greenBorder.css");
var HighlightBorderDirective = (function () {
    function HighlightBorderDirective(renderer, el) {
        this.el = el;
    }
    HighlightBorderDirective.prototype.onMouseEnter = function () {
        this.el.nativeElement.style.borderWidth = "4px";
        this.el.nativeElement.style.borderColor = "green";
    };
    HighlightBorderDirective.prototype.onMouseLeave = function () {
        this.el.nativeElement.style.borderWidth = "1px";
        this.el.nativeElement.style.borderColor = "grey";
    };
    return HighlightBorderDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HighlightBorderDirective.prototype, "highlightBorder", void 0);
__decorate([
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightBorderDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightBorderDirective.prototype, "onMouseLeave", null);
HighlightBorderDirective = __decorate([
    core_1.Directive({
        selector: "[highlightBorder]",
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], HighlightBorderDirective);
exports.HighlightBorderDirective = HighlightBorderDirective;
//# sourceMappingURL=GreenBorderDirective.js.map