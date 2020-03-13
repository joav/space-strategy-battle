import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'space-strategy-battle';
  constructor(matIconRegistry: MatIconRegistry){
	matIconRegistry.registerFontClassAlias('fas');
	matIconRegistry.registerFontClassAlias('far');
	matIconRegistry.registerFontClassAlias('fa');
  }
}
