import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUpdateBulkCity } from './add-update-bulk-city';

describe('AddUpdateBulkCity', () => {
  let component: AddUpdateBulkCity;
  let fixture: ComponentFixture<AddUpdateBulkCity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateBulkCity],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUpdateBulkCity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
