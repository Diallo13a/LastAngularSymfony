import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { DetailListUserComponent } from './user/list-user/detail-list-user/detail-list-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ProfilComponent } from './profil/profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { DetailListProfilComponent } from './profil/list-profil/detail-list-profil/detail-list-profil.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddPsComponent } from './profil-sortie/add-ps/add-ps.component';
import { ListPsComponent } from './profil-sortie/list-ps/list-ps.component';
import { DetailPsComponent } from './profil-sortie/list-ps/detail-ps/detail-ps.component';
import { EditPsComponent } from './profil-sortie/edit-ps/edit-ps.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { GroupeCompetenceComponent } from './groupe-competence/groupe-competence.component';
import { AddGrpcComponent } from './groupe-competence/add-grpc/add-grpc.component';
import { ListGrpcComponent } from './groupe-competence/list-grpc/list-grpc.component';
import { DetailListGrpcComponent } from './groupe-competence/list-grpc/detail-list-grpc/detail-list-grpc.component';
import { EditGrpcComponent } from './groupe-competence/edit-grpc/edit-grpc.component';
import { CompetenceComponent } from './competence/competence.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { PromoComponent } from './promo/promo.component';
import { ListPromoComponent } from './promo/list-promo/list-promo.component';
import { AddPromoComponent } from './promo/add-promo/add-promo.component';
import { EditPromoComponent } from './promo/edit-promo/edit-promo.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './referentiel/list-referentiel/list-referentiel.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { ListCompetenceComponent } from './competence/list-competence/list-competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { LayoutComponent } from './layout/layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginInterceptor} from './interceptors/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    ListUserComponent,
    DetailListUserComponent,
    EditUserComponent,
    ProfilComponent,
    AddProfilComponent,
    ListProfilComponent,
    DetailListProfilComponent,
    EditProfilComponent,
    ProfilSortieComponent,
    AddPsComponent,
    ListPsComponent,
    DetailPsComponent,
    EditPsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    GroupeCompetenceComponent,
    AddGrpcComponent,
    ListGrpcComponent,
    DetailListGrpcComponent,
    EditGrpcComponent,
    CompetenceComponent,
    ReferentielComponent,
    PromoComponent,
    ListPromoComponent,
    AddPromoComponent,
    EditPromoComponent,
    AddReferentielComponent,
    ListReferentielComponent,
    EditReferentielComponent,
    AddCompetenceComponent,
    ListCompetenceComponent,
    EditCompetenceComponent,
    LayoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
      FormsModule,
    ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
