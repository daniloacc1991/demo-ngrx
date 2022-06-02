import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.interface";

export enum ActionsLive {
  LiveCreate = '[User] Live Create',
  LiveUpdate = '[User] Live Update',
  LiveDelete = '[User] Live Delete',
}

export const findAll = createAction(
  '[User] Find All',
)

export const findAllSuccess = createAction(
  '[User] Find All Success',
  props<{ users: User[] }>(),
)

export const findAllFailure = createAction(
  '[User] Find All Failure',
  props<{ errorMessage: string }>(),
)

export const createSuccess = createAction(
  '[User] Create Success Request',
  props<{ newUser: User }>(),
);

export const updateSuccess = createAction(
  '[User] Update Success Request',
  props<{ id: number, newUser: User }>(),
);
