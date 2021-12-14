import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarketComponent } from './form-market.component';

describe('FormMarketComponent', () => {
  let component: FormMarketComponent;
  let fixture: ComponentFixture<FormMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
