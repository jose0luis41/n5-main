import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {fromEvent} from "rxjs";

@Component({
  selector: 'mf-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'mf-main';
  language$ = fromEvent(window, 'language');

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    const languageSaved = sessionStorage.getItem('language');
    this.translate.use(languageSaved as string);
    this.language$.subscribe((l: any) =>{
      const value = l['detail']['answer'];
      console.log('GOT EVENT', value);
      this.translate.use(value);
    });
  }
}
