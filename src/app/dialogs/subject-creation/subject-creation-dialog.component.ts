import {Component} from "@angular/core";
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "subject-creation-dialog",
  templateUrl: "subject-creation-dialog.component.html",
  styleUrls: ["subject-creation-dialog.component.scss"]
})
export class SubjectCreationDialogComponent {
  constructor(private apiService: AuthApiService, private router: Router) {
  }

  subjectCreationForm = new FormGroup({
    name: new FormControl("", Validators.required),
    course: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  onCreateSubject() {
    this.router.navigate([`subject/new/lesson/new`]);
  }
}
