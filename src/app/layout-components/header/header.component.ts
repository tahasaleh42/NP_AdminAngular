import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  imageHost = environment.imageUrl;
  name:string;
  email:string;
  image:string;



  constructor(private cookieService: CookieService ,private ApiService:APiService,
    private router:Router , private notifierService: NotifierService ,public globals: ThemeOptions ) {

      this.name = localStorage.getItem('fullName');
      this.email =  localStorage.getItem('email');
      this.image =  localStorage.getItem('image');

  }
ngOnInit() {


}
  toggleSidebarMobileOpen() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    this.globals.toggleSidebar = false;
  }


  logout(){
    localStorage.removeItem('statue');
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/login'])

  }


}
