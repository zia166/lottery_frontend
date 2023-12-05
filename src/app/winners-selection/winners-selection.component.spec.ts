import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersSelectionComponent } from './winners-selection.component';

describe('WinnersSelectionComponent', () => {
  let component: WinnersSelectionComponent;
  let fixture: ComponentFixture<WinnersSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WinnersSelectionComponent]
    });
    fixture = TestBed.createComponent(WinnersSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
