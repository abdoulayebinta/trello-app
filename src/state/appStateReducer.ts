import { Action } from './actions';

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: toString(Math.round(Math.random() * 1000)),
        text: action.payload,
        tasks: [],
      });
      break;
    }
  }
};
