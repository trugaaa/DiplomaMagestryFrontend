import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {httpOptions} from "./options";
import {Url} from "./url";
import {SubjectsResponse} from "../models/subject";
import {mockSubjectList} from "../../assets/subjects_list.mock";

@Injectable({providedIn: "root"})
export class SubjectsService {
  env = environment;

  constructor(private httpClient: HttpClient) {
  }

  getSubjects(): Observable<any> {
    return new Observable<SubjectsResponse>(response => {
      response.next(JSON.parse(mockSubjectList))
    })
    return this.httpClient.get(this.env.url + Url.subjectsEndpoint, httpOptions)
  }
}
