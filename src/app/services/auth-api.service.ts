import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../models/authorization";
import {Registration} from "../models/authorization";
import {Login} from "../models/authorization";
import {environment} from "../../environments/environment";
import {httpOptions} from "./options";
import {Url} from "./url";

@Injectable({providedIn: "root"})
export class AuthApiService {
  env = environment;

  constructor(private httpClient: HttpClient) {
  }

  login(loginBody: Login): Observable<Token> {
    console.log(loginBody)
    return this.httpClient.post(this.env.url + Url.authService + Url.loginEndpoint, loginBody, httpOptions);
  }

  registration(registrationBody: Registration): Observable<any> {
    return this.httpClient.post(this.env.url + Url.authService + Url.registrationEndpoint, registrationBody, httpOptions);
  }
}
