import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier";
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: any;
  email: any;
  logo: any;
  user_count;
  mangerAccount;
  teamMemmber;
  AllContactUs;
  AllTerms;
  AllNews;
  Allservices;
  AllOrg;
  Allprot;
  Allvedios;
  progressRef: NgProgressRef;

  private readonly notifier: NotifierService;

  constructor(private cookieService: CookieService, private ApiService: APiService, private progress: NgProgress,
    private router: Router, private notifierService: NotifierService) {

    this.name = this.cookieService.get('name');
    this.email = this.cookieService.get('email');
    this.logo = this.cookieService.get('logo');

    this.notifier = notifierService;

  }
  ngOnInit() {

    this.ApiService.GetAllUser().subscribe(
      res => {

        let resources: any[] = res["data"];
        this.user_count = resources.length;

      });


    this.ApiService.GetAllAdmin().subscribe(
      res => {

        let resources: any[] = res["data"];
        this.mangerAccount = resources.length;

      });



    this.ApiService.GetAllTeamMemmber().subscribe(
      res => {

        let resources: any[] = res["data"];
        this.teamMemmber = resources.length;

      });


    this.ApiService.GetAllContactUs("1").subscribe(
      res => {

        let resources: any[] = res["data"];
        this.AllContactUs = resources.length;

      });


    this.ApiService.GetAllOrganizations().subscribe(
      res => {

        let resources: any[] = res["data"];
        this.AllOrg = resources.length;

      });


    this.ApiService.GetAllourServices("2").subscribe(
      res => {

        let resources: any[] = res["data"];
        this.Allservices = resources.length;

      });


      this.ApiService.GetAllourServices("4").subscribe(
        res => {

          let resources: any[] = res["data"];
          this.AllNews = resources.length;

        });
        this.ApiService.GetAllPimages("1").subscribe(
          res => {

            let resources: any[] = res["data"];
            this.Allprot = resources.length;
          });

        this.ApiService.GetAllvedios().subscribe(
          res => {

            let resources: any[] = res["data"];
            this.Allvedios = resources.length;

          });

  }

}
