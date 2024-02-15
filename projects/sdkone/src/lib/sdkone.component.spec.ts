import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkoneComponent } from './sdkone.component';

describe('SdkoneComponent', () => {
  let component: SdkoneComponent;
  let fixture: ComponentFixture<SdkoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
