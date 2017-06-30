import { Component, EventEmitter } from '@angular/core'
import { IAlert } from './alert'
import { AlertService } from './alert.service'

@Component({
    selector: 'alert-helper',
    templateUrl: './alert.component.html',
    styleUrls: ['alert.component.css']
})

export class AlertHelperComponent {
    alerts: IAlert[] = [];
    constructor(alertService: AlertService) {
        alertService._alertArrayChanged.subscribe((alert: IAlert): void => {
            this.alerts.push(alert);
        });
    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}