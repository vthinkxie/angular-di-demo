import { Component, inject } from "@angular/core";
import { LoginService } from "./service/login.service";

@Component({
  selector: "app-login",
  standalone: true,
  template: `<button (click)="login()">Login</button>`,
})
export class LoginComponent {
  private loginService = inject(LoginService);

  login() {
    this.loginService.login();
  }
}
