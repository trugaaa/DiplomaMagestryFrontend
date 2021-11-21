import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthApiService} from "../../services/auth-api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import RegistrationValidators from "./registration.validators";
import {AppCookieService} from "../../services/app-cookie.service";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: "registration-page.component.html",
  styleUrls: ["registration-page.component.scss"]
})
export class RegistrationPageComponent {
  passwordPattern: string = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"

  registrationForm = new FormGroup({
    username: new FormControl("", Validators.required),
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.passwordPattern)]),
    confirmPassword: new FormControl("", Validators.required)
  }, {
    validators: [RegistrationValidators.match('password', 'confirmPassword')]
  });


  public getFirstname(): string {
    return this.registrationForm.controls["firstname"].value
  }

  public getLastname(): string {
    return this.registrationForm.controls["lastname"].value
  }

  public getUsername(): string {
    return this.registrationForm.controls["username"].value
  }

  public getPassword(): string {
    return this.registrationForm.controls["password"].value
  }

  public getEmail(): string {
    return this.registrationForm.controls["email"].value
  }

  constructor(private router: Router, private userService: UserService,
              private authApiService: AuthApiService, private cookieService: AppCookieService) {
  }

  onRegistration() {
    this.authApiService.registration({
      firstName: this.getFirstname(),
      secondName: this.getLastname(),
      email: this.getEmail(),
      userName: this.getUsername(),
      password: this.getPassword()
    }).subscribe(() => {
        this.authApiService.login({
          userNameOrEmail: this.getUsername(),
          password: this.getPassword()
        }).subscribe(
          response => {
            this.cookieService.setCookie("token", response.token)
            this.userService.setUserType(response.userRole)
            this.router.navigate(["dashboard"])
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
