import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { FipeModule } from './fipe/fipe.module';

import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import { FipeComponent } from './fipe/fipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
