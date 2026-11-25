import { AnythingElse } from './anything-else/anything-else';
import { Directives } from './directives/directives';
import { DataBinding } from './data-binding/data-binding';
import { Home } from './home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | My CV' },
  { path: 'data-binding', component: DataBinding, title: 'Data Binding | My CV' },
  { path: 'directives', component: Directives, title: 'Directives | My CV' },
  { path: '**', component: AnythingElse, title: 'Page Not Found | My CV' }
];
