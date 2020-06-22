import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from './home.component';

import { DashboardModule } from '../../components/dashboard/dashboard.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppRoutingModule, DashboardModule]
})
export class HomeModule { }
