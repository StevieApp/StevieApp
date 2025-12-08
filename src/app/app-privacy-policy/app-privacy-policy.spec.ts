import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrivacyPolicy } from './app-privacy-policy';

describe('AppPrivacyPolicy', () => {
  let component: AppPrivacyPolicy;
  let fixture: ComponentFixture<AppPrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrivacyPolicy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
