import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Subject} from "../models/subject";

@Injectable({providedIn: "root"})
export class SubjectsService {
  env = environment;
  api = "/api/subjects"

  constructor(private httpClient: HttpClient) {
  }

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.env.url + this.api)
  }

  getSubjectsBySubName(subName: string): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.env.url + this.api + "?filter=" + subName)
  }

  getSubject(id: string | null): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.env.url + this.api + "/" + id)
  }

  createSubject(subject: { name: any; course: any; description: any }): Observable<any> {
    return this.httpClient.post<any>(this.env.url + this.api, subject)
  }

  deleteSubject(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.env.url + this.api + "/" + id)
  }

  assigneeUser(subjectId: string, username: string): Observable<any> {
    return this.httpClient.post<any>(this.env.url + this.api + "/assignUsers", {
      subjectId: subjectId,
      userNames: [username]
    })
  }
}
