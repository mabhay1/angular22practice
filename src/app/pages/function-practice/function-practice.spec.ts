import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FunctionPractice } from './function-practice';

describe('FunctionPractice', () => {
  let component: FunctionPractice;
  let fixture: ComponentFixture<FunctionPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(FunctionPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
