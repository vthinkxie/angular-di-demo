import { Component, inject } from "@angular/core";
import { OrderService } from "./service/order.service";

@Component({
  selector: "app-order",
  standalone: true,
  template: `<button (click)="confirmOrder('Submit Order')">
    Submit Order
  </button>`,
})
export class OrderComponent {
  private orderService = inject(OrderService);
  confirmOrder(message: string) {
    this.orderService.confirmOrder(message);
  }
}
