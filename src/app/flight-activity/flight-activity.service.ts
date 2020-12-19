import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { GeneralService } from '../general.service';
import { Observable } from 'rxjs';

@Injectable()
export class FlightActivityService {

    constructor(
        private http: HttpClient,
        private generalService: GeneralService
    ) { }

    //   getRegionbyId(id){
    //     const url = this.generalService.apiUrl + `/unitOfMeasure/${id}`;
    //     return this.http.get(url)
    //       .map((res: Response) => res['success'].data)
    //       .catch(err => Observable.throw(err));
    //   }


    getListFlight(paramsValue): Observable<any> {
        let httpParams = new HttpParams();
        paramsValue.map(x => {
            if (x.value != "") {
                httpParams = httpParams.append(x.field, x.value);
            }

        })
        return this.http
            .get(
                this.generalService.apiUrl + '/search', { params: httpParams }
            )
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    getFlightDetail(paramsValue): Observable<any> {
        let httpParams = new HttpParams();
        paramsValue.map(x => {
            if (x.value != "" && (x.field == 'codeArrival' || x.field == 'codeDeparture')) {
                httpParams = httpParams.append(x.field, x.value);
            }

        })
        return this.http
            .get(
                this.generalService.apiUrl + '/search/general', { params: httpParams }
            )
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    getFlightPax(paramsValue): Observable<any> {
        let httpParams = new HttpParams();
        paramsValue.map(x => {
            if (x.value != "" && x.field == 'codeArrival') {
                httpParams = httpParams.append('arrivalcode', x.value);
            }
            if (x.value != "" && x.field == 'codeDeparture') {
                httpParams = httpParams.append('departurecode', x.value);
            }
        })
        return this.http
            .get(
                this.generalService.apiUrl + '/pax', { params: httpParams }
            )
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    getFlightMovement(paramsValue): Observable<any> {
        let httpParams = new HttpParams();
        paramsValue.map(x => {
            if (x.value != "" && x.field == 'afsKey') {
                httpParams = httpParams.append('afskey', x.value);
            }
        })
        return this.http
            .get(
                this.generalService.apiUrl + '/movement', { params: httpParams }
            )
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    getFlightAvio(paramsValue): Observable<any> {
        let httpParams = new HttpParams();
        paramsValue.map(x => {
            if (x.value != "" && x.field == 'afsKey') {
                httpParams = httpParams.append('afskey', x.value);
            }
        })
        return this.http
            .get(
                this.generalService.apiUrl + '/avio', { params: httpParams }
            )
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    submitPax(values): Observable<any> {
        const body = JSON.stringify(values);
        return this.http
            .post(this.generalService.apiUrl + '/pax', body)
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    submitMovement(values): Observable<any> {
        const body = JSON.stringify(values);
        return this.http
            .post(this.generalService.apiUrl + '/movement', body)
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }

    submitEditAirline(values): Observable<any> {
        const body = JSON.stringify(values);
        return this.http
            .post(this.generalService.apiUrl + '/airline', body)
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }
}
