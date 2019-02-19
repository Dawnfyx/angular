import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFromComponent } from './contract-from.component';

describe('ContractFromComponent', () => {
  let component: ContractFromComponent;
  let fixture: ComponentFixture<ContractFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
