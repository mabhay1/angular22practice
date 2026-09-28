import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusVendor } from './bus-vendor';

describe('BusVendor', () => {
  let component: BusVendor;
  let fixture: ComponentFixture<BusVendor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusVendor],
    }).compileComponents();

    fixture = TestBed.createComponent(BusVendor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
