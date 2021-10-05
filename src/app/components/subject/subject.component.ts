import {Component, Input} from "@angular/core";

@Component({
  selector: "sb-subject",
  templateUrl: "subject.component.html",
  styleUrls: ["subject.component.scss"]
})
export class SubjectComponent {
  @Input() name?: string;
  @Input() description?: string;
  @Input() course?: number;
}
