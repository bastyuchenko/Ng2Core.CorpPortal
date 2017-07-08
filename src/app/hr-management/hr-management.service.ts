import { ApplicationUser } from './../models/application-user'
import { Candidate } from './../models/candidate'
import { Project } from './../models/project'
import { Employee } from './../models/employee'
import { RoleAssignment } from './../models/role-assignment'
import { Role } from './../models/role'
import { SkillVacancy } from './../models/skill-vacancy'
import { Skill } from './../models/skill'
import { Vacancy } from './../models/vacancy'
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
    headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    options: RequestOptions = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getCandidates(): Observable<Candidate[]> {
        return this.http.get('/api/candidates')
            .map((response: Response) => {
                var tempResult = response.json();
                return <Candidate[]>tempResult;
            })
            .do((): void => { })
            .catch(this.errorHandler);
    }

    getProjects(): Observable<Project[]> {
        return this.http.get('/api/projects')
            .map((response: Response) => {
                var tempResult = response.json();
                return <Project[]>tempResult;
            })
            .do((): void => { })
            .catch(this.errorHandler);
    }

    getSkills(): Observable<Skill[]> {
        return this.http.get('/api/skills')
            .map((response: Response) => {
                var tempResult = response.json();
                return <Skill[]>tempResult;
            })
            .do((): void => { })
            .catch(this.errorHandler);
    }

     getVacancies(): Observable<Vacancy[]> {
        return this.http.get('/api/vacancies')
            .map((response: Response) => {
                var tempResult = response.json();
                return <Vacancy[]>tempResult;
            })
            .do((): void => { })
            .catch(this.errorHandler);
    }

    createCandidate(model: Candidate): Observable<Response> {
        return this.http.post("/api/candidates/candidate", model)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    createProject(model: Project): Observable<Response> {
        return this.http.post("/api/projects/project", model)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    createSkill(model: Skill): Observable<Response> {
        return this.http.post("/api/skills/skill", model)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    createVacancy(model: Vacancy): Observable<Response> {
        return this.http.post("/api/vacancies/vacancy", model)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    deleteSkill(id: number): Observable<Response> {
        return this.http.delete(`/api/skills/skill/${id}`)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    deleteVacancy(id: number): Observable<Response> {
        return this.http.delete(`/api/vacancies/vacancy/${id}`)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    deleteProject(id: number): Observable<Response> {
        return this.http.delete(`/api/projects/project/${id}`)
            .do((): void => { })
            .catch(this.errorHandler)
    }

    deleteCandidate(id: number): Observable<Response> {
        return this.http.delete(`/api/candidates/candidate/${id}`)
            .do((): void => { })
            .catch(this.errorHandler)
    }
    
    errorHandler(err: Response) {
        return Observable.throw(err);
    }
}
