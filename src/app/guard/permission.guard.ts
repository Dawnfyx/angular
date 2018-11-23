import {CanActivate} from '@angular/router';

export class PermissionGuard implements  CanActivate {
  canActivate() {
    var hasPermission: boolean = Math.random() < 0.5;
    if (hasPermission) {
      console.log('用户可以访问');
    } else {
      console.log('用户无权访问');
    }
    return hasPermission;
  }
}
