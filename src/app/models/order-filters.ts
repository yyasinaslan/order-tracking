export interface OrderFilters {
  shipmentTrackingNo: string | null,
  orderNo: string | null,
  plate: string | null,
  dateRange: [Date, Date] | null,
  state: string | null,
  deliveryState: string | null,
}
