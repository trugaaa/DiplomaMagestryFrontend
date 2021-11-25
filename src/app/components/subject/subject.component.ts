import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {UserService, UserType} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {LessonCreationDialogComponent} from "../../dialogs/lesson-creation/lesson-creation-dialog.component";
import {SubjectsService} from "../../services/subjects.service";

@Component({
  selector: "sb-subject",
  templateUrl: "subject.component.html",
  styleUrls: ["subject.component.scss"]
})
export class SubjectComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() description?: string;
  @Input() course?: number;

  userTypes = UserType
  currentUser: UserType


  constructor(private userService: UserService,
              public dialog: MatDialog,
              private changeDetection: ChangeDetectorRef,
              private subjectService: SubjectsService
  ) {
    this.currentUser = userService.getCurrentUserType()
  }

  openLessonCreationDialog() {
    this.dialog.open(LessonCreationDialogComponent, {data: {id: this.id}});
  }

  deleteLesson() {
    this.subjectService.deleteSubject(this.id).subscribe(
      () => {
        window.location.reload();
      }
    )
  }
}
