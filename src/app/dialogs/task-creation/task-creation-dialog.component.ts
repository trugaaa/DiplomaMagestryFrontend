import {Component} from "@angular/core";
import {SubjectsService} from "../../services/subjects.service";
import {TaskType} from "../../models/task";

@Component({
  selector: "task-creation-dialog",
  templateUrl: "task-creation-dialog.component.html",
  styleUrls: ["task-creation-dialog.component.scss"]
})
export class TaskCreationDialogComponent {
  foods: String[] = [
    'Steak', 'Pizza', 'Tacos'
  ];

  constructor(
    private subjectService: SubjectsService) {
  }

  taskTypes = TaskType

  onCreateTask(){

  }
}
