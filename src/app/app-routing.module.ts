import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/chessboard', pathMatch: 'full' },
  {
    path: 'chessboard',
    loadChildren: () => import('../modules/chessboard/chessboard.module').then((m) => m.ChessboardModule)
  },
  { path: '**', redirectTo: '/chessboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
