import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusValidatorComponent } from './status-validator.component';

describe('StatusValidatorComponent', () => {
  let component: StatusValidatorComponent;
  let fixture: ComponentFixture<StatusValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
