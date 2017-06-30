import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
} from '@angular/core'

@Component({
    selector: 'toggle',
    templateUrl: './toggle.component.html',
    styleUrls: [
        './toggle.component.css'
    ]
})

export class ToggleComponent {

    @Input() active: boolean;
    @Output() activeChange = new EventEmitter();

    private toggleValue: boolean;

    ngOnInit(): void {
        this.toggleValue = this.active;
    }

    ngOnChanges() {
        //this.activeChange.emit(this.toggleValue);
    }

    toggleInvoke(): void {
        this.activeChange.emit(this.toggleValue);
    }
}