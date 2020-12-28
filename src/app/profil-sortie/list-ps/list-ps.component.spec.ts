import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPsComponent } from './list-ps.component';

describe('ListPsComponent', () => {
  let component: ListPsComponent;
  let fixture: ComponentFixture<ListPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
