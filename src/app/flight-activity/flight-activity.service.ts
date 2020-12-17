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
            if(x.value != ""){
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

}
