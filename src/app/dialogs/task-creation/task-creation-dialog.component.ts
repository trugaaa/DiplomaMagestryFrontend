import {Component, Inject} from "@angular/core";
import {TaskType} from "../../models/task";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../services/task.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: "task-creation-dialog",
  templateUrl: "task-creation-dialog.component.html",
  styleUrls: ["task-creation-dialog.component.scss"]
})
export class TaskCreationDialogComponent {
  id: string
  taskTypes = TaskType

  constructor(
    private tasksService: TaskService, @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
  }

  taskCreationForm = new FormGroup({
    selectedGroup: new FormControl(null, Validators.required),
    question: new FormControl("", Validators.required),
    answer: new FormControl("", Validators.required)
  });

  onCreateTask() {
    this.tasksService.createTask({
      lessonId: this.id,
      question: this.taskCreationForm.controls['question'].value,
      type: this.taskCreationForm.controls['questionType'].value,
      answer: this.taskCreationForm.controls['answer'].value
    }).subscribe(response => {
      console.log(response)
      location.reload()
    }, error => {
      console.log(error)
    })
  }
}
