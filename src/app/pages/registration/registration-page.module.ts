import {NgModule} from "@angular/core";
import {RegistrationPageComponent} from "./registration-page.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSharedModule} from "../../shared/mat.shared.module";

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    MatSharedModule,
    RouterModule.forChild([{path: '**', component: RegistrationPageComponent}]),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegistrationPageModule {
}
