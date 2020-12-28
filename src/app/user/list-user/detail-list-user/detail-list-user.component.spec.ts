import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListUserComponent } from './detail-list-user.component';

describe('DetailListUserComponent', () => {
  let component: DetailListUserComponent;
  let fixture: ComponentFixture<DetailListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
