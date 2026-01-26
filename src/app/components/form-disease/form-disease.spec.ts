import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisease } from './form-disease';

describe('FormDisease', () => {
  let component: FormDisease;
  let fixture: ComponentFixture<FormDisease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDisease]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDisease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
