import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListUsersCoreComponent } from './containers/list-users-core/list-users-core.component';
import { AddUserCoreComponent } from './containers/add-user-core/add-user-core.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

import { NbCardModule } from "@nebular/theme";
import { DataTablesModule } from 'angular-datatables';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    DataTablesModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    MultiSelectModule,
    RouterModule.forChild([
       {
         path: '',
         pathMatch: 'full',
         component: ListUsersCoreComponent
       },
       {
        path: 'add',
        pathMatch: 'full',
        component: AddUserCoreComponent
      },
    ]),
  ],
  declarations: [ListUsersCoreComponent, AddUserCoreComponent, AddUserComponent, ListUsersComponent],
})
export class DashboardFeatureShellModule {}
