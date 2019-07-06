import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, MatNativeDateModule, MatIconModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatGridListModule, MatToolbarModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { BranchordertrasnferComponent } from './branchordertrasnfer/branchordertrasnfer.component';
import { BranchorderdisplayComponent } from './branchorderdisplay/branchorderdisplay.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from 'app/inventorymanagement/inventory/inventory.component';


const adminrouting: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
  },

  { path: 'branchordertrasnfer', component: BranchordertrasnferComponent },
  { path: 'branchorderdisplay', component: BranchorderdisplayComponent },
  { path: 'salereport', component: SalesreportComponent },
  {path: 'inventory', component: InventoryComponent}
]
@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(adminrouting),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,

    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    // HttpClient,
    HttpClientModule


  ],
  exports: [BranchordertrasnferComponent, BranchorderdisplayComponent, SalesreportComponent],
  declarations: [DashboardComponent, BranchordertrasnferComponent, BranchorderdisplayComponent, InventoryComponent, SalesreportComponent]
})
export class AdminModule { }
