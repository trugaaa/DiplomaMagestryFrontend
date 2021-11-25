import {Component, Input} from "@angular/core";
import {UserService, UserType} from "../../services/user.service";
import {Group} from "../../models/group";
import {MatDialog} from "@angular/material/dialog";
import {UserGroupChangeDialogComponent} from "../../dialogs/user-group-change/user-group-change-dialog.component";

@Component({
  selector: "usr-user",
  templateUrl: "user.component.html",
  styleUrls: ["user.component.scss"]
})
export class UserComponent {
  @Input() id?: string;
  @Input() userName?: string;
  @Input() type?: UserType;
  @Input() email?: string;
  @Input() firstName?: string;
  @Input() secondName?: string;
  @Input() age?: number;
  @Input() group?: Group;
  @Input() allGroups?: Group[];

  userTypes = UserType;
  currentUser?: UserType;

  constructor(public dialog: MatDialog, private userService: UserService) {
    this.currentUser = userService.getCurrentUserType();
  }

  changeGroup() {
    this.dialog.open(UserGroupChangeDialogComponent, {data: {userName: this.userName, allGroups: this.allGroups}});
  }
}
