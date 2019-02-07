import {Component, OnInit} from '@angular/core';
import {QuizService} from '../quiz/quiz.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    constructor(public _quizService: QuizService, private _router: Router) {
    }

    ngOnInit() {
        this._quizService.getResult();
    }

    restart() {
        this._router.navigate(['/quiz']);
    }
}
