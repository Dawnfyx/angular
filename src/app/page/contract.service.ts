import { Injectable } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: Http) {
  }

  getContracts(): Observable<Contract[]> {
    return this.http.get('/api/contracts').map(res => res.json());
  }

  getContract(id: number): Observable<Contract> {
    return this.http.get('/api/contract/' + id).map(res => res.json());
  }

  getEmailId(id: number): Observable<Comment[]> {
    console.log("server_id===" + id);
    return this.http.get("/api/contract/"+id+"/email").map(res => res.json());
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
