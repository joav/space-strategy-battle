import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './game/game.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	FormsModule,
	ReactiveFormsModule,
	GameModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
