import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.css']
})
export class StackblitzComponent {
  constructor(private sanitizer: DomSanitizer) { }
   unsafeUrl = 'https://stackblitz.com/edit/angular-wrtzjv?file=src%2Fmain.ts';
   safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);

}
