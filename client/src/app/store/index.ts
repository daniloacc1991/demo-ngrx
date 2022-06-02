import {UserState} from "./user.state";
import {Action, ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {userReducers} from "./user.reducers";
import {environment} from "../../environments/environment";

export interface AppState {
  users: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: userReducers,
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  // @ts-ignore
  return (state: AppState, action: Action): AppState => {
    console.log('State', state);
    console.log('Action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
