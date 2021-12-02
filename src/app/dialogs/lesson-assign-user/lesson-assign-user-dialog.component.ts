import {ChangeDetectorRef, Component, Inject} from "@angular/core";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SubjectsService} from "../../services/subjects.service";

@Component({
  selector: "lesson-assignee-user-dialog",
  templateUrl: "lesson-assign-user-dialog.component.html",
  styleUrls: ["lesson-assign-user-dialog.component.scss"]
})
export class LessonAssignUserDialogComponent {
  subjectId: string;
  userSelected: string = "";
  users?: User[];

  constructor(private userService: UserService,
              private subjectService: SubjectsService,
              private changeDetection: ChangeDetectorRef,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.subjectId = data.subjectId;

    userService.getUsers().subscribe(response => {
      this.users = response;
      changeDetection.detectChanges();
    });
  }

  onSubmit() {
    this.subjectService.assigneeUser(this.subjectId, this.userSelected).subscribe(() => {
      console.log("assigned!")
    });
  }
}
