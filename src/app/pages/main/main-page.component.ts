import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  templateUrl: "main-page.component.html",
  styleUrls: ["main-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
}
