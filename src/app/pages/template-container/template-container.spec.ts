import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateContainer } from './template-container';

describe('TemplateContainer', () => {
  let component: TemplateContainer;
  let fixture: ComponentFixture<TemplateContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
