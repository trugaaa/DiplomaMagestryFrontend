import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {LessonService} from "../../services/lesson.service";
import {UserService, UserType} from "../../services/user.service";

@Component({
  selector: "ls-lesson",
  templateUrl: "lesson.component.html",
  styleUrls: ["lesson.component.scss"]
})
export class LessonComponent {
  @Input() id?: string;
  @Input() subjectId?: string;
  @Input() lessonName?: string;
  @Input() status?: string;
  @Input() validTill?: string;
  @Input() description?: string;

  userTypes = UserType;

  constructor(private router: Router,
              private lessonService: LessonService,
              public userService: UserService,
              private changeDetection: ChangeDetectorRef) {
  }

  goToLesson() {
    this.router.navigate([`subject/${this.subjectId}/lesson/${this.id}`]).then(() => {});
  }

  deleteLesson() {
    this.lessonService.deleteLesson(this.id).subscribe(() => {
      window.location.reload();
      this.changeDetection.detectChanges()
    });
  }
}
