import {Component, Input} from "@angular/core";
import {UserService, UserType} from "../../services/user.service";
import {Group} from "../../models/group";

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

  userTypes = UserType;
  currentUser?: UserType;

  constructor(private userService: UserService) {
    this.currentUser = userService.getCurrentUserType();
  }

  changeGroup() {
    console.log(this.group)
  }
}
