import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: "registration-page.component.html",
  styleUrls: ["registration-page.component.scss"]
})
export class RegistrationPageComponent {
  username: string = ""
  email: string = ""
  password: string = ""
  confirmPassword: string = ""

  constructor(private router: Router) {
  }

  onRegistration() {
    this.router.navigate([""])
  }
}
