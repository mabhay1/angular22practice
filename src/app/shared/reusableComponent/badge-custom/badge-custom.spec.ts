import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeCustom } from './badge-custom';

describe('BadgeCustom', () => {
  let component: BadgeCustom;
  let fixture: ComponentFixture<BadgeCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeCustom],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeCustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
