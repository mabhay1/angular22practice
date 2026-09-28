import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentResuableComponent } from './parent-resuable-component';

describe('ParentResuableComponent', () => {
  let component: ParentResuableComponent;
  let fixture: ComponentFixture<ParentResuableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentResuableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentResuableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
