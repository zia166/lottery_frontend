import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryEntriesComponent } from './lottery-entries.component';

describe('LotteryEntriesComponent', () => {
  let component: LotteryEntriesComponent;
  let fixture: ComponentFixture<LotteryEntriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotteryEntriesComponent]
    });
    fixture = TestBed.createComponent(LotteryEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
