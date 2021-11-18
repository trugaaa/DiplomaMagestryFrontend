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
    console.log(task)
    return this.httpClient.post<any>(this.env.url + this.api, task)
  }

  deleteTask(id: string | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.env.url + this.api + "/" + id)
  }
}
