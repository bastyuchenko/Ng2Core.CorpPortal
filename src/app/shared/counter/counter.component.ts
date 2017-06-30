import { Component, Input, Output, OnChanges, EventEmitter } from "@angular/core"

@Component({
    selector: "counter-component",
    templateUrl: "./counter.component.html"
})

export class CounterComponent {
    @Input() amount: number = 0;
    @Output() amountChange: EventEmitter<number> = new EventEmitter<number>();

    goUp(): void {
        this.amount++;
        this.amountChange.emit(this.amount);
    }

    goDown(): void {
        this.amount--;
        this.amountChange.emit(this.amount);
    }
}