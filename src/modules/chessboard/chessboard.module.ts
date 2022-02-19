import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChessboardRoutingModule } from './chessboard-routing.module';
import { ChessboardComponent } from './chessboard.component';

@NgModule({
  declarations: [
    ChessboardComponent
  ],
  imports: [
    CommonModule,
    ChessboardRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ChessboardComponent]
})
export class ChessboardModule { }
