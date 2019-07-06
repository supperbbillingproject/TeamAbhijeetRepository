import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvershipmentComponent } from './overshipment.component';

describe('OvershipmentComponent', () => {
  let component: OvershipmentComponent;
  let fixture: ComponentFixture<OvershipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvershipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvershipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
