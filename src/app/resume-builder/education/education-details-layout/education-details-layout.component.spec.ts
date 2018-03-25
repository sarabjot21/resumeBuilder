import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsLayoutComponent } from './education-details-layout.component';

describe('EducationDetailsLayoutComponent', () => {
  let component: EducationDetailsLayoutComponent;
  let fixture: ComponentFixture<EducationDetailsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDetailsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
