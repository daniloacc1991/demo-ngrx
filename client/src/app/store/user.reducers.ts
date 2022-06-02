import {createReducer, on} from "@ngrx/store";
import {initialUserState, userAdapter, UserState} from "./user.state";
import * as fromActions from './user.actions'

export const userReducers = createReducer<UserState>(
  initialUserState,
  on(fromActions.findAll, (state) => ({...state, isLoading: true})),
  on(fromActions.findAllSuccess, (state, {users }) => userAdapter.setMany(users, {...state, isLoading: false})
  ),
  on(fromActions.findAllFailure, (state, {errorMessage}) => ({...state, isLoading: false, errorMessage})),
  on(fromActions.createSuccess, (state, {newUser}) =>
    userAdapter.addOne(newUser, state)),
  on(fromActions.updateSuccess, (state, {newUser}) =>
    userAdapter.upsertOne(newUser, state))
)
