import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./components/users/list/list.component";
import {ListNgrxComponent} from "./components/users/list-ngrx/list-ngrx.component";
import {EditNgrxComponent} from "./components/users/edit-ngrx/edit-ngrx.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'list-ngrx',
        component: ListNgrxComponent,
      },
      {
        path: 'edit/:id',
        component: EditNgrxComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
