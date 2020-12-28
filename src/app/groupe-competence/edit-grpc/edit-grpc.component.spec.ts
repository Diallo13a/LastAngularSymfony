import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpcComponent } from './edit-grpc.component';

describe('EditGrpcComponent', () => {
  let component: EditGrpcComponent;
  let fixture: ComponentFixture<EditGrpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
