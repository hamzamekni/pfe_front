import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCamionComponent } from './ajout-camion.component';

describe('AjoutCamionComponent', () => {
  let component: AjoutCamionComponent;
  let fixture: ComponentFixture<AjoutCamionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCamionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
