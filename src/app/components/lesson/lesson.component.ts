import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {LessonService} from "../../services/lesson.service";
import {UserService} from "../../services/user.service";
import {DateFormat} from "../../services/date.format";

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

  constructor(private router: Router,
              private lessonService: LessonService,
              private userService: UserService,
              private changeDetection: ChangeDetectorRef) {
  }

  goToLesson() {
    this.router.navigate([`subject/${this.subjectId}/lesson/${this.id}`]);
  }

  deleteLesson() {
    this.lessonService.deleteLesson(this.id).subscribe(() => {
      window.location.reload();
      this.changeDetection.detectChanges()
    });
  }

  transformDate(): string {
    return DateFormat.transformDate(this.validTill!)
  }
}
