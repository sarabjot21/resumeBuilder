import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsLayoutComponent } from './personal-details-layout.component';

describe('PersonalDetailsLayoutComponent', () => {
  let component: PersonalDetailsLayoutComponent;
  let fixture: ComponentFixture<PersonalDetailsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
