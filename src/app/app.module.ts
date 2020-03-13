import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './game/game.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ActivesComponent } from './actives/actives.component';
import { ModesComponent } from './modes/modes.component';
import { BoardsComponent } from './boards/boards.component';
import { CupsComponent } from './cups/cups.component';

@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	HeaderComponent,
	ActivesComponent,
	ModesComponent,
	BoardsComponent,
	CupsComponent
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
	MatIconModule,
	MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
