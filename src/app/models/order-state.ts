export enum OrderState {
  CREATED = 0,
  CANCELLED = 1,
  DELIVERED = 2,
  PENDING = 3,
  CANNOT_DELIVERED = 4,
}

export const orderStateLabels = {
  [OrderState.CREATED]: 'Oluşturuldu',
  [OrderState.CANCELLED]: 'İptal Edildi',
  [OrderState.DELIVERED]: 'Teslim Edildi',
  [OrderState.PENDING]: 'Bekliyor',
  [OrderState.CANNOT_DELIVERED]: 'Teslim Edilemedi',
}

export const orderStates = [
  {label: 'Oluşturuldu', value: OrderState.CREATED},
  {label: 'İptal Edildi', value: OrderState.CANCELLED},
  {label: 'Teslim Edildi', value: OrderState.DELIVERED},
  {label: 'Bekliyor', value: OrderState.PENDING},
  {label: 'Teslim Edilemedi', value: OrderState.CANNOT_DELIVERED},
]

