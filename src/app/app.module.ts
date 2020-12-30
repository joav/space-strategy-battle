import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameModule } from './game/game.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ActivesComponent } from './actives/actives.component';
import { ModesComponent } from './modes/modes.component';
import { BoardsComponent } from './boards/boards.component';
import { CupsComponent } from './cups/cups.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
// import { dbConfig } from "./db.config";


@NgModule({
  declarations: [
	AppComponent,
	HomeComponent,
	HeaderComponent,
	ActivesComponent,
	ModesComponent,
	BoardsComponent,
	CupsComponent,
	FooterComponent,
	NavComponent
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
	MatCardModule,
	MatMenuModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireAuthModule,
	AngularFirestoreModule
	// NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
