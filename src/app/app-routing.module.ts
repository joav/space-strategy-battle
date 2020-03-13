import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivesComponent } from './actives/actives.component';
import { ModesComponent } from './modes/modes.component';
import { BoardsComponent } from './boards/boards.component';
import { CupsComponent } from './cups/cups.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: ModesComponent
			},
			{
				path: 'desafios-activos',
				component: ActivesComponent
			},
			{
				path: 'tableros',
				component: BoardsComponent
			},
			{
				path: 'copas',
				component: CupsComponent
			}
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
