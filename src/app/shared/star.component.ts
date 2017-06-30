import { Component, Input, Output, OnChanges, EventEmitter } from "@angular/core"

@Component({
    selector: "start-component",
    templateUrl: "./star.component.html",
    styleUrls: ["star.component.css"]
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = 86 / 5 * this.rating;
    }

    showAllStars():void{
        this.starWidth = 86;
    }

    @Output() onChangeStar: EventEmitter<number> = new EventEmitter<number>();

    changeStar(xStar: number): void {
        this.onChangeStar.emit(xStar)
    };
}