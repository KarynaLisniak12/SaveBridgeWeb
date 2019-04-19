import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingManagementRoutingModule } from './building-management-routing.module';

import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { TopMenuComponent } from 'src/app/shared/components/top-menu/top-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopMenuComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BuildingManagementRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BuildingManagementModule { }
