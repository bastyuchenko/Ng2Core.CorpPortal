// import { IToe } from "./../models/toe"
// import { IIat } from "./../models/iat"
// import { ICountry } from "./../country/country"
// import { IAward } from "./../award/award"
// import { INfqLevel } from "./../models/nfqlevel"
// import { IDuration } from "./../models/duration"
// import { IBologna } from "./../models/bologna"

import { Injectable } from "@angular/core"
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class SharedService {

//     private _countriesInfo: Promise<ICountry[]> = null;

//     get allCountries(): Promise<ICountry[]> {
//         return this._countriesInfo;
//     }


//     constructor(private http: Http) {
//         this._countriesInfo = this.getCountries();
//     }

//     getToeCollection(): Observable<IToe[]> {
//         return this.http.get('/api/dict/GetToeCollection')
//             .map((response: Response) => {
//                 var tempResult = response.json();
//                 return <IToe[]>tempResult;
//             })
//             .do((): void => { })
//             .catch(this.errorHandler);
//     }

//     getIatCollection(): Observable<IIat[]> {
//         return this.http.get('/api/dict/GetIatCollection')
//             .map((response: Response) => {
//                 var tempResult = response.json();
//                 return <IIat[]>tempResult;
//             })
//             .do((): void => { })
//             .catch(this.errorHandler);
//     }

//     getAllBologna(): Observable<IBologna[]> {
//         return this.http.get('/api/dict/GetAllBologna')
//             .map((response: Response) => {
//                 var tempResult = response.json();
//                 return <IBologna[]>tempResult;
//             })
//             .do((): void => { })
//             .catch(this.errorHandler);
//     }

//     getAllDuration(): Observable<IDuration[]> {
//         return this.http.get('/api/dict/GetAllDuration')
//             .map((response: Response) => {
//                 var tempResult = response.json();
//                 return <IDuration[]>tempResult;
//             })
//             .do((): void => { })
//             .catch(this.errorHandler);
//     }

//     getAllNFQLevel(): Observable<INfqLevel[]> {
//         return this.http.get('/api/dict/GetAllNFQLevel')
//             .map((response: Response) => {
//                 var tempResult = response.json();
//                 return <INfqLevel[]>tempResult;
//             })
//             .do((): void => { })
//             .catch(this.errorHandler);
//     }

//     getEmptyAward(): IAward {
//         return {
//             TitleOfAwardInEnglish: '',
//             TitleOfForeignAward: '',
//             AdditionalInformation: '',

//             Country: {
//                 TermGuid: ''
//             },

//             TypeOfEducation: {
//                 TermGuid: ''
//             },
//             ProfessionalAward: '',
//             RecognisedByProfBody: '',
//             Comments: '',
//             RationaleForDecision: '',
//             EqfLevel: '',
//             NationalFramework: null,

//             blablaNfqLevel: {
//                 Id: null,
//                 Value: ''
//             },

//             blablaAwardType: {
//                 TermGuid: ''
//             },

//             Bologna: {
//                 Id: null,
//             },

//             Duration: {
//                 Id: 0,
//                 Value: '',
//             },

//             CreditType: '',
//             CreditValue: '',

//             AccessToHigherEd: '',
//             LocationOfEvidence: '',
//             PdfLocation: '',
//             AwardProfile: '',
//             SampleDoc: '',
//             Active: false,
//             Id: -1,
//             UniqueId: '',
//             CreatedBy: {
//                 Id: 0,
//                 Value: '',
//             },
//             ModifiedBy: {
//                 Id: 0,
//                 Value: '',
//             },
//             Created: '',
//             Modified: '',
//             DbId: 0
//         } as IAward;
//     }

//     private getCountries(): Promise<ICountry[]> {
//         return this.http.get('/api/country/getallcountries')
//             .toPromise()
//             .then(this.extractData)
//             .catch(this.handleError);
//     }

//     private extractData(res: Response) {
//         var tempResult = res.json();
//         return tempResult;
//     }

//     private handleError(error: Response | any) {
//         let errMsg: string;
//         if (error instanceof Response) {
//             const body = error.json() || '';
//             const err = body.error || JSON.stringify(body);
//             errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//         } else {
//             errMsg = error.message ? error.message : error.toString();
//         }
//         console.error(errMsg);
//         return Promise.reject(errMsg);
//     }

//     errorHandler(err: Response) {
//         return Observable.throw(err);
//     }
}