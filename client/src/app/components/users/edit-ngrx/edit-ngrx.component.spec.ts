import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNgrxComponent } from './edit-ngrx.component';

describe('EditNgrxComponent', () => {
  let component: EditNgrxComponent;
  let fixture: ComponentFixture<EditNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
