import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignImages } from './design-images';

describe('DesignImages', () => {
  let component: DesignImages;
  let fixture: ComponentFixture<DesignImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
