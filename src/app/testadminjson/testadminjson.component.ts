import { Component } from '@angular/core';

@Component({
  selector: 'app-testadminjson',
  templateUrl: './testadminjson.component.html',
  styleUrls: ['./testadminjson.component.css']
})
export class TestadminjsonComponent {
  inputText: string = '';
  events: any[] = [];

  convertToEvents() {
    this.events = [];
    for (let i = 0; i < this.inputText.length; i++) {
      let key = this.inputText.charAt(i);
      if (key === '\n') {
        this.events.push({key: '\n'});
      } else {
        this.events.push({key: key});
      }
    }
  }
}
