import { Component } from "@angular/core";
import { LoginComponent } from "./login.component";
import { OrderComponent } from "./order.component";
import { OrderService } from "./service/order.service";
import { LoginService } from "./service/login.service";
import { AppleDialogService, DialogService } from "./service/dialog.service";
import {
  AuthService,
  SMSAuthService,
  WeiXinAuthService,
} from "./service/auth.service";

@Component({
  selector: "app-weixin-login",
  standalone: true,
  template: `<app-login></app-login>`,
  imports: [LoginComponent],
  providers: [
    LoginService,
    { provide: AuthService, useClass: WeiXinAuthService },
  ],
})
export class WeiXinLoginComponent {}

@Component({
  selector: "app-main",
  standalone: true,
  template: ` <app-login></app-login>
    <app-weixin-login></app-weixin-login>
    <app-order></app-order>`,
  imports: [LoginComponent, OrderComponent, WeiXinLoginComponent],
  providers: [
    OrderService,
    LoginService,
    { provide: DialogService, useClass: AppleDialogService },
    { provide: AuthService, useClass: SMSAuthService },
  ],
})
export class MainComponent {}
