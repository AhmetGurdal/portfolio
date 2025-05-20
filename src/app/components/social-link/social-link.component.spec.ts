import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkComponent } from './social-link.component';

describe('SocialLinkComponent', () => {
  let component: SocialLinkComponent;
  let fixture: ComponentFixture<SocialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
