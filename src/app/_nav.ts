import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Menu',
    url: '/charts',
    

  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pencil'
  },
  {
    name: 'Gestion Des Clients',
    url: '/list-client',
    icon: 'icon-pencil'
  },

  {
    name: 'Gestion Des Produit',
    url: '/list-produit',
    icon: 'icon-pencil'
  },
  
  
  {
    name: 'Gestion Des Factures',
    url: '/facture',
    icon: 'icon-pencil'
  },
  
  {
    name: 'Commande',
    url: '/commande',
    icon: 'icon-pencil'
  },
  {
    name: 'Ligne Commande',
    url: '/ligne-commande',
    icon: 'icon-pencil'
  },
 
  

 
  {
    name: 'Mouvement De Stock',
    url: '',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Livraison',
        url: '/livraison',
        icon: 'icon-pencil'
      },
      {
        name: 'Stock',
        url: '/stock',
        icon: 'icon-pencil'
      },
      {
        name: 'Categorie',
        url: '/categorie',
        icon: 'icon-pencil'
      },
      
   
    ]
  },
  






   
   
   
    
  
];
