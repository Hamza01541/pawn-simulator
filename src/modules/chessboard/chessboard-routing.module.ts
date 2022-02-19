import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessboardComponent } from './chessboard.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'simulator', pathMatch: 'full' },
      { path: 'simulator', component: ChessboardComponent },
      { path: '**', redirectTo: 'simulator' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChessboardRoutingModule { }
