import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthApiService} from "../../services/auth-api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppCookieService} from "../../services/app-cookie.service";

@Component({
  templateUrl: "login-page.component.html",
  styleUrls: ["login-page.component.scss"]
})
export class LoginPageComponent {
  constructor(private router: Router, private authApiService: AuthApiService, private cookieService: AppCookieService) {
  }

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  onLogin() {
    this.authApiService.login({
      userName: this.loginForm.controls["username"].value,
      password: this.loginForm.controls["password"].value
    }).subscribe(response => {
      this.cookieService.setCookie("token", response.token)
      this.cookieService.setCookie("role", response.userRole)
      this.router.navigate([""])
    }, error => {
      if (error.statusCode) {
        console.log(error.statusCode)
      }
    })
  }
}
