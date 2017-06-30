import { Directive, ElementRef, Renderer, HostListener, Input } from "@angular/core"
import "./greenBorder.css"

@Directive({
    selector: "[highlightBorder]",

})

export class HighlightBorderDirective {
    constructor(renderer: Renderer, private el: ElementRef) {

    }

    @Input() highlightBorder: string;

    @HostListener("mouseenter") onMouseEnter() {
        this.el.nativeElement.style.borderWidth = "4px";
        this.el.nativeElement.style.borderColor = "green";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.el.nativeElement.style.borderWidth = "1px";
        this.el.nativeElement.style.borderColor = "grey";
    }
}