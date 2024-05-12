import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingThingsComponent } from './interesting-things.component';

describe('InterestingThingsComponent', () => {
  let component: InterestingThingsComponent;
  let fixture: ComponentFixture<InterestingThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingThingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestingThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
