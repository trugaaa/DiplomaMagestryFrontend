import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {MainPageComponent} from "./main-page.component";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    MaterialModule,
    RouterModule.forChild([{path: '**', component: MainPageComponent}])
  ]
})
export class MainPageModule {
}
