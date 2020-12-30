import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {ProfilComponent} from './profil/profil.component';
import {UserComponent} from './user/user.component';
import {HeaderComponent} from './header/header.component';
import {AddProfilComponent} from './profil/add-profil/add-profil.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {ProfilSortieComponent} from './profil-sortie/profil-sortie.component';
import {AddPsComponent} from './profil-sortie/add-ps/add-ps.component';
import {GroupeCompetenceComponent} from './groupe-competence/groupe-competence.component';
import {AddGrpcComponent} from './groupe-competence/add-grpc/add-grpc.component';
import {CompetenceComponent} from './competence/competence.component';
import {AddCompetenceComponent} from './competence/add-competence/add-competence.component';
import {ReferentielComponent} from './referentiel/referentiel.component';
import {AddReferentielComponent} from './referentiel/add-referentiel/add-referentiel.component';
import {PromoComponent} from './promo/promo.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'layout', component: LayoutComponent, children: [
      {path: 'profil', component: ProfilComponent},
      {path: 'user', component: UserComponent},
      {path: 'promo', component: PromoComponent},
      {path: 'add-profil', component: AddProfilComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'profil-sortie', component: ProfilSortieComponent},
      {path: 'add-profil-sortie', component: AddPsComponent},
      {path: 'groupe-competence', component: GroupeCompetenceComponent},
      {path: 'add-groupe-competence', component: AddGrpcComponent},
      {path: 'competence', component: CompetenceComponent},
      {path: 'add-competence', component: AddCompetenceComponent},
      {path: 'referentiel', component: ReferentielComponent},
      {path: 'add-referentiel', component: AddReferentielComponent},
      {path: 'admin', component: AdminComponent},

    ]},

  {path: 'header', component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
