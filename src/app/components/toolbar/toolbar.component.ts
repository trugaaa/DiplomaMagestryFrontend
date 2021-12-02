import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService, UserType} from "../../services/user.service";
import {CookieService} from "ngx-cookie-service";
import {AppCookieService} from "../../services/app-cookie.service";

@Component({
  selector: "toolbar-menu-main",
  templateUrl: "toolbar.component.html",
  styleUrls: ["toolbar.component.scss"]
})
export class ToolbarComponent {
  userTypes = UserType

  constructor(private router: Router,
              public userService: UserService,
              private cookieService: AppCookieService) {
  }

  onLogout() {
    this.cookieService.deleteAllCookie();
    this.router.navigate(["login"])
  }

  goToDashboard() {
    this.router.navigate(["dashboard"])
  }

  goToUsersPage() {
    this.router.navigate(["users"])
  }

  goToGroupsPage() {
    this.router.navigate(["groups"])
  }
}
