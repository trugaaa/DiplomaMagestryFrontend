import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([{path: '**', component: LoginPageComponent}]),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginPageModule {
}
