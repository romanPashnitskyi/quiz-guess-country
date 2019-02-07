import {Component, OnInit} from '@angular/core';
import {QuizService} from '../quiz/quiz.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    constructor(private _quizService: QuizService, private _router: Router) {
    }

    ngOnInit() {
    }

    onSubmit(name: string, email: string) {
        this._quizService.insertParticipant(name, email)
            .subscribe(
                () => {
                    localStorage.clear();
                    localStorage.setItem('participant', JSON.stringify(name));
                    this._router.navigate(['/quiz']);
                }
            );
    }
}
