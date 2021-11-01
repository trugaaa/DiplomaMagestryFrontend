import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: LoginPageComponent}]),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginPageModule {
}
