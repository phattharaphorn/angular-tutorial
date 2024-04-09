import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  /* public title = "My Portfolio";

  public name = "Angular";
  public topic = "Data Binding"; */
  value = 0;
  callBuffet(value: string) {
    this.value = (value === "buy" ? 1 : -1) * 1;
  }
}
