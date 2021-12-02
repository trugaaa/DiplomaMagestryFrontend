import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Task} from "../models/task";

@Injectable({providedIn: "root"})
export class TaskService {
  env = environment;
  api = "/api/tasks"

  constructor(private httpClient: HttpClient) {
  }

  createTask(task: Task): Observable<any> {
    return this.httpClient.post<any>(this.env.url + this.api, task);
  }

  deleteTask(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.env.url + this.api + "/" + id);
  }

  getTasksInfos(lessonId: string | null, userName: string): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.env.url + this.api + "/get-task-infos?LessonId=" + lessonId + "&UserName=" + userName);
  }

  submitAnswer(taskInfoId: string | undefined, answer: string | undefined): Observable<any> {
    return this.httpClient.post<any>(this.env.url + this.api + "/submit-answer", {
      taskInfoId: taskInfoId,
      answer: answer
    });
  }
}
