import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./layout/sidebar-layout/sidebar-layout.component').then(m => m.SidebarLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./components/users/users.component').then(m => m.UsersComponent)
      },
      {
        path: 'authors',
        loadComponent: () =>
          import('./components/authors/authors.component').then(m => m.AuthorsComponent)
      },
      {
        path: 'articles',
        loadComponent: () =>
          import('./components/articles/articles.component').then(m => m.ArticlesComponent)
      },
      {
        path: 'advertisement',
        loadComponent: () =>
          import('./components/advertisement/advertisement.component').then(m => m.AdvertisementComponent)
      },
      {
        path: 'advertisement',
        loadComponent: () =>
          import('./components/settings/settings.component').then(m => m.SettingsComponent)
      }
    ]
  }
];
