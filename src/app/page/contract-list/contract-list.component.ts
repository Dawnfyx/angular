import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router} from '@angular/router';
import { ContractService, Contract } from '../contract.service';
import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.less']
})
export class ContractListComponent implements OnInit {

  private contracts: Observable<Contract[]>;

  private  nameFilter: FormControl = new FormControl();

  private keywork: string;

  constructor(
    public router: Router,
    private ContractService: ContractService
  ) { }

  ngOnInit() {
    this.contracts = this.ContractService.getContracts();
    console.log('manage==' + this.contracts)
    this.nameFilter.valueChanges.subscribe(value => this.keywork = value);
  }

  create() {
    this.router.navigateByUrl('/contract/0');
  }

  update(contract: Contract) {
    this.router.navigateByUrl('/contract/' + contract.id);
  }

}
