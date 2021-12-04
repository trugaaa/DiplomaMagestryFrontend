import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {TaskType} from "../../models/task";
import {LessonStatus} from "../../models/lesson";
import {UserService, UserType} from "../../services/user.service";
import {TaskService} from "../../services/task.service";
import {MatDialog} from "@angular/material/dialog";
import {ChatComponent} from "../../dialogs/chat/chat.component";

@Component({
  selector: "ts-task",
  templateUrl: "task.component.html",
  styleUrls: ["task.component.scss"]
})
export class TaskComponent {
  @Input() id?: string;
  @Input() taskInfoId?: string;
  @Input() lessonStatus?: LessonStatus;
  @Input() question?: string;
  @Input() type?: TaskType;
  @Input() answer?: string;
  @Input() answers?: string[] | undefined | null;
  @Input() selected?: string | undefined | null;
  @Input() selectedUsername?: string;

  taskType = TaskType;
  lessonStatuses = LessonStatus;
  userTypes = UserType;

  currentUserType: UserType;

  constructor(private userService: UserService,
              private taskService: TaskService,
              public dialog: MatDialog,
              private changeDetection: ChangeDetectorRef) {
    this.currentUserType = userService.getCurrentUserType();
  }

  submitAnswer() {
    this.taskService.submitAnswer(this.taskInfoId, this.answer).subscribe(() => {
    });
  }

  openChat() {
    this.dialog.open(ChatComponent, {data: {id: this.id, selectedUsername: this.selectedUsername}});
  }

  onTaskDelete() {
    this.taskService.deleteTask(this.id).subscribe(() => {
      window.location.reload();
    })
  }
}
