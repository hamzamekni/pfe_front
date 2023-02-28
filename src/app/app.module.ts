import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { AjoutCamionComponent } from './ajout-camion/ajout-camion.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { CamionComponent } from './camion/camion.component';
import { ModifierCamionComponent } from './modifier-camion/modifier-camion.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FactureComponent } from './facture/facture.component';
import { AjoutFactureComponent } from './ajout-facture/ajout-facture.component';
import { ModifierFactureComponent } from './modifier-facture/modifier-facture.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ModifierLivraisonComponent } from './modifier-livraison/modifier-livraison.component';
import { AjoutLivraisonComponent } from './ajout-livraison/ajout-livraison.component';
import { CommandeComponent } from './commande/commande.component';
import { ModifierCommandeComponent } from './modifier-commande/modifier-commande.component';
import { AjoutCommandeComponent } from './ajout-commande/ajout-commande.component';
import { LigneCommandeComponent } from './ligne-commande/ligne-commande.component';
import { AjoutLigneCommandeComponent } from './ajout-ligne-commande/ajout-ligne-commande.component';
import { ModifierLigneCommandeComponent } from './modifier-ligne-commande/modifier-ligne-commande.component';
import { StockComponent } from './stock/stock.component';
import { AjoutStockComponent } from './ajout-stock/ajout-stock.component';
import { ModifierStockComponent } from './modifier-stock/modifier-stock.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { ModiferCategorieComponent } from './modifer-categorie/modifer-categorie.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    NgToastModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
  
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,

    CamionComponent,
    AjoutCamionComponent,
    ModifierCamionComponent,
    ListClientComponent,
    AjoutClientComponent,
    ListProduitComponent,
    AjoutProduitComponent,
    ModifierProduitComponent,
    ModifierClientComponent,
    ForgotPasswordComponent,
    FactureComponent,
    AjoutFactureComponent,
    ModifierFactureComponent,
    LivraisonComponent,
    ModifierLivraisonComponent,
    AjoutLivraisonComponent,
    CommandeComponent,
    ModifierCommandeComponent,
    AjoutCommandeComponent,
    LigneCommandeComponent,
    AjoutLigneCommandeComponent,
    ModifierLigneCommandeComponent,
    StockComponent,
    AjoutStockComponent,
    ModifierStockComponent,
    CategorieComponent,
    AjoutCategorieComponent,
    ModiferCategorieComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
