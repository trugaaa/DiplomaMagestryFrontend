import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {SubjectsService} from "../../services/subjects.service";
import {Subject} from "../../models/subject";
import {UserService, UserType} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {SubjectCreationDialogComponent} from "../../dialogs/subject-creation/subject-creation-dialog.component";

@Component({
  templateUrl: "main-page.component.html",
  styleUrls: ["main-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
  public subjectsResponse?: Subject[];
  userTypes = UserType;
  currentUserType: UserType;

  constructor(private subjectService: SubjectsService, private userService: UserService,
              public dialog: MatDialog, private changeDetection: ChangeDetectorRef) {
    this.currentUserType = this.userService.getUserType();
  }

  openCreationDialog() {
    this.dialog.open(SubjectCreationDialogComponent);
  }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe(response => {
      console.log(response)
      this.subjectsResponse = response
      this.changeDetection.detectChanges();
    })
  }
}
