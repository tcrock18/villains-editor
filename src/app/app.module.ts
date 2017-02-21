import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillainsListComponent } from './villains-list/villains-list.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VillainsListComponent,
    VillainDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
