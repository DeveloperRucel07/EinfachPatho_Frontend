import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseDetail } from './disease-detail';

describe('DiseaseDetail', () => {
  let component: DiseaseDetail;
  let fixture: ComponentFixture<DiseaseDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseaseDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseaseDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
