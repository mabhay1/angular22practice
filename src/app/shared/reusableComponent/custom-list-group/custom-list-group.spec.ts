import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomListGroup } from './custom-list-group';

describe('CustomListGroup', () => {
  let component: CustomListGroup;
  let fixture: ComponentFixture<CustomListGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomListGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomListGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
