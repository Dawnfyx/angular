import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ContractComponent } from './page/contract/contract.component';
import { UserComponent } from './page/user/user.component';
import { PageFilterPipe } from './page/page-filter.pipe';
import { PageServiceService} from './page/page-service.service';
import { ContractFromComponent } from './page/contract-from/contract-from.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// 路由
const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract/:id', component: ContractFromComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    ContractComponent,
    ContractFromComponent,
    UserComponent,
    PageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [PageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
