import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDetailsVisible = false;
  clickLog: Array<{ number: number; timestamp: string }> = [];
  clickCount = 0;

  toggleDetails() {
    this.isDetailsVisible = !this.isDetailsVisible;
    this.clickCount++;
    const timestamp = new Date().toLocaleTimeString();
    this.clickLog.push({ number: this.clickCount, timestamp });
  }

  getLogItemStyle(index: number) {
    if (index >= 4) {
      return { 'background-color': 'blue', 'color': 'white', 'padding': '8px', 'margin': '4px 0' };
    }
    return { 'padding': '8px', 'margin': '4px 0' };
  }
}
