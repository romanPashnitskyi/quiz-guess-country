import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {QuizService} from '../quiz/quiz.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _quizService: QuizService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('participant') != null) {
            if (this._router.url === '/result') {
                return this._quizService.questionProgress === 10;
            } else {
                return true;
            }
        }
        this._router.navigate(['/register']);
        return false;
    }
}
