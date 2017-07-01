import { ApplicationUser } from "./../models/account"
import { IRole } from "./../models/role"
import { IRegisterModel } from "./register-model"
import { ILoginModel } from "./login-model"
import { Injectable, EventEmitter } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import * as _ from '@types/underscore'

@Injectable()
export class AccountManagementService {
    _userInfo: EventEmitter<ApplicationUser> = new EventEmitter<ApplicationUser>();
    headers:Headers = new Headers({ 'Content-Type': 'application/json' });
    options:RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    logout(): Observable<Response> {
        return this.http.post("/api/account/logout", {})
            .do((): void => { })
            .catch(this.errorHandler)
    }

    setUser(user: ApplicationUser) {
        this._userInfo.emit(user);
    }

    registerAccount(model: IRegisterModel): Observable<ApplicationUser> {
        return this.http.post('/api/account/register', model, this.options)
            .do((): void => { })
            .catch(this.errorHandler);
    }

    getAllRoles(): Observable<IRole[]> {
        return this.http.get('/api/role/roles')
            .map((response: Response) => {
                var tempResult = response.json();
                return <IRole[]>tempResult;
            })
            .do((): void => { })
            .catch(this.errorHandler);
    }

    loginAccount(model: ILoginModel): Observable<void> {
        return this.http.post('/api/account/login', model, this.options)
            .do((): void => {
                this.getUserInfo()
                    .subscribe((data:ApplicationUser):void=>{
                        this.setUser(data);
                    })
            })
            .catch(this.errorHandler);
    }

    getUserInfo(): Observable<ApplicationUser> {
        return this.http.get('/api/Account/UserInfo')
            .map(response => { return response.json() as ApplicationUser });
    }

    errorHandler(err: Response) {
        return Observable.throw(err);
    }
}