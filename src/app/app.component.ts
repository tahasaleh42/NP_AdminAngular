import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><ng-progress id="myProgress"></ng-progress> <notifier-container></notifier-container>'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");

  }



  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
