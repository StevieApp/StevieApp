import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachieAppPrivacyPolicy } from './teachie-app-privacy-policy';

describe('TeachieAppPrivacyPolicy', () => {
  let component: TeachieAppPrivacyPolicy;
  let fixture: ComponentFixture<TeachieAppPrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachieAppPrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachieAppPrivacyPolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
