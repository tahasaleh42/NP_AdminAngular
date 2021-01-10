import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

declare var $: any;
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
   padding-right: 250px; 

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

@media (min-width: 992px){
  .app-sidebar-collapsed.app-header-fixed .app-header {
    left: 0 !important;
    right: 88px !important;
}
}


.app-header-fixed .app-header {
  position: fixed;
  left: 0 !important;
  right: 250px ;
  margin-left: unset !important;
  margin-right: 0 !important;
  direction: rtl;
}

.dropdown-menu-right{
  
  right: -15px !important;
}

@media (min-width: 992px){
  .app-sidebar-collapsed .app-content {
    padding-right: 88px !important;
}
}

.search-wrapper--grow .form-control {
  width: 200px !important;
}
.app-content--inner {
  padding: 2rem;
  padding-top: 5rem;
  display: flex;
  flex: 1;
}
@media (max-width: 1280.98px){
  .app-sidebar-overlay.is-active {
    opacity: 0;
    visibility: visible;
    width: 100%;
    height: 100%;
}
}

/* @media(max-width:991px){

} */
@media (max-width: 1280.98px){
  

.dropdown-menu-lg{
  transform: translateX(150px) !important;
}
}
`;

function changeLanguageAr() {
  document.head.appendChild(style);

  /*******************end add language************* */
}
function changeLanguageEn() {
  document.head.removeChild(style);
}

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html'
})
export class HeaderMenuComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
   }

  ngOnInit(){
    this.addAr();
    this.translate.use('ar');

    if($( window ).width() <= 992){
      $( ".app-sidebar" ).addClass('display_none')
      $( ".app-sidebar" ).removeClass('display_flex')
      /*  app-content $('.app-header').css('right','0px') */
      $('.app-header').css('right','0px')  
      $('.app-content').css('padding-right','0px')  




      $( ".navbar-toggler" ).click(function() {

        if($( ".app-sidebar" ).hasClass('display_flex')){
          
           
  
  
          $( ".app-sidebar" ).addClass('display_none')
          $( ".app-sidebar" ).removeClass('display_flex')
          /*  app-content $('.app-header').css('right','0px') */
          $('.app-header').css('right','0px')  
          $('.app-content').css('padding-right','0px')  
        }else{
          $( ".app-sidebar" ).addClass('display_flex')
          $( ".app-sidebar" ).removeClass('display_none')
          $('.app-sidebar-overlay').removeClass('is-active')
        }
       
  
      });
  
  
      $( ".sidebar-navigation" ).click(function() {
  
        if($( ".app-sidebar" ).hasClass('display_none')){
          $( ".app-sidebar" ).addClass('display_flex')
          $( ".app-sidebar" ).removeClass('display_none')
          $('.app-sidebar-overlay').removeClass('is-active')
           
          
        }else{
          $( ".app-sidebar" ).addClass('display_none')
          $( ".app-sidebar" ).removeClass('display_flex')
          /*  app-content $('.app-header').css('right','0px') */
          $('.app-header').css('right','0px')  
          $('.app-content').css('padding-right','0px')  
           
        }
       
  
  
      });
    



    }
  
  }

  reload(){
    location.reload();
  }
  addAr() {
    changeLanguageAr();
    document.getElementById("english").style.display = "inline";
    document.getElementById("arabic").style.display = "none";

  }

  addEn() {

    changeLanguageEn();
    document.getElementById("english").style.display = "none";
    document.getElementById("arabic").style.display = "inline";

  }


  switchLanguage(language: string) {
     this.translate.use(language);
  }

}
