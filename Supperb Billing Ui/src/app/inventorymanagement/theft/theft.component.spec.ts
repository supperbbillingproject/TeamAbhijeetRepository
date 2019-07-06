import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheftComponent } from './theft.component';

describe('TheftComponent', () => {
  let component: TheftComponent;
  let fixture: ComponentFixture<TheftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
