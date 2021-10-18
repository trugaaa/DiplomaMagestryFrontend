import {Component, OnInit} from "@angular/core";
import {LessonFull} from "../../models/lesson";
import {mockLesson} from "../../../assets/lesson.mock";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: "lesson-page.component.html",
  styleUrls: ["lesson-page.component.scss"]
})
export class LessonPageComponent implements OnInit{
  public lesson?: LessonFull

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.lesson = JSON.parse(mockLesson)
    console.log(this.lesson)
    console.log("lesson" + this.activeRoute.snapshot.paramMap.get("lessonId"))
    console.log(this.activeRoute.snapshot.paramMap.get("subjectId"))
  }
}
