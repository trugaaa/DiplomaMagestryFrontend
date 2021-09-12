import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthApiService} from "../../services/auth-api.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import RegistrationValidators from "./registration.validators";

@Component({
  templateUrl: "registration-page.component.html",
  styleUrls: ["registration-page.component.scss"]
})
export class RegistrationPageComponent {
  passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$"

  registrationForm = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.passwordPattern)]),
    confirmPassword: new FormControl("", Validators.required)
  }, {
    validators: [RegistrationValidators.match('password', 'confirmPassword')]
  });


  public getUsername(): string {
    return this.registrationForm.controls["username"].value
  }

  public getPassword(): string {
    return this.registrationForm.controls["password"].value
  }

  public getConfirmPassword(): string {
    return this.registrationForm.controls["confirmPassword"].value
  }

  public getEmail(): string {
    return this.registrationForm.controls["email"].value
  }

  constructor(private router: Router, private authApiService: AuthApiService) {
  }

  onRegistration() {
    this.authApiService.registration({
      email: this.getEmail(),
      userName: this.getUsername(),
      password: this.getPassword()
    }).subscribe(response => {
        this.authApiService.login({
          userName: this.getUsername(),
          password: this.getPassword()
        }).subscribe(
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
