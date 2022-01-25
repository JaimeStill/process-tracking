import { Process } from './process';

export interface Workflow {
  id: number;
  name: string;
  description: string;

  processes: Process[];
}
