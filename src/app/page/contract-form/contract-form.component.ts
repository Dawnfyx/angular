import { Component, OnInit } from '@angular/core';
import { ContractService, Contract } from '../contract.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Http} from '@angular/http';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.less']
})
export class ContractFormComponent implements OnInit {
  formModel: FormGroup;
  comments: Comment[];

  contract: Contract = new Contract(0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

  createUser(info: any) {
    console.log(info);
  }

  constructor(
    private routeInfo: ActivatedRoute,
    private PageService: ContractService,
    private router: Router,
    private http: Http
  ) {
    this.router = router;
  }

  ngOnInit() {
    const contractId = this.routeInfo.snapshot.params['id'];

    const fb = new FormBuilder();
    this.formModel = fb.group(
      {
        id: [this.contract.id, [Validators.required, Validators.minLength(2)]],
        company: [this.contract.company, [Validators.required, Validators.minLength(6)]],
        perMain: [this.contract.perMain, [Validators.required, Validators.minLength(6)]],
        tpyContract: [this.contract.tpyContract, [Validators.required]],
        numContract: [this.contract.numContract, [Validators.required, Validators.minLength(3)]],
        namClient: [this.contract.namClient, [Validators.required, Validators.minLength(2)]],
        namProject: [this.contract.namProject, [Validators.required, Validators.minLength(6)]],
        monAll: [this.contract.monAll, [Validators.required, Validators.minLength(3)]],
        monReceipt: [this.contract.monReceipt, [Validators.required, Validators.minLength(3)]],
        monEnd: [this.contract.monEnd, [Validators.required, Validators.minLength(3)]],
        tpyReceipt: [this.contract.tpyReceipt, [Validators.required, Validators.minLength(3)]],
        invStatus: [this.contract.invStatus, [Validators.required, Validators.minLength(3)]],
        invTime: [this.contract.invTime, [Validators.required, Validators.minLength(3)]],
        monTransferMore: [this.contract.monTransferMore, [Validators.required, Validators.minLength(3)]],
        texContract: [this.contract.texContract, [Validators.required, Validators.minLength(3)]],
        datExpiration: [this.contract.datExpiration, [Validators.required, Validators.minLength(3)]],
        monExpiration: [this.contract.monExpiration, [Validators.required, Validators.minLength(3)]],
        datRemain: [this.contract.datRemain, [Validators.required, Validators.minLength(3)]],
        tbeRemark: [this.contract.tbeRemark, [Validators.required, Validators.minLength(3)]],
        tbeStatus: [this.contract.tbeStatus, [Validators.required]]
      }
    );

    this.PageService.getContract(contractId).subscribe(
      data => {
        this.contract = data;
        this.formModel.reset({
          id: data.id,
          company: data.company,
          perMain: data.perMain,
          tpyContract: data.tpyContract,
          numContract: data.numContract,
          namClient: data.namClient,
          namProject: data.namProject,
          monAll: data.monAll,
          monReceipt: data.monReceipt,
          monEnd: data.monEnd,
          tpyReceipt: data.tpyReceipt,
          invStatus: data.invStatus,
          invTime: data.invTime,
          monTransferMore: data.monTransferMore,
          texContract: data.texContract,
          datExpiration: data.datExpiration,
          monExpiration: data.monExpiration,
          datRemain: data.datRemain,
          tbeRemark: data.tbeRemark,
          tbeStatus: data.tbeStatus
        })
      }
    );

    this.PageService.getEmailId(contractId).subscribe(
      comments => this.comments = comments
    );
  }

  cancel() {
    this.router.navigateByUrl('/contract');
  }

  save() {
    let info = new Contract(
      this.formModel.value.id,
      this.formModel.value.company,
      this.formModel.value.perMain,
      this.formModel.value.tpyContract,
      this.formModel.value.numContract,
      this.formModel.value.namClient,
      this.formModel.value.namProject,
      this.formModel.value.monAll,
      this.formModel.value.monReceipt,
      this.formModel.value.monEnd,
      this.formModel.value.tpyReceipt,
      this.formModel.value.invStatus,
      this.formModel.value.invTime,
      this.formModel.value.monTransferMore,
      this.formModel.value.texContract,
      this.formModel.value.datExpiration,
      this.formModel.value.monExpiration,
      this.formModel.value.datRemain,
      this.formModel.value.tbeRemark,
      this.formModel.value.tbeStatus
    );


    //手动设置请求的类型
    // const httpOptions = {headers: new httpHeaders({ 'Content-Type': 'application/json' })};
    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
    // return this.http.put(url, JSON.stringify(info), headers).map(res => res.json());

    // this.PageService.postContactData('/api/doadd', JSON.stringify(info))
    // .subscribe((response) => {
    //   console.log('/api/doadd===' + JSON.stringify(info));
    //   // console.log('/api/doadd===' + JSON.stringify(response.json()));
    // })

    if (this.formModel.valid) {
      console.log(this.formModel.value);

      this.http.post('/api/doadd', info).subscribe((response) => {
        console.log('/api/doadd===' + JSON.stringify(info));
        console.log('/api/doadd===' + JSON.stringify(response.json()));
      })
      this.router.navigateByUrl('/contract');
    }

  }



}
