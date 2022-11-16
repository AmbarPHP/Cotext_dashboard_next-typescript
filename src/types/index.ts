import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IMenuItem {
  route?: string;
  literal: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
};
export type ITask = {
  name: string;
  description: string;
  done: boolean;
  status?:string;
  id_subtask?:number;
};

export type ISubTask = {
  name?: string;
};


