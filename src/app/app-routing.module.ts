import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElaraComponent } from './elara/elara.component';
import { AquaelComponent } from './aquael/aquael.component';
import { CovaComponent } from './cova/cova.component';
import { HippieComponent } from './hippie/hippie.component';
import { IgnisComponent } from './ignis/ignis.component';
import { EigorComponent } from './eigor/eigor.component';
import { MacaComponent } from './maca/maca.component';
//lo más importante para el rooting module(rutas desde donde se puede navegar)
const routes: Routes = [
  { path: 'elara', component: ElaraComponent },
  { path: 'aquael', component: AquaelComponent },
  { path: 'cova', component: CovaComponent },
  { path: 'hippie', component: HippieComponent },
  { path: 'ignis', component: IgnisComponent },
  { path: 'eigor', component: EigorComponent },
  { path: 'maca', component: MacaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
