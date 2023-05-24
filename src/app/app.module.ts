import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BandeDessinerComponent } from './bande-dessiner/bande-dessiner.component';
import { ServComponent } from './no-serv/serv.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeDessinerComponent,
    ServComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
