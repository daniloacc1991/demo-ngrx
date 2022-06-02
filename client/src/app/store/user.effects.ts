import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../services/user.service";
import {UserSocket} from "../services/user.socket";
import * as fromActions from './user.actions'
import {catchError, map, of, switchMap} from "rxjs";
import {User} from "../models/user.interface";

@Injectable()
export class UserEffects {

  findAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.findAll),
      switchMap(() => this.userService.findAll().pipe(
        map(users => fromActions.findAllSuccess({users})),
        catchError(err => of(fromActions.findAllFailure({errorMessage: err.message})))
      ))
    )
  )

  createSocket$ = createEffect(() =>
    this.userSocket.fromEvent<User>(fromActions.ActionsLive.LiveCreate)
      .pipe(map(newUser => fromActions.createSuccess({newUser})))
  )

  updateSocket$ = createEffect(() =>
    this.userSocket.fromEvent<User>(fromActions.ActionsLive.LiveUpdate)
      .pipe(map(newUser => fromActions.updateSuccess({id: newUser.id, newUser})))
  )

  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService,
    private readonly userSocket: UserSocket,
  ) {
  }
}
