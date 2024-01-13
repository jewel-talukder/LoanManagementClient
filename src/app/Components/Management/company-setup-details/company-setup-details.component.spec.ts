import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySetupDetailsComponent } from './company-setup-details.component';

describe('CompanySetupDetailsComponent', () => {
  let component: CompanySetupDetailsComponent;
  let fixture: ComponentFixture<CompanySetupDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySetupDetailsComponent]
    });
    fixture = TestBed.createComponent(CompanySetupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
