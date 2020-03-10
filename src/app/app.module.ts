import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './game/game.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	HeaderComponent
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
	MatInputModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
