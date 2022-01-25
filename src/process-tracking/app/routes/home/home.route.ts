import {
  Component,
  OnInit
} from '@angular/core';

import {
  AppService,
  Workflow
} from 'core';

import { Router } from '@angular/router';

@Component({
  selector: 'home-route',
  templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
  constructor(
    private router: Router,
    public app: AppService
  ) { }

  ngOnInit() {
    this.app.getWorkflows();
  }

  view = (workflow: Workflow) => this.router.navigate(['workflow', workflow.id]);
}
