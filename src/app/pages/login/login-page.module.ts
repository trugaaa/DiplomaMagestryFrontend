import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([{path: '**', component: LoginPageComponent}]),
    FormsModule
  ]
})
export class LoginPageModule {
}
