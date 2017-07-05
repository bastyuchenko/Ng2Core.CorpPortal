import { Component, EventEmitter } from '@angular/core'
import { Alert } from './alert'
import { AlertService } from './alert.service'

@Component({
    selector: 'alert-helper',
    templateUrl: './alert.component.html',
    styleUrls: ['alert.component.css']
})

export class AlertHelperComponent {
    alerts: Alert[] = [];
    constructor(alertService: AlertService) {
        alertService._alertArrayChanged.subscribe((alert: Alert): void => {
            this.alerts.push(alert);
        });
    }

    public closeAlert(alert: Alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}