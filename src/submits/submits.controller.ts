import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubmitsService } from './submits.service';
import { SubmitType } from './submit.interface';

@Controller('submits')
export class SubmitsController {
    constructor(private submitService: SubmitsService){}

    @Get()
    findAll(){
        return this.submitService.findAll();
    }
    @Post()
    submit(@Body() submit: SubmitType): void {
        return this.submitService.submit(submit);
    }
}
