import { Injectable, EventEmitter } from '@angular/core'
import { IAlert } from './alert'

@Injectable()
export class AlertService {
    _alertArrayChanged: EventEmitter<IAlert> = new EventEmitter<IAlert>();
    
    addAlert(alert:IAlert){
        this._alertArrayChanged.emit(alert);
    }
}