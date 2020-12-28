import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpcComponent } from './add-grpc.component';

describe('AddGrpcComponent', () => {
  let component: AddGrpcComponent;
  let fixture: ComponentFixture<AddGrpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
