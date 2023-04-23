import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-markdown-editor',
  templateUrl:"./markdown-editor.component.html",
  styleUrls: ['./markdown-editor.component.css'],
  providers: [MessageService]

})
export class MarkdownEditorComponent implements OnInit {
  @ViewChild('myIframe') myIframe: ElementRef | undefined;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) {
    this.myIframe = undefined;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    window.addEventListener('message', this.receiveMessage.bind(this));
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}
onConfirm() {
  this.messageService.clear('c');
}

onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}
  onIframeLoad() {
    if (!this.myIframe) {
      return;
    }
    const iframe = this.myIframe.nativeElement;
    iframe.contentWindow.postMessage('Hello from the parent window!', '*');
  }

  receiveMessage(event: MessageEvent): void {
    if (event.origin !== 'http://localhost:8099') {
      return;
    }
    this.showSuccess()
    alert(`Received message from React: ${event.data}`);
  }
}



// if (event.origin !== 'http://localhost:8099/') {
