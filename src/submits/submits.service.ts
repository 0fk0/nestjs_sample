import { Injectable } from '@nestjs/common';
import { SubmitType } from './submit.interface';

@Injectable()
export class SubmitsService {
    private readonly submits: SubmitType[] = [];

    findAll(): SubmitType[] {
        return this.submits;
    }

    submit(submit: SubmitType) {
        let min: number = 0;
        let max: number = 100;
        submit.evaluation = Math.floor(Math.random() * (max - min) + min);
        this.submits.push(submit);
    }
}
