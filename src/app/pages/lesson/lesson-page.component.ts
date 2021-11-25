import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {LessonFull, LessonStatus} from "../../models/lesson";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TaskCreationDialogComponent} from "../../dialogs/task-creation/task-creation-dialog.component";
import {UserService, UserType} from "../../services/user.service";
import {LessonService} from "../../services/lesson.service";
import {SubjectsService} from "../../services/subjects.service";
import {Subject} from "../../models/subject";

@Component({
  templateUrl: "lesson-page.component.html",
  styleUrls: ["lesson-page.component.scss"]
})
export class LessonPageComponent implements OnInit {
  public subject?: Subject;
  public lesson?: LessonFull;

  constructor(private activeRoute: ActivatedRoute, private userService: UserService,
              public dialog: MatDialog, private changeDetection: ChangeDetectorRef,
              private lessonService: LessonService, private subjectService: SubjectsService) {
  }

  userTypes = UserType;
  currentUserType: UserType = this.userService.getCurrentUserType();
  lessonTypes = LessonStatus;

  ngOnInit() {
    this.subjectService.getSubject(this.activeRoute.snapshot.paramMap.get("subjectId")).subscribe(response => {
      this.subject = response[0];
    });

    this.lessonService.getLesson(this.activeRoute.snapshot.paramMap.get("lessonId")).subscribe(response => {
      this.lesson = response[0];
      console.log(response)
      this.changeDetection.detectChanges();
    });
  }

  openTaskCreationDialog() {
    this.dialog.open(TaskCreationDialogComponent, {data: {id: this.lesson?.id}});
  }
}
