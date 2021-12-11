import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolationScoresComponent } from './consolation-scores.component';

describe('ConsolationScoresComponent', () => {
  let component: ConsolationScoresComponent;
  let fixture: ComponentFixture<ConsolationScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolationScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolationScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
