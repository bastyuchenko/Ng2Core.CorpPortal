"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
        this._countriesInfo = null;
        this._countriesInfo = this.getCountries();
    }
    Object.defineProperty(SharedService.prototype, "allCountries", {
        get: function () {
            return this._countriesInfo;
        },
        enumerable: true,
        configurable: true
    });
    SharedService.prototype.getToeCollection = function () {
        return this.http.get('/api/dict/GetToeCollection')
            .map(function (response) {
            var tempResult = response.json();
            return tempResult;
        })
            .do(function () { })
            .catch(this.errorHandler);
    };
    SharedService.prototype.getIatCollection = function () {
        return this.http.get('/api/dict/GetIatCollection')
            .map(function (response) {
            var tempResult = response.json();
            return tempResult;
        })
            .do(function () { })
            .catch(this.errorHandler);
    };
    SharedService.prototype.getAllBologna = function () {
        return this.http.get('/api/dict/GetAllBologna')
            .map(function (response) {
            var tempResult = response.json();
            return tempResult;
        })
            .do(function () { })
            .catch(this.errorHandler);
    };
    SharedService.prototype.getAllDuration = function () {
        return this.http.get('/api/dict/GetAllDuration')
            .map(function (response) {
            var tempResult = response.json();
            return tempResult;
        })
            .do(function () { })
            .catch(this.errorHandler);
    };
    SharedService.prototype.getAllNFQLevel = function () {
        return this.http.get('/api/dict/GetAllNFQLevel')
            .map(function (response) {
            var tempResult = response.json();
            return tempResult;
        })
            .do(function () { })
            .catch(this.errorHandler);
    };
    SharedService.prototype.getEmptyAward = function () {
        return {
            TitleOfAwardInEnglish: '',
            TitleOfForeignAward: '',
            AdditionalInformation: '',
            Country: {
                TermGuid: ''
            },
            TypeOfEducation: {
                TermGuid: ''
            },
            ProfessionalAward: '',
            RecognisedByProfBody: '',
            Comments: '',
            RationaleForDecision: '',
            EqfLevel: '',
            NationalFramework: null,
            blablaNfqLevel: {
                Id: null,
                Value: ''
            },
            blablaAwardType: {
                TermGuid: ''
            },
            Bologna: {
                Id: null,
            },
            Duration: {
                Id: 0,
                Value: '',
            },
            CreditType: '',
            CreditValue: '',
            AccessToHigherEd: '',
            LocationOfEvidence: '',
            PdfLocation: '',
            AwardProfile: '',
            SampleDoc: '',
            Active: false,
            Id: -1,
            UniqueId: '',
            CreatedBy: {
                Id: 0,
                Value: '',
            },
            ModifiedBy: {
                Id: 0,
                Value: '',
            },
            Created: '',
            Modified: '',
            DbId: 0
        };
    };
    SharedService.prototype.getCountries = function () {
        return this.http.get('/api/country/getallcountries')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    SharedService.prototype.extractData = function (res) {
        var tempResult = res.json();
        return tempResult;
    };
    SharedService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    SharedService.prototype.errorHandler = function (err) {
        return Observable_1.Observable.throw(err);
    };
    return SharedService;
}());
SharedService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map