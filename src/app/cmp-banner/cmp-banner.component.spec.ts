import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmpBannerComponent } from './cmp-banner.component';

describe('CmpBannerComponent', () => {
  let component: CmpBannerComponent;
  let fixture: ComponentFixture<CmpBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmpBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
