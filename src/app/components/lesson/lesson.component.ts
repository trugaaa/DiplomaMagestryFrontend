import {Component, Input} from "@angular/core";

@Component({
  selector: "ls-lesson",
  templateUrl: "lesson.component.html",
  styleUrls: ["lesson.component.scss"]
})
export class LessonComponent {
  @Input() lessonName?: string;
  @Input() status?: string;
  @Input() validTill?: string;
  @Input() description?: string;
}
