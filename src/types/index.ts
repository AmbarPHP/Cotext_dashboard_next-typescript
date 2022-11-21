import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IBoardItem {
  route?: string;
  literal: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
};

export type IColumn = {
  id: string;
  name?: string;
  tasks?: ITask[];
};

export type ITask = {
  name: string;
  description: string;
  done: boolean;
  status:string;
  subtasks:ISubTask[];
};

export type ISubTask = {
  name: string;
  isCompleted?:boolean;
};


