import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseCard } from './disease-card';

describe('DiseaseCard', () => {
  let component: DiseaseCard;
  let fixture: ComponentFixture<DiseaseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiseaseCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiseaseCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
