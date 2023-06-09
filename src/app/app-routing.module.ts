import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandeDessinerComponent } from './bande-dessiner/bande-dessiner.component';
import { AProposComponent } from './apropos/apropos.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';


const routes: Routes = [
    { path: 'accueil', component: BandeDessinerComponent },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'apropos', component: AProposComponent },
    { path: '**', component: NonTrouveComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  