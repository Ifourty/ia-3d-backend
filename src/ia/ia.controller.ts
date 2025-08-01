import { Controller, Get, Post } from '@nestjs/common';
import { IaService } from './ia.service';

@Controller('ia')
export class IaController {
    constructor(private readonly iaService: IaService) {}

    @Get('test')
    testEndpoint(): { answer: string } {
        const result = this.iaService.testFunction();
        return {
            answer: result
        };
    }
    
}
