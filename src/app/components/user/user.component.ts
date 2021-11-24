import {Component, Input} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Group} from "../../models/group";

@Component({
  selector: "usr-user",
  templateUrl: "user.component.html",
  styleUrls: ["user.component.scss"]
})
export class UserComponent {
  @Input() id?: string;
  @Input() userName? :string;
  @Input() email? :string;
  @Input() firstName?: string;
  @Input() secondName?: string;
  @Input() age?: number;
  @Input() group?: Group;
  @Input() allGroups?: Group[];

  constructor(private userService: UserService) {
  }

  changeGroup(){
    console.log(this.group)
  }
}
