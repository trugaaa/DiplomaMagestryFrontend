import {ChangeDetectorRef, Component, Inject, Input} from "@angular/core";
import {UserService, UserType} from "../../services/user.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SubjectCreationDialogComponent} from "../../dialogs/subject-creation/subject-creation-dialog.component";
import {LessonCreationDialogComponent} from "../../dialogs/lesson-creation/lesson-creation-dialog.component";

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


  constructor(private userService: UserService, public dialog: MatDialog, private changeDetection: ChangeDetectorRef) {
    this.currentUser = userService.getUserType()
  }

  openLessonCreationDialog() {
    const dialogRef = this.dialog.open(LessonCreationDialogComponent, {data: {id: this.id}});
  }
}
