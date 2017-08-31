import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchProductComponent } from './input-search-product.component';

describe('InputSearchProductComponent', () => {
  let component: InputSearchProductComponent;
  let fixture: ComponentFixture<InputSearchProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
