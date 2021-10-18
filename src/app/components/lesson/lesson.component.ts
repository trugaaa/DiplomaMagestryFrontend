import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

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

  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigate([`subject/${this.subjectId}/lesson/${this.id}`])
  }
}
