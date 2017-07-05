import { Injectable, EventEmitter } from '@angular/core'
import { Alert } from './alert'

@Injectable()
export class AlertService {
    _alertArrayChanged: EventEmitter<Alert> = new EventEmitter<Alert>();
    
    addAlert(alert:Alert){
        this._alertArrayChanged.emit(alert);
    }
}