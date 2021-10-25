import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private cookieService: CookieService) {
  }

  public getUserType(): UserType {
    //return this.cookieService.get("role") as UserType;
    return UserType.teacher;
  }

  public setUserType(userType: UserType) {
    this.cookieService.set("role", userType);
  }
}

export enum UserType {
  student = "student",
  teacher = "teacher",
  admin = "admin"
}
