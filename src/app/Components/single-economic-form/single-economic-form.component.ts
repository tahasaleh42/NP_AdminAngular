import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APiService } from '../../services/api.service';
import { NotifierService } from "angular-notifier"
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-single-economic-form',
  templateUrl: './single-economic-form.component.html',
  styleUrls: ['./single-economic-form.component.scss']
})
export class SingleEconomicFormComponent implements OnInit {






  private readonly notifier: NotifierService;
  taskArr:any[];
  taskArrD:any[];
  mainid:any;
  taskid:any;
  currentPage: string = "list";
  imgSrc: string = "assets/images/image-placeholder.jpg";
  imgSrc2: string = "assets/images/image-placeholder.jpg";
  imgSrc3: string = "assets/images/image-placeholder.jpg";
  imgSrc4: string = "assets/images/image-placeholder.jpg";
  imgSrc5: string = "assets/images/image-placeholder.jpg";
  imgSrc6: string = "assets/images/image-placeholder.jpg";
  imgSrc7: string = "assets/images/image-placeholder.jpg";
  imgSrc8: string = "assets/images/image-placeholder.jpg";
  imgSrc9: string = "assets/images/image-placeholder.jpg";

  imgSrc91: string = "assets/images/image-placeholder.jpg";
  imgSrc92: string = "assets/images/image-placeholder.jpg";
  imgSrc922: string = "assets/images/image-placeholder.jpg";

  imgSrc93: string = "assets/images/image-placeholder.jpg";
  imgSrc94: string = "assets/images/image-placeholder.jpg";
  imgSrc95: string = "assets/images/image-placeholder.jpg";
  imgSrc955: string = "assets/images/image-placeholder.jpg";

  imgSrc96: string = "assets/images/image-placeholder.jpg";
  imgSrc97: string = "assets/images/image-placeholder.jpg";
  imgSrc98: string = "assets/images/image-placeholder.jpg";

  imgSrc10: string = "assets/images/image-placeholder.jpg";
  imgSrc11: string = "assets/images/image-placeholder.jpg";
  imgSrc12: string = "assets/images/image-placeholder.jpg";
  imgSrc13: string = "assets/images/image-placeholder.jpg";
  imgSrc14: string = "assets/images/image-placeholder.jpg";

  imgPath: string ;
  imgPath2: string ;
  imgPath3: string ;
  imgPath4: string ;
  imgPath5: string ;
  imgPath6: string ;
  imgPath7: string ;
  imgPath8: string ;
  imgPath9: string ;

  imgPath91: string ;
  imgPath92: string ;
  imgPath93: string ;
  imgPath922: string ;

  imgPath94: string ;
  imgPath95: string ;
  imgPath955: string ;

  imgPath96: string ;
  imgPath97: string ;
  imgPath98: string ;

  imgPath10: string ;
  imgPath11: string ;
  imgPath12: string ;
  imgPath13: string ;
  imgPath14: string ;
  p: number = 1;
  selectedImage: any = null;
  selectedImage2: any = null;
  selectedImage3: any = null;
  selectedImage4: any = null;
  selectedImage5: any = null;
  selectedImage6: any = null;
  selectedImage7: any = null;
  selectedImage8: any = null;
  selectedImage9: any = null;

  selectedImage91: any = null;
  selectedImage92: any = null;
  selectedImage922: any = null;
  selectedImage93: any = null;
  selectedImage94: any = null;
  selectedImage95: any = null;
  selectedImage955: any = null;
  selectedImage96: any = null;
  selectedImage97: any = null;
  selectedImage98: any = null;

  selectedImage10: any = null;
  selectedImage11: any = null;
  selectedImage12: any = null;
  selectedImage13: any = null;
  selectedImage14: any = null;
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

    brief_About_Yourself: new FormControl('', Validators.required),
    brief_About_TheFacility: new FormControl('', Validators.required),
    facility_Email: new FormControl('', Validators.required),
    facility_Accounts_OnSocialMedia: new FormControl('', Validators.required),
    your_position_in_thefacility: new FormControl('', Validators.required),
    total_number_of_fulltime_employees: new FormControl('', Validators.required),
    number_of_Saudi_employees: new FormControl('', Validators.required),
    number_of_female_employees: new FormControl('', Validators.required),
    number_of_branches: new FormControl('', ),
    total_sales_for_2019_in_Saudi_Riyal: new FormControl('', Validators.required),
    have_you_ever_received_money_of_an_investment_round: new FormControl('', Validators.required),
    the_name_of_the_facility: new FormControl('',  ),
    the_amount: new FormControl('',  ),
    do_you_have_partners_in_the_facility: new FormControl('', Validators.required),
    the_number_of_partners_in_the_facility: new FormControl('',  ),
    names_of_the_partners: new FormControl('', ),
   

    nationality: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    specialization: new FormControl('', Validators.required),
    employmentStatus: new FormControl('', Validators.required),
    identificationNumber: new FormControl('', Validators.required),
    homephone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
   
    statue: new FormControl('',),
    image: new FormControl('',), 
    organization_Id: new FormControl('',),
    a_summary_English_Arabic: new FormControl('',),
    level: new FormControl('',), 
    name_of_the_School: new FormControl('',),
    current_job: new FormControl('',),
    place_of_work: new FormControl('',), 
    current_place_of_residence: new FormControl('',), 

    summary: new FormControl('',),
    cV_in_Arabic: new FormControl('',),
    cV_in_English: new FormControl('',),
 /*    national_ID_card: new FormControl('',), */
    intellectual_Property_for_the_submitted_work: new FormControl('',),
    copy_of_the_first_page_of_the_nominated_work: new FormControl('',),  
    digital_copy_of_high_quality_for_the_nominated_work: new FormControl('',),
  

    a_copy_of_the_commercial_register: new FormControl('',),

    a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website: new FormControl('',),
    a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax: new FormControl('',),
    proof_of_funding_round: new FormControl('',),
    financial_statement_for_last_2_years: new FormControl('',),
 
    signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners: new FormControl('',),




    
   /*  an_electronic_copy_of_the_Novel: new FormControl('',), */
    other_documents: new FormControl('',),
    services_Id:new FormControl('',),
   /*  post_winning_commitment: new FormControl('',), */
    user_Id:new FormControl('',)


  })
  constructor(private cookieService: CookieService ,private ApiService:APiService,private progress: NgProgress,
    private router:Router ,private notifierService: NotifierService, private route: ActivatedRoute ) {
      this.notifier = notifierService;

  }

  users


  fileName: string = 'Candidates Data.xlsx';
  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredAllDiscussion);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }


  ngOnInit() {
    console.log(this.Userform);
    
    this.progressRef = this.progress.ref('myProgress');
    this.progressRef.start();
      this.mainid =  5
    this.ApiService.GetAll_NominationFormByServices(5).subscribe(
     res => {

       let resources: any[] = res["data"];
    
       console.log(resources);
       
      
       this.taskArr =resources;
       this.filteredAllDiscussion =resources;
       this.taskArrlength =resources.length;
       let filterdData = this.taskArr.filter(function(number) {
        return number.organization_Id == 0 &&number.user_Id != 0 && number.user_Id > 0;
      });
      this.filteredAllDiscussion =filterdData;
      this.taskArrlength =this.filteredAllDiscussion.length;
      this.taskArr =filterdData;
       this.progressRef.complete();

     });
     this.ApiService.GetAllUser().subscribe(
       res =>{
         this.users =res['data']
       }
     )

      this.resetForm();
  }



  fillForm(id){
     

    let singleUser = this.users.filter(function(number) {
      return number.id == id;
    });
    
    this.Userform.setValue({
      fullName: singleUser[0]['fullName'],
      nationality: singleUser[0]['nationality'],
      qualification: singleUser[0]['qualification'],
      specialization: singleUser[0]['specialization'],
      employmentStatus: singleUser[0]['employmentStatus'],
      identificationNumber: singleUser[0]['identificationNumber'],
      homephone: singleUser[0]['homephone'],
      email: singleUser[0]['email'], 
      user_Id:singleUser[0]['id'], 
      phone: singleUser[0]['phone'],
      cV_in_Arabic:  '',
    
      brief_About_Yourself:  '',
      brief_About_TheFacility:  '',
      facility_Email:  '',
      facility_Accounts_OnSocialMedia:  '',
      your_position_in_thefacility:  '',
      total_number_of_fulltime_employees:  '',
      number_of_Saudi_employees:  '',
      number_of_female_employees:  '',
      number_of_branches:  '',
      total_sales_for_2019_in_Saudi_Riyal:  '',
      have_you_ever_received_money_of_an_investment_round:  '',
      the_name_of_the_facility:  '',
      the_amount:  '',
      do_you_have_partners_in_the_facility:  '',
      the_number_of_partners_in_the_facility:  '',
      names_of_the_partners:  '',
   
      /* an_electronic_copy_of_the_Novel:  '', */
      services_Id:this.mainid,
      other_documents:  '',
      
     /*  post_winning_commitment:  '', */

      intellectual_Property_for_the_submitted_work:  '',
      current_place_of_residence: '',  
      place_of_work: '',  
      current_job: '',  
      name_of_the_School: '',  
      level: '',  
      a_summary_English_Arabic: '',  
      copy_of_the_first_page_of_the_nominated_work: '',  
     digital_copy_of_high_quality_for_the_nominated_work: '',
    
     a_copy_of_the_commercial_register: '',

     
      a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website: '',
      a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax: '',
      proof_of_funding_round: '',
      financial_statement_for_last_2_years: '',
 
      signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners: '',

      cV_in_English: '',
      statue: singleUser[0]['statue'],
      city: singleUser[0]['city'],
     /*  image: '', */
      summary: '--',
      /* national_ID_card: '', */
      organization_Id:singleUser[0]['organization_Id'],
     

     });
     
  
    
  }
  onSubmit(formValue){

    console.log(formValue);
    
     if (this.Userform.valid) {
      this.progressRef.start();
      formValue["statue"]=1
      formValue["organization_Id"]=0
       formValue["services_Id"]=5
      formValue["summary"]="--"
      formValue["cV_in_Arabic"]=this.imgPath3
      formValue["cV_in_English"]=this.imgPath4
      /* formValue["national_ID_card"]=this.imgPath5 */
      formValue["intellectual_Property_for_the_submitted_work"]=this.imgPath6
     formValue["copy_of_the_first_page_of_the_nominated_work"]=this.imgPath7  
      formValue["digital_copy_of_high_quality_for_the_nominated_work"]=this.imgPath8
 
      formValue["a_copy_of_the_commercial_register"]=this.imgPath922


       formValue["a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website"]=this.imgPath92
      formValue["a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax"]=this.imgPath93
      formValue["proof_of_funding_round"]=this.imgPath94
      formValue["financial_statement_for_last_2_years"]=this.imgPath95
      formValue["signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners"]=this.imgPath955
/*       formValue["the_originality_of_scientific_research"]=this.imgPath95
      formValue["research_Excellence"]=this.imgPath96
      formValue["research_leadership"]=this.imgPath97 */


      
      /* formValue["an_electronic_copy_of_the_Novel"]=this.imgPath11 */
      formValue["other_documents"]=this.imgPath12
     /*  formValue["image"]=this.imgPath13 */
     /*  formValue["post_winning_commitment"]=this.imgPath14 */
     
       this.ApiService.CreateNominationForm(formValue).subscribe(
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
      formValue["statue"]=1
      formValue["organization_Id"]=0
      formValue["services_Id"]=5
      formValue["summary"]='--'
      formValue["cV_in_Arabic"]=this.imgPath3
      formValue["cV_in_English"]=this.imgPath4
    /*   formValue["national_ID_card"]=this.imgPath5 */
      formValue["intellectual_Property_for_the_submitted_work"]=this.imgPath6
       formValue["copy_of_the_first_page_of_the_nominated_work"]=this.imgPath7 
      formValue["digital_copy_of_high_quality_for_the_nominated_work"]=this.imgPath8
      formValue["a_copy_of_the_commercial_register"]=this.imgPath922

       formValue["a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website"]=this.imgPath92
      formValue["a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax"]=this.imgPath93
      formValue["proof_of_funding_round"]=this.imgPath94
      formValue["financial_statement_for_last_2_years"]=this.imgPath95
      formValue["signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners"]=this.imgPath955
/*       formValue["the_originality_of_scientific_research"]=this.imgPath95
      formValue["research_Excellence"]=this.imgPath96
      formValue["research_leadership"]=this.imgPath97 */

    
     /*  formValue["an_electronic_copy_of_the_Novel"]=this.imgPath11 */
      formValue["other_documents"]=this.imgPath12
    /*   formValue["image"]=this.imgPath13 */
     /*  formValue["post_winning_commitment"]=this.imgPath14 */
    
      this.ApiService.UpdateNominationForm(formValue,this.taskid).subscribe(
        res => {


         
       
          
          
              this.notifier.notify("success", "Update successfuly");
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



  updatetask(page, id) {
    this.currentPage = page;
    this.taskid = id;
    this.progressRef.start();

   this.ApiService.GetByIdNominationForm(id).subscribe(
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


        brief_About_Yourself:  this.taskArrD['brief_About_Yourself'],
        brief_About_TheFacility:  this.taskArrD['brief_About_TheFacility'],
        facility_Email:  this.taskArrD['facility_Email'],
        facility_Accounts_OnSocialMedia:  this.taskArrD['facility_Accounts_OnSocialMedia'],
        your_position_in_thefacility:  this.taskArrD['your_position_in_thefacility'],
        total_number_of_fulltime_employees:  this.taskArrD['total_number_of_fulltime_employees'],
        number_of_Saudi_employees:  this.taskArrD['number_of_Saudi_employees'],
        number_of_female_employees:  this.taskArrD['number_of_female_employees'],
        number_of_branches:  this.taskArrD['number_of_branches'],
        total_sales_for_2019_in_Saudi_Riyal:  this.taskArrD['total_sales_for_2019_in_Saudi_Riyal'],
        have_you_ever_received_money_of_an_investment_round:  this.taskArrD['have_you_ever_received_money_of_an_investment_round'],
        the_name_of_the_facility:  this.taskArrD['the_name_of_the_facility'],
        the_amount:  this.taskArrD['the_amount'],
        do_you_have_partners_in_the_facility:  this.taskArrD['do_you_have_partners_in_the_facility'],
        the_number_of_partners_in_the_facility:  this.taskArrD['the_number_of_partners_in_the_facility'],
        names_of_the_partners:  this.taskArrD['names_of_the_partners'],

        a_summary_English_Arabic: this.taskArrD['a_summary_English_Arabic'],
        level: this.taskArrD['level'],
        name_of_the_School: this.taskArrD['name_of_the_School'],
        current_job: this.taskArrD['current_job'],
        place_of_work: this.taskArrD['place_of_work'],
        current_place_of_residence: this.taskArrD['current_place_of_residence'],
        email: this.taskArrD['email'], 
        user_Id:this.taskArrD['user_Id'], 
        phone: this.taskArrD['phone'],
        cV_in_Arabic: this.taskArrD['cV_in_Arabic'],
         /* an_electronic_copy_of_the_Novel: this.taskArrD['an_electronic_copy_of_the_Novel'], */
        services_Id:this.taskArrD['services_Id'],
        other_documents: this.taskArrD['other_documents'],
        
       /*  post_winning_commitment: this.taskArrD['post_winning_commitment'], */

        intellectual_Property_for_the_submitted_work: this.taskArrD['intellectual_Property_for_the_submitted_work'],
        copy_of_the_first_page_of_the_nominated_work: this.taskArrD['copy_of_the_first_page_of_the_nominated_work'],
          digital_copy_of_high_quality_for_the_nominated_work: this.taskArrD['digital_copy_of_high_quality_for_the_nominated_work'],
          a_copy_of_the_commercial_register: this.taskArrD['a_copy_of_the_commercial_register'],

      

        a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website: this.taskArrD['a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website'],
        a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax: this.taskArrD['a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax'],
        proof_of_funding_round: this.taskArrD['proof_of_funding_round'],
        financial_statement_for_last_2_years: this.taskArrD['financial_statement_for_last_2_years'],
        signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners: this.taskArrD['signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners'],

 
       
        cV_in_English: this.taskArrD['cV_in_English'],
        statue: this.taskArrD['statue'],
        city: this.taskArrD['city'],
        image: this.taskArrD['image'],
        summary: this.taskArrD['summary'],
     /*    national_ID_card: this.taskArrD['national_ID_card'], */
        organization_Id: this.taskArrD['organization_Id'],
       

       });
    
       this.imgPath=this.taskArrD['organization_Id']
       this.imgPath2=this.taskArrD['summary']
       this.imgPath3=this.taskArrD['cV_in_Arabic']
       this.imgPath4=this.taskArrD['cV_in_English']
     /*   this.imgPath5=this.taskArrD['national_ID_card'] */
       this.imgPath6=this.taskArrD['intellectual_Property_for_the_submitted_work']
        this.imgPath7=this.taskArrD['copy_of_the_first_page_of_the_nominated_work']
        this.imgPath8=this.taskArrD['digital_copy_of_high_quality_for_the_nominated_work']
        this.imgPath922=this.taskArrD['a_copy_of_the_commercial_register']

        this.imgPath92=this.taskArrD['a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website']
       this.imgPath93=this.taskArrD['a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax']
       this.imgPath94=this.taskArrD['proof_of_funding_round']
       this.imgPath95=this.taskArrD['financial_statement_for_last_2_years']
 
       this.imgPath955=this.taskArrD['signed_copy_of_the_Delegation_and_responsibility_consent_of_any_partners']
        /* this.imgPath11=this.taskArrD['an_electronic_copy_of_the_Novel'] */
       this.imgPath12=this.taskArrD['other_documents']
      /*  this.imgPath13=this.taskArrD['image'] */
     /*   this.imgPath14=this.taskArrD['post_winning_commitment'] */
       
       this.imgSrc= this.imageHost + this.taskArrD['organization_Id']
       /* this.imgSrc2= this.imageHost + this.taskArrD['summary'] */
       this.imgSrc3= this.imageHost + this.taskArrD['cV_in_Arabic']
       this.imgSrc4= this.imageHost + this.taskArrD['cV_in_English']
      /*  this.imgSrc5= this.imageHost + this.taskArrD['national_ID_card'] */
       this.imgSrc6= this.imageHost + this.taskArrD['intellectual_Property_for_the_submitted_work']
       this.imgSrc7= this.imageHost + this.taskArrD['copy_of_the_first_page_of_the_nominated_work']
         this.imgSrc8= this.imageHost + this.taskArrD['digital_copy_of_high_quality_for_the_nominated_work']
    
         this.imgSrc922= this.imageHost + this.taskArrD['a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website']
         this.imgSrc93= this.imageHost + this.taskArrD['a_copy_of_the_tax_declaration_from_the_General_Authority_for_Zakat_and_Tax']
         this.imgSrc94= this.imageHost + this.taskArrD['proof_of_funding_round']
         this.imgSrc95= this.imageHost + this.taskArrD['financial_statement_for_last_2_years']
         this.imgSrc955= this.imageHost + this.taskArrD['digital_copy_osigned_copy_of_the_Delegation_and_responsibility_consent_of_any_partnersf_high_quality_for_the_nominated_work']
         this.imgSrc92= this.imageHost + this.taskArrD['a_copy_of_the_facility_evaluation_from_the_Ministry_of_Human_Resources_and_Social_Development_website']
      
   
   
   
   
       /*  this.imgSrc11= this.imageHost + this.taskArrD['an_electronic_copy_of_the_Novel'] */
       this.imgSrc12= this.imageHost + this.taskArrD['other_documents']
      /*  this.imgSrc13= this.imageHost + this.taskArrD['image']
       this.imgSrc14= this.imageHost + this.taskArrD['post_winning_commitment'] */
       this.progressRef.complete();

     });

  }


  resetForm() {
    this.Userform.reset();
    this.imgSrc = "assets/images/image-placeholder.jpg";
    this.imgSrc2 = "assets/images/image-placeholder.jpg";
    this.imgSrc3 = "assets/images/image-placeholder.jpg";
    this.imgSrc4 = "assets/images/image-placeholder.jpg";
    this.imgSrc5 = "assets/images/image-placeholder.jpg";
    this.imgSrc6= "assets/images/image-placeholder.jpg";
    this.imgSrc7 = "assets/images/image-placeholder.jpg";
    this.imgSrc8 = "assets/images/image-placeholder.jpg";
    this.imgSrc9 = "assets/images/image-placeholder.jpg";
    this.imgSrc10 = "assets/images/image-placeholder.jpg";
    this.imgSrc11 = "assets/images/image-placeholder.jpg";
    this.imgSrc12 = "assets/images/image-placeholder.jpg";
    this.imgSrc13 = "assets/images/image-placeholder.jpg";
    this.imgSrc14 = "assets/images/image-placeholder.jpg";
    
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
          this.imgPath =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc = "assets/images/image-placeholder.jpg";
      this.selectedImage = null;
    }
  }
  showPreview2(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc2 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage2 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage2).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath2 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc2 = "assets/images/image-placeholder.jpg";
      this.selectedImage2 = null;
    }
  }
  showPreview3(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc3 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage3 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage3).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath3 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc3 = "assets/images/image-placeholder.jpg";
      this.selectedImage3 = null;
    }
  }
  showPreview4(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc4 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage4 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage4).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath4 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc4 = "assets/images/image-placeholder.jpg";
      this.selectedImage4 = null;
    }
  }
  showPreview5(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc5 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage5 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage5).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath5 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc5 = "assets/images/image-placeholder.jpg";
      this.selectedImage5 = null;
    }
  }
  showPreview6(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc6 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage6 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage6).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath6 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc6 = "assets/images/image-placeholder.jpg";
      this.selectedImage6 = null;
    }
  }
  showPreview7(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc7 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage7 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage7).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath7 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc7 = "assets/images/image-placeholder.jpg";
      this.selectedImage7 = null;
    }
  }
  showPreview8(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc8 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage8 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage8).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath8 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc8 = "assets/images/image-placeholder.jpg";
      this.selectedImage8 = null;
    }
  }
  showPreview9(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc9 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage9 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage9).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath9 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc9 = "assets/images/image-placeholder.jpg";
      this.selectedImage9 = null;
    }
  }

  showPreview91(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc91 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage91 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage91).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath91 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc91 = "assets/images/image-placeholder.jpg";
      this.selectedImage91 = null;
    }
  }
  showPreview92(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc92 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage92 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage92).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath92 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc92 = "assets/images/image-placeholder.jpg";
      this.selectedImage92 = null;
    }
  }

  showPreview922(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc922 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage922 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage922).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath922 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc922 = "assets/images/image-placeholder.jpg";
      this.selectedImage922 = null;
    }
  }
  showPreview93(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc93 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage93 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage93).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath93 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc93 = "assets/images/image-placeholder.jpg";
      this.selectedImage93 = null;
    }
  }
  showPreview94(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc94 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage94 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage94).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath94 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc94 = "assets/images/image-placeholder.jpg";
      this.selectedImage94 = null;
    }
  }
  showPreview95(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc95 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage95 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage95).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath95 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc95 = "assets/images/image-placeholder.jpg";
      this.selectedImage95 = null;
    }
  }

  showPreview955(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc955 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage955 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage955).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath955 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc955 = "assets/images/image-placeholder.jpg";
      this.selectedImage955 = null;
    }
  }

  showPreview96(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc96 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage96 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage96).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath96 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc96 = "assets/images/image-placeholder.jpg";
      this.selectedImage96 = null;
    }
  }
  showPreview97(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc97 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage97 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage97).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath97 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc97 = "assets/images/image-placeholder.jpg";
      this.selectedImage97 = null;
    }
  }
  showPreview98(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc98 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage98 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage98).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath98 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc98 = "assets/images/image-placeholder.jpg";
      this.selectedImage98 = null;
    }
  }
 
  showPreview10(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc10 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage10 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage10).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath10 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc10 = "assets/images/image-placeholder.jpg";
      this.selectedImage10 = null;
    }
  }
  showPreview11(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc11 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage11 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage11).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath11 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc11 = "assets/images/image-placeholder.jpg";
      this.selectedImage11 = null;
    }
  }
  showPreview12(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc12 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage12 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage12).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath12 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc12 = "assets/images/image-placeholder.jpg";
      this.selectedImage12 = null;
    }
  }
  showPreview13(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc13 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage13 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage13).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath13 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc13 = "assets/images/image-placeholder.jpg";
      this.selectedImage13 = null;
    }
  }
  showPreview14(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc14 = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage14 = event.target.files[0];
      this.progressRef.start();

      this.ApiService.UploadsPost(this.selectedImage14).subscribe(
        res => {

          let filePath: any = res["filePath"];
          this.imgPath14 =  filePath;
          this.isSubmitted =  true;
          this.progressRef.complete();

        });

    }
    else {
      this.imgSrc14 = "assets/images/image-placeholder.jpg";
      this.selectedImage14 = null;
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

        this.ApiService.DeleteNominationForm(id).subscribe(
          res => {
            this.ngOnInit();
          });

        swal.fire(
          'Deleted!',
          'Deleted Successfully',
          'success'


        )
      }
    })



  }


}




