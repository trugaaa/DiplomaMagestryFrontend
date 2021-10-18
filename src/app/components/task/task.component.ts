import {Component, Input} from "@angular/core";
import {TaskType} from "../../models/task";

@Component({
  selector: "ts-task",
  templateUrl: "task.component.html",
  styleUrls: ["task.component.scss"]
})
export class TaskComponent {
  @Input() id?: string
  @Input() question?: string
  @Input() answer?: string
  @Input() type?: TaskType

  taskType = TaskType;

  constructor() {
    console.log('SSSS: ' + this.id + ":" + this.type)
  }
}
