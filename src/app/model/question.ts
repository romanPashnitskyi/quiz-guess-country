export class Question {

    constructor(private answers: string[], private correct: string | number, private content: string, public userAnswer?: string) {
    }

    getQuestion() {
        return this.content;
    }

    getAnswers() {
        return this.answers;
    }

    getCorrectAnswer() {
        return this.correct;
    }

    getUserAnswer() {
        return this.userAnswer;
    }
}
