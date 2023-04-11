import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './Components/clima/clima.component';

const routes: Routes = [
  { path: 'clima', component: ClimaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/clima' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
