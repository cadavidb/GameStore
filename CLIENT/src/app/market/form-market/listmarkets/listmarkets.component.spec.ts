import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmarketsComponent } from './listmarkets.component';

describe('ListmarketsComponent', () => {
  let component: ListmarketsComponent;
  let fixture: ComponentFixture<ListmarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmarketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
