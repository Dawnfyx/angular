import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContractListComponent } from './page/contract-list/contract-list.component';
import { ContractFormComponent } from './page/contract-form/contract-form.component';
import { UserComponent } from './page/user/user.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ContractService} from './page/contract.service';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contract', component: ContractListComponent},
  {path: 'contract/:id', component: ContractFormComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    UserComponent,
    DashboardComponent,
    ContractListComponent,
    ContractFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
