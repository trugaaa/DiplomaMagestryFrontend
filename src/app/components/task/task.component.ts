import {Component, Input} from "@angular/core";
import {TaskType} from "../../models/task";
import {LessonStatus} from "../../models/lesson";
import {UserService, UserType} from "../../services/user.service";
import {TaskService} from "../../services/task.service";

@Component({
  selector: "ts-task",
  templateUrl: "task.component.html",
  styleUrls: ["task.component.scss"]
})
export class TaskComponent {
  @Input() id?: string;
  @Input() lessonStatus?: LessonStatus;
  @Input() question?: string;
  @Input() type?: TaskType;
  @Input() answer?: string;
  @Input() answers?: string[] | undefined | null;
  @Input() selected?: string | undefined | null;

  taskType = TaskType;
  lessonStatuses = LessonStatus;
  userTypes = UserType;

  currentUserType: UserType;

  constructor(private userService: UserService, private taskService: TaskService) {
    this.currentUserType = userService.getCurrentUserType();
  }

  submitAnswer() {

  }

  openChat() {

  }

  onTaskDelete() {
    this.taskService.deleteTask(this.id).subscribe(() => {
      window.location.reload();
    })
  }
}
