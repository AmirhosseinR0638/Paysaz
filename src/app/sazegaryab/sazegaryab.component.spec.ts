import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SazegaryabComponent } from './sazegaryab.component';

describe('SazegaryabComponent', () => {
  let component: SazegaryabComponent;
  let fixture: ComponentFixture<SazegaryabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SazegaryabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SazegaryabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
