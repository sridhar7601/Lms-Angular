import { Component } from '@angular/core';

@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css']
})
export class CodemirrorComponent {
  jsxCode: string = '';
  compiledCode: string = '';

  onCodeChange(value: string) {
    this.jsxCode = value;
  }

  compileCode() {
    try {
      const compiled = Babel.transform(this.jsxCode, {
        presets: ['react'],
      }).code;
      this.compiledCode = compiled;
    } catch (error) {
      console.error('Error compiling code:', error);
    }
  }
}
