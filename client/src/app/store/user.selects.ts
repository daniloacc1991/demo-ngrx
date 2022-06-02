import {createFeatureSelector, createSelector} from "@ngrx/store";
import {userAdapter, UserState} from "./user.state";

export const selectUserState = createFeatureSelector<UserState>('users')

export const selectIsLoading = createSelector(selectUserState, state => state.isLoading)

export const {
  selectAll,
  selectEntities
} = userAdapter.getSelectors(selectUserState)


export const selectCurrentUser = createSelector(
  selectEntities,
  (userEntities, {userId}) => userId && userEntities[userId]
)
