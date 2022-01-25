import {
  Component,
  Input
} from '@angular/core';

import { Process } from '../models';

@Component({
  selector: 'process-details',
  templateUrl: 'process-details.component.html'
})
export class ProcessDetailsComponent {
  @Input() process: Process;
}
