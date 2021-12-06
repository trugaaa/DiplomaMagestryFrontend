import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {LessonFull} from "../../models/lesson";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreationDialogComponent} from "../../dialogs/task-creation/task-creation-dialog.component";
import {UserService, UserType} from "../../services/user.service";
import {LessonService} from "../../services/lesson.service";
import {SubjectsService} from "../../services/subjects.service";
import {Subject} from "../../models/subject";
import {LessonAssignUserDialogComponent} from "../../dialogs/lesson-assign-user/lesson-assign-user-dialog.component";
import {User} from "../../models/user";
import {TaskService} from "../../services/task.service";
import {CookieService} from "ngx-cookie-service";
import {ChatComponent} from "../../dialogs/chat/chat.component";

@Component({
  templateUrl: "lesson-page.component.html",
  styleUrls: ["lesson-page.component.scss"]
})
export class LessonPageComponent implements OnInit {
  public subject?: Subject;
  public lesson?: LessonFull;
  users?: User[];
  selectedUser: string = "";

  constructor(private activeRoute: ActivatedRoute, private userService: UserService,
              private taskService: TaskService,
              public dialog: MatDialog, private changeDetection: ChangeDetectorRef,
              private lessonService: LessonService, private subjectService: SubjectsService,
              private cookieService: CookieService) {
  }

  userTypes = UserType;
  currentUserType: UserType = this.userService.getCurrentUserType();

  ngOnInit() {
    if (this.userService.getCurrentUserType() === this.userTypes.teacher) {
      this.userService.getUsers().subscribe(response => {
        this.users = response;
        this.changeDetection.detectChanges();
      });
    }

    this.subjectService.getSubject(this.activeRoute.snapshot.paramMap.get("subjectId")).subscribe(response => {
      this.subject = response[0];
    });

    this.lessonService.getLesson(this.activeRoute.snapshot.paramMap.get("lessonId")).subscribe(response => {
      this.lesson = response[0];

      if (this.currentUserType !== this.userTypes.teacher) {
        this.taskService.getTasksInfos(this.activeRoute.snapshot.paramMap.get("lessonId"),
          this.cookieService.get("username")).subscribe(response => {
          this.lesson!.tasks = response;
        })
      }

      this.changeDetection.detectChanges();
    });
  }

  openTaskCreationDialog() {
    this.dialog.open(TaskCreationDialogComponent, {data: {id: this.lesson?.id}});
  }

  openAssignUserDialog() {
    this.dialog.open(LessonAssignUserDialogComponent, {data: {subjectId: this.subject!.id}});
  }

  selectUser() {
    if (this.selectedUser !== undefined) {
      this.taskService.getTasksInfos(this.activeRoute.snapshot.paramMap.get("lessonId"),
        this.selectedUser).subscribe(response => {
        this.lesson!.tasks = response;
        this.changeDetection.detectChanges();
      })
    } else {
      this.lessonService.getLesson(this.activeRoute.snapshot.paramMap.get("lessonId")).subscribe(response => {
        this.lesson = response[0];
      });
    }
  }
}
