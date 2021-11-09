import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login, Registration, Token} from "../models/authorization";
import {environment} from "../../environments/environment";
import {httpOptions} from "./options";
import {Url} from "./url";

@Injectable({providedIn: "root"})
export class AuthApiService {
  env = environment;

  constructor(private httpClient: HttpClient) {
  }

  login(loginBody: Login): Observable<Token> {
    return this.httpClient.post<Token>(this.env.url + Url.authService + Url.loginEndpoint, loginBody, httpOptions)
  }

  registration(registrationBody: Registration): Observable<any> {
    return this.httpClient.post(this.env.url + Url.authService + Url.registrationEndpoint, registrationBody, httpOptions);
  }

  isAuthorized(): Observable<any> {
    return this.httpClient.get(this.env.url+ Url.authService + "test");
  }
}
