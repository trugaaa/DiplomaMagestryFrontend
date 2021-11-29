import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Group} from "../models/group";

@Injectable({providedIn: "root"})
export class GroupsService {
  env = environment;
  api = "/api/groups"

  constructor(private httpClient: HttpClient) {
  }

  getGroups(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(this.env.url + this.api)
  }

  createGroup(group: Group): Observable<any> {
    return this.httpClient.post<any>(this.env.url + this.api, group)
  }

  deleteGroup(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.env.url + this.api + "/" + id)
  }

  addUserToGroup(groupId: string | undefined, username: string | undefined): Observable<any> {
    return this.httpClient.post<any>(this.env.url + this.api + "/addUsers", {groupId: groupId, userNames: [username]})
  }
}
