import {ChangeDetectionStrategy, Component} from "@angular/core";
import {SubjectsService} from "../../services/subjects.service";
import {SubjectsResponse} from "../../models/subject";
import {UserService, UserType} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {SubjectCreationDialogComponent} from "../../dialog/subject.creation.dialog.component";

@Component({
  templateUrl: "main-page.component.html",
  styleUrls: ["main-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  public subjectsResponse?: SubjectsResponse

  userTypes = UserType
  currentUserType: UserType

  constructor(private subjectService: SubjectsService, private userService: UserService, public dialog: MatDialog) {
    this.currentUserType = userService.getUserType()

    this.subjectService.getSubjects().subscribe(response => {
      console.log(response.subjects)
      this.subjectsResponse = response
    })
  }

  openCreationDialog() {
    const dialogRef = this.dialog.open(SubjectCreationDialogComponent);
  }
}
