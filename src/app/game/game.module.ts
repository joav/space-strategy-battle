import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { BoardComponent } from './board/board.component';
import { ActionBoardComponent } from './action-board/action-board.component';
import { CellComponent } from './cell/cell.component';
import { GameService } from './game.service';
import { ShipBoardComponent } from './ship-board/ship-board.component';

@NgModule({
	declarations: [
		BoardComponent,
		CellComponent,
		ActionBoardComponent,
		ShipBoardComponent
	],
	imports: [
		CommonModule,
		DragDropModule
	],
	exports: [
		BoardComponent
	],
	providers: [
		GameService
	],
})
export class GameModule {}
