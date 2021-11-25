import {Component, Inject} from "@angular/core";
import {TaskType} from "../../models/task";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Group} from "../../models/group";
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: "task-creation-dialog",
  templateUrl: "user-group-change-dialog.component.html",
  styleUrls: ["user-group-change-dialog.component.scss"]
})
export class UserGroupChangeDialogComponent {
  userName: string
  allGroups: Group[]

  constructor(
    private groupsService: GroupsService, @Inject(MAT_DIALOG_DATA) data: any) {
    this.userName = data.userName
    this.allGroups = data.allGroups
  }

  groupSelectForm = new FormGroup({
    selectedGroup: new FormControl(null, Validators.required)
  });

  onGroupChange() {
    console.log(this.userName)
    console.log(this.groupSelectForm.controls['selectedGroup'].value)
  }
}
