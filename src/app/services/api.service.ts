import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Observable, of, } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class APiService {

  endpoint = environment.apiHost;
  user_id: string;
  token: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.token = localStorage.getItem("token")
  }


  httpOptions = {
    headers: new HttpHeaders({
      'content': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
    })
  }


  /*************************************User***************************************************/

  login(body): Observable<User> {
    return this.http.post<User>(this.endpoint + '/api/User/login', body, this.httpOptions)
  }

  loginAdmin(body): Observable<any> {

    return this.http.post(this.endpoint + '/api/User/loginAdmin', body, this.httpOptions)
  }

  CreateUser(body): Observable<any> {
    return this.http.post(this.endpoint +'/api/User/Register', body, this.httpOptions)
  }

  UpdateUser(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/User/Update/${id}`, body, this.httpOptions)
  }

  DeleteUser(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/User/Delete/${id}`, this.httpOptions)
  }

  GetAllAdmin(): Observable<User> {
    return this.http.get<User>(this.endpoint + '/api/User/GetAllAdmin', this.httpOptions);
  }

  GetAllRestAdmin(store_Id): Observable<User> {
    return this.http.get<User>(this.endpoint + `/api/User/GetAllStoreAdmin/${store_Id}`, this.httpOptions);
  }

  GetAllUser(): Observable<User> {
    return this.http.get<User>(this.endpoint + '/api/User/GetAll', this.httpOptions);
  }

  GetAllbyOrg(Organization_Id): Observable<User> {
    return this.http.get<User>(this.endpoint + '/api/User/GetAllbyOrg/' + Organization_Id, this.httpOptions);
  }


  GetByIdUser(id): Observable<User> {
    return this.http.get<User>(this.endpoint + `/api/User/GetById/${id}`, this.httpOptions);
  }

  // GetAllUser(): Observable<User> {
  //   return this.http.get<User>(this.endpoint + '/api/User/GetAll', this.httpOptions).pipe(
  //     map(b => <User>{
  //       FullName: b.FirstName + b.LastName,
  //       statue: b.statue
  //     }),
  //     tap(classicUser => console.log(classicUser))
  //   );
  // }

  /*************************************Uploads**********************************************/

  UploadsPost(body): Observable<any> {


    const formData = new FormData();
    formData.append("myFile", body);

    return this.http.post(this.endpoint + '/api/Uploads/Post', formData, this.httpOptions)
  }

  UploadsUploadFile(body): Observable<any> {

    const formData = new FormData();
    formData.append("myFile", body);

    return this.http.post(this.endpoint + '/api/Uploads/UploadFile', formData, this.httpOptions)
  }

  UploadsUploadVideo(body): Observable<any> {

    const formData = new FormData();
    formData.append("myFile", body);

    return this.http.post(this.endpoint + '/api/Uploads/UploadVideo', formData, this.httpOptions)
  }

  /*************************************AboutUs*************************************************/

  GetAllAboutUs(): Observable<any> {
    return this.http.get(this.endpoint + '/api/AboutUs/GetAll', this.httpOptions);
  }


  GetByIdAboutUs(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/AboutUs/GetById/${id}`, this.httpOptions);
  }

  CreateAboutUs(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/AboutUs/Create`, body, this.httpOptions)
  }

  UpdateAboutUs(body,id ): Observable<any> {

    return this.http.put(this.endpoint + `/api/AboutUs/Update/${id}`, body, this.httpOptions)
  }

  DeleteAboutUs(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/AboutUs/Delete/${id}`, this.httpOptions)
  }



  /************************************ContactUs**************************************************/


  GetAllContactUs(statue ): Observable<any> {
    return this.http.get(this.endpoint + '/api/ContactUs/GetAll/'+statue , this.httpOptions);
  }

  GetAll_comment(statue,team_Id ): Observable<any> {
    return this.http.get(this.endpoint + '/api/ContactUs/GetAll_comment?statue='+statue+'&team_Id='+team_Id , this.httpOptions);
  }



  GetByIdContactUs(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/ContactUs/GetById/${id}`, this.httpOptions);
  }

  CreateContactUs(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/ContactUs/Create`, body, this.httpOptions)
  }

  UpdateContactUs(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/ContactUs/Update/${id}`, body, this.httpOptions)
  }

  DeleteContactUs(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/ContactUs/Delete/${id}`, this.httpOptions)
  }

  /************************************TeamMemmber**************************************************/

  GetAllTeamMemmber(): Observable<any> {
    return this.http.get(this.endpoint + '/api/TeamMemmber/GetAll', this.httpOptions);
  }


  GetByIdTeamMemmber(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/TeamMemmber/GetById/${id}`, this.httpOptions);
  }

  CreateTeamMemmber(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/TeamMemmber/Create`, body, this.httpOptions)
  }

  UpdateTeamMemmber(body,id ): Observable<any> {

    return this.http.put(this.endpoint + `/api/TeamMemmber/Update/${id}`, body, this.httpOptions)
  }

  DeleteTeamMemmber(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/TeamMemmber/Delete/${id}`, this.httpOptions)
  }
  /**************************************Terms**************************************************/

  GetAllTerms(): Observable<any> {
    return this.http.get(this.endpoint + '/api/Terms/GetAll', this.httpOptions);
  }


  GetByIdTerms(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Terms/GetById/${id}`, this.httpOptions);
  }

  CreateTerms(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/Terms/Create`, body, this.httpOptions)
  }

  UpdateTerms(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Terms/Update/${id}`, body, this.httpOptions)
  }

  DeleteTerms(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Terms/Delete/${id}`, this.httpOptions)
  }

  /**************************************Pimages**************************************************/

  GetAllPimages(statue ): Observable<any> {
    return this.http.get(this.endpoint + '/api/Pimages/GetAll/'+statue , this.httpOptions);
  }


  GetAll_Wimages(statue,Service_Id ): Observable<any> {
    return this.http.get(this.endpoint + '/api/Pimages/GetAll_Wimages?statue='+statue+'&Service_Id='+Service_Id , this.httpOptions);
  }


  GetByIdPimages(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/Pimages/GetById/${id}`, this.httpOptions);
  }

  CreatePimages(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/Pimages/Create`, body, this.httpOptions)
  }

  UpdatePimages(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/Pimages/Update/${id}`, body, this.httpOptions)
  }

  DeletePimages(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/Pimages/Delete/${id}`, this.httpOptions)
  }




  /**************************************vedios**************************************************/

  GetAllvedios(): Observable<any> {
    return this.http.get(this.endpoint + '/api/vedios/GetAll' , this.httpOptions);
  }


  GetByIdvedios(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/vedios/GetById/${id}`, this.httpOptions);
  }

  Createvedios(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/vedios/Create`, body, this.httpOptions)
  }

  Updatevedios(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/vedios/Update/${id}`, body, this.httpOptions)
  }

  Deletevedios(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/vedios/Delete/${id}`, this.httpOptions)
  }

  /**************************************ourServices**************************************************/

  GetAllourServices(statue): Observable<any> {
    return this.http.get(this.endpoint + '/api/ourServices/GetAll/'+statue , this.httpOptions);
  }


  GetByIdourServices(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/ourServices/GetById/${id}`, this.httpOptions);
  }

  CreateourServices(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/ourServices/Create`, body, this.httpOptions)
  }

  UpdateourServices(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/ourServices/Update/${id}`, body, this.httpOptions)
  }

  DeleteourServices(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/ourServices/Delete/${id}`, this.httpOptions)
  }

  /**************************************NominationForm**************************************************/

  GetAllNominationForm(): Observable<any> {
    return this.http.get(this.endpoint + '/api/NominationForm/GetAll' , this.httpOptions);
  }
  GetAll_NominationFormByServices(Services_Id): Observable<any> {
    return this.http.get(this.endpoint + '/api/NominationForm/GetAll_NominationFormByServices?Services_Id='+Services_Id , this.httpOptions);
  }
  GetAll_NominationFormByuser_Id(user_Id): Observable<any> {
    return this.http.get(this.endpoint + '/api/NominationForm/GetAll_NominationFormByuser_Id?user_Id'+user_Id , this.httpOptions);
  }

  GetByIdNominationForm(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/NominationForm/GetById/${id}`, this.httpOptions);
  }

  CreateNominationForm(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/NominationForm/Create`, body, this.httpOptions)
  }

  UpdateNominationForm(body,id): Observable<any> {

    return this.http.put(this.endpoint + `/api/NominationForm/Update/${id}`, body, this.httpOptions)
  }

  DeleteNominationForm(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/NominationForm/Delete/${id}`, this.httpOptions)
  }
/************************************MainPlace**************************************************/


GetAllMainPlace(): Observable<any> {
  return this.http.get(this.endpoint + '/api/MainPlace/GetAll', this.httpOptions);
}


GetByIdMainPlace(id): Observable<any> {
  return this.http.get(this.endpoint + `/api/MainPlace/GetById/${id}`, this.httpOptions);
}

CreateMainPlace(body): Observable<any> {

  return this.http.post(this.endpoint + `/api/MainPlace/Create`, body, this.httpOptions)
}

UpdateMainPlace(body, id): Observable<any> {

  return this.http.put(this.endpoint + `/api/MainPlace/Update/${id}`, body, this.httpOptions)
}

DeleteMainPlace(id): Observable<any> {

  return this.http.delete(this.endpoint + `/api/MainPlace/Delete/${id}`, this.httpOptions)
}


  /************************************City**************************************************/


  GetAllCity(place_Id): Observable<any> {
    return this.http.get(this.endpoint + `/api/City/GetAll/${place_Id}`, this.httpOptions);
  }


  GetByIdCity(id): Observable<any> {
    return this.http.get(this.endpoint + `/api/City/GetById/${id}`, this.httpOptions);
  }

  CreateCity(body): Observable<any> {

    return this.http.post(this.endpoint + `/api/City/Create`, body, this.httpOptions)
  }

  UpdateCity(body, id): Observable<any> {

    return this.http.put(this.endpoint + `/api/City/Update/${id}`, body, this.httpOptions)
  }

  DeleteCity(id): Observable<any> {

    return this.http.delete(this.endpoint + `/api/City/Delete/${id}`, this.httpOptions)
  }

/************************************Organizations**************************************************/


GetAllOrganizations(): Observable<any> {
  return this.http.get(this.endpoint + '/api/Organizations/GetAll', this.httpOptions);
}


GetByIdOrganizations(id): Observable<any> {
  return this.http.get(this.endpoint + `/api/Organizations/GetById/${id}`, this.httpOptions);
}

CreateOrganizations(body): Observable<any> {

  return this.http.post(this.endpoint + `/api/Organizations/Create`, body, this.httpOptions)
}

UpdateOrganizations(body, id): Observable<any> {

  return this.http.put(this.endpoint + `/api/Organizations/Update/${id}`, body, this.httpOptions)
}

DeleteOrganizations(id): Observable<any> {

  return this.http.delete(this.endpoint + `/api/Organizations/Delete/${id}`, this.httpOptions)
}



}
