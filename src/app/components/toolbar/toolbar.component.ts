import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "toolbar-menu-main",
  templateUrl: "toolbar.component.html",
  styleUrls: ["toolbar.component.scss"]
})
export class ToolbarComponent {
  constructor(private router: Router) {
  }

  onLogout(){
    this.router.navigate(["login"])
  }
}
