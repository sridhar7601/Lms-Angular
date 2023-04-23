
import { Component } from '@angular/core';

interface Question {
  options: string[];
  correctAnswers: string[];
}
@Component({
  selector: 'app-correct2',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponentComponent {

question:string = "Which is React function ?"
  options = [`const Car=()=> {
    return <h2>Hi, I am also a Car!</h2>;
  }`,
  `class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }`];
  selectedOptions: { correct: string[], incorrect: string[] } = { correct: [], incorrect: [] };

  animateContainer(container: string) {
    const optionsContainer = document.querySelector(`.${container}-container`);
    if (optionsContainer) {
      optionsContainer.classList.add('animated', 'pulse');
      setTimeout(() => {
        optionsContainer.classList.remove('animated', 'pulse');
      }, 500);
    }
  }


  onDragStart(event: any, option: string) {
    event.dataTransfer.setData('text/plain', option);
    event.dataTransfer.dropEffect = 'move';
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  onDrop(event: any, container: string) {
    this.animateContainer(container); // call animateContainer here

    event.preventDefault();
    const option = event.dataTransfer.getData('text/plain');
    event.target.classList.remove('over');

    if (container === 'correct') {
      this.selectedOptions.correct.push(option);
    } else {
      this.selectedOptions.incorrect.push(option);
    }

    // remove the dragged option from the options array
    const index = this.options.indexOf(option);
    if (index !== -1) {
      this.options.splice(index, 1);
    }
  }

  removeOption(option: string): void {
    const index = this.selectedOptions.correct.indexOf(option);
    if (index > -1) {
      this.selectedOptions.correct.splice(index, 1);
    } else {
      const index = this.selectedOptions.incorrect.indexOf(option);
      if (index > -1) {
        this.selectedOptions.incorrect.splice(index, 1);
      }
    }
  }

  checkAnswers() {
    console.log(this.selectedOptions);
  }

  ngOnInit(): void {}
}
