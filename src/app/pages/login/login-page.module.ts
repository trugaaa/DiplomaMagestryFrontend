import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule.forChild([{path: '**', component: LoginPageComponent}])],
  declarations: [LoginPageComponent]
})
export class LoginPageModule {
}
