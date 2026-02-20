import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { AboutPage } from './pages/about/about-page';
import { AdminPage } from './pages/admin/admin-page';
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
    {
    path: 'admin',
    component: AdminPage,
  },
];