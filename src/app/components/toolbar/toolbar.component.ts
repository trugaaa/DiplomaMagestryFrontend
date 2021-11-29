import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService, UserType} from "../../services/user.service";

@Component({
  selector: "toolbar-menu-main",
  templateUrl: "toolbar.component.html",
  styleUrls: ["toolbar.component.scss"]
})
export class ToolbarComponent {
  userTypes = UserType

  constructor(private router: Router, public userService: UserService) {
  }

  onLogout() {
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
