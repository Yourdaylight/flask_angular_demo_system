import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(
    private router: Router,
    private location: Location,
    public eventService: EventService,
  ) { }

  goToLogin() {
    this.navigate('/login');
  }

  // tslint:disable-next-line:ban-types
  navigate(path: String, ext?: any) {
    // 默认不记录历史
    // let defaultExt = { skipLocationChange: true };
    // ext = ext == null ? defaultExt : Object.assign(ext, defaultExt);
    this.router.navigate([path], ext);
  }

  back() {
    //history.back();
  this.location.back();

  }

  backTo(url) {
    if (url === '/tabs/business') {
      this.eventService.event.emit('load-business');
    }
    this.router.navigateByUrl(url);
  }
}
