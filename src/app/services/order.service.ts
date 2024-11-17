import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../env/env';
import {Summary} from '../models/summary';
import {OrderFilters} from '../models/order-filters';
import {Pagination} from '../models/pagination';
import {Order} from '../models/order';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  http = inject(HttpClient);


  getSummary() {
    return this.http.get<Summary>(`${environment.API_URL}/summary`)
  }

  getOrders(pagination: Pagination, filters?: OrderFilters | null) {
    let appliedFilters: any = {};
    if (filters?.shipmentTrackingNo) {
      appliedFilters.shipmentTrackingNo_like = filters.shipmentTrackingNo;
    }
    if (filters?.orderNo) appliedFilters.orderNo_like = filters.orderNo;
    if (filters?.plate) appliedFilters['plate_like'] = filters.plate;
    if (filters && typeof filters.state === 'number' && filters.state >= 0) appliedFilters.Statu = filters.state;
    if (filters?.deliveryState) appliedFilters.releasedForDistribution = filters.deliveryState;
    if (filters?.dateRange && filters.dateRange.length === 2) {
      appliedFilters["Date_gte"] = filters.dateRange[0].toISOString();
      appliedFilters["Date_lte"] = filters.dateRange[1].toISOString();
    }
    return this.http.get<Order[]>(`${environment.API_URL}/orders`, {
      params: {
        _page: pagination.page,
        _limit: pagination.limit,
        ...appliedFilters
      },
      observe: "response"
    }).pipe(map(response => {
      const body = response.body;
      const total = response.headers.get('x-total-count');
      return {
        data: body ?? [],
        items: Number(total ?? 0)
      }
    }))

  }

  getOrder(orderNo: number) {
    return this.http.get<Order[]>(`${environment.API_URL}/orders`, {
      params: {
        orderNo: orderNo
      }
    }).pipe(map(response => {
      if (response.length > 0) {
        return response[0];
      }
      return null;
    }));
  }

}
