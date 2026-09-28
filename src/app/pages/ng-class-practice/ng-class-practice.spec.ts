import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgClassPractice } from './ng-class-practice';

describe('NgClassPractice', () => {
  let component: NgClassPractice;
  let fixture: ComponentFixture<NgClassPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(NgClassPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
