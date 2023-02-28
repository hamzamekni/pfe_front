import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutCamionComponent } from './ajout-camion/ajout-camion.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { CamionComponent } from './camion/camion.component';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { ListClientComponent } from './list-client/list-client.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModifierCamionComponent } from './modifier-camion/modifier-camion.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';

import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthServiceService } from './auth-service.service';
import { FactureComponent } from './facture/facture.component';
import { AjoutFactureComponent } from './ajout-facture/ajout-facture.component';
import { ModifierFactureComponent } from './modifier-facture/modifier-facture.component';
import { ChartJSComponent } from './views/chartjs/chartjs.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
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

export const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent}, 
  {path: 'forgot-password', component: ForgotPasswordComponent}, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    children: [
      

      {path: 'list-client', component: ListClientComponent}, 
      {path: 'add-client', component: AjoutClientComponent}, 
      {path: 'charts', component: ChartJSComponent}, 

      {path: 'modif-client/:id', component: ModifierClientComponent}, 


      {path: 'list-produit', component: ListProduitComponent}, 
      {path: 'add-produit', component: AjoutProduitComponent}, 
      {path: 'modif-produit/:id', component: ModifierProduitComponent}, 




      {path: 'facture', component: FactureComponent}, 
      {path: 'add-facture', component: AjoutFactureComponent}, 
      {path: 'modifier-facture/:id', component: ModifierFactureComponent},


      
      {path: 'livraison', component: LivraisonComponent},
      {path: 'add-livraison', component: AjoutLivraisonComponent}, 
      {path: 'modifier-livraison/:id', component: ModifierLivraisonComponent},


      
      {path: 'commande', component: CommandeComponent},
      {path: 'add-commande', component: AjoutCommandeComponent},
      {path: 'modifier-commande/:id', component: ModifierCommandeComponent},

      
      {path: 'ligne-commande', component: LigneCommandeComponent},
      {path: 'add-ligneCommande', component: AjoutLigneCommandeComponent},
      {path: 'modifier-ligneCommande/:id', component: ModifierLigneCommandeComponent},

      
      {path: 'stock', component: StockComponent},
      {path: 'add-stock', component: AjoutStockComponent},
      {path: 'modifier-stock/:id', component: ModifierStockComponent},

      
      {path: 'categorie', component: CategorieComponent},
      {path: 'add-categorie', component: AjoutCategorieComponent },
      {path: 'modifier-categorie/:id', component: ModiferCategorieComponent},


      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
