import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthApiService} from "../../services/auth-api.service";

@Component({
  templateUrl: "login-page.component.html",
  styleUrls: ["login-page.component.scss"]
})
export class LoginPageComponent {
  username: string = ""
  password: string = ""

  constructor(private router: Router, private authApiService: AuthApiService) {
  }

  onLogin() {
    this.authApiService.login(this.username, this.password).subscribe(response => {
      response.token
    }, error => {
      if (error.statusCode) {
      }
    })
  }
}
