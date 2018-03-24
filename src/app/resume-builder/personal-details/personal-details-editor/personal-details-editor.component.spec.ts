import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsEditorComponent } from './personal-details-editor.component';

describe('PersonalDetailsEditorComponent', () => {
  let component: PersonalDetailsEditorComponent;
  let fixture: ComponentFixture<PersonalDetailsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
