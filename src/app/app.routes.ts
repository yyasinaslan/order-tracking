import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {OrderDetailComponent} from './pages/order-detail/order-detail.component';
import {orderDetailResolver} from './resolvers/order-detail.resolver';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Sipariş Kontrol Ekranı'
  },
  {
    path: 'detail/:orderNo',
    resolve: {detail: orderDetailResolver},
    component: OrderDetailComponent,
    title: 'Sipariş Detayı'
  },
  {
    path: '**',
    redirectTo: '',
  }
];
