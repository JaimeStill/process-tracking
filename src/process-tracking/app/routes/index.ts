import { Route } from '@angular/router';
import { HomeRoute } from './home';
import { WorkflowRoute } from './workflow';

export const RouteComponents = [
  HomeRoute,
  WorkflowRoute
]

export const Routes: Route[] = [
  { path: '', component: HomeRoute },
  { path: 'workflow/:id', component: WorkflowRoute },
  { path: 'workflow/:id/:processId', component: WorkflowRoute },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
