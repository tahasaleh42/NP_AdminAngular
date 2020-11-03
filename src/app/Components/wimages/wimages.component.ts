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
  selector: 'app-wimages',
  templateUrl: './wimages.component.html',
  styleUrls: ['./wimages.component.scss']
})
export class WimagesComponent implements OnInit {



  private readonly notifier: NotifierService;
  taskArr:any[];
  taskArrD:any[];
  taskArrlength:any;
  taskid:any;
  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  p: number = 1;
  selectedImage: any = null;
  imgPath: string  = null;
  isSubmitted: boolean;
  imageHost = environment.imageUrl;
  _listFilter = '';
  filteredAllDiscussion: any[] = [];
  progressRef: NgProgressRef;
  mainid;
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
    image: new FormControl('',),
    statue: new FormControl('',),
    service_Id: new FormControl('',),

  })
  constructor(private cookieService: CookieService ,private ApiService:APiService, private route: ActivatedRoute,private progress: NgProgress, 
    private translate: TranslateService, private router:Router ,private notifierService: NotifierService ) { 
      this.notifier = notifierService;
  }

  
  ngOnInit() {

    this.mainid = +this.route.snapshot.paramMap.get('id');

    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
     this.ApiService.GetAll_Wimages("2",this.mainid).subscribe(
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
      formValue["image"]=this.imgPath;
      formValue["statue"]="2";
      formValue["service_Id"]=this.mainid;

      this.ApiService.CreatePimages(formValue).subscribe(
        res => {

         
              this.notifier.notify("success", "Add successfuly" );
              this.ngOnInit();
              this.resetForm();
              this.progressRef.complete();

              this.currentPage = "list";
          });

     }else{
      this.progressRef.complete();

      this.notifier.notify("warning", "Please fill out all fields correctly!");

     }
    
  }

  onUpdate(formValue) {
     
    if (this.Userform.valid) {
      this.progressRef.start();
      formValue["image"]=this.imgPath;
      formValue["statue"]="2";
      formValue["service_Id"]=this.mainid;

      this.ApiService.UpdatePimages(formValue,this.taskid).subscribe(
        res => {

          
              this.notifier.notify("success", "Updated Successfuly");
              this.ngOnInit();
              this.resetForm();
              this.progressRef.complete();

              this.currentPage = "list";
          });

     }else{
      this.progressRef.complete();
      this.notifier.notify("warning", "Please fill out all fields correctly!");

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

       this.ApiService.DeletePimages(id).subscribe(
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

    this.ApiService.GetByIdPimages(id).subscribe(
      res => {
        let resources: any[] = res["data"];
        this.taskArrD = resources
    
        this.Userform.setValue({
          image: this.taskArrD['image'],
          title: this.taskArrD['title'],
          statue: this.taskArrD['statue'],
          service_Id: this.taskArrD['service_Id'],

        });
        this.imgPath=this.taskArrD['image']
        this.imgSrc= this.imageHost + this.taskArrD['image']
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

      this.ApiService.UploadsPost(this.selectedImage).subscribe(
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

    }
  }



  showPage(page: string) {
    this.currentPage = page;
    this.ngOnInit()
    this.resetForm();

  }


}
