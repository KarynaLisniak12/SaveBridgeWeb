import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametersStatisticComponent } from './parameters-statistic/parameters-statistic.component';
import { BreakdownStatisticComponent } from './breakdown-statistic/breakdown-statistic.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/parameters', pathMatch: 'full' 
  },
  { 
    path: 'parameters', 
    component: ParametersStatisticComponent 
  },
  { 
    path: 'breakdown', 
    component: BreakdownStatisticComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StatisticRoutingModule { }
