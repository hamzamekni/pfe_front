import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLigneCommandeComponent } from './ajout-ligne-commande.component';

describe('AjoutLigneCommandeComponent', () => {
  let component: AjoutLigneCommandeComponent;
  let fixture: ComponentFixture<AjoutLigneCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutLigneCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutLigneCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
