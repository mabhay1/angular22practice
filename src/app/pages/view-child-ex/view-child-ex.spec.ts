import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewChildEx } from './view-child-ex';

describe('ViewChildEx', () => {
  let component: ViewChildEx;
  let fixture: ComponentFixture<ViewChildEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildEx],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChildEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
