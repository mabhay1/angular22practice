import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudLocalStorage } from './crud-local-storage';

describe('CrudLocalStorage', () => {
  let component: CrudLocalStorage;
  let fixture: ComponentFixture<CrudLocalStorage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLocalStorage],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudLocalStorage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
