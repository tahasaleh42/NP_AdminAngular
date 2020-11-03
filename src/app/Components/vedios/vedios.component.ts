import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier"
import swal from 'sweetalert2';
import { TranslateService } from "@ngx-translate/core";
import { environment } from 'src/environments/environment';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-vedios',
  templateUrl: './vedios.component.html',
  styleUrls: ['./vedios.component.scss']
})
export class VediosComponent implements OnInit {


  private readonly notifier: NotifierService;
  taskArr:any[];
  taskArrD:any[];
  taskArrlength:any;
  taskid:any;
  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  p: number = 1;
  progressRef: NgProgressRef;
  selectedImage: any = null;
  imgPath: string  = null;
  isSubmitted: boolean;
  imageHost = environment.imageUrl;
  _listFilter = '';
  filteredAllDiscussion: any[] = [];
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAllDiscussion = this.listFilter ? this.performFilter(this.listFilter) : this.taskArr;
  }

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.taskArr.filter((c: any) =>
      c.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  Userform = new FormGroup({
 
    title: new FormControl('', Validators.required),
    vedio: new FormControl('',),


  })
  constructor(private cookieService: CookieService ,private ApiService:APiService, private route: ActivatedRoute,private progress: NgProgress, 
    private translate: TranslateService, private router:Router ,private notifierService: NotifierService ) { 
      this.notifier = notifierService;
  }

  
  ngOnInit() {
    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
     this.ApiService.GetAllvedios().subscribe(
       res => {

         let resources: any[] = res["data"];
         this.taskArr =resources;

         this.taskArrlength =resources.length;
         this.filteredAllDiscussion=resources;
         this.progressRef.complete();

       });

      this.resetForm();
  }

  onSubmit(formValue){
  
    if (this.Userform.valid) {
      this.progressRef.start();
      formValue["vedio"]=this.imgPath;
      this.ApiService.Createvedios(formValue).subscribe(
        res => {

         
              this.notifier.notify("success", "Add successfuly" );
              this.ngOnInit();
              this.resetForm();
              this.progressRef.complete();

              this.currentPage = "list";
          });

     }else{

      this.notifier.notify("warning", "Please fill out all fields correctly!");

     }
    
  }

  onUpdate(formValue) {
     
    if (this.Userform.valid) {
      this.progressRef.start();
      formValue["vedio"]=this.imgPath;
    
      this.ApiService.Updatevedios(formValue,this.taskid).subscribe(
        res => {

          
              this.notifier.notify("success", "Updated Successfuly");
              this.ngOnInit();
              this.resetForm();
              this.progressRef.complete();

              this.currentPage = "list";
          });

     }else{

      this.notifier.notify("warning", "Please fill out all fields correctly!");
      this.progressRef.complete();

     }
    
    
  }

  deleteTask(id) {

    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

       this.ApiService.Deletevedios(id).subscribe(
         res => {

           this.ngOnInit();
         });

        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'


        )
      }
    })



  }

  switchLanguage(language: string) {
    this.translate.use(language);
 }
 
  updatetask(page, id) {


    this.currentPage = page;
    this.taskid = id;
    this.progressRef.start();

    this.ApiService.GetByIdvedios(id).subscribe(
      res => {
        let resources: any[] = res["data"];
        this.taskArrD = resources
    
        this.Userform.setValue({
          vedio: this.taskArrD['vedio'],
          title: this.taskArrD['title'],
         

        });
        this.imgPath=this.taskArrD['vedio']
        this.imgSrc= this.imageHost + this.taskArrD['vedio']
        this.progressRef.complete();


      });

  }


  resetForm() {
    this.Userform.reset();
    this.imgSrc = "assets/images/image-placeholder.jpg";    
    this.selectedImage = null;
    this.imgPath = null;
    this.isSubmitted = false;
  }


  showPreview(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsUploadVideo(this.selectedImage).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath =  filePath
          this.isSubmitted =  true

          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc = "assets/images/image-placeholder.jpg";
      this.selectedImage = null;
      this.imgPath = null;
      this.progressRef.complete();


    }
  }



  showPage(page: string) {
    this.currentPage = page;
    this.ngOnInit()
    this.resetForm();

  }

  popupCenter  (url, title, w, h)  {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, title, 
      `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )

    if (window.focus) newWindow.focus();
}
   

  


}

