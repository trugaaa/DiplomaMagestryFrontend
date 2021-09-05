import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthApiService} from "../../services/auth-api.service";
import {Login} from "../../models/authorization";

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
    this.authApiService.login({userName: this.username, password: this.password}).subscribe(response => {
      this.router.navigate([""])
      console.log(response.token)
    }, error => {
      if (error.statusCode) {
        console.log(error.statusCode)
      }
    })
  }
}
