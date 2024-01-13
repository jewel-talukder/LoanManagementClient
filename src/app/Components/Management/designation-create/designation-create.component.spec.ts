import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationCreateComponent } from './designation-create.component';

describe('DesignationCreateComponent', () => {
  let component: DesignationCreateComponent;
  let fixture: ComponentFixture<DesignationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignationCreateComponent]
    });
    fixture = TestBed.createComponent(DesignationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
