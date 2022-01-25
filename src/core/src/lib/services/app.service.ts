import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {
  Process,
  Workflow
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private db = new Database();
  private workflows = new BehaviorSubject<Workflow[]>(null);
  private workflow = new BehaviorSubject<Workflow>(null);

  workflows$ = this.workflows.asObservable();
  workflow$ = this.workflow.asObservable();

  clearWorkflows = () => this.workflows.next(null);

  getWorkflows = () => this.workflows.next(
    this.db.getWorkflows()
  );

  getWorkflow = (id: number) => this.workflow.next(
    this.db.getWorkflow(id)
  );
}

class Database {
  private db = {
    workflows: new Array<Workflow>(
      {
        id: 1,
        name: 'Product Development',
        description: 'FY 2022 Product Development Staffing',
        processes: new Array<Process>(
          {
            id: 1,
            workflowId: 1,
            index: 0,
            name: 'Internal Review',
            notes: 'Initial review of the product development strategy looks good',
            isComplete: true,
            dateComplete: new Date(2022, 1, 15)
          } as Process,
          {
            id: 2,
            workflowId: 1,
            index: 1,
            name: 'R&D Review',
            notes: 'Proposed products are feasible for development',
            isComplete: true,
            dateComplete: new Date(2022, 1, 18)
          } as Process,
          {
            id: 3,
            workflowId: 1,
            index: 2,
            name: 'HR Review',
            isComplete: false
          } as Process,
          {
             id: 4,
             workflowId: 1,
             index: 3,
             name: 'Executive Review',
             isComplete: false
          } as Process,
          {
            id: 5,
            workflowId: 1,
            index: 4,
            name: 'Final Approval',
            isComplete: false
          } as Process
        )
      } as Workflow
    )
  }

  getWorkflows = () => this.db.workflows;

  getWorkflow = (id: number) =>
    this.db
      .workflows
      .find(x => x.id === id);
}
