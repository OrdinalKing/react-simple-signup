import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SharedService } from './shared/shared.service';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    AdminModule,
    MaterialModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
