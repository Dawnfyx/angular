import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router} from '@angular/router';
import { Contract, PageServiceService } from '../page-service.service';
import { Observable } from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.less']
})
export class ContractComponent implements OnInit {

  private contracts: Observable<Contract[]>;

  private  nameFilter: FormControl = new FormControl();

  private keywork: string;

  constructor(public router: Router, private pageService: PageServiceService) { }

  ngOnInit() {
    this.contracts = this.pageService.getContracts();
    console.log('manage==' + this.contracts)
    this.nameFilter.valueChanges
    // .subscribe(value => {
    //    console.log('value==' + value);
    //})
    // .debounceTime(500)
      .subscribe(value => this.keywork = value);
  }

  create() {
    this.router.navigateByUrl('/contract/0');
  }

  update(contract: Contract) {
    this.router.navigateByUrl('/contract/' + contract.id);
  }

}

