import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter} from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  //构造器
  constructor(public  router: Router) {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    // subscribe错误目前不知道怎么解决
    ).subscribe(
      (event: NavigationEnd) => {
          console.log('event==' + event)
          // if(event.url === '/dashboard'){
          //   this.pageTitle = '这里是首页';
          //   this.pageDesc = '';
          // } else if (event.url.startsWith('/stock')) {
          //   this.pageTitle = '股票信息管理';
          //   this.pageDesc = '进行股票信息基本增删改查';
          // }
        },
        error => console.log('error==' + error),
        () => console.log('subscribe结束了')
      )
    );
  }

  ngOnInit() {
  }

}
