import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpcComponent } from './list-grpc.component';

describe('ListGrpcComponent', () => {
  let component: ListGrpcComponent;
  let fixture: ComponentFixture<ListGrpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
