import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicSignalForm } from './basic-signal-form';

describe('BasicSignalForm', () => {
  let component: BasicSignalForm;
  let fixture: ComponentFixture<BasicSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSignalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
