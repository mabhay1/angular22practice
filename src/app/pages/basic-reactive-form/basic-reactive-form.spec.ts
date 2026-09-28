import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicReactiveForm } from './basic-reactive-form';

describe('BasicReactiveForm', () => {
  let component: BasicReactiveForm;
  let fixture: ComponentFixture<BasicReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
