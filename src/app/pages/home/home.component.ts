import {Component, inject, model, OnInit, signal} from '@angular/core';
import {DashboardCardComponent} from '../../components/dashboard-card/dashboard-card.component';
import {ProgressbarComponent} from '../../components/progressbar/progressbar.component';
import {FilterFormComponent} from '../../components/filter-form/filter-form.component';
import {OrderFilters} from '../../models/order-filters';
import {BehaviorSubject} from 'rxjs';
import {Order} from '../../models/order';
import {Summary} from '../../models/summary';
import {PanelModule} from 'primeng/panel';
import {AsyncPipe, DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {orderStateLabels} from '../../models/order-state';
import {MaskedNamePipe} from '../../pipes/masked-name.pipe';
import {PaginatorModule, PaginatorState} from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DashboardCardComponent,
    ProgressbarComponent,
    FilterFormComponent,
    PanelModule,
    AsyncPipe,
    RouterLink,
    DatePipe,
    MaskedNamePipe,
    PaginatorModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    class: 'block container'
  }
})
export class HomeComponent implements OnInit {
  orderService = inject(OrderService)

  filtersCollapsed = model(false)
  filter = signal<OrderFilters | null>(null)
  page = signal(1)
  limit = signal(10)
  itemCount = signal(1);

  summaryData = new BehaviorSubject<Summary | null>(null);

  tableData = new BehaviorSubject<Order[]>([]);

  loadSummary() {
    this.orderService.getSummary().subscribe(summary => {
      this.summaryData.next(summary);
    })
  }

  loadData() {
    this.orderService.getOrders({
      page: this.page(),
      limit: this.limit(),
    }, this.filter() ?? undefined).subscribe(orders => {
      this.tableData.next(orders.data);
      this.itemCount.set(orders.items);
    })
  }

  ngOnInit(): void {
    this.loadSummary();
    this.loadData();
  }

  protected readonly orderStateLabels = orderStateLabels;

  onPageChange(event: PaginatorState) {
    console.log('page changed', event)
    if (event.page !== undefined) {
      this.page.set(event.page + 1);
    }
    if (event.rows !== undefined) {
      this.limit.set(event.rows);
    }
    this.loadData();
  }

  changeFilters(event: OrderFilters) {
    this.filter.set(event);
    this.loadData();
  }
}
