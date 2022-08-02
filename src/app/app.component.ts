import { Component } from "@angular/core";
import { MainComponent } from "./main.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `<app-main></app-main>`,
  imports: [MainComponent],
})
export class AppComponent {}
