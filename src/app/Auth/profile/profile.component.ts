import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier"
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {



  private readonly notifier: NotifierService;
  taskArrD:User[];

  imageHost = environment.imageUrl;
  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  p: number = 1;
  selectedImage: any = null;
  isSubmitted: boolean;
  imgPath: string ;
  loading: boolean = false;
  user_id

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
  constructor(private cookieService: CookieService ,private ApiService:APiService,
    private router:Router ,private notifierService: NotifierService, private route: ActivatedRoute ) {
    this.notifier = notifierService;

    this.user_id =localStorage.getItem("id");
    this.name = localStorage.getItem('fullName');
    this.email =  localStorage.getItem('email');
    this.image =  localStorage.getItem('image');
    this.phone =  localStorage.getItem('Phone');

  }

  name;email; phone; image ;
  ngOnInit() {
    this.loading = true;

   this.ApiService.GetByIdUser(this.user_id).subscribe(
     res => {

       let resources: User[] = res["data"];
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
       this.loading = false;

     });



    }






  onUpdate(formValue) {

    if (this.Userform.valid) {
      this.loading = true;
      formValue["image"]=this.imgPath;

      this.ApiService.UpdateUser(formValue,this.user_id).subscribe(
        res => {
          let resources: User[] = res["data"];



              localStorage.setItem("email", resources['email']);
              localStorage.setItem("firstName", resources['firstName']);
              localStorage.setItem("lastName", resources['lastName']);
              localStorage.setItem("image", resources['image']);
              localStorage.setItem("Phone", resources['phone']);

              this.notifier.notify("success", "Updated successfuly");
              this.ngOnInit();
              this.resetForm();

              this.router.navigate(['/dash/profile']).then(() => {
                window.location.reload();
              });

          },(error: any) => {

            this.notifier.notify("warning", "this Email Aleardy Registered!");

          });

     }else{

      this.notifier.notify("warning", "Please fill out all fields correctly!");

     }


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
      this.loading = true;

      this.ApiService.UploadsPost(this.selectedImage).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath =  filePath
          this.isSubmitted =  true
          this.loading = false;

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


}

