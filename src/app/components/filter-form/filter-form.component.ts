import {Component, output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {orderStates} from '../../models/order-state';
import {deliveryStates} from '../../models/delivery-state';
import {OrderFilters} from '../../models/order-filters';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CalendarModule
  ],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FilterFormComponent {


  filterApplied = output<OrderFilters>();


  filterForm = new FormGroup({
    shipmentTrackingNo: new FormControl(''),
    orderNo: new FormControl(''),
    plate: new FormControl(''),
    dateRange: new FormControl<[Date, Date] | null>(null),
    state: new FormControl(''),
    deliveryState: new FormControl(''),
  })

  applyFilter() {
    if (this.filterForm.invalid) return;

    this.filterApplied.emit(this.filterForm.getRawValue());
  }

  clearFilter() {
    this.filterForm.reset();
    this.filterApplied.emit(this.filterForm.getRawValue());
  }

  protected readonly orderStates = orderStates;
  protected readonly deliveryStates = deliveryStates;
  compareState = (a: number, b: number) => {
    return a === b;
  };
}
