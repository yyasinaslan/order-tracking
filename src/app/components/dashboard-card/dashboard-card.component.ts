import {Component, input} from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
  host: {
    class: 'rounded-lg bg-blue-100 p-3 md:p-6 shadow-sm',
  }
})
export class DashboardCardComponent {
  title = input.required<string>();
  value = input.required<string | number>();
}
