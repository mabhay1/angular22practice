import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgifPractice } from './ngif-practice';

describe('NgifPractice', () => {
  let component: NgifPractice;
  let fixture: ComponentFixture<NgifPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(NgifPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
