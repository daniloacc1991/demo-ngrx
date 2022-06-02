import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../../../models/user.interface";
import {Store} from "@ngrx/store";
import {UserState} from "../../../store/user.state";
import {selectCurrentUser} from "../../../store/user.selects";

@Component({
  selector: 'app-edit-ngrx',
  templateUrl: './edit-ngrx.component.html',
  styleUrls: ['./edit-ngrx.component.scss']
})
export class EditNgrxComponent implements OnInit {

  id: number = undefined;
  user$: Observable<User> = undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<UserState>,
  ) {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.user$ = this.store.select(selectCurrentUser, {userId: this.id})
  }

}
