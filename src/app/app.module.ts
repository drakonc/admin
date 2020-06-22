import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './layouts/login/login.module';
import { HomeModule } from './layouts/home/home.module';
import { SidebarComponent } from './layouts/components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
