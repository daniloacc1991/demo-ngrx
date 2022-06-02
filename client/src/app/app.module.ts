import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListComponent} from './components/users/list/list.component';
import {MatTableModule} from '@angular/material/table';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {SocketIoModule} from "ngx-socket-io";
import {UserSocket} from "./services/user.socket";
import {UserEffects} from "./store/user.effects";
import {userReducers} from "./store/user.reducers";
import {metaReducers, reducers} from "./store";
import { ListNgrxComponent } from './components/users/list-ngrx/list-ngrx.component';
import { EditNgrxComponent } from './components/users/edit-ngrx/edit-ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListNgrxComponent,
    EditNgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreModule.forFeature('users', userReducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([UserEffects]),
    SocketIoModule,
  ],
  providers: [UserService, UserSocket],
  bootstrap: [AppComponent]
})
export class AppModule {
}
