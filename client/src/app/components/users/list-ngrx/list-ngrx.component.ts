import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UserState} from "../../../store/user.state";
import {map, Observable, of} from "rxjs";
import {User} from "../../../models/user.interface";
import {selectAll, selectIsLoading} from "../../../store/user.selects";
import * as fromActions from '../../../store/user.actions'
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-ngrx',
  templateUrl: './list-ngrx.component.html',
  styleUrls: ['./list-ngrx.component.scss']
})
export class ListNgrxComponent implements OnInit {

  isLoading$:Observable<boolean> = of(true);
  users$: Observable<User[]> = of([]);
  displayedColumns = ['id', 'firstName', 'lastName', 'isActive', 'options'];

  constructor(
    private readonly store: Store<UserState>,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.findAll())
    this.users$ = this.store.select(selectAll);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  edit(id: number):void {
    this.router.navigate(['edit', id]).then()
  }

}
