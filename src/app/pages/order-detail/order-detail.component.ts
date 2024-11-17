import {Component, input} from '@angular/core';
import {Order} from '../../models/order';
import {JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [
    JsonPipe,
    RouterLink
  ],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
  host :{
    class: 'container block my-10'
  }
})
export class OrderDetailComponent {
  /**
   * Comes from route parameter
   */
  orderNo = input<number>();
  detail = input<Order>();

}
