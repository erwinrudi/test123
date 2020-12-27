import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

import { GeneralService } from '../general.service';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

    constructor(
        private http: HttpClient,
        private generalService: GeneralService
    ) { }

    getDataUser(token): Observable<any> {
        let httpParams = new HttpParams();
        httpParams = httpParams.append('token', token);
        return this.http
            .get(
                this.generalService.apiUrl + "/", { params: httpParams }
            )
            .map((response: Response) => response)
            .catch((error: Response) => Observable.throw(error));
    }
}
