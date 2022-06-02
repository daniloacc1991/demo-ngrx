import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../models/user.interface";
import {UserService} from "../../../services/user.service";
import {Subject, takeUntil} from "rxjs";
import {UserSocket} from "../../../services/user.socket";
import {ActionsLive} from "../../../store/user.actions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  unSubject$ = new Subject();
  isLoading = true
  users: User[] = []
  displayedColumns = ['id', 'firstName', 'lastName', 'isActive', 'options'];

  constructor(
    private readonly userService: UserService,
    private readonly userSocket: UserSocket,
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.findAll().pipe(takeUntil(this.unSubject$))
      .subscribe({
        next: res => {
          this.users = res;
        },
        error: err => {
          console.error(err)
        },
        complete: () => {
          this.isLoading = false;
        }
      })

    this.userSocket.fromEvent<User>(ActionsLive.LiveCreate)
      .pipe(takeUntil(this.unSubject$))
      .subscribe(
        {
          next: res => {
            this.users.push(res)
          },
          error: err => {
            console.error(err)
          },
          complete: () => {
            this.isLoading = false;
          }
        }
      )
  }

  ngOnDestroy(): void {
    this.unSubject$.next(true)
    this.unSubject$.complete();
  }
}
