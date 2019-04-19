import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticRoutingModule } from './statistic-routing.module';

import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { TopMenuComponent } from 'src/app/shared/top-menu/top-menu.component';
import { ParametersStatisticComponent } from './parameters-statistic/parameters-statistic.component';
import { BreakdownStatisticComponent } from './breakdown-statistic/breakdown-statistic.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TopMenuComponent,
    ParametersStatisticComponent,
    BreakdownStatisticComponent
  ],
  imports: [
    CommonModule,
    StatisticRoutingModule
  ], 
  exports: [
    ParametersStatisticComponent,
    BreakdownStatisticComponent
  ]
})
export class StatisticModule { }
