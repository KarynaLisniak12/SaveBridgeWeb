import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/login', pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadChildren: 'src/app/pages/account/account.module#AccountModule' 
  },
  { 
    path: 'building', 
    loadChildren: 'src/app/pages/building-management/building-management.module#BuildingManagementModule' 
  },
  { 
    path: 'device', 
    loadChildren: 'src/app/pages/device-management/device-management.module#DeviceManagementModule' 
  },
  { 
    path: 'statistic', 
    loadChildren: 'src/app/pages/statistic/statistic.module#StatisticModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
