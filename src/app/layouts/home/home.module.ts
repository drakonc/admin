import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from './home.component';

// Layouts
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';

// Modulos
import { DashboardModule } from '../../components/dashboard/dashboard.module';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, DashboardModule]
})
export class HomeModule { }
