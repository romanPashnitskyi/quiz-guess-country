import {Component, OnInit} from '@angular/core';
import {QuizService} from '../quiz/quiz.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private _quizService: QuizService, private _router: Router) {
    }

    ngOnInit() {
    }

    SignOut() {
        localStorage.clear();
        clearInterval(this._quizService.timer);
        this._router.navigate(['/register']);
    }
}
