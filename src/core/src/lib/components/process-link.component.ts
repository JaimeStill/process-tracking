import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { Process } from '../models';

@Component({
  selector: 'process-link',
  templateUrl: 'process-link.component.html'
})
export class ProcessLinkComponent implements OnInit {
  icon: string = 'radio_button_unchecked';
  iconClass: string = 'material-icons';

  @Input() selected: boolean = false;
  @Input() current: boolean = false;
  @Input() process: Process;
  @Input() size: number = 280;
  @Output() action = new EventEmitter<Process>();

  private getOutline = () => this.selected
    ? `card-outline-primary`
    : this.process.isComplete
      ? `card-outline-green`
      : this.current
        ? `card-outline-amber`
        : `card-outline-accent`;

  linkStyle = () => this.process.isComplete
    ? `${this.getOutline()} background-pastel-green color-green`
    : this.current
      ? `${this.getOutline()} background-pastel-amber color-amber`
      : `${this.getOutline()} background-card color-text`;

  ngOnInit() {
    this.icon = this.process.isComplete
      ? 'task_alt'
      : this.current
        ? 'pending'
        : 'radio_button_unchecked';

    this.iconClass = this.current
      ? 'material-icons-outlined'
      : 'material-icons';
  }
}
