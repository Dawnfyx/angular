import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu>;

  currentMenuId: number;

  constructor(public router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(0, '仪表板', 'dashboard'),
      new Menu(1, '合同管理', 'contract'),
      new Menu(2, '用户管理', 'user')
    ];
  }
  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor(public id: number, public name: string, public link: string) {

  }
}
