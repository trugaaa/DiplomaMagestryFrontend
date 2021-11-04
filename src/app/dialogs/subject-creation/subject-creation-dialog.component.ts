import {Component} from "@angular/core";
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SubjectsService} from "../../services/subjects.service";

@Component({
  selector: "subject-creation-dialog",
  templateUrl: "subject-creation-dialog.component.html",
  styleUrls: ["subject-creation-dialog.component.scss"]
})
export class SubjectCreationDialogComponent {
  constructor(private apiService: AuthApiService, private router: Router,
              private subjectService: SubjectsService) {
  }

  subjectCreationForm = new FormGroup({
    name: new FormControl("", Validators.required),
    course: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  onCreateSubject() {
    this.subjectService.createSubject({
      name: this.subjectCreationForm.get("name")!!.value,
      course: this.subjectCreationForm.get("course")!!.value,
      description: this.subjectCreationForm.get("description")!!.value
    }).subscribe(
      ()=>{
        window.location.reload();
      }
    )
  }
}
