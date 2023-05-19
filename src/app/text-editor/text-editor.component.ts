import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  eventLog: string = '';
  events = [
    {"key": "c"},
  {"key": "o"},
  {"key": "n"},
  {"key": "s"},
  {"key": "t"},
  {"key": " "},
  {"key": "S"},
  {"key": "h"},
  {"key": "o"},
  {"key": "p"},
  {"key": "p"},
  {"key": "i"},
  {"key": "n"},
  {"key": "g"},
  {"key": " "},
  {"key": "C"},
  {"key": "a"},
  {"key": "r"},
  {"key": "t"},
  {"key": " "},
  {"key": "="},
  {"key": " "},
  {"key": "("},
  {"key": "p"},
  {"key": "r"},
  {"key": "o"},
  {"key": "p"},
  {"key": "s"},
  {"key": ")"},
  {"key": " "},
  {"key": "=>"},
  {"key": " "},
  {"key": "{"},
  {"key": "\n"},
  {"key": "  "},
  {"key": "return"},
  {"key": " "},
  {"key": "("},
    {"key": "\n"},

  {"key": "<"},
  {"key": "div"},
  {"key": ">"},
  {"key": "\n"},
  {"key": "    "},
  {"key": "<"},
  {"key": "h1"},
  {"key": ">"},
  {"key": "Shopping Cart Component"},
  {"key": "</h1>"},
  {"key": "\n"},
  {"key": "  "},
  {"key": "</"},
  {"key": "div"},
  {"key": ">"},
  {"key": ")"},
  {"key": ";"},
  {"key": "\n"},
  {"key": "  "},
  {"key": "// change code below this line"},
  {"key": "\n"},
  {"key": "  "},
  {"key": "// Assign Default Props to ShoppingCard Component"},
  {"key": "\n"},
  {"key": "  "},
  {"key": "ShoppingCart"},
  {"key": "."},
  {"key": "defaultProps"},
  {"key": " "},
  {"key": "="},
  {"key": " "},
  {"key": "{"},
  {"key": "\n"},
  {"key": "      "},
  {"key": "items"},
  {"key": ": "},
  {"key": "0"},
  {"key": "\n"},
  {"key": "  "},
  {"key": "}"},
  {"key": ";"},
  {"key": "\n"},
  {"key": "}"},
  {"key": ";"},
  {"key": "\n"}
    // Add more events here...
  ];
  progressPercent = 0;
  speed = 200; // progress bar speed in milliseconds
  isPaused = false;

  ngOnInit() {
    this.updateProgress();
  }

  showEvents() {
    // clear the event log
    this.eventLog = '';

    // calculate the number of events to show based on the progress bar position
    const numEvents = Math.ceil(this.events.length * (this.progressPercent / 100));

    // loop through the events and add the key code to the event log
    for (let i = 0; i < numEvents; i++) {
      const eventText = `${this.events[i].key}`;
      if (eventText === '\n') {
        this.eventLog += '\n';
      } else {
        this.eventLog += eventText;
      }
    }
  }

  updateProgress() {
    if (this.isPaused) {
      return;
    }
    this.progressPercent += 1;
    if (this.progressPercent > 100) {
      this.progressPercent = 100;
    }
    this.showEvents();

    if (this.progressPercent < 100) {
      setTimeout(() => this.updateProgress(), this.speed);
    }
  }

  pause() {
    this.isPaused = true;
  }

  play() {
    this.isPaused = false;
    this.updateProgress();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (!this.isPaused) {
      this.updateProgress();
    }
  }
}
