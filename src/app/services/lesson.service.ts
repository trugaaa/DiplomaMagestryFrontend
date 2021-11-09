import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Subject} from "../models/subject";
import {LessonFull, LessonShort} from "../models/lesson";

@Injectable({providedIn: "root"})
export class LessonService {
  env = environment;
  api = "/api/lessons"

  constructor(private httpClient: HttpClient) {
  }

  getLesson(id:number): Observable<LessonFull> {
    return this.httpClient.get<LessonFull>(this.env.url + this.api + '/' + id)
  }

  createLesson(lesson: LessonShort): Observable<LessonShort> {
    return this.httpClient.post<LessonShort>(this.env.url + this.api, lesson)
  }
}
