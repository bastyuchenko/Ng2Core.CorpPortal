import {ApplicationUser} from './../models/application-user'
import {Candidate} from './../models/candidate'
import {IEmployee} from './../models/employee'
import {IProject} from './../models/project'
import {IRoleAssignment} from './../models/role-assignment'
import {IRole} from './../models/role'
import {ISkillVacancy} from './../models/skill-vacancy'
import {ISkill} from './../models/skill'
import {IVacancy} from './../models/vacancy'
import { Injectable, EventEmitter } from "@angular/core"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import * as _ from '@types/underscore'

@Injectable()
export class HrService {
    _userInfo: EventEmitter<ApplicationUser> = new EventEmitter<ApplicationUser>();
    headers:Headers = new Headers({ 'Content-Type': 'application/json' });
    options:RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getCandidates(): Observable<Candidate[]> {
        return this.http.get('/api/hrmanager/candidates')
            .map((response: Response) => {
                var tempResult = response.json();
                return <Candidate[]>tempResult;
            })
            .do((): void => { })
            .catch(this.errorHandler);
    }

    createCandidate(model:Candidate): Observable<Response> {
        return this.http.post("/api/hrmanager/candidates/candidate", model)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    errorHandler(err: Response) {
        return Observable.throw(err);
    }
}
