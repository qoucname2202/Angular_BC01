import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Tên thẻ  <app-root></app-root>
  // Template thành phần giao diện của thẻ
  template: `<div class="container">
    <!-- <app-bai-tap-layout></app-bai-tap-layout> -->
    <!-- <app-one-way-binding></app-one-way-binding> -->
    <!-- <app-two-way-binding></app-two-way-binding> -->
    <!-- <app-structural-directives></app-structural-directives> -->
    <!-- <app-attribute-directives></app-attribute-directives> -->
    <!-- <app-baitap6></app-baitap6> -->
    <app-interaction></app-interaction>
  </div>`,

  styleUrls: ['./app.component.css'], //đường dẫn đến file CSS của thẻ
})
// Xử lý các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'bc01angular';
}
