import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
