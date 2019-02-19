import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs"; //Observable
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  constructor(public http: Http) { }

  getContracts(): Observable<Contract[]> {
    // return this.http.get('/api/contract').map(response => response.json);
    console.log(this.http.get('/api/contracts').map(response => response.json));
    return this.http.get('/api/contracts');
  }
  getContract(id: number): Observable<Contract> {
    // return this.http.get('/api/contract' + id).map(response => response.json);
    return this.http.get('/api/contract' + id));
  }
}

export class Contract {
  constructor(
    public id: number,
    public company: string,
    public perMain: string,
    public tpyContract: string,
    public numContract: string,
    public namClient: string,
    public namProject: string,
    public monAll: string,
    public monReceipt: string,
    public monEnd: string,
    public tpyReceipt: string,
    public invStatus: string,
    public invTime: string,
    public monTransferMore: string,
    public texContract: string,
    public datExpiration: string,
    public monExpiration: string,
    public datRemain: string,
    public tbeRemark: string,
    public tbeStatus: string) { }
}
