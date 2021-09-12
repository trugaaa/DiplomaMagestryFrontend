import {NgModule} from "@angular/core";
import {RegistrationPageComponent} from "./registration-page.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([{path: '**', component: RegistrationPageComponent}]),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegistrationPageModule {
}
