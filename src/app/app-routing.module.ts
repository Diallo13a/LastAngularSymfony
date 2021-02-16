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
import {EditProfilComponent} from './profil/edit-profil/edit-profil.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {DetailListUserComponent} from './user/list-user/detail-list-user/detail-list-user.component';
import {DetailListProfilComponent} from './profil/list-profil/detail-list-profil/detail-list-profil.component';
import {DetailPsComponent} from './profil-sortie/list-ps/detail-ps/detail-ps.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  {path: 'layout', component: LayoutComponent, children: [
      {path: 'profil', component: ProfilComponent},
      {path: 'user', component: UserComponent},
      {path: 'promo', component: PromoComponent},
      {path: 'add-profil', component: AddProfilComponent},
      {path: 'edit-profil/:id', component: EditProfilComponent},
      {path: 'edit-user/:id', component: EditUserComponent},
      {path: 'detail-list-user/:id', component: DetailListUserComponent},
      {path: 'detail-list-profil/:id', component: DetailListProfilComponent},
      {path: 'add-user', component: AddUserComponent},
      // {path: 'edit-user', component: EditUserComponent},
      {path: 'profil-sortie', component: ProfilSortieComponent},
      {path: 'add-profil-sortie', component: AddPsComponent},
      {path: 'detail-ps', component: DetailPsComponent},
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
