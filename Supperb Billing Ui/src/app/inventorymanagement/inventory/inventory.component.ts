import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'app/Shared/shared.service';
import { MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];




@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // tslint:disable-next-line:member-ordering
  currentselected: string;
  // tslint:disable-next-line:member-ordering
  selected = 'option2';
  constructor(private route: Router, private shared: SharedService) { }
  // tslint:disable-next-line:member-ordering
  items: any[];
  ngOnInit() {
  }


  backpage() {
    console.log('back to dashboard');
    this.route.navigateByUrl('role/admin/dashboard');
  }

  savedata() {
    console.log('savedata to shared service');
    this.route.navigateByUrl('role/admin/dashboard');
  }

  onselect() {
    console.log('success' + this.selected);
    this.currentselected = this.selected;
    console.log(this.currentselected);
    if (this.currentselected === 'overshipment') {
      console.log('aaa');
    }

    if (this.currentselected === 'incorrect') {
      console.log('bbb');


    }

    if (this.currentselected === 'brakages') {
      console.log('ccc');


    }

    if (this.currentselected === 'wastages') {
      console.log('ddd');


    }

    if (this.currentselected === 'theft') {
      console.log('eee');


    }

    if (this.currentselected === 'loss') {
      console.log('fff');


    }

  }
}
