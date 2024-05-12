import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceHomeComponent } from './work-experience-home.component';

describe('WorkExperienceHomeComponent', () => {
  let component: WorkExperienceHomeComponent;
  let fixture: ComponentFixture<WorkExperienceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
