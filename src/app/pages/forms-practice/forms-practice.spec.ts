import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsPractice } from './forms-practice';

describe('FormsPractice', () => {
  let component: FormsPractice;
  let fixture: ComponentFixture<FormsPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
