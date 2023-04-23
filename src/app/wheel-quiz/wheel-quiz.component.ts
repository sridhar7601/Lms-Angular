import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wheel-quiz',
  templateUrl: './wheel-quiz.component.html',
  styleUrls: ['./wheel-quiz.component.css']
})
export class WheelQuizComponent {
  quizIndex: number = 1; // Default quiz index is 1
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Amsterdam', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
      answer: 'Jupiter'
    },
    {
      question: 'What is the highest mountain in the world?',
      options: ['Mount Everest', 'Kilimanjaro', 'Denali', 'K2'],
      answer: 'Mount Everest'
    },
    {
      question: 'What is the largest ocean in the world?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      answer: 'Pacific Ocean'
    },
    {
      question: 'What is the name of the world\'s largest desert?',
      options: ['Sahara Desert', 'Gobi Desert', 'Kalahari Desert', 'Arabian Desert'],
      answer: 'Sahara Desert'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.quizIndex = Number(params.get('id')) || 1;
    });
  }

  get quiz(): any {
    return this.questions[this.quizIndex - 1];
  }

  isAnsweredCorrectly(option: string): boolean {
    return option === this.quiz.answer;
  }
}
