import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postConfigResponse(createResource: any): Observable<HttpResponse<Config>> {
    return this.http.post('https://common.laalsa.com/support/support/credentials/login', createResource, { observe: 'response' });
  }
  
  sigIn(createResource: any) {
    return this.postConfigResponse(createResource);
  }
  customerData() {
    var token = (localStorage.getItem('token'));
    const urlget = 'https://common.laalsa.com/support/support/crm/detailedOrderDetails?orderId=1f5cf4f0-5ec7-11ea-a92f-aba527ffa0cb';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('x-access-token', '' + token);
    return this.http.get(urlget, { headers });
  }
}
