import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAccessibleComponent } from './not-accessible.component';

describe('NotAccessibleComponent', () => {
  let component: NotAccessibleComponent;
  let fixture: ComponentFixture<NotAccessibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAccessibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotAccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
