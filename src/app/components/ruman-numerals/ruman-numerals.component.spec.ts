import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RumanNumeralsComponent } from './ruman-numerals.component';

describe('RumanNumeralsComponent', () => {
  let component: RumanNumeralsComponent;
  let fixture: ComponentFixture<RumanNumeralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RumanNumeralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RumanNumeralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
