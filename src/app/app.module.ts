import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ThemeOptions} from './theme-options';
import { ButtonsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
// NGX Bootstrap Carousel
import { CarouselModule } from 'ngx-bootstrap';
// NGX Bootstrap Dropdown
import { BsDropdownModule } from 'ngx-bootstrap';
// NGX Bootstrap Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap';
// NGX Bootstrap Modal
import { ModalModule } from 'ngx-bootstrap';
// NGX Bootstrap Pagination
import { PaginationModule } from 'ngx-bootstrap';
// NGX Bootstrap Progress bar
import { ProgressbarModule } from 'ngx-bootstrap';
// NGX Bootstrap Tabs
import { TabsModule } from 'ngx-bootstrap';
// NGX Bootstrap Popover
import { PopoverModule } from 'ngx-bootstrap';
// NGX Bootstrap Tooltip
import { TooltipModule } from 'ngx-bootstrap';
// NGX Bootstrap Accordion
import { AccordionModule } from 'ngx-bootstrap';
// NGX Bootstrap Alert
import { AlertModule } from 'ngx-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
wheelPropagation: false
};
// Ngx UI Switch
import { UiSwitchModule } from 'ngx-ui-switch';
// NG2 File Upload
import { FileUploadModule } from 'ng2-file-upload';
// NGX Dropzone for Angular
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
// Change this to your upload POST address:
url: 'https://httpbin.org/post',
maxFilesize: 50,
acceptedFiles: 'image/*'
};

// Formly Core

import {FormlyModule} from '@ngx-formly/core';

// Formly Bootstrap

import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

// Archwizard

import { ArchwizardModule } from 'angular-archwizard';

// AngularEditor

import {AngularEditorModule} from '@kolkov/angular-editor';

// Angular Circle Progress

import {NgCircleProgressModule} from 'ng-circle-progress';

// Angular Gauge Wrapper

import {GaugeModule} from 'angular-gauge';

// Angular Circle Progress

import {NgxGaugeModule} from 'ngx-gauge';

// Angular Ladda2 Buttons Loader

import {LaddaModule} from 'angular2-ladda';

// Angular FullWidth Calendar

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Date-fns



// NGX Slick Carousel

import { SlickCarouselModule } from 'ngx-slick-carousel';

// jQuery



// Slick Carousel



// NG2 Charts

import { ChartsModule } from 'ng2-charts';

// Chart.js Annotations



// Chart.js Datalabels



// Chart.js



// NGX Context Menu

import { ContextMenuModule } from 'ngx-contextmenu';

// Angular Component Development Kit



// Angular CountUp

import { CountUpModule } from 'countup.js-angular2';

// Dragula for Angular

import { DragulaModule } from 'ng2-dragula';

// NG2 Table

import { Ng2TableModule } from 'ng2-table';

// NG2 Smart Table

import { Ng2SmartTableModule } from 'ng2-smart-table';

// NG2 Completer

import { Ng2CompleterModule } from 'ng2-completer';

// Angular Colorpicker

import { ColorPickerModule } from 'ngx-color-picker';

// NGX Clipboard

import { ClipboardModule } from 'ngx-clipboard';

// NG Select

import { NgSelectModule } from '@ng-select/ng-select';

// NGX Autosize

import { AutosizeModule } from 'ngx-autosize';

// Angular noUiSlider

import { NouisliderModule } from 'ng2-nouislider';

// noUiSlider

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


// Angular Flags Icons

import { NgxFlagIconCssModule } from 'ngx-flag-icon-css';

// SVG Flags Icons



// Angular Feather Icons

import { FeatherModule } from 'angular-feather';
import { Calendar, Activity, Bell, Settings, Search, Grid, Users, LifeBuoy, CloudDrizzle, Coffee, Box, Briefcase, Layers, Printer } from 'angular-feather/icons';
const icons = {
   Calendar,
   Activity,
   Bell,
   Settings,
   Search,
   Grid,
   Users,
   LifeBuoy,
   CloudDrizzle,
   Coffee,
   Box,
   Briefcase,
   Layers,
   Printer
};

// FontAwesome Regular SVG Icons

import { faSquare, faCheckCircle, faTimesCircle, faDotCircle, faThumbsUp, faComments, faFolderOpen, faTrashAlt, faFileImage, faFileArchive, faLifeRing, faCommentDots, faFolder, faKeyboard, faCalendarAlt, faEnvelope, faAddressCard, faMap, faObjectGroup, faImages, faUser, faLightbulb, faGem, faClock, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar } from '@fortawesome/free-regular-svg-icons';

// FontAwesome Solid SVG Icons

import { faChevronRight, faSitemap, faPrint, faMapMarkerAlt, faTachometerAlt, faAlignCenter, faExternalLinkAlt, faShareSquare, faInfoCircle, faSync, faQuoteRight, faStarHalfAlt, faShapes, faCarBattery, faTable, faCubes, faPager,  faCameraRetro, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faUnlockAlt, faDownload, faAward, faPlayCircle, faReply, faUpload, faBars, faEllipsisV, faSave, faSlidersH, faCaretRight, faChevronUp, faPlus, faLemon, faChevronLeft, faTimes, faChevronDown, faFilm, faSearch, faEllipsisH, faCog, faArrowsAltH, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLink } from '@fortawesome/free-solid-svg-icons';

// FontAwesome Brand SVG Icons

import { faFacebook, faTwitter, faAngular, faVuejs, faReact, faHtml5, faGoogle, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons';

// Angular FontAwesome Icons

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Angular FontAwesome Icons Core



// Ionicons



// Pe7 Icons



// Socicons Icons



// NG Spin Kit

import { NgSpinKitModule } from 'ng-spin-kit';

// NGX Skeleton Loader

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// Angular Progressbar Core

import { NgProgressModule } from '@ngx-progressbar/core';

// Angular Progressbar router module

import { NgProgressRouterModule } from '@ngx-progressbar/router';

// NGX Spinner

import { NgxSpinnerModule } from 'ngx-spinner';

// Angular Google Maps

import { AgmCoreModule } from '@agm/core';

// Angular SweetAlerts2 Notifications

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// SweetAlerts2 Notifications


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Angular Notifier

import { NotifierModule, NotifierOptions } from 'angular-notifier';
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'uifort',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
     easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
     easing: 'ease'
    },
    overlap: 150
  }
};

// NGX Pagination for Angular

import { NgxPaginationModule } from 'ngx-pagination';

// NGX Ratings for Angular

import { BarRatingModule } from 'ngx-bar-rating';

// Angular Infinite Scroll

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Angular Elegant Trends Graphs

import { TrendModule } from 'ngx-trend';

// Angular Tree Component

import { TreeModule } from 'angular-tree-component';

// UUID



// Angular Tree Grid

import { AngularTreeGridModule } from 'angular-tree-grid';

// NGX Joyride

import { JoyrideModule } from 'ngx-joyride';

// Hamburgers navigation buttons



// NGX Image Cropper

import { ImageCropperModule } from 'ngx-image-cropper';

// Dual listbox

import { AngularDualListBoxModule } from 'angular-dual-listbox';

// Input Mask

import { TextMaskModule } from 'angular2-text-mask';

// Angular Leaflet maps

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Leaflet Maps

import { tileLayer, latLng } from 'leaflet';

// Layouts

import { LeftSidebarComponent } from './layout-blueprints/left-sidebar/left-sidebar.component';
import { CollapsedSidebarComponent } from './layout-blueprints/collapsed-sidebar/collapsed-sidebar.component';
import { MinimalLayoutComponent } from './layout-blueprints/minimal-layout/minimal-layout.component';
import { PresentationLayoutComponent } from './layout-blueprints/presentation-layout/presentation-layout.component';

// Layout components

import { HeaderComponent } from './layout-components/header/header.component';
import { HeaderDrawerComponent } from './layout-components/header-drawer/header-drawer.component';
import { HeaderUserboxComponent } from './layout-components/header-userbox/header-userbox.component';
import { HeaderSearchComponent } from './layout-components/header-search/header-search.component';
import { HeaderMenuComponent } from './layout-components/header-menu/header-menu.component';
import { SidebarCollapsedComponent } from './layout-components/sidebar-collapsed/sidebar-collapsed.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './layout-components/sidebar-header/sidebar-header.component';
import { SidebarUserboxComponent } from './layout-components/sidebar-userbox/sidebar-userbox.component';
import { SidebarMenuComponent } from './layout-components/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './layout-components/sidebar-footer/sidebar-footer.component';
import { PageTitleComponent } from './layout-components/page-title/page-title.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { ThemeConfiguratorComponent } from './layout-components/theme-configurator/theme-configurator.component';
import { PromoSectionComponent } from './layout-components/promo-section/promo-section.component';
import { ExampleWrapperSimpleComponent } from './layout-components/example-wrapper-simple/example-wrapper-simple.component';
import { ExampleWrapperSeamlessComponent } from './layout-components/example-wrapper-seamless/example-wrapper-seamless.component';
import { ExampleWrapperContainerComponent } from './layout-components/example-wrapper-container/example-wrapper-container.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HomeComponent } from './Components/home/home.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProfileComponent } from './Auth/profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { MangerAccountComponent } from './Components/manger-account/manger-account.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDrawerComponent,
    HeaderUserboxComponent,
    HeaderSearchComponent,
    HeaderMenuComponent,
    SidebarCollapsedComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarUserboxComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    PageTitleComponent,
    FooterComponent,
    ThemeConfiguratorComponent,
    PromoSectionComponent,
    ExampleWrapperSimpleComponent,
    ExampleWrapperSeamlessComponent,
    ExampleWrapperContainerComponent,
    // Layouts
    LeftSidebarComponent,
    CollapsedSidebarComponent,
    MinimalLayoutComponent,
    PresentationLayoutComponent,
    HomeComponent,
    CustomersComponent,

    LoginComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    MangerAccountComponent,
    ContactUsComponent,
    AboutUsComponent,
    TeamMemmberComponent,
    TermsComponent,
    BlogComponent,
    VediosComponent,
    SliderComponent,
    OurServicesComponent,
    WimagesComponent,
    NewsComponent,
    NominationformComponent,
    NominationformUserComponent,
    OurPartnerComponent,
    MainPlaceComponent,
    CityComponent,
    OrganizationsComponent,
    OrgUsersComponent,
    NominationFormOrgComponent,
    SliderComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,NgbPaginationModule, NgbAlertModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    NgApexchartsModule,
    PerfectScrollbarModule,
    UiSwitchModule,
    FileUploadModule,
    DropzoneModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    ArchwizardModule,
    AngularEditorModule,
    NgCircleProgressModule.forRoot(),
    GaugeModule.forRoot(),
    NgxGaugeModule,
    LaddaModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory }),
    SlickCarouselModule,
    ChartsModule,
    ContextMenuModule.forRoot(),
    CountUpModule,
    DragulaModule.forRoot(),
    Ng2TableModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    ColorPickerModule,
    ClipboardModule,
    NgSelectModule,
    AutosizeModule,
    NouisliderModule,
    NgxFlagIconCssModule,
    FeatherModule.pick(icons),
    FontAwesomeModule,
    NgSpinKitModule,
    NgxSkeletonLoaderModule,
    NgProgressModule,
    NgProgressRouterModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({apiKey: "AIzaSyDG3L4ht-0ukJnRj8bJHSfJcYBWoiD4Mz8"}),
    SweetAlert2Module.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
    NgxPaginationModule,
    BarRatingModule,
    InfiniteScrollModule,
    TrendModule,
    TreeModule.forRoot(),
    AngularTreeGridModule,
    JoyrideModule.forRoot(),
    ImageCropperModule,
    AngularDualListBoxModule,
    TextMaskModule,
    LeafletModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    CookieService , {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
},
    {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
},
    ThemeOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
   library.addIcons(faFacebook, faPrint, faAlignCenter, faMapMarkerAlt, faTachometerAlt, faExternalLinkAlt, faShareSquare, faSitemap, faInfoCircle, faLifeRing, faTwitter, faQuoteRight, faStarHalfAlt, faSync, faShapes, faCarBattery, faTable, faCubes, faPager,  faAngular, faVuejs, faReact, faHtml5, faCheckCircle, faTimesCircle, faBomb, faNetworkWired, faBusAlt, faBirthdayCake, faEyeDropper, faThumbsUp, faCameraRetro, faUnlockAlt, faDownload, faUpload, faReply, faGoogle, faFileImage, faFolderOpen, faBars, faTrashAlt, faSave, faPlayCircle, faEllipsisV, faEllipsisH, faSlidersH, faFileArchive, faAward, faCaretRight, faInstagram, faPinterest, faYoutube, faDiscord, faSlack, faDribbble, faGithub, faPlus, faFolder, faTimes, faEnvelope, faAddressCard, faMap, faCalendarAlt, faImages, faFilm, faClock, faSearch, faChevronRight, faChevronUp, faChevronLeft, faChevronDown, faLink, faLightbulb, faGem, faCog, faDotCircle, faArrowsAltH, faComments, faCommentDots, faKeyboard, faObjectGroup, faUser, faUserCircle, faQuestionCircle, faBuilding, faBell, faFileExcel, faFileAudio, faFileVideo, faFileWord, faFilePdf, faFileCode, faFileAlt, faEye, faChartBar, faPlusCircle, faAngleRight, faAngleUp, faAngleLeft, faAngleDown, faArrowUp, faArrowDown, faArrowRight, faArrowLeft, faStar, faSignOutAlt, faLemon);
}
}
