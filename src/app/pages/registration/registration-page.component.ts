import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Login, Registration} from "../../models/authorization";
import {AuthApiService} from "../../services/auth-api.service";

@Component({
  templateUrl: "registration-page.component.html",
  styleUrls: ["registration-page.component.scss"]
})
export class RegistrationPageComponent {
  username: string = ""
  email: string = ""
  password: string = ""
  confirmPassword: string = ""

  constructor(private router: Router, private authApiService: AuthApiService) {
  }

  onRegistration() {
    this.authApiService.registration({
      email: this.email,
      userName: this.username,
      password: this.password
    }).subscribe(response => {
        console.log("Registration is success")
        this.authApiService.login({userName: this.username, password: this.password}).subscribe(
          response => {
            this.router.navigate([""])
          }, error => {
            console.log(error.statusCode)
          }
        )
      },
      error => {
        if (error.statusCode) {
          console.log(error.statusCode)
        }
      }
    )
  }
}
