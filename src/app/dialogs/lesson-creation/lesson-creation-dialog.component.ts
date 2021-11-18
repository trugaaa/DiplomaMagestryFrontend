import {Component, Inject} from "@angular/core";
import {AuthApiService} from "../../services/auth-api.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LessonService} from "../../services/lesson.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: "lesson-creation-dialog",
  templateUrl: "lesson-creation-dialog.component.html",
  styleUrls: ["lesson-creation-dialog.component.scss"]
})
export class LessonCreationDialogComponent {
  id: string

  constructor(private apiService: AuthApiService, private router: Router,
              private subjectService: LessonService, @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
  }

  lessonCreationForm = new FormGroup({
    lessonName: new FormControl("", Validators.required),
    tillDate: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });

  onCreateLesson() {
    this.subjectService.createLesson({
      subjectId: this.id,
      name: this.lessonCreationForm.get("lessonName")!!.value,
      validTill: this.lessonCreationForm.get("tillDate")!!.value,
      description: this.lessonCreationForm.get("description")!!.value,
    }).subscribe(
      () => {
        window.location.reload();
      }
    )
  }
}
