import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngOnInit() : void {

  }
}
