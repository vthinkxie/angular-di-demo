import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {}

  login(): void {
    alert(
      `Login from ${this.authService.name} ${
        this.authService.authenticated ? "Success" : "Failed"
      }`
    );
  }
}
