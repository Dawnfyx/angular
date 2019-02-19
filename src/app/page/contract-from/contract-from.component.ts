import {Component, OnInit} from '@angular/core';
import { Contract, PageServiceService} from '../page-service.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-contract-from',
  templateUrl: './contract-from.component.html',
  styleUrls: ['./contract-from.component.less']
})
export class ContractFromComponent implements OnInit {

  contract: Contract;
  private router: any;

  createUser(info: any) {
    console.log(info);
  }

  constructor(private  routeInfo: ActivatedRoute, private PageService: PageServiceService ) { }

  ngOnInit() {
    let contractId = this.routeInfo.snapshot.params['id'];
    this.PageService.getContract(contractId);
  }

  cancel() {
    this.router.navigateByUrl('/contract');
  }
  save() {

  }
}
