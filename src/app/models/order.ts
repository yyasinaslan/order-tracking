import {DeliveryState} from './delivery-state';
import {OrderState} from './order-state';

export interface Order {
  orderNo: number;
  shipmentTrackingNo: string;
  orderTrackingNo: string;
  customerName: string
  district: string
  plate: string,
  Statu: OrderState,
  releasedForDistribution: DeliveryState,
  Date: string
}
