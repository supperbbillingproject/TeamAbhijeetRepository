import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrekagesComponent } from './brekages.component';

describe('BrekagesComponent', () => {
  let component: BrekagesComponent;
  let fixture: ComponentFixture<BrekagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrekagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrekagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
