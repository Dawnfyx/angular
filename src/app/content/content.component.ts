import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  pageReturn = '返回';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  return () {
    this.router.navigateByUrl('/contract');
  }

}
