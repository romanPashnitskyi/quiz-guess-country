import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuizService} from './quiz.service';
import shuffle from '../utils';
import {Question} from '../model/question';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    constructor(private _router: Router, public _quizService: QuizService) {
    }

    ngOnInit() {
        this._quizService.questions = [];
        this._quizService.seconds = 0;
        this._quizService.questionProgress = 0;
        this._quizService.getQuestions().subscribe(
            (data: any) => {
                data.results.map((result) => {
                    const answers = shuffle(result.incorrect_answers.concat(result.correct_answer));
                    const correct = result.correct_answer;
                    const content = result.question;
                    const question: Question = new Question(answers, correct, content);
                    this._quizService.questions.push(question);
                });
                this.startTimer();
            }
        );
    }

    startTimer() {
        this._quizService.timer = setInterval(() => {
            this._quizService.seconds++;
        }, 1000);
    }

    answerQuestion(answer: string) {
        this._quizService.questions[this._quizService.questionProgress].userAnswer = answer;
        this._quizService.questionProgress++;

        if (this._quizService.questionProgress === 10) {
            clearInterval(this._quizService.timer);
            this._router.navigate(['/result']);
        }
    }
}
