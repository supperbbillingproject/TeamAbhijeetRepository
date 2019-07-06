import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectreceivingComponent } from './incorrectreceiving.component';

describe('IncorrectreceivingComponent', () => {
  let component: IncorrectreceivingComponent;
  let fixture: ComponentFixture<IncorrectreceivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectreceivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectreceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
