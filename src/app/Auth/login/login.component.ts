import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier";
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import { TranslateService } from "@ngx-translate/core";
var style = document.createElement("style");
style.innerHTML = `



@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
body, .btn-one , .btn-two , .sec-title .bottom-text , .main-menu .navigation > li > a , .main-menu .navigation > li > ul > li > a , .main-menu .navigation > li > ul > li > ul > li a , .cart-box a ,
.header-contact-info li .single-item .text h3 , .main-slider .slide-content .text , .main-slider .slide-content .btn-box a.project-view-button , .main-slider.style2 .slide-content .text , .main-slider.style2 .slide-content .btn-box a.slide-style2-button , .main-slider.style3 .slide-content .text , .about-image-box .text-box h3 span , .about-style2-image-box .overlay-box .title h1 , .single-working-box-style2 .text-holder .title .count , .single-service-style1 .text-holder .top .count h1 , .single-working-process-style2 .top-box .count h1 , .header-call-button .inner .title h3 , .single-history-content .text-box .inner .date h3 , .single-fact-counter .count-box h1 ,  .single-pricing-box .static-content .table-header .package h1 ,  .sidebar-contact-box .inner-content .bottom-box h2 , .single-blog-post.style3 .post-date h3 , .single-sidebar .categories li a , .author-quote-box .text .name h3 span  , .author-box-holder .inner-box .text h3 span , .single-sidebar-box .categories li a  , .review-box-holder .single-review-box .text-holder .top .name h3 span , .cart-area .cart-table tbody .available-info , .cart-area .cart-table tbody tr td.price , .cart-area .cart-table tbody tr .sub-total , .cart-bottom .calculate-shipping .ui-state-default ,  .cart-bottom .calculate-shipping input[type="text"] ,  .checkout-area .table .cart-table tbody tr td.price , .cart-total-table li span.col , .cart-total .payment-options .option-block .checkbox label span b , .countdown-timer li span.days,
.countdown-timer li span.hours,
.countdown-timer li span.minutes,
.countdown-timer li span.seconds
{
font-family: 'Cairo', sans-serif;

}


a{
  font-family: 'Cairo', sans-serif;

}



/****************************NAVBAR---RTL******************/

 .app-sidebar-fixed .app-sidebar {
     position: fixed;
     left: unset !important;
     right: 0px !important;
 }

 .app-sidebar-fixed .app-content{
  padding-left: unset  !important;
  padding-right: 260px;

 }

 .app-header-fixed .app-header{
  position: fixed;
   left:0 ;
  right: 260px ;
   margin-left:  unset  !important;
   margin-right:  0  !important;
   direction: rtl;
 }
 .user-box{
  direction: ltr;
  margin:15px
 }

 .list-group {
  text-align: center !important;

 }

 .sidebar-header{
  text-align: center !important;

 }
 .app-sidebar--dark .sidebar-navigation ul li > a{
  direction: rtl;

 }
 .sidebar-navigation ul li > a span span{
  text-align: center !important;
  margin:0px  10px !important;

 }
 .app-sidebar--header .expand-sidebar-btn{
  left:0 ;
  right: unset !important;

 }
 .app-sidebar--header{
  direction: rtl;

 }
 .nav-logo a span{
  margin:0px  10px !important;

 }

 .table ,.table thead th{

  direction: rtl;
}

.card-box{
  direction: rtl;

}
.search-wrapper{
  margin-right:15px
}

label{
  float: right;
}

.card-box .card-header--title{
  text-align: right !important;
}
`;


function changeLanguageAr() {
  document.head.appendChild(style);
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private readonly notifier: NotifierService;
  loading: boolean = false;


  Userform = new FormGroup({
    identificationNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })
  constructor(private cookieService: CookieService, private ApiService: APiService,
    private translate: TranslateService, private router: Router, private notifierService: NotifierService,private progress: NgProgress) {
      translate.setDefaultLang("en");
       this.notifier = notifierService;

  }

  progressRef: NgProgressRef;



  ngOnInit() {
    this.translate.use('ar');
    changeLanguageAr();

    this.progressRef = this.progress.ref('myProgress');


    //allBooks: Book[];
    // this.dataService.getAllBooks()
    // .subscribe(
    //   (data: Book[]) => this.allBooks = data,
    //   (err: any) => console.log(err),
    //   () => console.log('All done getting books.')
    // );

  }


  onSubmit(formValue) {

    if (this.Userform.valid) {

      this.progressRef.start();


      this.ApiService.loginAdmin(formValue).subscribe(
        res => {

          let error: any = res["error"];

          if (error == 0) {

            this.notifier.notify("success", "اهلا بعودتك");


            let id: any = res["id"];
            let email: any = res["email"];
            let token: any = res["token"];
            let fullName: any = res["fullName"];
            let identificationNumber: any = res["identificationNumber"];
            let statue: any = res["statue"];
            let image: any = res["image"];
            let phone: any = res["phone"];

            localStorage.setItem("id", id);
            localStorage.setItem("email", email);
            localStorage.setItem("token", token);
            localStorage.setItem("fullName", fullName);
            localStorage.setItem("identificationNumber", identificationNumber);
            localStorage.setItem("statue", statue);
            localStorage.setItem("image", image);
            localStorage.setItem("Phone", phone);

            this.progressRef.complete();


            this.router.navigate(['/dash/home']).then(() => {
              window.location.reload();
            });


          } else {
            this.notifier.notify("error", "رقم التعريف أو كلمة المرور غير صحيحة ");
            this.progressRef.complete();

          }


        });

    } else {

      this.notifier.notify("warning", "يرجي ملئ جمسع الحقول ");
      this.progressRef.complete();

    }

  }


}
