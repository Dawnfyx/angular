import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { RouterModule, Routes} from '@angular/router';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {StockService} from './stock/stock.service';
import { StockFilerPipe } from './stock/stock-filer.pipe';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    StockFormComponent,
    DashboardComponent,
    StockFilerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
