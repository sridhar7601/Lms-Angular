import { Component } from '@angular/core';
import { marked } from 'marked';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
})
export class GitComponent {
  editor: HTMLTextAreaElement | null = null;
  preview: HTMLDivElement | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.editor = document.getElementById('editor') as HTMLTextAreaElement;
    this.preview = document.getElementById('preview') as HTMLDivElement;

    // Get text from another API and set it as the value of the editor textarea
    const apiUrl = 'http://localhost:3000/markdown/1';
    this.http.get(apiUrl).subscribe((response:any) => {
      if (this.editor) {
        console.log(response.markdown_text, '25')
        this.editor.value = response.markdown_text
        // console.log()
        this.renderMarkdown();
      }
    });

  }

  renderMarkdown() {
    if (this.preview && this.editor) {
      const request = new XMLHttpRequest();
      const url = 'https://api.github.com/markdown/raw';
      const accessToken = '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';
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
      request.setRequestHeader('Authorization', 'token ' + accessToken);
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200 && this.preview) {
          this.preview.innerHTML = request.responseText;
        }
      };
      const markdown = this.editor.value;
      request.send(markdown);
    }
  }

  onEditorInput() {
    this.renderMarkdown();
  }
}

