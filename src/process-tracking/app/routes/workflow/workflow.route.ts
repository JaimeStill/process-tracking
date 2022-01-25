import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  AppService,
  Process,
  Workflow
} from 'core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'workflow-route',
  templateUrl: 'workflow.route.html',
  providers: [AppService]
})
export class WorkflowRoute implements OnInit, OnDestroy {
  private sub: Subscription;
  private workflowId: number;
  private processId: number;

  workflow: Workflow;
  process: Process;

  constructor(
    private route: ActivatedRoute,
    public app: AppService
  ) { }

  private initProcess = () => {
    if (this.workflow && this.processId)
      this.process = this.workflow
        .processes
        .find(x => x.id === this.processId);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.workflowId = +params.get('id');
        this.app.getWorkflow(this.workflowId);
      }

      if (params.has('processId')) {
        this.processId = +params.get('processId');
        this.initProcess();
      }
    })

    this.sub = this.app.workflow$.subscribe(workflow => {
      if (workflow) {
        this.workflow = workflow;
        this.initProcess();
        console.log(this.getCurrent())
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private compare = (v: Process, c: Process) => {
    if (!v)
      return c;

    return c.index < v.index
      ? c
      : v;
  }

  private getCurrent = () =>
    this.workflow
      .processes
      .filter(x => !x.isComplete)
      .reduce((v, c) => this.compare(v, c));

  current = (process: Process) =>
    this.getCurrent().id === process.id;

  selected = (process: Process) => process.id === this.process?.id;

  select = (process: Process) => this.process = this.selected(process)
    ? null
    : process;
}
