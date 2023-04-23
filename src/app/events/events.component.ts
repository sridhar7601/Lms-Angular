import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private sanitizer: DomSanitizer) { }
  unsafeUrl = 'https://legacy.reactjs.org/community/external-resources.html';
  safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.unsafeUrl);

}
