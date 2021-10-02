import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class AppCookieService {
  constructor(private cookieService: CookieService) {}

  setCookie(key: string, value: string | undefined) {
    if (typeof value === "string") {
      this.cookieService.set(key, value);
    }
  }

  deleteCookie(key: string) {
    this.cookieService.delete(key);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }
}
