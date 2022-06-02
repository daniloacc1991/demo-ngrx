import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNgrxComponent } from './list-ngrx.component';

describe('ListNgrxComponent', () => {
  let component: ListNgrxComponent;
  let fixture: ComponentFixture<ListNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
