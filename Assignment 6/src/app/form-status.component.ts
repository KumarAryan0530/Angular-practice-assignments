import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.css']
})
export class FormStatusComponent {
  @Input() valid: boolean | null = null;
  @Input() touched: boolean | null = null;
  @Input() dirty: boolean | null = null;
  @Input() formValues: any = null;
}
