import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadearComponent } from './components/headear/headear.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutosComponent } from './components/autos/autos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadearComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
