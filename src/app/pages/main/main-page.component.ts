import {ChangeDetectionStrategy, Component} from "@angular/core";
import {SubjectsService} from "../../services/subjects.service";
import {SubjectsResponse} from "../../models/subject";

@Component({
  templateUrl: "main-page.component.html",
  styleUrls: ["main-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  public subjectsResponse?: SubjectsResponse

  constructor(private subjectService: SubjectsService) {
    this.subjectService.getSubjects().subscribe(response => {
      console.log(response.subjects)
      this.subjectsResponse = response
    })
  }
}
