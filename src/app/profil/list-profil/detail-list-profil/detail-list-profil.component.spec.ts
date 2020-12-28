import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListProfilComponent } from './detail-list-profil.component';

describe('DetailListProfilComponent', () => {
  let component: DetailListProfilComponent;
  let fixture: ComponentFixture<DetailListProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailListProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
