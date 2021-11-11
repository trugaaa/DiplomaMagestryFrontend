import {Component} from '@angular/core';
import {AppCookieService} from "./services/app-cookie.service";
import {Router} from "@angular/router";
import {SubjectsService} from "./services/subjects.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Diploma';

  constructor(
    private subjectsService: SubjectsService,
    private cookieService: AppCookieService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.subjectsService.getSubjects().subscribe(
      () => {
        this.router.navigate(["dashboard"])
      }, error => {
        this.router.navigate(["login"])
        this.cookieService.deleteAllCookie()
      }
    );
  }
}
