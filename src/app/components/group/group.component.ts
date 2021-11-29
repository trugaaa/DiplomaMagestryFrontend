import {Component, Input} from "@angular/core";
import {Group} from "../../models/group";
import {UserService, UserType} from "../../services/user.service";
import {Course} from "../../models/course";
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: "grp-group",
  templateUrl: "group.component.html",
  styleUrls: ["group.component.scss"]
})
export class GroupComponent {
  @Input() id?: string;
  @Input() name?: string;
  @Input() courseName?: Course;
  @Input() allGroups?: Group[];

  currentUser: UserType;
  userTypes = UserType;

  constructor(private userService: UserService, private groupsService: GroupsService) {
    this.currentUser = userService.getCurrentUserType();
  }

  delete() {
    this.groupsService.deleteGroup(this.id).subscribe(() => {
      window.location.reload();
    });
  }
}
