import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {LessonFull, LessonStatus} from "../../models/lesson";
import {mockLesson} from "../../../assets/lesson.mock";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreationDialogComponent} from "../../dialogs/task-creation/task-creation-dialog.component";
import {UserService, UserType} from "../../services/user.service";

@Component({
  templateUrl: "lesson-page.component.html",
  styleUrls: ["lesson-page.component.scss"]
})
export class LessonPageComponent implements OnInit {
  public lesson?: LessonFull

  constructor(private activeRoute: ActivatedRoute, private userService: UserService,
              public dialog: MatDialog, private changeDetection: ChangeDetectorRef) {
    this.currentUserType = userService.getUserType();
  }

  userTypes = UserType
  currentUserType: UserType
  lessonTypes = LessonStatus

  ngOnInit(): void {
    this.lesson = JSON.parse(mockLesson)
    console.log(this.lesson)
    console.log("lesson" + this.activeRoute.snapshot.paramMap.get("lessonId"))
    console.log(this.activeRoute.snapshot.paramMap.get("subjectId"))
  }

  openTaskCreationDialog() {
    const dialogRef = this.dialog.open(TaskCreationDialogComponent);
  }
}
