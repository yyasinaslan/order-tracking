import {Component, input} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
  host: {
    class: 'block overflow-hidden h-5 bg-slate-100 rounded-full relative flex items-center justify-center',
    '[style]': '{"--value": value() + "%"}'
  }
})
export class ProgressbarComponent {
  value = input(0);
}
