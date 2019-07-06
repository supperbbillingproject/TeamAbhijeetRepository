import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { LoginComponent } from './login/login.component';
import { SharedService } from './Shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule } from '@angular/material';
import { OvershipmentComponent } from './inventorymanagement/overshipment/overshipment.component';
import { IncorrectreceivingComponent } from './inventorymanagement/incorrectreceiving/incorrectreceiving.component';
import { BrekagesComponent } from './inventorymanagement/brekages/brekages.component';
import { WastagesComponent } from './inventorymanagement/wastages/wastages.component';
import { LossComponent } from './inventorymanagement/loss/loss.component';
import { TheftComponent } from './inventorymanagement/theft/theft.component';
// import {  MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
    // MaterialModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    OvershipmentComponent,
    IncorrectreceivingComponent,
    BrekagesComponent,
    WastagesComponent,
    LossComponent,
    TheftComponent
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
