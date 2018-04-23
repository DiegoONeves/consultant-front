
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { Consultant } from '../models/consultant';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { SearchConsultant } from 'app/models/searchConsultant';

@Injectable()
export class ConsultantService {

  constructor(private http: Http) { }

  private getHeaders() {
    let headers = new Headers({});
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return options;
  }


  async get(searchConsultant: SearchConsultant): Promise<Consultant[]> {

    let queryString = "?";

    if (searchConsultant.name) {
      queryString += `filter=name=${searchConsultant.name}`;
    }
    if (searchConsultant.email) {
      if (queryString !== "?") {
        queryString += `,email=${searchConsultant.email}`;
      } else
        queryString += `filter=email=${searchConsultant.email}`;
    }

    let limiters = `limiters=limit=${searchConsultant.limit},skip=${(searchConsultant.currentPage - 1) * searchConsultant.limit}`;
    queryString += `${(queryString !== "?" ? "&" : "")}${limiters}`;

    const headers = this.getHeaders();
    let consultants = new Array<Consultant>();

    let url = `${environment.baseUrl}/consultants${queryString}`;

    console.log(url);

    let res = await this.http.get(url, headers)
      .map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(error);
      })
      .toPromise();

    console.log(res);

    searchConsultant.totalItems = res.totalItems;

    for (let r of res.data) {
      let consultant = new Consultant();
      consultant.load(r);
      consultants.push(consultant);
    }

    return consultants;
  }

  async getById(id: string): Promise<Consultant> {

    const headers = this.getHeaders();
    let consultant = new Consultant();

    let res = await this.http.get(`${environment.baseUrl}/consultants/${id}`, headers)
      .map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(error);
      })
      .toPromise();

    consultant.load(res);
    return consultant;
  }

  async create(consultant: Consultant) {
    const headers = this.getHeaders();

    return this.http.post(`${environment.baseUrl}/consultants`, JSON.stringify(consultant), headers)
      .map((res: Response) => res.json())
      .toPromise()
      .catch((error: any) => error || 'Server error');
  }

  async edit(consultant: Consultant) {
    const headers = this.getHeaders();
    let url = `${environment.baseUrl}/consultants/${consultant._id}`;
    await this.http.put(url, JSON.stringify(consultant), headers)
      .map((res: Response) => res.json())
      .toPromise()
      .catch((error: any) => error || 'Server error');
  }

  async remove(id: string) {
    const headers = this.getHeaders();
    let consultant = new Consultant();

    await this.http.delete(`${environment.baseUrl}/consultants/${id}`, headers)
      .map(response => response.json())
      .catch((error: any) => {
        return Observable.throw(error);
      })
      .toPromise();
  }

}
