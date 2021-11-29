import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {UserService, UserType} from "../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {Group} from "../../models/group";
import {GroupsService} from "../../services/groups.service";
import {Course, courses} from "../../models/course";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: "groups-page.component.html",
  styleUrls: ["groups-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsPageComponent implements OnInit {
  groups?: Group[];
  userTypes = UserType;

  subName: string = "";
  courseName: Course = Course.unknown;
  courses?: Course[];

  groupCreationForm = new FormGroup({
    name: new FormControl("", Validators.required),
    course: new FormControl("", Validators.required),
  });

  constructor(public userService: UserService,
              public groupsService: GroupsService,
              public dialog: MatDialog,
              private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.courses = courses()
    this.groupsService.getGroups().subscribe(response => {
      this.groups = response;
      this.changeDetection.detectChanges();
    })
  }

  createGroup() {
    console.log({
      name: this.groupCreationForm.controls["name"].value,
      courseNumber: this.groupCreationForm.controls["course"].value
    })
    this.groupsService.createGroup({
      name: this.groupCreationForm.controls["name"].value,
      courseNumber: this.groupCreationForm.controls["course"].value
    }).subscribe(() => {
      window.location.reload();
    })
  }

  filter() {

  }
}
