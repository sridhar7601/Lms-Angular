import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wheel-spin',
  templateUrl: './wheel-spin.component.html',
  styleUrls: ['./wheel-spin.component.css']
})
export class WheelSpinComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private landedIndex: number | null = null;

  private ctx!: CanvasRenderingContext2D;
  private colors = [
    '#ECD078',
    '#D95B43',
    '#C02942',
    '#542437',
    '#53777A',
    '#303E3E'
  ];
  private questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 0
    },
    {
      question: 'What is the largest country in the world?',
      options: ['Russia', 'China', 'USA', 'Canada'],
      answer: 0
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Dollar', 'Euro', 'Pound'],
      answer: 0
    },
    {
      question: 'Who is the current president of the United States?',
      options: ['Joe Biden', 'Donald Trump', 'Barack Obama', 'George W. Bush'],
      answer: 0
    },
    {
      question: 'What is the highest mountain in the world?',
      options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount Fuji', 'Mount McKinley'],
      answer: 0
    }
  ];
  private currentQuestionIndex: number | null = null;
  public currentQuestion: any;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.drawWheel();
  }

  spin(): void {
    const spin = Math.floor(Math.random() * this.colors.length);
    TweenMax.to(this.canvas.nativeElement, 5, {
      rotation: `+=${360 * 5 + 60 * spin}`,
      ease: 'Quint.easeOut',
      onComplete: () => {
        window.alert(`You landed on option ${spin + 1}!`);
        this.landedIndex = spin;
        this.drawWheel();
        this.currentQuestionIndex = spin;
    this.currentQuestion = this.questions[spin];
      }
    });
  }
  submitAnswer(): void {
    const selectedOption = parseInt((document.querySelector('input[name="quiz-option"]:checked') as HTMLInputElement).value, 10);
    if (selectedOption === this.currentQuestion.answer) {
      window.alert('Correct!');
    } else {
      window.alert('Incorrect. Please try again.');
    }
  }

  drawWheel(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = this.ctx;

    // Remove the landed color from the array
    if (this.landedIndex !== null) {
      this.colors.splice(this.landedIndex, 1);
      this.landedIndex = null;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.font = 'bold 16px Arial';

    for (let i = 0; i < this.colors.length; i++) {
      const startAngle = i * Math.PI / (this.colors.length / 2);
      const endAngle = (i + 1) * Math.PI / (this.colors.length / 2);

      ctx.beginPath();
      ctx.fillStyle = this.colors[i];
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(canvas.width / 2, canvas.height / 2, 100, startAngle, endAngle);
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.fill();
      ctx.stroke();

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(`Option ${i + 1}`, 80, 0);
      ctx.restore();
    }
  }

}

