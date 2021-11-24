import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {UserService, UserType} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../models/user";
import {Group} from "../../models/group";
import {GroupsService} from "../../services/groups.service";

@Component({
  templateUrl: "users-page.component.html",
  styleUrls: ["users-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent implements OnInit {
  groups?: Group[];
  users?: User[]
  userTypes = UserType

  public firstName: string = "";
  public secondName: string = "";
  public groupSelected: string = "";

  constructor(public userService: UserService,
              public groupsService: GroupsService,
              public dialog: MatDialog,
              private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(response => {
      this.users = response
      this.changeDetection.detectChanges()
    })

    this.groupsService.getGroups().subscribe(response => {
      this.groups = response;
      this.changeDetection.detectChanges();
    })
  }

  getGroupById(id: string): Group | undefined {
    return this.groups?.filter(e => e.id === id)[0];
  }

  filter() {
    console.log(this.groupSelected)
    this.userService.getUsersWithFiltering(this.groupSelected).subscribe(response => {
      this.users = response;
      this.changeDetection.detectChanges();
    })
  }
}
