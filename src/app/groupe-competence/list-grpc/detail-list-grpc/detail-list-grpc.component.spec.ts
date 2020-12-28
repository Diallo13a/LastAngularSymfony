import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListGrpcComponent } from './detail-list-grpc.component';

describe('DetailListGrpcComponent', () => {
  let component: DetailListGrpcComponent;
  let fixture: ComponentFixture<DetailListGrpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailListGrpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListGrpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
