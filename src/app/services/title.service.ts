import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private readonly _title = new BehaviorSubject('Order Tracking');

  public title$ = this._title.asObservable();

  public setTitle(title: string): void {
    this._title.next(title);
  }


}
