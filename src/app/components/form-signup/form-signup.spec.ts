import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSignup } from './form-signup';

describe('FormSignup', () => {
  let component: FormSignup;
  let fixture: ComponentFixture<FormSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
