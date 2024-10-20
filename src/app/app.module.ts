import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//////////////////////////////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { ElaraComponent } from './elara/elara.component';
import { AquaelComponent } from './aquael/aquael.component';
import { IgnisComponent } from './ignis/ignis.component';
import { EigorComponent } from './eigor/eigor.component';
import { HippieComponent } from './hippie/hippie.component';
import { MacaComponent } from './maca/maca.component';
import { CovaComponent } from './cova/cova.component';

@NgModule({
  declarations: [
    AppComponent,
    ElaraComponent,
    AquaelComponent,
    IgnisComponent,
    EigorComponent,
    HippieComponent,
    MacaComponent,
    CovaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
