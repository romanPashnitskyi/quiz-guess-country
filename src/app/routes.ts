import {Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {QuizComponent} from './quiz/quiz.component';
import {AuthGuard} from './auth/auth.guard';
import {ResultComponent} from './result/result.component';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/register', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'quiz', component: QuizComponent, canActivate: [AuthGuard]},
    {path: 'result', component: ResultComponent, canActivate: [AuthGuard]}
];

