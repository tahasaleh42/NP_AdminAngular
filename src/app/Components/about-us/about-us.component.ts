import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier"
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  private readonly notifier: NotifierService;
  taskArr:any[];
  taskArrD:any[];

  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  imgPath: string  = null;
  p: number = 1;
  selectedImage: any = null;
  isSubmitted: boolean;
  taskArrlength:any;

  imageHost = environment.imageUrl;
  progressRef: NgProgressRef;

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
      c.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  Userform = new FormGroup({

    title: new FormControl('', Validators.required),
    titleA: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    descA: new FormControl('', Validators.required),
    faceBook: new FormControl('', Validators.required),
    instagram: new FormControl('',Validators.required),
    twitter: new FormControl('',Validators.required),
    youtube: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone1: new FormControl('',Validators.required),
    phone2: new FormControl('',),
    phone3: new FormControl('',),
    logo: new FormControl('',),
   

  })
  constructor(private cookieService: CookieService ,private ApiService:APiService, private progress: NgProgress, 
    private router:Router ,private notifierService: NotifierService, private route: ActivatedRoute ) { 
      this.notifier = notifierService;

  }

  
  ngOnInit() {
    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
    this.ApiService.GetAllAboutUs().subscribe(
     res => {

       let resources: any[] = res["data"];
       this.taskArr =resources;
       this.filteredAllDiscussion =resources;
       this.taskArrlength =resources.length;

       
     });

     this.ApiService.GetByIdAboutUs(1).subscribe(
      res => {
 
        let resources: any[] = res["data"];
 
 
        this.taskArrD = resources
        this.Userform.setValue({
          title: this.taskArrD['title'],
          titleA: this.taskArrD['titleA'],
          desc: this.taskArrD['desc'],
          descA: this.taskArrD['descA'],
          faceBook: this.taskArrD['faceBook'],
          instagram: this.taskArrD['instagram'],
          twitter: this.taskArrD['twitter'],
          youtube: this.taskArrD['youtube'],
          email: this.taskArrD['email'],
          phone1: this.taskArrD['phone1'],
          phone2: this.taskArrD['phone2'],
          phone3: this.taskArrD['phone3'],
          logo: this.taskArrD['logo'],

          
        });
        this.imgPath=this.taskArrD['logo']
        this.imgSrc= this.imageHost + this.taskArrD['logo']
 
        this.progressRef.complete();
 
      });
 


    }

  

  onUpdate(formValue) {
     
    if (this.Userform.valid) {
      this.progressRef.start();
      formValue["logo"]=this.imgPath

      this.ApiService.UpdateAboutUs(formValue,1).subscribe(
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

        this.ApiService.DeleteAboutUs(id).subscribe(
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


}
