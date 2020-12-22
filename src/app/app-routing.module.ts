import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './Auth/profile/profile.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { AuthGuard } from './services/auth-guard.service';
import { MangerAccountComponent } from './Components/manger-account/manger-account.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { TeamMemmberComponent } from './Components/team-memmber/team-memmber.component';
import { TermsComponent } from './Components/terms/terms.component';
import { BlogComponent } from './Components/blog/blog.component';
import { VediosComponent } from './Components/vedios/vedios.component';
import { SliderComponent } from './Components/slider/slider.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { WimagesComponent } from './Components/wimages/wimages.component';
import { NewsComponent } from './Components/news/news.component';
import { NominationformComponent } from './Components/nominationform/nominationform.component';
import { NominationformUserComponent } from './Components/customers/nominationform-user/nominationform-user.component';
import { OurPartnerComponent } from './Components/our-partner/our-partner.component';
import { MainPlaceComponent } from './Components/main-place/main-place.component';
import { CityComponent } from './Components/main-place/city/city.component';
import { OrganizationsComponent } from './Components/organizations/organizations.component';
import { OrgUsersComponent } from './Components/organizations/org-users/org-users.component';
import { NominationFormOrgComponent } from './Components/nomination-form-org/nomination-form-org.component';
import { SingleSocialFormComponent } from './Components/single-social-form/single-social-form.component';
import { SingleNaturalScienceComponent } from './Components/single-natural-science/single-natural-science.component';
import { SingleMedicinFormComponent } from './Components/single-medicin-form/single-medicin-form.component';
import { SingleEqiteFormComponent } from './Components/single-eqite-form/single-eqite-form.component';
import { SingleEconomicFormComponent } from './Components/single-economic-form/single-economic-form.component';
import { SingleArtsFormComponent } from './Components/single-arts-form/single-arts-form.component';
import { OrgArtsFormComponent } from './Components/org-arts-form/org-arts-form.component';
import { OrgEconomicFormComponent } from './Components/org-economic-form/org-economic-form.component';
import { OrgEqiteFormComponent } from './Components/org-eqite-form/org-eqite-form.component';
import { OrgNaturalScienceComponent } from './Components/org-natural-science/org-natural-science.component';
import { OrgSocialFormComponent } from './Components/org-social-form/org-social-form.component';
   
 


const routes: Routes = [

  { path: 'login', component: LoginComponent ,pathMatch: 'full' },
  { path: 'forgotPassword', component: ForgotPasswordComponent ,pathMatch: 'full' },
  {
    path: 'dash',
    component: LeftSidebarComponent,
    children: [
          { path: 'home', component: HomeComponent, pathMatch: 'full',canActivate: [AuthGuard] },
          { path: 'customers', component: CustomersComponent, pathMatch: 'full',canActivate: [AuthGuard] },
          { path: 'profile', component: ProfileComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'contactUs', component: ContactUsComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'mangerAccount', component: MangerAccountComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'organizations', component: OrganizationsComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'aboutUs', component: AboutUsComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'teamMemmber', component: TeamMemmberComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'terms', component: TermsComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'news', component: NewsComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'ourPartner', component: OurPartnerComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'mainPlace', component: MainPlaceComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'media', component: BlogComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},

          { path: 'city/:id',  component: CityComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},

          { path: 'orgUsers/:id', component: OrgUsersComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'city/:id', component: CityComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'vedios', component: VediosComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'slider', component: SliderComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'ourServices', component: OurServicesComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'session/:id', component: WimagesComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'nominationform/:id', component: NominationformComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'nominationformUser/:id', component: NominationformUserComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},

          { path: 'nominationFormOrg/:id', component: NominationFormOrgComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'SingleSocial', component: SingleSocialFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},

          { path: 'SingleNaturalScience', component: SingleNaturalScienceComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},

          { path: 'SingleMedicinForm', component: SingleMedicinFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'SingleEqiteForm', component: SingleEqiteFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'SingleEconomicForm', component: SingleEconomicFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'SingleArtsForm', component: SingleArtsFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'OrgArtsForm', component: OrgArtsFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'OrgEconomicForm', component: OrgEconomicFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'OrgEqiteForm', component: OrgEqiteFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'OrgNaturalScience', component: OrgNaturalScienceComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},
          { path: 'OrgSocialForm', component: OrgSocialFormComponent, pathMatch: 'full' ,canActivate: [AuthGuard]},

          
    ]
    
  }, 

  { path: '', component: LoginComponent ,pathMatch: 'full' },

  { path: '**', redirectTo: '/dash/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
