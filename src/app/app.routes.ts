import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page';
import { AboutPage } from './pages/about/about-page';
import { AdminPage } from './pages/admin/admin-page';
import { BaseLayout } from './layouts/base-layout/base-layout';
export const routes: Routes = [
  {
    path: '',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'about',
        component: AboutPage,
      },
    ]
  },
];
