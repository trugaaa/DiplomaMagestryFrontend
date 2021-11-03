import {Component} from '@angular/core';
import {AuthApiService} from "./services/auth-api.service";
import {AppCookieService} from "./services/app-cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diploma';

  constructor(private authApiService: AuthApiService, private cookieService: AppCookieService, private router: Router) {

  }
}
