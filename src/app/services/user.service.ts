import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  env = environment;
  api = "/api/users"

  constructor(private cookieService: CookieService, private httpClient: HttpClient) {
  }

  public getCurrentUserType(): UserType {
    return this.cookieService.get("role") as UserType;
  }

  public setUserType(userType: UserType) {
    this.cookieService.set("role", userType);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.env.url + this.api)
  }

  getUsersWithFiltering(groupId: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.env.url + this.api + "?GroupId=" + groupId)
  }
}

export enum UserType {
  student = "Student",
  teacher = "Teacher",
  admin = "Admin"
}
