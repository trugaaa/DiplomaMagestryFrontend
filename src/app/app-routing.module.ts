import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import("./pages/login/login-page.module").then(module => module.LoginPageModule)
  },{
    path: "registration",
    loadChildren: () => import("./pages/registration/registration-page.module").then(module => module.RegistrationPageModule)
  },
  {
    path: "",
    loadChildren: () => import("./pages/main/main-page.module").then(module => module.MainPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
