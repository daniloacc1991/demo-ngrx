import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {User} from "../models/user.interface";

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: user => user.id,
})

export interface UserState extends EntityState<User> {
  isLoading: boolean;
  errorMessage: string | undefined;
}

export const initialUserState: UserState = userAdapter.getInitialState({
  isLoading: false,
  errorMessage: undefined,
})
