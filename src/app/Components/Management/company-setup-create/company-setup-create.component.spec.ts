import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySetupCreateComponent } from './company-setup-create.component';

describe('CompanySetupCreateComponent', () => {
  let component: CompanySetupCreateComponent;
  let fixture: ComponentFixture<CompanySetupCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySetupCreateComponent]
    });
    fixture = TestBed.createComponent(CompanySetupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
