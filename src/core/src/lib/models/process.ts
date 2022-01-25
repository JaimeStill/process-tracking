export interface Process {
  id: number;
  workflowId: number;
  index: number;
  name: string;
  notes: string;
  isComplete: boolean;
  dateComplete?: Date;
}
