import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {inject, Injectable} from '@angular/core';
import {TitleService} from './title.service';
import {Title} from '@angular/platform-browser';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  titleService = inject(TitleService)
  title = inject(Title);

  updateTitle(snapshot: RouterStateSnapshot): void {

    const title = this.buildTitle(snapshot) ?? 'Order Tracking';

    this.titleService.setTitle(title);

    // Set document title
    this.title.setTitle(`BRAND - ${title}`);
  }

}
