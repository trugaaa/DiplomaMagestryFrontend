import {NgModule} from "@angular/core";
import {RegistrationPageComponent} from "./registration-page.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([{path: '**', component: RegistrationPageComponent}]),
    FormsModule
  ]
})
export class RegistrationPageModule {
}
