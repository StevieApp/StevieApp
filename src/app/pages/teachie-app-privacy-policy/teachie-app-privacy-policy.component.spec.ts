import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachieAppPrivacyPolicyComponent } from './teachie-app-privacy-policy.component';

describe('TeachieAppPrivacyPolicyComponent', () => {
  let component: TeachieAppPrivacyPolicyComponent;
  let fixture: ComponentFixture<TeachieAppPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachieAppPrivacyPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachieAppPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
