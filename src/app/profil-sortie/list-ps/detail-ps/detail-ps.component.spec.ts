import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPsComponent } from './detail-ps.component';

describe('DetailPsComponent', () => {
  let component: DetailPsComponent;
  let fixture: ComponentFixture<DetailPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
