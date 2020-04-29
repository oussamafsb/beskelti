import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VeloComponent } from './velo/velo.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { VetementsComponent } from './vetements/vetements.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: "Accueil" , component: HomeComponent},
  {path: "Velo" , component: VeloComponent},
  {path: "Pieces", component: PiecesComponent},
  {path: "Accessoires" , component: AccessoiresComponent},
  {path: "Vetements" , component: VetementsComponent},
  {path: "Profile" , component: ProfileComponent  },
  {path: '',   redirectTo: '/Accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
