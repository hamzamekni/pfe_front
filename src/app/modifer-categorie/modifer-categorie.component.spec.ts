import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferCategorieComponent } from './modifer-categorie.component';

describe('ModiferCategorieComponent', () => {
  let component: ModiferCategorieComponent;
  let fixture: ComponentFixture<ModiferCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiferCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiferCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
