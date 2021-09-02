import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginToken} from "../models/loginToken";
import {environment} from "../../environments/environment";

@Injectable({providedIn: "root"})
export class AuthApiService {
  env = environment;

  constructor(private httpClient: HttpClient) {
  }

  login(usernameEmail: string, password: string): Observable<LoginToken> {
    return this.httpClient.post(this.env.url, "", {responseType: "json"});
  }
}
