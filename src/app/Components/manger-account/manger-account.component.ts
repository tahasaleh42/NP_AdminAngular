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
  selector: 'app-manger-account',
  templateUrl: './manger-account.component.html',
  styleUrls: ['./manger-account.component.scss']
})
export class MangerAccountComponent implements OnInit {


  private readonly notifier: NotifierService;
  taskArr:any[];
  taskArrD:any[];
  mainid:any;
  taskid:any;
  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  imgPath: string ;
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
      c.fullName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  Userform = new FormGroup({

    fullName: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    specialization: new FormControl('', Validators.required),
    employmentStatus: new FormControl('', Validators.required),
    identificationNumber: new FormControl('', Validators.required),
    homephone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    password: new FormControl('',),
    statue: new FormControl('',),
    image: new FormControl('',),
    organization_Id: new FormControl('',),

  })
  constructor(private cookieService: CookieService ,private ApiService:APiService,private progress: NgProgress,
    private router:Router ,private notifierService: NotifierService, private route: ActivatedRoute ) {
      this.notifier = notifierService;

  }


  ngOnInit() {

    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
    this.ApiService.GetAllAdmin().subscribe(
      res => {

        let resources: any[] = res["data"];

        this.taskArr =resources;
        this.filteredAllDiscussion =resources;
        this.taskArrlength =resources.length;
        this.progressRef.complete();

      });

      this.resetForm();
  }

  onSubmit(formValue){

     if (this.Userform.valid) {
      this.progressRef.start();
      formValue["statue"]=3
      formValue["organization_Id"]=0;
       formValue["image"]=this.imgPath

       this.ApiService.CreateUser(formValue).subscribe(
         res => {


               this.notifier.notify("success", "Admin Add successfuly" );
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
      formValue["organization_Id"]=0;

      this.ApiService.UpdateUser(formValue,this.taskid).subscribe(
        res => {


              this.notifier.notify("success", "Updated successfuly");
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



  updatetask(page, id) {
    this.currentPage = page;
    this.taskid = id;
    this.progressRef.start();

   this.ApiService.GetByIdUser(id).subscribe(
     res => {

       let resources: any[] = res["data"];


       this.taskArrD = resources
       this.Userform.setValue({
        fullName: this.taskArrD['fullName'],
        nationality: this.taskArrD['nationality'],
        qualification: this.taskArrD['qualification'],
        specialization: this.taskArrD['specialization'],
        employmentStatus: this.taskArrD['employmentStatus'],
        identificationNumber: this.taskArrD['identificationNumber'],
        homephone: this.taskArrD['homephone'],
        email: this.taskArrD['email'],
        phone: this.taskArrD['phone'],
        statue: this.taskArrD['statue'],
        city: this.taskArrD['city'],
        image: this.taskArrD['image'],
        organization_Id: this.taskArrD['organization_Id'],
        password: '',


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

        this.ApiService.DeleteUser(id).subscribe(
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
