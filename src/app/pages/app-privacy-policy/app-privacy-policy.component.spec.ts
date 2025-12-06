import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPrivacyPolicyComponent } from './app-privacy-policy.component';

describe('AppPrivacyPolicyComponent', () => {
  let component: AppPrivacyPolicyComponent;
  let fixture: ComponentFixture<AppPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPrivacyPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
