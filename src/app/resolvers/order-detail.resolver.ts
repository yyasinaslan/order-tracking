import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Observable} from 'rxjs';
import {Order} from '../models/order';

export const orderDetailResolver: ResolveFn<Observable<Order | null>> = (route, state) => {
  const orderService = inject(OrderService);
  const orderNo = route.params['orderNo'];

  return orderService.getOrder(orderNo);
};
