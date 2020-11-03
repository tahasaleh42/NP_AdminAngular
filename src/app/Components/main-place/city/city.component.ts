import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../../services/api.service';
import { NotifierService } from "angular-notifier"
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  private readonly notifier: NotifierService;
  taskArr:any[];
  taskArrD:any[];
  mainid:any;
  taskid:any;
  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  imgPath: string  = null;
  p: number = 1;
  selectedImage: any = null;
  isSubmitted: boolean;
  taskArrlength:any;
  loading: boolean = false;
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
      c.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }



  lat: number = 23;
  lng: number =  53;
  latx: number = 0;
  lngx: number = 0;
  locationChosen = false;
  mapClick(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }
  closeResult: string;

  Userform = new FormGroup({

    title: new FormControl('', Validators.required),
    titleA: new FormControl('', Validators.required),
    Longitude: new FormControl('', Validators.required),
    Latitude: new FormControl('' , Validators.required),
    place_Id: new FormControl('' , )



  })
  constructor(private cookieService: CookieService , private ApiService:APiService,private progress: NgProgress, private modalService: NgbModal,
    private router:Router ,private notifierService: NotifierService, private route: ActivatedRoute ) {
      this.notifier = notifierService;

  }


  ngOnInit() {
    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
   this.mainid = +this.route.snapshot.paramMap.get('id');

   this.ApiService.GetAllCity(this.mainid).subscribe(
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
       formValue["place_Id"]=this.mainid
       this.ApiService.CreateCity(formValue).subscribe(
         res => {


               this.notifier.notify("success", "Add successfuly" );
               this.ngOnInit();
               this.resetForm();

               this.currentPage = "list";
           });

      }else{

       this.notifier.notify("warning", "Please fill out all fields correctly!");

      }

  }


  onUpdate(formValue) {

    if (this.Userform.valid) {
      this.progressRef.start();
      this.ApiService.UpdateCity(formValue,this.taskid).subscribe(
        res => {


              this.notifier.notify("success", "Updated Successfuly");
              this.ngOnInit();
              this.resetForm();

              this.currentPage = "list";
          });

     }else{

      this.notifier.notify("warning", "Please fill out all fields correctly!");

     }


  }



  updatetask(page, id) {
    this.currentPage = page;
    this.taskid = id;
    this.progressRef.start();

   this.ApiService.GetByIdCity(id).subscribe(
     res => {

       let resources: any[] = res["data"];


       this.taskArrD = resources
       this.Userform.setValue({

         title: this.taskArrD['title'],
         titleA: this.taskArrD['titleA'],
         Longitude: this.taskArrD['longitude'],
         Latitude: this.taskArrD['latitude'],
         place_Id: this.taskArrD['place_Id'],

       });
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

      this.ApiService.UploadsPost(this.selectedImage).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath =  filePath
          this.isSubmitted =  true

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

        this.ApiService.DeleteCity(id).subscribe(
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

  // Open default modal
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  mapDone() {
    this.lngx = this.lng
    this.latx = this.lat

  }

}
