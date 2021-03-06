import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatButtonModule, MatIconModule } from "@angular/material";

import { BoardComponent } from './board/board.component';
import { ActionBoardComponent } from './action-board/action-board.component';
import { CellComponent } from './cell/cell.component';
import { GameService } from './game.service';
import { ShipBoardComponent } from './ship-board/ship-board.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
	declarations: [
		BoardComponent,
		CellComponent,
		ActionBoardComponent,
		ShipBoardComponent,
		ShipComponent
	],
	imports: [
		CommonModule,
		DragDropModule,
		MatButtonModule,
		MatIconModule
	],
	exports: [
		BoardComponent
	],
	providers: [
		GameService
	],
})
export class GameModule {}
