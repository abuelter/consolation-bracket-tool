import { NgModule } from '@angular/core';
import { ConsolationScoresComponent } from './consolation-scores/consolation-scores.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '**', component: ConsolationScoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
