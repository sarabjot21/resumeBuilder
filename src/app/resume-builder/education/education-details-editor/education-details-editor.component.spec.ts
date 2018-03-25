import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsEditorComponent } from './education-details-editor.component';

describe('EducationDetailsEditorComponent', () => {
  let component: EducationDetailsEditorComponent;
  let fixture: ComponentFixture<EducationDetailsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDetailsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
