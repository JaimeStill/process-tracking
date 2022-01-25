import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Workflow } from '../models';

@Component({
  selector: 'workflow-card',
  templateUrl: 'workflow-card.component.html'
})
export class WorkflowCardComponent {
  @Input() workflow: Workflow;
  @Input() size: number = 360;
  @Output() action = new EventEmitter<Workflow>();
}
