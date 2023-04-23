import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-specific-content',
  templateUrl: './specific-content.component.html',
  styleUrls: ['./specific-content.component.css'],
})
export class SpecificContentComponent {



  selectedId!: any;
  subtopic!: any;
  // week:any
  response: any;
  morecontent: any[] = [];
  // ids:any;
  topics!: any;
  isLoading = false;

  // textResources: { [title: string]: Resource[] } = {};
  // videoResources: { [title: string]: Resource[] } = {};
  constructor(
    private sharedData: SharedDataService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
  isCodeCorrect = true;
  refresh() {
    this.selectedId = this.sharedData.selectedId;
    console.log(this.selectedId, 'selectedId');
    this.sharedData.getsubtopic(this.selectedId).subscribe((res: any) => {
      this.topics = res;
      console.log(this.topics, 'week');
      // this.groupResourcesByTitle();
    });
    // make API call or render component 2 based on the selected ID
  }
  getVideoUrl(url: string): SafeResourceUrl {
    const videoId = url.split('v=')[1];
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  getIframeUrl(url:string):SafeResourceUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

  async more(more: any, base: any,click:any) {

    this.isLoading = false;

    const body = { question: more };
    console.log('body', body);
    console.log('body', base);

    this.http
      .post<any>('http://localhost:3001/question', body)
      .pipe(
        tap((response) => {
          this.saveResponseToFile(response);
          console.log(response, '46');
        }),
        catchError((error) => {
          if(click.target.id == base){
            this.morecontent = [];

          // console.log(error.error.text,"error 55");
          this.morecontent.push(error.error.text);
          this.morecontent.push(base);
          this.isLoading = false;
          console.log(this.morecontent, 'error 55');
          }

          // this.ids = id;
          throw error;
        })
      )
      .subscribe((data) => {
        this.response = data;
        console.log(this.response, '52');
      });

  }

  private saveResponseToFile(response: any) {
    const json = JSON.stringify(response);
    console.log(json, '67json');
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'response.json';
    anchor.href = url;
    anchor.click();
  }
}
